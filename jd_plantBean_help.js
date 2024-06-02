/*
33 3,16 * * * jd_plantBean_help.js
*/
const $ = new Env('种豆得豆内部互助');
let _0x4c944a = true,
  _0x352e72 = [],
  _0x22305d = "",
  _0x3fd812,
  _0x233199 = [],
  _0x59a9f9 = [],
  _0x51c99c = [];
const _0x2691bb = require("fs"),
  _0x5b147e = require("./function/dylany"),
  _0x58a5eb = "https://api.m.jd.com/client.action",
  _0x46ff28 = process.env.BEAN_DELAY ? process.env.BEAN_DELAY * 1 : 2000;
let _0x12abb1 = new Date().getHours(),
  _0x36cc9e = true;
$.isNode() && process.env.PLANTNOHELP && process.env.PLANTNOHELP == "true" && _0x12abb1 > 9 && (_0x36cc9e = false, console.log("现在是9点后时段，不启用互助...."));
$.reqnum = 1;
!(async () => {
  await _0x2f7464();
  if (!_0x352e72[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  for (let _0x1e0ef7 = 0; _0x1e0ef7 < _0x352e72.length; _0x1e0ef7++) {
    if (_0x352e72[_0x1e0ef7]) {
      _0x22305d = _0x352e72[_0x1e0ef7];
      $.UserName = decodeURIComponent(_0x22305d.match(/pt_pin=([^; ]+)(?=;?)/) && _0x22305d.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x1e0ef7 + 1;
      $.isLogin = true;
      $.nickName = "";
      $.UA = require("./USER_AGENTS").UARAM();
      await _0x168281();
      console.log("\n----------------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "-----------------\n");
      if (!$.isLogin) {
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        });
        $.isNode() && (await _0x3fd812.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      await _0x5a4a2b();
      if (_0x233199.length == 0) {
        $.log("没有助力码,先执行种豆得豆任务在跑助力");
        return;
      }
      await _0x526f33();
      await $.wait(1000);
    }
  }
})().catch(_0x34c9b9 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x34c9b9 + "!", "");
}).finally(() => {
  $.done();
});
async function _0x526f33() {
  let _0xc96496 = 0;
  for (let _0x36670f of _0x233199) {
    if (_0xc96496 >= 3) break;
    console.log("\n开始助力好友: " + _0x36670f);
    if (!_0x36670f) continue;
    if (_0x36670f === $.myPlantUuid) {
      console.log("\n跳过自己的plantUuid\n");
      continue;
    }
    await _0x3f72d1(_0x36670f);
    if ($.helpResult && $.helpResult.code === "0") {
      if ($.helpResult.data?.["helpShareRes"]) {
        if ($.helpResult.data.helpShareRes.state === "1") console.log("助力成功"), console.log("" + $.helpResult.data.helpShareRes.promptText), _0xc96496++;else {
          if ($.helpResult.data.helpShareRes.state === "2") {
            console.log("今日助力机会已耗尽，不能再帮助好友助力了");
            break;
          } else {
            if ($.helpResult.data.helpShareRes.state === "3") {
              console.log("该好友今日已满9人助力,明天再来为Ta助力吧");
              _0x51c99c.push(_0x36670f);
            } else {
              if ($.helpResult.data.helpShareRes.state === "4") console.log("" + $.helpResult.data.helpShareRes.promptText), _0xc96496++;else {
                console.log("助力其他情况：" + JSON.stringify($.helpResult.data.helpShareRes));
              }
            }
          }
        }
      } else {
        if ($.helpResult.errorCode) {
          console.log(JSON.stringify($.helpResult));
          break;
        }
      }
    } else console.log("助力失败: " + JSON.stringify($.helpResult));
    await $.wait(2000);
  }
}
function _0x3a8bde() {
  $.log("\n" + message + "\n");
  _0x4c944a = $.getdata("jdPlantBeanNotify") ? $.getdata("jdPlantBeanNotify") : _0x4c944a;
  if (!_0x4c944a || _0x4c944a === "false") {
    $.msg($.name, subTitle, message);
  }
}
async function _0xaf186e() {
  $.shareSupportList = await _0x3a9224("plantShareSupportList", {
    "roundId": ""
  });
  if ($.shareSupportList && $.shareSupportList.code === "0") {
    const {
        data: _0x4d5beb
      } = $.shareSupportList,
      _0x4dc964 = parseInt((Date.now() + 28800000) / 86400000) * 86400000 - 28800000,
      _0x3c8cee = parseInt((Date.now() + 28800000) / 86400000) * 86400000 - 28800000 + 24 * 60 * 60 * 1000;
    let _0x2f2f95 = [];
    _0x4d5beb.map(_0x35af6f => {
      _0x4dc964 <= _0x35af6f.createTime && _0x35af6f.createTime < _0x3c8cee && _0x2f2f95.push(_0x35af6f);
    });
    message += "【助力您的好友】共" + _0x2f2f95.length + "人";
  } else console.log("异常情况：" + JSON.stringify($.shareSupportList));
}
async function _0x3f72d1(_0x35ff0c) {
  const _0x4152d8 = {
    "plantUuid": _0x35ff0c
  };
  $.helpResult = await _0x5d2cc9("plantBeanIndex", _0x4152d8);
}
function _0x299e0c() {
  return new Promise(async _0x5d1ed8 => {
    $.get({
      "url": "https://cdn.jsdelivr.net/gh/6dylan6/updateTeam@main/shareCodes/plant_bean.json",
      "timeout": 20000
    }, (_0x147d75, _0x25e8f7, _0x24ecc9) => {
      try {
        if (_0x147d75) {} else {
          if (_0x24ecc9) {
            _0x24ecc9 = JSON.parse(_0x24ecc9);
          }
        }
      } catch (_0x4f9810) {
        $.logErr(_0x4f9810, _0x25e8f7);
      } finally {
        _0x5d1ed8(_0x24ecc9);
      }
    });
    await $.wait(15000);
    _0x5d1ed8();
  });
}
function _0x5a4a2b() {
  return new Promise(async _0x3bb166 => {
    if ($.shareCodesArr.length != 0) {
      if (_0x233199[$.index - 1]) _0x233199 = $.shareCodesArr[$.index - 1].split("@");else {
        const _0x4f41fe = $.index > _0x59a9f9.length ? _0x59a9f9.length - 1 : $.index - 1;
        _0x233199 = _0x59a9f9[_0x4f41fe].split("@");
      }
    }
    _0x233199 = _0x233199.filter(_0x5136cd => _0x51c99c.indexOf(_0x5136cd) == -1 && !!_0x5136cd);
    console.log("您提供了" + _0x233199.length + "个助力码\n");
    console.log("将要助力的好友" + JSON.stringify(_0x233199));
    _0x3bb166();
  });
}
function _0x2f7464() {
  return new Promise(_0x5e59d5 => {
    console.log("开始获取配置文件...\n");
    _0x3fd812 = $.isNode() ? require("./sendNotify") : "";
    const _0x5ad901 = $.isNode() ? require("./jdCookie.js") : "";
    if (process.env.DY_PROXY) {
      const _0x187143 = require("./function/proxy.js");
      $.get = _0x187143.intoRequest($.get.bind($));
      $.post = _0x187143.intoRequest($.post.bind($));
    }
    $.shareCodesArr = [];
    if ($.isNode()) {
      if (process.env.BEANCODES) _0x233199 = process.env.BEANCODES.split("&");else process.env.PLANT_BEAN_SHARECODES && (process.env.PLANT_BEAN_SHARECODES.indexOf("\n") > -1 ? _0x59a9f9 = process.env.PLANT_BEAN_SHARECODES.split("\n") : _0x59a9f9 = process.env.PLANT_BEAN_SHARECODES.split("&"));
    }
    if ($.isNode()) {
      Object.keys(_0x5ad901).forEach(_0x5b7357 => {
        _0x5ad901[_0x5b7357] && _0x352e72.push(_0x5ad901[_0x5b7357]);
      });
      if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
    } else {
      _0x352e72 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonFormat($.getdata("CookiesJD") || "[]").map(_0x3f555c => _0x3f555c.cookie)].filter(_0x1f355e => !!_0x1f355e);
    }
    if ($.isNode()) Object.keys(_0x59a9f9).forEach(_0x503422 => {
      _0x59a9f9[_0x503422] && $.shareCodesArr.push(_0x59a9f9[_0x503422]);
    });else {
      if ($.getdata("jd_fruit_inviter")) $.shareCodesArr = $.getdata("jd_fruit_inviter").split("\n").filter(_0xa8141d => !!_0xa8141d);
      console.log("\nBoxJs设置的" + $.name + "好友邀请码:" + ($.getdata("jd_fruit_inviter") ? $.getdata("jd_fruit_inviter") : "暂无") + "\n");
    }
    let _0x1694fd = _0x2691bb.existsSync("./bean_helpcode");
    if (process.env.PLANT_BEAN_SHARECODES) $.log("使用日志搜集的助力码\n");else {
      if (process.env.BEANCODES) $.log("使用变量指定的助力码\n");else _0x59a9f9.length == 0 && _0x1694fd ? ($.log("使用本地缓存的助力码\n"), _0x233199 = _0x2691bb.readFileSync("./bean_helpcode", "utf-8"), _0x233199 = JSON.parse(_0x233199)) : $.log("没有检测到任何助力码！！！\n");
    }
    _0x5e59d5();
  });
}
function _0x3a9224(_0x4b716b, _0x3d463f = {}) {
  return !_0x3d463f.version && (_0x3d463f.version = "9.2.4.2"), _0x3d463f.monitor_source = "plant_app_plant_index", _0x3d463f.monitor_refer = "", new Promise(async _0x468739 => {
    await $.wait(2000);
    const _0x258678 = {
      "url": _0x58a5eb + "?functionId=" + _0x4b716b + "&body=" + escape(JSON.stringify(_0x3d463f)) + "&appid=ld",
      "headers": {
        "Cookie": _0x22305d,
        "Host": "api.m.jd.com",
        "Accept": "*/*",
        "Connection": "keep-alive",
        "User-Agent": $.UA,
        "Accept-Language": "zh-Hans-CN;q=1,en-CN;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 20000
    };
    $.get(_0x258678, (_0x39611b, _0x348c61, _0x1d1697) => {
      try {
        if (_0x39611b) console.log("\n种豆得豆: API查询请求失败 ‼️‼️"), $.logErr(_0x39611b);else {
          _0x1d1697 = JSON.parse(_0x1d1697);
        }
      } catch (_0x38a9af) {
        $.logErr(_0x38a9af, _0x348c61);
      } finally {
        _0x468739(_0x1d1697);
      }
    });
  });
}
function _0x168281() {
  return new Promise(_0x1395a4 => {
    const _0xe553a5 = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": {
        "Cookie": _0x22305d,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0xe553a5, (_0xdf7b56, _0x349f03, _0x4dd455) => {
      try {
        if (_0x4dd455) {
          _0x4dd455 = JSON.parse(_0x4dd455);
          if (_0x4dd455.islogin === "1") {} else _0x4dd455.islogin === "0" && ($.isLogin = false);
        }
      } catch (_0x2a9e2d) {
        console.log(_0x2a9e2d);
      } finally {
        _0x1395a4();
      }
    });
  });
}
async function _0x5d2cc9(_0x428028, _0x1c4ce7 = {}, _0x11ac6d = 0) {
  $.reqnum % 5 == 0 && (console.log("\n等待" + _0x46ff28 / 1000 + "秒......\n"), _0x11ac6d = _0x46ff28);
  $.reqnum++;
  _0x1c4ce7.version = "9.2.4.3";
  _0x1c4ce7.monitor_source = "plant_m_plant_index";
  let _0x3f3109 = {
      "appId": "d246a",
      "fn": "plantBeanIndex",
      "body": _0x1c4ce7,
      "apid": "signed_wh5",
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    },
    _0x36ee9f = await _0x5b147e.getbody(_0x3f3109),
    _0x83d99a = _0x58a5eb + "?" + _0x36ee9f;
  return await $.wait(_0x11ac6d), new Promise(async _0x5e4014 => {
    $.get(_0xc3f09(_0x83d99a), (_0x13a60f, _0x9f83b0, _0x3e862e) => {
      try {
        if (_0x13a60f) console.log("\n种豆得豆: API查询请求失败 ‼️‼️"), console.log("function_id:" + _0x428028), $.logErr(_0x13a60f);else {
          if (_0x3e862e.indexOf("data") > -1) {
            _0x3e862e = JSON.parse(_0x3e862e);
          } else _0x3e862e = JSON.parse(_0x3e862e), console.log(_0x3e862e.errorMessage);
        }
      } catch (_0x1ba783) {
        $.logErr(_0x1ba783, _0x9f83b0);
      } finally {
        _0x5e4014(_0x3e862e);
      }
    });
  });
}
function _0xc3f09(_0x25a046) {
  return {
    "url": _0x25a046,
    "headers": {
      "Cookie": _0x22305d,
      "Accept": "*/*",
      "User-Agent": $.UA,
      "Referer": "https://plantearth.m.jd.com/plantBean/index",
      "Accept-Language": "zh-Hans-CN;q=1,en-CN;q=0.9",
      "Accept-Encoding": "gzip, deflate, br"
    },
    "timeout": 20000
  };
}
function _0x5c9f31(_0x22c38e, _0x3f7caa) {
  const _0x12b865 = new RegExp("(^|&)" + _0x3f7caa + "=([^&]*)(&|$)", "i"),
    _0x267e52 = _0x22c38e.match(_0x12b865);
  if (_0x267e52 != null) return unescape(_0x267e52[2]);
  return null;
}
function _0x15aeea() {
  getstr = function (_0x36b5ef) {
    let _0x26a6d6 = "",
      _0x49944c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let _0x115829 = 0; _0x115829 < _0x36b5ef; _0x115829++) {
      let _0xa686d5 = Math.round(Math.random() * (_0x49944c.length - 1));
      _0x26a6d6 += _0x49944c.substring(_0xa686d5, _0xa686d5 + 1);
    }
    return _0x26a6d6;
  };
  let _0x1a3544 = Buffer.from(getstr(16), "utf8").toString("base64"),
    _0x3322e0 = getstr(48);
  return ep = encodeURIComponent(JSON.stringify({
    "hdid": "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
    "ts": Date.now(),
    "ridx": -1,
    "cipher": {
      "sv": "EG==",
      "ad": _0x1a3544,
      "od": _0x3322e0,
      "ov": "Ctq=",
      "ud": _0x1a3544
    },
    "ciphertype": 5,
    "version": "1.2.0",
    "appname": "com.jingdong.app.mall"
  })), "jdapp;android;11.2.0;;;appBuild/98413;ef/1;ep/" + ep + ";Mozilla/5.0 (Linux; Android 9; LYA-AL00 Build/HUAWEILYA-AL00L; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046033 Mobile Safari/537.36";
}
function _0x21dc20(_0x3d8180) {
  if (typeof _0x3d8180 == "string") try {
    return JSON.parse(_0x3d8180);
  } catch (_0x41125a) {
    return console.log(_0x41125a), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
  }
}
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
