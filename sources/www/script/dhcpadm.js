(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.application":"dhcpadm.Application","qx.debug":false,"qx.debug.databinding":false,"qx.debug.dispose":false,"qx.debug.io":false,"qx.debug.ui.queue":false,"qx.optimization.basecalls":true,"qx.optimization.comments":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.optimization.variants":true,"qx.optimization.whitespace":true,"qx.revision":"","qx.theme":"qx.theme.Flat","qx.version":"5.0.2","webapp.env.about_str1":"<b>&copy;2019by&nbsp;<a href=\"https://akscf.me/\" target=\"_blank\">AlexandrinKS</a></b>","webapp.env.app_name":"DHCP admin","webapp.env.app_prefix":"dhcpadm","webapp.env.app_version":"1.0.0","webapp.env.cfg_version":"1","webapp.env.login_dlg_caption":"DHCP admin","webapp.env.preferred_locale":"EN","webapp.env.rpc_url":"/rpc/","webapp.env.ws_enabled":"false","webapp.env.ws_url":"/ws","webapp.env.xor_key":"KC*RJCH^&YRC"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"dhcpadm":{"resourceUri":"resource","sourceUri":"script"},"qx":{"resourceUri":"resource","sourceUri":"script","sourceViewUri":"https://github.com/qooxdoo/qooxdoo/blob/%{qxGitBranch}/framework/source/class/%{classFilePath}#L%{lineNumber}"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":null,"en":null,"ru":null};
qx.$$locales = {"C":null,"en":null,"ru":null};
qx.$$packageData = {};
qx.$$g = {}

qx.$$loader = {
  parts : {"boot":[0]},
  packages : {"0":{"uris":["__out__:dhcpadm.2e5b7bd50a82.js"]}},
  urisBefore : [],
  cssBefore : [],
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  addNoCacheParam : false,

  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      if (qx.$$loader.addNoCacheParam) {
        euri += "?nocache=" + Math.random();
      }
      
      uris.push(euri);
    }
    return uris;
  }
};

var readyStateValue = {"complete" : true};
if (document.documentMode && document.documentMode < 10 ||
    (typeof window.ActiveXObject !== "undefined" && !document.documentMode)) {
  readyStateValue["loaded"] = true;
}

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function() {
    if (!this.readyState || readyStateValue[this.readyState]) {
      elem.onreadystatechange = elem.onload = null;
      if (typeof callback === "function") {
        callback();
      }
    }
  };

  if (isLoadParallel) {
    elem.async = null;
  }

  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

function loadCss(uri) {
  var elem = document.createElement("link");
  elem.rel = "stylesheet";
  elem.type= "text/css";
  elem.href= uri;
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);
var isLoadParallel = 'async' in document.createElement('script');

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }

  var item;

  if (isLoadParallel) {
    while (list.length) {
      item = list.shift();
      if (list.length) {
        loadScript(item);
      } else {
        loadScript(item, callback);
      }
    }
  } else {
    item = list.shift();
    loadScript(item,  function() {
      if (isWebkit) {
        // force async, else Safari fails with a "maximum recursion depth exceeded"
        window.setTimeout(function() {
          loadScriptList(list, callback);
        }, 0);
      } else {
        loadScriptList(list, callback);
      }
    });
  }
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap, callback) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]){
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap){
      if (!qxlocs[lang]) qxlocs[lang] = locMap[lang];
      else
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]){
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap){
      if (!qxtrans[lang]) qxtrans[lang] = trMap[lang];
      else
        for (var k in trMap[lang]) qxtrans[lang][k] = trMap[lang][k];
    }
  }
  if (callback){
    callback(dataMap);
  }
}

qx.$$loader.signalStartup = function ()
{
  qx.$$loader.scriptLoaded = true;
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
    qx.event.handler.Application.onScriptLoaded();
    qx.$$loader.applicationHandlerReady = true;
  } else {
    qx.$$loader.applicationHandlerReady = false;
  }
}

