/*
APP首页-领京豆
38 0,7 * * * jd_signbeanact_.js
*/


const $ = new Env('领京豆签到');
const bdy_0x54e64b = $.isNode() ? require("./jdCookie.js") : "";
let bdy_0x36713c = [];
if ($.isNode()) {
  Object.keys(bdy_0x54e64b).forEach(_0x5ce98d => {
    bdy_0x36713c.push(bdy_0x54e64b[_0x5ce98d]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x36713c = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...bdy_0x42c1ba($.getdata("CookiesJD") || "[]").map(_0x54e5fb => _0x54e5fb.cookie)].filter(_0x57a035 => !!_0x57a035);
}
const bdy_0x33b3c1 = require("./function/dylans"),
  bdy_0x39eaa7 = "11.1.2";
!(async () => {
  if (!bdy_0x36713c[0]) {
    $.msg("【京东账号一】宠汪汪积分兑换奖品失败", "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  for (let _0x3e0f73 = 0; _0x3e0f73 < bdy_0x36713c.length; _0x3e0f73++) {
    bdy_0x36713c[_0x3e0f73] && ($.cookie = bdy_0x36713c[_0x3e0f73] + "", $.UserName = decodeURIComponent($.cookie.match(/pt_pin=([^; ]+)(?=;?)/) && $.cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]), $.index = _0x3e0f73 + 1, $.bean = 0, iphoneVersion = [Math.ceil(Math.random() * 2 + 12), Math.ceil(Math.random() * 4)], UA = "jdapp;iPhone;" + bdy_0x39eaa7 + ";" + Math.ceil(Math.random() * 2 + 12) + "." + Math.ceil(Math.random() * 4) + ";" + bdy_0x27dd9f(40) + ";network/wifi;model/iPhone12,1;addressid/0;appBuild/167802;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS " + iphoneVersion[0] + "_" + iphoneVersion[1] + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", UUID = bdy_0x27dd9f(40), console.log("\n*****开始【京东账号" + $.index + "】" + $.UserName + "****\n"), await bdy_0x3a1c00(), await $.wait(2000));
  }
})().catch(_0x453335 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x453335 + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0x3a1c00() {
  try {
    await bdy_0x296a96("signBeanAct");
    await $.wait(500);
  } catch (_0x23bfc1) {
    console.log(_0x23bfc1);
  }
}
async function bdy_0x296a96(_0xbeb4bb) {
  let _0x342ce9 = "",
    _0x2095e5 = "";
  switch (_0xbeb4bb) {
    case "beanTaskList":
      _0x342ce9 = "{\"viewChannel\":\"AppHome\"}";
      _0x2095e5 = await bdy_0x1f56a8("beanTaskList", escape(_0x342ce9));
      break;
    case "signBeanAct":
      _0x342ce9 = {};
      let _0x266550 = {
        appId: "9d49c",
        functionId: "signBeanAct",
        body: _0x342ce9,
        appid: "signed_wh5_ihub",
        clientVersion: bdy_0x39eaa7,
        client: "ios",
        user: $.UserName,
        t: Date.now(),
        ua: UA
      };
      _0x342ce9 = await bdy_0x33b3c1.getbody(_0x266550);
      _0x2095e5 = await bdy_0x1f56a8("signBeanAct", _0x342ce9);
      break;
    default:
      console.log("错误" + _0xbeb4bb);
  }
  if (_0x2095e5) {
    return new Promise(async _0x1237ad => {
      $.post(_0x2095e5, (_0xc9d31, _0x5a8700, _0x32bd8a) => {
        try {
          bdy_0x502f1d(_0xbeb4bb, _0x32bd8a);
        } catch (_0x4702f5) {
          $.logErr(_0x4702f5, _0x5a8700);
        } finally {
          _0x1237ad();
        }
      });
    });
  }
}
async function bdy_0x502f1d(_0x2e838b, _0x52432a) {
  try {
    data = JSON.parse(_0x52432a);
  } catch (_0x516879) {
    console.log("返回异常：" + _0x52432a);
    return;
  }
  switch (_0x2e838b) {
    case "beanTaskList":
      if (data.code == 0 && data.data) {
        console.log("当前等级:" + (data.data.curLevel || 0) + " 下一级可领取:" + (data.data.nextLevelBeanNum || 0) + "京豆");
        $.taskList = data.data.taskInfos && data.data.taskInfos || [];
        $.viewAppHome = data.data.viewAppHome && data.data.viewAppHome || {};
      } else {
        data.data && data.data.bizMsg ? console.log(data.data.bizMsg) : console.log(_0x52432a);
      }
      break;
    case "signBeanAct":
      data.code == 0 && data.data ? data.data?.["continuityAward"]?.["beanAward"]?.["beanCount"] ? (console.log((data.data.continuityAward.title || 0) + ":" + (data.data.continuityAward.beanAward.beanCount || 0) + "京豆"), $.bean += Number(data.data.continuityAward.beanAward.beanCount) || 0) : data.data?.["dailyAward"] ? (console.log(data.data.dailyAward.title + ("获得:" + (data.data.dailyAward.beanAward.beanCount || 0) + "京豆")), $.bean += Number(data.data.dailyAward.beanAward.beanCount) || 0) : console.log("DEBUG1:" + JSON.stringify(data)) : console.log("DEBUG2:" + JSON.stringify(_0x52432a));
      break;
    default:
      console.log("未判断的异常" + _0x2e838b);
  }
}
async function bdy_0x1f56a8(_0x1b3e93, _0x46d101) {
  let _0x4185ef = "https://api.m.jd.com/client.action?" + _0x46d101 + "&uuid=" + UUID + "&openudid=" + UUID;
  const _0x807d63 = "GET",
    _0x373d4c = {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      Cookie: $.cookie,
      Referer: "https://pro.m.jd.com/",
      "User-Agent": UA
    };
  const _0x472d21 = {
    url: _0x4185ef,
    method: _0x807d63,
    headers: _0x373d4c
  };
  return _0x472d21;
}
async function bdy_0x1fa480() {
  const _0x4049ea = {
    Cookie: $.cookie
  };
  let _0x2f4cd8 = {
    url: "https://nu.jr.jd.com/gw/generic/jrm/h5/m/process",
    headers: _0x4049ea,
    body: "reqData=" + encodeURIComponent("{\"actCode\":\"F68B2C3E71\",\"type\":\"3\",\"frontParam\":{\"belong\":\"jingdou\"}}")
  };
  return new Promise(async _0x5762c4 => {
    $.post(_0x2f4cd8, async (_0x1b36d9, _0x43fe04, _0x4495c4) => {
      try {
        if (_0x1b36d9) {
          console.log("" + JSON.stringify(_0x1b36d9));
          console.log(" API请求失败，请检查网路重试");
        } else {
          if (_0x4495c4.match(/"京豆.*"/)) {
            const _0x2b3c11 = _0x4495c4.match(/\"count\":\"?(\d.*?)\"?,/)[1];
            console.log("双签成功：" + _0x2b3c11 + "京豆");
          } else {
            const _0x3ecfbc = _0x4495c4.match(/},\"businessMsg\":\"(\S.*)\",\"c/)[1];
            console.log("金融双签:" + _0x3ecfbc);
          }
        }
      } catch (_0x5903cc) {
        $.logErr(_0x5903cc, _0x43fe04);
      } finally {
        _0x5762c4();
      }
    });
  });
}
function bdy_0x42c1ba(_0x2ecbd5) {
  if (typeof _0x2ecbd5 == "string") {
    try {
      return JSON.parse(_0x2ecbd5);
    } catch (_0x46d8a9) {
      console.log(_0x46d8a9);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function bdy_0x27dd9f(_0x4cc705) {
  _0x4cc705 = _0x4cc705 || 32;
  let _0x4923b3 = "abcdef0123456789",
    _0x5c9ffd = _0x4923b3.length,
    _0x1db604 = "";
  for (i = 0; i < _0x4cc705; i++) {
    _0x1db604 += _0x4923b3.charAt(Math.floor(Math.random() * _0x5c9ffd));
  }
  return _0x1db604;
}
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } isShadowrocket() { return "undefined" != typeof $rocket } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { const s = t.method ? t.method.toLocaleLowerCase() : "post"; if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[s](t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: i, ...r } = t; this.got[s](i, r).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } put(t, e = (() => { })) { const s = t.method ? t.method.toLocaleLowerCase() : "put"; if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[s](t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: i, ...r } = t; this.got[s](i, r).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
