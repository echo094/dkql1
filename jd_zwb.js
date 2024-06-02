/*
22 13s * * * jd_zwb.js
*/

const $ = new Env('做任务赚汪贝');
const bdy_0x378ffa = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x768a09 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x22090d = require("./function/dylano");
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
let bdy_0x1d9d24 = [],
  bdy_0x2fe55f = "",
  bdy_0x46d4d0 = 0,
  bdy_0x45fc75 = [""],
  bdy_0x321d8a = [],
  bdy_0x4b89dc = [],
  bdy_0x253417 = "";
if ($.isNode()) {
  Object.keys(bdy_0x378ffa).forEach(_0x4f1afd => {
    bdy_0x1d9d24.push(bdy_0x378ffa[_0x4f1afd]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x1d9d24 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x3848ad => _0x3848ad.cookie)].filter(_0x18ebab => !!_0x18ebab);
}
$.helpId = [];
$.fullId = [];
!(async () => {
  if (!bdy_0x1d9d24[0]) {
    const _0x29dc85 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x29dc85);
    return;
  }
  console.log("当前版本：20240510");
  console.log("TG频道：https://t.me/dylan_jdpro");
  bdy_0x4b89dc = bdy_0x321d8a.length != 0 ? bdy_0x321d8a : bdy_0x45fc75;
  bdy_0x253417 = bdy_0x4b89dc[bdy_0x1d3992(0, bdy_0x4b89dc.length)];
  $.shareUuid = bdy_0x253417;
  for (let _0x4859b8 = 0; _0x4859b8 < bdy_0x1d9d24.length; _0x4859b8++) {
    bdy_0x2fe55f = bdy_0x1d9d24[_0x4859b8];
    originCookie = bdy_0x1d9d24[_0x4859b8];
    if (bdy_0x2fe55f) {
      $.UserName = decodeURIComponent(bdy_0x2fe55f.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x2fe55f.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x4859b8 + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      bdy_0x62ff59();
      await bdy_0x3c418b();
      if (!$.isLogin) {
        const _0x54ca34 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x54ca34);
        $.isNode() && (await bdy_0x768a09.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      await bdy_0x4ff907();
    }
  }
  console.log("\n开始内部助力...");
  await bdy_0x2d5def();
})().catch(_0x1b149a => {
  return $.logErr(_0x1b149a);
}).finally(() => {
  return $.done();
});
async function bdy_0x4ff907() {
  try {
    await bdy_0xb5ab69("atop_channel_sign_calendar");
    $.signstate == 0 && (console.log("去签到..."), await bdy_0xb5ab69("atop_channel_sign_in"));
    await bdy_0xb5ab69("atop_channel_interactive_info");
    for (let _0x124b25 of $.taskList) {
      if (_0x124b25.taskStatus == 1) {
        console.log(_0x124b25.assignmentName + "---已完成");
        continue;
      }
      let _0x213c6e = _0x124b25.ext,
        _0x21ace8 = _0x124b25.assignmentTimesLimit - _0x124b25.completionCnt;
      $.aType = _0x124b25.assignmentType;
      $.enId = _0x124b25.encryptAssignmentId;
      $.aType === 2 && $.helpId.push(_0x213c6e[_0x213c6e.extraType].itemId || "");
      console.log("" + _0x124b25.assignmentName);
      for (let _0x226fa7 = 0; _0x226fa7 < _0x21ace8; _0x226fa7++) {
        $.itemId = _0x213c6e[_0x213c6e.extraType].length > 0 ? _0x213c6e[_0x213c6e.extraType][_0x226fa7].itemId : "";
        if ($.itemId == "") {
          continue;
        }
        _0x213c6e.waitDuration && (await bdy_0xb5ab69("startTask"), await $.wait(parseInt(Math.random() * 1000 + _0x213c6e.waitDuration * 1000, 10)));
        await bdy_0xb5ab69("endTask");
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
      }
    }
    await bdy_0xb5ab69("atop_channel_my_score");
    await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
  } catch (_0x4e52f0) {
    console.log(_0x4e52f0);
  }
}
async function bdy_0x2d5def() {
  for (let _0x42be13 = 0; _0x42be13 < bdy_0x1d9d24.length; _0x42be13++) {
    bdy_0x2fe55f = bdy_0x1d9d24[_0x42be13];
    if (bdy_0x2fe55f) {
      $.UserName = decodeURIComponent(bdy_0x2fe55f.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x2fe55f.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x42be13 + 1;
      console.log("\n-------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
      bdy_0x62ff59();
      $.nonum = false;
      $.fullId.length != 0 && ($.helpId = $.helpId.filter(_0x5b1930 => !$.fullId.includes(_0x5b1930)), $.fullId = []);
      for (let _0x2a1402 of $.helpId) {
        $.itemId = _0x2a1402;
        console.log("去助力 --> " + $.itemId);
        await bdy_0xb5ab69("assit");
        if ($.nonum) {
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
async function bdy_0xb5ab69(_0x343242) {
  if ($.outFlag) {
    return;
  }
  let _0x17e8cc = "",
    _0x3efbb6,
    _0x458151,
    _0x591bff = "POST";
  switch (_0x343242) {
    case "atop_channel_interactive_info":
      const _0x2cba37 = {
        bizCode: "cn_retail_jdsupermarket",
        scenario: "sign",
        lat: 0,
        lng: 0,
        babelChannel: "ttt1",
        isJdApp: "1",
        isWx: "0"
      };
      _0x17e8cc = _0x2cba37;
      _0x3efbb6 = "33c74";
      _0x458151 = "atop_channel_interactive_info";
      break;
    case "atop_cart_add":
      const _0x223f53 = {
        skuId: "100073504826",
        num: 1
      };
      const _0x300241 = {
        bizCode: "cn_retail_jdsupermarket",
        scenario: "sign",
        skuItems: [_0x223f53],
        onlyCurrentCount: 1,
        lat: 0,
        lng: 0,
        babelChannel: "ttt1",
        isJdApp: "1",
        isWx: "0"
      };
      _0x17e8cc = _0x300241;
      _0x3efbb6 = "653d8";
      _0x458151 = "atop_cart_add";
      break;
    case "startTask":
      const _0x5dd8f6 = {
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
      _0x17e8cc = _0x5dd8f6;
      _0x3efbb6 = "51113";
      _0x458151 = "atop_channel_complete_task";
      break;
    case "endTask":
      const _0x5188ca = {
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
      _0x17e8cc = _0x5188ca;
      _0x3efbb6 = "51113";
      _0x458151 = "atop_channel_complete_task";
      break;
    case "assit":
      const _0x2177df = {
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
      _0x17e8cc = _0x2177df;
      _0x3efbb6 = "51113";
      _0x458151 = "atop_channel_complete_task";
      break;
    case "atop_channel_sign_calendar":
      const _0x4364d6 = {
        bizCode: "cn_retail_jdsupermarket",
        scenario: "sign",
        babelChannel: "ttt1",
        isJdApp: "1",
        isWx: "0"
      };
      _0x17e8cc = _0x4364d6;
      _0x3efbb6 = "7edec";
      _0x458151 = "atop_channel_sign_calendar";
      break;
    case "atop_channel_my_score":
      const _0x1e9221 = {
        bizCode: "cn_retail_jdsupermarket",
        scenario: "sign",
        babelChannel: "ttt1",
        isJdApp: "1",
        isWx: "0"
      };
      _0x17e8cc = _0x1e9221;
      _0x3efbb6 = "a7c04";
      _0x458151 = "atop_channel_my_score";
      break;
    case "atop_channel_sign_in":
      const _0x2b78ba = {
        signToken: "23opMasjC83Kpkd7yuSBtKK5MqjR",
        channelFollowStatus: 1,
        bizCode: "cn_retail_jdsupermarket",
        scenario: "sign",
        babelChannel: "ttt1",
        isJdApp: "1",
        isWx: "0"
      };
      _0x17e8cc = _0x2b78ba;
      _0x3efbb6 = "b8fc7";
      _0x458151 = "atop_channel_sign_in";
      break;
    default:
      console.log("错误" + _0x343242);
  }
  if (_0x3efbb6) {
    let _0x1f0ed6 = {
      appId: _0x3efbb6,
      fn: _0x458151,
      body: _0x17e8cc,
      apid: "jd-super-market",
      ver: $.UA.split(";")[2],
      cl: "m",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
    _0x17e8cc = await bdy_0x22090d.getbody(_0x1f0ed6);
    if (!_0x17e8cc) {
      return;
    }
  }
  let _0x376f03 = bdy_0x2a231b(_0x17e8cc, _0x591bff);
  return new Promise(async _0x461d84 => {
    $.dpost(_0x376f03, async (_0x1e869d, _0x2d75fe, _0x54435a) => {
      try {
        if (_0x1e869d) {
          if (_0x2d75fe && typeof _0x2d75fe.statusCode != "undefined") {
            if (_0x2d75fe.statusCode == 493) {
              if (bdy_0x46d4d0 < 6) {
                bdy_0x46d4d0++;
                await bdy_0xb5ab69(_0x343242);
                return;
              }
              console.log("ip可能被限制，过10分钟后再执行脚本\n");
              $.outFlag = true;
            }
          }
          console.log("" + $.toStr(_0x1e869d, _0x1e869d));
        } else {
          if (_0x54435a.includes("doctype") && bdy_0x46d4d0 < 6) {
            bdy_0x46d4d0++;
            await bdy_0xb5ab69(_0x343242);
            return;
          }
          bdy_0x46d4d0 = 0;
          bdy_0x4f078e(_0x343242, _0x54435a);
        }
      } catch (_0x49c5d9) {
        console.log(_0x49c5d9, _0x2d75fe);
      } finally {
        _0x461d84();
      }
    });
  });
}
switch ($.type) {
  case "nb":
    const bdy_0xe67e25 = {
      nb: nb
    };
    _0xf1f6le = bdy_0xe67e25;
    break;
}
async function bdy_0x4f078e(_0x492bd1, _0x29c489) {
  let _0x32a77c = "";
  try {
    _0x32a77c = JSON.parse(_0x29c489);
  } catch (_0x27b926) {
    console.log(_0x492bd1 + " 执行任务异常");
  }
  try {
    switch (_0x492bd1) {
      case "atop_channel_interactive_info":
        if (_0x32a77c.success) {
          $.taskList = _0x32a77c.data?.["floorData"]?.["items"] || [];
        }
        break;
      case "endTask":
        if (_0x32a77c.data.subCode == 0) {
          JSON.stringify(_0x32a77c.data.doTaskRewardsInfo.successRewards !== "{}") && console.log("任务完成：获得 " + _0x32a77c.data.doTaskRewardsInfo.successRewards[24][0].quantity + "汪贝🥰");
        }
        break;
      case "atop_channel_sign_calendar":
        if (_0x32a77c.success) {
          $.signstate = _0x32a77c.data.floorData.items[0].signStatus;
        }
        break;
      case "atop_channel_my_score":
        if (_0x32a77c.success) {
          console.log("\n汪贝余额：" + _0x32a77c.data.floorData.items[0].restScore);
        }
        break;
      case "atop_channel_sign_in":
        if (_0x32a77c.success) {
          if (_0x32a77c.data.rewards.length > 0) {
            for (let _0x1c78f2 of _0x32a77c.data.rewards) {
              console.log("签到获得：" + _0x1c78f2.rewardDesc);
            }
          }
        }
        break;
      case "assit":
        if (_0x32a77c.success) {
          console.log("助力成功 ✔️");
          _0x32a77c.data.doTaskInfo.completionCnt === 5 && $.fullId.push($.itemId);
        } else {
          if (_0x32a77c.message.includes("已经助力")) {
            console.log(_0x32a77c.message + " ❌");
            $.fullId.push($.itemId);
          } else {
            _0x32a77c.message.includes("上限") ? (console.log(_0x32a77c.message + " ❌"), $.nonum = true) : console.log(_0x32a77c.message + " ❌");
          }
        }
        break;
      case "taskFinish":
      case "taskReceive":
      case "startTask":
        break;
      default:
        console.log(_0x492bd1 + " -> " + _0x29c489);
    }
    typeof _0x32a77c == "object" && _0x32a77c.errorMessage && _0x32a77c.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0x2d0122) {
    console.log(_0x492bd1 + " " + _0x2d0122);
  }
}
function bdy_0x2a231b(_0x33ee2a, _0x48ad45 = "POST") {
  let _0x486921 = "https://api.m.jd.com/";
  const _0x1df823 = {
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/x-www-form-urlencoded",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    Cookie: bdy_0x2fe55f,
    "User-Agent": $.UA
  };
  const _0x520512 = {
    url: _0x486921,
    method: _0x48ad45,
    headers: _0x1df823,
    body: _0x33ee2a,
    timeout: 30000
  };
  return _0x520512;
}
async function bdy_0x62ff59() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0x2fe6a3(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0x2fe6a3(_0xef4abd) {
  _0xef4abd = _0xef4abd || 32;
  let _0x4c6684 = "abcdef0123456789",
    _0x37bc87 = _0x4c6684.length,
    _0x221cee = "";
  for (i = 0; i < _0xef4abd; i++) {
    _0x221cee += _0x4c6684.charAt(Math.floor(Math.random() * _0x37bc87));
  }
  return _0x221cee;
}
function bdy_0x59655c(_0x4f68e2) {
  if (typeof _0x4f68e2 == "string") {
    try {
      return JSON.parse(_0x4f68e2);
    } catch (_0x2e2b5f) {
      console.log(_0x2e2b5f);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function bdy_0x37a11f() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x23aa6d => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    const _0x5c6eb5 = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    let _0xa12a3d = _0x5c6eb5;
    $.shopactivityId == "" && delete _0xa12a3d.activityId;
    const _0xd4b81b = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0xa12a3d,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0xa12a3d = await dyy.getbody(_0xd4b81b);
    const _0x36ff87 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x2fe55f,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x3adb71 = {
      url: "https://api.m.jd.com/client.action?" + _0xa12a3d + "&uuid=88888",
      headers: _0x36ff87,
      timeout: 30000
    };
    $.dget(_0x3adb71, async (_0x3b4389, _0x113a48, _0x1a2768) => {
      try {
        _0x1a2768 = _0x1a2768 && _0x1a2768.match(/jsonp_.*?\((.*?)\);/) && _0x1a2768.match(/jsonp_.*?\((.*?)\);/)[1] || _0x1a2768;
        let _0x35cc07 = $.toObj(_0x1a2768, _0x1a2768);
        if (_0x35cc07 && typeof _0x35cc07 == "object") {
          if (_0x35cc07 && _0x35cc07.success === true) {
            console.log("    " + _0x35cc07.message);
            $.errorJoinShop = _0x35cc07.message;
            if (_0x35cc07.result && _0x35cc07.result.giftInfo) {
              for (let _0x4e24f7 of _0x35cc07.result.giftInfo.giftList) {
                console.log("入会获得:" + _0x4e24f7.discountString + _0x4e24f7.prizeName + _0x4e24f7.secondLineDesc);
              }
            }
          } else {
            _0x35cc07 && typeof _0x35cc07 == "object" && _0x35cc07.message ? ($.errorJoinShop = _0x35cc07.message, console.log("" + (_0x35cc07.message || ""))) : console.log(_0x1a2768);
          }
        } else {
          console.log(_0x1a2768);
        }
      } catch (_0x20a205) {
        $.logErr(_0x20a205, _0x113a48);
      } finally {
        _0x23aa6d();
      }
    });
  });
}
async function bdy_0x2b9678() {
  return new Promise(async _0x5b099d => {
    const _0x13f3b1 = {
      venderId: $.joinVenderId,
      payUpShop: true,
      queryVersion: "10.5.2",
      appid: "ef79a",
      needSecurity: true,
      bizId: "shop_view_app",
      channel: 406
    };
    let _0x178dee = _0x13f3b1;
    const _0xaf3ce5 = {
      appId: "ef79a",
      fn: "getShopOpenCardInfo",
      body: _0x178dee,
      apid: "jd_shop_member",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x178dee = await dyy.getbody(_0xaf3ce5);
    const _0x5715cc = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x2fe55f,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    const _0xd57b54 = {
      url: "https://api.m.jd.com/client.action?" + _0x178dee + "&uuid=88888",
      headers: _0x5715cc,
      timeout: 60000
    };
    $.get(_0xd57b54, async (_0x565409, _0x5264c9, _0x28d5d3) => {
      try {
        _0x28d5d3 = _0x28d5d3 && _0x28d5d3.match(/jsonp_.*?\((.*?)\);/) && _0x28d5d3.match(/jsonp_.*?\((.*?)\);/)[1] || _0x28d5d3;
        let _0x4bc650 = $.toObj(_0x28d5d3, _0x28d5d3);
        _0x4bc650 && typeof _0x4bc650 == "object" ? _0x4bc650 && _0x4bc650.success == true && (console.log("去加入 -> " + (_0x4bc650.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x4bc650.result[0].interestsRuleList && _0x4bc650.result[0].interestsRuleList[0] && _0x4bc650.result[0].interestsRuleList[0].interestsInfo && _0x4bc650.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x28d5d3);
      } catch (_0x5068d1) {
        $.logErr(_0x5068d1, _0x5264c9);
      } finally {
        _0x5b099d();
      }
    });
  });
}
function bdy_0x1d3992(_0x3b690b, _0x4f196e) {
  return Math.floor(Math.random() * (_0x4f196e - _0x3b690b)) + _0x3b690b;
}
function bdy_0x2c3eb4(_0x596b7c = +new Date()) {
  var _0x2f1f89 = new Date(_0x596b7c + 28800000);
  return _0x2f1f89.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function bdy_0x2f177c() {
  const _0x3d11d8 = {
    url: "https://src-dy-server-dmujhfwxmu.cn-hangzhou.fcapp.run/zwb",
    timeout: 30000
  };
  return new Promise(_0x4c0b0f => {
    $.post(_0x3d11d8, async (_0x5d6962, _0x1a218d, _0x55f727) => {
      try {
        if (!_0x5d6962) {
          if (_0x55f727) {
            _0x55f727 = JSON.parse(_0x55f727);
            if (_0x55f727.code === 200) {
              bdy_0x321d8a = _0x55f727.data;
            }
          }
        }
      } catch (_0x41e1b8) {} finally {
        _0x4c0b0f(bdy_0x321d8a);
      }
    });
  });
}
function bdy_0x3c418b() {
  return new Promise(_0x259ba5 => {
    const _0x589d44 = {
      Cookie: bdy_0x2fe55f,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x482f4c = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x589d44,
      timeout: 10000
    };
    $.get(_0x482f4c, (_0x3a3a7e, _0x5114ae, _0x4ab678) => {
      try {
        if (_0x4ab678) {
          _0x4ab678 = JSON.parse(_0x4ab678);
          if (!(_0x4ab678.islogin === "1")) {
            _0x4ab678.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x342cca) {
        console.log(_0x342cca);
      } finally {
        _0x259ba5();
      }
    });
  });
}
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }