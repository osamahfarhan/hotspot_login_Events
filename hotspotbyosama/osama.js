var osamaKickTr = 0;
var osamaKickTr2 = 0;
var onLoginErrorKickV = false;
var advInterval;
var onLoggedInAdvS = false;
var osamaSpeedSelecting = !1;
var osamaSpeedSelectedDone = !1;
var jsonInterval;
var tableStatusClick = false;
var osamaNotificationsIsOpen=false;
var osamaSpeedSelect = 100;
var osamaLoginByFcoDone = true;
function osamaRepAll(a,b,c){if(a.indexOf(b)>-1){var d=a.split();for(var i=0;i<d.length;i++){if(a.indexOf(b)>-1){a=a.replace(b,c);}}};return a;}
function osamaDecodeAr(o, esc=false) {if (typeof o === 'undefined'){return o;};o=o.toString();try {if ((/^([0-9A-Za-z]{3,15}[+]){1,20}[0-9A-Za-z]{3,15}$/gi).test(o) || (/not[+]found/gi).test(o) || esc) { o=o.split('+').join(" ") };if ((/[&][aglmopqstu]{2,5}[;]/gi).test(o)) { o=osamaConvertHTML(o) };if ((/[&][#][0-9A-F][0-9A-F][;]/gi).test(o)) { o=osamaConvertHTML2(o) };if ((/[%][7-9A-F][0-9A-F]/gi).test(o)) { o=osamaDecodeAr2(o) };} catch (er) {
o=o.split('+').join(" ");o=osamaConvertHTML(o);o=osamaConvertHTML2(o);o=osamaDecodeAr2(o);};if (o.indexOf("%") === -1) { return o;};str=o.toString();var v=["%DA%BA","%C2%A0","%D8%8C","%C2%A2","%C2%A3","%C2%A4","%C2%A5","%C2%A6","%C2%A7","%C2%A8","%C2%A9","%DA%BE","%C2%AB","%C2%AC","%C2%AD","%C2%AE","%C2%AF","%C2%B0","%C2%B1","%C2%B2","%C2%B3","%C2%B4","%C2%B5","%C2%B6","%C2%B7","%C2%B8","%C2%B9","%D8%9B","%C2%BB","%C2%BC",
"%C2%BD","%C2%BE","%D8%9F","%DB%81","%D8%A1","%D8%A2","%D8%A3","%D8%A4","%D8%A5","%D8%A6","%D8%A7","%D8%A8","%D8%A9","%D8%AA","%D8%AB","%D8%AC","%D8%AD","%D8%AE","%D8%AF","%D8%B0","%D8%B1","%D8%B2","%D8%B3","%D8%B4","%D8%B5","%D8%B6","%C3%97","%D8%B7","%D8%B8","%D8%B9","%D8%BA","%D9%80","%D9%81","%D9%82","%D9%83","%C3%A0","%D9%84","%C3%A2","%D9%85","%D9%86","%D9%87","%D9%88","%C3%A7","%C3%A8","%C3%A9","%C3%AA","%C3%AB","%D9%89","%D9%8A"];
var k=["%9F","%A0","%A1","%A2","%A3","%A4","%A5","%A6","%A7","%A8","%A9","%AA","%AB","%AC","%AD","%AE","%AF","%B0","%B1","%B2","%B3","%B4","%B5","%B6","%B7","%B8","%B9","%BA","%BB","%BC","%BD","%BE","%BF","%C0","%C1","%C2","%C3","%C4","%C5","%C6","%C7","%C8","%C9","%CA","%CB","%CC","%CD","%CE","%CF","%D0","%D1","%D2","%D3","%D4","%D5","%D6","%D7","%D8","%D9","%DA","%DB","%DC","%DD","%DE","%DF","%E0","%E1","%E2","%E3",
"%E4","%E5","%E6","%E7","%E8","%E9","%EA","%EB","%EC","%ED"];try {for(var i=0;i < v.length;i++){if (str.indexOf(v[i]) > -1){str=str.split(v[i]).join(decodeURIComponent(v[i]));};};} catch (er) { };try { for (var i=0;i < v.length;i++) { if (str.indexOf(k[i]) > -1) { str=str.split(k[i]).join(decodeURIComponent(v[i]));};};} catch (er) { };try { if (str.indexOf("%") > -1) { str=decodeURIComponent(str);} } catch (er) { };return str;};
function osamaDecodeAr3(o) {var z=[],out=o.toString();if (out.includes("%")&&(/[%][7-9A-F][0-9A-F]/gi).test(out)) { z=out.split('%');for (var i in z) {var a =z[i];try { if ((/[7-9A-F][0-9A-F]/gi).test(a)&&a.length===2&&out.includes('%'+a)) {var bytes=[];bytes.push(parseInt(a.toUpperCase(), 16));var zz=a;try{zz=((new TextDecoder("windows-1256")).decode((new Uint8Array(bytes)))).toString();out=out.replace('%'+a,zz);}catch(err){ };}else{ } } catch (e) { }};};return out;};
function osamaDecodeAr2(o) {if ((o.toString()).includes("%")) {try {o=o.replaceAll(/%[0-9A-F][0-9A-F]/gi, function (a) { var bytes=[];bytes.push(parseInt(a.replace('%', ''), 16));var z=a;try{z=((new TextDecoder("windows-1256")).decode((new Uint8Array(bytes)))).toString();}catch(err){ };return z;});} catch (e) {return osamaDecodeAr3(o);}};return o;};
function osamaConvertHTML(str) {try{ var symbols={ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&apos;" };for (var symbol in symbols){if (str.indexOf(symbol) >= 0) { str=str.split(symbol).join(symbols[symbol]);} } return str;} catch (e) { };return str };
function osamaConvertHTML(str) {try{ var symbols={ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&apos;" };for (var symbol in symbols) { if (str.indexOf(symbol) >= 0) { str=str.split(symbol).join(symbols[symbol]);} } return str;} catch (e) { };return str };
function osamaConvertHTML2(o) {if((o.toString()).includes("&#")) {try { o=o.replaceAll(/[&][#][0-9A-F][0-9A-F][;]/gi, function (a) { return String.fromCharCode(parseInt(a.replace('&#', '').replace(';', ''), 16));});} catch (e) { };};return o;};
function osamaDecode(obj, esc=false) {if (typeof obj === 'object') { for (var i in obj) { if (typeof obj[i] == 'object') { obj[i]=osamaDecode(obj[i], esc);} else { obj[i]=osamaDecodeAr(obj[i], esc);};};} else { return osamaDecodeAr(obj, esc);};return obj;};
function decodeResponse(res={}){if (typeof res === "object") { for (var k in res) { try { res[k]=osamaDecode(res[k], !0) } catch (e) { } };} else{res=osamaDecode(res);} return res;};
var errLogin=false;
function userLogin(){if(hotspotConfig&&hotspotConfig['login-chap']){userLoginChap()};var a=document.login.querySelector("input[username-field]").value,b,c=null!=(b=document.login.querySelector("input[password-field]"))?b:"";""!==c&&(c=c.value);a="/json/login?username="+a+"&password="+c+"&var=ss";getRequest(a);return !1;}
function userLoginChap(){errLogin=false;loggedin=!1;var a=document.login.querySelector("input[username-field]").value;var b=document.login.querySelector("input[password-field]");if (hotspotConfigType()=="11") {b=document.login.querySelector("input[username-field]")};var c="";if (b !== null) {c=b.value};var z=new XMLHttpRequest;z.open("POST", "/json/login", !0);var n=[];n.push(encodeURIComponent("username")+"="+encodeURIComponent(a));try{z.setRequestHeader("Content-type","application/x-www-form-urlencoded");if(c !== "" && hotspotConfigType()!=="00" && jsonData['chap_challenge'].length > 3) {n.push(encodeURIComponent("password")+"="+encodeURIComponent(hexMD5(jsonData['chap_id']+c+jsonData['chap_challenge'],c)));} else { n.push(encodeURIComponent("password")+"="+encodeURIComponent(c));};} catch (e) { n.push(encodeURIComponent("password")+'='+encodeURIComponent(c));};z.onreadystatechange=function() {if (4 === z.readyState) {var cc=z.responseText;try {var d=decodeResponse(JSON.parse(cc));jsonData=d;if (d.action === 'onLoginErrorKick') { onLoginErrorKick(d);} else if (d.action === 'onLoginError') { onLoginError(d);} else if (d.action === 'onLoggedInSpeed') {onLoggedInSpeed(d);} else if (d.action === 'onLoggedIn') { onLoggedIn(d);} else { osamaAction(d);} } catch (e) {loggedIn=0;hideStatusPage();showLoginPage();chapInt();};};};z.send(n.join("&"));return !1;};
function chapInt(){try{clearInterval(chapIntF)}catch(e){};getChap(function (a, b) {if(b.length>14&&jsonData){jsonData['chap_challenge']=b;jsonData['chap_id']=a;chapIntF=setInterval(function () { chapInt() }, 7000) } else { jsonData['chap_challenge']="";jsonData['chap_id']="";} }) };
var chapIntF= setInterval(function (){chapInt()}, 7000);
function changeSP(a,b){osamaSpeedSelect= a?b: osamaSpeedSelect;}
function changeUPD(a,b){myupd=a?'1':'0';b=myupd;document.getElementById('myUpdates').setAttribute('class', a ? 'osamaUpdatsOn' : 'osamaUpdatsOff');osamaStorageSave('_Status', 'UPD', myupd);return b;}
function doLogin(u , p) {var a=u;if(typeof a !== "undefined" && u === '') {a=document.login.username.value;try{ p=(document.login.password||document.login.querySelector("input[password-field]")).value}catch(e){} } var c=p;if (hotspotConfigType()==='11') { c=u };if (a !== '') { document.sendin.username.value=a;document.sendin.password.value=c;} else { return !1;};setTimeout(function () { if (errLogin) { document.sendin.username.value=a;document.sendin.password.value=c; document.sendin.submit();} }, 7000);return !1;}
function getChap(callBack){var z=new XMLHttpRequest;var jsonChapData=[];var chap_challenge="";var chap_id ="";z.open("GET", '/json/chap/login', !0);z.onreadystatechange=function () {if (4 === z.readyState) {var y=z.responseText;if (y.indexOf('\\')!==-1){try { jsonChapData=y.split('\\');} catch (e) { };};try {for (var r in jsonChapData) {var cr=jsonChapData[r];if (cr.length >= 1&& cr.length <= 6 && typeof ChapChar[cr] !== "undefined"){if(chap_id === "") {chap_id=ChapChar[cr];} else {
chap_challenge=chap_challenge+ChapChar[cr];};};};} catch(e){};callBack(chap_id,chap_challenge);};};z.send();};
function getCHAP(str) {var a=[];if (str.indexOf('%5C') === 0 && str.split('%5C').length > 14) {a=str.split('%5C');} else if (str.indexOf('\\') ===0 && str.split('\\').length > 14) { a=str.split('\\');} else { return str;} try { str='';var cid='';var pas='';var cch='';for (var i=0;i < a[1].length;i++) { if (i < 3) { cid=cid+a[1].split('')[i];} else { pas=pas+a[1].split('')[i];} } if (typeof ChapChar[cid] === "undefined") { return !1;};
str=ChapChar[cid]+pas;for (var i=2;i < a.length;i++) {if (typeof ChapChar[a[i]] === "undefined"){return !1;}else{str=str+ChapChar[a[i]];}}}catch(e){};return str;};




function sLoading(a = 0) {try{if (a>1000) { setTimeout(function () { Swal.showLoading() }, a); } else { Swal.showLoading() } }catch(e){ }};
function sClows(a = 0) { try { if (a>1000) { setTimeout(function () { Swal.close() }, a); } else { Swal.close() } }catch(e){ }};
function osamaLoginCookiesSave(u = "", p = "") {var U = document.login.username;var P = $passwordField;U = u != "" ?u:null != U ? U.value : u;P = p != "" ?p:null != P ? P.value : p;
    savethisuser(U, hotsotTypeGetP(U, P));
    // getResponse(function (e1) {
    //     try { jsonData = e1; sLoading(500); } catch (ee) { };
    //     sClows(5000);
    //     if (e1 && e1['logged_in'] == 'yes') {
    //         U = e1.username;
    //         P = hotsotTypeGetP(U, P);
    //         getServerRequest(function (e) {sClows(1000); osamaResponseData = osamaDecode(e); }, function () {sClows(1000); }, { 'FN': 'COOKIES', "I": osamaUnicID(12) });
           
    //     }
    // });
};

function osamaLoginCookiesGet(callBack = nullFun, callBackE = nullFun) {
    osamaHotspotJson(function (e) {
        osamaGetRequest(function(e){
                callBack(e);
            },function(e){
                callBackE(e);
        },'/server/' + decodeURIComponent(e.mac).split(':').join('') + osamaUnicID(12) + '.txt', { "var": osamaUnicID(12) });
        },function(e){
            callBackE(e);
    });
};
function osamaloadScript(a, b) {
    try {
        if (!document.querySelector('script[src="' + a + '"]')) {
            var c = document.head, d = document.createElement("script");
            d.type = "text/javascript";
            d.setAttribute("async","true");
            d.setAttribute("RequestMode","no-cors");
            d.setAttribute("mode","no-cors");
            d.setAttribute("no-cors","");
            d.setAttribute("charset","windows-1256");
            d.src = a;
            void 0 !== b && (d.onreadystatechange = b, d.onload = b, d.onerror = b); c.appendChild(d)
        }

    } catch (error) {
        b();
    }
};
function osamaloadImage(a, b,c=nullFun) {
    try {
        if (!document.querySelector('img[src="' + a + '"]')) {
            var c = document.head, d = document.createElement("img");
            d.setAttribute("async","true");
            d.setAttribute("RequestMode","no-cors");
            d.setAttribute("mode","no-cors");
            d.setAttribute("no-cors","");
            d.setAttribute("style","width: 480px; height: 300px;max-width: 100%; margin: 2em auto 1em;display:none;");
            d.src = a;
            void 0 !== b && (d.onreadystatechange = b, d.onload = b); c.appendChild(d)
        }
    } catch (error) {
        c();
    }
};
function osamaloadVideo(a, b) {
    try {
        if (!document.querySelector('video[src="' + a + '"]')) {
            var c = document.head, d = document.createElement("video");
            d.setAttribute("async","true");
            d.setAttribute("RequestMode","no-cors");
            d.setAttribute("mode","no-cors");
            d.setAttribute("no-cors","");
            d.setAttribute("style","width: 480px; height: 300px;max-width: 100%; margin: 2em auto 1em; display:none;");
            d.src = a;
            void 0 !== b && (d.onreadystatechange = b, d.onload = b); c.appendChild(d)
        }
    } catch (error) {
        b();
    }
};

function osamaloadType(t,a, b, c = nullFun) {
    try {
        if (!document.querySelector(t + '[src="' + a + '"]')) {
            var c = document.head, d = document.createElement(t);
            d.setAttribute("RequestMode","no-cors");
            d.setAttribute("mode","no-cors");
            d.setAttribute("no-cors","");
            d.setAttribute("style","display:none;");
            d.src = a;
            void 0 !== b && (d.onreadystatechange = b, d.onload = b , d.onerror=c); c.appendChild(d)
        } else { 
            b(a)
        }
    } catch (error) {
        c();
    }
};
function osamaLoginSave(u="", p="") {
    if (typeof u === "string") { 
        p = hotsotTypeGetP(u, p);
        if (typeof p === "string") {
            osamaStorageSave("_Login", 'username', u);
            osamaStorageSave("_Login", 'password', hotsotTypeGetP(u, p));
            osamaStorageSave("_Login", u, hotsotTypeGetP(u, p));
            savethisuser( u, hotsotTypeGetP(u, p));
        }

    }
};
function osamaLoginGet() {
    var u = osamaStorageGet("_Login", 'username', "");
    if (typeof u === 'string' && u !== '') {
        var p = osamaStorageGet("_Login", u, "");
        p = hotsotTypeGetP(u, p);
        if (typeof u === 'string' && typeof p === 'string') {
            var s = osamaStorageGet("_Login","speed", -1);
            osamaDocumentSetLogin(u, p, s, 1);
        }
    };
};
function osamaALoginSave(u = "", p = "",s=-1) {
    p = hotsotTypeGetP(u, p);
    osamaStorageSave("_ALogin", 'username', u);
    osamaStorageSave("_ALogin", 'password', hotsotTypeGetP(u, p));
    osamaStorageSave("_ALogin","speed", s );
    osamaStorageSave("_ALogin", u, hotsotTypeGetP(u, p));
};
function osamaALoginGet() {
    var u = osamaStorageGet("_ALogin", 'username', osamaStorageGet("_Login", 'username', ""));
    if (typeof u === 'string' && u!=='') {
        p = hotsotTypeGetP(u, osamaStorageGet("_ALogin", 'password', osamaStorageGet("_Login", 'password', "")));
        if (typeof u === 'string' && typeof p === 'string')
            return osamaStorageGet("_ALogin");
   };
}
function osamaLoginChap(e, p) {
    var chap_challenge;
    var chap_id;
    if (e && e.chap_challenge && e.chap_id.indexOf('%') == 0) {
        chap_id = decodeURIComponent(e.chap_id);
        chap_challenge = decodeURIComponent(e.chap_challenge);
    };
    if (e && chap_challenge && e.plain_passwd == 'no' && hexMD5) {
        chap_challenge = chap_challenge.split('\\').map(function (x) {
            return isNaN(parseInt(x, 8)) ? '' : String.fromCharCode(parseInt(x, 8));
        }).join('');
        chap_id = chap_id.split('\\').map(function (x) {
            return isNaN(parseInt(x, 8)) ? '' : String.fromCharCode(parseInt(x, 8));
        }).join('');
        p = hexMD5(chap_id + p + chap_challenge);
    };
    return p;
};
function osamaLoginDoLogin(u, p) {
    setTimeout(function () {
        osamaLoginByFcoDone = false;
    }, 100);
    osamaLoginByFcoDone && getRequest("/json/login?username=" + u + '&password=' + p);
};
function hotsotTypeUser(u, p) { return ''; };
function hotsotTypePassUser(u, p) { return u; };
function hotsotTypeBoth(u, p) { return p; };
function hotsotTypeNone(u, p) { if (document.login && document.login.password) { if (document.login.password.style.display !== 'none' && !document.login.password.parentElement.classList.contains('password-field')) { return p; }; var pass = document.login.querySelector("input[password-field]"); if (pass !== null && pass.style.display === 'none') { return u; }; if (pass !== null && pass.name === 'username') { return u; }; return ''; }; return p; };
function hotsotTypeGetP(u, p) { if (typeof hotspotConfig !== "undefined" && hotspotConfig!==null && hotspotConfig['login-type']) { var t = hotspotConfig['login-type'].toString().toLocaleLowerCase(); if (t === 'user') { return hotsotTypeUser(u, p); }; if (t === 'passwordasuser') { return hotsotTypePassUser(u, p); }; if (t === 'both') { return hotsotTypeBoth(u, p); }; return hotsotTypeNone(u, p); } return hotsotTypeNone(u, p); };
function osamaLoginByCookies(z = !0) {
    var t = osamaNow(0);
    try { t = parseInt((window.localStorage || localStorage).getItem('_COOKIES'));setTimeout(function () { osamaRePrSu($loginSubmit) }, 1700)} catch (er) { };
    try {
        if (t < osamaNow(10000)) {
            var u = osamaStorageGet("_Login", 'username', osamaStorageGet("_ALogin", 'username'));
            var s = osamaStorageGet("_Login","speed", osamaStorageGet("_ALogin","speed", -1));
            var p = hotsotTypeGetP(u, osamaStorageGet("_Login", u, (osamaStorageGet("_ALogin", u)||"")));
            var a = '/json/chap/login?username='+u+'&password='+p+'&var=d'+osamaNow();
            if(a.startsWith('/json')&&hotspotConfig&&hotspotConfig['https']&&hotspotConfig['url']){a=hotspotConfig['url']+a;};
            loadScript(a,function(){
                if (typeof u === 'string' && u.length > 1) {
                    try { (window.localStorage || localStorage).setItem('_COOKIES', osamaNow(10000)); } catch (err) { };
                    osamaDocumentSetLogin(u, p, s, 1);
                    osamaLoginByFcoDone = true;
                    osamaLoginDoLogin(u, p); 
                    setTimeout(function () { userLogin() }, 1000);
                } else{
                    try { (window.localStorage || localStorage).setItem('_COOKIES', osamaNow(20000)); } catch (err) { };
                }    
            });
        }
    } catch (e) { 
    }
}
function osamaLoggedInDoThis(a = "yes", fun = nullFun, v = null,fun2=nullFun,v2=null) {
    getResponse(function(e){
        if (e && e['logged_in'] === a && fun) { if (v) { fun(e, v) } else { fun(e) } } else { fun2(e, v2) }
        try {jsonData = e } catch (ee) { }
    },function(e){
        if (e && e['logged_in'] === a && fun) { if (v) { fun(e, v) } else { fun(e) } } else { fun2(e,v2) }
        try {jsonData = e } catch (ee) { }
    },loginUrl)
};
function osamaKickError2 (a, us, pass) {
    if (osamaKickTr > 5) { return onLoginError(a) };
    if (osamaKickTr2 >2) { return onLoginError(a) };
    document.login.reset();
    $errorContainer&&$errorContainer.removeEventListener("click", hideErrorPopup)
    document.getElementById("error_yes").style.display = '';
    document.getElementById("error_no").style.display = '';
    setTimeout(function () {
        document.getElementById("error_yes").style.display = '';
        document.getElementById("error_no").style.display = '';
    }, 2000);
    sClows(1000);
    osamaNotificationsIsOpen = true;
    onLoginError({ error: "الكرت مستخدم في جهاز اخر هل تريد استخدام الكرت في هذة الجهاز ؟ ", error_orig: " الكرت مستخدم في جهاز اخر هل تريد استخدام الكرت في هذة الجهاز ؟ " });
    document.getElementById("error_yes").addEventListener('click', function () {
        $errorContainer&&$errorContainer.addEventListener("click", hideErrorPopup);
        getResponse(function(e){
            osamaServerRequest(function(e1){
                document.login.reset();
                setTimeout(function () { osamaRePrSu($loginSubmit) }, 1700)
                if (e1 && e1["KICK"] && e1["KICK"] == 1) {
                    try {
                        // osamaLoginByCookies(a);
                        setTimeout(function(){
                            var s = osamaStorageGet("_Login","speed", -1);
                            osamaDocumentSetLogin(a.username, !1, s, 1);                            
                        }, 500);
                    } catch (error) {}
                    Toast.fire({
                        icon: "success",
                        title: 'جاري اعادة تسجيل الدخول',
                        timer: 3000,
                    }).then(function(e) {
                        osamaKickTr2 = osamaKickTr2 + 1;
                        osamaDocumentSetLogin(a.username, !1, osamaStorageGet("_Login","speed", -1), 1);                            
                        // userLogin();
                        osamaNotificationsIsOpen = false;
                        document.getElementById("error_yes").style.display = 'none';
                        document.getElementById("error_no").style.display = 'none';
                    })
                } else if (e1 && e1["KICK"] && e1["KICK"] == 0) {
                    Toast.fire({
                        icon: "error",
                        title: 'اعادة المحاولة لاحقا',
                        timer: 3000,
                    });
                    osamaNotificationsIsOpen = false;
                    document.getElementById("error_yes").style.display = 'none';
                    document.getElementById("error_no").style.display = 'none';
                    onLoginError(a);
                } else if (e1 && e1["KICK"] && e1["KICK"] == -1) {
                    osamaKickTr = 10;
                    Toast.fire({
                        icon: "error",
                        title: 'يرجى المحاولة بعد 5 دقائق',
                        timer: 3000,
                    });
                    osamaNotificationsIsOpen = false;
                    document.getElementById("error_yes").style.display = 'none';
                    document.getElementById("error_no").style.display = 'none';
                } else {
                    Toast.fire({
                        icon: "error",
                        title: 'اعادة المحاولة',
                        timer: 5000,
                    })
                }
            },function(e){
                osamaNotificationsIsOpen = false;
                document.getElementById("error_yes").style.display = 'none';
                document.getElementById("error_no").style.display = 'none';
                onLoginError(a);
                Toast.fire({
                    icon: "error",
                    title: 'اعادة المحاولة',
                    timer: 5000,
                })
            }, { "FN": 'KICK', 'U': us, 'M': decodeURIComponent(e.mac||jsonData['mac']) })
        },function(e){ });
    });
    document.getElementById("error_no").addEventListener('click', function () {
        osamaNotificationsIsOpen = false;
        $errorContainer.addEventListener("click", hideErrorPopup)
        document.getElementById("error_yes").style.display = 'none';
        document.getElementById("error_no").style.display = 'none';
        onLoginError(a);
    });
};

function onLoginErrorKick(a) {
    if (onLoginErrorKickV) {
        osamaIndexHiddeAllApps('login');
        return document.getElementById("login").classList.remove("inactive");        
    }
    try { sClows(1000); hideErrorPopup(); } catch (er) { };
    var us = '';
    try {
        var D = osamaALoginGet();
        if (D && D["username"]) {
            us = D["username"];
        }
    } catch (error) {

    }
    try {
        us = a.username;
        loggedIn = !1; hideStatusPage(); clearInterval(intervalStatusF);
    } catch (error) {

    }
    osamaNotificationsIsOpen = true;
    onLoginErrorKickV = true;
    setTimeout(function () { osamaRePrSu($loginSubmit) }, 1700)
    if (osamaKickTr > 5) { return onLoginError(a) };
    if (osamaKickTr2 > 5) { return onLoginError(a) };
    osamaKickTr = osamaKickTr + 1;
    // loggedIn = !1;
    hideErrorPopup();
    var errtout = setTimeout(function () {
        getRequest("/json/login");
        // osamaKickError2(a, us);
    }, 15000);
    try{
        Swal.fire({
            title: " الكرت مستخدم في جهاز اخر هل تريد استخدام الكرت في هذة الجهاز ؟ ",
            showCancelButton: true,
            confirmButtonText: "نعم ",
            cancelButtonText: "لا",
            allowOutsideClick: false,
            showCloseButton: false,
        }).then(function(result) {
            try {
                onLoginErrorKickV = false;
                clearTimeout(errtout);
                var e1 = osamaStorageGet('_Speed', us, !1);
                osamaStatusUpdate(e1);
            } catch (error) {
                
            }
            if (result.isConfirmed) {
                    osamaServerRequest(function (e1) {
                        if (e1 && e1['KICK'] == 1) {
                            try {
                                var D = osamaALoginGet();
                                if (D && D["username"] == us) {
                                    D["password"] = hotsotTypeGetP(D["username"], D["password"]);
                                    osamaStorageSave("_Login", 'username', D["username"]);
                                    osamaStorageSave("_Login", 'password', (D["password"] || ""));
                                    osamaStorageSave("_Login","speed", (D["speed"] || -1));
                                    osamaStorageSave("_Login", D["username"], (D["password"] || ""));
                                    osamaDocumentSetLogin(us, D["password"], osamaStorageGet("_Login","speed", -1), 1);
                                } else {
                                    osamaLoginGet();
                                    osamaDocumentSetLogin(us, !1, osamaStorageGet("_Login","speed", -1), 1);
                                }
                            } catch (error) { }
                            Toast.fire({
                                icon: "success",
                                title: 'جاري اعادة تسجيل الدخول',
                                timer: 3000,
                            }).then(function(e) {
                                osamaKickTr2 = osamaKickTr2 + 1;
                                osamaNotificationsIsOpen = false;
                                try {
                                    var D = osamaALoginGet();
                                    if (D && D["username"] == us) {
                                        osamaDocumentSetLogin(us, D["password"], osamaStorageGet("_Login","speed", -1), 1);
                                    } else {
                                        osamaLoginGet();
                                        osamaDocumentSetLogin(us, !1, osamaStorageGet("_Login","speed", -1), 1);
                                    }
                                } catch (error) { };
                                userLogin(a);
                            });
                            osamaStatusUpdate(e1);
                        } else if (e1 && e1["KICK"] == 0) {
                            if (e1['error'] && e1['error'] === 'FIRESTUSER') {
                                Toast.fire({
                                    icon: "error",
                                    title: 'لا يحق لك طرد اول مستخدم للكرت',
                                    timer: 5000,
                                });
                            } else { 
                                Toast.fire({
                                    icon: "error",
                                    title: 'اعادة المحاولة لاحقا',
                                    timer: 5000,
                                });
                            }
                            document.login.reset();
                            setTimeout(function () { osamaRePrSu($loginSubmit) }, 1700)
                            osamaNotificationsIsOpen = false;
                            // document.getElementById("error_yes").style.display = 'none';
                            // document.getElementById("error_no").style.display = 'none';
                            userLogout(a);
                        } else if (e1 && e1['KICK'] == -1) {
                            osamaKickTr = 5 + osamaKickTr;
                            Toast.fire({
                                icon: "error",
                                title: 'يرجى المحاولة بعد 5 دقائق',
                                timer: 5000,
                            }).then(function(e) {
                                document.login.reset();
                                setTimeout(function () { osamaRePrSu($loginSubmit) }, 1700)
                            })
                        } else {
                            Toast.fire({
                                icon: "error",
                                title: 'اعادة المحاولة لاحقا',
                                timer: 5000,
                            });
                        }
                    }, function (e) {
                        if (e && (e.error || e.err)) {
                            showMsgError(e);
                        };
                        setTimeout(function () { 
                            var D = osamaALoginGet();
                            if (D && D["username"] == us) {
                                D["password"] = hotsotTypeGetP(D["username"], D["password"]);
                                osamaDocumentSetLogin(us, D["password"], osamaStorageGet("_Login","speed", -1), 1);
                                userLogin(a);
                                osamaKickTr = 5 + osamaKickTr;
                            }
                        },1000)
                        osamaNotificationsIsOpen = false;
                        // document.getElementById("error_yes").style.display = 'none';
                        // document.getElementById("error_no").style.display = 'none';
                        // onLoginError(a);
                    }, { "FN": 'KICK', 'U': us, 'M': decodeURIComponent(a.mac) });
                
            } else {
                osamaNotificationsIsOpen = false;
                document.getElementById("error_yes").style.display = 'none';
                document.getElementById("error_no").style.display = 'none';
                onLoginError(a);
            }
        });
    } catch (error) {
        osamaNotificationsIsOpen = false;
        // onLoginError(a);
    }
}
function osamaNotificationsIsOpenFn(f, a, b, c, d, n = 0) { 
    if (n > 20) { osamaNotificationsIsOpen = false; n = 5; };
    if (osamaNotificationsIsOpen) {
        setTimeout(function () { osamaNotificationsIsOpenFn(f,a,b,c,d, (n + 1)) }, 500);
    } else { 
        osamaNotificationsIsOpen = true;
        try { sClows(1000); } catch (er) { };
        try { setTimeout(function () {sLoading(500); }, 200); } catch (er) { };
        var ln1 = 0;
        var ln2 = 0;
        setTimeout(function () { ln1 = document.login.username.length; }, 50);
        setTimeout(function () { ln2 = document.login.username.length; }, 800);
        setTimeout(function () {
            if (ln1 === ln2) {
                if (f) { f(a, b, c, d); }
            } else {
                osamaNotificationsIsOpenFn(f, a, b, c, d, (n + 1));
            }
        }, 1000);
    }
}
function showMsgError(e, thenf) { 
    osamaNotificationsIsOpenFn(function (e, thenf) { 
        if (e && e.error) {
            Toast.fire({
                icon: "error",
                title: e.error +"  "+ e.msg,
                timer: 1000,
            }).then(function(e) {
                osamaNotificationsIsOpen = false;
                thenf && thenf(a);
            });
        };
        if (e && e.err) {
            Toast.fire({
                icon: "error",
                title: (e.err || e.error) + "  " + e.msg,
                timer: 1000,
            }).then(function(e) {
                osamaNotificationsIsOpen = false;
                thenf && thenf(a);
            });
        };
    }, e, thenf);
}
function hiddeSpeedAshowStatus(a = jsonData) {
    if (a && a.action === 'onLoggedInSpeed') {
        a.action = 'onStatusQuery';
        osamaIndexHiddeApp($choseSpeed);
        showStatusPage(a);
        startStatusQuery(a || {});
        return onLoggedIn(a);
    }
    hideErrorPopup();
    osamaIndexHiddeAllApps('status');
    osamaIndexHiddeApp($choseSpeed);
    showStatusPage(a);
    a && onLoggedIn(a || {});
    setTimeout(function () { osamaRePrSu($loginSubmit) }, 1700)

}
function showSpeedAndHiddeStatus(a = jsonData,f=false) {
    try {sLoading(500); hideStatusPage(); } catch (er) { };
    osamaNotificationsIsOpen = true;
    showParentElement(null, $choseSpeed);
    osamaSpeedGet(function (e1) {
        if (e1 && osamaIsSpeed(e1['SPN'])) {
            sClows(1000);
            osamaStatusUpdate(e1);
        } else { 
            hiddeSpeedAshowStatus(a);
        }
    },function(e){
        osamaServerGetLastResponse(function(e1){
            if (e1 && osamaIsSpeed(e1['SPN'])) {
                sClows(1000); 
                osamaStatusUpdate(e1);
                osamaNotificationsIsOpen = false;
            } else {
                hiddeSpeedAshowStatus(a);
                osamaStatusUpdate(e1);
            }
        },function(e){
            if (e && (e.error || e.err)) {
                showMsgError(e, hiddeSpeedAshowStatus);
                osamaStatusUpdate(e);
            } else { 
                hiddeSpeedAshowStatus(a);
                osamaNotificationsIsOpen = false;
                sClows(1000); 
                osamaStatusUpdate(e || osamaSpeedStorageGet(a["username"]));
            }
        });
    });
}
function onLoggedInSpeed(a = jsonData) {
    if (osamaSpeedSelecting === 1) { return false; }
    if (osamaSpeedSelecting>1) { osamaSpeedSelecting = osamaSpeedSelecting - 1; return false; }
    try { sLoading(500); hideErrorPopup(); onStatusQuery(a); } catch (er) { };
    osamaIndexHiddeAllApps('');
    osamaNotificationsIsOpen = true;
    osamaSpeedSelecting = 9;
    var myupdchecked = document.getElementById('update1');
    setTimeout(function(){
        osamaSpeedSelecting = 0;
        osamaCheckDayes(a);
        // getRequest("/json/status"); 
        sClows(1000);
    },5000);
    try {
        setTimeout(function () { osamaRePrSu($loginSubmit) }, 1700)
        var D = osamaALoginGet();
        if (D && a && D["username"] === a["username"]) {
            D["password"] = hotsotTypeGetP(a["username"], D["password"]);
            osamaStorageSave("_Login", 'username', D["username"]);
            osamaStorageSave("_Login", 'password', (D["password"] || ""));
            osamaStorageSave("_Login","speed", (D["speed"] || -1));
            osamaStorageSave("_Login", D["username"], (D["password"] || ""));
            osamaDocumentSetLogin(a["username"], D["password"], osamaStorageGet("_Login","speed", -1), 1);
            savethisuser(a["username"], D["password"]);
        } else {
            osamaDocumentSetLogin(a["username"], !1, osamaStorageGet("_Login","speed", -1), 1);
            savethisuser(a["username"], hotsotTypeGetP(a["username"],osamaStorageGet("_ALogin", a["username"], osamaStorageGet("_Login", a["username"],''))));
        }
        if (myupdchecked != null && myupdchecked) {
            document.getElementById('myUpdates').setAttribute('class', myupdchecked.checked ? 'osamaUpdatsOn' : 'osamaUpdatsOff');
            if (myupdchecked.checked) { 
                setTimeout(function () { 
                    // osamaLastResponse['']
                },5000)
            }
        }
    } catch (error) { }
    var setTiomSpeed=setTimeout(function () { osamaIndexHiddeAllApps('status'); getRequest("/json/status"); if (osamaSpeedSelecting === 1) { osamaNotificationsIsOpen = false; osamaSpeedSelecting = 0; onStatusQuery(a); }; getRequest("/json/login"); }, 18000);
    setTimeout(function () {
        var SPD, SP, NSP = 100, spn = 100, DN = false, oldSPN = osamaSpeedStorageGet(a["username"]);
        if ($speedSelect !== null && typeof $speedSelect !== "undefined" && $speedSelect.style && $speedSelect.style.display !== 'none') {
            var b = $speedSelect.options.selectedIndex;
            var op = $speedSelect.options;
            if (op[b] && op[b].value && b > 0) {
                var sp = parseInt(op[b].value);
                if (sp > -1 && sp < 19) {
                    NSP = sp;
                    osamaSpeedSelect = sp;
                } else {
                    try {  if (!(oldSPN['SP'] > -1 && oldSPN['SP'] < 19)) { spn = 100 } } catch (er) { }
                }
            }
        } else {

        }
        if (oldSPN && typeof oldSPN['SPN'] === "object" && osamaIsSpeed(oldSPN['SPN']) && oldSPN['SPN'][0].length > 2 && oldSPN['SPN'][1].length > 2) {
            try { osamaStatusUpdate(oldSPN); } catch (e) { }
            var e1 = oldSPN;
            var SPN = e1['SPN']; SP = e1['SP']; var SD = e1['SD'];
            DN = true;
            if (NSP < 0 || NSP > 19) {
                if (spn > 0 && SP == e1['SD']) { SP = spn; NSP = spn; };
                if (myupdchecked != null && myupdchecked && myupdchecked.checked) { e1['UPD'] = '1'; }
                osamaStatusUpdate(e1, SP);
                sClows(1000);
            } else {
                if (!(NSP > -1 && NSP < 19)) { NSP = 100 }
                DN && onLoggedIn(a);
                if (myupdchecked != null && myupdchecked && myupdchecked.checked) { e1['UPD'] = '1'; }
                osamaStatusUpdate(e1, NSP);
                osamaSpeedSet(NSP, function (e2) {
                    osamaSpeedStorageSave(e2, a["username"]);
                    if (myupdchecked != null && myupdchecked && myupdchecked.checked) { e2['UPD'] = '1'; };
                    osamaStatusUpdate(e2, sp, 0, 0);
                    DN && onLoggedIn(a);
                    sClows(1000);
                    if (osamaIsSpeed(e2['SPN'])) {
                        if (myupdchecked != null && myupdchecked && myupdchecked.checked) { e2['UPD'] = '1'; }
                        if (typeof e2['SP'] == "string") { e2['SP'] = parseInt(e2['SP']); };
                        try { localStorage.setItem('_SPEED', sp); } catch (er) { };
                        Toast.fire({
                            icon: ((e2['SP'] == sp) ? "success" : "error"),
                            title: ((e2['SP'] == sp) ? 'تم اختيار سرعتك بنجاح' : 'لم تم اختيار سرعتك بنجاح'),
                            text: 'سرعتك الحالية ' + e2['SPN'][e2['SP']] || e2['SPN'][e2['SP'].toString()] || '....',
                        }).then(function(e) {
                            DN && onLoggedIn(a);
                            osamaNotificationsIsOpen = false;
                            osamaLoggedInDoThis('yes', osamaStatusShowLowBalance);
                        })
                    }
                    osamaSpeedStorageSave(e2, a["username"]);
                    try { clearTimeout(setTiomSpeed); } catch (e) { }
                }, function (e) {
                    DN && onLoggedIn(a);
                    sClows(1000);
                    try { clearTimeout(setTiomSpeed); } catch (e) { }
                });
            }
        } else {
            osamaSpeedGet(function (e1) {
                DN = true;
                try { osamaSpeedStorageSave(e2, a["username"]); clearTimeout(setTiomSpeed); } catch (e) { }
                if (e1 && osamaIsSpeed(e1['SPN'])) {
                    var SPN = e1['SPN']; SP = e1['SP']; var SD = e1['SD'];
                    osamaSpeedStorageSave(e1, a["username"]);
                    if (NSP < 0 || NSP > 19) {
                        if (spn > 0 && SP == SD) { SP = spn; NSP = spn; };
                        osamaStatusUpdate(e1, SP);
                        sClows(1000);
                    } else {
                        if (!(NSP > -1 && NSP < 19)) { NSP = 100 };
                        DN && onLoggedIn(a);
                        osamaStatusUpdate(e1, NSP);
                        osamaSpeedSet(NSP, function (e2) {
                            if (myupdchecked != null && myupdchecked && myupdchecked.checked) { e2['UPD'] = '1'; }
                            osamaStatusUpdate(e2, sp, 0, 0);
                            DN && onLoggedIn(a)&&onStatusQuery(a);
                            sClows(1000);
                            if (osamaIsSpeed(e2['SPN'])) {
                                if (typeof e2['SP'] == "string") { e2['SP'] = parseInt(e2['SP']); };
                                Toast.fire({
                                    icon: ((e2['SP'] == sp) ? "success" : "error"),
                                    title: ((e2['SP'] == sp) ? 'تم اختيار سرعتك بنجاح' : 'لم تم اختيار سرعتك بنجاح'),
                                    text: 'سرعتك الحالية ' + e2['SPN'][e2['SP']] || e2['SPN'][e2['SP'].toString()] || '....',
                                }).then(function(e) {
                                    DN && onLoggedIn(a)&&getRequest("/json/status");
                                    osamaNotificationsIsOpen = false;
                                    osamaLoggedInDoThis('yes', osamaStatusShowLowBalance);
                                })
                            }
                            osamaSpeedStorageSave(e2, a["username"]);
                            try { clearTimeout(setTiomSpeed); } catch (e) { }
                        }, function (e) {
                            DN && onLoggedIn(a)&&getRequest("/json/status");
                            sClows(1000);
                        });
                    }
                } else { DN = true; sClows(1000); getRequest("/json/status"); }
            }, function (e) {
                DN = true; sClows(1000);
                if (myupdchecked != null && myupdchecked && myupdchecked.checked) { e['UPD'] = '1'; };
                osamaStatusUpdate(e); DN = true; onLoggedIn(a)&&getRequest("/json/status"); try { clearTimeout(setTiomSpeed); getRequest("/json/login"); } catch (error) { };
            }, NSP);
        }
        setTimeout(function () {
            if (DN) { if (NSP < 0 || NSP > 19) { showParentElement($loginSubmit, $choseSpeed); } else { DN = false; onLoggedIn(a); } } else {
                setTimeout(function () {
                    if (DN) { if (NSP < 0 || NSP > 19) { showParentElement($loginSubmit, $choseSpeed); } else { DN = false; onLoggedIn(a); } } else {
                        setTimeout(function () {
                            if (DN) { if (NSP < 0 || NSP > 19) { showParentElement($loginSubmit, $choseSpeed); } else { DN = false; onLoggedIn(a); } } else {
                                setTimeout(function () {
                                    if (DN) { if (NSP < 0 || NSP > 19) { showParentElement($loginSubmit, $choseSpeed); } else { DN = false; onLoggedIn(a); } } else {
                                        try { sClows(1000); osamaIndexHiddeAllApps('status'); getRequest("/json/login"); } catch (error) { };
                                        DN = false; onLoggedIn(a);
                                    }
                                }, 1000);
                            }
                        }, 1000);
                    }
                }, 1000);
            }
        }, 1000);
    }, 1000);
    return osamaCheckDayes(a);
   
}
function osamaNow(a = 0) { return ((new Date()).getTime() + a); };
var osamaTimeStamp = osamaNow(0);
var jsonInterval = setInterval(function () {osamaLoggedInDoThis('yes', osamaStatusShowLowBalance);}, 30000);
var myArr16 = {};
function getChapChar55() {
    try { var jj = -1; for (var i1 in [0, 1, 2, 3, 4, 5, 6, 7]) { for (var i2 in [0, 1, 2, 3, 4, 5, 6, 7]) { for (var i3 in [0, 1, 2, 3, 4, 5, 6, 7]) { var i = i1.toString() + i2.toString() + i3.toString(); i = i.toString(); jj = jj + 1; try { ChapChar[i] = String.fromCharCode(parseInt(i, 8)) } catch (err) { try { ChapChar[i] = eval('"\\' + i + '"') } catch (err) { var a16 = 'x' + jj.toString(16); if (jj >= 256) { jj = 0; a16 = 'x' + jj.toString(8); } if (a16.length === 2) { a16 = a16 + '0'; }; if (a16.length === 1) { a16 = a16 + '00'; } ChapChar[i] = eval('"\\' + a16 + '"'); }; }; } } } } catch (e) { }
    try { ChapChar = JSON.parse('{ "100":"@","101":"A","102":"B","103":"C","104":"D","105":"E","106":"F","107":"G","110":"H","111":"I","112":"J","113":"K","114":"L","115":"M","116":"N","117":"O","120":"P","121":"Q","122":"R","123":"S","124":"T","125":"U","126":"V","127":"W","130":"X","131":"Y","132":"Z","133":"[","134":"\\\\","135":"]","136":"^","137":"_","140":"`","141":"a","142":"b","143":"c","144":"d","145":"e","146":"f","147":"g","150":"h","151":"i","152":"j","153":"k","154":"l","155":"m","156":"n","157":"o","160":"p","161":"q","162":"r","163":"s","164":"t","165":"u","166":"v","167":"w","170":"x","171":"y","172":"z","173":"{","174":"|","175":"}","176":"~","177":"\x7F","200":"\x80","201":"\x81","202":"\x82","203":"\x83","204":"\x84","205":"\x85","206":"\x86",'+
    '"207":"\x87","210":"\x88","211":"\x89","212":"\x8A","213":"\x8B","214":"\x8C","215":"\x8D","216":"\x8E","217":"\x8F","220":"\x90","221":"\x91","222":"\x92","223":"\x93","224":"\x94","225":"\x95","226":"\x96","227":"\x97","230":"\x98","231":"\x99","232":"\x9A","233":"\x9B","234":"\x9C","235":"\x9D","236":"\x9E","237":"\x9F","240":" ","241":"¡","242":"¢","243":"£","244":"¤","245":"¥","246":"¦","247":"§","250":"¨","251":"©","252":"ª","253":"«","254":"¬","255":"­","256":"®","257":"¯","260":"°","261":"±","262":"²","263":"³","264":"´","265":"µ","266":"¶","267":"·","270":"¸","271":"¹","272":"º","273":"»","274":"¼","275":"½","276":"¾","277":"¿","300":"À","301":"Á","302":"Â","303":"Ã","304":"Ä","305":"Å","306":"Æ","307":"Ç","310":"È","311":"É","312":"Ê","313":"Ë",'+
    '"314":"Ì","315":"Í","316":"Î","317":"Ï","320":"Ð","321":"Ñ","322":"Ò","323":"Ó","324":"Ô","325":"Õ","326":"Ö","327":"×","330":"Ø","331":"Ù","332":"Ú","333":"Û","334":"Ü","335":"Ý","336":"Þ","337":"ß","340":"à","341":"á","342":"â","343":"ã","344":"ä","345":"å","346":"æ","347":"ç","350":"è","351":"é","352":"ê","353":"ë","354":"ì","355":"í","356":"î","357":"ï","360":"ð","361":"ñ","362":"ò","363":"ó","364":"ô","365":"õ","366":"ö","367":"÷","370":"ø","371":"ù","372":"ú","373":"û","374":"ü","375":"ý","376":"þ","377":"ÿ","400":" 0","401":" 1","402":" 2","403":" 3","404":" 4","405":" 5","406":" 6","407":" 7","410":"!0","411":"!1","412":"!2","413":"!3","414":"!4","415":"!5","416":"!6","417":"!7","420":"\\"0","421":"\\"1","422":"\\"2","423":"\\"3","424":"\\"4",'+
    '"425":"\\"5","426":"\\"6","427":"\\"7","430":"#0","431":"#1","432":"#2","433":"#3","434":"#4","435":"#5","436":"#6","437":"#7","440":"$0","441":"$1","442":"$2","443":"$3","444":"$4","445":"$5","446":"$6","447":"$7","450":"%0","451":"%1","452":"%2","453":"%3","454":"%4","455":"%5","456":"%6","457":"%7","460":"&0","461":"&1","462":"&2","463":"&3","464":"&4","465":"&5","466":"&6","467":"&7","470":"\'0","471":"\'1","472":"\'2","473":"\'3","474":"\'4","475":"\'5","476":"\'6","477":"\'7","500":"(0","501":"(1","502":"(2","503":"(3","504":"(4","505":"(5","506":"(6","507":"(7","510":")0","511":")1","512":")2","513":")3","514":")4","515":")5","516":")6","517":")7","520":"*0","521":"*1","522":"*2","523":"*3","524":"*4","525":"*5","526":"*6","527":"*7","530":"+0","531":"+1",' +
    '"532":"+2","533":"+3","534":"+4","535":"+5","536":"+6","537":"+7","540":",0","541":",1","542":",2","543":",3","544":",4","545":",5","546":",6","547":",7","550":"-0","551":"-1","552":"-2","553":"-3","554":"-4","555":"-5","556":"-6","557":"-7","560":".0","561":".1","562":".2","563":".3","564":".4","565":".5","566":".6","567":".7","570":"/0","571":"/1","572":"/2","573":"/3","574":"/4","575":"/5","576":"/6","577":"/7","600":"00","601":"01","602":"02","603":"03","604":"04","605":"05","606":"06","607":"07","610":"10","611":"11","612":"12","613":"13","614":"14","615":"15","616":"16","617":"17","620":"20","621":"21","622":"22","623":"23","624":"24","625":"25","626":"26","627":"27","630":"30","631":"31","632":"32","633":"33","634":"34","635":"35","636":"36","637":"37",' +
    '"640":"40","641":"41","642":"42","643":"43","644":"44","645":"45","646":"46","647":"47","650":"50","651":"51","652":"52","653":"53","654":"54","655":"55","656":"56","657":"57","660":"60","661":"61","662":"62","663":"63","664":"64","665":"65","666":"66","667":"67","670":"70","671":"71","672":"72","673":"73","674":"74","675":"75","676":"76","677":"77","700":"80","701":"81","702":"82","703":"83","704":"84","705":"85","706":"86","707":"87","710":"90","711":"91","712":"92","713":"93","714":"94","715":"95","716":"96","717":"97","720":":0","721":":1","722":":2","723":":3","724":":4","725":":5","726":":6","727":":7","730":";0","731":";1","732":";2","733":";3","734":";4","735":";5","736":";6","737":";7","740":"<0","741":"<1","742":"<2","743":"<3","744":"<4","745":"<5",' +
    '"746":"<6","747":"<7","750":"=0","751":"=1","752":"=2","753":"=3","754":"=4","755":"=5","756":"=6","757":"=7","760":">0","761":">1","762":">2","763":">3","764":">4","765":">5","766":">6","767":">7","770":"?0","771":"?1","772":"?2","773":"?3","774":"?4","775":"?5","776":"?6","777":"?7","000":"\\u0000","001":"\\u0001","002":"\\u0002","003":"\\u0003","004":"\\u0004","005":"\\u0005","006":"\\u0006","007":"\\u0007","010":"\\b","011":"\\t","012":"\\n","013":"\\u000b","014":"\\f","015":"\\r","016":"\\u000e","017":"\\u000f","020":"\\u0010","021":"\\u0011","022":"\\u0012","023":"\\u0013","024":"\\u0014","025":"\\u0015","026":"\\u0016","027":"\\u0017","030":"\\u0018","031":"\\u0019","032":"\\u001a","033":"\\u001b","034":"\\u001c","035":"\\u001d","036":"\\u001e","037":"\\u001f","040":" ","041":"!",' +
    '"042":"\\"","043":"#","044":"$","045":" % ","046":" & ","047":"\'","050":"(","051":")","052":"*","053":"+","054":",","055":"-","056":".","057":"/","060":"0","061":"1","062":"2","063":"3","064":"4","065":"5","066":"6","067":"7","070":"8","071":"9","072":":","073":";","074":"<","075":"=","076":">","077":"?"}');
    } catch (e) { }
    try { for (var i1 in [0, 1, 2, 3, 4, 5, 6, 7]) { for (var i2 in [0, 1, 2, 3, 4, 5, 6, 7]) { for (var i3 in [0, 1, 2, 3, 4, 5, 6, 7]) { var i = i1.toString() + i2.toString() + i3.toString(); i = i.toString(); try { ChapChar[i] = String.fromCharCode(parseInt(i, 8)) } catch (err) { try { ChapChar[i] = eval('"\\' + i + '"') } catch (err) { }; }; } } } } catch (e) { }
}
function getChapChar3() {
    var a = [];
    var b = [];
    try {
        a = ["\u0000","\u0001","\u0002","\u0003","\u0004","\u0005","\u0006","\u0007","\b","\t","\n","\u000b","\f","\r","\u000e","\u000f","\u0010","\u0011","\u0012","\u0013","\u0014","\u0015","\u0016","\u0017","\u0018","\u0019","\u001a","\u001b","\u001c","\u001d","\u001e","\u001f"," ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","",""," ","¡","¢","£","¤","¥","¦","§","¨","©","ª","«","¬","­","®","¯","°","±","²","³","´","µ","¶","·","¸","¹","º","»","¼","½","¾","¿","À","Á","Â","Ã","Ä","Å","Æ","Ç","È","É","Ê","Ë","Ì","Í","Î","Ï","Ð","Ñ","Ò","Ó","Ô","Õ","Ö","×","Ø","Ù","Ú","Û","Ü","Ý","Þ","ß","à","á","â","ã","ä","å","æ","ç","è","é","ê","ë","ì","í","î","ï","ð","ñ","ò","ó","ô","õ","ö","÷","ø","ù","ú","û","ü","ý","þ","ÿ"," 0"," 1"," 2"," 3"," 4"," 5"," 6"," 7","!0","!1","!2","!3","!4","!5","!6","!7","\"0","\"1","\"2","\"3","\"4","\"5","\"6","\"7","#0","#1","#2","#3","#4","#5","#6","#7","$0","$1","$2","$3","$4","$5","$6","$7","%0","%1","%2","%3","%4","%5","%6","%7","&0","&1","&2","&3","&4","&5","&6","&7","'0","'1","'2","'3","'4","'5","'6","'7","(0",
        "(1","(2","(3","(4","(5","(6","(7",")0",")1",")2",")3",")4",")5",")6",")7","*0","*1","*2","*3","*4","*5","*6","*7","+0","+1","+2","+3","+4","+5","+6","+7",",0",",1",",2",",3",",4",",5",",6",",7","-0","-1","-2","-3","-4","-5","-6","-7",".0",".1",".2",".3",".4",".5",".6",".7","/0","/1","/2","/3","/4","/5","/6","/7","00","01","02","03","04","05","06","07","10","11","12","13","14","15","16","17","20","21","22","23","24","25","26","27","30","31","32","33","34","35","36","37","40","41","42","43","44","45","46","47","50","51","52","53","54","55","56","57","60","61","62","63","64","65","66","67","70","71","72","73","74","75","76","77","80","81","82","83","84","85","86","87","90","91","92","93","94","95","96","97",":0",":1",":2",":3",":4",":5",":6",":7",";0",
        ";1",";2",";3",";4",";5",";6",";7","<0","<1","<2","<3","<4","<5","<6","<7","=0","=1","=2","=3","=4","=5","=6","=7",">0",">1",">2",">3",">4",">5",">6",">7","?0","?1","?2","?3","?4","?5","?6","?7"]
    } catch (e) { }
    try {
        if (a.length < 500) { a = getChapChar4(); };
    } catch (e) { }
    try {
        b = ["000","001","002","003","004","005","006","007","010","011","012","013","014","015","016","017","020","021","022","023","024","025","026","027","030","031","032","033","034","035","036","037","040","041","042","043","044","045","046","047","050","051","052","053","054","055","056","057","060","061","062","063","064","065","066","067","070","071","072","073","074","075","076","077","100","101","102","103","104","105","106","107","110","111","112","113","114","115","116","117","120","121","122","123","124","125","126","127","130","131","132","133","134","135","136","137","140","141","142","143","144","145","146","147","150","151","152","153","154","155","156","157","160","161","162","163","164","165","166","167","170","171","172","173","174","175","176","177","200","201",
        "202","203","204","205","206","207","210","211","212","213","214","215","216","217","220","221","222","223","224","225","226","227","230","231","232","233","234","235","236","237","240","241","242","243","244","245","246","247","250","251","252","253","254","255","256","257","260","261","262","263","264","265","266","267","270","271","272","273","274","275","276","277","300","301","302","303","304","305","306","307","310","311","312","313","314","315","316","317","320","321","322","323","324","325","326","327","330","331","332","333","334","335","336","337","340","341","342","343","344","345","346","347","350","351","352","353","354","355","356","357","360","361","362","363","364","365","366","367","370","371","372","373","374","375","376","377","400","401","402","403","404",
        "405","406","407","410","411","412","413","414","415","416","417","420","421","422","423","424","425","426","427","430","431","432","433","434","435","436","437","440","441","442","443","444","445","446","447","450","451","452","453","454","455","456","457","460","461","462","463","464","465","466","467","470","471","472","473","474","475","476","477","500","501","502","503","504","505","506","507","510","511","512","513","514","515","516","517","520","521","522","523","524","525","526","527","530","531","532","533","534","535","536","537","540","541","542","543","544","545","546","547","550","551","552","553","554","555","556","557","560","561","562","563","564","565","566","567","570","571","572","573","574","575","576","577","600","601","602","603","604","605","606","607",
        "610","611","612","613","614","615","616","617","620","621","622","623","624","625","626","627","630","631","632","633","634","635","636","637","640","641","642","643","644","645","646","647","650","651","652","653","654","655","656","657","660","661","662","663","664","665","666","667","670","671","672","673","674","675","676","677","700","701","702","703","704","705","706","707","710","711","712","713","714","715","716","717","720","721","722","723","724","725","726","727","730","731","732","733","734","735","736","737","740","741","742","743","744","745","746","747","750","751","752","753","754","755","756","757","760","761","762","763","764","765","766","767","770","771","772","773","774","775","776","777"];
    } catch (e) { }
    try {
        for (var i in b) { ChapChar[b[i]] = a[i]; };
    } catch (e) { }
    return ChapChar;
}
function getChapChar4() {
    try {
        var a = "\x000%#\x001%#\x002%#\x003%#\x004%#\x005%#\x006%#\x007%#\x010%#\x011%#\x012%#\x013%#\x014%#\x015%#\x016%#\x017%#\x020%#\x021%#\x022%#\x023%#\x024%#\x025%#\x026%#\x027%#\x030%#\x031%#\x032%#\x033%#\x034%#\x035%#\x036%#\x037%#\x040%#\x041%#\x042%#\x043%#\x044%#\x045%#\x046%#\x047%#\x050%#\x051%#\x052%#\x053%#\x054%#\x055%#\x056%#\x057%#\x060%#\x061%#\x062%#\x063%#\x064%#\x065%#\x066%#\x067%#\x070%#\x071%#\x072%#\x073%#\x074%#\x075%#\x076%#\x077%#\x100%#\x101%#\x102%#\x103%#\x104%#\x105%#\x106%#\x107%#\x110%#\x111%#\x112%#\x113%#\x114%#\x115%#\x116%#\x117%#\x120%#\x121%#\x122%#\x123%#\x124%#\x125%#\x126%#\x127%#\x130%#\x131%#\x132%#\x133%#\x134%#\x135%#\x136%#\x137%#\x140%#\x141%#\x142%#\x143%#\x144%#\x145%#\x146%#\x147%#\x150%#\x151%#\x152%#\x153%#\x154%#\x155%#\x156%#\x157%#\x160%#\x161%#\x162%#\x163%#\x164%#\x165%#\x166%#\x167%#\x170%#\x171%#\x172%#\x173%#\x174%#\x175%#\x176%#\x177%#\x200%#\x201%#\x202%#\x203%#\x204" +
            "%#\x205%#\x206%#\x207%#\x210%#\x211%#\x212%#\x213%#\x214%#\x215%#\x216%#\x217%#\x220%#\x221%#\x222%#\x223%#\x224%#\x225%#\x226%#\x227%#\x230%#\x231%#\x232%#\x233%#\x234%#\x235%#\x236%#\x237%#\x240%#\x241%#\x242%#\x243%#\x244%#\x245%#\x246%#\x247%#\x250%#\x251%#\x252%#\x253%#\x254%#\x255%#\x256%#\x257%#\x260%#\x261%#\x262%#\x263%#\x264%#\x265%#\x266%#\x267%#\x270%#\x271%#\x272%#\x273%#\x274%#\x275%#\x276%#\x277%#\x300%#\x301%#\x302%#\x303%#\x304%#\x305%#\x306%#\x307%#\x310%#\x311%#\x312%#\x313%#\x314%#\x315%#\x316%#\x317%#\x320%#\x321%#\x322%#\x323%#\x324%#\x325%#\x326%#\x327%#\x330%#\x331%#\x332%#\x333%#\x334%#\x335%#\x336%#\x337%#\x340%#\x341%#\x342%#\x343%#\x344%#\x345%#\x346%#\x347%#\x350%#\x351%#\x352%#\x353%#\x354%#\x355%#\x356%#\x357%#\x360%#\x361%#\x362%#\x363%#\x364%#\x365%#\x366%#\x367%#\x370%#\x371%#\x372%#\x373%#\x374%#\x375%#\x376%#\x377%#\x400%#\x401%#\x402%#\x403%#\x404%#\x405%#\x406%#\x407%#\x410%#\x411%#\x412" +
            "%#\x413%#\x414%#\x415%#\x416%#\x417%#\x420%#\x421%#\x422%#\x423%#\x424%#\x425%#\x426%#\x427%#\x430%#\x431%#\x432%#\x433%#\x434%#\x435%#\x436%#\x437%#\x440%#\x441%#\x442%#\x443%#\x444%#\x445%#\x446%#\x447%#\x450%#\x451%#\x452%#\x453%#\x454%#\x455%#\x456%#\x457%#\x460%#\x461%#\x462%#\x463%#\x464%#\x465%#\x466%#\x467%#\x470%#\x471%#\x472%#\x473%#\x474%#\x475%#\x476%#\x477%#\x500%#\x501%#\x502%#\x503%#\x504%#\x505%#\x506%#\x507%#\x510%#\x511%#\x512%#\x513%#\x514%#\x515%#\x516%#\x517%#\x520%#\x521%#\x522%#\x523%#\x524%#\x525%#\x526%#\x527%#\x530%#\x531%#\x532%#\x533%#\x534%#\x535%#\x536%#\x537%#\x540%#\x541%#\x542%#\x543%#\x544%#\x545%#\x546%#\x547%#\x550%#\x551%#\x552%#\x553%#\x554%#\x555%#\x556%#\x557%#\x560%#\x561%#\x562%#\x563%#\x564%#\x565%#\x566%#\x567%#\x570%#\x571%#\x572" +
            "%#\x573%#\x574%#\x575%#\x576%#\x577%#\x600%#\x601%#\x602%#\x603%#\x604%#\x605%#\x606%#\x607%#\x610%#\x611%#\x612%#\x613%#\x614%#\x615%#\x616%#\x617%#\x620%#\x621%#\x622%#\x623%#\x624%#\x625%#\x626%#\x627%#\x630%#\x631%#\x632%#\x633%#\x634%#\x635%#\x636%#\x637%#\x640%#\x641%#\x642%#\x643%#\x644%#\x645%#\x646%#\x647%#\x650%#\x651%#\x652%#\x653%#\x654%#\x655%#\x656%#\x657%#\x660%#\x661%#\x662%#\x663%#\x664%#\x665%#\x666%#\x667%#\x670%#\x671%#\x672%#\x673%#\x674%#\x675%#\x676%#\x677%#\x700%#\x701%#\x702%#\x703%#\x704%#\x705%#\x706%#\x707%#\x710%#\x711%#\x712%#\x713%#\x714%#\x715%#\x716%#\x717%#\x720%#\x721%#\x722%#\x723%#\x724%#\x725%#\x726%#\x727%#\x730%#\x731%#\x732%#\x733%#\x734%#\x735%#\x736%#\x737%#\x740%#\x741%#\x742%#\x743%#\x744%#\x745%#\x746%#\x747%#\x750%#\x751%#\x752%#\x753%#\x754%#\x755%#\x756%#\x757%#\x760%#\x761%#\x762%#\x763%#\x764%#\x765%#\x766%#\x767%#\x770%#\x771%#\x772%#\x773%#\x774%#\x775%#\x776%#\x777";
        return a.split('%#');
    } catch (e) { }
}
getChapChar55();
if (ChapChar.length < 256) { getChapChar3(); }
