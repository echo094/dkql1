/*
远程获取，自行运行
cron:1 1 1 1 *
============Quantumultx===============
[task_local]
#会场红包雨
1 1 1 1 * jd_hcredrain.js, tag=会场红包雨, enabled=true
 */

const $ = new Env('会场红包雨');
const iIiI1ii = $.isNode() ? require("./sendNotify") : "",
      illliIiI = $.isNode() ? require("./jdCookie.js") : "";
let lII1Iill = [],
    i1llIii = "";

if ($.isNode()) {
  Object.keys(illliIiI).forEach(iilliil1 => {
    lII1Iill.push(illliIiI[iilliil1]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else lII1Iill = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...Illllii($.getdata("CookiesJD") || "[]").map(iIIiIiI1 => iIIiIiI1.cookie)].filter(lIill1 => !!lIill1);

!(async () => {
  if (!lII1Iill[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }

  let li1l1lIi = "http://code.kingran.cf/hcurl.json";
  authorCodeList = await Il1ii1II(li1l1lIi);

  if (authorCodeList.length <= 0) {
    console.log("\n暂无活动~\n");
    return;
  }

  console.log("请自行运行，频道会不定期更新");

  for (let l11Il1 = 0; l11Il1 < lII1Iill.length; l11Il1++) {
    if (lII1Iill[l11Il1]) {
      i1llIii = lII1Iill[l11Il1];
      $.UserName = decodeURIComponent(i1llIii.match(/pt_pin=([^; ]+)(?=;?)/) && i1llIii.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = l11Il1 + 1;
      $.isLogin = true;
      $.nickName = "";
      UA = illl1ll1();
      console.log("\n【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n");

      if (!$.isLogin) {
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        });

        if ($.isNode()) {
          await iIiI1ii.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie");
        }

        continue;
      }

      hot = false;
      await IllIlill();
      await $.wait(3000);
      !hot && (await Illli1II(), await $.wait(2000));
    }
  }
})().catch(lI1iilIi => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + lI1iilIi + "!", "");
}).finally(() => {
  $.done();
});

async function IllIlill() {
  return new Promise(async iIIIi111 => {
    $.body = authorCodeList;
    const iIiIli1i = {
      "url": "https://api.m.jd.com/client.action",
      "body": "functionId=hby_lottery&appid=publicUseApi&body=" + JSON.stringify($.body) + "&client=wh5&clientVersion=1.0.0",
      "headers": {
        "Cookie": i1llIii + "",
        "origin": "https://prodev.m.jd.com",
        "Content-Type": "application/x-www-form-urlencoded",
        "referer": "https://prodev.m.jd.com/mall/active/2sKEp9uxmhP4SjFWJpgrouwnrG11/index.html",
        "User-Agent": UA,
        "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8"
      }
    };
    $.post(iIiIli1i, async (ilIIlI1i, iiIllIl1, lI1iIiIi) => {
      try {
        ilIIlI1i ? (console.log("" + JSON.stringify(ilIIlI1i)), console.log($.name + " API请求失败，请检查网路重试")) : (lI1iIiIi = JSON.parse(lI1iIiIi), lI1iIiIi.success == true ? lI1iIiIi.code == 0 && lI1iIiIi.data.bizCode == 0 ? (console.log("获得：" + lI1iIiIi.data.result.hbInfo.discount + " 红包"), $.sceneId = lI1iIiIi.data.result.sceneId || "") : (console.log(lI1iIiIi.data.bizMsg + " " + lI1iIiIi.data.bizCode), (lI1iIiIi.data.bizCode == -1009 || lI1iIiIi.data.bizMsg == "活动太火爆啦，请稍后尝试~") && (hot = true)) : (console.log(lI1iIiIi.msg), lI1iIiIi.msg == "请求失败，登录失败" && (hot = true)));
      } catch (I1IllI11) {
        $.logErr(I1IllI11, iiIllIl1);
      } finally {
        iIIIi111(lI1iIiIi);
      }
    });
  });
}

async function Illli1II() {
  return new Promise(async llii1i1i => {
    $.body = {
      "sceneId": $.sceneId,
      "activityNo": "JhL2v9pkmFqI78PtwXxut"
    };
    const l1Ii1lII = {
      "url": "https://api.m.jd.com/client.action",
      "body": "functionId=hby_share&appid=publicUseApi&body=" + JSON.stringify($.body) + "&client=wh5&clientVersion=1.0.0",
      "headers": {
        "Cookie": i1llIii,
        "origin": "https://prodev.m.jd.com",
        "Content-Type": "application/x-www-form-urlencoded",
        "referer": "https://prodev.m.jd.com/mall/active/2sKEp9uxmhP4SjFWJpgrouwnrG11/index.html",
        "User-Agent": UA,
        "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8"
      }
    };
    $.post(l1Ii1lII, async (ii1iiIII, iiIIill1, I1IlIli) => {
      try {
        if (ii1iiIII) {
          console.log("" + JSON.stringify(ii1iiIII));
          console.log($.name + " API请求失败，请检查网路重试");
        } else {
          I1IlIli = JSON.parse(I1IlIli);

          if (I1IlIli.success == true) {
            if (I1IlIli.code == 0 && I1IlIli.data.bizCode == 0) {
              console.log("分享成功，再开一次");
              await $.wait(3000);
              await IllIlill();
            } else {
              console.log(I1IlIli.data.bizMsg + " " + I1IlIli.data.bizCode);
            }
          } else console.log(I1IlIli.msg);
        }
      } catch (iiiiI1Ii) {
        $.logErr(iiiiI1Ii, iiIIill1);
      } finally {
        llii1i1i(I1IlIli);
      }
    });
  });
}

function illl1ll1() {
  getstr = function (Illl1iI1) {
    let liIlll1 = "",
        l11i1Ii = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let ii1Ilili = 0; ii1Ilili < Illl1iI1; ii1Ilili++) {
      let IllIIlll = Math.round(Math.random() * (l11i1Ii.length - 1));
      liIlll1 += l11i1Ii.substring(IllIIlll, IllIIlll + 1);
    }

    return liIlll1;
  };

  let il1111i = Buffer.from(getstr(16), "utf8").toString("base64"),
      il111iil = getstr(48);
  return ep = encodeURIComponent(JSON.stringify({
    "hdid": "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
    "ts": Date.now(),
    "ridx": -1,
    "cipher": {
      "sv": "EG==",
      "ad": il1111i,
      "od": il111iil,
      "ov": "Ctq=",
      "ud": il1111i
    },
    "ciphertype": 5,
    "version": "1.2.0",
    "appname": "com.jingdong.app.mall"
  })), "jdapp;android;11.2.0;;;appBuild/98413;ef/1;ep/" + ep + ";Mozilla/5.0 (Linux; Android 9; LYA-AL00 Build/HUAWEILYA-AL00L; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046033 Mobile Safari/537.36";
}

function Il1ii1II(lIiIl1li) {
  return new Promise(ll11I11I => {
    const ili1I1lI = {
      "url": lIiIl1li + "?" + new Date(),
      "timeout": 10000,
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
      }
    };
    $.get(ili1I1lI, async (liIliII1, IIi1I1i1, l11iIIi) => {
      try {
        if (liIliII1) $.getAuthorCodeListerr = false;else {
          if (l11iIIi) l11iIIi = JSON.parse(l11iIIi);
          $.getAuthorCodeListerr = true;
        }
      } catch (lli1111i) {
        $.logErr(lli1111i, IIi1I1i1);
        l11iIIi = null;
      } finally {
        ll11I11I(l11iIIi);
      }
    });
  });
}

function iiilIiii(i1il11II, I1I1IIli) {
  return Math.floor(Math.random() * (I1I1IIli - i1il11II)) + i1il11II;
}

function Il1IilI(iliII) {
  try {
    if (typeof JSON.parse(iliII) == "object") return true;
  } catch (I1iI1II1) {
    return console.log(I1iI1II1), console.log("京东服务器访问数据为空，请检查自身设备网络情况"), false;
  }
}

function Illllii(lI1Illll) {
  if (typeof lI1Illll == "string") try {
    return JSON.parse(lI1Illll);
  } catch (IliIlIll) {
    return console.log(IliIlIll), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
  }
}
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }