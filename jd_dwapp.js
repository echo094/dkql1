/*
积分换话费
入口：首页-生活·缴费-积分换话费 
update：2024/5/6
10 1,14 * * * jd_dwapp.js
*/

const $ = new Env('积分换话费');
const bdy_0x23c7b7 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x419cdd = $.isNode() ? require("./jdCookie.js") : "";
CryptoJS = $.isNode() ? require("crypto-js") : CryptoJS;
if (process.env.DY_PROXY) {
  try {
    ccc = require("./function/proxy.js");
    $.dget = ccc.intoRequest($.get.bind($));
    $.dpost = ccc.intoRequest($.post.bind($));
  } catch {
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
let bdy_0x5c0797 = [],
  bdy_0x3e05c4 = "";
if ($.isNode()) {
  Object.keys(bdy_0x419cdd).forEach(_0x3bd2d6 => {
    bdy_0x5c0797.push(bdy_0x419cdd[_0x3bd2d6]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x5c0797 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonformat($.getdata("CookiesJD") || "[]").map(_0x2adb99 => _0x2adb99.cookie)].filter(_0xab5bfc => !!_0xab5bfc);
}
!(async () => {
  if (!bdy_0x5c0797[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  console.log("支持DY_PROXY");
  for (let _0xb5d062 = 0; _0xb5d062 < bdy_0x5c0797.length; _0xb5d062++) {
    if (bdy_0x5c0797[_0xb5d062]) {
      bdy_0x3e05c4 = bdy_0x5c0797[_0xb5d062];
      $.UserName = decodeURIComponent(bdy_0x3e05c4.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x3e05c4.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0xb5d062 + 1;
      $.isLogin = true;
      $.nickName = "";
      message = "";
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      if (!$.isLogin) {
        const _0x46d3dd = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x46d3dd);
        $.isNode() && (await bdy_0x23c7b7.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      $.UUID = bdy_0xae4993("xxxxxxxxxxxxxxxx");
      await bdy_0x5ed2b7();
      await $.wait(5000);
    }
  }
})().catch(_0x41c43d => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x41c43d + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0x5ed2b7() {
  $.log("去签到");
  await bdy_0x2c7e07();
  await $.wait(2000);
  await bdy_0x525eeb();
  if ($.tasklist) {
    for (let _0x2467a1 of $.tasklist) {
      if (_0x2467a1.viewStatus == 0) {
        console.log("去做 " + _0x2467a1.taskDesc);
        await bdy_0x166e5c(_0x2467a1.id);
        await $.wait(3000);
        console.log("去领积分");
        await bdy_0x465393(_0x2467a1.id);
      } else {
        if (_0x2467a1.viewStatus == 2) {
          console.log("去领积分");
          await bdy_0x465393(_0x2467a1.id);
        } else {
          _0x2467a1.viewStatus == 1 && $.log(_0x2467a1.name + " 已完成浏览");
        }
      }
    }
  }
}
async function bdy_0x166e5c(_0x362d40) {
  enc = await bdy_0x426ad7(_0x362d40 + "1");
  const _0x3646d7 = {
    id: _0x362d40,
    agentNum: "m",
    taskType: 1,
    followChannelStatus: "",
    ...enc
  };
  let _0x17396a = _0x3646d7;
  return new Promise(_0x147dca => {
    $.post(bdy_0x4203fa("task/dwRecord", _0x17396a), (_0x5ad2fc, _0x19cd34, _0x4a1109) => {
      try {
        _0x5ad2fc ? (console.log("" + _0x5ad2fc), console.log($.name + " API请求失败，请检查网路重试")) : (_0x4a1109 = JSON.parse(_0x4a1109), _0x4a1109 && (_0x4a1109.code === 200 ? _0x4a1109.data.dwUserTask ? $.log("----领取任务成功") : $.log("----此任务已经领取过了") : console.log(JSON.stringify(_0x4a1109))));
      } catch (_0x2014d0) {
        $.logErr(_0x2014d0, _0x19cd34);
      } finally {
        _0x147dca(_0x4a1109);
      }
    });
  });
}
async function bdy_0x465393(_0x1030f4) {
  enc = await bdy_0x426ad7(_0x1030f4);
  const _0xde2470 = {
    id: _0x1030f4,
    ...enc
  };
  let _0x3c18c4 = _0xde2470;
  return new Promise(_0x150a7c => {
    $.post(bdy_0x4203fa("task/dwReceive", _0x3c18c4), (_0x2d51ee, _0x1f15bf, _0x5b59c7) => {
      try {
        if (_0x2d51ee) {
          console.log("" + _0x2d51ee);
          console.log($.name + " API请求失败，请检查网路重试");
        } else {
          _0x5b59c7 = JSON.parse(_0x5b59c7);
          if (_0x5b59c7) {
            if (_0x5b59c7.code === 200 && _0x5b59c7.data.success) {
              console.log("----领取成功：获得" + _0x5b59c7.data.giveScoreNum + "积分");
            } else {
              _0x5b59c7.code === 200 && !_0x5b59c7.data.success ? console.log("----积分已经领取完了") : console.log(JSON.stringify(_0x5b59c7));
            }
          }
        }
      } catch (_0x490bfd) {
        $.logErr(_0x490bfd, _0x1f15bf);
      } finally {
        _0x150a7c(_0x5b59c7);
      }
    });
  });
}
async function bdy_0x2c7e07() {
  body = await bdy_0x426ad7();
  const _0x49ceff = {
    Origin: "https://mypoint.jd.com",
    Accept: "*/*",
    "User-Agent": "jdapp;iPhone;10.1.0;13.5;" + $.UUID + ";network/wifi;model/iPhone11,6;addressid/4596882376;appBuild/167774;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
    Referer: "https://mypoint.jd.com/",
    Cookie: bdy_0x3e05c4
  };
  let _0x301cb7 = {
    url: "http://api.m.jd.com/api?functionId=DATAWALLET_USER_SIGN",
    body: "appid=h5-sep&client=m&&body=" + encodeURIComponent(JSON.stringify(body)),
    headers: _0x49ceff
  };
  return new Promise(_0x53a8d3 => {
    $.dpost(_0x301cb7, (_0x1517fd, _0x45cc70, _0x319ed2) => {
      try {
        if (_0x1517fd) {
          console.log("" + _0x1517fd);
          console.log($.name + " API请求失败，请检查网路重试");
        } else {
          _0x319ed2 = JSON.parse(_0x319ed2);
          if (_0x319ed2) {
            if (_0x319ed2.code === 200) {
              console.log("签到成功：获得积分" + _0x319ed2.data.signInfo.signNum);
              $.log("总积分：" + _0x319ed2.data.totalNum + "\n");
            } else {
              _0x319ed2.code === 302 ? console.log("已完成签到！！！\n") : $.log(JSON.stringify(_0x319ed2));
            }
          }
        }
      } catch (_0x4e7c80) {
        $.logErr(_0x4e7c80, _0x45cc70);
      } finally {
        _0x53a8d3(_0x319ed2);
      }
    });
  });
}
async function bdy_0x525eeb() {
  body = await bdy_0x426ad7();
  body.channelSource = "txzs";
  let _0x3b952e = {
    url: "https://api.m.jd.com/user/color/task/dwList",
    body: "appid=txsm-m&client=h5&functionId=dwapp_task_dwList&body=" + encodeURIComponent(JSON.stringify(body)),
    headers: {
      Origin: "https://txsm-m.jd.com",
      Accept: "*/*",
      "User-Agent": "jdapp;iPhone;10.1.0;13.5;" + $.UUID + ";network/wifi;model/iPhone11,6;addressid/4596882376;appBuild/167774;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
      Referer: "https://txsm-m.jd.com/",
      Cookie: bdy_0x3e05c4
    }
  };
  return new Promise(_0x49df9a => {
    $.post(_0x3b952e, (_0x204382, _0x352bf5, _0x100d5e) => {
      try {
        _0x204382 ? (console.log("" + _0x204382), console.log($.name + " API请求失败，请检查网路重试")) : (_0x100d5e = JSON.parse(_0x100d5e), JSON.stringify(_0x100d5e.data) != "{}" && ($.tasklist = _0x100d5e.data));
      } catch (_0x53738c) {
        $.logErr(_0x53738c, _0x352bf5);
      } finally {
        _0x49df9a(_0x100d5e);
      }
    });
  });
}
function bdy_0x4203fa(_0x7fd03, _0x1871a0) {
  const _0x3ba467 = {
    Host: "dwapp.jd.com",
    Origin: "https://prodev.m.jd.com",
    Connection: "keep-alive",
    Accept: "*/*",
    "User-Agent": "jdapp;iPhone;10.1.0;13.5;" + $.UUID + ";network/wifi;model/iPhone11,6;addressid/4596882376;appBuild/167774;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
    "Accept-Language": "zh-cn",
    Referer: "https://prodev.m.jd.com/mall/active/eEcYM32eezJB7YX4SBihziJCiGV/index.html",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/json",
    Cookie: bdy_0x3e05c4
  };
  return {
    url: "https://dwapp.jd.com/user/" + _0x7fd03,
    body: JSON.stringify(_0x1871a0),
    headers: _0x3ba467
  };
}
function bdy_0x129769() {
  return new Promise(async _0x1a4778 => {
    const _0x1fd4f2 = {
      url: "https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2",
      headers: {
        Accept: "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        Connection: "keep-alive",
        Cookie: bdy_0x3e05c4,
        Referer: "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
        "User-Agent": $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require("./USER_AGENTS").USER_AGENT : $.getdata("JDUA") ? $.getdata("JDUA") : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"
      }
    };
    $.post(_0x1fd4f2, (_0x51264a, _0x1eb245, _0x434aab) => {
      try {
        if (_0x51264a) {
          console.log("" + JSON.stringify(_0x51264a));
          console.log($.name + " API请求失败，请检查网路重试");
        } else {
          if (_0x434aab) {
            _0x434aab = JSON.parse(_0x434aab);
            if (_0x434aab.retcode === 13) {
              $.isLogin = false;
              return;
            }
            _0x434aab.retcode === 0 ? $.nickName = _0x434aab.base && _0x434aab.base.nickname || $.UserName : $.nickName = $.UserName;
          } else {
            console.log("京东服务器返回空数据");
          }
        }
      } catch (_0x410aaa) {
        $.logErr(_0x410aaa, _0x1eb245);
      } finally {
        _0x1a4778();
      }
    });
  });
}
function bdy_0xae4993(_0x425241 = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", _0x172ddb = 0) {
  return _0x425241.replace(/[xy]/g, function (_0x3f31bd) {
    var _0x26645e = Math.random() * 16 | 0,
      _0x302bdc = _0x3f31bd == "x" ? _0x26645e : _0x26645e & 3 | 8;
    _0x172ddb ? uuid = _0x302bdc.toString(36).toUpperCase() : uuid = _0x302bdc.toString(36);
    return uuid;
  });
}
async function bdy_0x426ad7(_0x4e8a47) {
  time = new Date().getTime();
  let _0x4ba22c = _0x4e8a47 || "";
  const _0x107409 = time + "e9c398ffcb2d4824b4d0a703e38yffdd";
  _0x4ba22c = CryptoJS.MD5(_0x4ba22c + _0x107409).toString();
  const _0x5608a7 = {
    t: time,
    encStr: _0x4ba22c
  };
  return _0x5608a7;
}
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }