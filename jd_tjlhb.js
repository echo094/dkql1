/*
天天领红包
任务+开红包
3 3,15 * * * https://raw.githubusercontent.com/6dylan6/jdpro/main/jd_tjlhb.js
 */

const $ = new Env('特价版领红包');
const _0x34a0b6 = $.isNode() ? require("./sendNotify") : "",
  _0x5dffcc = $.isNode() ? require("./jdCookie.js") : "",
  _0x4c5687 = require("./USER_AGENTS"),
  _0x1ef5f4 = require("./function/dylans");
let _0x374771 = true,
  _0x255fbd = [],
  _0x2eeea9 = "",
  _0x260b08 = "";
if ($.isNode()) {
  Object.keys(_0x5dffcc).forEach(_0x4f7bc5 => {
    _0x255fbd.push(_0x5dffcc[_0x4f7bc5]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else _0x255fbd = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0x5adea8($.getdata("CookiesJD") || "[]").map(_0x4e8ad8 => _0x4e8ad8.cookie)].filter(_0x57cdf3 => !!_0x57cdf3);
!(async () => {
  if (!_0x255fbd[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  console.log("\n当前版本：20240515");
  console.log("入口：特价APP--摇钱树--领红包");
  console.log("问题建议：https://t.me/dylan_jdpro\n");
  for (let _0x263d86 = 0; _0x263d86 < _0x255fbd.length; _0x263d86++) {
    if (_0x255fbd[_0x263d86]) {
      _0x2eeea9 = _0x255fbd[_0x263d86];
      $.UserName = decodeURIComponent(_0x2eeea9.match(/pt_pin=([^; ]+)(?=;?)/) && _0x2eeea9.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x263d86 + 1;
      $.isLogin = true;
      $.nickName = "";
      $.UA = _0x4c5687.UARAM ? _0x4c5687.UARAM() : _0x4c5687.USER_AGENT;
      await _0x1a37df();
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      if (!$.isLogin) {
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        });
        $.isNode() && (await _0x34a0b6.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      let _0x4c5238 = await _0x5bc65c();
      if (_0x4c5238.length != 0) {
        console.log("\n去做任务...");
        for (let _0x21d316 of _0x4c5238) {
          if (_0x21d316.taskTitle === "下单") continue;
          if (_0x21d316.taskFinished) {
            console.log(_0x21d316.taskShowTitle + " ---- 已完成");
            continue;
          }
          console.log("去做任务 " + _0x21d316.taskShowTitle);
          if (_0x21d316.timeLimitPeriod) {
            await _0x3790b3(_0x21d316.id, _0x21d316.taskSourceUrl);
            await _0x24bf2d(_0x21d316.id);
            $.log("等待 " + _0x21d316.timeLimitPeriod + " 秒...");
            await $.wait(_0x21d316.timeLimitPeriod * 1000 + 100);
            await _0xbee1a7(_0x21d316.id);
            await _0x30ab14();
          } else await _0x4ab8e3(_0x21d316.taskSourceUrl, _0x21d316.taskType, _0x21d316.id), await $.wait(500);
        }
      }
      await _0x2dee5e();
      $.log("\n开始开红包...");
      for (let _0x38863e = 0; _0x38863e < $.remainchance; _0x38863e++) {
        $.log("开红包第" + (_0x38863e + 1) + "次：");
        await _0xc565a6();
        await $.wait(1000);
      }
      await $.wait(2000);
    }
  }
})().catch(_0x3a4d39 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x3a4d39 + "!", "");
}).finally(() => {
  $.done();
});
async function _0x2dee5e() {
  let _0x4ee538 = {
      "linkId": "stBUShGT7qfg1aQEqpn7TQ",
      "inviter": ""
    },
    _0x49bd6f = {
      "appId": "d5a39",
      "functionId": "lhb4b_home",
      "body": _0x4ee538,
      "appid": "activities_platform",
      "clientVersion": $.UA.split(";")[2],
      "client": "ios",
      "user": $.UserName,
      "t": Date.now(),
      "xcr": 1,
      "ua": $.UA
    };
  _0x4ee538 = await _0x1ef5f4.getbody(_0x49bd6f);
  if (!_0x4ee538) return;
  return new Promise(async _0x2de071 => {
    $.post(_0x4a59f9(_0x4ee538), async (_0x422c5d, _0x59ebfd, _0xb3c7d7) => {
      try {
        _0x422c5d ? (console.log("" + JSON.stringify(_0x422c5d)), console.log(" API请求失败，请检查网路重试")) : (_0xb3c7d7 = JSON.parse(_0xb3c7d7), _0xb3c7d7.code == 0 ? ($.remainchance = _0xb3c7d7.data.remainChance, $.log("\n总计获得红包 " + _0xb3c7d7.data.totalAward[0].amount + " 🧧，现金 " + _0xb3c7d7.data.totalAward[1].amount + " 💰️")) : console.log(_0xb3c7d7.errMsg));
      } catch (_0x16b609) {
        $.logErr(_0x16b609, _0x59ebfd);
      } finally {
        _0x2de071(_0xb3c7d7);
      }
    });
  });
}
async function _0x5bc65c() {
  let _0x4b541f = "";
  return new Promise(async _0x40f3af => {
    $.post(_0x4a59f9("functionId=apTaskList&body=%7B%22linkId%22%3A%22stBUShGT7qfg1aQEqpn7TQ%22%7D&t=" + Date.now() + "&appid=activities_platform&client=android&clientVersion=12.1.0"), async (_0x40c52e, _0x58d2f7, _0x2c8aef) => {
      try {
        _0x40c52e ? (console.log("" + JSON.stringify(_0x40c52e)), console.log(" API请求失败，请检查网路重试")) : (_0x2c8aef = JSON.parse(_0x2c8aef), _0x2c8aef.code == 0 ? _0x4b541f = _0x2c8aef.data : console.log(_0x2c8aef.errMsg));
      } catch (_0x5a366d) {
        $.logErr(_0x5a366d, _0x58d2f7);
      } finally {
        _0x40f3af(_0x4b541f);
      }
    });
  });
}
async function _0xc565a6() {
  let _0x9805f7 = {
      "linkId": "stBUShGT7qfg1aQEqpn7TQ",
      "openMode": 0
    },
    _0x55895c = {
      "appId": "7af4f",
      "functionId": "lhb4b_open",
      "body": _0x9805f7,
      "appid": "activities_platform",
      "clientVersion": $.UA.split(";")[2],
      "client": "ios",
      "user": $.UserName,
      "t": Date.now(),
      "xcr": 1,
      "ua": $.UA
    };
  _0x9805f7 = await _0x1ef5f4.getbody(_0x55895c);
  if (!_0x9805f7) return;
  return new Promise(async _0x6c7ea0 => {
    $.post(_0x4a59f9(_0x9805f7), async (_0x523e26, _0x54b15a, _0x36b5b1) => {
      try {
        if (_0x523e26) console.log("" + JSON.stringify(_0x523e26)), console.log(" API请求失败，请检查网路重试");else {
          _0x36b5b1 = JSON.parse(_0x36b5b1);
          if (_0x36b5b1.code == 0) {
            if (_0x36b5b1.data.received.prizeType === 2) $.log("获得红包 " + _0x36b5b1.data.received.prizeValue + " 🧧");else {
              if (_0x36b5b1.data.received.prizeType === 4) $.log("获得现金 " + _0x36b5b1.data.received.prizeValue + " 💰️");else {
                $.log("获得优惠券！");
              }
            }
          } else console.log(_0x36b5b1.errMsg);
        }
      } catch (_0x35a059) {
        $.logErr(_0x35a059, _0x54b15a);
      } finally {
        _0x6c7ea0();
      }
    });
  });
}
async function _0x4ab8e3(_0x4e4632, _0x77a3ed, _0x5572c1) {
  let _0x1cc543 = {
      "linkId": "stBUShGT7qfg1aQEqpn7TQ",
      "taskType": "" + _0x77a3ed,
      "taskId": _0x5572c1,
      "channel": 4,
      "checkVersion": true,
      "cityId": "",
      "provinceId": "",
      "countyId": 61130,
      "itemId": "" + encodeURIComponent(_0x4e4632)
    },
    _0x4c6532 = {
      "appId": "54ed7",
      "functionId": "apsDoTask",
      "body": _0x1cc543,
      "appid": "activities_platform",
      "clientVersion": $.UA.split(";")[2],
      "client": "ios",
      "user": $.UserName,
      "t": Date.now(),
      "xcr": 1,
      "ua": $.UA
    };
  _0x1cc543 = await _0x1ef5f4.getbody(_0x4c6532);
  if (!_0x1cc543) return;
  return new Promise(async _0x461e1e => {
    $.post(_0x4a59f9(_0x1cc543), async (_0x2b8678, _0x1293be, _0x3eb667) => {
      try {
        _0x2b8678 ? (console.log("" + JSON.stringify(_0x2b8678)), console.log(" API请求失败，请检查网路重试")) : (_0x3eb667 = JSON.parse(_0x3eb667), _0x3eb667.code == 0 ? _0x3eb667.data.finished && $.log("任务成功，抽奖次数 +" + _0x3eb667.data.awardInfo[0].factAwardNum) : console.log(_0x3eb667.msg));
      } catch (_0x3378b9) {
        $.logErr(_0x3378b9, _0x1293be);
      } finally {
        _0x461e1e();
      }
    });
  });
}
async function _0x3790b3(_0xcda9a8, _0x3b3e1b) {
  let _0x40092b = {
    "linkId": "stBUShGT7qfg1aQEqpn7TQ",
    "taskId": _0xcda9a8,
    "itemId": encodeURIComponent(_0x3b3e1b),
    "channel": 4
  };
  return _0x40092b = "functionId=apStartTaskTime&body=" + JSON.stringify(_0x40092b) + "&t=" + Date.now() + "&appid=activities_platform&client=android&clientVersion=12.1.0", new Promise(async _0x319a7b => {
    $.post(_0x4a59f9(_0x40092b), async (_0x418f48, _0x22965a, _0x412b27) => {
      try {
        if (_0x418f48) console.log("" + JSON.stringify(_0x418f48)), console.log(" API请求失败，请检查网路重试");else {
          _0x412b27 = JSON.parse(_0x412b27);
          if (_0x412b27.code == 0) {} else console.log(_0x412b27.errMsg);
        }
      } catch (_0x450427) {
        $.logErr(_0x450427, _0x22965a);
      } finally {
        _0x319a7b(_0x412b27);
      }
    });
  });
}
async function _0x24bf2d(_0x2eab80) {
  let _0x4965f4 = {
    "linkId": "stBUShGT7qfg1aQEqpn7TQ",
    "taskId": _0x2eab80
  };
  return _0x4965f4 = "functionId=apCheckAndResetTaskTime&body=" + JSON.stringify(_0x4965f4) + "&t=" + Date.now() + "&appid=activities_platform&client=android&clientVersion=12.1.0", new Promise(async _0x55a9e0 => {
    $.post(_0x4a59f9(_0x4965f4), async (_0x3348a8, _0x94f5f5, _0x11518) => {
      try {
        if (_0x3348a8) console.log("" + JSON.stringify(_0x3348a8)), console.log(" API请求失败，请检查网路重试");else {
          _0x11518 = JSON.parse(_0x11518);
          if (_0x11518.code == 0) {} else console.log(_0x11518.errMsg);
        }
      } catch (_0x562d72) {
        $.logErr(_0x562d72, _0x94f5f5);
      } finally {
        _0x55a9e0(_0x11518);
      }
    });
  });
}
async function _0x30ab14() {
  let _0x49296d = {
    "linkId": "stBUShGT7qfg1aQEqpn7TQ"
  };
  return _0x49296d = "functionId=apDoLimitTimeTask&body=" + JSON.stringify(_0x49296d) + "&t=" + Date.now() + "&appid=activities_platform&client=android&clientVersion=12.1.0", new Promise(async _0x2c8ce0 => {
    $.post(_0x4a59f9(_0x49296d), async (_0x290ea1, _0x5f5432, _0x165017) => {
      try {
        _0x290ea1 ? (console.log("" + JSON.stringify(_0x290ea1)), console.log(" API请求失败，请检查网路重试")) : (_0x165017 = JSON.parse(_0x165017), _0x165017.code == 0 ? _0x165017.data.finished && $.log("任务完成，抽奖次数 +" + _0x165017.data.awardInfo[0].factAwardNum) : console.log(_0x165017.errMsg));
      } catch (_0xcce4d4) {
        $.logErr(_0xcce4d4, _0x5f5432);
      } finally {
        _0x2c8ce0(_0x165017);
      }
    });
  });
}
async function _0xbee1a7(_0x9dc438) {
  let _0x234703 = {
    "linkId": "stBUShGT7qfg1aQEqpn7TQ",
    "taskId": String(_0x9dc438)
  };
  return _0x234703 = "functionId=apCheckTaskTimeEnd&body=" + JSON.stringify(_0x234703) + "&t=" + Date.now() + "&appid=activities_platform&client=android&clientVersion=12.1.0", new Promise(async _0x2f5144 => {
    $.post(_0x4a59f9(_0x234703), async (_0x187725, _0x3a11c7, _0x16ccab) => {
      try {
        if (_0x187725) console.log("" + JSON.stringify(_0x187725)), console.log(" API请求失败，请检查网路重试");else {
          _0x16ccab = JSON.parse(_0x16ccab);
          if (_0x16ccab.code == 0) {} else console.log(_0x16ccab.errMsg);
        }
      } catch (_0x50e4db) {
        $.logErr(_0x50e4db, _0x3a11c7);
      } finally {
        _0x2f5144(_0x16ccab);
      }
    });
  });
}
function _0x4a59f9(_0x778709) {
  return {
    "url": "https://api.m.jd.com",
    "body": _0x778709,
    "headers": {
      "Host": "api.m.jd.com",
      "Origin": "https://prod.m.jd.com",
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": $.UA,
      "Cookie": _0x2eeea9
    }
  };
}
function _0x1a37df() {
  return new Promise(_0x295dda => {
    const _0x13125d = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": {
        "Cookie": _0x2eeea9,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x13125d, (_0x333db9, _0xed89a9, _0x4ccd47) => {
      try {
        if (_0x4ccd47) {
          _0x4ccd47 = JSON.parse(_0x4ccd47);
          if (_0x4ccd47.islogin === "1") {} else _0x4ccd47.islogin === "0" && ($.isLogin = false);
        }
      } catch (_0x4a3df6) {
        console.log(_0x4a3df6);
      } finally {
        _0x295dda();
      }
    });
  });
}
function _0x4606bb() {
  return new Promise(_0x4a37a0 => {
    !_0x374771 ? $.msg($.name, "", "" + _0x260b08) : $.log("京东账号" + $.index + $.nickName + "\n" + _0x260b08);
    _0x4a37a0();
  });
}
function _0x4528a(_0x390e9d) {
  try {
    if (typeof JSON.parse(_0x390e9d) == "object") return true;
  } catch (_0x3ab419) {
    return console.log(_0x3ab419), console.log("京东服务器访问数据为空，请检查自身设备网络情况"), false;
  }
}
function _0x5adea8(_0x5a02b9) {
  if (typeof _0x5a02b9 == "string") try {
    return JSON.parse(_0x5a02b9);
  } catch (_0x19d04f) {
    return console.log(_0x19d04f), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
  }
}
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }