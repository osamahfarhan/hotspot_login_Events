'''
الصفحة تتعدل من مجلد config فقط
في ملف
config.js

"network-name": " اسم الشبكة",
"service-number": "رقم التواصل",
نوع الكروت
اسم مستخدم وكلمة سر مختلفين
"login-type": "both",
اسم مستخدم فقج
"login-type": "User",
اسم مستخدم وكلمة سر متشابهين
"login-type": "passwordAsUser",
كروت ارقام وحروق
"input-type": "text",
"input-to-tel-type-when": 0,
"input-to-lower": 1,
"input-to-upper": 0,
"input-only-numbers": 0,
كروت ارقام وفقط
"input-type": "tel",
"input-to-tel-type-when": 1,
"input-to-lower": 0,
"input-to-upper": 0,
"input-only-numbers": 1,
السرعات
"login-speeds": { "SPN":
["سرعة اقتصادية 1M ", "  سرعة عادية 2M ", " سرعة متوسطة 8M", "سرعة عالية 16M","مفتوح 200M"] },

في ملف configExtra
تكتب الباقات ونقاط البيع

في الميكروتيك في سكربت الدخول onlogin

:do {
:global PROFILEONLOGIN;
[$PROFILEONLOGIN \
S1=("قيمة السرعة") N1=("اسم السرعة الاولى") \
S2=(""قيمة السرعة") N2=("اسم السرعة الثانية") \
S3=(""قيمة السرعة") N3=("اسم السرعة الثالثة") \
S4=(""قيمة السرعة") N4=("اسم السرعة الرابعة") \
AN=عدد الاكتف
PR=("اسم الباقة")
 TY= 
نوع السرعات اما PCQ   او  SIMPLE
SPD= رقم السرعة الافتراضي
UPD= ايقاف التحديثات الافتراضي
U=("$user")  A=[:tostr $address] M=($"mac-address")];
} on-error={}

انقل الملفات الى الروتر
ثم قم باستيراد الملف import
/import ("import");
ضع محتويات ملف onlogin في بروفايل المستخدمين ip hotspot user profile
ضع محتويات ملف onlogout في بروفايل المستخدمين ip hotspot user profile
'''
