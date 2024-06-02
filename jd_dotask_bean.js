/*
1 1 1 1 * jd_dotask_bean.js
 */
const $ = new Env('任务得豆（一次性）');
const bdy_0x2a8664 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x5a2bd0 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x4344d1 = require("./function/dylany.js"),
  bdy_0x52fc81 = require("./USER_AGENTS"),
  bdy_0x4ea8d1 = require("./function/dylib.js");
let bdy_0x7cf026 = true,
  bdy_0x544638 = [],
  bdy_0x476e35 = "",
  bdy_0x3e7864 = "";
if ($.isNode()) {
  Object.keys(bdy_0x5a2bd0).forEach(_0x1b5554 => {
    bdy_0x544638.push(bdy_0x5a2bd0[_0x1b5554]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x544638 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...bdy_0x12c4af($.getdata("CookiesJD") || "[]").map(_0xe6ae01 => _0xe6ae01.cookie)].filter(_0x963e46 => !!_0x963e46);
}
const bdy_0x427083 = ["f3830034af2a43eea2f5c16f2afdb9c3", "8c6e1345b2dc4dffb75dd7a6e38607a7"];
!(async () => {
  if (!bdy_0x544638[0]) {
    const _0x112bbd = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x112bbd);
    return;
  }
  console.log("Tips:会有加购");
  let _0x4d6b1c = await bdy_0x4ea8d1.jddToken("https://pro.m.jd.com");
  for (let _0x295fb5 = 0; _0x295fb5 < bdy_0x544638.length; _0x295fb5++) {
    if (bdy_0x544638[_0x295fb5]) {
      bdy_0x476e35 = bdy_0x544638[_0x295fb5];
      $.UserName = decodeURIComponent(bdy_0x476e35.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x476e35.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x295fb5 + 1;
      $.isLogin = true;
      $.nickName = "";
      $.UA = bdy_0x52fc81.UARAM ? bdy_0x52fc81.UARAM() : bdy_0x52fc81.USER_AGENT;
      $.eid = _0x4d6b1c.eid;
      $.fp = bdy_0x4ea8d1.UUID("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      await bdy_0x2a5c93();
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      if (!$.isLogin) {
        const _0x3d3dc5 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x3d3dc5);
        $.isNode() && (await bdy_0x2a8664.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      for (let _0x1d8ecd of bdy_0x427083) {
        if ($.hotFlag) {
          break;
        }
        $.code = _0x1d8ecd;
        for (let _0x2b95cf of Array(20)) {
          if ($.hotFlag) {
            break;
          }
          await bdy_0x3d3b9e();
          if (Date.now() > $.edTime) {
            break;
          }
          if ($.taskList.filter(_0x51a16c => _0x51a16c.finishCount != _0x51a16c.taskCount).length == 0) {
            console.log("任务已完成");
            break;
          }
          for (let _0x3b1000 of $.taskList) {
            if ($.hotFlag) {
              break;
            }
            if (_0x3b1000.finishCount == _0x3b1000.taskCount) {
              continue;
            }
            await bdy_0x2cced5(_0x3b1000.groupType, _0x3b1000.item.itemId);
            await $.wait(1000);
          }
          await $.wait(2000);
        }
      }
      await $.wait(3000);
    }
  }
})().catch(_0x11db03 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x11db03 + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0x3d3b9e() {
  const _0x32c31a = {
    url: "https://api.m.jd.com/api?client=android&clientVersion=12.4.2&appid=jdchoujiang_h5&t=1713067279359&functionId=moduleGetActivity&body=%7B%22configCode%22%3A%22" + $.code + "%22%2C%22fp%22%3A%22" + $.fp + "%22%7D",
    headers: {}
  };
  _0x32c31a.headers.Host = "api.m.jd.com";
  _0x32c31a.headers.Origin = "https://pro.m.jd.com";
  _0x32c31a.headers.Referer = "https://pro.m.jd.com/";
  _0x32c31a.headers["User-Agent"] = $.UA;
  _0x32c31a.headers.Cookie = bdy_0x476e35;
  return new Promise(async _0x1ebc7d => {
    $.get(_0x32c31a, async (_0x30e4f3, _0x173edf, _0x11d396) => {
      try {
        _0x30e4f3 ? (console.log("" + JSON.stringify(_0x30e4f3)), console.log(" API请求失败，请检查网路重试")) : (_0x11d396 = JSON.parse(_0x11d396), _0x11d396.success ? ($.taskList = _0x11d396.data.dailyTask.taskList, $.edTime = _0x11d396.data.moduleBaseInfo.endTime) : console.log(_0x11d396.errorMessage));
      } catch (_0x3ef1f2) {
        $.logErr(_0x3ef1f2, _0x173edf);
      } finally {
        _0x1ebc7d(_0x11d396);
      }
    });
  });
}
async function bdy_0x2cced5(_0x527cba, _0x130b1c) {
  const _0x5780bb = {
    groupType: _0x527cba,
    configCode: $.code,
    itemId: _0x130b1c,
    eid: $.eid,
    fp: $.fp
  };
  let _0x150bb7 = _0x5780bb,
    _0x339169 = {
      appId: "bbfbd",
      fn: "moduleDoTask",
      body: _0x150bb7,
      apid: "jdchoujiang_h5",
      ver: $.UA.split(";")[2],
      cl: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
  _0x150bb7 = await bdy_0x4344d1.getbody(_0x339169);
  if (!_0x150bb7) {
    return;
  }
  const _0x176ef4 = {
    Host: "api.m.jd.com",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    "User-Agent": $.UA,
    Cookie: bdy_0x476e35
  };
  const _0x30abb7 = {
    url: "https://api.m.jd.com/api?" + _0x150bb7,
    headers: _0x176ef4
  };
  return new Promise(async _0x37f5c1 => {
    $.post(_0x30abb7, async (_0x123b72, _0x3b9afb, _0x286477) => {
      try {
        if (_0x123b72) {
          console.log("" + JSON.stringify(_0x123b72));
          console.log(" API请求失败，请检查网路重试");
        } else {
          _0x286477 = JSON.parse(_0x286477);
          _0x286477.success ? console.log("任务完成，获得京豆1") : (console.log(_0x286477.errorMessage), _0x286477.errorMessage.includes("火爆") && ($.hotFlag = true));
        }
      } catch (_0x39eeed) {
        $.logErr(_0x39eeed, _0x3b9afb);
      } finally {
        _0x37f5c1(_0x286477);
      }
    });
  });
}
function bdy_0x37246e() {
  const _0x13d107 = {
    Host: "api.m.jd.com",
    Origin: "https://h5.m.jd.com",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": $.UA,
    Cookie: bdy_0x476e35
  };
  const _0x5d70de = {
    url: "https://api.m.jd.com",
    body: "appid=wh5&clientVersion=1.0.0&functionId=wanrentuan_superise_send&body={\"channel\":2}&area=2_2813_61130_0",
    headers: _0x13d107
  };
  return _0x5d70de;
}
function bdy_0x2a5c93() {
  return new Promise(_0x54c7db => {
    const _0x4fd448 = {
      Cookie: bdy_0x476e35,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x599030 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x4fd448,
      timeout: 10000
    };
    $.get(_0x599030, (_0x8a1961, _0x587753, _0xadf0c9) => {
      try {
        if (_0xadf0c9) {
          _0xadf0c9 = JSON.parse(_0xadf0c9);
          if (!(_0xadf0c9.islogin === "1")) {
            _0xadf0c9.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x253425) {
        console.log(_0x253425);
      } finally {
        _0x54c7db();
      }
    });
  });
}
function bdy_0x4e87b7() {
  return new Promise(_0x19cf66 => {
    !bdy_0x7cf026 ? $.msg($.name, "", "" + bdy_0x3e7864) : $.log("京东账号" + $.index + $.nickName + "\n" + bdy_0x3e7864);
    _0x19cf66();
  });
}
function bdy_0x303617(_0x40ae12) {
  try {
    if (typeof JSON.parse(_0x40ae12) == "object") {
      return true;
    }
  } catch (_0x31cc28) {
    console.log(_0x31cc28);
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function bdy_0x12c4af(_0x34d450) {
  if (typeof _0x34d450 == "string") {
    try {
      return JSON.parse(_0x34d450);
    } catch (_0xe06b9d) {
      console.log(_0xe06b9d);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }