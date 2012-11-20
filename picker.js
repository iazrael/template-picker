var fs = require('fs'),
	path = require('path'),
	nf = require('node-file')
	;
var jstemplate = require('./jstemplate.js'),
	ztool = require('./ztool.js')
	;

var DEFAULT_CONFIG = {
	source: null,
	target: './',
	template: null,
	tmplFuncPlaceholder: '/*%HtmlTemplateFunctions%*/',
	compressWhitespace: false
}

var tmplRegexp = /<script\s*id="([^"]+)"\s*type="text\/template"\s*>([\s\S]*?)<\/script>/ig;
var tmplRegexp2 = /<script\s*type="text\/template"\s*id="([^"]+)"\s*>([\s\S]*?)<\/script>/ig;

var result;

var readConfig = function(config){
	if(ztool.isString(config)){
        var content = fs.readFileSync(config).toString();
        config = ztool.jsonParse(content);
    }
    config = ztool.merge({}, DEFAULT_CONFIG, config);
    if(ztool.isString(config.source)){
    	config.source = [config.source];
    }
    return config;
}

var pickup = function(tid, tmpl){
	tmpl = tmpl.replace(/\n|\r/g, '');
	var func = jstemplate.compile(tmpl);
	func = 'this.' + tid + '=' + func.toString();
	result.push(func);
}

var exec = function(configFile){
	var content, fileName;
	var config = readConfig(configFile);
	result = [];
	// console.log(config);
	for(var i = 0; i < config.source.length; i++) {
		fileName = config.source[i];
		content = fs.readFileSync(fileName).toString();
		content = content.replace(tmplRegexp, function(m, $1, $2){
			return pickup($1, $2) || '';
		});
		content = content.replace(tmplRegexp2, function(m, $1, $2){
			return pickup($2, $1) || '';
		});

		fileName = path.join(config.target, path.basename(fileName));
		console.log(fileName);
		nf.writeFileSync(fileName, content);
	}
	content = result.join('\n');
	if(config.compressWhitespace){
		content = content.replace(/[\t ]+/g, ' ');
	}
	var tmpl = fs.readFileSync(config.template).toString();
	tmpl = tmpl.replace(config.tmplFuncPlaceholder, content);
	fileName = path.join(config.target, path.basename(config.template));
	nf.writeFileSync(fileName, content);
}

if(process.argv.length < 2){
	//非命令行启动，而是 js 的require
	exports.exec = exec;
}else{
	exec(process.argv[2]);
}
