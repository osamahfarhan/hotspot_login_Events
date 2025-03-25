var osamaStatusShowLowBalancen = 0;
var myupd = -1;
function osamaStatusShowLowBalance(e) {
    try {
        if (e && (e['username'].toString()).indexOf('T-') == 0) { return "" };
        if (osamaNotificationsIsOpen && osamaStatusShowLowBalancen < 10) {
            osamaStatusShowLowBalancen = osamaStatusShowLowBalancen + 1;
            return setTimeout(function () {
                osamaStatusShowLowBalance(e);
            }, 1000);
        }
        osamaNotificationsIsOpen = true;
        osamaStatusShowLowBalancen = osamaStatusShowLowBalancen + 1;
        if (e && e.remain_bytes_total != '' && e.remain_bytes_total != '-1' && e.remain_bytes_total != '0' && e.remain_bytes_total != '00' && Math.round((parseInt(e.remain_bytes_total) / 1048576)) < 50) {
            Toast.fire('عزيزي المستخدم ', ' كمية التحميل اقل من 50 ميجا ', 'warning').then(function(e) {
                setTimeout(function () {
                    osamaNotificationsIsOpen = false;
                }, 1000);
            })
        } else if (e && e.session_time_left_secs != "-1" && e.session_time_left_secs != "-1" && e.session_time_left_secs != "0" && e.session_time_left_secs != "00" && parseInt(e.session_time_left_secs) < 1800 && parseInt(e.session_time_left_secs) > 1) {
            Toast.fire('عزيزي المستخدم ', ' الوقت المتبقي اقل من 30 دقيقة ', 'warning').then(function(e) {
                setTimeout(function () {
                    osamaNotificationsIsOpen = false;
                }, 1000);
            })
        } else {
            setTimeout(function () {
                osamaNotificationsIsOpen = false;
            }, 1000);
            osamaStatusShowLowBalancen = 5;
        }
    } catch (error) {
    }
}
var osamaStatusCounts = 10;
function osamaStatusUpdate (e, sp, a = !1, s = !1) {
    var SPN, SP, PR, UPD = myupd||'0';
    if (e) {
        UPD = e['UPD'];
        SPN = e['SPN'];
        SP = e['SP'];
    }

    var myUPD = document.getElementById('myUpdates');
    var mySPD = document.getElementById('mySpeed');
    try {
        if (typeof SPN[SP] === "undefined") { SP = e['X'] || '0'; };
        if (typeof SPN[SP] === "undefined") { SP = 0; };
        if (typeof SP == "string") { SP = parseInt(SP); };
        if (typeof sp == "string" && sp) { sp = parseInt(sp); };
        if (typeof UPD == "string") { UPD = parseInt(UPD); };
        if ("number" !== typeof sp) { sp = parseInt(e['X']); };
        if ("number" !== typeof sp) { sp = 0; };
    } catch (error) {
    }
    try {
        var SN = osamaSpeedShowSelect(e, sp);
        osamaIsSpeed(SPN) && osamaSpeedStorageGet(jsonData['username'], e)
        
    } catch (error) {
    }
    if (s) {
        mySPD&&osamaShowParent(mySPD);
        mySPD.innerText = SPN[SP] || 'تلقائية';
        s && Toast.fire({
            icon: ((SP == sp) ? "success" : "error"),
            title: ((SP == sp) ? 'تم تغيير سرعتك بنجاح' : 'لم ينم تغيير سرعتك'),
            text: 'سرعتك الحالية ' + SPN[SP] || SPN[SP.toString()] || 'تلقائية',
        }).then(function(e) {
            osamaNotificationsIsOpen = false;
            osamaStorageSave('_Status', 'SP', SP);
        });
    }
    if (myUPD && UPD > -1) {
        osamaShowParent(myUPD);
        myUPD.innerText = (UPD == 1) ? 'التحديثات موقفة ' : 'التحديثات تعمل ';
        myUPD.setAttribute('class', UPD == 1 ? 'osamaUpdatsOn' : (UPD == 0 ? 'osamaUpdatsOff' : ''));
        a && Toast.fire({
            icon: "success",
            title: 'التحديثات',
            text: UPD == 1 ? 'تم ايقاف التحديثات' : 'تم تشغيل التحديثات',
        }).then(function(e) {
            osamaNotificationsIsOpen = false;
            osamaStorageSave('_Status', 'UPD', UPD);
        });
    };
    if (e && typeof e['STA'] === "object") {
        osamaNotificationsIsOpen = true;
        var us = e['STA']['US'];
        var ps = e['STA']['PS'];
        if (us && pa) {
            setTimeout(function () { Swal.fire(e['STA']).then(function(e) { if (e.isConfirmed) { osamaLogOutIn(us, ps) } }) }, 2000);

        } else {

            setTimeout(function () { Swal.fire(e['STA'])}, 2000);
        }
        setTimeout(function () { osamaNotificationsIsOpen = false; }, 30000);
    };
    if (e && typeof e['STATUS'] !== "undefined" && typeof e['STATUS'] === "object") {
        for (var n in e['STATUS']) {
            var myName = document.getElementById('status-' + n + '-name');
            var myValue = document.getElementById('status-' + n + '-value');
            if (myName !== null && myValue !== null && e['STATUS'][n] && e['STATUS'][n].length > 1&& n.length > 1) {
                myName.innerText = e['STATUS'][n][0];
                myValue.innerText = e['STATUS'][n][1];
                osamaShowParent(myName);
            };
        };
    };
    if (e && typeof e['STN'] === "object") {
        for (var i in e['STN']) {
            var myName = document.getElementById('status-' + i + '-name');
            var myValue = document.getElementById('status-' + i + '-value');
            if (myName !== null && e['STN'][i] && e['STN'][i].length>1) {
                myName.innerText = e['STN'][i];
                myValue.innerText = e['STV'][i];
                osamaShowParent(myName);
            };
        };
    } else {
        for (var i = 0; i < 5; i++) {
            var myName = document.getElementById('status-' + i + '-name');
            if (myName !== null) {
                osamaHiddeParent(myName);
            };
        };
    }
    if (e && typeof e['STH'] !== "undefined") {
        var myHtml = document.querySelector('[mysth]');
        if (myHtml !== null) {
            osamaShowElem(myHtml);
            myHtml.innerHTML = e['STH'];
        }
    } else {
        var myHtml = document.querySelector('[mysth]');
        if (myHtml !== null) {
            osamaHiddeElem(myHtml);
        }
    }
}
var osamaStatusUpdates = {};
function osamaStatusUpdatesChange(callBack = nullFun, callBackE = nullFun) {
    var myUPD = document.getElementById('myUpdates');
   sLoading(500);
    osamaHotspotJson(function (e) {
            var ua = "";
            if (e) { ua = e.username; };
            if (myUPD.getAttribute('class') == 'osamaUpdatsOff') {
                Swal.fire({
                    title: " هل تريد ايقاف التحديثات لجهازك ؟ ",
                    text: " عند ايقاف التحديثات تعني منع جهازك من تحديث البرامج والتطبيقات بالاضافة الى جوجل بلاي واب ستور  ",
                    showCancelButton: true,
                    confirmButtonText: "ايقاف",
                    allowOutsideClick: false,
                    showCloseButton: false,
                }).then(function(result) {
                    if (result.isConfirmed) {
                       sLoading(500);
                        osamaServerRequest(function(e){
                           sClows(1000);
                            e && (e['UPD'] == 1 || e['UPD'] == "1") && osamaStatusUpdate(e, e['SP'], 1, 0);
                            callBack(e);
                        },function(e){
                           sClows(1000);
                            callBackE(e);
                            e && (e['UPD'] == 1 || e['UPD'] == "1") && osamaStatusUpdate(e, e['SP'], 1, 0);
                        }, { "FN": 'STOPUP', "U": 'none' });
                    } else if (result.isDenied) {
                       sClows(1000);
                        callBack(e);
                    }
                });
            } else {
                Swal.fire({
                    title: " هل تريد تشغيل التحديثات مره اخرى لجهازك ؟ ",
                    text: "  السماح لجهازك من تحديث البرامج والتطبيقات",
                    showCancelButton: true,
                    confirmButtonText: "تشغيل",
                    allowOutsideClick: false,
                    showCloseButton: false,
                }).then(function(result) {
                    if (result.isConfirmed) {
                        osamaServerRequest(function (e) {
                           sClows(1000);
                            e && (e['UPD'] == 0 || e['UPD'] == "0") && osamaStatusUpdate(e, e['SP'], 1, 0);
                            callBack(e);
                        }, function (e) {
                           sClows(1000);
                            callBackE(e);
                            e && (e['UPD'] == 1 || e['UPD'] == "1") && osamaStatusUpdate(e, e['SP'], 1, 0);

                        }, { "FN": 'UNSTOPUP', "U": 'none' });
                        myupd = 1;
                    } else if (result.isDenied) {
                       sClows(1000);
                        callBack(e);
                    }
                });
            }
    }, function (e) {
           sClows(1000);
            callBackE(e);
        e && (e['UPD'] == 1 || e['UPD'] == "1") && osamaStatusUpdate(e, e['SP'], 1, 0);
        });
    
}


