/*
23 1 * * * jd_dygetbeans.js
 */

const $ = new Env('每日抽豆');
const bdy_0x5cede0 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x526106 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x504b57 = require("./function/dylanx.js");
let bdy_0x66ce86 = true,
  bdy_0x3f740a = [],
  bdy_0x552d83 = "",
  bdy_0x2ae8e3 = "";
if ($.isNode()) {
  Object.keys(bdy_0x526106).forEach(_0x41976f => {
    bdy_0x3f740a.push(bdy_0x526106[_0x41976f]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x3f740a = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...bdy_0x435e46($.getdata("CookiesJD") || "[]").map(_0x563fda => _0x563fda.cookie)].filter(_0x1c47a2 => !!_0x1c47a2);
}
!(async () => {
  if (!bdy_0x3f740a[0]) {
    const _0x26a180 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x26a180);
    return;
  }
  $.log("\nTG频道：https://t.me/dylan_jdpro");
  for (let _0x133fd0 = 0; _0x133fd0 < bdy_0x3f740a.length; _0x133fd0++) {
    if (bdy_0x3f740a[_0x133fd0]) {
      bdy_0x552d83 = bdy_0x3f740a[_0x133fd0];
      $.UserName = decodeURIComponent(bdy_0x552d83.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x552d83.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x133fd0 + 1;
      $.isLogin = true;
      $.nickName = "";
      $.black = false;
      $.UA = require("./USER_AGENTS").UARAM();
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      if (!$.isLogin) {
        const _0x50dc69 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x50dc69);
        $.isNode() && (await bdy_0x5cede0.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      await bdy_0x14824c();
      await $.wait(5000);
    }
  }
})().catch(_0x37e23b => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x37e23b + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0x38bce8(_0x441187) {
  let _0x3b33d8 = await bdy_0x504b57.getbody("babelGetLottery", _0x441187);
  return new Promise(async _0x243d70 => {
    $.post(bdy_0xe0a9ed("babelGetLottery", _0x3b33d8), async (_0x20fe85, _0x158e92, _0x5882be) => {
      try {
        if (_0x20fe85) {
          console.log("" + JSON.stringify(_0x20fe85));
          console.log(" API请求失败，请检查网路重试");
        } else {
          _0x5882be = JSON.parse(_0x5882be);
          if (_0x5882be.prizeName) {
            console.log("恭喜获得：" + _0x5882be.prizeName);
          } else {
            if (_0x5882be.responseMessage.includes("未通过")) {
              $.log("风险等级未通过！");
              $.black = true;
            } else {
              _0x5882be.responseMessage.includes("已完成") ? $.log("103-任务已完成") : $.log(JSON.stringify(_0x5882be));
            }
          }
        }
      } catch (_0xb4a318) {
        $.logErr(_0xb4a318, _0x158e92);
      } finally {
        _0x243d70(_0x5882be);
      }
    });
  });
}
async function bdy_0x509b4a() {
  let _0x3d7b81 = await bdy_0x504b57.getbody("signInWithPrize", {
    floorId: "83596202"
  });
  return new Promise(async _0x362649 => {
    $.post(bdy_0xe0a9ed("signInWithPrize", _0x3d7b81), async (_0x3bef75, _0x4f1ae8, _0x2de982) => {
      try {
        if (_0x3bef75) {
          console.log("" + JSON.stringify(_0x3bef75));
          console.log(" API请求失败，请检查网路重试");
        } else {
          _0x2de982 = JSON.parse(_0x2de982);
          if (_0x2de982.code == 0) {
            if (_0x2de982.result.signInText.includes("已经")) {
              $.log("103-任务已完成");
            } else {
              if (_0x2de982.result.signInText.includes("恭喜")) {
                $.log("恭喜获得：" + _0x2de982.result.beanCount + "京豆");
              }
            }
          } else {
            console.log(_0x2de982.message);
          }
        }
      } catch (_0x203ef5) {
        $.logErr(_0x203ef5, _0x4f1ae8);
      } finally {
        _0x362649(_0x2de982);
      }
    });
  });
}
async function bdy_0x14824c() {
  const _0x6f5b91 = {
    Host: "api.m.jd.com",
    Origin: "https://h5.m.jd.com",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": $.UA,
    Cookie: bdy_0x552d83
  };
  let _0x229f7c = {
    url: "http://api.m.jd.com/api?appid=NewDepartmentStore&functionId=doInteractiveAssignment&body=%7B%22sourceCode%22%3A%22ace20230504MZPD%22%2C%22clientInfo%22%3A%7B%22ip%22%3A%22%22%7D%2C%22encryptProjectId%22%3A%22oRnJWzu84htA5EMrgQohdtjUp8b%22%2C%22encryptAssignmentId%22%3A%22gm9yNeFrcD9KLtZAV1gZQfNX3ux%22%2C%22itemId%22%3A%221%22%2C%22completionFlag%22%3Atrue%2C%22actionType%22%3A0%7D",
    headers: _0x6f5b91
  };
  return new Promise(async _0x29f349 => {
    $.post(_0x229f7c, async (_0x106595, _0x10987f, _0x47ab20) => {
      try {
        if (_0x106595) {
          console.log("" + JSON.stringify(_0x106595));
          console.log(" API请求失败，请检查网路重试");
        } else {
          let _0x3e39d8 = JSON.parse(_0x47ab20);
          if (_0x3e39d8.subCode == 0) {
            let _0x12131b = _0x47ab20.match(/"quantity":(\d+?),/i) ? _0x47ab20.match(/"quantity":(\d+?),/i)[1] : 0;
            $.log("恭喜获得：" + _0x12131b + "京豆");
          } else {
            if (_0x3e39d8.msg.includes("已完成")) {
              $.log("103-任务已完成");
            } else {
              if (_0x3e39d8.msg.includes("未通过")) {
                $.log("风险等级未通过");
              }
            }
          }
        }
      } catch (_0x3c93b1) {
        $.logErr(_0x3c93b1, _0x10987f);
      } finally {
        _0x29f349(_0x47ab20);
      }
    });
  });
}
function bdy_0xe0a9ed(_0x2a745e, _0xd3a308) {
  const _0x2bc30e = {
    Host: "api.m.jd.com",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": $.UA,
    Cookie: bdy_0x552d83
  };
  const _0x602132 = {
    url: "https://api.m.jd.com/client.action",
    body: "functionId=" + _0x2a745e + "&" + _0xd3a308,
    headers: _0x2bc30e
  };
  return _0x602132;
}
function bdy_0x162705() {
  return new Promise(_0x51a36c => {
    const _0x48fec5 = {
      Cookie: bdy_0x552d83,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x16f5f1 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x48fec5,
      timeout: 10000
    };
    $.get(_0x16f5f1, (_0x4b5824, _0x42040a, _0x32a217) => {
      try {
        if (_0x32a217) {
          _0x32a217 = JSON.parse(_0x32a217);
          if (!(_0x32a217.islogin === "1")) {
            _0x32a217.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0xe2590f) {
        console.log(_0xe2590f);
      } finally {
        _0x51a36c();
      }
    });
  });
}
function bdy_0x3fb66e() {
  return new Promise(_0x112c07 => {
    const _0x6c4cc7 = {
      "User-Agent": $.UA
    };
    const _0x18da9b = {
      url: "https://lite-msg.m.jd.com/client.action?functionId=msgEntranceV1",
      headers: _0x6c4cc7,
      timeout: 10000
    };
    $.get(_0x18da9b, (_0x9eabe6, _0x5227f6, _0x5bfa72) => {
      try {
        _0x5bfa72 && (_0x5bfa72 = JSON.parse(_0x5bfa72), $.difftime = Date.now() - _0x5bfa72.timestamp);
      } catch (_0x26d23a) {
        console.log(_0x26d23a);
      } finally {
        _0x112c07();
      }
    });
  });
}
function bdy_0x4281a1() {
  return new Promise(_0x16eb8f => {
    !bdy_0x66ce86 ? $.msg($.name, "", "" + bdy_0x2ae8e3) : $.log("京东账号" + $.index + $.nickName + "\n" + bdy_0x2ae8e3);
    _0x16eb8f();
  });
}
function bdy_0x4f8fb1(_0x24d01c) {
  try {
    if (typeof JSON.parse(_0x24d01c) == "object") {
      return true;
    }
  } catch (_0x408454) {
    console.log(_0x408454);
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function bdy_0x435e46(_0xa16056) {
  if (typeof _0xa16056 == "string") {
    try {
      return JSON.parse(_0xa16056);
    } catch (_0x19f41c) {
      console.log(_0x19f41c);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }