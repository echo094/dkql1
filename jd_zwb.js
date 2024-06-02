/*
22 13s * * * jd_zwb.js
*/

const $ = new Env('做任务赚汪贝');
const bdy_0x4654e3 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x10db9b = $.isNode() ? require("./sendNotify") : "",
  bdy_0x45d61c = require("./function/dylans");
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
let bdy_0x99ec9d = [],
  bdy_0x388bcf = "",
  bdy_0x4c786f = 0,
  bdy_0x5788da = [""],
  bdy_0x5a6f7f = [],
  bdy_0x47dd1e = [],
  bdy_0x44e592 = "";
if ($.isNode()) {
  Object.keys(bdy_0x4654e3).forEach(_0x3584c2 => {
    bdy_0x99ec9d.push(bdy_0x4654e3[_0x3584c2]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x99ec9d = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x42e959 => _0x42e959.cookie)].filter(_0x216add => !!_0x216add);
}
$.helpId = [];
$.fullId = [];
!(async () => {
  if (!bdy_0x99ec9d[0]) {
    const _0x329850 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x329850);
    return;
  }
  console.log("当前版本：20240606");
  console.log("TG频道：https://t.me/dylan_jdpro");
  bdy_0x47dd1e = bdy_0x5a6f7f.length != 0 ? bdy_0x5a6f7f : bdy_0x5788da;
  bdy_0x44e592 = bdy_0x47dd1e[bdy_0x5d14b8(0, bdy_0x47dd1e.length)];
  $.shareUuid = bdy_0x44e592;
  for (let _0x1727f4 = 0; _0x1727f4 < bdy_0x99ec9d.length; _0x1727f4++) {
    bdy_0x388bcf = bdy_0x99ec9d[_0x1727f4];
    originCookie = bdy_0x99ec9d[_0x1727f4];
    if (bdy_0x388bcf) {
      $.UserName = decodeURIComponent(bdy_0x388bcf.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x388bcf.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x1727f4 + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      bdy_0x585c3a();
      await bdy_0x4ab601();
      if (!$.isLogin) {
        const _0x2b35f1 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x2b35f1);
        if ($.isNode()) {
          await bdy_0x10db9b.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie");
        }
        continue;
      }
      await bdy_0x3fae5e();
    }
  }
  console.log("\n开始内部助力...");
  await bdy_0x3481c6();
})().catch(_0x3eda3a => {
  return $.logErr(_0x3eda3a);
}).finally(() => {
  return $.done();
});
async function bdy_0x3fae5e() {
  try {
    $.taskList = [];
    await bdy_0x2ff2c7("atop_channel_sign_calendar");
    $.signstate == 0 && (console.log("去签到..."), await bdy_0x2ff2c7("atop_channel_sign_in"));
    await bdy_0x2ff2c7("atop_channel_interactive_info");
    for (let _0x3ca182 of $.taskList) {
      if (_0x3ca182.taskStatus == 1) {
        console.log(_0x3ca182.assignmentName + "---已完成");
        continue;
      }
      let _0xf8aa27 = _0x3ca182.ext,
        _0x32fa39 = _0x3ca182.assignmentTimesLimit - _0x3ca182.completionCnt;
      $.aType = _0x3ca182.assignmentType;
      $.enId = _0x3ca182.encryptAssignmentId;
      if ($.aType === 2) {
        $.helpId.push(_0xf8aa27[_0xf8aa27.extraType].itemId || "");
        continue;
      }
      console.log("" + _0x3ca182.assignmentName);
      for (let _0x5020bb = 0; _0x5020bb < _0x32fa39; _0x5020bb++) {
        if ($.hotFlag) {
          break;
        }
        $.itemId = _0xf8aa27[_0xf8aa27.extraType].length > 0 ? _0xf8aa27[_0xf8aa27.extraType][_0x5020bb].itemId : "";
        if ($.itemId == "") {
          continue;
        }
        _0xf8aa27.waitDuration && (await bdy_0x2ff2c7("startTask"), await $.wait(parseInt(Math.random() * 1000 + _0xf8aa27.waitDuration * 1000, 10)));
        await bdy_0x2ff2c7("endTask");
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
      }
    }
    await bdy_0x2ff2c7("atop_channel_my_score");
    await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
  } catch (_0x18855b) {
    console.log(_0x18855b);
  }
}
async function bdy_0x3481c6() {
  for (let _0x11f888 = 0; _0x11f888 < bdy_0x99ec9d.length; _0x11f888++) {
    bdy_0x388bcf = bdy_0x99ec9d[_0x11f888];
    if (bdy_0x388bcf) {
      $.UserName = decodeURIComponent(bdy_0x388bcf.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x388bcf.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x11f888 + 1;
      console.log("\n-------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
      bdy_0x585c3a();
      $.nonum = false;
      $.fullId.length != 0 && ($.helpId = $.helpId.filter(_0x284559 => !$.fullId.includes(_0x284559)), $.fullId = []);
      for (let _0x31623 of $.helpId) {
        $.itemId = _0x31623;
        console.log("去助力 --> " + $.itemId);
        await bdy_0x2ff2c7("assit");
        if ($.nonum || $.hotFlag) {
          break;
        }
        await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
      }
      if ($.outFlag) {
        break;
      }
    }
  }
}
async function bdy_0x2ff2c7(_0x2cfb29) {
  if ($.outFlag) {
    return;
  }
  let _0xae7609 = "",
    _0x3d992a,
    _0x149a22,
    _0x1603bc = "POST";
  switch (_0x2cfb29) {
    case "atop_channel_interactive_info":
      const _0x476d32 = {
        bizCode: "cn_retail_jdsupermarket",
        scenario: "sign",
        lat: 0,
        lng: 0,
        babelChannel: "ttt1",
        isJdApp: "1",
        isWx: "0"
      };
      _0xae7609 = _0x476d32;
      _0x3d992a = "33c74";
      _0x149a22 = "atop_channel_interactive_info";
      break;
    case "atop_cart_add":
      const _0x590fd3 = {
        skuId: "100073504826",
        num: 1
      };
      const _0x49ec58 = {
        bizCode: "cn_retail_jdsupermarket",
        scenario: "sign",
        skuItems: [_0x590fd3],
        onlyCurrentCount: 1,
        lat: 0,
        lng: 0,
        babelChannel: "ttt1",
        isJdApp: "1",
        isWx: "0"
      };
      _0xae7609 = _0x49ec58;
      _0x3d992a = "653d8";
      _0x149a22 = "atop_cart_add";
      break;
    case "startTask":
      const _0x2bfb4d = {
        bizCode: "cn_retail_jdsupermarket",
        scenario: "sign",
        assignmentType: $.aType,
        encryptAssignmentId: $.enId,
        actionType: 1,
        itemId: $.itemId,
        babelChannel: "ttt1",
        isJdApp: "1",
        isWx: "0"
      };
      _0xae7609 = _0x2bfb4d;
      _0x3d992a = "51113";
      _0x149a22 = "atop_channel_complete_task";
      break;
    case "endTask":
      const _0x1a6672 = {
        bizCode: "cn_retail_jdsupermarket",
        scenario: "sign",
        assignmentType: $.aType,
        encryptAssignmentId: $.enId,
        actionType: 0,
        itemId: $.itemId,
        babelChannel: "ttt1",
        isJdApp: "1",
        isWx: "0"
      };
      _0xae7609 = _0x1a6672;
      _0x3d992a = "51113";
      _0x149a22 = "atop_channel_complete_task";
      break;
    case "assit":
      const _0x58ca7c = {
        bizCode: "cn_retail_jdsupermarket",
        scenario: "sign",
        assignmentType: 2,
        encryptAssignmentId: "4FaiZa9pgp7ozomUVG4VgVa3ZJWQ",
        assistFlag: true,
        itemId: $.itemId,
        babelChannel: "ttt1",
        isJdApp: "1",
        isWx: "0"
      };
      _0xae7609 = _0x58ca7c;
      _0x3d992a = "51113";
      _0x149a22 = "atop_channel_complete_task";
      break;
    case "atop_channel_sign_calendar":
      const _0x1b5c76 = {
        bizCode: "cn_retail_jdsupermarket",
        scenario: "sign",
        babelChannel: "ttt1",
        isJdApp: "1",
        isWx: "0"
      };
      _0xae7609 = _0x1b5c76;
      _0x3d992a = "7edec";
      _0x149a22 = "atop_channel_sign_calendar";
      break;
    case "atop_channel_my_score":
      const _0x4a0655 = {
        bizCode: "cn_retail_jdsupermarket",
        scenario: "sign",
        babelChannel: "ttt1",
        isJdApp: "1",
        isWx: "0"
      };
      _0xae7609 = _0x4a0655;
      _0x3d992a = "a7c04";
      _0x149a22 = "atop_channel_my_score";
      break;
    case "atop_channel_sign_in":
      const _0x5b118d = {
        signToken: "23opMasjC83Kpkd7yuSBtKK5MqjR",
        channelFollowStatus: 1,
        bizCode: "cn_retail_jdsupermarket",
        scenario: "sign",
        babelChannel: "ttt1",
        isJdApp: "1",
        isWx: "0"
      };
      _0xae7609 = _0x5b118d;
      _0x3d992a = "b8fc7";
      _0x149a22 = "atop_channel_sign_in";
      break;
    default:
      console.log("错误" + _0x2cfb29);
  }
  if (_0x3d992a) {
    let _0x4ed7b9 = {
      appId: _0x3d992a,
      functionId: _0x149a22,
      body: _0xae7609,
      appid: "jd-super-market",
      client: "m",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
    _0xae7609 = await bdy_0x45d61c.getbody(_0x4ed7b9);
    if (!_0xae7609) {
      return;
    }
  }
  let _0x5657ec = bdy_0x4a3fac(_0xae7609, _0x1603bc);
  return new Promise(async _0x93f685 => {
    $.dpost(_0x5657ec, async (_0x623c05, _0x2dd77a, _0x21be98) => {
      try {
        if (_0x623c05) {
          if (_0x2dd77a && typeof _0x2dd77a.statusCode != "undefined") {
            if (_0x2dd77a.statusCode == 493) {
              if (bdy_0x4c786f < 6) {
                bdy_0x4c786f++;
                await bdy_0x2ff2c7(_0x2cfb29);
                return;
              }
              console.log("ip可能被限制，过10分钟后再执行脚本\n");
              $.outFlag = true;
            }
          }
          console.log("" + $.toStr(_0x623c05, _0x623c05));
        } else {
          if (_0x21be98.includes("火爆")) {
            console.log(JSON.stringify(_0x21be98));
            $.hotFlag = true;
            return;
          }
          bdy_0x4c786f = 0;
          bdy_0x11458e(_0x2cfb29, _0x21be98);
        }
      } catch (_0x1c09ff) {
        console.log(_0x1c09ff, _0x2dd77a);
      } finally {
        _0x93f685();
      }
    });
  });
}
switch ($.type) {
  case "nb":
    const bdy_0x4b6a16 = {
      nb: nb
    };
    _0xf1f6le = bdy_0x4b6a16;
    break;
}
async function bdy_0x11458e(_0x10b593, _0x5d9f6e) {
  let _0x152957 = "";
  try {
    _0x152957 = JSON.parse(_0x5d9f6e);
  } catch (_0x4f01d0) {
    console.log(_0x10b593 + " 执行任务异常");
  }
  try {
    switch (_0x10b593) {
      case "atop_channel_interactive_info":
        if (_0x152957.success) {
          $.taskList = _0x152957.data?.["floorData"]?.["items"] || [];
        }
        break;
      case "endTask":
        if (_0x152957.success) {
          JSON.stringify(_0x152957.data.doTaskRewardsInfo.successRewards !== "{}") && console.log("任务完成：获得 " + _0x152957.data.doTaskRewardsInfo.successRewards[24][0].quantity + "汪贝🥰");
        } else {
          _0x152957.message.includes("火爆") ? (console.log(_0x152957.message), $.hotFlag = true) : console.log(_0x152957.message);
        }
        break;
      case "atop_channel_sign_calendar":
        if (_0x152957.success) {
          $.signstate = _0x152957.data.floorData.items[0].signStatus;
        }
        break;
      case "atop_channel_my_score":
        if (_0x152957.success) {
          console.log("\n汪贝余额：" + _0x152957.data.floorData.items[0].restScore);
        }
        break;
      case "atop_channel_sign_in":
        if (_0x152957.success) {
          if (_0x152957.data.rewards.length > 0) {
            for (let _0x8fd6ab of _0x152957.data.rewards) {
              console.log("签到获得：" + _0x8fd6ab.rewardDesc);
            }
          }
        }
        break;
      case "assit":
        if (_0x152957.success) {
          console.log("助力成功 ✔️");
          _0x152957.data.doTaskInfo.completionCnt === 5 && $.fullId.push($.itemId);
        } else {
          if (_0x152957.message.includes("感谢")) {
            console.log(_0x152957.message + " ❌");
            $.fullId.push($.itemId);
          } else {
            if (_0x152957.message.includes("已经助力")) {
              console.log(_0x152957.message + " ❌");
            } else {
              if (_0x152957.message.includes("上限")) {
                console.log(_0x152957.message + " ❌");
                $.nonum = true;
              } else {
                if (_0x152957.message.includes("火爆")) {
                  console.log(_0x152957.message + " ❌");
                  $.hotFlag = true;
                } else {
                  console.log(_0x152957.message + " ❌");
                }
              }
            }
          }
        }
        break;
      case "taskFinish":
      case "taskReceive":
      case "startTask":
        break;
      default:
        console.log(_0x10b593 + " -> " + _0x5d9f6e);
    }
    typeof _0x152957 == "object" && _0x152957.errorMessage && _0x152957.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0x1b7cdf) {
    console.log(_0x10b593 + " " + _0x1b7cdf);
  }
}
function bdy_0x4a3fac(_0xca77e4, _0xde7b9b = "POST") {
  let _0x1b9bde = "http://api.m.jd.com/";
  let _0x30258c = {
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/x-www-form-urlencoded",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    Cookie: bdy_0x388bcf,
    "User-Agent": $.UA
  };
  const _0x578dfe = {
    url: _0x1b9bde,
    method: _0xde7b9b,
    headers: _0x30258c,
    body: _0xca77e4,
    timeout: 30000
  };
  return _0x578dfe;
}
async function bdy_0x585c3a() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0x1ac772(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0x1ac772(_0x2cff58) {
  _0x2cff58 = _0x2cff58 || 32;
  let _0x357675 = "abcdef0123456789",
    _0x5d60e8 = _0x357675.length,
    _0x2cc2a7 = "";
  for (i = 0; i < _0x2cff58; i++) {
    _0x2cc2a7 += _0x357675.charAt(Math.floor(Math.random() * _0x5d60e8));
  }
  return _0x2cc2a7;
}
function bdy_0x26870c(_0x16f2f4) {
  if (typeof _0x16f2f4 == "string") {
    try {
      return JSON.parse(_0x16f2f4);
    } catch (_0x287f85) {
      console.log(_0x287f85);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function bdy_0x1d9aec() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x2689fb => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x3e2349 = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    $.shopactivityId == "" && delete _0x3e2349.activityId;
    let _0x396553 = {
      appId: "27004",
      functionId: "bindWithVender",
      body: _0x3e2349,
      appid: "shopmember_m_jd_com",
      clientVersion: "9.2.0",
      client: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x3e2349 = await dyy.getbody(_0x396553);
    const _0x57d248 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x388bcf,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x403ca9 = {
      url: "https://api.m.jd.com/client.action?" + _0x3e2349 + "&uuid=88888",
      headers: _0x57d248,
      timeout: 30000
    };
    $.dget(_0x403ca9, async (_0x1f6bcc, _0x489017, _0x47ddab) => {
      try {
        _0x47ddab = _0x47ddab && _0x47ddab.match(/jsonp_.*?\((.*?)\);/) && _0x47ddab.match(/jsonp_.*?\((.*?)\);/)[1] || _0x47ddab;
        let _0x598723 = $.toObj(_0x47ddab, _0x47ddab);
        if (_0x598723 && typeof _0x598723 == "object") {
          if (_0x598723 && _0x598723.success === true) {
            console.log("    " + _0x598723.message);
            $.errorJoinShop = _0x598723.message;
            if (_0x598723.result && _0x598723.result.giftInfo) {
              for (let _0x1aea1f of _0x598723.result.giftInfo.giftList) {
                console.log("入会获得:" + _0x1aea1f.discountString + _0x1aea1f.prizeName + _0x1aea1f.secondLineDesc);
              }
            }
          } else {
            _0x598723 && typeof _0x598723 == "object" && _0x598723.message ? ($.errorJoinShop = _0x598723.message, console.log("" + (_0x598723.message || ""))) : console.log(_0x47ddab);
          }
        } else {
          console.log(_0x47ddab);
        }
      } catch (_0x259e66) {
        $.logErr(_0x259e66, _0x489017);
      } finally {
        _0x2689fb();
      }
    });
  });
}
async function bdy_0x450865() {
  return new Promise(async _0x2af0c0 => {
    let _0x28f905 = {
      venderId: $.joinVenderId,
      payUpShop: true,
      queryVersion: "10.5.2",
      appid: "ef79a",
      needSecurity: true,
      bizId: "shop_view_app",
      channel: 406
    };
    let _0x397e48 = {
      appId: "ef79a",
      functionId: "getShopOpenCardInfo",
      body: _0x28f905,
      appid: "jd_shop_member",
      clientVersion: "9.2.0",
      client: "H5",
      user: $.UserName,
      code: 0,
      ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x28f905 = await dyy.getbody(_0x397e48);
    const _0x126be5 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x388bcf,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    const _0x30fa5d = {
      url: "https://api.m.jd.com/client.action?" + _0x28f905 + "&uuid=88888",
      headers: _0x126be5,
      timeout: 60000
    };
    $.get(_0x30fa5d, async (_0x450720, _0x216664, _0x23496e) => {
      try {
        _0x23496e = _0x23496e && _0x23496e.match(/jsonp_.*?\((.*?)\);/) && _0x23496e.match(/jsonp_.*?\((.*?)\);/)[1] || _0x23496e;
        let _0x5a4111 = $.toObj(_0x23496e, _0x23496e);
        _0x5a4111 && typeof _0x5a4111 == "object" ? _0x5a4111 && _0x5a4111.success == true && (console.log("去加入 -> " + (_0x5a4111.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x5a4111.result[0].interestsRuleList && _0x5a4111.result[0].interestsRuleList[0] && _0x5a4111.result[0].interestsRuleList[0].interestsInfo && _0x5a4111.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x23496e);
      } catch (_0x536ad4) {
        $.logErr(_0x536ad4, _0x216664);
      } finally {
        _0x2af0c0();
      }
    });
  });
}
function bdy_0x5d14b8(_0x33d0b1, _0x715b7d) {
  return Math.floor(Math.random() * (_0x715b7d - _0x33d0b1)) + _0x33d0b1;
}
function bdy_0x36f8a2(_0x462f5d = +new Date()) {
  var _0x51058b = new Date(_0x462f5d + 28800000);
  return _0x51058b.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function bdy_0x3df2ac() {
  let _0x2e4332 = {
    url: "https://src-dy-server-dmujhfwxmu.cn-hangzhou.fcapp.run/zwb",
    timeout: 30000
  };
  return new Promise(_0x573706 => {
    $.post(_0x2e4332, async (_0x28c376, _0xbe2c7e, _0x5e5886) => {
      try {
        if (!_0x28c376) {
          if (_0x5e5886) {
            _0x5e5886 = JSON.parse(_0x5e5886);
            if (_0x5e5886.code === 200) {
              bdy_0x5a6f7f = _0x5e5886.data;
            }
          }
        }
      } catch (_0x41babc) {} finally {
        _0x573706(bdy_0x5a6f7f);
      }
    });
  });
}
function bdy_0x4ab601() {
  return new Promise(_0x4e02e2 => {
    const _0x50389a = {
      Cookie: bdy_0x388bcf,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x7963d0 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x50389a,
      timeout: 10000
    };
    $.get(_0x7963d0, (_0x3a0e28, _0x1173b0, _0x5db2e3) => {
      try {
        if (_0x5db2e3) {
          _0x5db2e3 = JSON.parse(_0x5db2e3);
          if (!(_0x5db2e3.islogin === "1")) {
            _0x5db2e3.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x21eefe) {
        console.log(_0x21eefe);
      } finally {
        _0x4e02e2();
      }
    });
  });
}function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }