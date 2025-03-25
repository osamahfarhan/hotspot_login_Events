Config({
    "network":{
        "name":"network",
        "preff":"شبكة",
        "suff":"اللاسلكية",
        "newsline":" ", // شريط اعلاني عند تسجيل الدخول
    },
    "service-number": "777777777",
    "https":false,
    "url":"http://s.com",
    "login-type": "both", //both=username and password ,, passwordAsUser = username == password ,, User == no passwprd
    "login-chap": 0,
    "news-line": "",
    "input-type": "text",
    "usernameType": "text",
    "passwordType": "text",
    "input-autocomplete": "on",
    "input-rm-white-spaces": 1,
    "input-to-lower": 1,
    "input-to-upper": 0,
    "input-to-arabic-numbers": 1,
    "input-only-numbers": 0,
    "input-no-numbers": 0,
    "input-only-alphanumeric": 1,
    "input-to-tel-type-when": 0,
    "enable-hot-cookie": 1,
    "enable-hot-blocker": 1,
    "clear-router-cookie": 1,
    "clear-hot-cookie": 1,
    "block-time": 2,
    "try-count": 20,
    "warn-when": 10,
    "warn-message": "تحذير !! عدد محاولاتك الخاطئة اصبح {{tryCounter}} محاولات, عدد المحاولات المسموح بها هي {{tryCount}} محاولات فقط, عدد محاولاتك المتبقية {{restTryCount}} محاولات, سيتم حظرك لمدة {{blockTime}} دقائق اذا تجاوزت العدد المسموح للمحاولات",
    "price-button": true,
    "sell-point-button": true,
    "app-store-status-button": true,
    "show-date-field": true,
    "loan-button": true,
    "redirect-to-esterahah": "http://10.10.10.10/",
    "redirect-to-mobasher": "http://10.10.10.10/liveStream",// orWithProtocol: ex, https://google.com leave it blank if dont need mobasher button
    "app-store-base-url": "",// orWithProtocol: ex, http://192.168.10.10/app/ // leave it blank if locally
    "app-store-base-url-ext": ".html",
    "change-speed-status-button": false,
    "app-store-login-button": false,
    "app-stream-login-button": false,
    "streemn1-text": false,
    "streemn2-text": false,
    "streemn3-text": false,
    "streemn4-text": false,
    "loginspeedsmode": true,
    "loginerrors":{"user&not found":"لقد ادخلت الكرت بطريقة غير صحيحة، الرجاء المحاولة مرة اخرى","simultaneous session limit reached|no more sessions are allowed|already logged in":"المعذرة ، هذا الكرت مستخدم حالياً في جهاز آخر","invalid password":"تاكد من كتابة كلمة المرور بشكل صحيح","uptime limit reached|no more online time|uptime limit|no more online time left":"عذراً لقد انتهى الوقت المتاح لك","traffic limit|transfer limit reached":"لقد انتهى رصيد هذا الحساب","invalid username or password|not found|username doesn":"لقد ادخلت اسم المستخدم بطريقة غير صحيحة، الرجاء المحاولة مرة اخرى","no valid profile found|expired prepaid card":"لقد انتهت صلاحية هذا الكرت","invalid calling-station-id":"هذا الحساب مقترن بجهاز آخر!","server&is&not&responding":"هذا الحساب غير موجود, يرجى التأكد والمحاولة مرة اخرى","web&browser&did&not&send":"يرجى محاولة ادخال الكرت مرة اخرى","allowed to log in from this mac":"لايحق لك استخدام هذا الكرت, الكرت محجوز لمستخدم اخر!"},
    "loginspeeds": { "SPN": ["سرعة اقتصادية  ", "  سرعة عادية  ", " سرعة متوسطة ", "سرعة عالية "] },
    "speedselected":"0",
    "loana-text": "خدمة سلفني هي خدمة تتيح لك اخذ سلفة  وسدادها في وقت اخر",
    "ramadan-offer-text": "خدمة سهر هي خدمة تعطيك رصيد اضافي 20% عند تعبئة كرت جديد في رمضان الساعة 8 صباحا الى 12 ظهرا بقية الاشهر الساعة 1 ليلا الى 6 صباحا",
    "friday-offer-text": "عرض الجمعة هي خدمة تعطيك رصيد اضافي 20% عند تعبئة كرت جديد طوال يوم الجمعة",
    "collect-and-win-text": "اجمع واربح هي خدمة تعطيك كرت مجاني تلقائيا عند اكمال استخدام 10 كروت من فئة محددة خلال مدة اقصاها 7 ايام",
    "newsline":[  // شريط اعلاني عند في الاعلى
        {"text":" "}, 
        {"text":" "},
        {"text":" "}
    ],
    "sliders":[
        {"text":"وصف الصوره","type":"img","src":"sliders/1.jpg","href":""}, // صور متحركة 
        {"text":" ","type":"img","src":"sliders/2.jpg","href":""}
    ],
    "profiles": [
        { "price": "100 ريال", "time": "3 ساعات", "transfer": "350 ميجا بايت", "validity": "يوم" },
        { "price": "200 ريال", "time": "7 ساعه", "transfer": "750 ميجا بايت", "validity": "3 ايام" },
        { "price": "300 ريال", "time": "مفتوح", "transfer": "800 ميجا بايت", "validity": "4 أيام" },
        { "price": "500 ريال", "time": "مفتوح", "transfer": "1500 ميجا بايت", "validity": "6 ايام" },
        { "price": "3100 ريال", "time": "مفتوح", "transfer": "10 جيجا بايت", "validity": "30 يوم" },
    ],
    "sell-points": [
        {"name":"بقالة الخير"},
        {"name":"بقالة الحميدي"},

    ]
})
