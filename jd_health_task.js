/*
12 5,14 * * * jd_health_task.js
 */
const $ = new Env('健康能量任务');
const bdy_0x19a9b5 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x21acbd = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x2a07bc = require("./function/dylanx.js"),
  bdy_0x33aea0 = require("./USER_AGENTS");
let bdy_0x4560d7 = [],
  bdy_0x2fd220 = "",
  bdy_0x298205 = "";
if ($.isNode()) {
  Object.keys(bdy_0x21acbd).forEach(_0x56304f => {
    bdy_0x4560d7.push(bdy_0x21acbd[_0x56304f]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x4560d7 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...bdy_0x21db58($.getdata("CookiesJD") || "[]").map(_0x41a52f => _0x41a52f.cookie)].filter(_0x580367 => !!_0x580367);
}
!(async () => {
  if (!bdy_0x4560d7[0]) {
    const _0x3668a4 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x3668a4);
    return;
  }
  console.log("当前版本：20240521");
  console.log("问题反馈：https://t.me/dylan_jdpro");
  for (let _0x24692c = 0; _0x24692c < bdy_0x4560d7.length; _0x24692c++) {
    if (bdy_0x4560d7[_0x24692c]) {
      bdy_0x2fd220 = bdy_0x4560d7[_0x24692c];
      $.UserName = decodeURIComponent(bdy_0x2fd220.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x2fd220.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x24692c + 1;
      $.isLogin = true;
      $.nickName = "";
      $.UA = bdy_0x33aea0.UARAM ? bdy_0x33aea0.UARAM() : bdy_0x33aea0.USER_AGENT;
      await bdy_0x4f98f5();
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      if (!$.isLogin) {
        const _0x162277 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x162277);
        $.isNode() && (await bdy_0x19a9b5.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      await bdy_0x3e177a();
      await $.wait(1000);
      $.signstatus == 4 ? console.log("今日以签到完成！") : (console.log("去签到..."), await bdy_0xe107f4($.signcode), await $.wait(1000));
      await bdy_0x454d5e();
      if ($.taskList) {
        console.log("\n做任务...");
        for (let _0x4cbe8f of $.taskList) {
          if (_0x4cbe8f.groupName == "每日任务") {
            for (let _0x11aa73 of _0x4cbe8f.taskVoList) {
              if (_0x11aa73.status == 4) {
                console.log(_0x11aa73.mainTitle, "----已完成");
              } else {
                console.log("去浏览----", _0x11aa73.mainTitle);
                _0x11aa73.status == 1 && (await bdy_0xe107f4(_0x11aa73.encodeId), await $.wait(2000));
                if ($.limit) {
                  console.log("\n❗️限流严重，换个时间在运行吧！");
                  return;
                }
                await bdy_0x16983a(_0x11aa73.queryToken, _0x11aa73.id);
                await $.wait(1000);
              }
            }
          }
        }
      } else {
        console.log("获取任务失败！");
      }
      await bdy_0x4bff6a();
      console.log("\n总计获得：" + parseInt($.userinfo.jdBean || 0) + "京豆🥔，" + $.userinfo.energyValue + "健康能量⚡");
      await $.wait(5000);
    }
  }
})().catch(_0xd953ce => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0xd953ce + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0x4bff6a() {
  const _0x45aa67 = {
    city: "",
    district: "",
    province: "",
    town: ""
  };
  const _0x219104 = {
    activityId: 8542,
    appId: "1EFRYwg",
    appKey: "231282000001",
    awardType: 2,
    channel: "jdapp",
    imei: "HLHOPDME",
    location: _0x45aa67,
    methodName: "kbmy_queryAwardAndScore",
    osName: "buyMedicine",
    taskIdList: ["520953", "520954", "520955", "674815", "841731", "674816", "674814"],
    version: 12
  };
  let _0x3a8f9c = _0x219104;
  _0x3a8f9c = await bdy_0x2a07bc.getbody("jdh_laputa_handleSoaRequest_reinforce", _0x3a8f9c, "11.0.2");
  return new Promise(async _0x30e87f => {
    $.get(bdy_0x12275b("jdh_laputa_handleSoaRequest_reinforce", _0x3a8f9c), async (_0x5c0bc1, _0x1c606a, _0x48f26b) => {
      try {
        if (_0x5c0bc1) {
          console.log("" + JSON.stringify(_0x5c0bc1));
          console.log(" API请求失败，请检查网路重试");
        } else {
          _0x48f26b = JSON.parse(_0x48f26b);
          _0x48f26b.success ? $.userinfo = _0x48f26b.data || "" : console.log(_0x48f26b.message);
        }
      } catch (_0xe7c9ad) {
        $.logErr(_0xe7c9ad, _0x1c606a);
      } finally {
        _0x30e87f(_0x48f26b);
      }
    });
  });
}
async function bdy_0x3e177a() {
  const _0x328ae6 = {
    city: "",
    district: "",
    province: "",
    town: ""
  };
  const _0x202d7c = {
    appId: "2d0050d8877d4065b6227fb9fdcc01bb",
    channel: "jdapp",
    groupCode: "openkits",
    imei: "HLHOPDME",
    location: _0x328ae6,
    m_patch_appKey: "231282000001",
    methodName: "getKitTask2727",
    osName: "buyMedicine",
    version: 12,
    wrapResult: true
  };
  let _0x56f8c2 = _0x202d7c;
  _0x56f8c2 = await bdy_0x2a07bc.getbody("jdh_laputa_handleSoaRequest_reinforce", _0x56f8c2, "11.0.2");
  return new Promise(async _0xd2de61 => {
    $.get(bdy_0x12275b("jdh_laputa_handleSoaRequest_reinforce", _0x56f8c2), async (_0x2f71e6, _0x4418ff, _0x4a539f) => {
      try {
        _0x2f71e6 ? (console.log("" + JSON.stringify(_0x2f71e6)), console.log(" API请求失败，请检查网路重试")) : (_0x4a539f = JSON.parse(_0x4a539f), _0x4a539f.success ? ($.signcode = _0x4a539f.data?.["result"]?.["encodeId"] || "", $.signstatus = _0x4a539f.data?.["result"]?.["status"]) : console.log(_0x4a539f.message));
      } catch (_0x27be51) {
        $.logErr(_0x27be51, _0x4418ff);
      } finally {
        _0xd2de61(_0x4a539f);
      }
    });
  });
}
async function bdy_0x454d5e() {
  const _0x483d26 = {
    city: "",
    district: "",
    province: "",
    town: ""
  };
  const _0xe95ff8 = {
    appId: "2d0050d8877d4065b6227fb9fdcc01bb",
    appKey: "231282000001",
    channel: "jdapp",
    imei: "HWHOPDME",
    location: _0x483d26,
    methodName: "queryTaskList2998",
    osName: "buyMedicine",
    version: 12,
    wrapResult: true
  };
  let _0x5e3ac9 = _0xe95ff8;
  _0x5e3ac9 = await bdy_0x2a07bc.getbody("jdh_laputa_handleSoaRequest_reinforce", _0x5e3ac9, "11.0.2");
  return new Promise(async _0x891a74 => {
    $.get(bdy_0x12275b("jdh_laputa_handleSoaRequest_reinforce", _0x5e3ac9), async (_0x1d6a66, _0x3d9c40, _0x3234f3) => {
      try {
        if (_0x1d6a66) {
          console.log("" + JSON.stringify(_0x1d6a66));
          console.log(" API请求失败，请检查网路重试");
        } else {
          _0x3234f3 = JSON.parse(_0x3234f3);
          _0x3234f3.success ? $.taskList = _0x3234f3.data.result : console.log(_0x3234f3.message);
        }
      } catch (_0x53287e) {
        $.logErr(_0x53287e, _0x3d9c40);
      } finally {
        _0x891a74(_0x3234f3);
      }
    });
  });
}
switch ($.type) {
  case "nb":
    const bdy_0x953f6 = {
      nb: nb
    };
    _0xf1f6le = bdy_0x953f6;
    break;
}
async function bdy_0xe107f4(_0x4b0194) {
  const _0x1e19f2 = {
    city: "",
    district: "",
    province: "",
    town: ""
  };
  const _0x5252e7 = {
    appKey: "231282000001",
    channel: "jdapp",
    encodeId: _0x4b0194,
    imei: "HLHOPDME",
    infoId: "jdhHome_task",
    location: _0x1e19f2,
    methodName: "doTask2745",
    osName: "buyMedicine",
    wrapResult: true
  };
  let _0x45542e = _0x5252e7;
  _0x45542e = await bdy_0x2a07bc.getbody("jdh_msoa_doTaskGw", _0x45542e, "11.0.2");
  return new Promise(async _0x59f929 => {
    $.get(bdy_0x12275b("jdh_msoa_doTaskGw", _0x45542e), async (_0x194235, _0x489647, _0x34a294) => {
      try {
        if (_0x194235) {
          console.log("" + JSON.stringify(_0x194235));
          console.log(" API请求失败，请检查网路重试");
        } else {
          if (_0x34a294.includes("限流")) {
            $.limit = true;
          }
          _0x34a294 = JSON.parse(_0x34a294);
          if (_0x34a294.result?.["result"]) {
            const {
              prizeInfovos = _0x34a294.result?.["result"]?.["prizeInfovo"]
            } = _0x34a294.result?.["result"];
            if (prizeInfovos) {
              for (let _0x59a398 of prizeInfovos) {
                switch (_0x59a398.prizeType) {
                  case 14:
                    console.log("完成，获得" + parseInt(_0x59a398.awardId) + "健康能量");
                    break;
                  case 2:
                    console.log("完成，获得" + parseInt(_0x59a398.money) + "京豆");
                    break;
                }
              }
            }
          } else {
            console.log(JSON.stringify(_0x34a294));
          }
          !(_0x34a294.data?.["result"]?.["bizCode"] == 2);
        }
      } catch (_0xf84955) {
        $.logErr(_0xf84955, _0x489647);
      } finally {
        _0x59f929(_0x34a294);
      }
    });
  });
}
async function bdy_0x16983a(_0x44c4c0, _0x41f222) {
  const _0x2cdd15 = {
    city: "",
    district: "",
    province: "",
    town: ""
  };
  const _0x2f8931 = {
    activityId: 8542,
    appKey: "231282000001",
    channel: "jdapp",
    imei: "HLHOPDME",
    infoId: "jdhHome_task",
    location: _0x2cdd15,
    methodName: "sendAward2999",
    osName: "buyMedicine",
    queryToken: _0x44c4c0,
    taskId: _0x41f222,
    wrapResult: true
  };
  let _0x57c617 = _0x2f8931;
  _0x57c617 = await bdy_0x2a07bc.getbody("jdh_msoa_sendAwardGw", _0x57c617, "11.0.2");
  return new Promise(async _0x5bf256 => {
    $.get(bdy_0x12275b("jdh_msoa_sendAwardGw", _0x57c617), async (_0x4666ea, _0x2bbd58, _0x33aba6) => {
      try {
        if (_0x4666ea) {
          console.log("" + JSON.stringify(_0x4666ea));
          console.log(" API请求失败，请检查网路重试");
        } else {
          _0x33aba6 = JSON.parse(_0x33aba6);
          if (_0x33aba6.result.code == 0) {
            const {
              prizeInfovos = _0x33aba6.result?.["result"]?.["prizeInfovo"]
            } = _0x33aba6.result?.["result"];
            if (prizeInfovos) {
              for (let _0x22643d of prizeInfovos) {
                switch (_0x22643d.prizeType) {
                  case 14:
                    console.log("完成，获得" + parseInt(_0x22643d.awardId) + "健康能量⚡");
                    break;
                  case 2:
                    console.log("完成，获得" + parseInt(_0x22643d.money) + "京豆🥔");
                    break;
                }
              }
            }
          } else {
            console.log(_0x33aba6.result?.["message"]);
          }
        }
      } catch (_0xf04bcc) {
        $.logErr(_0xf04bcc, _0x2bbd58);
      } finally {
        _0x5bf256(_0x33aba6);
      }
    });
  });
}
function bdy_0x12275b(_0x26edc3, _0x28d100) {
  const _0x514d8e = {
    Host: "api.m.jd.com",
    Referer: "https://jd.com",
    "User-Agent": $.UA,
    Cookie: bdy_0x2fd220
  };
  const _0x3505b2 = {
    url: "https://api.m.jd.com/client.action?functionId=" + _0x26edc3 + "&" + _0x28d100,
    headers: _0x514d8e
  };
  return _0x3505b2;
}
function bdy_0x4f98f5() {
  return new Promise(_0x19a235 => {
    const _0x50be2c = {
      Cookie: bdy_0x2fd220,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x3a809c = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x50be2c,
      timeout: 10000
    };
    $.get(_0x3a809c, (_0x198ba2, _0x334b75, _0x479c04) => {
      try {
        if (_0x479c04) {
          _0x479c04 = JSON.parse(_0x479c04);
          if (!(_0x479c04.islogin === "1")) {
            _0x479c04.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x3a32ea) {
        console.log(_0x3a32ea);
      } finally {
        _0x19a235();
      }
    });
  });
}
function bdy_0x49be2b() {
  return new Promise(_0x2a9822 => {
    $.log("京东账号" + $.index + $.nickName + "\n" + bdy_0x298205);
    _0x2a9822();
  });
}
function bdy_0x42ec43(_0x23c841) {
  try {
    if (typeof JSON.parse(_0x23c841) == "object") {
      return true;
    }
  } catch (_0x2a36d4) {
    console.log(_0x2a36d4);
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function bdy_0x21db58(_0xc21490) {
  if (typeof _0xc21490 == "string") {
    try {
      return JSON.parse(_0xc21490);
    } catch (_0x15bd0d) {
      console.log(_0x15bd0d);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
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
