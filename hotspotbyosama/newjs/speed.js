var  osamaSpeedSelect = 100;
function osamaSpeedStorageSave(e, u = '_Last') {
    try {var i=0;for (var sp in osamaStorageGet('_Speed')) {i = i + 1;};if (i> 10) {(window.localStorage||localStorage).removeItem('_Speed');}} catch (error) {}
    if (e && osamaIsSpeed(e['SPN'])) {
        osamaStorageSave('_Speed', '_Last', e);
        osamaStorageSave('_Speed', u, e);
        try {
            var spn = '';
            var sp = e[(e['X'] || e['SP'] || '0')];
            for (var sp in e['SPN']) {spn += ',' + e['SPN'][sp];}
            osamaCookiesSave('_SP', sp);
            osamaCookiesSave('_SPN', spn);
            osamaCookiesSave('_SPU', u);
            osamaCookiesSave('_UPD', (e['UPD'] || '0'));
        } catch (error) {

        }
    }
};
function osamaSpeedHiddeAll() {
    osamaHiddeThis((document.querySelectorAll("[spso]")));
    osamaHiddeThis((document.querySelectorAll("[spsi]")));
    osamaHiddeThis((document.querySelectorAll("[spsl]")));
    osamaHiddeParent(document.getElementById('mySpeed'));
    osamaHiddeParent(document.getElementById('myUpdates'));
    osamaHiddeParent(document.getElementById('myProfile'));
    osamaHiddeAllparent(document.querySelectorAll('[statusinfo]'));
}
function osamaSpeedRemoveSelect(me) {var a = document.querySelectorAll("[spsi]");if (a!==null) {for (var b in a) {var c = a[b];if ("object" == typeof c) {try{c.removeAttribute('checked');c.removeAttribute('aria-checked');c.checked=false}catch(e){}}}}}
function osamaSpeedShowSelect(e, n = -1) {
    var SPN, PR, NSP = 0, SSP = -1, SAP = false,UPD=myupd||'0';
    if (typeof n == "string") { n = parseInt(n); };
    if (typeof e['X'] == "string") { e['X'] = parseInt(e['X']); };
    if (typeof e['SP'] == "string") { e['SP'] = parseInt(e['SP']); };
    if (typeof e['SD'] == "string") { e['SD'] = parseInt(e['SD']); };
    if (typeof e['UPD'] == "string") { e['UPD'] = parseInt(e['UPD']); };
    UPD = e['UPD'];
    if (e && e['SPN']) { SPN = e['SPN']; NSP = n; PR = e.PR };
    try {
        if (n === 0) { NSP = 0 }
        else if (e && e['NSP'] && SPN[e['NSP']]) { NSP = e['NSP'] }
        else if (e && e['X'] !== !1 && SPN[e['X']]) { NSP = e['X']}
        else if (n === 0) { NSP = 0 }
        else if (e && e['SP'] !== !1 && SPN[e['SP']]) { NSP = e['SP'] }
        else if (e && e['SD'] !== !1 && SPN[e['SD']]) { NSP = e['SD'] }
        else { NSP = 0 }
    } catch (er) { };
    if ("string" == typeof NSP && NSP != "") { NSP = parseInt(NSP); };
    if ("number" !== typeof NSP) { NSP = parseInt(NSP); };
    if ("number" !== typeof NSP) { NSP = 0; };
    if ("number" !== typeof UPD || isNaN(UPD)) { UPD = 0; };
    myupd=UPD;
    osamaSpeedHiddeAll();
    var selectOptions = document.querySelectorAll("[spso]");
    var radioInputs = document.querySelectorAll("[spsi]");
    var speedLabels = document.querySelectorAll("[spsl]");
    var MySPD = document.getElementById('mySpeed');
    var myUPD = document.getElementById('myUpdates');
    var MyPro = document.getElementById('myProfile');
    var myUPD1 = document.getElementById('update1');
    var myUPD2 = document.getElementById('update2');
    myUPD1&&myUPD1.addEventListener("click", function (t) {
        myupd = this.checked?'1':'0';
        myUPD&&myUPD.setAttribute('class',this.checked ? 'osamaUpdatsOn' :  'osamaUpdatsOff');
        hideStatusPage();
    });
    myUPD2&&myUPD2.addEventListener("click", function (t) {
        myupd = this.checked?'1':'0';
        myUPD&&myUPD.setAttribute('class',this.checked ? 'osamaUpdatsOn' :  'osamaUpdatsOff');
        hideStatusPage();
    });
    osamaSpeedSelect = 0;
    if ("object" == typeof SPN && osamaIsSpeed(SPN)) {
        for (var b in SPN) {
            SAP = true;
            if (SPN[NSP] && MySPD !== null) {
                MySPD.innerText = SPN[NSP];
            }
            try {
                osamaShowElem(document.getElementById('speed_select'));
                // osamaShowElem(document.getElementById('speed_select_label'));
                document.getElementById('show-select').removeAttribute('selected');
                document.getElementById('show-select').style.display = 'none';
                (document.getElementById("speed_select")).options.selectedIndex = (NSP + 1);
                osamaSpeedSelect = NSP;
                (document.getElementById("speed_select")).value = NSP;
            } catch (error) { };
        
            osamaShowParent(MySPD);
            break;
        }
    } else { 
        if (document.getElementById('speed_select')) {
            try {
                document.getElementById('speed_select').style.display = 'none';
                (document.getElementById('speed_select')).options.selectedIndex = 0;
                document.getElementById('speed_select').value = '100';
                document.getElementById('speed_select_label').style.display = 'none';
            } catch (error) { };
        }        
    }
    if (UPD && UPD != "" && myUPD !== null) {
        osamaShowParent(myUPD);
    }
    if (PR && PR != "" && PR != "..." && MyPro !== null) {
        osamaShowParent(MyPro);
        MyPro.innerText = PR;
    }
    if (SPN && ("object" == typeof SPN)) {
        for (var b in SPN) {
            if ("string" == typeof b) { b = parseInt(b); if (isNaN(b)) { return false; }; };
            var c = selectOptions[b];
            var d = radioInputs[b];
            var f = speedLabels[b];
            osamaShowElem(f);
            osamaShowElem(c);
            osamaShowElem(d);
            $speedSelect&&osamaShowElem($speedSelect);
            if ("object" == typeof c) {
                c.innerText = SPN[b];
                c.addEventListener("click", function (t) {
                    osamaSpeedRemoveSelect();
                    osamaSpeedSelect = parseInt(this.value);
                    hideStatusPage();
                });
            }
            if ("object" == typeof f) {
                f.innerText = SPN[b];
                f.addEventListener("click", function (t) {
                    osamaSpeedRemoveSelect(this);
                    this.setAttribute('checked', 'true');
                    this.setAttribute('aria-checked', 'true');
                    osamaSpeedSelect = parseInt(this.value);
                    hideStatusPage();
                    this.checked=true;
                });
                f.addEventListener("change", function (t) {
                    osamaSpeedRemoveSelect();
                    this.setAttribute('checked', 'true');
                    this.setAttribute('aria-checked', 'true');
                    osamaSpeedSelect = parseInt(this.value);
                    hideStatusPage();
                    this.checked=true;
                });
            }
            if ("object" == typeof d) {
                d.addEventListener("click", function (t) {
                    osamaSpeedRemoveSelect()
                    this.setAttribute('checked', 'true');
                    this.setAttribute('aria-checked', 'true');
                    this.checked=true;
                    osamaSpeedSelect = parseInt(this.value);
                    hideStatusPage();
                });
                var g = d.value; if ("string" == typeof g) { g = parseInt(g); if (isNaN(g)) { return false; }; };
                if ((NSP == g)) {
                    if (MySPD !== null) { MySPD.innerText = SPN[b]; }
                    SSP = NSP;
                    osamaSpeedSelect = NSP;
                }
            }
        }
    }
    osamaSpeedRemoveSelect();
    if (document.getElementById("speed_select")) {
        var selectOptions = (document.getElementById("speed_select")).options;
        try {
            if (osamaSpeedSelect > -1 && osamaSpeedSelect < 19) {
                (document.getElementById("speed_select")).options.selectedIndex = (osamaSpeedSelect + 1);
                (document.getElementById("speed_select")).value = osamaSpeedSelect;
            }
        } catch (er) { }
        document.getElementById("speed_select").addEventListener("change", function () {
            var b = (document.getElementById("speed_select")).options.selectedIndex;
            osamaSpeedSelect = parseInt(selectOptions[b].value);
            if (MyPro) { MyPro.innerText = selectOptions[b].innerText; }
            if (radioInputs&&radioInputs[osamaSpeedSelect]) { radioInputs[osamaSpeedSelect].setAttribute('checked', 'true'); radioInputs[osamaSpeedSelect].setAttribute('aria-checked', 'true');radioInputs[osamaSpeedSelect].checked = true;}
        });
        document.getElementById("speed_select").addEventListener("click", function () {
            var b = (document.getElementById("speed_select")).options.selectedIndex;
            osamaSpeedSelect = parseInt(selectOptions[b].value);
            if (MyPro) { MyPro.innerText = selectOptions[b].innerText; }
            if (radioInputs&&radioInputs[osamaSpeedSelect]) { radioInputs[osamaSpeedSelect].setAttribute('checked', 'true'); radioInputs[osamaSpeedSelect].setAttribute('aria-checked', 'true');radioInputs[osamaSpeedSelect].checked = true;}            

        });
    };
    if (radioInputs && osamaSpeedSelect > -1 && osamaSpeedSelect < 19 && radioInputs[osamaSpeedSelect]) {
        radioInputs[osamaSpeedSelect].setAttribute('checked', 'true');
        radioInputs[osamaSpeedSelect].setAttribute('aria-checked', 'true');
        radioInputs[osamaSpeedSelect].checked = true;
    };
    if (UPD > -1) { 
        myUPD2&&(myUPD2.checked = (UPD==1));
        myUPD1 && (myUPD1.checked = (UPD == 1));
        myUPD&&myUPD.setAttribute('class', (UPD == 1) ? 'osamaUpdatsOn' :  'osamaUpdatsOff');
    }
    if (SSP > -1) {
        return true;
    }
    return false;
}
