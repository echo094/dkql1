/*
23 1 * * * jd_dygetbeans.js
 */

const $ = new Env('每日抽豆');
const _0xe7b845 = $.isNode() ? require("./sendNotify") : "",
      _0x547173 = $.isNode() ? require("./jdCookie.js") : "",
      _0x40efd1 = require("./function/dylanx.js");

let _0x36859d = true,
    _0x1a202e = [],
    _0x39a2a1 = "",
    _0x45f7d2 = "";

if ($.isNode()) {
  Object.keys(_0x547173).forEach(_0x51ed4a => {
    _0x1a202e.push(_0x547173[_0x51ed4a]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else _0x1a202e = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0x580d94($.getdata("CookiesJD") || "[]").map(_0x4773a1 => _0x4773a1.cookie)].filter(_0xe518f7 => !!_0xe518f7);

!(async () => {
  if (!_0x1a202e[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }

  $.log("\nTG频道：https://t.me/dylan_jdpro");

  for (let _0x2a1de4 = 0; _0x2a1de4 < _0x1a202e.length; _0x2a1de4++) {
    if (_0x1a202e[_0x2a1de4]) {
      _0x39a2a1 = _0x1a202e[_0x2a1de4];
      $.UserName = decodeURIComponent(_0x39a2a1.match(/pt_pin=([^; ]+)(?=;?)/) && _0x39a2a1.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x2a1de4 + 1;
      $.isLogin = true;
      $.nickName = "";
      $.black = false;
      $.UA = require("./USER_AGENTS").UARAM();
      await _0x116938();
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");

      if (!$.isLogin) {
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        });
        $.isNode() && (await _0xe7b845.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }

      await _0x598330();
      await $.wait(5000);
    }
  }
})().catch(_0x4a935a => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x4a935a + "!", "");
}).finally(() => {
  $.done();
});

async function _0x15cf92(_0x1ca390) {
  let _0x36857f = await _0x40efd1.getbody("babelGetLottery", _0x1ca390);

  return new Promise(async _0x30e0c9 => {
    $.post(_0x3f5f28("babelGetLottery", _0x36857f), async (_0x11aa09, _0x425d4d, _0x4c0545) => {
      try {
        if (_0x11aa09) {
          console.log("" + JSON.stringify(_0x11aa09));
          console.log(" API请求失败，请检查网路重试");
        } else {
          _0x4c0545 = JSON.parse(_0x4c0545);
          if (_0x4c0545.prizeName) console.log("恭喜获得：" + _0x4c0545.prizeName);else {
            if (_0x4c0545.responseMessage.includes("未通过")) $.log("风险等级未通过！"), $.black = true;else _0x4c0545.responseMessage.includes("已完成") ? $.log("103-任务已完成") : $.log(JSON.stringify(_0x4c0545));
          }
        }
      } catch (_0x5d9ff6) {
        $.logErr(_0x5d9ff6, _0x425d4d);
      } finally {
        _0x30e0c9(_0x4c0545);
      }
    });
  });
}

async function _0x1c31ad() {
  let _0x4d7fc9 = await _0x40efd1.getbody("signInWithPrize", {
    "floorId": "83596202"
  });

  return new Promise(async _0x29c3cb => {
    $.post(_0x3f5f28("signInWithPrize", _0x4d7fc9), async (_0x38854c, _0x48eb99, _0x37b66f) => {
      try {
        if (_0x38854c) console.log("" + JSON.stringify(_0x38854c)), console.log(" API请求失败，请检查网路重试");else {
          _0x37b66f = JSON.parse(_0x37b66f);

          if (_0x37b66f.code == 0) {
            if (_0x37b66f.result.signInText.includes("已经")) $.log("103-任务已完成");else {
              if (_0x37b66f.result.signInText.includes("恭喜")) $.log("恭喜获得：" + _0x37b66f.result.beanCount + "京豆");else {}
            }
          } else console.log(_0x37b66f.message);
        }
      } catch (_0x5dbc3e) {
        $.logErr(_0x5dbc3e, _0x48eb99);
      } finally {
        _0x29c3cb(_0x37b66f);
      }
    });
  });
}

async function _0x598330() {
  let _0x1cf475 = {
    "url": "https://api.m.jd.com/api?appid=NewDepartmentStore&functionId=doInteractiveAssignment&body=%7B%22sourceCode%22%3A%22ace20230504MZPD%22%2C%22clientInfo%22%3A%7B%22ip%22%3A%22%22%7D%2C%22encryptProjectId%22%3A%22oRnJWzu84htA5EMrgQohdtjUp8b%22%2C%22encryptAssignmentId%22%3A%22gm9yNeFrcD9KLtZAV1gZQfNX3ux%22%2C%22itemId%22%3A%221%22%2C%22completionFlag%22%3Atrue%2C%22actionType%22%3A0%7D",
    "headers": {
      "Host": "api.m.jd.com",
      "Origin": "https://h5.m.jd.com",
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": $.UA,
      "Cookie": _0x39a2a1
    }
  };
  return new Promise(async _0x725155 => {
    $.post(_0x1cf475, async (_0x15f997, _0x3cf459, _0x207db6) => {
      try {
        if (_0x15f997) console.log("" + JSON.stringify(_0x15f997)), console.log(" API请求失败，请检查网路重试");else {
          let _0x4d5e4d = JSON.parse(_0x207db6);

          if (_0x4d5e4d.subCode == 0) {
            let _0x4a7fdc = _0x207db6.match(/"quantity":(\d+?),/i) ? _0x207db6.match(/"quantity":(\d+?),/i)[1] : 0;

            $.log("恭喜获得：" + _0x4a7fdc + "京豆");
          } else {
            if (_0x4d5e4d.msg.includes("已完成")) $.log("103-任务已完成");else {
              if (_0x4d5e4d.msg.includes("未通过")) $.log("风险等级未通过");else {}
            }
          }
        }
      } catch (_0x346364) {
        $.logErr(_0x346364, _0x3cf459);
      } finally {
        _0x725155(_0x207db6);
      }
    });
  });
}

function _0x3f5f28(_0x390624, _0x27b2de) {
  return {
    "url": "https://api.m.jd.com/client.action",
    "body": "functionId=" + _0x390624 + "&" + _0x27b2de,
    "headers": {
      "Host": "api.m.jd.com",
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": $.UA,
      "Cookie": _0x39a2a1
    }
  };
}

function _0x116938() {
  return new Promise(_0x546209 => {
    const _0x39f8b8 = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": {
        "Cookie": _0x39a2a1,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x39f8b8, (_0x361c22, _0x34ef3f, _0x26354d) => {
      try {
        if (_0x26354d) {
          _0x26354d = JSON.parse(_0x26354d);

          if (_0x26354d.islogin === "1") {} else _0x26354d.islogin === "0" && ($.isLogin = false);
        }
      } catch (_0x22ebd9) {
        console.log(_0x22ebd9);
      } finally {
        _0x546209();
      }
    });
  });
}

function _0x1a3efb() {
  return new Promise(_0x2fd44c => {
    const _0xccc11f = {
      "url": "https://lite-msg.m.jd.com/client.action?functionId=msgEntranceV1",
      "headers": {
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0xccc11f, (_0x3114bd, _0x250b73, _0x4e4444) => {
      try {
        _0x4e4444 && (_0x4e4444 = JSON.parse(_0x4e4444), $.difftime = Date.now() - _0x4e4444.timestamp);
      } catch (_0xdc3439) {
        console.log(_0xdc3439);
      } finally {
        _0x2fd44c();
      }
    });
  });
}

function _0x22da08() {
  return new Promise(_0x5e2f7f => {
    !_0x36859d ? $.msg($.name, "", "" + _0x45f7d2) : $.log("京东账号" + $.index + $.nickName + "\n" + _0x45f7d2);

    _0x5e2f7f();
  });
}

function _0x522954(_0x10ba65) {
  try {
    if (typeof JSON.parse(_0x10ba65) == "object") return true;
  } catch (_0xbf9429) {
    return console.log(_0xbf9429), console.log("京东服务器访问数据为空，请检查自身设备网络情况"), false;
  }
}

function _0x580d94(_0x1f1093) {
  if (typeof _0x1f1093 == "string") try {
    return JSON.parse(_0x1f1093);
  } catch (_0x39e870) {
    return console.log(_0x39e870), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
  }
}
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }