/*
东东农场邀请好友奖励
8 1 * * * jd_farm_del.js
updatetime:2023/8/25
dlan
*/
const $ = new Env('东东农场-删好友奖励');
let cookiesArr = [], cookie = '', jdFruitShareArr = [], isBox = false, notify, newShareCodes, allMessage = '';
//助力好友分享码(最多3个,否则后面的助力失败),原因:京东农场每人每天只有3次助力机会
//此此内容是IOS用户下载脚本到本地使用，填写互助码的地方，同一京东账号的好友互助码请使用@符号隔开。
//下面给出两个账号的填写示例（iOS只支持2个京东账号）
let shareCodes = [ '']

let message = '', subTitle = '', option = {}, isFruitFinished = false, ct=0;
const retainWater = 100;//保留水滴大于多少g,默认100g;
let jdNotify = false;//是否关闭通知，false打开通知推送，true关闭通知推送
let jdFruitBeanCard = false;//农场使用水滴换豆卡(如果出现限时活动时100g水换20豆,此时比浇水划算,推荐换豆),true表示换豆(不浇水),false表示不换豆(继续浇水),脚本默认是浇水
let randomCount = $.isNode() ? 20 : 5;
const _0x2418b1 = require("./function/dylany"),
      _0x13656d = "https://api.m.jd.com/client.action";

!(async () => {
  await _0x3131e9();

  if (!cookiesArr[0]) {
    const _0x52a3eb = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x52a3eb);
    return;
  }

  for (let _0x1d2bc = 0; _0x1d2bc < cookiesArr.length; _0x1d2bc++) {
    if (cookiesArr[_0x1d2bc]) {
      cookie = cookiesArr[_0x1d2bc];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x1d2bc + 1;
      $.isLogin = true;
      $.nickName = "";
      console.log("\n开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n");

      if (!$.isLogin) {
        const _0x2ae421 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x2ae421);

        if ($.isNode()) {
          await notify.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie");
        }

        continue;
      }

      message = "";
      subTitle = "";
      option = {};
      $.UA = require("./USER_AGENTS").UARAM();
      await _0x136377();
      await _0x48917a();
    }
  }
})().catch(_0x5ee72b => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x5ee72b + "!", "");
}).finally(() => {
  $.done();
});

async function _0x48917a() {
  subTitle = "【京东账号" + $.index + "🆔】" + ($.nickName || $.UserName);

  try {
    await _0x371c22("", 1);
    $.farmInfo.farmUserPro ? await _0x5210eb() : (console.log("初始化农场数据异常, 请登录京东 app查看农场0元水果功能是否正常,农场初始化数据: " + JSON.stringify($.farmInfo)), message = "【数据异常】请手动登录京东app查看此账号" + $.name + "是否正常");
  } catch (_0xe5d02f) {
    console.log("任务执行异常，请检查执行日志 ‼️‼️");
    $.logErr(_0xe5d02f);
  }

  await _0x4592fb();
}

async function _0x5210eb() {
  await _0x4a2d47();
}

async function _0x4a2d47() {
  await _0x16adbb();

  if ($.friendList) {
    console.log("\n今日已邀请好友" + $.friendList.inviteFriendCount + "个 / 每日邀请上限" + $.friendList.inviteFriendMax + "个");
    console.log("开始删除" + ($.friendList.friends && $.friendList.friends.length) + "个好友,可拿每天的邀请奖励");

    if ($.friendList.friends && $.friendList.friends.length > 0) {
      for (let _0x5063e5 of $.friendList.friends) {
        console.log("开始删除好友 [" + _0x5063e5.shareCode + "]");
        const _0x47f4f5 = {
          "shareCode": "" + _0x5063e5.shareCode,
          "version": 24,
          "channel": 1
        };

        const _0x83f320 = await _0x215fe2("deleteFriendForFarm", _0x47f4f5);

        _0x83f320 && _0x83f320.code === "0" && console.log("删除成功！\n");
        await $.wait(1000);
      }
    }
  } else {
    console.log("查询好友列表失败\n");
  }
}

async function _0x371c22(_0x577e5d, _0x5c6236) {
  $.reqnum % 5 == 0 && (console.log("\n等待" + delay / 1000 + "秒......\n"), timeout = delay);
  $.reqnum++;

  if (ct > "1") {
    return;
  }

  const _0x44fa73 = {
    "babelChannel": "121",
    "sid": "",
    "un_area": "",
    "version": 24,
    "channel": 1,
    "lat": "",
    "lng": ""
  };

  if (!_0x577e5d) {
    _0x577e5d = _0x44fa73;
  }

  let _0x4e4367 = {
    "appId": "8a2af",
    "fn": "initForFarm",
    "body": _0x577e5d,
    "apid": "signed_wh5",
    "ver": $.UA.split(";")[2],
    "cl": "ios",
    "user": $.UserName,
    "code": 1,
    "ua": $.UA
  };
  _0x577e5d = await _0x2418b1.getbody(_0x4e4367);
  return new Promise(_0x5b6be9 => {
    const _0x2f0997 = {
      "cookie": cookie,
      "origin": "https://carry.m.jd.com",
      "referer": "https://carry.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x45c7e7 = {
      "url": "https://api.m.jd.com/client.action?functionId=initForFarm&" + _0x577e5d,
      "headers": _0x2f0997,
      "timeout": 10000
    };
    $.get(_0x45c7e7, async (_0x2b757f, _0x1627f6, _0x33494f) => {
      try {
        if (_0x2b757f) {
          console.log("initForFarm: 请求失败 ‼️‼️");
          console.log(JSON.stringify(_0x2b757f));
        } else {
          if (_0x27190b(_0x33494f)) {
            _0x33494f = JSON.parse(_0x33494f);

            if (_0x5c6236) {
              $.farmInfo = _0x33494f;

              if ($.farmInfo.code != 0) {
                ct++;
                await _0x371c22();
                return;
              }

              ct = 0;
            }
          }
        }
      } catch (_0x4c223a) {
        $.logErr(_0x4c223a, _0x1627f6);
      } finally {
        _0x5b6be9(_0x33494f);
      }
    });
  });
}

async function _0x16adbb() {
  const _0x2e2314 = {
    "version": 4,
    "channel": 1
  };
  $.friendList = await _0x215fe2("friendListInitForFarm", _0x2e2314);
}

async function _0x4592fb() {
  if ($.isNode() && process.env.FRUIT_NOTIFY_CONTROL) {
    $.ctrTemp = "" + process.env.FRUIT_NOTIFY_CONTROL === "false";
  } else {
    $.getdata("jdFruitNotify") ? $.ctrTemp = $.getdata("jdFruitNotify") === "false" : $.ctrTemp = "" + jdNotify === "false";
  }

  $.ctrTemp ? ($.msg($.name, subTitle, message, option), $.isNode() && (allMessage += subTitle + "\n" + message + ($.index !== cookiesArr.length ? "\n\n" : ""))) : $.log("\n" + message + "\n");
}

function _0x36ac60(_0x5392fa) {
  let _0x53aa08;

  _0x5392fa ? _0x53aa08 = new Date(_0x5392fa) : _0x53aa08 = new Date();
  return _0x53aa08.getFullYear() + "-" + (_0x53aa08.getMonth() + 1 >= 10 ? _0x53aa08.getMonth() + 1 : "0" + (_0x53aa08.getMonth() + 1)) + "-" + (_0x53aa08.getDate() >= 10 ? _0x53aa08.getDate() : "0" + _0x53aa08.getDate());
}

function _0x3e49fc() {
  return new Promise(async _0x1608ef => {
    const _0x4141cf = {
      "url": "https://cdn.jsdelivr.net/gh/6dylan6/updateTeam@main/shareCodes/fruit.json",
      "timeout": 10000
    };
    $.get(_0x4141cf, (_0xb888b1, _0x146ef8, _0xd933bd) => {
      try {
        if (_0xb888b1) {
          console.log(JSON.stringify(_0xb888b1));
          console.log($.name + " API请求失败，请检查网路重试");
        } else {
          if (_0xd933bd) {
            _0xd933bd = JSON.parse(_0xd933bd);
          }
        }
      } catch (_0xc4e0d7) {
        $.logErr(_0xc4e0d7, _0x146ef8);
      } finally {
        _0x1608ef(_0xd933bd);
      }
    });
    await $.wait(10000);

    _0x1608ef();
  });
}

function _0x136377() {
  return new Promise(async _0x4fcca6 => {
    newShareCodes = [];

    if ($.shareCodesArr[$.index - 1]) {
      newShareCodes = $.shareCodesArr[$.index - 1].split("@");
    } else {
      const _0x50f473 = $.index > shareCodes.length ? shareCodes.length - 1 : $.index - 1;

      newShareCodes = shareCodes[_0x50f473].split("@");
    }

    const _0x173fb0 = await _0x3e49fc();

    _0x173fb0 && _0x173fb0.code === 200 && (newShareCodes = [...new Set([...newShareCodes, ...(_0x173fb0.data || [])])]);

    _0x4fcca6();
  });
}

function _0x3131e9() {
  return new Promise(_0x97538b => {
    notify = $.isNode() ? require("./sendNotify") : "";

    const _0x3d7c1e = $.isNode() ? require("./jdCookie.js") : "";

    $.isNode() && process.env.FRUITSHARECODES && (process.env.FRUITSHARECODES.indexOf("\n") > -1 ? shareCodes = process.env.FRUITSHARECODES.split("\n") : shareCodes = process.env.FRUITSHARECODES.split("&"));

    if ($.isNode()) {
      Object.keys(_0x3d7c1e).forEach(_0x35cbae => {
        _0x3d7c1e[_0x35cbae] && cookiesArr.push(_0x3d7c1e[_0x35cbae]);
      });

      if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
        console.log = () => {};
      }
    } else {
      cookiesArr = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0x435f2a($.getdata("CookiesJD") || "[]").map(_0x3eb88b => _0x3eb88b.cookie)].filter(_0x1a8438 => !!_0x1a8438);
    }

    console.log("共" + cookiesArr.length + "个京东账号\n");
    $.shareCodesArr = [];

    if ($.isNode()) {
      Object.keys(shareCodes).forEach(_0x4c8633 => {
        shareCodes[_0x4c8633] && $.shareCodesArr.push(shareCodes[_0x4c8633]);
      });
    } else {
      if ($.getdata("jd_fruit_inviter")) {
        $.shareCodesArr = $.getdata("jd_fruit_inviter").split("\n").filter(_0x4492d8 => !!_0x4492d8);
      }

      console.log("\nBoxJs设置的" + $.name + "好友邀请码:" + ($.getdata("jd_fruit_inviter") ? $.getdata("jd_fruit_inviter") : "暂无") + "\n");
    }

    _0x97538b();
  });
}

function _0x19c98c() {
  return new Promise(_0x1c0a22 => {
    const _0x3fe476 = {
      "Cookie": cookie,
      "referer": "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0xbf9d2d = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": _0x3fe476,
      "timeout": 10000
    };
    $.get(_0xbf9d2d, (_0x45d886, _0x5ff6d4, _0x108759) => {
      try {
        if (_0x108759) {
          _0x108759 = JSON.parse(_0x108759);

          if (!(_0x108759.islogin === "1")) {
            _0x108759.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x97bc60) {
        console.log(_0x97bc60);
      } finally {
        _0x1c0a22();
      }
    });
  });
}

function _0x215fe2(_0x4a8e83, _0x1af0ab = {}, _0x4cebd9 = 1000) {
  return new Promise(_0x267e59 => {
    setTimeout(() => {
      $.get(_0xfb5219(_0x4a8e83, _0x1af0ab), (_0x13e786, _0x3769f9, _0x464491) => {
        try {
          if (_0x13e786) {
            console.log("\n东东农场: API查询请求失败 ‼️‼️");
            console.log(JSON.stringify(_0x13e786));
            console.log("function_id:" + _0x4a8e83);
            $.logErr(_0x13e786);
          } else {
            _0x27190b(_0x464491) && (_0x464491 = JSON.parse(_0x464491));
          }
        } catch (_0x253785) {
          $.logErr(_0x253785, _0x3769f9);
        } finally {
          _0x267e59(_0x464491);
        }
      });
    }, _0x4cebd9);
  });
}

function _0x27190b(_0x48d5c5) {
  try {
    if (typeof JSON.parse(_0x48d5c5) == "object") {
      return true;
    }
  } catch (_0x1ded86) {
    console.log(_0x1ded86);
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}

function _0xfb5219(_0x2e0543, _0x245bee = {}) {
  const _0xd6598c = {
    "Host": "api.m.jd.com",
    "Accept": "*/*",
    "Origin": "https://carry.m.jd.com",
    "Accept-Encoding": "gzip, deflate, br",
    "User-Agent": $.UA,
    "Accept-Language": "zh-CN,zh-Hans;q=0.9",
    "Referer": "https://carry.m.jd.com/",
    "Cookie": cookie
  };
  return {
    "url": _0x13656d + "?functionId=" + _0x2e0543 + "&body=" + encodeURIComponent(JSON.stringify(_0x245bee)) + "&appid=wh5",
    "headers": _0xd6598c,
    "timeout": 10000
  };
}

function _0x435f2a(_0x28aded) {
  if (typeof _0x28aded == "string") {
    try {
      return JSON.parse(_0x28aded);
    } catch (_0x42afd2) {
      console.log(_0x42afd2);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }