/*
39 0,5 * * * jd_seckillViewTask.js
 */
const $ = new Env('秒杀浏览商品领豆');
const bdy_0xffd2d7 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x4d52e3 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x57aa01 = require("./function/dylans"),
  bdy_0x107fb4 = require("./USER_AGENTS");
let bdy_0x2dbe7a = [],
  bdy_0x29f16e = "";
if ($.isNode()) {
  Object.keys(bdy_0x4d52e3).forEach(_0x283585 => {
    bdy_0x2dbe7a.push(bdy_0x4d52e3[_0x283585]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x2dbe7a = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...bdy_0x1cef19($.getdata("CookiesJD") || "[]").map(_0x134af1 => _0x134af1.cookie)].filter(_0x514458 => !!_0x514458);
}
!(async () => {
  if (!bdy_0x2dbe7a[0]) {
    const _0x52f68a = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x52f68a);
    return;
  }
  console.log("TG频道：https://t.me/dylan_jdpro");
  $.UA = bdy_0x107fb4.UARAM ? bdy_0x107fb4.UARAM() : bdy_0x107fb4.USER_AGENT;
  await bdy_0x9b0ccf();
  for (let _0x547afc = 0; _0x547afc < bdy_0x2dbe7a.length; _0x547afc++) {
    if (bdy_0x2dbe7a[_0x547afc]) {
      bdy_0x29f16e = bdy_0x2dbe7a[_0x547afc];
      $.UserName = decodeURIComponent(bdy_0x29f16e.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x29f16e.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x547afc + 1;
      $.isLogin = true;
      $.nickName = "";
      $.sup = false;
      $.UA = bdy_0x107fb4.UARAM ? bdy_0x107fb4.UARAM() : bdy_0x107fb4.USER_AGENT;
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      if (!$.isLogin) {
        const _0x15ecc7 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x15ecc7);
        $.isNode() && (await bdy_0xffd2d7.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      let _0x15815f = await bdy_0x3196a7("{\"taskType\": 0 }");
      await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
      await bdy_0xfcccf8();
      $.sup && (await $.wait(parseInt(Math.random() * 1000 + 1000, 10)), await bdy_0x352e96());
      if (_0x15815f.data?.["taskThreshold"] && !_0x15815f.data?.["awardStatus"]) {
        $.log("开始浏览商品...");
        let _0x430eae = bdy_0x3fd47d($.skulist, _0x15815f.data.taskThreshold - _0x15815f.data.taskProgress);
        for (let _0x2aaff0 of _0x430eae) {
          console.log("浏览 " + _0x2aaff0);
          _0x15815f = await bdy_0x3196a7("{ \"skuId\": \"" + _0x2aaff0 + "\", \"taskType\": 1 }");
          if (_0x15815f.code !== 0) {
            await $.wait(2000);
            await bdy_0x3196a7("{ \"skuId\": \"" + _0x2aaff0 + "\", \"taskType\": 1 }");
          }
          await $.wait(2000);
        }
        _0x15815f = await bdy_0x3196a7("{\"taskType\": 2 }");
        _0x15815f.data?.["awardStatus"] ? console.log("浏览完成，获得 " + _0x15815f.data.beanNum + "豆") : console.log(JSON.stringify(_0x15815f));
      } else {
        $.log("今日已完成浏览！！！");
      }
      await $.wait(3000);
    }
  }
})().catch(_0x36026f => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x36026f + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0x9b0ccf() {
  const _0x4c2afe = {
    "User-Agent": $.UA
  };
  let _0x4ea4e7 = {
    url: "https://pro.m.jd.com/mall/active/Md9FMi1pJXg2q7qc8CmE9FNYDS4/index.html",
    headers: _0x4c2afe
  };
  return new Promise(async _0x12704c => {
    $.get(_0x4ea4e7, async (_0x265a13, _0x52b2e7, _0x44a6e2) => {
      try {
        if (_0x265a13) {
          console.log("" + JSON.stringify(_0x265a13));
          console.log(" API请求失败，请检查网路重试");
        } else {
          _0x44a6e2 = _0x44a6e2.match(/\"skuId\":\"(\d+)\"/g);
          $.skulist = [...new Set(_0x44a6e2.map(_0x4ad6f9 => _0x4ad6f9.match(/\d+/)[0]))];
        }
      } catch (_0x44333f) {
        $.logErr(_0x44333f, _0x52b2e7);
      } finally {
        _0x12704c(_0x44a6e2);
      }
    });
  });
}
async function bdy_0x3196a7(_0x38b772) {
  let _0x243622 = {
    url: "https://api.m.jd.com/client.action",
    body: "appid=signed_wh5_ihub&client=android&clientVersion=" + $.UA.split(";")[2] + "&networkType=wifi&openudid=&uuid=&eu=&fv=&d_model=&body=" + _0x38b772 + "&functionId=seckillViewTask&t=" + Date.now(),
    headers: {
      Origin: "https://pro.m.jd.com",
      Referer: "https://pro.m.jd.com/mall/active/Md9FMi1pJXg2q7qc8CmE9FNYDS4/index.html",
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": $.UA,
      Cookie: bdy_0x29f16e
    }
  };
  return new Promise(async _0x5852b7 => {
    $.post(_0x243622, async (_0x1e9ada, _0x51c882, _0x17f33e) => {
      try {
        _0x1e9ada ? (console.log("" + JSON.stringify(_0x1e9ada)), console.log(" API请求失败，请检查网路重试")) : _0x17f33e = JSON.parse(_0x17f33e);
      } catch (_0x1546f8) {
        $.logErr(_0x1546f8, _0x51c882);
      } finally {
        _0x5852b7(_0x17f33e);
      }
    });
  });
}
async function bdy_0xfcccf8() {
  let _0x1de2de = {
      body: {},
      appId: "8f7ef",
      functionId: "popRetainWindow",
      appid: "signed_wh5_ihub",
      clientVersion: $.UA.split(";")[2],
      client: "apple",
      ua: $.UA,
      code: 1
    },
    _0x306396 = await bdy_0x57aa01.getbody(_0x1de2de);
  if (!_0x306396) {
    return;
  }
  const _0x11918d = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Content-Type": "application/x-www-form-urlencoded",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    "User-Agent": $.UA,
    Cookie: bdy_0x29f16e
  };
  let _0x48d872 = {
    url: "https://api.m.jd.com/client.action",
    body: _0x306396,
    headers: _0x11918d
  };
  return new Promise(async _0xd75c54 => {
    $.post(_0x48d872, async (_0x4fca61, _0x3d647a, _0xbf886c) => {
      try {
        if (_0x4fca61) {
          console.log("" + JSON.stringify(_0x4fca61));
          console.log(" API请求失败，请检查网路重试");
        } else {
          _0xbf886c && /惊喜/.test(_0xbf886c) && ($.sup = true);
        }
      } catch (_0x25e120) {
        $.logErr(_0x25e120, _0x3d647a);
      } finally {
        _0xd75c54(_0xbf886c);
      }
    });
  });
}
function bdy_0x352e96() {
  return new Promise(_0x23350a => {
    const _0xc89a25 = {
      url: "https://pro.m.jd.com/mall/active/Md9FMi1pJXg2q7qc8CmE9FNYDS4/index.html?commontitle=no&transparent=1&has_native=0&copSource=miaosha&hybrid_err_view=1&hideNavi=1&babelChannel=ttt1&navh=49&stath=29&n&tttparams=" + bdy_0x4f1bbe(6) + "eyJnTGF0IjoiIiwidW5fYXJlYSI6IiIsImRMYXQiOiIiLCJwcnN0YXRlIjoiMCIsImFkZHJlc3NJZCI6IiIsImxhdCI6IiIsInBvc0xhdCI6IiIsInBvc0xuZyI6IiIsImdwc19hcmVhIjoiMF8wXzBfMCIsImxuZyI6IiIsImdMbmciOiIiLCJtb2RlbCI6ImlQaG9uZSIsImRMbmciOiIifQ",
      headers: {
        Accept: "application/json, text/plain, */*",
        Origin: "https://pro.m.jd.com",
        Referer: "https://pro.m.jd.com/",
        Cookie: bdy_0x29f16e,
        "User-Agent": $.UA
      },
      timeout: 30000
    };
    $.get(_0xc89a25, (_0x145fb2, _0x27a407, _0x253d93) => {
      try {
        _0x253d93;
      } catch (_0x3fb416) {
        console.log(_0x3fb416);
      } finally {
        _0x23350a();
      }
    });
  });
}
function bdy_0x363427(_0x435000) {
  for (let _0x2380bd = _0x435000.length - 1; _0x2380bd > 0; _0x2380bd--) {
    const _0x4ef350 = Math.floor(Math.random() * (_0x2380bd + 1));
    [_0x435000[_0x2380bd], _0x435000[_0x4ef350]] = [_0x435000[_0x4ef350], _0x435000[_0x2380bd]];
  }
  return _0x435000;
}
function bdy_0x3fd47d(_0x49e764, _0x3ff6b) {
  const _0x4cf444 = bdy_0x363427(_0x49e764),
    _0x52ea73 = [];
  for (let _0x33bf79 = 0; _0x33bf79 < _0x4cf444.length; _0x33bf79++) {
    if (_0x52ea73.length === _0x3ff6b) {
      break;
    }
    const _0x3df2df = _0x4cf444[_0x33bf79];
    !_0x52ea73.includes(_0x3df2df) && _0x52ea73.push(_0x3df2df);
  }
  return _0x52ea73;
}
function bdy_0x4f1bbe(_0x5a6a85) {
  _0x5a6a85 = _0x5a6a85 || 16;
  for (var _0x48c490 = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz", _0x3495f5 = _0x48c490.length, _0x342d11 = "", _0x290e16 = 0; _0x290e16 < _0x5a6a85; _0x290e16++) {
    _0x342d11 += _0x48c490.charAt(Math.floor(Math.random() * _0x3495f5));
  }
  return _0x342d11;
}
function bdy_0x1cef19(_0x2133a4) {
  if (typeof _0x2133a4 == "string") {
    try {
      return JSON.parse(_0x2133a4);
    } catch (_0x46b4d3) {
      console.log(_0x46b4d3);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }