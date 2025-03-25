function saveConfigStorge(a,b){
    localStorage.setItem(a,b);
}
function showAnimations(){
    var els =elmQSA('.anim');
    elmForEach(els,elmClassAdd,'anim-a1')
    elmForEach(els,elmClassRemove,'anim-r1')
    setTimeout(function(){elmForEach(els,elmClassAdd,'anim-a2'),elmForEach(els,elmClassRemove,'anim-a1'),elmForEach(els,elmClassRemove,'anim-r2')},500)
    setTimeout(function(){elmForEach(els,elmClassRemove,'anim-a1'),elmForEach(els,elmClassRemove,'anim-r3')},1500);
    setTimeout(function(){elmForEach(els,elmClassRemove,'anim-a2'),elmForEach(els,elmClassRemove,'anim-r4')},2500);
    var savedConfig=getConfigStorge();
    if(typeof savedConfig['theme']=="undefined"){savedConfig['theme']={"id":0,"color":hotspotConfig['themes-app'][0]}}
    changeTheme(savedConfig['theme']['id'],savedConfig['theme']['color'])
}
var currentIndexPuse=0;
var currentIndex=0;
var maxSliders=0;
function prevnav(){if(currentIndexPuse<25){currentIndexPuse=(currentIndexPuse+5)};scrollLeft()}
function nextnav(){if(currentIndexPuse<25){currentIndexPuse=(currentIndexPuse+5)};scrollRight()}
function sliderStart(){maxSliders=document.querySelector('.slides').querySelectorAll('figure').length;setInterval(function(){if((maxSliders>0)){if(currentIndexPuse>0){currentIndexPuse=(currentIndexPuse-5)}else{scrollLeft();}}},5000)}
function scrollLeft(){var a=currentIndex-1;if(a>=maxSliders){currentIndex=(0);a=0}else{currentIndex=(a)}if(a<0){currentIndex=(maxSliders);a=maxSliders-1}else{currentIndex=(a)};document.querySelector('.slides').style.transform ="translateX( "+(a*100)+"%)";};
function scrollRight(){ var a=currentIndex+1; if(a>=maxSliders){currentIndex=(0);a=0}else{currentIndex=(a)} if(a<0){currentIndex=(maxSliders);a=maxSliders-1}else{currentIndex=(a)} document.querySelector('.slides').style.transform ="translateX( "+(a*100)+"%)"; };
function figureClick(e){e.preventDefault();if(e.target.getAttribute('href')&&e.target.getAttribute('href')!==""){window.location.href=e.target.getAttribute('href');}}
setTimeout(function(){sliderStart()},1000)
var th=localStorage.getItem('theme')||'th0';
setTimeout(function(){
    var newId=parseInt(th.replace('th',''));
    var newValue=themesDynamicState.themes[newId].color;
    document.body.setAttribute('theme','th'+newId);
    var thc= document.querySelectorAll('[color]');
    for(var t in thc){if(thc[t]&&thc[t].setAttribute){if(thc[t].hasAttribute('content')&&thc[t].tagName!=="body"){thc[t].setAttribute('content',newValue)}else{thc[t].setAttribute('color',newValue)}}};
}, 1500);
function onDeferredPromptEventStart(e){
deferredPrompt.prompt();
}
function onDeferredPromptEvent(e){
deferredPrompt.prompt();
};
function onClickInstallApp(e){
deferredPrompt.prompt();
deferredPrompt.userChoice.then(function(resp){
    if(resp&&resp.outcome&&resp.outcome!=="dismissed"){
        setTimeout(function(){Notification.requestPermission();}, 1000);
    }else{
        Notification.requestPermission();       
    }
})
}
