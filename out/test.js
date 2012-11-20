this.popupPanelTmpl=function anonymous($data,$getValue) {
var $getValue=function getValue(v, $data){
 return $data.hasOwnProperty(v) ? $data[v] : global[v];
 };
var ret= $getValue("ret", $data),panelId= $getValue("panelId", $data),title= $getValue("title", $data),titleText= $getValue("titleText", $data),html= $getValue("html", $data),buttons= $getValue("buttons", $data),i= $getValue("i", $data),footerText= $getValue("footerText", $data),ret = "";ret +=" <header> <button cmd=\"closePopupPanel\" param=\"";
ret +=panelId;
ret +="\" class=\"panelCloseButton\">X</button> <h1 title=\"";
ret +=title;
ret +="\">";
ret +=titleText;
ret +="</h1> </header> <section> ";
ret +=html;
ret +=" </section>";
 if(buttons){ 
ret +=" <footer> ";
 for(var i in buttons){ 
ret +=" <button cmd=\"";
ret +=buttons[i].cmd;
ret +="\" param=\"";
ret +=panelId;
ret +="\" class=\"panelButton\">";
ret +=buttons[i].text;
ret +="</button> ";
 } 
ret +=" </footer>";
 } 
 if(footerText){ 
ret +=" <footer> ";
ret += footerText;
ret +=" </footer>";
 } 
return ret;
}
this.loginPanel=function anonymous($data,$getValue) {
var $getValue=function getValue(v, $data){
 return $data.hasOwnProperty(v) ? $data[v] : global[v];
 };
var ret = "";ret +="<form> <p class=\"uidArea\"><input id=\"loginUid\" class=\"input\" placeholder=\"USERNAME\" title=\"USERNAME\" cmd=\"validate\"><span class=\"tips\"></span></p> <p class=\"pwdArea\"><input id=\"loginPwd\" type=\"password\" class=\"input\" placeholder=\"PASSWORD\" title=\"PASSWORD\" cmd=\"validate\"><span class=\"tips\"></span></p> <p class=\"buttonArea\"><button cmd=\"login\" class=\"panelButton\">登　录</button></p></form>";
return ret;
}
this.signupPanel=function anonymous($data,$getValue) {
var $getValue=function getValue(v, $data){
 return $data.hasOwnProperty(v) ? $data[v] : global[v];
 };
var ret = "";ret +="<form> <p class=\"uidArea\"><input id=\"signupUid\" class=\"input\" placeholder=\"USERNAME\" title=\"USERNAME\" cmd=\"validate\"><span class=\"tips\"></span></p> <p><input id=\"signupPwd\" type=\"password\" class=\"input\" placeholder=\"PASSWORD\" title=\"PASSWORD\" cmd=\"validate\"><span class=\"tips\"></span></p> <p><input id=\"signupConfirmPwd\" type=\"password\" class=\"input\" placeholder=\"CONFIRM PASSWORD\" title=\"CONFIRM PASSWORD\" cmd=\"validate\"><span class=\"tips\"></span></p> <p><input id=\"signupEmail\" type=\"email\" class=\"input\" placeholder=\"EMAIL\" title=\"EMAIL\" cmd=\"validate\"><span class=\"tips\"></span></p> <p><button cmd=\"signup\" class=\"panelButton\">注　册</button></p></form>";
return ret;
}
this.robotSetting=function anonymous($data,$getValue) {
var $getValue=function getValue(v, $data){
 return $data.hasOwnProperty(v) ? $data[v] : global[v];
 };
var ret = "";ret +="<form> <fieldset> <legend><h3>系统设置</h3></legend> <dl> <dt><input id=\"sound\" name=\"sound\" type=\"checkbox\" checked=\"checked\" /></dt> <dd><label for=\"sound\">声音</label></dd> <dt><input id=\"radar\" name=\"radar\" type=\"checkbox\" checked=\"checked\" /></dt> <dd><label for=\"radar\">显示雷达扫描范围</label></dd> <dt><input id=\"msgBox\" name=\"msgBox\" type=\"checkbox\" checked=\"checked\" /></dt> <dd><label for=\"msgBox\">显示对话气泡</label></dd> </dl> </fieldset> <fieldset> <legend><h3>战场设置</h3></legend> <div class=\"row\"> <h4>背景</h4> <div id=\"battlegroundList\" class=\"battlegroundList\" cmd=\"void\"></div> <h4>尺寸</h4> <ul id=\"battleSizeList\" class=\"battleSizeList\"></ul> </div> </fieldset></form>";
return ret;
}