// Load all stuff
qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.cssBefore.length>0) {
    for (var i=0, m=l.cssBefore.length; i<m; i++) {
      loadCss(l.cssBefore[i]);
    }
  }
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){
      l.initUris();
    });
  } else {
    l.initUris();
  }
}

// Load qooxdoo boot stuff
qx.$$loader.initUris = function(){
  var l=qx.$$loader;
  var bootPackageHash=l.parts[l.boot][0];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.packages[l.parts[l.boot][0]].uris), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['0']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EHm":"E HH:mm","cldr_date_time_format_EHms":"E HH:mm:ss","cldr_date_time_format_Ed":"d E","cldr_date_time_format_Ehm":"E h:mm a","cldr_date_time_format_Ehms":"E h:mm:ss a","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"MMM y G","cldr_date_time_format_GyMMMEd":"E, MMM d, y G","cldr_date_time_format_GyMMMd":"MMM d, y G","cldr_date_time_format_H":"HH","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"E, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yQQQQ":"QQQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_short_fri":"Fr","cldr_day_format_short_mon":"Mo","cldr_day_format_short_sat":"Sa","cldr_day_format_short_sun":"Su","cldr_day_format_short_thu":"Th","cldr_day_format_short_tue":"Tu","cldr_day_format_short_wed":"We","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EHm":"E HH:mm","cldr_date_time_format_EHms":"E HH:mm:ss","cldr_date_time_format_Ed":"d E","cldr_date_time_format_Ehm":"E h:mm a","cldr_date_time_format_Ehms":"E h:mm:ss a","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"MMM y G","cldr_date_time_format_GyMMMEd":"E, MMM d, y G","cldr_date_time_format_GyMMMd":"MMM d, y G","cldr_date_time_format_H":"HH","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"E, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"E, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yQQQQ":"QQQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_short_fri":"Fr","cldr_day_format_short_mon":"Mo","cldr_day_format_short_sat":"Sa","cldr_day_format_short_sun":"Su","cldr_day_format_short_thu":"Th","cldr_day_format_short_tue":"Tu","cldr_day_format_short_wed":"We","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"ru":{"alternateQuotationEnd":"“","alternateQuotationStart":"„","cldr_am":"AM","cldr_date_format_full":"EEEE, d MMMM y 'г'.","cldr_date_format_long":"d MMMM y 'г'.","cldr_date_format_medium":"d MMM y 'г'.","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_E":"ccc","cldr_date_time_format_EHm":"E HH:mm","cldr_date_time_format_EHms":"E HH:mm:ss","cldr_date_time_format_Ed":"ccc, d","cldr_date_time_format_Ehm":"E h:mm a","cldr_date_time_format_Ehms":"E h:mm:ss a","cldr_date_time_format_Gy":"y G","cldr_date_time_format_GyMMM":"LLL y G","cldr_date_time_format_GyMMMEd":"E, d MMM y G","cldr_date_time_format_GyMMMd":"d MMM y 'г'. G","cldr_date_time_format_H":"H","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, dd.MM","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"ccc, d MMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMdd":"dd.MM","cldr_date_time_format_Md":"dd.MM","cldr_date_time_format_d":"d","cldr_date_time_format_h":"h a","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yLLLL":"LLLL y","cldr_date_time_format_yM":"MM.y","cldr_date_time_format_yMEd":"ccc, d.MM.y 'г'.","cldr_date_time_format_yMM":"MM.y","cldr_date_time_format_yMMM":"LLL y","cldr_date_time_format_yMMMEd":"E, d MMM y","cldr_date_time_format_yMMMM":"LLLL y","cldr_date_time_format_yMMMd":"d MMM y 'г'.","cldr_date_time_format_yMd":"dd.MM.y","cldr_date_time_format_yQQQ":"QQQ y 'г'.","cldr_date_time_format_yQQQQ":"QQQQ y 'г'.","cldr_day_format_abbreviated_fri":"пт","cldr_day_format_abbreviated_mon":"пн","cldr_day_format_abbreviated_sat":"сб","cldr_day_format_abbreviated_sun":"вс","cldr_day_format_abbreviated_thu":"чт","cldr_day_format_abbreviated_tue":"вт","cldr_day_format_abbreviated_wed":"ср","cldr_day_format_narrow_fri":"пт","cldr_day_format_narrow_mon":"пн","cldr_day_format_narrow_sat":"сб","cldr_day_format_narrow_sun":"вс","cldr_day_format_narrow_thu":"чт","cldr_day_format_narrow_tue":"вт","cldr_day_format_narrow_wed":"ср","cldr_day_format_short_fri":"пт","cldr_day_format_short_mon":"пн","cldr_day_format_short_sat":"сб","cldr_day_format_short_sun":"вс","cldr_day_format_short_thu":"чт","cldr_day_format_short_tue":"вт","cldr_day_format_short_wed":"ср","cldr_day_format_wide_fri":"пятница","cldr_day_format_wide_mon":"понедельник","cldr_day_format_wide_sat":"суббота","cldr_day_format_wide_sun":"воскресенье","cldr_day_format_wide_thu":"четверг","cldr_day_format_wide_tue":"вторник","cldr_day_format_wide_wed":"среда","cldr_day_stand-alone_abbreviated_fri":"Пт","cldr_day_stand-alone_abbreviated_mon":"Пн","cldr_day_stand-alone_abbreviated_sat":"Сб","cldr_day_stand-alone_abbreviated_sun":"Вс","cldr_day_stand-alone_abbreviated_thu":"Чт","cldr_day_stand-alone_abbreviated_tue":"Вт","cldr_day_stand-alone_abbreviated_wed":"Ср","cldr_day_stand-alone_narrow_fri":"П","cldr_day_stand-alone_narrow_mon":"П","cldr_day_stand-alone_narrow_sat":"С","cldr_day_stand-alone_narrow_sun":"В","cldr_day_stand-alone_narrow_thu":"Ч","cldr_day_stand-alone_narrow_tue":"В","cldr_day_stand-alone_narrow_wed":"С","cldr_day_stand-alone_short_fri":"пт","cldr_day_stand-alone_short_mon":"пн","cldr_day_stand-alone_short_sat":"сб","cldr_day_stand-alone_short_sun":"вс","cldr_day_stand-alone_short_thu":"чт","cldr_day_stand-alone_short_tue":"вт","cldr_day_stand-alone_short_wed":"ср","cldr_day_stand-alone_wide_fri":"Пятница","cldr_day_stand-alone_wide_mon":"Понедельник","cldr_day_stand-alone_wide_sat":"Суббота","cldr_day_stand-alone_wide_sun":"Воскресенье","cldr_day_stand-alone_wide_thu":"Четверг","cldr_day_stand-alone_wide_tue":"Вторник","cldr_day_stand-alone_wide_wed":"Среда","cldr_month_format_abbreviated_1":"янв.","cldr_month_format_abbreviated_10":"окт.","cldr_month_format_abbreviated_11":"нояб.","cldr_month_format_abbreviated_12":"дек.","cldr_month_format_abbreviated_2":"февр.","cldr_month_format_abbreviated_3":"марта","cldr_month_format_abbreviated_4":"апр.","cldr_month_format_abbreviated_5":"мая","cldr_month_format_abbreviated_6":"июня","cldr_month_format_abbreviated_7":"июля","cldr_month_format_abbreviated_8":"авг.","cldr_month_format_abbreviated_9":"сент.","cldr_month_format_narrow_1":"Я","cldr_month_format_narrow_10":"О","cldr_month_format_narrow_11":"Н","cldr_month_format_narrow_12":"Д","cldr_month_format_narrow_2":"Ф","cldr_month_format_narrow_3":"М","cldr_month_format_narrow_4":"А","cldr_month_format_narrow_5":"М","cldr_month_format_narrow_6":"И","cldr_month_format_narrow_7":"И","cldr_month_format_narrow_8":"А","cldr_month_format_narrow_9":"С","cldr_month_format_wide_1":"января","cldr_month_format_wide_10":"октября","cldr_month_format_wide_11":"ноября","cldr_month_format_wide_12":"декабря","cldr_month_format_wide_2":"февраля","cldr_month_format_wide_3":"марта","cldr_month_format_wide_4":"апреля","cldr_month_format_wide_5":"мая","cldr_month_format_wide_6":"июня","cldr_month_format_wide_7":"июля","cldr_month_format_wide_8":"августа","cldr_month_format_wide_9":"сентября","cldr_month_stand-alone_abbreviated_1":"Янв.","cldr_month_stand-alone_abbreviated_10":"Окт.","cldr_month_stand-alone_abbreviated_11":"Нояб.","cldr_month_stand-alone_abbreviated_12":"Дек.","cldr_month_stand-alone_abbreviated_2":"Февр.","cldr_month_stand-alone_abbreviated_3":"Март","cldr_month_stand-alone_abbreviated_4":"Апр.","cldr_month_stand-alone_abbreviated_5":"Май","cldr_month_stand-alone_abbreviated_6":"Июнь","cldr_month_stand-alone_abbreviated_7":"Июль","cldr_month_stand-alone_abbreviated_8":"Авг.","cldr_month_stand-alone_abbreviated_9":"Сент.","cldr_month_stand-alone_narrow_1":"Я","cldr_month_stand-alone_narrow_10":"О","cldr_month_stand-alone_narrow_11":"Н","cldr_month_stand-alone_narrow_12":"Д","cldr_month_stand-alone_narrow_2":"Ф","cldr_month_stand-alone_narrow_3":"М","cldr_month_stand-alone_narrow_4":"А","cldr_month_stand-alone_narrow_5":"М","cldr_month_stand-alone_narrow_6":"И","cldr_month_stand-alone_narrow_7":"И","cldr_month_stand-alone_narrow_8":"А","cldr_month_stand-alone_narrow_9":"С","cldr_month_stand-alone_wide_1":"Январь","cldr_month_stand-alone_wide_10":"Октябрь","cldr_month_stand-alone_wide_11":"Ноябрь","cldr_month_stand-alone_wide_12":"Декабрь","cldr_month_stand-alone_wide_2":"Февраль","cldr_month_stand-alone_wide_3":"Март","cldr_month_stand-alone_wide_4":"Апрель","cldr_month_stand-alone_wide_5":"Май","cldr_month_stand-alone_wide_6":"Июнь","cldr_month_stand-alone_wide_7":"Июль","cldr_month_stand-alone_wide_8":"Август","cldr_month_stand-alone_wide_9":"Сентябрь","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"H:mm:ss zzzz","cldr_time_format_long":"H:mm:ss z","cldr_time_format_medium":"H:mm:ss","cldr_time_format_short":"H:mm","quotationEnd":"»","quotationStart":"«"}},"resources":{"ace/ace.js":"dhcpadm","ace/ext-language_tools.js":"dhcpadm","ace/mode-text.js":"dhcpadm","ace/theme-eclipse.js":"dhcpadm","dhcpadm/16x16/add-line.png":[16,16,"png","dhcpadm"],"dhcpadm/16x16/arrow-go-back-line.png":[16,16,"png","dhcpadm"],"dhcpadm/16x16/check-line.png":[16,16,"png","dhcpadm"],"dhcpadm/16x16/checkbox-circle-line.png":[16,16,"png","dhcpadm"],"dhcpadm/16x16/close-circle-line.png":[16,16,"png","dhcpadm"],"dhcpadm/16x16/close-line.png":[16,16,"png","dhcpadm"],"dhcpadm/16x16/database-check-2-fill.png":[16,16,"png","dhcpadm"],"dhcpadm/16x16/delete-bin-2-line.png":[16,16,"png","dhcpadm"],"dhcpadm/16x16/delete-line.png":[16,16,"png","dhcpadm"],"dhcpadm/16x16/edit-line.png":[16,16,"png","dhcpadm"],"dhcpadm/16x16/eject-fill.png":[16,16,"png","dhcpadm"],"dhcpadm/16x16/information-line.png":[16,16,"png","dhcpadm"],"dhcpadm/16x16/play-mini-fill.png":[16,16,"png","dhcpadm"],"dhcpadm/16x16/refresh-line.png":[16,16,"png","dhcpadm"],"dhcpadm/16x16/repeat-2-fill.png":[16,16,"png","dhcpadm"],"dhcpadm/16x16/restart-line.png":[16,16,"png","dhcpadm"],"dhcpadm/16x16/save2-3-fill.png":[16,16,"png","dhcpadm"],"dhcpadm/16x16/search-2-line.png":[16,16,"png","dhcpadm"],"dhcpadm/16x16/server-fill.png":[16,16,"png","dhcpadm"],"dhcpadm/16x16/settings-5-fill.png":[16,16,"png","dhcpadm"],"dhcpadm/16x16/share-box-fill.png":[16,16,"png","dhcpadm"],"dhcpadm/16x16/stop-mini-fill.png":[16,16,"png","dhcpadm"],"dhcpadm/48x48/poweron.png":[48,48,"png","dhcpadm"],"dhcpadm/48x48/servers2-line.png":[48,48,"png","dhcpadm"],"qx/decoration/Flat/arrows/down-invert.gif":[7,4,"gif","qx"],"qx/decoration/Flat/arrows/down-small.gif":[5,3,"gif","qx"],"qx/decoration/Flat/arrows/down.gif":[7,4,"gif","qx"],"qx/decoration/Flat/arrows/forward.gif":[8,7,"gif","qx"],"qx/decoration/Flat/arrows/left-invert.gif":[4,7,"gif","qx"],"qx/decoration/Flat/arrows/left.gif":[4,7,"gif","qx"],"qx/decoration/Flat/arrows/rewind.gif":[8,7,"gif","qx"],"qx/decoration/Flat/arrows/right-invert.gif":[4,7,"gif","qx"],"qx/decoration/Flat/arrows/right.gif":[4,7,"gif","qx"],"qx/decoration/Flat/arrows/up-invert.gif":[7,4,"gif","qx"],"qx/decoration/Flat/arrows/up-small.gif":[5,3,"gif","qx"],"qx/decoration/Flat/arrows/up.gif":[7,4,"gif","qx"],"qx/decoration/Flat/checkbox/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Flat/checkbox/checked.png":[6,6,"png","qx"],"qx/decoration/Flat/checkbox/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Flat/checkbox/undetermined.png":[6,2,"png","qx"],"qx/decoration/Flat/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Flat/colorselector/brightness-handle.gif":[35,11,"gif","qx"],"qx/decoration/Flat/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Flat/colorselector/huesaturation-handle.gif":[11,11,"gif","qx"],"qx/decoration/Flat/cursors/alias.gif":[19,15,"gif","qx"],"qx/decoration/Flat/cursors/copy.gif":[19,15,"gif","qx"],"qx/decoration/Flat/cursors/move.gif":[13,9,"gif","qx"],"qx/decoration/Flat/cursors/nodrop.gif":[20,20,"gif","qx"],"qx/decoration/Flat/font/JosefinSlab-SemiBold.ttf":"qx","qx/decoration/Flat/font/JosefinSlab-SemiBold.woff":"qx","qx/decoration/Flat/font/SIL Open Font License 1.1.txt":"qx","qx/decoration/Flat/menu/checkbox-invert.gif":[16,7,"gif","qx"],"qx/decoration/Flat/menu/checkbox.gif":[16,7,"gif","qx"],"qx/decoration/Flat/menu/radiobutton-invert.gif":[16,5,"gif","qx"],"qx/decoration/Flat/menu/radiobutton.gif":[16,5,"gif","qx"],"qx/decoration/Flat/splitpane/knob-horizontal.png":[1,8,"png","qx"],"qx/decoration/Flat/splitpane/knob-vertical.png":[8,1,"png","qx"],"qx/decoration/Flat/table/ascending-invert.png":[10,10,"png","qx"],"qx/decoration/Flat/table/ascending.png":[10,10,"png","qx"],"qx/decoration/Flat/table/boolean-false.png":[11,11,"png","qx"],"qx/decoration/Flat/table/boolean-true.png":[11,11,"png","qx"],"qx/decoration/Flat/table/descending-invert.png":[10,10,"png","qx"],"qx/decoration/Flat/table/descending.png":[10,10,"png","qx"],"qx/decoration/Flat/table/select-column-order.png":[10,9,"png","qx"],"qx/decoration/Flat/tabview/close-off.gif":[10,9,"gif","qx"],"qx/decoration/Flat/tabview/close-on.gif":[10,9,"gif","qx"],"qx/decoration/Flat/tabview/close.gif":[10,9,"gif","qx"],"qx/decoration/Flat/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Flat/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Flat/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Flat/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Flat/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Flat/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Flat/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Flat/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Flat/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Flat/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Flat/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Flat/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Flat/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Flat/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Flat/window/close-white.gif":[10,9,"gif","qx"],"qx/decoration/Flat/window/close.gif":[10,9,"gif","qx"],"qx/decoration/Flat/window/maximize-white.gif":[9,9,"gif","qx"],"qx/decoration/Flat/window/maximize.gif":[9,9,"gif","qx"],"qx/decoration/Flat/window/minimize-white.gif":[9,9,"gif","qx"],"qx/decoration/Flat/window/minimize.gif":[9,9,"gif","qx"],"qx/decoration/Flat/window/restore-white.gif":[8,9,"gif","qx"],"qx/decoration/Flat/window/restore.gif":[8,9,"gif","qx"],"qx/decoration/Simple/arrows/down-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/down-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/down.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/forward.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/left-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/left.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/rewind.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/right-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/right.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/up-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/up-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/up.gif":[7,4,"gif","qx"],"qx/decoration/Simple/checkbox/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/checked.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Simple/checkbox/undetermined.png":[6,2,"png","qx"],"qx/decoration/Simple/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Simple/colorselector/brightness-handle.gif":[35,11,"gif","qx"],"qx/decoration/Simple/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Simple/colorselector/huesaturation-handle.gif":[11,11,"gif","qx"],"qx/decoration/Simple/cursors/alias.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/copy.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/move.gif":[13,9,"gif","qx"],"qx/decoration/Simple/cursors/nodrop.gif":[20,20,"gif","qx"],"qx/decoration/Simple/menu/checkbox-invert.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/checkbox.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/radiobutton-invert.gif":[16,5,"gif","qx"],"qx/decoration/Simple/menu/radiobutton.gif":[16,5,"gif","qx"],"qx/decoration/Simple/splitpane/knob-horizontal.png":[1,8,"png","qx"],"qx/decoration/Simple/splitpane/knob-vertical.png":[8,1,"png","qx"],"qx/decoration/Simple/table/ascending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/ascending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/boolean-false.png":[11,11,"png","qx"],"qx/decoration/Simple/table/boolean-true.png":[11,11,"png","qx"],"qx/decoration/Simple/table/descending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/descending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/select-column-order.png":[10,9,"png","qx"],"qx/decoration/Simple/tabview/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/tabview/close.gif.old":"qx","qx/decoration/Simple/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/window/close-white.gif":[10,9,"gif","qx"],"qx/decoration/Simple/window/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/window/maximize-white.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/maximize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/minimize-white.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/minimize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/restore-white.gif":[8,9,"gif","qx"],"qx/decoration/Simple/window/restore.gif":[8,9,"gif","qx"],"qx/icon/Flat/16/calendar-event-line.png":[16,16,"png","qx"],"qx/icon/Flat/16/file-line.png":[16,16,"png","qx"],"qx/icon/Flat/16/folder-line.png":[16,16,"png","qx"],"qx/icon/Flat/16/folder-open-line.png":[16,16,"png","qx"],"qx/icon/Flat/16/refresh-line.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"qx/static/blank.png":[1,1,"png","qx"],"stdicons/16x16/admin-white-line.png":[16,16,"png","dhcpadm"],"stdicons/16x16/alert-line-white.png":[16,16,"png","dhcpadm"],"stdicons/16x16/check-line.png":[16,16,"png","dhcpadm"],"stdicons/16x16/close-line.png":[16,16,"png","dhcpadm"],"stdicons/16x16/filter-line.png":[16,16,"png","dhcpadm"],"stdicons/16x16/information-white-line.png":[16,16,"png","dhcpadm"],"stdicons/16x16/login-circle-line.png":[16,16,"png","dhcpadm"],"stdicons/16x16/menu.png":[16,16,"png","dhcpadm"],"stdicons/16x16/question-white-line.png":[16,16,"png","dhcpadm"],"stdicons/16x16/settings-5-fill.png":[16,16,"png","dhcpadm"],"stdicons/22x13/translate-white2.png":[22,13,"png","dhcpadm"],"stdicons/anim/ajax-loader.gif":[128,15,"gif","dhcpadm"],"stdicons/anim/indicator.gif":[70,10,"gif","dhcpadm"]},"translations":{"C":{},"en":{},"ru":{"Add":"Добавить","Adding...":"Добавление...","Already exists: %1":"Уже существует: %1","Apply":"Применить","Attention":"Внимание","Authentication failed":"Идентификация не удалась","Cancel":"Отмена","Class not found: %1":"Класс не найден: %1","Close":"Закрыть","Delete":"Удалить","Deleting":"Удаление","Deleting...":"Удаление...","Do you really want to continue?":"Вы действительно хотите продолжить?","Don't ask me again":"Не спрашивать больше","Edit":"Редактировать","Error":"Ошибка","Fetching objects...":"Получение объектов...","Fetching...":"Получение...","Incorrect username or password":"Неверное имя или пароль","Information":"Информация","Invalid argument: %1":"Неверный аргумент: %1","Invalid parameter: %1":"Неверный параметр: %1","Invalid service name: %1":"Неверное имя службы: %1","Journal":"Журнал","Loading...":"Загрузка...","Login":"Вход","Login, please wait...":"Осуществляется вход, подождите...","Logout":"Выход","Messages":"Сообщения","Method not found: %1":"Метод не найден: %1","Name":"Имя","No":"Нет","Not found: %1":"Не сущуествует: %1","Notice":"Внимаение","Out of date: %1":"Объект устарел: %1","Permission denied":"Доступ запрещен","Processing...":"Обработка...","Record details":"Детали записи","Refresh item":"Обновить элемент","Reload configuration":"Перезагрузить конфигурацию","Reloading server configuration...":"Перезагрузка конфигурации...","Remember password":"Запомнить пароль","Service not found: %1":"Сервис не найден: %1","Start server":"Запустить сервре","Starting server...":"Запуск сервера...","Stop server":"Остановить сервре","Stopping server":"Остановить сервре","Stopping server...":"Остановка сервера...","Strarting server":"Запустить сервер","This is a required field!":"Это обязательное поле","Unexpected exception":"Неожиданное исключение","Updating...":"Обновление...","Yes":"Да","enter your password":"пароль","enter your username":"имя","pending...":"подготовка...","reload data":"перезагрузить данные","reload journal":"перезагрузить дурнал","text for search":"текст для поиска"}}};

qx.$$loader.init();
