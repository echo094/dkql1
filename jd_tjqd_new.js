/*
特价版签到提现
45 5 * * * jd_tjqd_new.js
*/
const $ = new Env('特价版签到提现新');
const bdy_0x5f3a53 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0xaca3f8 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x1d3aa1 = require("./function/dylans");
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
let bdy_0x149542 = [],
  bdy_0x77750 = "",
  bdy_0x2511bf = 0;
if ($.isNode()) {
  Object.keys(bdy_0x5f3a53).forEach(_0x2ed7a3 => {
    bdy_0x149542.push(bdy_0x5f3a53[_0x2ed7a3]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x149542 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x1f731a => _0x1f731a.cookie)].filter(_0x4a4d71 => !!_0x4a4d71);
}
!(async () => {
  if (!bdy_0x149542[0]) {
    const _0x1b9ffa = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x1b9ffa);
    return;
  }
  console.log("当前版本：20240508");
  console.log("问题建议：https://t.me/dylan_jdpro");
  for (let _0x2d27a0 = 0; _0x2d27a0 < bdy_0x149542.length; _0x2d27a0++) {
    bdy_0x77750 = bdy_0x149542[_0x2d27a0];
    originCookie = bdy_0x149542[_0x2d27a0];
    if (bdy_0x77750) {
      $.UserName = decodeURIComponent(bdy_0x77750.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x77750.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x2d27a0 + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      $.isban = false;
      $.hasRisk = false;
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      bdy_0x8b3b13();
      await bdy_0x37263d();
      if (!$.isLogin) {
        const _0x36b37c = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x36b37c);
        $.isNode() && (await bdy_0xaca3f8.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      await bdy_0x571ff6();
      if ($.outFlag) {
        break;
      }
    }
  }
})().catch(_0x184564 => {
  return $.logErr(_0x184564);
}).finally(() => {
  return $.done();
});
async function bdy_0x571ff6() {
  try {
    await bdy_0x3b4c79("bSignInHome");
    if ($.signflag == 1) {
      console.log("\n今日以签过!");
    } else {
      console.log("\n去签到...");
      await bdy_0x3b4c79("sign");
    }
    await $.wait(i.timeLimitPeriod * 1000 + 500, 10);
    await bdy_0x3b4c79("apTaskList");
    $.taskList.length != 0 && console.log("\n去做任务...");
    for (let _0x2514e2 of $.taskList) {
      if (_0x2514e2.taskFinished) {
        console.log(_0x2514e2.taskTitle + "---已完成");
        continue;
      }
      $.itemId = _0x2514e2.taskSourceUrl;
      $.taskId = _0x2514e2.id;
      switch (_0x2514e2.taskType) {
        case "ORDER_MARK":
          break;
        case "BROWSE_CHANNEL":
          $.taskType = "BROWSE_CHANNEL";
          break;
      }
      await bdy_0x3b4c79("apStartTaskTime");
      await $.wait(_0x2514e2.timeLimitPeriod * 1000 + 500, 10);
      await bdy_0x3b4c79("apDoLimitTimeTask");
      await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
      await bdy_0x3b4c79("apTaskDrawAward");
      await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    }
    await bdy_0x3b4c79("BSignInMyBalance");
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    if ($.signInCoin < 0.3) {
      console.log("\n签到金不足提现门槛！不进行提现");
    } else {
      for (let _0x3fbe20 of $.cashList.reverse()) {
        if ($.signInCoin < _0x3fbe20.amount) {
          continue;
        }
        console.log("\n提现" + _0x3fbe20.amount + "...");
        $.awardType = 4;
        $.gear = _0x3fbe20.gear;
        await bdy_0x3b4c79("bSignInExchange");
      }
    }
    await $.wait(parseInt(Math.random() * 1000 + 3000, 10));
  } catch (_0x135161) {
    console.log(_0x135161);
  }
}
async function bdy_0x3b4c79(_0x3922cd) {
  if ($.outFlag || $.isban) {
    return;
  }
  let _0x2e6a1a = "",
    _0x3c41aa,
    _0x465804,
    _0x1a7f7f = "post",
    _0x1a364b = "https://api.m.jd.com/";
  switch (_0x3922cd) {
    case "sign":
      const _0x142acf = {
        linkId: "Fl1LmxG_f0poD7w1ycZqnw"
      };
      _0x2e6a1a = _0x142acf;
      _0x3c41aa = "61e2b";
      _0x465804 = "bSignInDo";
      break;
    case "apStartTaskTime":
      const _0x3309ad = {
        linkId: "Fl1LmxG_f0poD7w1ycZqnw",
        taskId: $.taskId,
        itemId: $.itemId,
        channel: 4
      };
      _0x2e6a1a = _0x3309ad;
      _0x465804 = "apStartTaskTime";
      break;
    case "apTaskList":
      _0x1a364b = "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22%3A%22Fl1LmxG_f0poD7w1ycZqnw%22%7D&t=1715170975269&appid=activities_platform&client=android&clientVersion=6.24.0&loginType=2&loginWQBiz=wegame&h5st=null&build=22779&screen=393*873&networkType=wifi&eufv=1&cthr=1";
      _0x1a7f7f = "get";
      break;
    case "apDoLimitTimeTask":
      const _0x485472 = {
        linkId: "Fl1LmxG_f0poD7w1ycZqnw"
      };
      _0x2e6a1a = _0x485472;
      _0x3c41aa = "ebecc";
      _0x465804 = "apDoLimitTimeTask";
      break;
    case "apTaskDrawAward":
      const _0x18cdf6 = {
        taskType: $.taskType,
        taskId: $.taskId,
        channel: 4,
        checkVersion: true,
        cityId: "",
        provinceId: "",
        countyId: "",
        linkId: "Fl1LmxG_f0poD7w1ycZqnw"
      };
      _0x2e6a1a = _0x18cdf6;
      _0x3c41aa = "6f2b6";
      _0x465804 = "apTaskDrawAward";
      break;
    case "bSignInHome":
      const _0x29cba7 = {
        linkId: "Fl1LmxG_f0poD7w1ycZqnw"
      };
      _0x2e6a1a = _0x29cba7;
      _0x3c41aa = "76674";
      _0x465804 = "bSignInHome";
      break;
    case "BSignInMyBalance":
      const _0x4a9943 = {
        linkId: "Fl1LmxG_f0poD7w1ycZqnw"
      };
      _0x2e6a1a = _0x4a9943;
      _0x465804 = "BSignInMyBalance";
      break;
    case "bSignInExchange":
      const _0x2f44ce = {
        awardType: $.awardType,
        gear: $.gear,
        linkId: "Fl1LmxG_f0poD7w1ycZqnw"
      };
      _0x2e6a1a = _0x2f44ce;
      _0x3c41aa = "ff179";
      _0x465804 = "bSignInExchange";
      break;
    default:
      console.log("错误" + _0x3922cd);
  }
  if (_0x3c41aa) {
    let _0x51aa42 = {
      appId: _0x3c41aa,
      functionId: _0x465804,
      body: _0x2e6a1a,
      appid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      t: Date.now(),
      ua: $.UA
    };
    _0x2e6a1a = await bdy_0x1d3aa1.getbody(_0x51aa42);
    if (!_0x2e6a1a) {
      return;
    }
  } else {
    _0x2e6a1a && (_0x2e6a1a = "functionId=" + _0x465804 + "&body=" + encodeURIComponent(JSON.stringify(_0x2e6a1a)) + "&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=11.6.3&cthr=1&networkType=wifi");
  }
  let _0x1206ed = bdy_0x3fcc81(_0x1a364b, _0x2e6a1a);
  return new Promise(async _0x556645 => {
    $["d" + _0x1a7f7f](_0x1206ed, async (_0x1c731b, _0x30924e, _0x39edb1) => {
      try {
        if (_0x1c731b) {
          if (_0x30924e && typeof _0x30924e.statusCode != "undefined") {
            if (_0x30924e.statusCode == 493) {
              if (bdy_0x2511bf < 6) {
                bdy_0x2511bf++;
                await bdy_0x3b4c79(_0x3922cd);
                return;
              }
              console.log("ip可能被限制，过10分钟后再执行脚本\n");
              $.outFlag = true;
            }
          }
          console.log("" + $.toStr(_0x1c731b, _0x1c731b));
        } else {
          if (_0x39edb1.includes("doctype") && bdy_0x2511bf < 6) {
            bdy_0x2511bf++;
            await bdy_0x3b4c79(_0x3922cd);
            return;
          }
          bdy_0x2511bf = 0;
          bdy_0x39d4b4(_0x3922cd, _0x39edb1);
        }
      } catch (_0x5db698) {
        console.log(_0x5db698, _0x30924e);
      } finally {
        _0x556645();
      }
    });
  });
}
async function bdy_0x39d4b4(_0x57bd75, _0x1d3976) {
  let _0xe48f21 = "";
  try {
    _0xe48f21 = JSON.parse(_0x1d3976);
  } catch (_0x2533b4) {
    console.log(_0x57bd75 + " 执行任务异常");
  }
  try {
    switch (_0x57bd75) {
      case "apTaskList":
        _0xe48f21.code == 0 ? $.taskList = _0xe48f21.data || [] : ($.taskList = [], console.log("获取任务失败！"));
        break;
      case "sign":
        if (_0xe48f21.success) {
          _0xe48f21.data?.["signInCoin"] && console.log("获得 " + _0xe48f21.data.signInCoin + " 签到金 💰️");
          if (_0xe48f21.data?.["bsignInPrizeDrawVO"]?.["prizeValue"] > 0) {
            console.log("获得 " + _0xe48f21.data.bsignInPrizeDrawVO.prizeValue + " 红包 🧧");
          }
        } else {
          console.log(_0xe48f21.errMsg);
        }
        break;
      case "bSignInHome":
        if (_0xe48f21.success) {
          console.log("当前签到金：" + _0xe48f21.data.signInCoin);
          $.signInCoin = _0xe48f21.data.signInCoin;
          $.signflag = _0xe48f21.data.signInFlag;
        }
        break;
      case "apTaskDrawAward":
        if (_0xe48f21.success) {
          for (let _0x57fb6b of _0xe48f21.data) {
            console.log("获得" + _0x57fb6b.awardGivenNumber + "签到金 💰️");
          }
        } else {
          console.log(_0xe48f21.errMsg);
        }
        break;
      case "BSignInMyBalance":
        _0xe48f21.success ? $.cashList = _0xe48f21.data.wxExchange || [] : console.log(_0xe48f21.errMsg);
        break;
      case "bSignInExchange":
        if (_0xe48f21.success) {
          console.log("提现成功 ✔️");
        } else {
          _0xe48f21.data ? console.log("提现失败：" + _0xe48f21.data.msg) : console.log(_0xe48f21.errMsg);
        }
        break;
      case "apStartTaskTime":
      case "apDoLimitTimeTask":
        break;
      default:
        console.log(_0x57bd75 + " -> " + _0x1d3976);
    }
    if (typeof _0xe48f21 == "object") {
      _0xe48f21.errorMessage && _0xe48f21.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
    }
  } catch (_0x3d7fe7) {
    console.log(_0x57bd75 + " " + _0x3d7fe7);
  }
}
function bdy_0x3fcc81(_0x1e3115, _0x273a32) {
  const _0x2db2c2 = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    Origin: "https://h5platform.jd.com",
    Referer: "https://h5platform.jd.com/",
    Cookie: bdy_0x77750,
    "User-Agent": $.UA
  };
  const _0x267cf4 = {
    url: _0x1e3115,
    headers: _0x2db2c2,
    timeout: 30000,
    ...(_0x273a32 ? {
      body: _0x273a32
    } : {})
  };
  return _0x267cf4;
}
async function bdy_0x8b3b13() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0x402772(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0x402772(_0xfb4d2a) {
  _0xfb4d2a = _0xfb4d2a || 32;
  let _0x1908eb = "abcdef0123456789",
    _0x5df98b = _0x1908eb.length,
    _0x38680d = "";
  for (i = 0; i < _0xfb4d2a; i++) {
    _0x38680d += _0x1908eb.charAt(Math.floor(Math.random() * _0x5df98b));
  }
  return _0x38680d;
}
function bdy_0x37f586(_0x33ec85) {
  if (typeof _0x33ec85 == "string") {
    try {
      return JSON.parse(_0x33ec85);
    } catch (_0xb4d108) {
      console.log(_0xb4d108);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function bdy_0x28ce43() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x299cb7 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x55a02d = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    $.shopactivityId == "" && delete _0x55a02d.activityId;
    const _0x523b73 = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x55a02d,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x55a02d = await dyy.getbody(_0x523b73);
    const _0x3f3c1 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x77750,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x318cd9 = {
      url: "https://api.m.jd.com/client.action?" + _0x55a02d + "&uuid=88888",
      headers: _0x3f3c1,
      timeout: 30000
    };
    $.dget(_0x318cd9, async (_0x5c31d6, _0x1821ca, _0xa26aa7) => {
      try {
        _0xa26aa7 = _0xa26aa7 && _0xa26aa7.match(/jsonp_.*?\((.*?)\);/) && _0xa26aa7.match(/jsonp_.*?\((.*?)\);/)[1] || _0xa26aa7;
        let _0x3a1a61 = $.toObj(_0xa26aa7, _0xa26aa7);
        if (_0x3a1a61 && typeof _0x3a1a61 == "object") {
          if (_0x3a1a61 && _0x3a1a61.success === true) {
            console.log("    " + _0x3a1a61.message);
            $.errorJoinShop = _0x3a1a61.message;
            if (_0x3a1a61.result && _0x3a1a61.result.giftInfo) {
              for (let _0xcc787a of _0x3a1a61.result.giftInfo.giftList) {
                console.log("入会获得:" + _0xcc787a.discountString + _0xcc787a.prizeName + _0xcc787a.secondLineDesc);
              }
            }
          } else {
            if (_0x3a1a61 && typeof _0x3a1a61 == "object" && _0x3a1a61.message) {
              $.errorJoinShop = _0x3a1a61.message;
              console.log("" + (_0x3a1a61.message || ""));
            } else {
              console.log(_0xa26aa7);
            }
          }
        } else {
          console.log(_0xa26aa7);
        }
      } catch (_0x19b620) {
        $.logErr(_0x19b620, _0x1821ca);
      } finally {
        _0x299cb7();
      }
    });
  });
}
async function bdy_0x4bb390() {
  return new Promise(async _0x5d07b4 => {
    const _0x5f0ed9 = {
      venderId: $.joinVenderId,
      payUpShop: true,
      queryVersion: "10.5.2",
      appid: "ef79a",
      needSecurity: true,
      bizId: "shop_view_app",
      channel: 406
    };
    let _0x155bae = _0x5f0ed9;
    const _0xa3e539 = {
      appId: "ef79a",
      fn: "getShopOpenCardInfo",
      body: _0x155bae,
      apid: "jd_shop_member",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x155bae = await dyy.getbody(_0xa3e539);
    const _0x975934 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x77750,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    const _0xff47a9 = {
      url: "https://api.m.jd.com/client.action?" + _0x155bae + "&uuid=88888",
      headers: _0x975934,
      timeout: 60000
    };
    $.get(_0xff47a9, async (_0x2caf3c, _0x49f1eb, _0x1069b0) => {
      try {
        _0x1069b0 = _0x1069b0 && _0x1069b0.match(/jsonp_.*?\((.*?)\);/) && _0x1069b0.match(/jsonp_.*?\((.*?)\);/)[1] || _0x1069b0;
        let _0x4b19ea = $.toObj(_0x1069b0, _0x1069b0);
        if (_0x4b19ea && typeof _0x4b19ea == "object") {
          _0x4b19ea && _0x4b19ea.success == true && (console.log("去加入 -> " + (_0x4b19ea.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x4b19ea.result[0].interestsRuleList && _0x4b19ea.result[0].interestsRuleList[0] && _0x4b19ea.result[0].interestsRuleList[0].interestsInfo && _0x4b19ea.result[0].interestsRuleList[0].interestsInfo.activityId || "");
        } else {
          console.log(_0x1069b0);
        }
      } catch (_0x43969b) {
        $.logErr(_0x43969b, _0x49f1eb);
      } finally {
        _0x5d07b4();
      }
    });
  });
}
function bdy_0x18583c(_0x2e24f3, _0x4cb082) {
  return Math.floor(Math.random() * (_0x4cb082 - _0x2e24f3)) + _0x2e24f3;
}
function bdy_0x132d84(_0x2a1e38 = +new Date()) {
  var _0x4d4a91 = new Date(_0x2a1e38 + 28800000);
  return _0x4d4a91.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function bdy_0x37263d() {
  return new Promise(_0x3d587c => {
    const _0x5f2525 = {
      Cookie: bdy_0x77750,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x5c4e5a = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x5f2525,
      timeout: 10000
    };
    $.get(_0x5c4e5a, (_0x5c0736, _0x2569c4, _0x26cd0c) => {
      try {
        if (_0x26cd0c) {
          _0x26cd0c = JSON.parse(_0x26cd0c);
          if (!(_0x26cd0c.islogin === "1")) {
            _0x26cd0c.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x129c6a) {
        console.log(_0x129c6a);
      } finally {
        _0x3d587c();
      }
    });
  });
}
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }