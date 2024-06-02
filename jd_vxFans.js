/*
40 9 * * * jd_vxFans.js
*/

const $ = new Env('公众号粉丝福利');
const bdy_0x1b920a = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x333087 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x445cde = require("./function/dylans");
if (process.env.DY_PROXY) {
  try {
    require("https-proxy-agent");
    ccc = require("./function/proxy.js");
    $.dget = ccc.intoRequest($.get.bind($));
    $.dpost = ccc.intoRequest($.post.bind($));
  } catch {
    $.log("未安装https-proxy-agent依赖，无法启用代理");
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
let bdy_0x1cfa74 = [],
  bdy_0x522fbd = "",
  bdy_0x237ae5 = 0;
if ($.isNode()) {
  Object.keys(bdy_0x1b920a).forEach(_0x512b59 => {
    bdy_0x1cfa74.push(bdy_0x1b920a[_0x512b59]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x1cfa74 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x2855bb => _0x2855bb.cookie)].filter(_0xbbcc12 => !!_0xbbcc12);
}
!(async () => {
  if (!bdy_0x1cfa74[0]) {
    const _0x24fe58 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x24fe58);
    return;
  }
  console.log("当前版本：20240511");
  console.log("问题建议TG：https://t.me/dylan_jdpro");
  for (let _0x52ff1f = 0; _0x52ff1f < bdy_0x1cfa74.length; _0x52ff1f++) {
    bdy_0x522fbd = bdy_0x1cfa74[_0x52ff1f];
    originCookie = bdy_0x1cfa74[_0x52ff1f];
    if (bdy_0x522fbd) {
      $.UserName = decodeURIComponent(bdy_0x522fbd.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x522fbd.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x52ff1f + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      $.isban = false;
      $.hasRisk = false;
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      $.UA = " Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.42(0x18002a32) NetType/WIFI Language/zh_CN";
      await bdy_0x5be3bd();
      if (!$.isLogin) {
        const _0x52ae41 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x52ae41);
        $.isNode() && (await bdy_0x333087.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      await bdy_0x5dc332();
      if ($.outFlag) {
        break;
      }
    }
  }
})().catch(_0x21a99b => {
  return $.logErr(_0x21a99b);
}).finally(() => {
  return $.done();
});
async function bdy_0x5dc332() {
  try {
    await bdy_0x283ed6("officialAccountSign_homePage");
    if ($.isLogin == false) {
      return;
    }
    if (Object.keys($.signInfo).length !== 0) {
      let _0x5c22b9 = $.signInfo.signTaskList.find(_0x490f45 => _0x490f45.currentDay);
      if (_0x5c22b9.signStatus == 0) {
        console.log("\n去签到... ");
        await bdy_0x283ed6("sign");
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
      } else {
        if (_0x5c22b9.signStatus == 1) {
          console.log("\n今日已签到完成，已签" + $.signInfo.signDays + "天");
        }
      }
    }
    console.log("\n去做任务...");
    if ($.scanTaskList.length != 0) {
      for (i of $.scanTaskList) {
        if (i.status == 2) {
          console.log(i.assignName + "----已完成");
          continue;
        }
        console.log("去做  " + i.assignName);
        $.itemId = i.itemId;
        $.scanAssignmentId = i.scanAssignmentId;
        await bdy_0x283ed6("startTask");
        await $.wait(parseInt(Math.random() * 1000 + i.times * 1000));
        await bdy_0x283ed6("endTask");
        await $.wait(parseInt(Math.random() * 1000 + 500));
      }
    }
    console.log("\n金币余额: " + $.totalPoint);
    if ($.beaninfo.status == 0) {
      console.log("\n去兑换" + $.beaninfo.rewardName + "...");
      if ($.totalPoint >= $.beaninfo.point) {
        await bdy_0x283ed6("officialAccountSign_exchange");
      } else {
        console.log("\n金币不足，不兑换");
        return;
      }
    } else {
      console.log("\n京豆无库存，不进行兑换了！");
    }
    await $.wait(parseInt(Math.random() * 1000 + 3000, 10));
  } catch (_0x508a30) {
    console.log(_0x508a30);
  }
}
switch ($.type) {
  case "nb":
    const bdy_0xdda46b = {
      nb: nb
    };
    _0xf1f6le = bdy_0xdda46b;
    break;
}
async function bdy_0x283ed6(_0x547465) {
  if ($.outFlag || $.isban) {
    return;
  }
  let _0x3199ab = "",
    _0x4e961b,
    _0x2bfb5a,
    _0x519308 = "POST";
  switch (_0x547465) {
    case "officialAccountSign_homePage":
      _0x3199ab = {};
      _0x4e961b = "7c642";
      _0x2bfb5a = "officialAccountSign_homePage";
      break;
    case "startTask":
      const _0x3c2ca8 = {
        actionType: 1,
        scanAssignmentId: $.scanAssignmentId,
        itemId: $.itemId
      };
      _0x3199ab = _0x3c2ca8;
      _0x2bfb5a = "officialAccountSign_scan";
      break;
    case "endTask":
      const _0x15c2c3 = {
        actionType: 0,
        scanAssignmentId: $.scanAssignmentId,
        itemId: $.itemId
      };
      _0x3199ab = _0x15c2c3;
      _0x2bfb5a = "officialAccountSign_scan";
      break;
    case "sign":
      const _0x33515f = {
        itemId: "1"
      };
      _0x3199ab = _0x33515f;
      _0x2bfb5a = "officialAccountSign_sign";
      break;
    case "officialAccountSign_exchange":
      const _0x2683ea = {
        encryptAssignmentId: "4Qjm7TrkpbL8wVVug7tfhaJMpB93"
      };
      _0x3199ab = _0x2683ea;
      _0x2bfb5a = "officialAccountSign_exchange";
      break;
    default:
      console.log("错误" + _0x547465);
  }
  if (_0x4e961b) {
    let _0x1e8f0d = {
      appId: _0x4e961b,
      functionId: _0x2bfb5a,
      body: _0x3199ab,
      appid: "large_account",
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      t: Date.now(),
      ua: $.UA
    };
    _0x3199ab = await bdy_0x445cde.getbody(_0x1e8f0d);
    _0x3199ab = "loginType=0&loginWQBiz=dzhsign&" + _0x3199ab;
    if (!_0x3199ab) {
      return;
    }
  } else {
    _0x3199ab = "appid=large_account&functionId=" + _0x2bfb5a + "&client=apple&clientVersion=1.0.0&loginType=0&loginWQBiz=dzhsign&body=" + encodeURIComponent(JSON.stringify(_0x3199ab));
  }
  let _0xb38e89 = bdy_0x4ab3b5(_0x2bfb5a, _0x3199ab, _0x519308);
  return new Promise(async _0x57d4ae => {
    $.dpost(_0xb38e89, async (_0x23b9aa, _0x264fbf, _0x7098a) => {
      try {
        if (_0x23b9aa) {
          if (_0x264fbf && typeof _0x264fbf.statusCode != "undefined") {
            if (_0x264fbf.statusCode == 493) {
              if (bdy_0x237ae5 < 6) {
                bdy_0x237ae5++;
                await bdy_0x283ed6(_0x547465);
                return;
              }
              console.log("ip可能被限制，过10分钟后再执行脚本\n");
              $.outFlag = true;
            }
          }
          console.log("" + $.toStr(_0x23b9aa, _0x23b9aa));
        } else {
          if (_0x7098a.includes("doctype") && bdy_0x237ae5 < 6) {
            bdy_0x237ae5++;
            await bdy_0x283ed6(_0x547465);
            return;
          }
          bdy_0x237ae5 = 0;
          bdy_0x143773(_0x547465, _0x7098a);
        }
      } catch (_0x325319) {
        console.log(_0x325319, _0x264fbf);
      } finally {
        _0x57d4ae();
      }
    });
  });
}
async function bdy_0x143773(_0x57d057, _0x5f56e4) {
  let _0x355a54 = "";
  try {
    _0x355a54 = JSON.parse(_0x5f56e4);
  } catch (_0x2ee95d) {
    console.log(_0x57d057 + " 执行任务异常");
  }
  try {
    switch (_0x57d057) {
      case "officialAccountSign_homePage":
        if (_0x355a54.code == 0) {
          if (_0x5f56e4.includes("未登录")) {
            $.isLogin = false;
          }
          $.scanTaskList = _0x355a54.data.scanTaskList || [];
          $.signInfo = _0x355a54.data.signInfo || {};
          $.totalPoint = _0x355a54.data.totalPoint || 0;
          $.exchangeTaskList = _0x355a54.data.exchangeTaskList || [];
          $.exchangeTaskList.length != 0 && (console.log("兑换列表："), $.exchangeTaskList.forEach(_0x5e80d9 => {
            console.log(_0x5e80d9.rewardName + "---需" + _0x5e80d9.point + "金币----" + (_0x5e80d9.status == 0 ? "有库存" : "无库存"));
          }), $.beaninfo = $.exchangeTaskList.find(_0x535a1a => JSON.stringify(_0x535a1a).includes("京豆")));
        }
        break;
      case "endTask":
        _0x355a54.subCode == 0 ? ($.totalPoint++, console.log(_0x355a54.message)) : console.log(_0x355a54.message);
        break;
      case "sign":
        if (_0x355a54.subCode == 0) {
          console.log("签到成功，金币+" + (_0x355a54.data?.["point"] || 0));
        } else {
          console.log(_0x355a54.message);
        }
        break;
      case "startTask":
        if (!(_0x355a54.subCode == 0)) {
          console.log(_0x355a54.message);
        }
        break;
      case "officialAccountSign_exchange":
        _0x355a54.subCode == 0 ? console.log("兑换成功！") : console.log(_0x355a54.message);
        break;
      default:
        console.log(_0x57d057 + " -> " + _0x5f56e4);
    }
    if (typeof _0x355a54 == "object") {
      if (_0x355a54.errorMessage) {
        if (_0x355a54.errorMessage.indexOf("火爆") > -1) {
          $.hotFlag = true;
        }
      }
    }
  } catch (_0x28a0ab) {
    console.log(_0x57d057 + " " + _0x28a0ab);
  }
}
function bdy_0x4ab3b5(_0x2234ed, _0x1e561b, _0x4327b3 = "POST") {
  let _0x939b16 = "https://api.m.jd.com/" + _0x2234ed + "?loginType=0&loginWQBiz=dzhsign",
    _0x4b0ead = {
      "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/x-www-form-urlencoded",
      Origin: "https://bigaccount-fanssiginin-pro.pf.jd.com",
      Referer: "https://bigaccount-fanssiginin-pro.pf.jd.com/",
      Cookie: "open_id=oTGnpnO-w2b2mKT4aNDjonxQTS6A;" + bdy_0x522fbd,
      "User-Agent": $.UA,
      "x-requested-with": "com.tencent.mm"
    };
  const _0x54480b = {
    url: _0x939b16,
    method: _0x4327b3,
    headers: _0x4b0ead,
    body: _0x1e561b,
    timeout: 30000
  };
  return _0x54480b;
}
async function bdy_0x35e5f8() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0x150b71(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0x150b71(_0x1aac8e) {
  _0x1aac8e = _0x1aac8e || 32;
  let _0x439398 = "abcdef0123456789",
    _0x3d94df = _0x439398.length,
    _0x2897b7 = "";
  for (i = 0; i < _0x1aac8e; i++) {
    _0x2897b7 += _0x439398.charAt(Math.floor(Math.random() * _0x3d94df));
  }
  return _0x2897b7;
}
function bdy_0xa4b5cb(_0x38ee7e) {
  if (typeof _0x38ee7e == "string") {
    try {
      return JSON.parse(_0x38ee7e);
    } catch (_0x4407ee) {
      console.log(_0x4407ee);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function bdy_0x78d2bf(_0x4a062d, _0x1882d9) {
  return Math.floor(Math.random() * (_0x1882d9 - _0x4a062d)) + _0x4a062d;
}
function bdy_0x2454c2(_0x203757 = +new Date()) {
  var _0x4678f6 = new Date(_0x203757 + 28800000);
  return _0x4678f6.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function bdy_0x5be3bd() {
  return new Promise(_0x16e9ae => {
    const _0x1d3e83 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: {},
      timeout: 10000
    };
    _0x1d3e83.headers.Cookie = bdy_0x522fbd;
    _0x1d3e83.headers.referer = "https://h5.m.jd.com/";
    _0x1d3e83.headers["User-Agent"] = $.UA;
    $.get(_0x1d3e83, (_0x509912, _0x4ade0a, _0x16afca) => {
      try {
        if (_0x16afca) {
          _0x16afca = JSON.parse(_0x16afca);
          if (!(_0x16afca.islogin === "1")) {
            _0x16afca.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x5f1ba7) {
        console.log(_0x5f1ba7);
      } finally {
        _0x16e9ae();
      }
    });
  });
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}
