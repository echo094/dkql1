/*
变量：REDCODE='7位字母'
export REDCODE="xxxxxxx"

每次领取红包次数
export RedCount="5"
每个账号之间延时单位毫秒
export RedTimes="5000"
59 59 23,19 * * * jd_618redp.js
*/


const $ = new Env('618红包');
const _0x2866a2 = $.isNode() ? require("./jdCookie.js") : "";
let _0x54d6a9 = "",
  _0x521301 = 3000,
  _0x4b0387 = 4,
  _0x47bb36 = 0;
$.CryptoJS = require("crypto-js");
const _0x483eaf = require("./function/dylanw.js");
let _0x23d41b = {};
if (process.env.DY_PROXY) try {
  require("https-proxy-agent");
  _0x23d41b = require("./function/proxy.js");
  $.dget = _0x23d41b.intoRequest($.get.bind($));
  $.dpost = _0x23d41b.intoRequest($.post.bind($));
} catch {
  $.log("未安装https-proxy-agent依赖，无法启用代理");
  $.dget = $.get;
  $.dpost = $.post;
} else $.dpost = $.post, $.dget = $.get;
let _0x5956c7 = [],
  _0x4faf70 = "";
if ($.isNode()) {
  Object.keys(_0x2866a2).forEach(_0x44663c => {
    _0x5956c7.push(_0x2866a2[_0x44663c]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else _0x5956c7 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0x501d2b($.getdata("CookiesJD") || "[]").map(_0x2591c1 => _0x2591c1.cookie)].filter(_0x19d053 => !!_0x19d053);
let _0xbf08db = "";
if (!_0xbf08db) _0xbf08db = "";
_0xbf08db = $.isNode() ? process.env.JD_nhj_rebatePin ? process.env.JD_nhj_rebatePin : "" + _0xbf08db : $.getdata("JD_nhj_rebatePin") ? $.getdata("JD_nhj_rebatePin") : "" + _0xbf08db;
_0x4b0387 = $.isNode() ? process.env.RedCount ? process.env.RedCount : "" + _0x4b0387 : $.getdata("RedCount") ? $.getdata("RedCount") : "" + _0x4b0387;
_0x521301 = $.isNode() ? process.env.RedTimes ? process.env.RedTimes : "" + _0x521301 : $.getdata("RedTimes") ? $.getdata("RedTimes") : "" + _0x521301;
$.shareCount = $.isNode() ? process.env.JD_nhj_shareHelpCount ? process.env.JD_nhj_shareHelpCount : "" + _0x47bb36 : $.getdata("JD_nhj_shareHelpCount") ? $.getdata("JD_nhj_shareHelpCount") : "" + _0x47bb36;
$.shareCount = parseInt($.shareCount, 10) || 0;
let _0x4b96bc = _0xbf08db && _0xbf08db.split(",") || [];
$.time("yyyy-MM-dd HH:mm:ss");
message = "";
let _0x41a959 = "";
resMsg = "";
$.uiUpdateTime = "";
$.endFlag = false;
$.runEnd = false;
let _0x5fdf4a = {};
$.getH5st_WQ_Arr = {};
$.runArr = {};
let _0xcf4ef0 = "";
const _0x5c4994 = "2024/6/19 00:00:00+08:00";
let _0x2bfadf = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
$.UVCookieArr = {};
lr = {};
$.UVCookie = "";
let _0x5da4cb = "",
  _0x20babb = 2;
_0x521301 = Number(_0x521301);
$.time("yyyy-MM-dd");
_0x4e5956();
!(async () => {
  $.log("\n代理API DY_PROXY='url'");
  let _0x3e811d = await _0x48fdf9();
  if (_0x3e811d.length === 0) _0x3e811d = ["kQ6Li1Z", "kQ6Li1Z"];
  _0x3e811d = _0x3e811d[Math.floor(Math.random() * _0x3e811d.length)];
  if (!_0x54d6a9) _0x54d6a9 = "https://u.jd.com/" + (_0x3e811d || "kQ6Li1Z");
  _0x54d6a9 = $.isNode() ? process.env.REDCODE ? process.env.REDCODE : "" + _0x54d6a9 : $.getdata("REDCODE") ? $.getdata("REDCODE") : "" + _0x54d6a9;
  ii1I11 = _0x54d6a9 + "";
  if (/https:\/\/u\.jd\.com\/.+/.test(ii1I11)) {
    if (ii1I11.split("/").pop()) ii1I11 = ii1I11.split("/").pop().split("?").shift();else {
      console.log("请填写正确的rebateCode");
      return;
    }
  }
  if (!_0x5956c7[0]) {
    $.msg($.name, "【提示】请先获取cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/", {
      "open-url": "https://bean.m.jd.com/"
    });
    return;
  }
  if (_0x2bfadf > new Date(_0x5c4994).getTime()) {
    $.msg($.name, "活动已结束", "请删除此脚本");
    $.setdata("", "JD_231111_Red");
    $.setdata("", "JD_231111_Red_pin");
    return;
  }
  console.log("CODE：" + ii1I11.replace(/.+(.{3})/, "***$1"));
  $.shareCodeArr = {};
  $.shareCodePinArr = $.getdata("JD_231111_Red_pin") || {};
  $.shareCode = "";
  $.again = false;
  if ($.end) return;
  for (let _0x1921d8 = 0; _0x1921d8 < _0x5956c7.length && !$.runEnd; _0x1921d8++) {
    if ($.endFlag) break;
    _0x4faf70 = _0x5956c7[_0x1921d8];
    if (_0x4faf70) {
      $.UserName = decodeURIComponent(_0x4faf70.match(/pt_pin=([^; ]+)(?=;?)/) && _0x4faf70.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x1921d8 + 1;
      if ($.runArr[$.UserName]) continue;
      $.xcrflag = 1;
      console.log("\n\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      let _0x4d81c8 = 1;
      _0x20babb = 4;
      $.eid_token = "";
      $.index != 1 && _0x23d41b.swip && (await _0x23d41b.swip());
      _0xf0f1ff(_0x4d81c8);
      await _0x2eadd4();
      await _0x47a56e();
      if ($.endFlag) break;
    }
    $.setdata($.shareCodePinArr, "JD_231111_Red_pin");
  }
  $.setdata($.shareCodePinArr, "JD_231111_Red_pin");
  if (message) {
    if ($.isNode()) {}
  }
})().catch(_0x2911b9 => $.logErr(_0x2911b9)).finally(() => {
  $.done();
});
async function _0x47a56e(_0x22ce64 = 0) {
  try {
    $.UVCookie = $.UVCookieArr[$.UserName] || "";
    !$.UVCookie && _0x4e5956();
    resMsg = "";
    let _0x3a4b90 = false,
      _0x4e7f36 = 0,
      _0x4952bd = 0,
      _0x3aa6a9 = 0;
    $.shareFlag = true;
    do {
      if (_0x4952bd > 2) _0x4e7f36 = 0;
      $.flag = 0;
      _0x41a959 = "";
      $.url1 = "";
      await _0x88168b();
      if (!$.url1) {
        console.log("获取url1失败");
        $.end = true;
        break;
      }
      $.url2 = "";
      $.UVCookie = _0x5da4cb.getUVCookie("", "", $.url1, $.UVCookie);
      $.UVCookieArr[$.UserName] = $.UVCookie + "";
      await _0x329193();
      if (!$.url2) {
        console.log("获取不到红包页面");
        break;
      }
      if (!/unionActId=\d+/.test($.url2) && !new RegExp("&d=" + ii1I11).test($.url2)) {
        console.log("url：https://u.jd.com/" + ii1I11 + " 可能不是红包页面");
        $.runEnd = true;
        return;
      }
      if (!$.url2) $.url2 = "https://pro.m.jd.com/mall/active/3Rztcv2tMwdpFqWiqaAUzBAToowC/index.html?unionActId=31177&d=" + ii1I11 + "&cu=true&utm_source=kong&utm_medium=jingfen";
      $.actId = $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com)/) && $.url2.match(/mall\/active\/([^/]+)\/index\.html/)[1] || "3Rztcv2tMwdpFqWiqaAUzBAToowC";
      $.UVCookie = _0x5da4cb.getUVCookie("", "", $.url2, $.UVCookie);
      $.origin = $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com)/) && $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com)/)[1] || "https://pro.m.jd.com";
      $.UVCookieArr[$.UserName] = $.UVCookie + "";
      $.eid = "";
      !$.eid && ($.eid = -1);
      if (_0x22ce64 == 0) {
        let _0x13fcc8 = 0,
          _0x259b2e = true,
          _0x35892c = 0;
        if (Object.getOwnPropertyNames(_0x5fdf4a).length > _0x4e7f36 && $.shareFlag) for (let _0x1cbc1d in _0x5fdf4a || {}) {
          if (_0x1cbc1d == $.UserName) {
            $.flag = 1;
            continue;
          }
          if (_0x13fcc8 == _0x4e7f36) {
            $.flag = 0;
            $.shareCode = _0x5fdf4a[_0x1cbc1d] || "";
            if ($.shareCodePinArr[_0x1cbc1d] && $.shareCodePinArr[_0x1cbc1d].includes($.UserName)) {
              _0x35892c++;
              continue;
            }
            if ($.shareCode.count >= $.shareCodeArr.shareCount) {
              _0x35892c++;
              continue;
            }
            $.getlj = false;
            if ($.shareCode) console.log("助力[" + _0x1cbc1d + "]");
            let _0x3105cd = await _0x1d0f79($.shareCode.code, 1);
            if (/重复助力/.test(_0x3105cd)) {
              if (!$.shareCodePinArr[_0x1cbc1d]) $.shareCodePinArr[_0x1cbc1d] = [];
              $.shareCodePinArr[_0x1cbc1d].push($.UserName);
              _0x4e7f36--;
              _0x3aa6a9--;
            } else {
              if (/助力/.test(_0x3105cd) && /上限/.test(_0x3105cd)) $.shareFlag = false;else {
                if (!/领取上限/.test(_0x3105cd) && $.getlj == true) {
                  if (!$.shareCodePinArr[_0x1cbc1d]) $.shareCodePinArr[_0x1cbc1d] = [];
                  !$.shareCodePinArr[_0x1cbc1d].includes($.UserName) && $.shareCodePinArr[_0x1cbc1d].push($.UserName);
                  _0x4e7f36--;
                } else _0x259b2e = false;
              }
            }
          }
          _0x13fcc8++;
        }
        _0x259b2e && _0x35892c == Object.getOwnPropertyNames(_0x5fdf4a).length && (_0x3a4b90 = true);
        if (_0x13fcc8 == 0) {
          $.getlj = false;
          let _0x4ed72a = await _0x1d0f79("", 1);
          !/领取上限/.test(_0x4ed72a) && $.getlj == true && _0x4e7f36--;
        }
        if ($.endFlag) break;
      } else {
        let _0xe7f4ed = await _0x34300b();
        if (!$.endFlag && _0xe7f4ed && $.again == false) await _0x1d0c78();
        if ($.again == false) break;
      }
      $.again == true && _0x4952bd < 1 && (_0x4952bd++, $.again = false);
      _0x4e7f36++;
      _0x3aa6a9++;
      $.flag == 1 && (await $.wait(parseInt(Math.random() * 1000 + 1000, 10)));
      if (_0x4b0387 > 0 && _0x4b0387 <= _0x3aa6a9) break;
    } while ($.flag == 1 && _0x4e7f36 < 4);
    if ($.endFlag) return;
    resMsg && (message += "【京东账号" + $.index + "】\n" + resMsg);
    if (JSON.stringify(_0x23d41b) == "{}") {
      if ($.index % 10 == 0) {
        let _0x58485b = parseInt(Math.random() * 1000 + 5000, 10);
        console.log("等待 " + _0x58485b / 1000 + " 秒");
        await $.wait(_0x58485b);
      } else await $.wait(Math.random() * 2000 + _0x521301, 10);
    } else await $.wait(Math.random() * 1000 + 1000, 10);
  } catch (_0x5c1be0) {
    console.log(_0x5c1be0);
  }
}
async function _0x3bada0(_0x4065db = 0) {
  try {
    let _0x439973 = 2;
    if (_0x4065db == 1) _0x439973 = 1;
    let _0x471460 = 0;
    for (let _0x437192 in $.shareCodeArr || {}) {
      if (_0x437192 === "flag" || _0x437192 === "updateTime" || _0x437192 === "shareCount") continue;
      if ($.shareCodeArr[_0x437192] && $.shareCodeArr.shareCount && $.shareCodeArr[_0x437192].count < $.shareCodeArr.shareCount) _0x471460++;
    }
    for (let _0x4c9cc0 = 0; _0x4c9cc0 < _0x5956c7.length && !$.runEnd; _0x4c9cc0++) {
      _0x4faf70 = _0x5956c7[_0x4c9cc0];
      if (_0x4faf70) {
        $.UserName = decodeURIComponent(_0x4faf70.match(/pt_pin=([^; ]+)(?=;?)/) && _0x4faf70.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        if (_0x4b96bc.length > 0 && _0x4b96bc.indexOf($.UserName) == -1 || $.shareCodeArr[$.UserName]) continue;
        $.index = _0x4c9cc0 + 1;
        $.eid_token = "";
        _0xf0f1ff();
        await _0x2eadd4();
        await _0x47a56e(1);
        let _0x344ad = 0;
        for (let _0x3b6cd7 in $.shareCodeArr || {}) {
          if (_0x3b6cd7 === "flag" || _0x3b6cd7 === "updateTime" || _0x3b6cd7 === "shareCount") continue;
          if ($.shareCodeArr[_0x3b6cd7] && $.shareCodeArr.shareCount && $.shareCodeArr[_0x3b6cd7].count < $.shareCodeArr.shareCount) _0x344ad++;
        }
        if ($.endFlag || _0x344ad - _0x471460 >= _0x439973 || $.end) break;
      }
    }
  } catch (_0x17ca70) {
    console.log(_0x17ca70);
  }
  if (Object.getOwnPropertyNames($.shareCodeArr).length > 0) for (let _0x23bc6d in $.shareCodeArr || {}) {
    if (_0x23bc6d === "flag" || _0x23bc6d === "updateTime" || _0x23bc6d === "shareCount") continue;
    if ($.shareCodeArr[_0x23bc6d]) _0x5fdf4a[_0x23bc6d] = $.shareCodeArr[_0x23bc6d];
  }
}
function _0x1d0f79(_0x441acb = "", _0x269e35 = 1) {
  return new Promise(async _0x2312cf => {
    $.UVCookie = _0x5da4cb.getUVCookie("", "", $.url2, $.UVCookie);
    $.UVCookieArr[$.UserName] = $.UVCookie + "";
    let _0x374885 = "";
    const _0x21513c = {
        "platform": _0x20babb,
        "unionActId": "31177",
        "actId": $.actId,
        "d": ii1I11,
        "unionShareId": _0x441acb,
        "type": _0x269e35,
        "qdPageId": "MO-J2011-1",
        "mdClickId": "jxhongbao_ck"
      },
      _0x3216a2 = {
        "appId": "c822a",
        "functionId": "getCoupons",
        "fn": "getCoupons",
        "body": _0x21513c,
        "appid": "u_hongbao",
        "apid": "u_hongbao",
        "clientVersion": $.UA.split(";")[2],
        "ver": $.UA.split(";")[2],
        "client": "apple",
        "cl": "apple",
        "user": $.UserName,
        "code": 1,
        "xcr": $.xcrflag,
        "ua": $.UA
      };
    if ($.xcrflag == 1) $.xcrflag = 0;
    let _0x5c873a = await _0x483eaf.getbody(_0x3216a2, $.UserName);
    _0x374885 = _0x5c873a.h5st || "";
    let _0xdff81 = "",
      _0xe4f5d2 = {
        "url": "https://api.m.jd.com/api",
        "body": "loginType=2&" + _0x5c873a + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
        "headers": {
          "accept": "*/*",
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          "Cookie": "" + $.UVCookie + _0x41a959 + " " + _0x4faf70,
          "origin": $.origin,
          "Referer": "https://pro.m.jd.com/mall/active/3Rztcv2tMwdpFqWiqaAUzBAToowC/index.html",
          "User-Agent": $.UA
        }
      };
    _0xe4f5d2.headers.Cookie = _0xe4f5d2.headers.Cookie.replace(/;\s*$/, "");
    _0xe4f5d2.headers.Cookie = _0xe4f5d2.headers.Cookie.replace(/;([^\s])/g, "; $1");
    if ($.url2) _0xe4f5d2.headers.Referer = $.url2;
    $.dpost(_0xe4f5d2, async (_0x8274ec, _0x460e07, _0x534bc5) => {
      try {
        if (_0x8274ec) console.log("" + $.toStr(_0x8274ec)), console.log($.name + " API请求失败，请检查网路重试");else {
          let _0x43af1e = $.toObj(_0x534bc5, _0x534bc5);
          if (typeof _0x43af1e == "object") {
            _0x43af1e.msg && (_0xdff81 = _0x43af1e.msg, console.log(_0x43af1e.msg));
            if (_0x43af1e.msg.indexOf("不展示弹层") > -1 && _0x269e35 == 1) $.again = true;
            if (_0x43af1e.msg.indexOf("领取上限") === -1 && _0x43af1e.msg.indexOf("登录") === -1) {
              if (_0x269e35 == 1) $.flag = 1;
            }
            if (_0x43af1e.msg.indexOf("活动已结束") > -1 || _0x43af1e.msg.indexOf("活动未开始") > -1) {
              $.endFlag = true;
              return;
            }
            _0x441acb && typeof _0x43af1e.data !== "undefined" && typeof _0x43af1e.data.joinNum !== "undefined" && console.log("当前" + _0x43af1e.data.joinSuffix + ":" + _0x43af1e.data.joinNum);
            if (_0x43af1e.code == 0 && _0x43af1e.data) {
              if (_0x269e35 == 1) $.shareCode.count++;
              let _0x226608 = "";
              for (let _0x337bbf of _0x43af1e.data.couponList) {
                if (_0x337bbf.type == 1) $.getlj = true, _0x226608 += (_0x226608 ? "\n" : "") + "获得[红包]🧧" + _0x337bbf.discount + "元 使用时间:" + $.time("yyyy-MM-dd", _0x337bbf.beginTime) + " " + $.time("yyyy-MM-dd", _0x337bbf.endTime);else {
                  if (_0x337bbf.type == 3) $.getlj = true, _0x226608 += (_0x226608 ? "\n" : "") + "获得[优惠券]🎟️满" + _0x337bbf.quota + "减" + _0x337bbf.discount + " 使用时间:" + $.time("yyyy-MM-dd", _0x337bbf.beginTime) + " " + $.time("yyyy-MM-dd", _0x337bbf.endTime);else _0x337bbf.type == 6 ? ($.getlj = true, _0x226608 += (_0x226608 ? "\n" : "") + "获得[打折券]]🎫满" + _0x337bbf.quota + "打" + _0x337bbf.discount * 10 + "折 使用时间:" + $.time("yyyy-MM-dd", _0x337bbf.beginTime) + " " + $.time("yyyy-MM-dd", _0x337bbf.endTime)) : ($.getlj = true, _0x226608 += (_0x226608 ? "\n" : "") + "获得[未知]🎉" + (_0x337bbf.quota || "") + " " + _0x337bbf.discount + " 使用时间:" + $.time("yyyy-MM-dd", _0x337bbf.beginTime) + " " + $.time("yyyy-MM-dd", _0x337bbf.endTime), console.log(_0x337bbf));
                }
              }
              _0x226608 && (resMsg += _0x226608 + "\n", console.log(_0x226608));
            }
            if (_0x269e35 == 1 && typeof _0x43af1e.data !== "undefined" && typeof _0x43af1e.data.groupData !== "undefined" && typeof _0x43af1e.data.groupData.groupInfo !== "undefined") for (let _0x140289 of _0x43af1e.data.groupData.groupInfo || []) {
              _0x140289.status == 2 && (console.log("助力满可以领取" + _0x140289.info + "元红包🧧"), await $.wait(parseInt(Math.random() * 2000 + 2000, 10)), await _0x1d0f79("", 2));
            }
          } else console.log(_0x534bc5);
        }
      } catch (_0x15883f) {
        $.logErr(_0x15883f, _0x460e07);
      } finally {
        _0x2312cf(_0xdff81);
      }
    });
  });
}
function _0x34300b(_0x44c64a = "") {
  let _0x81dc41 = true;
  return new Promise(_0x5c0d2d => {
    $.UVCookie = _0x5da4cb.getUVCookie("", "", $.url2, $.UVCookie);
    $.UVCookieArr[$.UserName] = $.UVCookie + "";
    let _0x29be1c = {
      "url": "https://api.m.jd.com/api?functionId=showCoupon&appid=u_hongbao&_=" + Date.now() + "&loginType=2&body={%22actId%22:%22" + $.actId + "%22,%22unionActId%22:%2231177%22,%22unpl%22:%22" + $.unpl + "%22,%22platform%22:" + _0x20babb + ",%22unionShareId%22:%22%22," + ($.uiUpdateTime ? "%22uiUpdateTime%22:" + $.uiUpdateTime + "," : "") + "%22d%22:%22" + ii1I11 + "%22,%22eid%22:%22" + $.eid + "%22}&client=iPhone&clientVersion=&osVersion=iOS&d_brand=iPhone&d_model=iPhone&lang=zh-cn&openudid=" + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
      "headers": {
        "accept": "*/*",
        "Accept-Language": "zh-cn",
        "Accept-Encoding": "gzip, deflate, br",
        "Cookie": "" + $.UVCookie + _0x41a959 + " " + _0x4faf70,
        "origin": $.origin,
        "Referer": $.origin + "/",
        "User-Agent": $.UA
      }
    };
    _0x29be1c.headers.Cookie = _0x29be1c.headers.Cookie.replace(/;\s*$/, "");
    _0x29be1c.headers.Cookie = _0x29be1c.headers.Cookie.replace(/;([^\s])/g, "; $1");
    if ($.url2) _0x29be1c.headers.Referer = $.url2;
    $.dget(_0x29be1c, async (_0x5c5271, _0x34f122, _0x3d3c38) => {
      try {
        if (_0x5c5271) console.log("" + $.toStr(_0x5c5271)), console.log($.name + " API请求失败，请检查网路重试");else {
          let _0x5e39a5 = $.toObj(_0x3d3c38, _0x3d3c38);
          if (typeof _0x5e39a5 == "object") {
            if (_0x5e39a5.msg) console.log(_0x5e39a5.msg);
            if (_0x5e39a5.msg.indexOf("不展示弹层") > -1) $.again = true;
            if (_0x5e39a5.msg.indexOf("领取上限") > -1) $.runArr[$.UserName] = true;
            _0x5e39a5.msg.indexOf("上限") === -1 && _0x5e39a5.msg.indexOf("登录") === -1 && ($.flag = 1);
            if (_0x5e39a5.msg.indexOf("活动已结束") > -1 || _0x5e39a5.msg.indexOf("活动未开始") > -1) {
              $.endFlag = true;
              return;
            }
            if (_0x5e39a5.data.uiUpdateTime) $.uiUpdateTime = _0x5e39a5.data.uiUpdateTime;
            if (typeof _0x5e39a5.data !== "undefined" && typeof _0x5e39a5.data.groupData !== "undefined" && typeof _0x5e39a5.data.groupData.joinNum !== "undefined") {
              $.joinNum = _0x5e39a5.data.groupData.joinNum;
              let _0x881960 = 0;
              for (let _0x47ea20 of _0x5e39a5.data.groupData.groupInfo) {
                if (_0x881960 < _0x47ea20.num) _0x881960 = _0x47ea20.num;
              }
              if ($.shareCount > 0 && _0x881960 > $.shareCount) _0x881960 = $.shareCount;
              $.shareCodeArr[$.UserName] && ($.shareCodeArr[$.UserName].count = _0x881960);
              $.shareCodeArr.shareCount = _0x881960;
              if (_0x881960 <= $.joinNum) {
                if (!$.shareCodeArr[$.UserName]) $.shareCodeArr[$.UserName] = {};
                $.shareCodeArr[$.UserName].count = $.joinNum;
                _0x81dc41 = false;
              }
              console.log("【账号" + $.index + "】" + ($.nickName || $.UserName) + " " + $.joinNum + "/" + _0x881960 + "人");
            }
            _0x5e39a5.msg.indexOf("活动已结束") > -1 && (_0x81dc41 = false);
            if (typeof _0x5e39a5.data !== "undefined" && typeof _0x5e39a5.data.groupData !== "undefined" && typeof _0x5e39a5.data.groupData.groupInfo !== "undefined") for (let _0x2da48c of _0x5e39a5.data.groupData.groupInfo || []) {
              _0x2da48c.status == 2 && (console.log("助力满可以领取" + _0x2da48c.info + "元红包🧧"), await $.wait(parseInt(Math.random() * 2000 + 2000, 10)), await _0x1d0f79("", 2));
            }
          } else console.log(_0x3d3c38);
        }
      } catch (_0x410d6e) {
        $.logErr(_0x410d6e, _0x34f122);
      } finally {
        _0x5c0d2d(_0x81dc41);
      }
    });
  });
}
function _0x1d0c78() {
  if ($.shareCodeArr[$.UserName]) {
    console.log("【账号" + $.index + "】缓存分享码:" + $.shareCodeArr[$.UserName].code.replace(/.+(.{3})/, "***$1"));
    return;
  }
  return new Promise(_0x7abba1 => {
    let _0x144347 = {
      "url": "https://api.m.jd.com/api?functionId=shareUnionCoupon&appid=u_hongbao&_=" + Date.now() + "&loginType=2&body={%22unionActId%22:%2231177%22,%22actId%22:%22" + $.actId + "%22,%22platform%22:4,%22unionShareId%22:%22%22,%22d%22:%22" + ii1I11 + "%22,%22supportPic%22:2}&client=iPhone&clientVersion=&osVersion=iOS&d_brand=iPhone&d_model=iPhone&lang=zh-cn&openudid=" + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
      "headers": {
        "accept": "*/*",
        "Accept-Language": "zh-cn",
        "Accept-Encoding": "gzip, deflate, br",
        "Cookie": "" + $.UVCookie + _0x41a959 + " " + _0x4faf70,
        "origin": $.origin,
        "Referer": $.origin + "/",
        "User-Agent": $.UA
      }
    };
    _0x144347.headers.Cookie = _0x144347.headers.Cookie.replace(/;\s*$/, "");
    _0x144347.headers.Cookie = _0x144347.headers.Cookie.replace(/;([^\s])/g, "; $1");
    $.dget(_0x144347, async (_0x2fd5d7, _0x2b2041, _0x22b0e5) => {
      try {
        if (_0x2fd5d7) console.log("" + $.toStr(_0x2fd5d7)), console.log($.name + " API请求失败，请检查网路重试");else {
          let _0x2c0871 = $.toObj(_0x22b0e5, _0x22b0e5);
          if (typeof _0x2c0871 == "object") {
            if (_0x2c0871.code == 0 && _0x2c0871.data && _0x2c0871.data.shareUrl) {
              let _0x1582f3 = _0x2c0871.data.shareUrl.match(/\?s=([^&]+)/) && _0x2c0871.data.shareUrl.match(/\?s=([^&]+)/)[1] || "";
              _0x1582f3 && (console.log("【账号" + $.index + "】分享码：" + _0x1582f3.replace(/.+(.{3})/, "***$1")), $.shareCodeArr[$.UserName] = {
                "code": _0x1582f3,
                "count": $.joinNum
              });
            }
          } else console.log(_0x22b0e5);
        }
      } catch (_0x16af55) {
        $.logErr(_0x16af55, _0x2b2041);
      } finally {
        _0x7abba1();
      }
    });
  });
}
function _0x329193() {
  return new Promise(_0x36f75b => {
    const _0x5859a8 = {
      "url": $.url1,
      "followRedirect": false,
      "headers": {
        "Cookie": "" + $.UVCookie + _0x41a959 + " " + _0x4faf70,
        "User-Agent": $.UA
      }
    };
    $.dget(_0x5859a8, async (_0x1a8326, _0x36ff37, _0xe4c3a8) => {
      try {
        _0x4dd174(_0x36ff37);
        $.url2 = _0x36ff37 && _0x36ff37.headers && (_0x36ff37.headers.location || _0x36ff37.headers.Location || "") || "";
        $.url2 = decodeURIComponent($.url2);
        $.url2 = $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com\/mall[^'"]+)/) && $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com\/mall[^'"]+)/)[1] || "";
      } catch (_0x47a6c2) {
        $.logErr(_0x47a6c2, _0x36ff37);
      } finally {
        _0x36f75b(_0xe4c3a8);
      }
    });
  });
}
function _0x88168b() {
  return new Promise(_0x5e5e26 => {
    const _0x1519d2 = {
      "url": "https://u.jd.com/" + ii1I11 + ($.shareCode && "?s=" + $.shareCode || ""),
      "followRedirect": false,
      "headers": {
        "Cookie": "" + $.UVCookie + _0x41a959 + " " + _0x4faf70,
        "User-Agent": $.UA
      }
    };
    $.dget(_0x1519d2, async (_0x50e0c1, _0x25e0af, _0x20de39) => {
      try {
        _0x4dd174(_0x25e0af);
        $.url1 = _0x20de39 && _0x20de39.match(/(https:\/\/u\.jd\.com\/jda[^']+)/) && _0x20de39.match(/(https:\/\/u\.jd\.com\/jda[^']+)/)[1] || "";
      } catch (_0x4fcee8) {
        $.logErr(_0x4fcee8, _0x25e0af);
      } finally {
        _0x5e5e26(_0x20de39);
      }
    });
  });
}
function _0x4dd174(_0x5557ef) {
  let _0x501f19 = _0x5557ef && _0x5557ef.headers && (_0x5557ef.headers["set-cookie"] || _0x5557ef.headers["Set-Cookie"] || "") || "",
    _0x3cb740 = "";
  if (_0x501f19) {
    if (typeof _0x501f19 != "object") _0x3cb740 = _0x501f19.split(",");else _0x3cb740 = _0x501f19;
    for (let _0x3221ed of _0x3cb740) {
      let _0x29278a = _0x3221ed.split(";")[0].trim();
      if (_0x29278a.split("=")[1]) {
        _0x29278a.split("=")[0] == "unpl" && _0x29278a.split("=")[1] && ($.unpl = _0x29278a.split("=")[1]);
        if (_0x41a959.indexOf(_0x29278a.split("=")[1]) == -1) _0x41a959 += _0x29278a.replace(/ /g, "") + "; ";
      }
    }
  }
}
function _0x2b2c6f(_0x281b9f = 1) {
  $.UA = "jdapp;iPhone;12.0.2;;;M/5.0;appBuild/168698;jdSupportDarkMode/0;ef/1;ep/" + encodeURIComponent(JSON.stringify({
    "ciphertype": 5,
    "cipher": {
      "ud": "",
      "sv": "CJGkCm==",
      "iad": ""
    },
    "ts": Math.floor(new Date().getTime() / 1000),
    "hdid": "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
    "version": "1.0.3",
    "appname": "com.360buy.jdmobile",
    "ridx": -1
  })) + ";Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
}
function _0x296bfb(_0x53c7c7) {
  let _0xc674a1 = "0123456789abcdef",
    _0x49695e = "";
  for (let _0x56f919 = 0; _0x56f919 < _0x53c7c7; _0x56f919++) {
    _0x49695e += _0xc674a1[Math.ceil(100000000 * Math.random()) % _0xc674a1.length];
  }
  return _0x49695e;
}
function _0x4ceec1(_0x12d1db, _0x264eb6) {
  let _0x226190 = new Array();
  for (let _0x1e244d in _0x12d1db) {
    _0x226190.push(_0x12d1db[_0x1e244d]);
  }
  let _0x5e2d73 = new Array();
  for (let _0x43e68e = 0; _0x43e68e < _0x264eb6; _0x43e68e++) {
    if (_0x226190.length > 0) {
      let _0x291959 = Math.floor(Math.random() * _0x226190.length);
      _0x5e2d73[_0x43e68e] = _0x226190[_0x291959];
      _0x226190.splice(_0x291959, 1);
    } else break;
  }
  return _0x5e2d73;
}
function _0xf0f1ff(_0x542fc5) {
  let _0x5efdc7 = {
      "A": "K",
      "B": "L",
      "C": "M",
      "D": "N",
      "E": "O",
      "F": "P",
      "G": "Q",
      "H": "R",
      "I": "S",
      "J": "T",
      "K": "A",
      "L": "B",
      "M": "C",
      "N": "D",
      "O": "E",
      "P": "F",
      "Q": "G",
      "R": "H",
      "S": "I",
      "T": "J",
      "e": "o",
      "f": "p",
      "g": "q",
      "h": "r",
      "i": "s",
      "j": "t",
      "k": "u",
      "l": "v",
      "m": "w",
      "n": "x",
      "o": "e",
      "p": "f",
      "q": "g",
      "r": "h",
      "s": "i",
      "t": "j",
      "u": "k",
      "v": "l",
      "w": "m",
      "x": "n"
    },
    _0x21f445 = _0x4ceec1([12, 13, 14, 15, 16], 1) + "." + _0x4ceec1([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1) + "." + _0x4ceec1([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1),
    _0x10dbf9 = _0x4ceec1([9, 10, 11], 1) + "." + _0x4ceec1([0, 1, 2, 3, 4, 5, 6, 7, 8], 1) + "." + _0x4ceec1([0, 1, 2, 3, 4, 5], 1),
    _0x4fc2bf = {
      "ciphertype": 5,
      "cipher": {
        "ud": "",
        "sv": "",
        "iad": ""
      },
      "ts": parseInt(new Date().getTime() / 1000),
      "hdid": "",
      "version": "1.0.3",
      "appname": "",
      "ridx": -1
    };
  _0x4fc2bf.cipher.sv = new Buffer.from(_0x21f445).toString("base64").split("").map(_0x15af2d => _0x5efdc7[_0x15af2d] || _0x15af2d).join("");
  _0x4fc2bf.cipher.ud = new Buffer.from(_0x296bfb(40)).toString("base64").split("").map(_0x5bdde5 => _0x5efdc7[_0x5bdde5] || _0x5bdde5).join("");
  _0x4fc2bf.appname = "com.360buy.jdmobile";
  _0x4fc2bf.hdid = "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=";
  $.UA = "jdapp;iPhone;" + _0x10dbf9 + ";;;M/5.0;appBuild/168341;jdSupportDarkMode/0;ef/1;ep/" + encodeURIComponent(JSON.stringify(_0x4fc2bf)) + ";Mozilla/5.0 (iPhone; CPU iPhone OS " + _0x21f445.replace(/\./g, "_") + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
}
function _0x501d2b(_0xe29638) {
  if (typeof _0xe29638 == "string") try {
    return JSON.parse(_0xe29638);
  } catch (_0x3cdf1d) {
    return console.log(_0x3cdf1d), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
  }
}
async function _0x2eadd4() {
  var _0x1ec305 = function () {
    function _0x2c75c2(_0x24f0f7, _0x55a681) {
      _0x24f0f7 = [_0x24f0f7[0] >>> 16, 65535 & _0x24f0f7[0], _0x24f0f7[1] >>> 16, 65535 & _0x24f0f7[1]];
      _0x55a681 = [_0x55a681[0] >>> 16, 65535 & _0x55a681[0], _0x55a681[1] >>> 16, 65535 & _0x55a681[1]];
      var _0x478174 = [0, 0, 0, 0];
      return _0x478174[3] += _0x24f0f7[3] + _0x55a681[3], _0x478174[2] += _0x478174[3] >>> 16, _0x478174[3] &= 65535, _0x478174[2] += _0x24f0f7[2] + _0x55a681[2], _0x478174[1] += _0x478174[2] >>> 16, _0x478174[2] &= 65535, _0x478174[1] += _0x24f0f7[1] + _0x55a681[1], _0x478174[0] += _0x478174[1] >>> 16, _0x478174[1] &= 65535, _0x478174[0] += _0x24f0f7[0] + _0x55a681[0], _0x478174[0] &= 65535, [_0x478174[0] << 16 | _0x478174[1], _0x478174[2] << 16 | _0x478174[3]];
    }
    function _0x4a0390(_0x23b7f8, _0xb333fa) {
      _0x23b7f8 = [_0x23b7f8[0] >>> 16, 65535 & _0x23b7f8[0], _0x23b7f8[1] >>> 16, 65535 & _0x23b7f8[1]];
      _0xb333fa = [_0xb333fa[0] >>> 16, 65535 & _0xb333fa[0], _0xb333fa[1] >>> 16, 65535 & _0xb333fa[1]];
      var _0x169dea = [0, 0, 0, 0];
      return _0x169dea[3] += _0x23b7f8[3] * _0xb333fa[3], _0x169dea[2] += _0x169dea[3] >>> 16, _0x169dea[3] &= 65535, _0x169dea[2] += _0x23b7f8[2] * _0xb333fa[3], _0x169dea[1] += _0x169dea[2] >>> 16, _0x169dea[2] &= 65535, _0x169dea[2] += _0x23b7f8[3] * _0xb333fa[2], _0x169dea[1] += _0x169dea[2] >>> 16, _0x169dea[2] &= 65535, _0x169dea[1] += _0x23b7f8[1] * _0xb333fa[3], _0x169dea[0] += _0x169dea[1] >>> 16, _0x169dea[1] &= 65535, _0x169dea[1] += _0x23b7f8[2] * _0xb333fa[2], _0x169dea[0] += _0x169dea[1] >>> 16, _0x169dea[1] &= 65535, _0x169dea[1] += _0x23b7f8[3] * _0xb333fa[1], _0x169dea[0] += _0x169dea[1] >>> 16, _0x169dea[1] &= 65535, _0x169dea[0] += _0x23b7f8[0] * _0xb333fa[3] + _0x23b7f8[1] * _0xb333fa[2] + _0x23b7f8[2] * _0xb333fa[1] + _0x23b7f8[3] * _0xb333fa[0], _0x169dea[0] &= 65535, [_0x169dea[0] << 16 | _0x169dea[1], _0x169dea[2] << 16 | _0x169dea[3]];
    }
    function _0x471a58(_0xdd95b2, _0x5bdd10) {
      return 32 === (_0x5bdd10 %= 64) ? [_0xdd95b2[1], _0xdd95b2[0]] : 32 > _0x5bdd10 ? [_0xdd95b2[0] << _0x5bdd10 | _0xdd95b2[1] >>> 32 - _0x5bdd10, _0xdd95b2[1] << _0x5bdd10 | _0xdd95b2[0] >>> 32 - _0x5bdd10] : (_0x5bdd10 -= 32, [_0xdd95b2[1] << _0x5bdd10 | _0xdd95b2[0] >>> 32 - _0x5bdd10, _0xdd95b2[0] << _0x5bdd10 | _0xdd95b2[1] >>> 32 - _0x5bdd10]);
    }
    function _0x2d1836(_0x3542dc, _0x44d0bd) {
      return 0 === (_0x44d0bd %= 64) ? _0x3542dc : 32 > _0x44d0bd ? [_0x3542dc[0] << _0x44d0bd | _0x3542dc[1] >>> 32 - _0x44d0bd, _0x3542dc[1] << _0x44d0bd] : [_0x3542dc[1] << _0x44d0bd - 32, 0];
    }
    function _0x42beed(_0xaaaa0b, _0x5044d6) {
      return [_0xaaaa0b[0] ^ _0x5044d6[0], _0xaaaa0b[1] ^ _0x5044d6[1]];
    }
    function _0x45b4be(_0x2b47dc) {
      return _0x42beed(_0x2b47dc = _0x4a0390(_0x2b47dc = _0x42beed(_0x2b47dc = _0x4a0390(_0x2b47dc = _0x42beed(_0x2b47dc, [0, _0x2b47dc[0] >>> 1]), [4283543511, 3981806797]), [0, _0x2b47dc[0] >>> 1]), [3301882366, 444984403]), [0, _0x2b47dc[0] >>> 1]);
    }
    return {
      "hash128": function (_0x26d42b, _0x50ac58) {
        var _0x22026c = _0x50ac58 || 0;
        _0x50ac58 = (_0x26d42b = _0x26d42b || "").length % 16;
        var _0x40dc9b = _0x26d42b.length - _0x50ac58,
          _0x35d94d = [0, _0x22026c];
        _0x22026c = [0, _0x22026c];
        for (var _0xd3fafc, _0x3273c2, _0x557a75 = [2277735313, 289559509], _0x22a9a5 = [1291169091, 658871167], _0x5e84ca = 0; _0x5e84ca < _0x40dc9b; _0x5e84ca += 16) {
          _0xd3fafc = [255 & _0x26d42b.charCodeAt(_0x5e84ca + 4) | (255 & _0x26d42b.charCodeAt(_0x5e84ca + 5)) << 8 | (255 & _0x26d42b.charCodeAt(_0x5e84ca + 6)) << 16 | (255 & _0x26d42b.charCodeAt(_0x5e84ca + 7)) << 24, 255 & _0x26d42b.charCodeAt(_0x5e84ca) | (255 & _0x26d42b.charCodeAt(_0x5e84ca + 1)) << 8 | (255 & _0x26d42b.charCodeAt(_0x5e84ca + 2)) << 16 | (255 & _0x26d42b.charCodeAt(_0x5e84ca + 3)) << 24];
          _0x3273c2 = [255 & _0x26d42b.charCodeAt(_0x5e84ca + 12) | (255 & _0x26d42b.charCodeAt(_0x5e84ca + 13)) << 8 | (255 & _0x26d42b.charCodeAt(_0x5e84ca + 14)) << 16 | (255 & _0x26d42b.charCodeAt(_0x5e84ca + 15)) << 24, 255 & _0x26d42b.charCodeAt(_0x5e84ca + 8) | (255 & _0x26d42b.charCodeAt(_0x5e84ca + 9)) << 8 | (255 & _0x26d42b.charCodeAt(_0x5e84ca + 10)) << 16 | (255 & _0x26d42b.charCodeAt(_0x5e84ca + 11)) << 24];
          _0x35d94d = _0x2c75c2(_0x4a0390(_0x35d94d = _0x2c75c2(_0x35d94d = _0x471a58(_0x35d94d = _0x42beed(_0x35d94d, _0xd3fafc = _0x4a0390(_0xd3fafc = _0x471a58(_0xd3fafc = _0x4a0390(_0xd3fafc, _0x557a75), 31), _0x22a9a5)), 27), _0x22026c), [0, 5]), [0, 1390208809]);
          _0x22026c = _0x2c75c2(_0x4a0390(_0x22026c = _0x2c75c2(_0x22026c = _0x471a58(_0x22026c = _0x42beed(_0x22026c, _0x3273c2 = _0x4a0390(_0x3273c2 = _0x471a58(_0x3273c2 = _0x4a0390(_0x3273c2, _0x22a9a5), 33), _0x557a75)), 31), _0x35d94d), [0, 5]), [0, 944331445]);
        }
        switch (_0xd3fafc = [0, 0], _0x3273c2 = [0, 0], _0x50ac58) {
          case 15:
            _0x3273c2 = _0x42beed(_0x3273c2, _0x2d1836([0, _0x26d42b.charCodeAt(_0x5e84ca + 14)], 48));
          case 14:
            _0x3273c2 = _0x42beed(_0x3273c2, _0x2d1836([0, _0x26d42b.charCodeAt(_0x5e84ca + 13)], 40));
          case 13:
            _0x3273c2 = _0x42beed(_0x3273c2, _0x2d1836([0, _0x26d42b.charCodeAt(_0x5e84ca + 12)], 32));
          case 12:
            _0x3273c2 = _0x42beed(_0x3273c2, _0x2d1836([0, _0x26d42b.charCodeAt(_0x5e84ca + 11)], 24));
          case 11:
            _0x3273c2 = _0x42beed(_0x3273c2, _0x2d1836([0, _0x26d42b.charCodeAt(_0x5e84ca + 10)], 16));
          case 10:
            _0x3273c2 = _0x42beed(_0x3273c2, _0x2d1836([0, _0x26d42b.charCodeAt(_0x5e84ca + 9)], 8));
          case 9:
            _0x22026c = _0x42beed(_0x22026c, _0x3273c2 = _0x4a0390(_0x3273c2 = _0x471a58(_0x3273c2 = _0x4a0390(_0x3273c2 = _0x42beed(_0x3273c2, [0, _0x26d42b.charCodeAt(_0x5e84ca + 8)]), _0x22a9a5), 33), _0x557a75));
          case 8:
            _0xd3fafc = _0x42beed(_0xd3fafc, _0x2d1836([0, _0x26d42b.charCodeAt(_0x5e84ca + 7)], 56));
          case 7:
            _0xd3fafc = _0x42beed(_0xd3fafc, _0x2d1836([0, _0x26d42b.charCodeAt(_0x5e84ca + 6)], 48));
          case 6:
            _0xd3fafc = _0x42beed(_0xd3fafc, _0x2d1836([0, _0x26d42b.charCodeAt(_0x5e84ca + 5)], 40));
          case 5:
            _0xd3fafc = _0x42beed(_0xd3fafc, _0x2d1836([0, _0x26d42b.charCodeAt(_0x5e84ca + 4)], 32));
          case 4:
            _0xd3fafc = _0x42beed(_0xd3fafc, _0x2d1836([0, _0x26d42b.charCodeAt(_0x5e84ca + 3)], 24));
          case 3:
            _0xd3fafc = _0x42beed(_0xd3fafc, _0x2d1836([0, _0x26d42b.charCodeAt(_0x5e84ca + 2)], 16));
          case 2:
            _0xd3fafc = _0x42beed(_0xd3fafc, _0x2d1836([0, _0x26d42b.charCodeAt(_0x5e84ca + 1)], 8));
          case 1:
            _0x35d94d = _0x42beed(_0x35d94d, _0xd3fafc = _0x4a0390(_0xd3fafc = _0x471a58(_0xd3fafc = _0x4a0390(_0xd3fafc = _0x42beed(_0xd3fafc, [0, _0x26d42b.charCodeAt(_0x5e84ca)]), _0x557a75), 31), _0x22a9a5));
        }
        return _0x35d94d = _0x42beed(_0x35d94d, [0, _0x26d42b.length]), _0x22026c = _0x2c75c2(_0x22026c = _0x42beed(_0x22026c, [0, _0x26d42b.length]), _0x35d94d = _0x2c75c2(_0x35d94d, _0x22026c)), _0x35d94d = _0x45b4be(_0x35d94d), _0x22026c = _0x2c75c2(_0x22026c = _0x45b4be(_0x22026c), _0x35d94d = _0x2c75c2(_0x35d94d, _0x22026c)), ("00000000" + (_0x35d94d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (_0x35d94d[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (_0x22026c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (_0x22026c[1] >>> 0).toString(16)).slice(-8);
      }
    };
  }();
  function _0x6f0377(_0x2feccf) {
    _0x2feccf = JSON.stringify(_0x2feccf);
    _0x2feccf = encodeURIComponent(_0x2feccf);
    var _0x41737d = "",
      _0x2e3cbb = 0;
    do {
      var _0x835903 = _0x2feccf.charCodeAt(_0x2e3cbb++),
        _0x1f25cc = _0x2feccf.charCodeAt(_0x2e3cbb++),
        _0x4ea8fe = _0x2feccf.charCodeAt(_0x2e3cbb++),
        _0x25e20a = _0x835903 >> 2;
      _0x835903 = (3 & _0x835903) << 4 | _0x1f25cc >> 4;
      var _0x190b15 = (15 & _0x1f25cc) << 2 | _0x4ea8fe >> 6,
        _0x3c3599 = 63 & _0x4ea8fe;
      isNaN(_0x1f25cc) ? _0x190b15 = _0x3c3599 = 64 : isNaN(_0x4ea8fe) && (_0x3c3599 = 64);
      _0x41737d = _0x41737d + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(_0x25e20a) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(_0x835903) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(_0x190b15) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(_0x3c3599);
    } while (_0x2e3cbb < _0x2feccf.length);
    return _0x41737d + "/";
  }
  var _0x52752e = [$.UA.substring(0, 90), "zh-CN", "applewebkit_chrome", "605.1.15", "NA", "NA", 32, "896x414", -480, "sessionStorageKey", "localStorageKey", "indexedDbKey", "openDatabase", "NA", "iPhone", 10, "NA", "", null, null],
    _0x5b649e = _0x1ec305.hash128(_0x52752e.join("~~~"), 31),
    _0x25b1ad = {
      "pin": "",
      "oid": "",
      "bizId": "jd-babelh5",
      "fc": "",
      "mode": "strict",
      "p": "s",
      "fp": _0x5b649e,
      "ctype": 1,
      "v": "3.2.1.1",
      "f": "3",
      "o": "pro.m.jd.com/mall/active/3Rztcv2tMwdpFqWiqaAUzBAToowC/index.html",
      "qs": "",
      "jsTk": "",
      "qi": ""
    },
    _0x45c782 = _0x6f0377(_0x25b1ad),
    _0x27eee5 = {},
    _0x52752e = new Date();
  _0x27eee5.ts = {};
  _0x27eee5.ts.deviceTime = _0x52752e.getTime();
  _0x27eee5.ca = {
    "tdHash": null
  };
  _0x27eee5.m = {
    "compatMode": "CSS1Compat"
  };
  _0x27eee5.fo = ["Arial Black", "Bauhaus 93", "Chalkduster", "GungSeo", "Hiragino Sans GB", "Impact", "Menlo", "Papyrus", "Rockwell"];
  _0x27eee5.n = {
    "vendorSub": "",
    "productSub": "20030107",
    "vendor": "Apple Computer, Inc.",
    "maxTouchPoints": 1,
    "pdfViewerEnabled": !1,
    "hardwareConcurrency": 10,
    "cookieEnabled": !0,
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "appVersion": /\/(.+)/g.exec($.UA) && /\/(.+)/g.exec($.UA)[1] || $.UA,
    "platform": "iPhone",
    "product": "Gecko",
    "userAgent": $.UA,
    "language": "zh-CN",
    "onLine": !0,
    "webdriver": !1,
    "javaEnabled": !1,
    "deviceMemory": 8,
    "enumerationOrder": ["vendorSub", "productSub", "vendor", "maxTouchPoints", "scheduling", "userActivation", "doNotTrack", "geolocation", "connection", "plugins", "mimeTypes", "pdfViewerEnabled", "webkitTemporaryStorage", "webkitPersistentStorage", "hardwareConcurrency", "cookieEnabled", "appCodeName", "appName", "appVersion", "platform", "product", "userAgent", "language", "languages", "onLine", "webdriver", "getGamepads", "javaEnabled", "sendBeacon", "vibrate", "bluetooth", "clipboard", "credentials", "keyboard", "managed", "mediaDevices", "storage", "serviceWorker", "virtualKeyboard", "wakeLock", "deviceMemory", "ink", "hid", "locks", "mediaCapabilities", "mediaSession", "permissions", "presentation", "serial", "gpu", "usb", "windowControlsOverlay", "xr", "userAgentData", "clearAppBadge", "getBattery", "getUserMedia", "requestMIDIAccess", "requestMediaKeySystemAccess", "setAppBadge", "webkitGetUserMedia", "getInstalledRelatedApps", "registerProtocolHandler", "unregisterProtocolHandler"]
  };
  _0x27eee5.p = [];
  _0x27eee5.w = {
    "devicePixelRatio": 1,
    "screenTop": 0,
    "screenLeft": 0
  };
  _0x27eee5.s = {
    "availHeight": 896,
    "availWidth": 414,
    "colorDepth": 24,
    "height": 896,
    "width": 414,
    "pixelDepth": 24
  };
  _0x27eee5.sc = {
    "ActiveBorder": "rgb(118, 118, 118)",
    "ActiveCaption": "rgb(0, 0, 0)",
    "AppWorkspace": "rgb(255, 255, 255)",
    "Background": "rgb(255, 255, 255)",
    "ButtonFace": "rgb(239, 239, 239)",
    "ButtonHighlight": "rgb(239, 239, 239)",
    "ButtonShadow": "rgb(239, 239, 239)",
    "ButtonText": "rgb(0, 0, 0)",
    "CaptionText": "rgb(0, 0, 0)",
    "GrayText": "rgb(128, 128, 128)",
    "Highlight": "rgb(181, 213, 255)",
    "HighlightText": "rgb(0, 0, 0)",
    "InactiveBorder": "rgb(118, 118, 118)",
    "InactiveCaption": "rgb(255, 255, 255)",
    "InactiveCaptionText": "rgb(128, 128, 128)",
    "InfoBackground": "rgb(255, 255, 255)",
    "InfoText": "rgb(0, 0, 0)",
    "Menu": "rgb(255, 255, 255)",
    "MenuText": "rgb(0, 0, 0)",
    "Scrollbar": "rgb(255, 255, 255)",
    "ThreeDDarkShadow": "rgb(118, 118, 118)",
    "ThreeDFace": "rgb(239, 239, 239)",
    "ThreeDHighlight": "rgb(118, 118, 118)",
    "ThreeDLightShadow": "rgb(118, 118, 118)",
    "ThreeDShadow": "rgb(118, 118, 118)",
    "Window": "rgb(255, 255, 255)",
    "WindowFrame": "rgb(118, 118, 118)",
    "WindowText": "rgb(0, 0, 0)"
  };
  _0x27eee5.ss = {
    "cookie": !0,
    "localStorage": !0,
    "sessionStorage": !0,
    "globalStorage": !1,
    "indexedDB": !0
  };
  _0x27eee5.tz = -480;
  _0x27eee5.lil = "";
  _0x27eee5.wil = "";
  _0x27eee5.ts.deviceEndTime = new Date().getTime();
  var _0x34b26a = _0x6f0377(_0x27eee5);
  const _0x20ecc4 = {
    "url": "https://gia.jd.com/jsTk.do?a=" + _0x45c782,
    "body": "d=" + _0x34b26a,
    "headers": {
      "Accept": "*/*",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      "Origin": "https://pro.m.jd.com",
      "Referer": "https://pro.m.jd.com/",
      "User-Agent": $.UA
    }
  };
  return new Promise(_0x3f5330 => {
    $.dpost(_0x20ecc4, async (_0x4a902f, _0x2042fb, _0x577816) => {
      try {
        if (_0x4a902f) console.log(_0x4a902f);else {
          let _0x41f1fa = $.toObj(_0x577816, _0x577816);
          _0x41f1fa && typeof _0x41f1fa === "object" && _0x41f1fa.code == 0 && _0x41f1fa.data && _0x41f1fa.data.token ? $.eid_token = _0x41f1fa.data.token : console.log(_0x577816);
        }
      } catch (_0x2d74fa) {
        $.logErr(_0x2d74fa, _0x2042fb);
      } finally {
        _0x3f5330();
      }
    });
  });
}
function _0x984096(_0x128ea7, _0x52e85a, _0x17779e = "") {
  class _0x27cca0 {
    constructor(_0x4d21f3 = "", _0x4753dd = "", _0x3316a5 = "") {
      this.appId = _0x4d21f3;
      this.v = "4.3";
      _0x4753dd ? this.ua = _0x4753dd : this.ua = this.__genUA();
      this.fp = _0x3316a5 ? _0x3316a5 : this.__genFp();
    }
    ["__format"](_0x21fc26, _0x4676c7) {
      if (!_0x21fc26) _0x21fc26 = "yyyy-MM-dd";
      var _0x1fab11;
      !_0x4676c7 ? _0x1fab11 = Date.now() : _0x1fab11 = new Date(_0x4676c7);
      var _0x390bc8 = new Date(_0x1fab11),
        _0x380f34 = _0x21fc26,
        _0x3c05b3 = {
          "M+": _0x390bc8.getMonth() + 1,
          "d+": _0x390bc8.getDate(),
          "D+": _0x390bc8.getDate(),
          "h+": _0x390bc8.getHours(),
          "H+": _0x390bc8.getHours(),
          "m+": _0x390bc8.getMinutes(),
          "s+": _0x390bc8.getSeconds(),
          "w+": _0x390bc8.getDay(),
          "q+": Math.floor((_0x390bc8.getMonth() + 3) / 3),
          "S+": _0x390bc8.getMilliseconds()
        };
      return /(y+)/i.test(_0x380f34) && (_0x380f34 = _0x380f34.replace(RegExp.$1, "".concat(_0x390bc8.getFullYear()).substr(4 - RegExp.$1.length))), Object.keys(_0x3c05b3).forEach(_0x3a153f => {
        if (new RegExp("(".concat(_0x3a153f, ")")).test(_0x380f34)) {
          var _0x5bc80f = "S+" === _0x3a153f ? "000" : "00";
          _0x380f34 = _0x380f34.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x3c05b3[_0x3a153f] : "".concat(_0x5bc80f).concat(_0x3c05b3[_0x3a153f]).substr("".concat(_0x3c05b3[_0x3a153f]).length));
        }
      }), _0x380f34;
    }
    ["__genUA"]() {
      this.uid = $.CryptoJS.SHA1($.UserName + "red").toString();
      let _0x474bb1 = this.uid,
        _0x2a8d5c = ["14.3"],
        _0x475447 = _0x2a8d5c[Math.floor(Math.random() * _0x2a8d5c.length)],
        _0x2b64c6 = ["12,1"],
        _0x20f85c = _0x2b64c6[Math.floor(Math.random() * _0x2b64c6.length)],
        _0x31d1cd = ["wifi"],
        _0x3cb3ea = _0x31d1cd[Math.floor(Math.random() * _0x31d1cd.length)],
        _0x4be9d9 = _0x475447.replace(/\./g, "_"),
        _0x473bd8 = [];
      _0x473bd8 = [["10.1.4", "167814"]];
      let _0x126dd7 = Math.floor(Math.random() * _0x473bd8.length),
        _0x1479c7 = _0x473bd8[_0x126dd7] ? _0x473bd8[_0x126dd7] : _0x473bd8[0];
      _0x20f85c = "iPhone" + _0x20f85c;
      let _0x4c1ca9 = "";
      return _0x4c1ca9 = "jdapp;iPhone;" + _0x1479c7[0] + ";" + _0x475447 + ";" + _0x474bb1 + ";network/" + _0x3cb3ea + ";model/" + _0x20f85c + ";addressid/;appBuild/" + _0x1479c7[1] + ";jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS " + _0x4be9d9 + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", _0x4c1ca9;
    }
    ["__genFp"]() {
      function _0x4bc942(_0xe3c637, _0x31ee1c) {
        var _0x482d7d = [],
          _0x1dbc50 = _0xe3c637.length,
          _0x5873a5 = _0xe3c637.split(""),
          _0x58c04f = "";
        for (; _0x58c04f = _0x5873a5.shift();) {
          if (Math.random() * _0x1dbc50 < _0x31ee1c) {
            _0x482d7d.push(_0x58c04f);
            if (--_0x31ee1c == 0) break;
          }
          _0x1dbc50--;
        }
        for (var _0x2a5c55 = "", _0x4a9cce = 0; _0x4a9cce < _0x482d7d.length; _0x4a9cce++) {
          var _0x346497 = Math.random() * (_0x482d7d.length - _0x4a9cce) | 0;
          _0x2a5c55 += _0x482d7d[_0x346497];
          _0x482d7d[_0x346497] = _0x482d7d[_0x482d7d.length - _0x4a9cce - 1];
        }
        return _0x2a5c55;
      }
      function _0x4d9b35(_0x5b30e0, _0x437803) {
        for (let _0x1bf36f of _0x437803.slice()) _0x5b30e0 = _0x5b30e0.replace(_0x1bf36f, "");
        return _0x5b30e0;
      }
      var _0x432cbe = "kl9i1uct6d",
        _0x527bd6 = _0x4bc942(_0x432cbe, 3),
        _0x40a598 = Math.random() * 10 | 0,
        _0x146e3d = _0x4d9b35(_0x432cbe, _0x527bd6),
        _0x3ccc86 = {};
      _0x3ccc86.size = _0x40a598;
      _0x3ccc86.customDict = _0x146e3d;
      var _0x2f5c71 = this.getRandomIDPro(_0x3ccc86) + _0x527bd6 + this.getRandomIDPro({
          "size": 13 - _0x40a598 - 1,
          "customDict": _0x146e3d
        }) + _0x40a598,
        _0xb3a0a4 = _0x2f5c71.split("");
      let _0x22058c = _0xb3a0a4.slice(0, 10),
        _0xd4088 = _0xb3a0a4.slice(10),
        _0x5c98c5 = [];
      for (; _0x22058c.length > 0;) _0x5c98c5.push((35 - parseInt(_0x22058c.pop(), 36)).toString(36));
      _0x5c98c5 = _0x5c98c5.concat(_0xd4088);
      var _0x5bdb84 = _0x5c98c5.join("");
      return _0x5bdb84;
    }
    ["getRandomIDPro"]() {
      var _0x40e1b6,
        _0x5bb7dd,
        _0x1a42c9 = void 0 === (_0x414866 = (_0x5bb7dd = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).size) ? 10 : _0x414866,
        _0x414866 = void 0 === (_0x414866 = _0x5bb7dd.dictType) ? "number" : _0x414866,
        _0xdc727f = "";
      if ((_0x5bb7dd = _0x5bb7dd.customDict) && "string" == typeof _0x5bb7dd) _0x40e1b6 = _0x5bb7dd;else switch (_0x414866) {
        case "alphabet":
          _0x40e1b6 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "max":
          _0x40e1b6 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
          break;
        case "number":
        default:
          _0x40e1b6 = "0123456789";
      }
      for (; _0x1a42c9--;) _0xdc727f += _0x40e1b6[Math.random() * _0x40e1b6.length | 0];
      return _0xdc727f;
    }
    ["Encrypt"](_0x5e9e3d, _0x294958) {
      let _0x85532f = $.CryptoJS.AES.encrypt(_0x5e9e3d, $.CryptoJS.enc.Utf8.parse(_0x294958.key), {
        "iv": $.CryptoJS.enc.Utf8.parse(_0x294958.iv),
        "mode": $.CryptoJS.mode.CBC,
        "padding": $.CryptoJS.pad.Pkcs7
      });
      return _0x85532f.ciphertext.toString();
    }
    async ["__genAlgo"]() {
      let _0x13637f = {
          "wc": 0,
          "wd": 0,
          "l": "zh-cn",
          "ls": "zh-cn",
          "ml": 0,
          "pl": 0,
          "av": /\/(.+)/g.exec(this.ua) && /\/(.+)/g.exec(this.ua)[1] || this.ua,
          "ua": this.ua,
          "sua": /\((i[^;]+;( U;)? CPU.+Mac OS X)/g.exec(this.ua) && /\((i[^;]+;( U;)? CPU.+Mac OS X)/g.exec(this.ua)[1] || /\((M[^;]+;( U;)? Intel.+Mac OS X [0-9_]+)/g.exec(this.ua) && /\((M[^;]+;( U;)? Intel.+Mac OS X [0-9_]+)/g.exec(this.ua)[1] || "",
          "pp": {},
          "extend": {
            "wd": 0,
            "l": 0,
            "ls": 0,
            "wk": 0,
            "bu1": "0.1.7",
            "bu2": 0,
            "bu3": 0
          },
          "pp1": "",
          "w": 393,
          "h": 873,
          "ow": 393,
          "oh": 779,
          "url": "https://pro.m.jd.com/mall/active/3Rztcv2tMwdpFqWiqaAUzBAToowC/index.html?unionActId=31177&d=&s=&cu=true&utm_source=kong&utm_medium=jingfen",
          "og": "https://pro.m.jd.com",
          "pr": 3,
          "re": "https://u.jd.com/",
          "ai": this.appId,
          "fp": this.fp
        },
        _0x51d5c8 = JSON.stringify(_0x13637f, null, 2),
        _0x3c8a5d = this.Encrypt(_0x51d5c8, {
          "key": "wm0!@w-s#ll1flo(",
          "iv": "0102030405060708"
        });
      var _0x222ff1 = {
        "version": this.v,
        "fp": this.fp,
        "appId": this.appId.toString(),
        "timestamp": Date.now(),
        "platform": "web",
        "expandParams": _0x3c8a5d || ""
      };
      return new Promise(_0x3fd70c => {
        let _0x10eee9 = {
          "url": "https://cactus.jd.com/request_algo?g_ty=ajax",
          "body": JSON.stringify(_0x222ff1),
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-cn",
            "Origin": "https://pro.m.jd.com",
            "Referer": "https://pro.m.jd.com/",
            "user-agent": this.ua
          },
          "timeout": 30000
        };
        $.dpost(_0x10eee9, async (_0x4c07ae, _0x173041, _0x32c75d) => {
          try {
            if (_0x4c07ae) console.log(_0x4c07ae);else {
              let _0xa85b09 = $.toObj(_0x32c75d, _0x32c75d);
              _0xa85b09 && typeof _0xa85b09 === "object" && _0xa85b09.data && _0xa85b09.data.result && _0xa85b09.data.result.tk && (this.tk = _0xa85b09.data.result.tk, this.genKey = new Function("return " + _0xa85b09.data.result.algo)());
            }
          } catch (_0x1d13f8) {
            $.logErr(_0x1d13f8, _0x173041);
          } finally {
            _0x3fd70c();
          }
        });
      });
    }
    ["__genH5st"](_0x3f3aa2 = {}, _0x59a5e1 = "") {
      let _0x49b461 = undefined,
        _0x1e20e5 = {
          "ua": this.ua,
          "uid": this.uid
        };
      if (this.tk && this.genKey) {
        this.time = Date.now();
        this.timestamp = this.__format("yyyyMMddhhmmssSSS", this.time);
        let _0x4231ec = this.genKey(this.tk, this.fp.toString(), this.timestamp.toString(), this.appId.toString(), $.CryptoJS).toString();
        var _0x5ca1de = {},
          _0x1e401e = null;
        _0x1e401e = Object.keys(_0x3f3aa2).sort().map(function (_0x577f48) {
          var _0x2affdf = {};
          return _0x2affdf.key = _0x577f48, _0x2affdf.value = _0x3f3aa2[_0x577f48], _0x2affdf;
        }).filter(function (_0x2acfaf) {
          var _0x3b4abd = _0x2acfaf.value,
            _0x207262 = "number" == typeof _0x3b4abd && !isNaN(_0x3b4abd) || "string" == typeof _0x3b4abd || "boolean" == typeof _0x3b4abd || "body" == _0x2acfaf.key;
          if (_0x207262) {
            if ("body" == _0x2acfaf.key && typeof _0x2acfaf.value == "object") _0x2acfaf.value = JSON.stringify(_0x2acfaf.value);
            _0x5ca1de[_0x2acfaf.key] = _0x2acfaf.value;
          }
          return _0x207262;
        });
        _0x3f3aa2 = _0x5ca1de;
        let _0x68a2da = "";
        _0x68a2da = Object.keys(_0x3f3aa2).map(function (_0x3bebd9) {
          return _0x3bebd9 + ":" + (_0x3bebd9 == "body" && _0x3f3aa2[_0x3bebd9].length !== 64 && _0x3f3aa2[_0x3bebd9].slice(0, 1) == "{" ? $.CryptoJS.SHA256(_0x3f3aa2[_0x3bebd9]).toString($.CryptoJS.enc.Hex) : _0x3f3aa2[_0x3bebd9]);
        }).join("&");
        _0x68a2da = $.CryptoJS.HmacSHA256(_0x68a2da, _0x4231ec).toString($.CryptoJS.enc.Hex);
        let _0x2e2de6 = {
          "sua": /\((i[^;]+;( U;)? CPU.+Mac OS X)/g.exec(this.ua) && /\((i[^;]+;( U;)? CPU.+Mac OS X)/g.exec(this.ua)[1] || /\((M[^;]+;( U;)? Intel.+Mac OS X [0-9_]+)/g.exec(this.ua) && /\((M[^;]+;( U;)? Intel.+Mac OS X [0-9_]+)/g.exec(this.ua)[1] || "",
          "pp": {}
        };
        _0x59a5e1 && (_0x2e2de6.pp.p1 = _0x59a5e1);
        _0x2e2de6.fp = this.fp;
        let _0x540fb1 = JSON.stringify(_0x2e2de6, null, 2),
          _0x205acc = this.Encrypt(_0x540fb1, {
            "key": "&d74&yWoV.EYbWbZ",
            "iv": "0102030405060708"
          });
        _0x49b461 = [this.timestamp, this.fp, this.appId.toString(), this.tk, _0x68a2da, this.v, this.time.toString(), _0x205acc].join(";");
        _0x1e20e5.t = _0x3f3aa2.t;
      }
      return _0x1e20e5.h5st = _0x49b461, _0x1e20e5;
    }
  }
  _0xcf4ef0 = new _0x27cca0(_0x128ea7, _0x52e85a, _0x17779e);
}
function _0x4e5956() {
  class _0x48bd0a {
    constructor() {
      this.UVCookie = "";
      this.ltr = 0;
      this.mr = [1, 0];
      this.document = {
        "cookie": "",
        "cookies": "__jdc=123;",
        "domain": "prodev.m.jd.com",
        "referrer": "https://u.jd.com/",
        "location": {
          "href": "https://pro.m.jd.com/mall/active/3Rztcv2tMwdpFqWiqaAUzBAToowC/index.html",
          "hrefs": "https://pro.m.jd.com/mall/active/3Rztcv2tMwdpFqWiqaAUzBAToowC/index.html"
        }
      };
      this.navigator = {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
        "userAgents": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
      };
      this.window = {};
    }
    ["getUVCookie"](_0x4f3f28 = "", _0x5683e6 = "", _0x4f476d = "", _0x5af828 = "") {
      try {
        this.document.location.href = this.document.location.hrefs + "";
        this.document.cookie = this.document.cookies + "";
        if (_0x4f476d) this.document.location.href = _0x4f476d;
        if (_0x5af828) this.document.cookie = _0x5af828;
        this.UVCookie = "";
        this.navigator.userAgent = this.navigator.userAgents + "";
        this.ltr = 1011 + Math.round(31 * Math.random());
        if (_0x4f3f28) this.navigator.userAgent = _0x4f3f28;
        return this.lr = {
          "ckJda": "__jda",
          "ckJdb": "__jdb",
          "ckJdv": "__jdv",
          "ckJdc": "__jdc",
          "refUrl": "https://u.jd.com/"
        }, this.q(), this.s(_0x5683e6), this.UVCookie;
      } catch (_0x3c0152) {
        console.log(_0x3c0152);
      }
    }
    ["s"](_0x59ab32 = "") {
      var _0xb47d1e,
        _0x4e155e,
        _0x3e3e36,
        _0x24a8c9,
        _0x1815e7 = (this.getCookie(this.lr.ckJda) || "").split("."),
        _0x369e63 = (this.getCookie(this.lr.ckJdb) || "").split("."),
        _0x49502a = (this.getCookie(this.lr.ckJdv) || "").split("|"),
        _0xf06444 = this.getCookie(this.lr.ckJdc) || "",
        _0x63f6bc = parseInt((new Date().getTime() - this.ltr) / 1000),
        _0x381581 = 0,
        _0x1e592f = 1,
        _0x5a8c4c = "direct",
        _0x5dc5bc = "-",
        _0x4409d1 = "none",
        _0x47ea77 = "-";
      if (_0x1815e7.length > 3) for (var _0x5dcb39 = 2; _0x5dcb39 < 5 && _0x5dcb39 < _0x1815e7.length; _0x5dcb39++) {
        var _0x29ae98 = _0x1815e7[_0x5dcb39];
        _0x29ae98.length > 10 && (_0x1815e7[_0x5dcb39] = _0x29ae98.substr(0, 10));
      }
      _0x1815e7.length > 5 ? (_0x3e3e36 = _0x1815e7[0], _0x24a8c9 = _0x1815e7[1], _0xb47d1e = parseInt(_0x1815e7[2], 10), _0x4e155e = parseInt(_0x1815e7[3], 10), _0x63f6bc = parseInt(_0x1815e7[4], 10), _0x1e592f = parseInt(_0x1815e7[5], 10) || _0x1e592f) : (_0x24a8c9 = this.genUuid(), _0xb47d1e = _0x63f6bc, _0x4e155e = _0x63f6bc);
      this.lr.uuid = _0x24a8c9;
      _0x369e63.length > 3 && (_0x3e3e36 || (_0x3e3e36 = _0x369e63[0]), _0x381581 = parseInt(_0x369e63[1], 10) || 0);
      _0x49502a.length > 4 && (_0x3e3e36 || (_0x3e3e36 = _0x49502a[0]), _0x5a8c4c = _0x49502a[1], _0x5dc5bc = _0x49502a[2], _0x4409d1 = _0x49502a[3], _0x47ea77 = _0x49502a[4]);
      _0xf06444 && "" !== _0xf06444 && (_0x3e3e36 || (_0x3e3e36 = _0xf06444));
      var _0x54607f,
        _0x473d90 = [],
        _0xdbf6e3 = _0x369e63.length < 4,
        _0x1987dd = this.getParameter("utm_source"),
        _0xd96af = false;
      if (_0x1987dd) {
        var _0x16fdb4 = this.getParameter("utm_campaign"),
          _0x5d2df2 = this.getParameter("utm_medium"),
          _0x1448da = this.getParameter("utm_term");
        _0x473d90.push(_0x1987dd || _0x5a8c4c);
        _0x473d90.push(_0x16fdb4 || _0x5dc5bc);
        _0x473d90.push(_0x5d2df2 || _0x4409d1);
        _0x473d90.push(_0x1448da || _0x47ea77);
        _0x47ea77 = _0x473d90[3];
        _0xd96af = !0;
      } else {
        var _0x4d85d0,
          _0xa37e52 = this.lr.refUrl && this.lr.refUrl.split("/")[2],
          _0x19768b = false;
        if (_0xa37e52 && _0xa37e52.indexOf(this.lr.ckDomain) < 0) {
          for (_0x4d85d0 = this.lr.seo, _0x5dcb39 = 0; _0x5dcb39 < _0x4d85d0.length; _0x5dcb39++) {
            var _0x33d4c5 = _0x4d85d0[_0x5dcb39].split(":");
            if (_0xa37e52.indexOf(_0x33d4c5[0].toLowerCase()) > -1 && this.lr.refUrl.indexOf((_0x33d4c5[1] + "=").toLowerCase()) > -1) {
              var _0x3e7ed7 = this.getParameter(_0x33d4c5[1], this.lr.refUrl);
              /[^\x00-\xff]/.test(_0x3e7ed7) && (_0x3e7ed7 = encodeURIComponent(_0x3e7ed7));
              _0x473d90.push(_0x33d4c5[0]);
              _0x473d90.push("-");
              _0x473d90.push("organic");
              _0x473d90.push(_0x3e7ed7 || "not set");
              _0x47ea77 = _0x473d90[3];
              _0x19768b = !0;
              break;
            }
          }
          _0x19768b || (_0xa37e52.indexOf("zol.com.cn") > -1 ? (_0x473d90.push("zol.com.cn"), _0x473d90.push("-"), _0x473d90.push("cpc"), _0x473d90.push("not set")) : (_0x473d90.push(_0xa37e52), _0x473d90.push("-"), _0x473d90.push("referral"), _0x473d90.push("-")));
        }
      }
      _0x54607f = _0x473d90.length > 0 && (_0x473d90[0] !== _0x5a8c4c || _0x473d90[1] !== _0x5dc5bc || _0x473d90[2] !== _0x4409d1) && "referral" !== _0x473d90[2];
      _0xdbf6e3 || !_0xdbf6e3 && _0x54607f ? (_0x5a8c4c = _0x473d90[0] || _0x5a8c4c, _0x5dc5bc = _0x473d90[1] || _0x5dc5bc, _0x4409d1 = _0x473d90[2] || _0x4409d1, _0x47ea77 = _0x473d90[3] || _0x47ea77, _0x1815e7.length > 5 ? (_0xb47d1e = parseInt(_0x1815e7[2], 10), _0x4e155e = parseInt(_0x1815e7[4], 10), _0x63f6bc = parseInt((new Date().getTime() - this.ltr) / 1000), _0x1e592f++, _0x381581 = 1) : (_0x1e592f = 1, _0x381581 = 1)) : _0x381581++;
      var _0x13e3ce = this.getPageParamFromSdk();
      if (_0x13e3ce && _0x13e3ce.vts) {
        var _0x1312e9 = 1 * _0x13e3ce.vts,
          _0x162320 = 1 * _0x13e3ce.seq;
        (_0x1312e9 > _0x1e592f || _0x1312e9 === _0x1e592f && _0x162320 >= _0x381581) && (_0x1e592f = _0x1312e9, _0x381581 = _0x162320 + 1);
      }
      if (_0x3e3e36 || (_0x3e3e36 = this.genHash(this.lr.ckDomain)), this.setCookie(this.lr.ckJda, [_0x3e3e36, _0x24a8c9, _0xb47d1e, _0x4e155e, _0x63f6bc, _0x1e592f || 1].join("."), this.lr.ckDomain, this.lr.ckJdaExp), this.setCookie(this.lr.ckJdb, [_0x3e3e36, _0x381581, _0x24a8c9 + "|" + _0x1e592f, _0x63f6bc].join("."), this.lr.ckDomain, this.lr.ckJdbExp), _0xd96af || _0x54607f || _0x49502a.length < 5) {
        var _0x5a7aef = [_0x3e3e36, _0x5a8c4c || "direct", _0x5dc5bc || "-", _0x4409d1 || "none", _0x47ea77 || "-", new Date().getTime() - this.ltr].join("|");
        this.setJdv(_0x5a7aef = encodeURIComponent(_0x5a7aef), _0x3e3e36);
      }
      this.setCookie(this.lr.ckJdc, _0x3e3e36, this.lr.ckDomain);
    }
    ["q"]() {
      this.lr.rpDomain = this.lr.rpDomain || "uranus.jd.com";
      this.lr.logUrl = "//" + this.lr.rpDomain + "/log/m";
      this.lr.logType = {
        "pv": "1",
        "pf": "2",
        "cl": "3",
        "od": "4",
        "pd": "5",
        "hm": "6",
        "magic": "000001"
      };
      this.lr.useTmpCookie ? (this.lr.ckJda = "__tra", this.lr.ckJdb = "__trb", this.lr.ckJdc = "__trc", this.lr.ckJdu = "__tru") : (this.lr.ckJda = "__jda", this.lr.ckJdb = "__jdb", this.lr.ckJdc = "__jdc", this.lr.ckJdu = "__jdu");
      this.lr.ckJdv = "__jdv";
      this.lr.ckWxAppCk = "__jdwxapp";
      this.lr.ckRefCls = "__jd_ref_cls";
      this.lr.ckJdaExp = 15552000000;
      this.lr.ckJdbExp = 1800000;
      this.lr.ckJduExp = 15552000000;
      this.lr.ckJdvExp = 1296000000;
      this.lr.ckJdvEmbeddedExp = 86400000;
      this.lr.ckWxAppCkExp = 15552000000;
      this.lr.mtSubsiteExp = 31536000000;
      this.lr.ckDomain = (this.document.domain.match(/[^.]+\.(com.cn|net.cn|org.cn|gov.cn|edu.cn)$/) || [""])[0] || this.document.domain.replace(/.*?([^.]+\.[^.]+)$/, "$1");
      this.lr.title = this.document.title;
      this.lr.refUrl = this.document.referrer;
      this.lr.seo = ["i.easou.com:q", "m.baidu.com:word", "m.sm.cn:q", "m.so.com:q", "wap.sogou.com:keyword", "m.sogou.com:keyword", "wap.sogo.com:keyword", "m.sogo.com:keyword", "page.roboo.com:q", "ask.com:q", "baidu:word", "baidu:wd", "bing:q", "easou:q", "google:q", "roboo:word", "roboo:q", "sm.cn:q", "so.com:q", "sogou:keyword", "sogou:query", "sogo.com:keyword", "sogo.com:query", "yahoo:p", "yandex:text", "yicha:key"];
    }
    ["setCookie"](_0x2899f3, _0x45b1d4, _0x1422bb, _0xc326d0) {
      if (_0x2899f3) {
        var _0x5612d6 = "";
        if (_0xc326d0) {
          var _0x5022eb = new Date();
          _0x5022eb.setTime(_0x5022eb.getTime() - this.ltr + _0xc326d0);
          _0x5612d6 = ";expires=" + _0x5022eb.toGMTString();
        }
        this.UVCookie += _0x2899f3 + "=" + _0x45b1d4 + "; ";
      }
    }
    ["setJdv"](_0x2c075a, _0x30e20c, _0x1919e3) {
      var _0x3ce2c1 = "";
      _0x3ce2c1 = this.isPrey(10) && (!_0x2c075a || _0x2c075a.length > 400) ? _0x30e20c + "|direct|-|none|-|" + (new Date().getTime() - this.ltr) : _0x2c075a;
      var _0x3fc53c = _0x1919e3 || this.isEmbedded() ? this.lr.ckJdvEmbeddedExp : this.lr.ckJdvExp;
      this.setCookie(this.lr.ckJdv || "__jdv", _0x3ce2c1, this.lr.ckDomain, _0x3fc53c);
    }
    ["getCookie"](_0x41c784, _0x261009) {
      var _0x340e26 = this.document.cookie.match(new RegExp("(^| )" + _0x41c784 + "=([^;]*)(;|$)"));
      return null !== _0x340e26 ? _0x261009 ? _0x340e26[2] : this.urlDecode(_0x340e26[2]) : "";
    }
    ["genUuid"]() {
      return new Date().getTime() - this.ltr + "" + parseInt(2147483647 * Math.random());
    }
    ["getParameter"](_0xd13c31, _0x5cfc97) {
      var _0xa9f75e = _0x5cfc97 || this.document.location.href,
        _0x1e6297 = new RegExp("(?:^|&|[?]|[/])" + _0xd13c31 + "=([^&]*)").exec(_0xa9f75e);
      return _0x1e6297 ? this.urlDecode(_0x1e6297[1]) : null;
    }
    ["urlDecode"](_0x3043a2) {
      try {
        return decodeURIComponent(_0x3043a2);
      } catch (_0x26f4f6) {
        return _0x3043a2;
      }
    }
    ["genHash"](_0x397e2b) {
      var _0x58f115,
        _0x49cc57 = 1,
        _0x10bca8 = 0;
      if (_0x397e2b) for (_0x49cc57 = 0, _0x58f115 = _0x397e2b.length - 1; _0x58f115 >= 0; _0x58f115--) {
        _0x49cc57 = 0 !== (_0x10bca8 = 266338304 & (_0x49cc57 = (_0x49cc57 << 6 & 268435455) + (_0x10bca8 = _0x397e2b.charCodeAt(_0x58f115)) + (_0x10bca8 << 14))) ? _0x49cc57 ^ _0x10bca8 >> 21 : _0x49cc57;
      }
      return _0x49cc57;
    }
    ["isPrey"](_0x3a3984) {
      if (_0x3a3984 >= 100) return !0;
      var _0x200292 = this.lr.uuid,
        _0x50f1cd = _0x200292.substr(_0x200292.length - 2);
      return !!_0x50f1cd && 1 * _0x50f1cd < _0x3a3984;
    }
    ["isEmbedded"]() {
      var _0x473116 = this.navigator.userAgent || "";
      return /^(jdapp|jdltapp|jdpingou);/.test(_0x473116) || this.isJdLog();
    }
    ["isJdLog"]() {
      return (this.navigator.userAgent || "").indexOf(";jdlog;") > -1;
    }
    ["getPageParamFromSdk"]() {
      var _0x55a04c, _0x1e96d4;
      try {
        this.window.JDMAUnifyBridge && this.window.JDMAUnifyBridge.JDMAGetMPageParam ? _0x1e96d4 = JDMAUnifyBridge.JDMAGetMPageParam() : this.window.JDMAGetMPageParam ? _0x1e96d4 = JDMAGetMPageParam() : this.window.webkit && this.window.webkit.messageHandlers && this.window.webkit.messageHandlers.JDMASetMPageParam && (_0x1e96d4 = this.window.prompt("JDMAGetMPageParam", ""));
        _0x1e96d4 && (_0x55a04c = JSON.parse(_0x1e96d4));
      } catch (_0x179aec) {}
      return _0x55a04c;
    }
    ["time"](_0x84e1f4, _0x54802c = null) {
      const _0x4d98f6 = _0x54802c ? new Date(_0x54802c) : new Date();
      let _0x24db34 = {
        "M+": _0x4d98f6.getMonth() + 1,
        "d+": _0x4d98f6.getDate(),
        "H+": _0x4d98f6.getHours(),
        "m+": _0x4d98f6.getMinutes(),
        "s+": _0x4d98f6.getSeconds(),
        "q+": Math.floor((_0x4d98f6.getMonth() + 3) / 3),
        "S": _0x4d98f6.getMilliseconds()
      };
      /(y+)/.test(_0x84e1f4) && (_0x84e1f4 = _0x84e1f4.replace(RegExp.$1, (_0x4d98f6.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x13a717 in _0x24db34) new RegExp("(" + _0x13a717 + ")").test(_0x84e1f4) && (_0x84e1f4 = _0x84e1f4.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x24db34[_0x13a717] : ("00" + _0x24db34[_0x13a717]).substr(("" + _0x24db34[_0x13a717]).length)));
      return _0x84e1f4;
    }
  }
  _0x5da4cb = new _0x48bd0a();
}
function _0x48fdf9() {
  let _0x482c98 = {
      "url": "https://src-dy-server-dmujhfwxmu.cn-hangzhou.fcapp.run/11red",
      "timeout": 10000
    },
    _0x3cc23a = [];
  return new Promise(_0x579c8f => {
    $.get(_0x482c98, async (_0x581ba9, _0x2ad011, _0x533548) => {
      try {
        if (_0x581ba9) {} else {
          if (_0x533548) {
            _0x533548 = JSON.parse(_0x533548);
            if (_0x533548.code === 200) _0x3cc23a = _0x533548.data;else {}
          }
        }
      } catch (_0x18968a) {
        $.logErr(_0x18968a, _0x2ad011);
      } finally {
        _0x579c8f(_0x3cc23a);
      }
    });
  });
}
function _0x134f63(_0x5239df) {
  if (typeof _0x5239df == "string") try {
    return JSON.parse(_0x5239df);
  } catch (_0x3776ce) {
    return console.log(_0x3776ce), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
  }
}
function _0x5d231d(_0x4a8970) {
  _0x4a8970 = _0x4a8970 || 32;
  let _0x57ede9 = "abcdef0123456789",
    _0x34257e = _0x57ede9.length,
    _0x8583d5 = "";
  for (i = 0; i < _0x4a8970; i++) _0x8583d5 += _0x57ede9.charAt(Math.floor(Math.random() * _0x34257e));
  return _0x8583d5;
}
function Env(o,t){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((r,i)=>{s.call(this,t,(t,e,s)=>{t?i(t):r(e)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.logLevels={debug:0,info:1,warn:2,error:3},this.logLevelPrefixs={debug:"[DEBUG] ",info:"[INFO] ",warn:"[WARN] ",error:"[ERROR] "},this.logLevel="info",this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null,...s){try{return JSON.stringify(t,...s)}catch{return e}}getjson(t,e){let s=e;if(this.getdata(t))try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(r=>{this.get({url:t},(t,e,s)=>r(s))})}runScript(a,o){return new Promise(r=>{let t=this.getdata("@chavy_boxjs_userCfgs.httpapi");t=t&&t.replace(/\n/g,"").trim();var e=(e=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"))?+e:20,[s,i]=(e=o&&o.timeout?o.timeout:e,t.split("@"));this.post({url:`http://${i}/v1/scripting/evaluate`,body:{script_text:a,mock_type:"cron",timeout:e},headers:{"X-Key":s,Accept:"*/*"},timeout:e},(t,e,s)=>r(s))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};this.fs=this.fs||require("fs"),this.path=this.path||require("path");var t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),r=!s&&this.fs.existsSync(e);if(!s&&!r)return{};r=s?t:e;try{return JSON.parse(this.fs.readFileSync(r))}catch(t){return{}}}writedata(){var t,e,s,r,i;this.isNode()&&(this.fs=this.fs||require("fs"),this.path=this.path||require("path"),t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),r=!(s=this.fs.existsSync(t))&&this.fs.existsSync(e),i=JSON.stringify(this.data),!s&&r?this.fs.writeFileSync(e,i):this.fs.writeFileSync(t,i))}lodash_get(t,e,s){let r=t;for(const t of e.replace(/\[(\d+)\]/g,".$1").split("."))if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,r,e){return Object(t)===t&&((r=Array.isArray(r)?r:r.toString().match(/[^.[\]]+/g)||[]).slice(0,-1).reduce((t,e,s)=>Object(t[e])===t[e]?t[e]:t[e]=Math.abs(r[s+1])>>0==+r[s+1]?[]:{},t)[r[r.length-1]]=e),t}getdata(t){let e=this.getval(t);if(/^@/.test(t)){var[,s,r]=/^@(.*?)\.(.*?)$/.exec(t);if(s=s?this.getval(s):"")try{const t=JSON.parse(s);e=t?this.lodash_get(t,r,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){var[,r,i]=/^@(.*?)\.(.*?)$/.exec(e),a=this.getval(r),a=r?"null"===a?null:a||"{}":"{}";try{const e=JSON.parse(a);this.lodash_set(e,i,t),s=this.setval(JSON.stringify(e),r)}catch(e){this.lodash_set(a={},i,t),s=this.setval(JSON.stringify(a),r)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got||require("got"),this.cktough=this.cktough||require("tough-cookie"),this.ckjar=this.ckjar||new this.cktough.CookieJar,t&&(t.headers=t.headers||{},t)&&(t.headers=t.headers||{},void 0===t.headers.cookie)&&void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar)}tmout(){return new Promise((t,e)=>{this.tmoutId=setTimeout(()=>{this.prms.cancel(),e({message:"timemout",response:""})},5e4)})}get(t,a=()=>{}){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),t.params&&(t.url+="?"+this.queryStr(t.params)),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,e,s)=>{!t&&e&&(e.body=s,e.statusCode=e.status||e.statusCode,e.status=e.statusCode),a(t,e,s)});break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{var{statusCode:t,statusCode:e,headers:s,body:r,bodyBytes:i}=t;a(null,{status:t,statusCode:e,headers:s,body:r,bodyBytes:i},r,i)},t=>a(t&&t.error||"UndefinedError"));break;case"Node.js":this.initGotEnv(t),this.prms=this.got(t).on("redirect",(t,e)=>{try{var s;t.headers["set-cookie"]&&((s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString())&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar)}catch(t){this.logErr(t)}}),Promise.race([this.prms,this.tmout()]).then(t=>{var{statusCode:t,statusCode:e,headers:s,rawBody:r,body:i}=t;a(null,{status:t,statusCode:e,headers:s,rawBody:r,body:i},i),clearTimeout(this.tmoutId)},t=>{var{message:t,response:e}=t;clearTimeout(this.tmoutId),a(t,e,e&&e.body)})}}post(t,a=()=>{}){var e=t.method?t.method.toLocaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[e](t,(t,e,s)=>{!t&&e&&(e.body=s,e.statusCode=e.status||e.statusCode,e.status=e.statusCode),a(t,e,s)});break;case"Quantumult X":t.method=e,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{var{statusCode:t,statusCode:e,headers:s,body:r,bodyBytes:i}=t;a(null,{status:t,statusCode:e,headers:s,body:r,bodyBytes:i},r,i)},t=>a(t&&t.error||"UndefinedError"));break;case"Node.js":this.initGotEnv(t);var{url:s,...r}=t;this.prms=this.got[e](s,r),Promise.race([this.prms,this.tmout()]).then(t=>{var{statusCode:t,statusCode:e,headers:s,rawBody:r,body:i}=t;a(null,{status:t,statusCode:e,headers:s,rawBody:r,body:i},i),clearTimeout(this.tmoutId)},t=>{var{message:t,response:e}=t;clearTimeout(this.tmoutId),a(t,e,e&&e.body)})}}time(t,e=null){var s,r={"M+":(e=e?new Date(e):new Date).getMonth()+1,"d+":e.getDate(),"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(s in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[s]:("00"+r[s]).substr((""+r[s]).length)));return t}queryStr(e){let s="";for(const r in e){let t=e[r];null!=t&&""!==t&&("object"==typeof t&&(t=JSON.stringify(t)),s+=`${r}=${t}&`)}return s=s.substring(0,s.length-1)}msg(t=o,e="",s="",r={}){var i,a=r=>{const{$open:t,$copy:e,$media:i,$mediaMime:a}=r;switch(typeof r){case void 0:return r;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:r};case"Loon":case"Shadowrocket":return r;case"Quantumult X":return{"open-url":r};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:var o={},s=r.openUrl||r.url||r["open-url"]||t;if(s&&Object.assign(o,{action:"open-url",url:s}),(s=r["update-pasteboard"]||r.updatePasteboard||e)&&Object.assign(o,{action:"clipboard",text:s}),i){let t,e,s;if(i.startsWith("http"))t=i;else if(i.startsWith("data:")){const[r]=i.split(";"),[,a]=i.split(",");e=a,s=r.replace("data:","")}else e=i,s=(t=>{var e,s={JVBERi0:"application/pdf",R0lGODdh:"image/gif",R0lGODlh:"image/gif",iVBORw0KGgo:"image/png","/9j/":"image/jpg"};for(e in s)if(0===t.indexOf(e))return s[e];return null})(i);Object.assign(o,{"media-url":t,"media-base64":e,"media-base64-mime":a??s})}return Object.assign(o,{"auto-dismiss":r["auto-dismiss"],sound:r.sound}),o;case"Loon":{const e={};(s=r.openUrl||r.url||r["open-url"]||t)&&Object.assign(e,{openUrl:s});var n=r.mediaUrl||r["media-url"];return(n=i?.startsWith("http")?i:n)&&Object.assign(e,{mediaUrl:n}),console.log(JSON.stringify(e)),e}case"Quantumult X":{const a={};(o=r["open-url"]||r.url||r.openUrl||t)&&Object.assign(a,{"open-url":o});n=r["media-url"]||r.mediaUrl;return(n=i?.startsWith("http")?i:n)&&Object.assign(a,{"media-url":n}),(s=r["update-pasteboard"]||r.updatePasteboard||e)&&Object.assign(a,{"update-pasteboard":s}),console.log(JSON.stringify(a)),a}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(t,e,s,a(r));break;case"Quantumult X":$notify(t,e,s,a(r));break;case"Node.js":}this.isMuteLog||((i=["","==============📣系统通知📣=============="]).push(t),e&&i.push(e),s&&i.push(s),console.log(i.join("\n")),this.logs=this.logs.concat(i))}debug(...t){this.logLevels[this.logLevel]<=this.logLevels.debug&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.debug+t.map(t=>t??String(t)).join(this.logSeparator)))}info(...t){this.logLevels[this.logLevel]<=this.logLevels.info&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.info+t.map(t=>t??String(t)).join(this.logSeparator)))}warn(...t){this.logLevels[this.logLevel]<=this.logLevels.warn&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.warn+t.map(t=>t??String(t)).join(this.logSeparator)))}error(...t){this.logLevels[this.logLevel]<=this.logLevels.error&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.error+t.map(t=>t??String(t)).join(this.logSeparator)))}log(...t){0<t.length&&(this.logs=[...this.logs,...t]),console.log(t.map(t=>t??String(t)).join(this.logSeparator))}logErr(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️${this.name}, 错误!`,t);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,void 0!==t.message?t.message:t)}}wait(e){return new Promise(t=>setTimeout(t,e))}done(t={}){var e=((new Date).getTime()-this.startTime)/1e3;switch(this.log("",`🔔${this.name}, 结束! 🕛 ${e} 秒`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(o,t)}
