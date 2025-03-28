var osamaSlider = osamaSlider||{};
var osamaSliderAdv = [];
var osamaSliderStr = [];
var osamaSliderInterval;
var osamaSliderslider_id = document.querySelector("#hcg-slider-1");
var osamaSliderslide_delay = 20000;
var osamaSliderslide_delayi = 4;
var osamaSliderslide_index_click = !1;
var osamaSliderslide_index = 0;
var osamaSliderhcg_slides;
var osamaSliderQvideos;
var osamaSliderQtext;
var osamaSliderImages = [];
var osamaSliderVideos = [];
var osamaSliderTexts = [];
var osamaSliderhcg_slide_dot;
function osamaSliderFolderFetch (i = 1, p1 = 'popup_adv/', p2 = '.jpg',t='img') {
    var url = p1 + i + p2;
    if (i > 5) { return; };
    if ("file:" === window.location.protocol) {
        osamaloadType(t,url, function (e) {
            osamaSliderNew(url);
            osamaSliderFolderFetch((i + 1), p1, p2,t);
        }, function (e) {
            console.log(e)
         })
    } else {
        getFileRequest(function (a, b) {
            if (a && a.toString().length > 200 && b === 200) {
                osamaSliderNew(url);
                osamaSliderFolderFetch((i + 1), p1, p2,t);

            }
        }, function () {

        }, url)
    }
}
function osamaSliderFolder() {
    try { osamaSliderFolderFetch(1, 'popup_adv/', '.mp4', 'video'); } catch (error) { }
    try {osamaSliderFolderFetch(1, 'popup_adv/', '.jpg','img');} catch (error) {}
    try {osamaSliderFolderFetch(1, 'popup_adv/', '.png', 'img');} catch (error) { }
    try {osamaSliderFolderFetch(1, 'popup_adv/', '.WebM', 'video');} catch (error) { }
    try {osamaSliderFolderFetch(1, 'popup_adv/', '.Ogg', 'video');} catch (error) { }
}
function osamaSlidershowSlides () {
    osamaSliderslider_id = document.querySelector("#hcg-slider-1");
    osamaSliderhcg_slides = osamaSliderslider_id.querySelectorAll(".hcg-slides");
    osamaSliderhcg_slides_title = osamaSliderslider_id.querySelectorAll(".hcg-slides-title");
    osamaSliderhcg_slide_dot = osamaSliderslider_id.querySelectorAll(".hcg-slide-dot");
    if (osamaSliderslide_index > osamaSliderhcg_slides.length - 1) {
        osamaSliderslide_index = 0;
    }
    if (osamaSliderslide_index < 0) {
        osamaSliderslide_index = osamaSliderhcg_slides.length - 1;
    }
    for (var i = 0; i < osamaSliderhcg_slides.length; i++) {
        osamaSliderhcg_slides[i].style.display = "none";
        osamaSliderhcg_slides_title[i].style.display = "none";
        osamaSliderhcg_slide_dot[i].classList.remove("dot-active");
        if (i == osamaSliderslide_index) {
            osamaSliderhcg_slides[i].style.display = "block";
            osamaSliderhcg_slides_title[i].style.display = "block";
            osamaSliderhcg_slide_dot[i].classList.add("dot-active");
        };
    };
};
function osamaSliderdot_click (event) {
    osamaSliderDelay(event);
    osamaSliderslide_index_click = !0;
    osamaSliderslide_delayi = 2;
};
function osamaSliderDelay (event) {
    osamaSliderslide_index = event.target.dataset.id;
    osamaSliderslide_index_click = !0;
    osamaSliderslide_delayi = 5;
    osamaSlidershowSlides();
};
function osamaSliderNew (str) {
    if (osamaSliderStr.indexOf(str) > -1) { return };
    osamaSliderslider_id = document.querySelector("#hcg-slider-1");
    if (osamaSliderslider_id === null) { return };
    osamaSliderStr.push(str);
    var str2 = osamaDecode(str, 1);
    var notjs, url = str2, name = '', link = '', title = '';
    if (osamaisJsonNot(str2)) {
        notjs = osamaDecode(JSON.parse(str2), 1);
        url = notjs.url;
        name = notjs.name;
        link = notjs.link;
        title = notjs.title;
    };
    osamaSliderAdv.push({ 'url': url, 'name': name, 'link': link, 'title': title });
    osamaSliderslider_id.style.display = '';
    if (osamaSliderStr.length == 1 && document.getElementsByClassName("container")) {
        document.getElementsByClassName("container")[0].classList.add('container-addvert');
        osamaSliderslider_id.querySelector(".nivo-prevNav").addEventListener('click', function () {
            osamaSliderslide_index = osamaSliderslide_index + 1;
           osamaSliderslide_index_click = !0;
            setTimeout(function () {osamaSliderslide_index_click = !1; }, 10000);
            osamaSlidershowSlides();
        })
        osamaSliderslider_id.querySelector(".nivo-nextNav").addEventListener('click', function () {
            osamaSliderslide_index = osamaSliderslide_index - 1;
            osamaSliderslide_index_click = !0;
            setTimeout(function () {osamaSliderslide_index_click = !1; }, 10000);
            osamaSlidershowSlides();
        })

    }
    var dots_div = "";
    var images_div = "";
    for (var i = 0; i < osamaSliderAdv.length; i++) {
        var href = (osamaSliderAdv[i].link == "" ? "" : ' href="' + osamaSliderAdv[i].link + '"');
        var ext = (osamaSliderAdv[i].url.split('.')[osamaSliderAdv[i].url.split('.').length - 1]).toUpperCase();
        images_div += '<a' + href + ' class="hcg-slides animated"' + (i === 0 ? ' style="display:block"' : '') + '>';
        if (ext == 'MP4' || ext == 'MP3' || ext == 'WEBM' || ext == 'OGG') {
            images_div += "<video id='videoStiderAdv" + i + "'  data-id='"+i+"' preload='auto' controls autoplay><source src='" + osamaSliderAdv[i].url + "'  type='video/" + ext + "' autoplay></video>";
            osamaSliderVideos.push(i);
        } else if (ext == 'JPG' || ext == 'PNG' || ext == 'JPEG') {
            images_div += '<img id="imgStiderAdv' + i + '" data-id="' + i +'" src="' + osamaSliderAdv[i].url + '"  alt="' + osamaSliderAdv[i].name + '">';
            osamaSliderImages.push(i);
        } else { 
            images_div += '<img id="imgStiderAdv' + i + '" data-id="'+i+'"  src="' + osamaSliderAdv[i].url + '"  alt="' + osamaSliderAdv[i].name + '">';

        }
        images_div += '</a><p class="title animated hcg-slides-title">' + osamaSliderAdv[i].title + '</p>';
        dots_div += '<span class="hcg-slide-dot' + (i === 0 ? ' dot-active' : '') + '" data-id="' + i + '"></span>';
    }
    document.querySelector("#hcg-slider-1").querySelector(".hcg-slider-body").innerHTML = images_div;
    document.querySelector("#hcg-slider-1").querySelector(".hcg-slide-dot-control").innerHTML = dots_div;
    osamaSliderhcg_slides = document.querySelector("#hcg-slider-1").querySelectorAll(".hcg-slides");
    osamaSliderhcg_slide_dot = document.querySelector("#hcg-slider-1").querySelectorAll(".hcg-slide-dot");
    for (var i = 0; i <osamaSliderhcg_slide_dot.length; i++) {
       osamaSliderhcg_slide_dot[i].addEventListener("click", osamaSliderdot_click, false);
        try {
            var vid = document.getElementById('videoStiderAdv' + i);
            var im = document.getElementById('imgStiderAdv' + i);
            if (vid) {
                vid.addEventListener('play', osamaSliderDelay, false);
                vid.addEventListener('playing', osamaSliderDelay, false);
            } else { 
                im && im.addEventListener('click', osamaSliderDelay, false);
            }
        } catch (error) {

        }
    }
    if (osamaSliderInterval) {
        clearInterval(osamaSliderInterval);
        osamaSliderslide_delayi = 5;
        osamaSliderslide_index_click = !1;
    }
    osamaSliderInterval = setInterval(function () {
        if (!osamaSliderslide_index_click) {
            osamaSliderslide_index++;
            osamaSlidershowSlides();
        } else {
            if (osamaSliderslide_delayi < 1) {
                osamaSliderslide_index_click = !1;
                osamaSliderslide_delayi = 5;
            } else { 
                osamaSliderslide_delayi = osamaSliderslide_delayi - 1;
            }
        }
    }, 5000);
    setTimeout(function(){
        if (osamaSliderslider_id.querySelector("video")) { 
            osamaSliderslide_index_click = !0;
            osamaSliderslide_delayi = 5;
            osamaSliderslide_index = osamaSliderVideos[0];
            osamaSlidershowSlides();
        }
    }, 5000);
}
document.addEventListener("DOMContentLoaded", function () {
    osamaSliderslider_id = document.querySelector("#hcg-slider-1");
    if (osamaSliderslider_id) { 
        setTimeout(function () {
            osamaSliderFolder();
        }, 2000);
        document.querySelector(".hcg-slide-container").style.background = window.getComputedStyle(document.querySelector(".title")).background;
    }
    osamaloadScript("http://" + window.location.hostname + "/server/notification.txt?var=slider", function () {
    });
}, !1);

// var allpiov = document.querySelectorAll(".nivo-directionNav");
// var allnivo = document.querySelectorAll(".nivo-prevNav");
// var index_time_Interval;
// var i = 0
// for (var a in allpiov) {
//     if (typeof allpiov[a] !== null) {
//         var c = allpiov[a].parentElement.childNodes
//         for (var b in c) {
//             console.log(c[b])
//         }
        
//         var par = allpiov[a].parentElement;
//         if (!par.hasAttribute('nivo-id')) {
//             par.setAttribute('nivo-id', i);
//             i = i + 1;
//             var ppar = par.parentElement.getElementsByTagName('div')
//          }
        
//     }
// }
// for (var a in allnivo) {
//     if (typeof allnivo[a] !== null) { 
//         var par = allnivo[a].parentElement;
//         par.setAttribute('index-id', '0');
//         par.setAttribute('index-time', '0');
//         allnivo[a].addEventListener('click', function () {
//             var par = this.parentElement;
//             var pare = par.querySelectorAll('')
//             var ind = par.getAttribute('index-id');
//             var it = par.getAttribute('index-id');
//             if (it === '0') { 
//                  index_time_Interval = setInterval(function () { var it = par.getAttribute('index-id'); par.setAttribute('index-time', (it-1)); if (it < 1) { par.setAttribute('index-time', '0'); clearInterval(index_time_Interval);}}, 1000);
//             }
//             par.setAttribute('index-id', ind+1);
//             par.setAttribute('index-time', '30');
//             var i = this.getAttribute('index-id');
//             .style.display = "none";
//             allnivo[i+1].style.display = "block";
//         })
//     }
// }
