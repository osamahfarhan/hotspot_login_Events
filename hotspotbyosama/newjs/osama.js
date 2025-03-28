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
var jsonInterval=[];
var Toast=[]
var MyIcons = ['success', 'info', 'question', 'warning', 'error'];
function SAlert(ic, msg) { Swal.fire('', msg, MyIcons[ic]); };
function osamaRepAll(a,b,c){if(a.indexOf(b)>-1){var d=a.split();for(var i=0;i<d.length;i++){if(a.indexOf(b)>-1){a=a.replace(b,c);}}};return a;}
function osamaDecodeAr(o, esc) {esc=esc||false;if (typeof o === 'undefined'){return o;};o=o.toString();try {if ((/^([0-9A-Za-z]{3,15}[+]){1,20}[0-9A-Za-z]{3,15}$/gi).test(o) || (/not[+]found/gi).test(o) || esc) { o=o.split('+').join(" ") };if ((/[&][aglmopqstu]{2,5}[;]/gi).test(o)) { o=osamaConvertHTML(o) };if ((/[&][#][0-9A-F][0-9A-F][;]/gi).test(o)) { o=osamaConvertHTML2(o) };if ((/[%][7-9A-F][0-9A-F]/gi).test(o)) { o=osamaDecodeAr2(o) };} catch (er) {
o=o.split('+').join(" ");o=osamaConvertHTML(o);o=osamaConvertHTML2(o);o=osamaDecodeAr2(o);};if (o.indexOf("%") === -1) { return o;};str=o.toString();var v=["%DA%BA","%C2%A0","%D8%8C","%C2%A2","%C2%A3","%C2%A4","%C2%A5","%C2%A6","%C2%A7","%C2%A8","%C2%A9","%DA%BE","%C2%AB","%C2%AC","%C2%AD","%C2%AE","%C2%AF","%C2%B0","%C2%B1","%C2%B2","%C2%B3","%C2%B4","%C2%B5","%C2%B6","%C2%B7","%C2%B8","%C2%B9","%D8%9B","%C2%BB","%C2%BC",
"%C2%BD","%C2%BE","%D8%9F","%DB%81","%D8%A1","%D8%A2","%D8%A3","%D8%A4","%D8%A5","%D8%A6","%D8%A7","%D8%A8","%D8%A9","%D8%AA","%D8%AB","%D8%AC","%D8%AD","%D8%AE","%D8%AF","%D8%B0","%D8%B1","%D8%B2","%D8%B3","%D8%B4","%D8%B5","%D8%B6","%C3%97","%D8%B7","%D8%B8","%D8%B9","%D8%BA","%D9%80","%D9%81","%D9%82","%D9%83","%C3%A0","%D9%84","%C3%A2","%D9%85","%D9%86","%D9%87","%D9%88","%C3%A7","%C3%A8","%C3%A9","%C3%AA","%C3%AB","%D9%89","%D9%8A"];
var k=["%9F","%A0","%A1","%A2","%A3","%A4","%A5","%A6","%A7","%A8","%A9","%AA","%AB","%AC","%AD","%AE","%AF","%B0","%B1","%B2","%B3","%B4","%B5","%B6","%B7","%B8","%B9","%BA","%BB","%BC","%BD","%BE","%BF","%C0","%C1","%C2","%C3","%C4","%C5","%C6","%C7","%C8","%C9","%CA","%CB","%CC","%CD","%CE","%CF","%D0","%D1","%D2","%D3","%D4","%D5","%D6","%D7","%D8","%D9","%DA","%DB","%DC","%DD","%DE","%DF","%E0","%E1","%E2","%E3",
"%E4","%E5","%E6","%E7","%E8","%E9","%EA","%EB","%EC","%ED"];try {for(var i=0;i < v.length;i++){if (str.indexOf(v[i]) > -1){str=str.split(v[i]).join(decodeURIComponent(v[i]));};};} catch (er) { };try { for (var i=0;i < v.length;i++) { if (str.indexOf(k[i]) > -1) { str=str.split(k[i]).join(decodeURIComponent(v[i]));};};} catch (er) { };try { if (str.indexOf("%") > -1) { str=decodeURIComponent(str);} } catch (er) { };return str;};
function osamaDecodeAr3(o) {var z=[],out=o.toString();if (out.includes("%")&&(/[%][7-9A-F][0-9A-F]/gi).test(out)) { z=out.split('%');for (var i in z) {var a =z[i];try { if ((/[7-9A-F][0-9A-F]/gi).test(a)&&a.length===2&&out.includes('%'+a)) {var bytes=[];bytes.push(parseInt(a.toUpperCase(), 16));var zz=a;try{zz=((new TextDecoder("windows-1256")).decode((new Uint8Array(bytes)))).toString();out=out.replace('%'+a,zz);}catch(err){ };}else{ } } catch (e) { }};};return out;};
function osamaDecodeAr2(o) {if ((o.toString()).includes("%")) {try {o=o.replaceAll(/%[0-9A-F][0-9A-F]/gi, function (a) { var bytes=[];bytes.push(parseInt(a.replace('%', ''), 16));var z=a;try{z=((new TextDecoder("windows-1256")).decode((new Uint8Array(bytes)))).toString();}catch(err){ };return z;});} catch (e) {return osamaDecodeAr3(o);}};return o;};
function osamaConvertHTML(str) {try{ var symbols={ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&apos;" };for (var symbol in symbols){if (str.indexOf(symbol) >= 0) { str=str.split(symbol).join(symbols[symbol]);} } return str;} catch (e) { };return str };
function osamaConvertHTML(str) {try{ var symbols={ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&apos;" };for (var symbol in symbols) { if (str.indexOf(symbol) >= 0) { str=str.split(symbol).join(symbols[symbol]);} } return str;} catch (e) { };return str };
function osamaConvertHTML2(o) {if((o.toString()).includes("&#")) {try { o=o.replaceAll(/[&][#][0-9A-F][0-9A-F][;]/gi, function (a) { return String.fromCharCode(parseInt(a.replace('&#', '').replace(';', ''), 16));});} catch (e) { };};return o;};
function osamaDecode(obj, esc) {esc=esc||false;if (typeof obj === 'object') { for (var i in obj) { if (typeof obj[i] == 'object') { obj[i]=osamaDecode(obj[i], esc);} else { obj[i]=osamaDecodeAr(obj[i], esc);};};} else { return osamaDecodeAr(obj, esc);};return obj;};
function decodeResponse(res={}){if (typeof res === "object") { for (var k in res) { try { res[k]=osamaDecode(res[k], !0) } catch (e) { } };} else{res=osamaDecode(res);} return res;};
function getChap(callBack){var z=new XMLHttpRequest;var jsonChapData=[];var chap_challenge="";var chap_id ="";z.open("GET", '/json/chap/login', !0);z.onreadystatechange=function () {if (4 === z.readyState) {var y=z.responseText;if (y.indexOf('\\')!==-1){try { jsonChapData=y.split('\\');} catch (e) { };};try {for (var r in jsonChapData) {var cr=jsonChapData[r];if (cr.length >= 1&& cr.length <= 6 && typeof ChapChar[cr] !== "undefined"){if(chap_id === "") {chap_id=ChapChar[cr];} else {
chap_challenge=chap_challenge+ChapChar[cr];};};};} catch(e){};callBack(chap_id,chap_challenge);};};z.send();};
function getCHAP(str) {var a=[];if (str.indexOf('%5C') === 0 && str.split('%5C').length > 14) {a=str.split('%5C');} else if (str.indexOf('\\') ===0 && str.split('\\').length > 14) { a=str.split('\\');} else { return str;} try { str='';var cid='';var pas='';var cch='';for (var i=0;i < a[1].length;i++) { if (i < 3) { cid=cid+a[1].split('')[i];} else { pas=pas+a[1].split('')[i];} } if (typeof ChapChar[cid] === "undefined") { return !1;};
str=ChapChar[cid]+pas;for (var i=2;i < a.length;i++) {if (typeof ChapChar[a[i]] === "undefined"){return !1;}else{str=str+ChapChar[a[i]];}}}catch(e){};return str;};
function changeSP(a,b){osamaSpeedSelect= a?b: osamaSpeedSelect;}
function changeUPD(a,b){myupd=a?'1':'0';b=myupd;document.getElementById('myUpdates').setAttribute('class', a ? 'osamaUpdatsOn' : 'osamaUpdatsOff');osamaStorageSave('_Status', 'UPD', myupd);return b;}
var errLogin=false;
function userLoginChap(u,p) {errLogin=false;if(typeof u === "undefined" || u === null) {u=document.login.username.value;};if (typeof p === "undefined" || p === null){ p = (document.login.querySelector("input[password-field]")||document.login.password).value };if (hotspotConfigType()==='11') { p=u };  var z = new XMLHttpRequest; z.open("POST", "/json/login?username="+u+"&password="+p, !0);  z.onreadystatechange = function () { if (4 === z.readyState) { var cc = z.responseText; try { var d = decodeResponse(JSON.parse(cc)); jsonData = d; if (d.action === 'onLoginErrorKick') { onLoginErrorKick(d); } else if (d.action === 'onLoginError') { onLoginError(d); } else if (d.action === 'onLoggedInSpeed') { onLoggedInSpeed(d); } else if (d.action === 'onLoggedIn') { onLoggedIn(d); } else { osamaAction(d); } } catch (e) {errLogin=true; loggedIn = 0; hideStatusPage(); showLoginPage(); chapInt(); }; }; }; z.send(); return !1;};
function userLoginChap() {var u,p;errLogin=false;if(typeof u === "undefined" || u === null) {u=document.login.username.value;};if (typeof p === "undefined" || p === null){ p = (document.login.querySelector("input[password-field]")||document.login.password).value };if (hotspotConfigType()==='11') { p=u };  var z = new XMLHttpRequest; z.open("POST", "/json/login?username="+u+"&password="+p, !0);  z.onreadystatechange = function () { if (4 === z.readyState) { var cc = z.responseText; try { var d = decodeResponse(JSON.parse(cc)); jsonData = d; if (d.action === 'onLoginErrorKick') { onLoginErrorKick(d); } else if (d.action === 'onLoginError') { onLoginError(d); } else if (d.action === 'onLoggedInSpeed') { onLoggedInSpeed(d); } else if (d.action === 'onLoggedIn') { onLoggedIn(d); } else { osamaAction(d); } } catch (e) {errLogin=true; loggedIn = 0; hideStatusPage(); showLoginPage(); chapInt(); }; }; }; z.send(); return !1;};
// function userLogin(){errLogin=false;try{userLoginChap()}catch(e){errLogin=true};return !1;};
var chapIntF= setInterval(function (){osamaLoggedInDoThis("no",function(){osamaloadScript('/json/script/status?var=callback')})}, 10000);
function userLogin(){if(hotspotConfig&&hotspotConfig['login-chap']){userLoginChap()};var a=document.login.querySelector("input[username-field]").value,b,c=null!=(b=document.login.querySelector("input[password-field]"))?b:"";""!==c&&(c=c.value);a="/json/login?username="+a+"&password="+c+"&var=callback";getRequest(a);return !1;}

function sLoading(a) {a=a||0; try{if (a>1000) { setTimeout(function () { Swal.showLoading() }, a); } else { Swal.showLoading() } }catch(e){ }};
function sClows(a) {a=a||0;try { if (a>1000) { setTimeout(function () { Swal.close() }, a); } else { Swal.close() } }catch(e){ }};
function osamaLoginCookiesSave(u, p) {u = u||""; p = p||"";var U = document.login.username;var P = $passwordField;U = u != "" ?u:null != U ? U.value : u;P = p != "" ?p:null != P ? P.value : p;
    savethisuser(U, hotsotTypeGetP(U, P));
    // osamaHotspotJson(function (e1) {
    //     try { jsonData = e1; sLoading(500); } catch (ee) { };
    //     sClows(5000);
    //     if (e1 && e1['logged_in'] == 'yes') {
    //         U = e1.username;
    //         P = hotsotTypeGetP(U, P);
    //         serverRequest(function (e) {sClows(1000); osamaResponseData = osamaDecode(e); }, function () {sClows(1000); }, { 'FN': 'COOKIES', "I": osamaUnicID(12) });
           
    //     }
    // });
};
function nullFun(a){return a}
function osamaLoginCookiesGet(callBack , callBackE ) {
    callBackE=callBackE||nullFun
    callBack=callBack||nullFun
    osamaHotspotJson(function (e) {
        serverRequest({},'/server/.' + decodeURIComponent(e.mac).split(':').join('') + osamaUnicID(12) + '.txt', { "var": osamaUnicID(12) }).then(function(e){
                callBack(e);
            }).catch(function(e){
                callBackE(e);
        });
        },function(e){
            callBackE(e);
    });
};
function osamaloadScript(a, b, z) {
    z=z||b;
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
            void 0 !== b && (d.onreadystatechange = b, d.onload = b, d.onerror = z); c.appendChild(d)
        }

    } catch (error) {
        z();
    }
};
function osamaloadImage(a, b,c) {
    c=c||b;
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
function osamaloadVideo(a, b , z) {
    z=z||b;
    try {
        if (!document.querySelector('video[src="' + a + '"]')) {
            var c = document.head, d = document.createElement("video");
            d.setAttribute("async","true");
            d.setAttribute("RequestMode","no-cors");
            d.setAttribute("mode","no-cors");
            d.setAttribute("no-cors","");
            d.setAttribute("style","width: 480px; height: 300px;max-width: 100%; margin: 2em auto 1em; display:none;");
            d.src = a;
            void 0 !== b && (d.onreadystatechange = b, d.onload = z); c.appendChild(d)
        }
    } catch (error) {
        z();
    }
};

function osamaloadType(t,a, b, c) {
    c=c||b;
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
function osamaLoginSave(u, p) {
    u=u||"";
    p=p||"";
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
function osamaALoginSave(u, p , s) {
    u=u||"";
    p=p||"";
    s=s||100;
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
function osamaLoginByCookies() {
    var t = osamaNow(0),u,p,s,v;
    try { t = parseInt((window.localStorage || localStorage).getItem('_COOKIES'));setTimeout(function () { osamaRePrSu($loginSubmit) }, 1700)} catch (er) { };
    u = osamaStorageGet("_Login", 'username', osamaStorageGet("_ALogin", 'username'));
    s = osamaStorageGet("_Login","speed", osamaStorageGet("_ALogin","speed", -1));
    p = hotsotTypeGetP(u, osamaStorageGet("_Login", u, (osamaStorageGet("_ALogin", u)||"")));

    try {
        if (t < osamaNow(10000)) {
            v = '/json/script/login?username='.concat(u,'&password=',p,'&var=callback&t=',osamaNow(1000));
            if (typeof u === 'string' && u.length > 1) {
                osamaDocumentSetLogin(u, p, s, 1);
                osamaloadScript(v,function(){
                    try { (window.localStorage || localStorage).setItem('_COOKIES', osamaNow(10000)); } catch (err) { };
                    osamaLoginByFcoDone = true;
                });    
            } else{
                try { (window.localStorage || localStorage).setItem('_COOKIES', osamaNow(20000)); } catch (err) { };
            }
        }
    } catch (e) { 
        serverRequest( { 'FN': 'COOKIES', "I": osamaUnicID(12) }).then(function (e) {
            if (e && e['SPN']) {
                osamaResponseData = osamaDecode(e);
            }
            sClows(1000);;
        }).catch(function () { sClows(1000); });
        var u = osamaStorageGet("_Login", 'username', osamaStorageGet("_ALogin", 'username', ""));
        var s = osamaStorageGet("_Login","speed", osamaStorageGet("_ALogin","speed", -1));
        var p = hotsotTypeGetP(u, osamaStorageGet("_Login", u, osamaStorageGet("_ALogin", u, "")));
        if (typeof u === 'string' && u.length > 1) {
            osamaDocumentSetLogin(u, p, s, 1);
            userLogin();
        }
        setTimeout(function () { osamaRePrSu($loginSubmit) }, 1700)
        }
}
function osamaLoggedInDoThis(a , fun, v,fun2,v2) {
    a=a||'yes';
    fun=fun||nullFun;
    fun2=fun2||nullFun;
    v = v||null;
    v2 = v2||null;
    osamaHotspotJson(function(e){
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
        osamaHotspotJson(function(e){
            serverRequest({ "FN": 'KICK', 'U': us, 'M': decodeURIComponent(e.mac||jsonData['mac']) }).then(function(e1){
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
                    }).then(function (e){
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
            }).catch(function(e){
                osamaNotificationsIsOpen = false;
                document.getElementById("error_yes").style.display = 'none';
                document.getElementById("error_no").style.display = 'none';
                onLoginError(a);
                Toast.fire({
                    icon: "error",
                    title: 'اعادة المحاولة',
                    timer: 5000,
                })
            })
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
        }).then(function (result){
            try {
                onLoginErrorKickV = false;
                clearTimeout(errtout);
                var e1 = osamaStorageGet('_Speed', us, !1);
                osamaStatusUpdate(e1);
            } catch (error) {
                
            }
            if (result.isConfirmed) {
                    serverRequest( { "FN": 'KICK', 'U': us, 'M': decodeURIComponent(a.mac) }).then(function (e1) {
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
                            }).then(function (e){
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
                            }).then(function (e){
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
                    }).catch(function (e) {
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
                    });
                
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
function osamaNotificationsIsOpenFn(f, a, b, c, d, n) { 
    n=n||0;
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
            }).then(function (e){
                osamaNotificationsIsOpen = false;
                thenf && thenf(a);
            });
        };
        if (e && e.err) {
            Toast.fire({
                icon: "error",
                title: (e.err || e.error) + "  " + e.msg,
                timer: 1000,
            }).then(function (e){
                osamaNotificationsIsOpen = false;
                thenf && thenf(a);
            });
        };
    }, e, thenf);
}
function hiddeSpeedAshowStatus(a) {
    a=a||jsonData;
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
function showSpeedAndHiddeStatus(a,f) {
    a=a||jsonData;
    f=f||false;
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
        serverResponse(responseUrl).then(function(e1){
            if (e1 && osamaIsSpeed(e1['SPN'])) {
                sClows(1000); 
                osamaStatusUpdate(e1);
                osamaNotificationsIsOpen = false;
            } else {
                hiddeSpeedAshowStatus(a);
                osamaStatusUpdate(e1);
            }
        }).catch(function(e){
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
function onLoggedInSpeed(a) {
    a=a||jsonData;
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
                        }).then(function (e){
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
                                }).then(function (e){
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
function osamaNow(a) {a=a||0;return ((new Date()).getTime() + a); };
document.addEventListener("DOMContentLoaded",function(){
osamaloadScript('/json/script/status?var=callback',function(){});
jsonInterval = setInterval(function () {osamaLoggedInDoThis('yes', osamaStatusShowLowBalance);}, 60000);
Toast = Swal.mixin({
    toast: true,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen:function (toast){
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});
},!1);
