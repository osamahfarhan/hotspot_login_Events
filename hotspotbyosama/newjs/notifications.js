var Banda = Banda || {};
var osamaNotifications = osamaNotifications || {};
var osamaNotificationsIsOpen = false;
function osamaNotificationsisJsonNot (s) {
    if ((/[\{].*[\}]/gi).test(s)) {
        var o;
        try {
            o = JSON.parse(s);
        } catch (error) {

        }
        if (typeof o == "object" && !(o.hasOwnProperty("length"))) { return true };
    };
    return false;
};
var osamaNotificationsVideoTimeout;
function osamaNotificationsVideo  (str) {
    if (str && str.length)
        if (osamaNotificationsIsOpen) {
            try {
                clearTimeout(osamaNotificationsVideoTimeout);
            } catch (error) {

            }
            osamaNotificationsVideoTimeout = setTimeout(function () {
                osamaNotificationsVideo(str);
            }, 3000);
        } else {
            osamaNotificationsIsOpen = true;
            var str2 = osamaDecode(str, 1);
            if (osamaNotificationsisJsonNot(str2)) {
                var notjs = osamaDecode(JSON.parse(str2), 1);
                Swal.fire(
                    {
                        html: "<video width='320' height='240' id='videoAdv' preload='auto' controls autoplay><source src='" + notjs.url + "'  type='video/" + notjs.url.split('.')[notjs.url.split('.').length - 1] + "' autoplay></video>",
                        backdrop: "rgba(0,0,0,0.86)",
                        allowOutsideClick: false,
                        showConfirmButton: true,
                        confirmButtonText: "اغلاق",
                        timer: 40000,
                        didOpen: function () {
                            setTimeout(function (){
                                document.getElementById('videoAdv').play();
                            }, 1500);
                        },
                        ...notjs
                    }).then(function (e){
                        osamaNotificationsIsOpen = false
                    })

            } else {
                try {
                    var videoRequest = fetch(str2, { mode: "no-cors", RequestMode: "no-cors" }).then(function(response){return response.blob()});
                    videoRequest.then(function(blob){
                        Swal.fire(
                            {
                                html: "<video width='320' height='240' id='videoAdv' preload='auto' controls autoplay></video>",
                                backdrop: "rgba(0,0,0,0.86)",
                                allowOutsideClick: false,
                                showConfirmButton: true,
                                confirmButtonText: "اغلاق",
                                timer: 60000,
                                didOpen: function () {
                                    document.getElementById('videoAdv').src = window.URL.createObjectURL(blob);
                                    setTimeout(function (){
                                        document.getElementById('videoAdv').play();

                                    }, 1500);
                                },
                            }).then(function (e){
                                osamaNotificationsIsOpen = false
                            })
                    });
                } catch (error) {
                    Swal.fire(
                        {
                            html: "<video width='320' height='240' id='videoAdv' preload='auto' controls autoplay></video>",
                            backdrop: "rgba(0,0,0,0.86)",
                            allowOutsideClick: false,
                            showConfirmButton: true,
                            confirmButtonText: "اغلاق",
                            timer: 60000,
                            didOpen: function () {
                                document.getElementById('videoAdv').src = str2;
                                setTimeout(function (){
                                    document.getElementById('videoAdv').play();
                                }, 1500);
                            },
                        }).then(function (e){
                            osamaNotificationsIsOpen = false
                        })
                }
            }
            osamaNotificationsLast = (new Date).getTime();
        }
}
var osamaNotificationsImageTimeout;
function osamaNotificationsImage (str) {
    if (str && str.length)
        if (osamaNotificationsIsOpen) {
            try { clearTimeout(osamaNotificationsImageTimeout); } catch (err) { }
            osamaNotificationsImageTimeout = setTimeout(function () { osamaNotificationsImage(str); }, 6000);
        } else {
            osamaNotificationsIsOpen = true;
            setTimeout(function () {
                var str2 = osamaDecode(str, 1);
                var notjs, link = '';
                if (osamaNotificationsisJsonNot(str2)) {
                    notjs = osamaDecode(JSON.parse(str2), 1);
                    str2 = notjs.url;
                    link = notjs.link;
                };
                try {
                    var imgRequest = fetch(str2, { mode: "no-cors", RequestMode: "no-cors" }).then(function(response){return response.blob()});
                    imgRequest.then(function(blob){
                        Toast.fire({
                            imageUrl: window.URL.createObjectURL(blob),
                            imageHeight: 300,
                            position: "top",
                            imageAlt: "advimg",
                            backdrop: "rgba(0,0,0,0.86)",
                            showConfirmButton: true,
                            confirmButtonText: "اغلاق",
                            timer: 20000,
                            didOpen: function () {
                                if (link != '')
                                    Swal.getImage().addEventListener('click', function () {
                                        window.location.href = link;
                                    });
                            },
                            ...notjs,
                        }).then(function (e){
                            setTimeout(function () { osamaNotificationsIsOpen = false; }, 3000);
                        })
                    });
                } catch (error) {
                    Toast.fire({
                        imageUrl: str2,
                        imageHeight: 300,
                        imageAlt: "advimg",
                        position: "top",                    
                        showConfirmButton: true,
                        didOpen: function () {
                            if (link != '')
                                Swal.getImage().addEventListener('click', function () {
                                    window.location.href = link;
                                });
                        },
                        confirmButtonText: "اغلاق",
                        timer: 20000,
                    }).then(function (e){
                        setTimeout(function () { osamaNotificationsIsOpen = false; }, 3000);
                    })
                }
            }, 2000);
            osamaNotificationsLast = (new Date).getTime();
        }
}
var osamaNotificationsTextTimeout;
function osamaNotificationsText (str) {
    if (str && str.length)
        if (osamaNotificationsIsOpen) {
            try { clearTimeout(osamaNotificationsTextTimeout); } catch (err) { }
            osamaNotificationsTextTimeout = setTimeout(function () { osamaNotificationsText(str); }, 6000);
        } else {
            osamaNotificationsIsOpen = true;
            setTimeout(function () {
            var str2 = osamaDecode(str, 1);
            if (osamaNotificationsisJsonNot(str2)) {
                var notjs = osamaDecode(JSON.parse(str2), 1);
                if (notjs.link && notjs.link != '')
                    notjs.didOpen = function () {
                        Swal.getTitle().addEventListener('click', function () {
                            window.location.href = link;
                        });
                    },
                        Toast.fire(notjs).then(function (e){
                            setTimeout(function () { osamaNotificationsIsOpen = false; }, 3000);
                        });
            } else {
                Toast.fire({
                    text: str2,
                    icon: "info",
                    position: "top",
                    showConfirmButton: true,
                    confirmButtonText: "اغلاق",
                    timer: 20000,
                }).then(function (e){
                    setTimeout(function () { osamaNotificationsIsOpen = false; }, 3000);
                });
                }
            }, 2000);
            osamaNotificationsLast = (new Date).getTime();
        }
}
var osamaNotificationsNewTimeout;
var osamaNotificationsNewStr = "";
var osamaNotificationsNewCount = 0;
var osamaNotificationsNewOpened = false;
function osamaNotificationsNew (str) {
    if (str && str.length && !osamaNotificationsNewOpened)
        if (osamaNotificationsIsOpen) {
            try { clearTimeout(osamaNotificationsNewTimeout); } catch (error) { }
            osamaNotificationsNewTimeout = setTimeout(function () {
                osamaNotificationsNew(str);
            }, 6000);
        } else {
            osamaNotificationsNewOpened = true;
            osamaNotificationsIsOpen = true;
            if (osamaNotificationsNewStr != str) {
                osamaNotificationsNewStr = str;
                osamaNotificationsNewCount = osamaNotificationsNewCount + 1;
                setTimeout(function () {
                    var str2 = osamaDecode(str, 1);
                    Swal.fire({
                        text: str2,
                        icon: "info",
                        backdrop: "rgba(0,0,0,0.86)",
                        allowOutsideClick: false,
                        showConfirmButton: true,
                        confirmButtonText: "اغلاق",
                        timer: 20000,
                    }).then(function (e){
                        osamaNotificationsIsOpen = false
                    });
                }, 2000);
            }
            osamaNotificationsLast = (new Date).getTime();            
        }
}
function osamaNotificationsGet  (a = "") {
    setTimeout(function () {
        osamaloadScript("http://" + window.location.hostname + "/server/notification.txt?var=text", function () {
            setTimeout(function () {
                osamaloadScript("http://" + window.location.hostname + "/server/notification.txt?var=image", function () {
                    setTimeout(function () {
                        osamaloadScript("http://" + window.location.hostname + "/server/notification.txt?var=video", function () { });
                    }, 3000);
                });
            }, 3000);
        });
    }, 3000);
}
function osamaAdvGet (u = 'none') {
    return new Promise(function (resolve, reject) {
        osamaServer.Request({ 'FN': 'ADV', 'U': u }).then(function (e){
            if (e) resolve(e);
            else reject(e);
        }).catch(function (e){
            resolve(e);
        })
    });
};
setTimeout(function () {HappyWeekEnd("", ((hotspotConfig && hotspotConfig["network-name"]) || ""));}, 3000);
var osamaNotificationsLast = (new Date).getTime();
var osamaNotificationsToast = Swal.mixin({
    toast: true,
    showConfirmButton: false,
    timer: 20000,
    timerProgressBar: true,
    didOpen:function (toast){
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});
var NotsInterval;
var NotsIntervalIndex = 1;
var NotsInterval = setInterval(function () {
    osamaNotificationsGet(NotsIntervalIndex);
    NotsIntervalIndex = NotsIntervalIndex + 1;
}, 60000);
document.addEventListener("DOMContentLoaded", function () {
osamaloadScript("/server/notification.txt?var=text", function () {
    osamaloadScript("/server/notification.txt?var=image", function () {
        osamaloadScript("/server/notification.txt?var=video", function () { });
    });
});
}, !1);
