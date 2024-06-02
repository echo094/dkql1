/*
23 5,10 * * * jd_wanyiwan.js
*/

const $ = new Env('玩一玩_任务');
const bdy_0x10c26d = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x2536f9 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x34194d = require("./function/dylans"),
  bdy_0x37b5e7 = process.env.WYW_DBNUM ? process.env.WYW_DBNUM : "100";
let bdy_0x4883dd = "",
  bdy_0x2636e2 = {};
if (process.env.DY_PROXY) {
  try {
    require("https-proxy-agent");
    bdy_0x2636e2 = require("./function/proxy.js");
    $.dget = bdy_0x2636e2.intoRequest($.get.bind($));
    $.dpost = bdy_0x2636e2.intoRequest($.post.bind($));
  } catch {
    $.log("未安装https-proxy-agent依赖，无法启用代理");
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
let bdy_0x5b1bc7 = [],
  bdy_0x56650d = "",
  bdy_0x2d74de = 0;
if ($.isNode()) {
  Object.keys(bdy_0x10c26d).forEach(_0x56f7b7 => {
    bdy_0x5b1bc7.push(bdy_0x10c26d[_0x56f7b7]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x5b1bc7 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0xfb6259 => _0xfb6259.cookie)].filter(_0x459759 => !!_0x459759);
}
const bdy_0x4da0db = process.env.WYW_HELPTM ? process.env.WYW_HELPTM : "23",
  bdy_0x39cf5a = new Date().setHours(bdy_0x4da0db);
$.helpId = [];
$.fullId = [];
!(async () => {
  if (!bdy_0x5b1bc7[0]) {
    const _0x385f14 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x385f14);
    return;
  }
  console.log("当前版本：20240615");
  console.log("问题建议：https://t.me/dylan_jdpro");
  console.log("环境变量：\n    WYW_HELPTM='15' 几点后关闭助力");
  console.log("只做任务和助力");
  for (let _0x18bcea = 0; _0x18bcea < bdy_0x5b1bc7.length; _0x18bcea++) {
    bdy_0x56650d = bdy_0x5b1bc7[_0x18bcea];
    originCookie = bdy_0x5b1bc7[_0x18bcea];
    if (bdy_0x56650d) {
      $.UserName = decodeURIComponent(bdy_0x56650d.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x56650d.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x18bcea + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      $.isban = false;
      $.hasRisk = false;
      bdy_0x4883dd = bdy_0x37b5e7;
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      bdy_0x4f11a3();
      if (!$.isLogin) {
        const _0x242be5 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x242be5);
        if ($.isNode()) {
          await bdy_0x2536f9.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie");
        }
        continue;
      }
      $.index != 1 && bdy_0x2636e2.swip && (await bdy_0x2636e2.swip());
      await bdy_0x4c9c75();
      if ($.outFlag) {
        break;
      }
    }
  }
  Date.now() > bdy_0x39cf5a ? console.log("\n\n已设置" + bdy_0x4da0db + "点后关闭助力") : $.helpId.length > 1 && (console.log("\n\n开始内部助力..."), await bdy_0x16b532());
})().catch(_0xeaa073 => {
  return $.logErr(_0xeaa073);
}).finally(() => {
  return $.done();
});
async function bdy_0x16b532() {
  for (let _0x15f534 = 0; _0x15f534 < bdy_0x5b1bc7.length; _0x15f534++) {
    bdy_0x56650d = bdy_0x5b1bc7[_0x15f534];
    if (bdy_0x56650d) {
      $.UserName = decodeURIComponent(bdy_0x56650d.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x56650d.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x15f534 + 1;
      console.log("\n-------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
      bdy_0x4f11a3();
      $.nonum = false;
      $.hphotflag = false;
      if ($.fullId.length != 0) {
        $.helpId = $.helpId.filter(_0x44b1d6 => !$.fullId.includes(_0x44b1d6));
        $.fullId = [];
      }
      for (let _0x3b6c76 of $.helpId) {
        $.itemId = _0x3b6c76;
        console.log("去助力 --> " + $.itemId);
        await bdy_0x401cb8("wanyiwan_assist");
        if ($.nonum || $.hphotflag) {
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
async function bdy_0x4c9c75() {
  try {
    $.taskList = [];
    await bdy_0x401cb8("wanyiwan_home");
    await $.wait(i.limitTime * 1000 + 500, 10);
    $.signstatus != 1 ? (console.log("\n去签到..."), await bdy_0x401cb8("wanyiwan_sign")) : console.log("\n今日以签过!");
    console.log("\n去做任务...");
    for (let _0xcda88c of $.taskList) {
      $.itemId = 0;
      $.encryptAssignmentId = _0xcda88c.encryptAssignmentId;
      $.taskType = _0xcda88c.taskType;
      let _0x16a3f7 = _0xcda88c.maxTimes - _0xcda88c.finishTimes;
      if (_0xcda88c.status == 2) {
        console.log("领取 " + _0xcda88c.title + " 奖励...");
        $.endflag = false;
        for (let _0x11d7ae of Array(_0xcda88c.finishTimes)) {
          await bdy_0x401cb8("award");
          if ($.endflag) {
            break;
          }
          await $.wait(_0xcda88c.limitTime * 1000 + 500, 10);
        }
        continue;
      } else {
        if (_0xcda88c.title.includes("下单")) {
          console.log("下单任务跳过");
          continue;
        }
      }
      if (_0xcda88c.title.includes("邀请")) {
        $.helpId.push(_0xcda88c.taskDetail[0].itemId);
        continue;
      }
      console.log("去做 " + _0xcda88c.title);
      for (let _0x17175f = 0; _0x17175f < _0x16a3f7; _0x17175f++) {
        _0xcda88c.taskDetail && ($.itemId = _0xcda88c.taskDetail[_0x17175f].itemId);
        await bdy_0x401cb8("startTask");
        _0xcda88c.limitTime != 0 && (await $.wait(_0xcda88c.limitTime * 1000 + 500, 10), await bdy_0x401cb8("endTask"));
        await $.wait(parseInt(Math.random() * 500 + 500, 10));
        await bdy_0x401cb8("award");
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
      }
      await $.wait(parseInt(Math.random() * 500 + 1500, 10));
    }
    await $.wait(parseInt(Math.random() * 500 + 500, 10));
    await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
  } catch (_0xfa6e28) {
    console.log(_0xfa6e28);
  }
}
async function bdy_0x401cb8(_0x5ef0c1) {
  if ($.outFlag || $.isban) {
    return;
  }
  let _0x4efa4a = "",
    _0x127e88,
    _0x30afa4,
    _0x485815 = "post",
    _0xb46b6 = "https://api.m.jd.com/client.action",
    _0x46ecac = "signed_wh5";
  switch (_0x5ef0c1) {
    case "wanyiwan_sign":
      const _0x1ae562 = {
        version: 1
      };
      _0x4efa4a = _0x1ae562;
      _0x127e88 = "d12dd";
      _0x30afa4 = "wanyiwan_sign";
      break;
    case "wanyiwan_home":
      const _0x258df0 = {
        outsite: 0,
        firstCall: 1,
        version: 1,
        lbsSwitch: true
      };
      _0x4efa4a = _0x258df0;
      _0x127e88 = "c81ad";
      _0x30afa4 = "wanyiwan_home";
      break;
    case "apTaskList":
      _0xb46b6 = "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22%3A%22Fl1LmxG_f0poD7w1ycZqnw%22%7D&t=1715170975269&appid=activities_platform&client=android&clientVersion=6.24.0&loginType=2&loginWQBiz=wegame&h5st=null&build=22779&screen=393*873&networkType=wifi&eufv=1&cthr=1";
      _0x485815 = "get";
      break;
    case "startTask":
      const _0x8b4cfa = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 1,
        version: 1
      };
      _0x4efa4a = _0x8b4cfa;
      _0x127e88 = "89db2";
      _0x30afa4 = "wanyiwan_do_task";
      break;
    case "endTask":
      const _0x4ceeeb = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 0,
        version: 1
      };
      _0x4efa4a = _0x4ceeeb;
      _0x127e88 = "89db2";
      _0x30afa4 = "wanyiwan_do_task";
      break;
    case "award":
      const _0x4aac23 = {
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        version: 1
      };
      _0x4efa4a = _0x4aac23;
      _0x30afa4 = "wanyiwan_task_receive_award";
      break;
    case "wanyiwan_assist":
      const _0x1d079c = {
        inviteCode: $.itemId,
        version: 1
      };
      _0x4efa4a = _0x1d079c;
      _0x127e88 = "ba505";
      _0x30afa4 = "wanyiwan_assist";
      break;
    case "turnHappyHome":
      _0xb46b6 = "https://api.m.jd.com/api";
      const _0x3402e0 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x4efa4a = _0x3402e0;
      _0x46ecac = "activities_platform";
      _0x30afa4 = "turnHappyHome";
      break;
    case "turnHappyDouble":
      _0xb46b6 = "https://api.m.jd.com/api";
      _0x4efa4a = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ",
        turnNum: parseInt(bdy_0x4883dd)
      };
      _0x127e88 = "614f1";
      _0x46ecac = "activities_platform";
      _0x30afa4 = "turnHappyDouble";
      break;
    case "turnHappyReceive":
      _0xb46b6 = "https://api.m.jd.com/api";
      const _0x19dc86 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x4efa4a = _0x19dc86;
      _0x127e88 = "25fac";
      _0x46ecac = "activities_platform";
      _0x30afa4 = "turnHappyReceive";
      break;
    case "superRedBagHome":
      _0xb46b6 = "https://api.m.jd.com/api";
      const _0x52583d = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x4efa4a = _0x52583d;
      _0x127e88 = "5be1b";
      _0x46ecac = "activity_platform_se";
      _0x30afa4 = "superRedBagHome";
      break;
    case "superRedBagDraw":
      _0xb46b6 = "https://api.m.jd.com/api";
      const _0x482382 = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x4efa4a = _0x482382;
      _0x127e88 = "89cfe";
      _0x46ecac = "activity_platform_se";
      _0x30afa4 = "superRedBagDraw";
      break;
    default:
      console.log("错误" + _0x5ef0c1);
  }
  if (_0x127e88) {
    let _0xb933ed = {
      appId: _0x127e88,
      functionId: _0x30afa4,
      body: _0x4efa4a,
      appid: _0x46ecac,
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      t: Date.now(),
      ua: $.UA
    };
    _0x4efa4a = await bdy_0x34194d.getbody(_0xb933ed);
    if (!_0x4efa4a) {
      return;
    }
  } else {
    _0x4efa4a && (_0x4efa4a = "functionId=" + _0x30afa4 + "&body=" + encodeURIComponent(JSON.stringify(_0x4efa4a)) + "&t=" + Date.now() + "&appid=" + _0x46ecac + "&client=ios&" + $.UA.split(";")[2] + "&cthr=1&networkType=wifi");
  }
  let _0xdafaff = bdy_0x4155cb(_0xb46b6, _0x4efa4a);
  return new Promise(async _0x385742 => {
    $["d" + _0x485815](_0xdafaff, async (_0x2862c7, _0x4efae3, _0x4422a9) => {
      try {
        if (_0x2862c7) {
          if (_0x4efae3 && typeof _0x4efae3.statusCode != "undefined") {
            if (_0x4efae3.statusCode == 493) {
              if (bdy_0x2d74de < 6) {
                bdy_0x2d74de++;
                await bdy_0x401cb8(_0x5ef0c1);
                return;
              }
              console.log("ip可能被限制，过10分钟后再执行脚本\n");
              $.outFlag = true;
            }
          }
          console.log("" + $.toStr(_0x2862c7, _0x2862c7));
        } else {
          if (_0x4422a9.includes("doctype") && bdy_0x2d74de < 6) {
            bdy_0x2d74de++;
            await bdy_0x401cb8(_0x5ef0c1);
            return;
          }
          bdy_0x2d74de = 0;
          bdy_0x346b72(_0x5ef0c1, _0x4422a9);
        }
      } catch (_0x2aaa9f) {
        console.log(_0x2aaa9f, _0x4efae3);
      } finally {
        _0x385742();
      }
    });
  });
}
function bdy_0xf41294(_0x1fb4f3) {
  let _0x3f97ec = "";
  switch (type) {
    case [_0x3f97ec]:
      const _0x1daa00 = {
        ed: ed
      };
      _0xf1f6le = _0x1daa00;
      break;
    case [_0x3f97ec]:
      const _0xdd4c96 = {
        bd: bd
      };
      _0xf1f6lc = _0xdd4c96;
      break;
    case [_0x3f97ec]:
      const _0x4d8362 = {
        ed: ed
      };
      _0xf1f6lf = _0x4d8362;
      break;
    case [_0x3f97ec]:
      const _0x30a5a4 = {
        ed: ed
      };
      _0xf1f6lg = _0x30a5a4;
      break;
    case [_0x3f97ec]:
      const _0x44e70b = {
        ed: ed
      };
      _0xf1f6lv = _0x44e70b;
      break;
  }
}
async function bdy_0x346b72(_0x1cadf6, _0x4dad2d) {
  let _0x2ddae9 = "";
  try {
    _0x2ddae9 = JSON.parse(_0x4dad2d);
  } catch (_0x16cb6d) {
    console.log(_0x1cadf6 + " 执行任务异常");
  }
  try {
    switch (_0x1cadf6) {
      case "award":
        _0x2ddae9.code == 0 ? _0x2ddae9.data.bizCode == 0 ? console.log("任务完成，获得" + _0x2ddae9.data.result.rewardCount + "奖票 🎫") : $.endflag = true : console.log(_0x2ddae9.message);
        break;
      case "wanyiwan_sign":
        _0x2ddae9.code == 0 ? _0x2ddae9.data.bizCode == 0 ? console.log("签到成功,获得" + _0x2ddae9.data.result.getScore + "奖票 🎫") : console.log(_0x2ddae9.data.bizMsg) : console.log(_0x2ddae9.message);
        break;
      case "wanyiwan_assist":
        if (_0x2ddae9.code == 0) {
          if (_0x2ddae9.data.bizCode == 0) {
            console.log("✔️ 助力成功");
            $.nonum = true;
          } else {
            if (_0x2ddae9.data.bizMsg.includes("太多人") || _0x2ddae9.data.bizMsg.includes("重复")) {
              console.log("❌", _0x2ddae9.data.bizCode, _0x2ddae9.data.bizMsg);
              $.nonum = true;
            } else {
              if (_0x2ddae9.data.bizMsg.includes("已经完成")) {
                console.log("❌", _0x2ddae9.data.bizCode, _0x2ddae9.data.bizMsg);
                $.fullId.push($.itemId);
              } else {
                if (_0x2ddae9.data.bizMsg.includes("火爆")) {
                  console.log("❌", _0x2ddae9.data.bizCode, _0x2ddae9.data.bizMsg);
                  $.hphotflag = true;
                } else {
                  console.log("❌", _0x2ddae9.data.bizCode, _0x2ddae9.data.bizMsg);
                }
              }
            }
          }
        } else {
          console.log(_0x2ddae9.message);
          _0x2ddae9.message.includes("火爆") && ($.hphotflag = true);
        }
        break;
      case "wanyiwan_home":
        if (_0x2ddae9.code == 0) {
          _0x2ddae9.data.bizCode == 0 ? (_0x2ddae9.data.result.popWindows.length != 0 && console.log("获得新手奖励：", _0x2ddae9.data.result.popWindows[0].getScore, "奖票 🎫"), console.log("当前奖票总量：" + _0x2ddae9.data.result.score + " 🎫"), $.isLogin = _0x2ddae9.data?.["result"]?.["isLogin"], $.taskList = _0x2ddae9.data?.["result"]?.["taskBoard"] || [], $.signstatus = _0x2ddae9.data?.["result"]?.["signBoard"]?.["status"] || 0) : console.log(_0x2ddae9.data.bizMsg);
        } else {
          console.log(_0x2ddae9.message);
        }
        break;
      case "turnHappyHome":
        _0x2ddae9.success ? $.leftTime = _0x2ddae9.data.leftTime : console.log(_0x2ddae9.errMsg);
        break;
      case "turnHappyDouble":
        _0x2ddae9.success ? _0x2ddae9.data.rewardState == 1 ? (console.log("翻倍成功，获得 " + _0x2ddae9.data.rewardValue + "奖票 🎫"), $.dbsuc = true) : ($.dbsuc = false, console.log("叼了，翻倍失败！再接再厉！")) : (console.log(_0x2ddae9.errMsg), $.dbsuc = false);
        break;
      case "superRedBagHome":
        if (_0x2ddae9.success) {
          $.sceneStatus = _0x2ddae9.data.sceneStatus;
          $.nextLeftTime = _0x2ddae9.data.nextLeftTime;
        } else {
          console.log(_0x2ddae9.errMsg);
        }
        break;
      case "superRedBagDraw":
        if (_0x2ddae9.success) {
          $.shakeLeftTime = _0x2ddae9.data.shakeLeftTime;
          const {
            prizeDrawVo = ""
          } = _0x2ddae9.data;
          if (prizeDrawVo) {
            switch (prizeDrawVo.prizeType) {
              case 24:
                console.log("获得：" + prizeDrawVo.amount + "票奖 🎫");
                $.sucdraw++;
                break;
              case 1:
                console.log("获得:" + prizeDrawVo.prizeConfigName);
                break;
              default:
                console.log(prizeDrawVo);
                break;
            }
          } else {
            console.log(_0x4dad2d);
          }
        } else {
          console.log(_0x2ddae9.errMsg);
        }
        break;
      case "startTask":
      case "turnHappyReceive":
      case "endTask":
        break;
      default:
        console.log(_0x1cadf6 + " -> " + _0x4dad2d);
    }
    if (typeof _0x2ddae9 == "object") {
      _0x2ddae9.errorMessage && _0x2ddae9.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
    }
  } catch (_0x3b22f1) {
    console.log(_0x1cadf6 + " " + _0x3b22f1);
  }
}
function bdy_0x4155cb(_0x58f4d6, _0x5d3d74) {
  let _0xcc007c = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    Cookie: bdy_0x56650d,
    "User-Agent": $.UA
  };
  const _0x8a97e9 = {
    url: _0x58f4d6,
    headers: _0xcc007c,
    timeout: 30000,
    ...(_0x5d3d74 ? {
      body: _0x5d3d74
    } : {})
  };
  return _0x8a97e9;
}
async function bdy_0x4f11a3() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0x37dc6d(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0x37dc6d(_0x9522de) {
  _0x9522de = _0x9522de || 32;
  let _0xfd2eb8 = "abcdef0123456789",
    _0x56ce8a = _0xfd2eb8.length,
    _0x5713a8 = "";
  for (i = 0; i < _0x9522de; i++) {
    _0x5713a8 += _0xfd2eb8.charAt(Math.floor(Math.random() * _0x56ce8a));
  }
  return _0x5713a8;
}
function bdy_0x5597a9(_0x12576f) {
  if (typeof _0x12576f == "string") {
    try {
      return JSON.parse(_0x12576f);
    } catch (_0xcb1420) {
      console.log(_0xcb1420);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function bdy_0x561334() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x526abf => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x47f9f9 = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    $.shopactivityId == "" && delete _0x47f9f9.activityId;
    let _0xa22065 = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x47f9f9,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x47f9f9 = await dyy.getbody(_0xa22065);
    const _0x37706a = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x56650d,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x2feb2d = {
      url: "https://api.m.jd.com/client.action?" + _0x47f9f9 + "&uuid=88888",
      headers: _0x37706a,
      timeout: 30000
    };
    $.dget(_0x2feb2d, async (_0x2a298a, _0x184772, _0x41e0bc) => {
      try {
        _0x41e0bc = _0x41e0bc && _0x41e0bc.match(/jsonp_.*?\((.*?)\);/) && _0x41e0bc.match(/jsonp_.*?\((.*?)\);/)[1] || _0x41e0bc;
        let _0x44a27c = $.toObj(_0x41e0bc, _0x41e0bc);
        if (_0x44a27c && typeof _0x44a27c == "object") {
          if (_0x44a27c && _0x44a27c.success === true) {
            console.log("    " + _0x44a27c.message);
            $.errorJoinShop = _0x44a27c.message;
            if (_0x44a27c.result && _0x44a27c.result.giftInfo) {
              for (let _0x3cbf8d of _0x44a27c.result.giftInfo.giftList) {
                console.log("入会获得:" + _0x3cbf8d.discountString + _0x3cbf8d.prizeName + _0x3cbf8d.secondLineDesc);
              }
            }
          } else {
            _0x44a27c && typeof _0x44a27c == "object" && _0x44a27c.message ? ($.errorJoinShop = _0x44a27c.message, console.log("" + (_0x44a27c.message || ""))) : console.log(_0x41e0bc);
          }
        } else {
          console.log(_0x41e0bc);
        }
      } catch (_0x5e2611) {
        $.logErr(_0x5e2611, _0x184772);
      } finally {
        _0x526abf();
      }
    });
  });
}
async function bdy_0x2fca29() {
  return new Promise(async _0x69be6f => {
    let _0x4c890d = {
      venderId: $.joinVenderId,
      payUpShop: true,
      queryVersion: "10.5.2",
      appid: "ef79a",
      needSecurity: true,
      bizId: "shop_view_app",
      channel: 406
    };
    let _0x4f10d3 = {
      appId: "ef79a",
      fn: "getShopOpenCardInfo",
      body: _0x4c890d,
      apid: "jd_shop_member",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x4c890d = await dyy.getbody(_0x4f10d3);
    const _0x3eba02 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x56650d,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    const _0x2813de = {
      url: "https://api.m.jd.com/client.action?" + _0x4c890d + "&uuid=88888",
      headers: _0x3eba02,
      timeout: 60000
    };
    $.get(_0x2813de, async (_0xab6d99, _0x5f48cd, _0x452511) => {
      try {
        _0x452511 = _0x452511 && _0x452511.match(/jsonp_.*?\((.*?)\);/) && _0x452511.match(/jsonp_.*?\((.*?)\);/)[1] || _0x452511;
        let _0x133609 = $.toObj(_0x452511, _0x452511);
        _0x133609 && typeof _0x133609 == "object" ? _0x133609 && _0x133609.success == true && (console.log("去加入 -> " + (_0x133609.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x133609.result[0].interestsRuleList && _0x133609.result[0].interestsRuleList[0] && _0x133609.result[0].interestsRuleList[0].interestsInfo && _0x133609.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x452511);
      } catch (_0x5758ad) {
        $.logErr(_0x5758ad, _0x5f48cd);
      } finally {
        _0x69be6f();
      }
    });
  });
}
function bdy_0x4d13e4(_0x566b16, _0x5bd2b1) {
  return Math.floor(Math.random() * (_0x5bd2b1 - _0x566b16)) + _0x566b16;
}
function bdy_0x4d1107(_0x35d20b = +new Date()) {
  var _0x21a4f4 = new Date(_0x35d20b + 28800000);
  return _0x21a4f4.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function bdy_0x9b674() {
  return new Promise(_0x2b1ff5 => {
    const _0x524697 = {
      Cookie: bdy_0x56650d,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x2e13a2 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x524697,
      timeout: 10000
    };
    $.get(_0x2e13a2, (_0x4aa7ff, _0x279dd6, _0x3aa3ad) => {
      try {
        if (_0x3aa3ad) {
          _0x3aa3ad = JSON.parse(_0x3aa3ad);
          if (!(_0x3aa3ad.islogin === "1")) {
            _0x3aa3ad.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x5829c6) {
        console.log(_0x5829c6);
      } finally {
        _0x2b1ff5();
      }
    });
  });
}
function Env(o, t) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((r, i) => { s.call(this, t, (t, e, s) => { t ? i(t) : r(e) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.logLevels = { debug: 0, info: 1, warn: 2, error: 3 }, this.logLevelPrefixs = { debug: "[DEBUG] ", info: "[INFO] ", warn: "[WARN] ", error: "[ERROR] " }, this.logLevel = "info", this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } getEnv() { return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0 } isNode() { return "Node.js" === this.getEnv() } isQuanX() { return "Quantumult X" === this.getEnv() } isSurge() { return "Surge" === this.getEnv() } isLoon() { return "Loon" === this.getEnv() } isShadowrocket() { return "Shadowrocket" === this.getEnv() } isStash() { return "Stash" === this.getEnv() } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null, ...s) { try { return JSON.stringify(t, ...s) } catch { return e } } getjson(t, e) { let s = e; if (this.getdata(t)) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(r => { this.get({ url: t }, (t, e, s) => r(s)) }) } runScript(a, o) { return new Promise(r => { let t = this.getdata("@chavy_boxjs_userCfgs.httpapi"); t = t && t.replace(/\n/g, "").trim(); var e = (e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout")) ? +e : 20, [s, i] = (e = o && o.timeout ? o.timeout : e, t.split("@")); this.post({ url: `http://${i}/v1/scripting/evaluate`, body: { script_text: a, mock_type: "cron", timeout: e }, headers: { "X-Key": s, Accept: "*/*" }, timeout: e }, (t, e, s) => r(s)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; this.fs = this.fs || require("fs"), this.path = this.path || require("path"); var t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), r = !s && this.fs.existsSync(e); if (!s && !r) return {}; r = s ? t : e; try { return JSON.parse(this.fs.readFileSync(r)) } catch (t) { return {} } } writedata() { var t, e, s, r, i; this.isNode() && (this.fs = this.fs || require("fs"), this.path = this.path || require("path"), t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), r = !(s = this.fs.existsSync(t)) && this.fs.existsSync(e), i = JSON.stringify(this.data), !s && r ? this.fs.writeFileSync(e, i) : this.fs.writeFileSync(t, i)) } lodash_get(t, e, s) { let r = t; for (const t of e.replace(/\[(\d+)\]/g, ".$1").split(".")) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, r, e) { return Object(t) === t && ((r = Array.isArray(r) ? r : r.toString().match(/[^.[\]]+/g) || []).slice(0, -1).reduce((t, e, s) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(r[s + 1]) >> 0 == +r[s + 1] ? [] : {}, t)[r[r.length - 1]] = e), t } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { var [, s, r] = /^@(.*?)\.(.*?)$/.exec(t); if (s = s ? this.getval(s) : "") try { const t = JSON.parse(s); e = t ? this.lodash_get(t, r, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { var [, r, i] = /^@(.*?)\.(.*?)$/.exec(e), a = this.getval(r), a = r ? "null" === a ? null : a || "{}" : "{}"; try { const e = JSON.parse(a); this.lodash_set(e, i, t), s = this.setval(JSON.stringify(e), r) } catch (e) { this.lodash_set(a = {}, i, t), s = this.setval(JSON.stringify(a), r) } } else s = this.setval(t, e); return s } getval(t) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.read(t); case "Quantumult X": return $prefs.valueForKey(t); case "Node.js": return this.data = this.loaddata(), this.data[t]; default: return this.data && this.data[t] || null } } setval(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.write(t, e); case "Quantumult X": return $prefs.setValueForKey(t, e); case "Node.js": return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0; default: return this.data && this.data[e] || null } } initGotEnv(t) { this.got = this.got || require("got"), this.cktough = this.cktough || require("tough-cookie"), this.ckjar = this.ckjar || new this.cktough.CookieJar, t && (t.headers = t.headers || {}, t) && (t.headers = t.headers || {}, void 0 === t.headers.cookie) && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar) } tmout() { return new Promise((t, e) => { this.tmoutId = setTimeout(() => { this.prms.cancel(), e({ message: "timemout", response: "" }) }, 5e4) }) } get(t, a = () => { }) { switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t), this.prms = this.got(t).on("redirect", (t, e) => { try { var s; t.headers["set-cookie"] && ((s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString()) && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar) } catch (t) { this.logErr(t) } }), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } post(t, a = () => { }) { var e = t.method ? t.method.toLocaleLowerCase() : "post"; switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[e](t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": t.method = e, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t); var { url: s, ...r } = t; this.prms = this.got[e](s, r), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } time(t, e = null) { var s, r = { "M+": (e = e ? new Date(e) : new Date).getMonth() + 1, "d+": e.getDate(), "H+": e.getHours(), "m+": e.getMinutes(), "s+": e.getSeconds(), "q+": Math.floor((e.getMonth() + 3) / 3), S: e.getMilliseconds() }; for (s in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), r) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[s] : ("00" + r[s]).substr(("" + r[s]).length))); return t } queryStr(e) { let s = ""; for (const r in e) { let t = e[r]; null != t && "" !== t && ("object" == typeof t && (t = JSON.stringify(t)), s += `${r}=${t}&`) } return s = s.substring(0, s.length - 1) } msg(t = o, e = "", s = "", r = {}) { var i, a = r => { const { $open: t, $copy: e, $media: i, $mediaMime: a } = r; switch (typeof r) { case void 0: return r; case "string": switch (this.getEnv()) { case "Surge": case "Stash": default: return { url: r }; case "Loon": case "Shadowrocket": return r; case "Quantumult X": return { "open-url": r }; case "Node.js": return }case "object": switch (this.getEnv()) { case "Surge": case "Stash": case "Shadowrocket": default: var o = {}, s = r.openUrl || r.url || r["open-url"] || t; if (s && Object.assign(o, { action: "open-url", url: s }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(o, { action: "clipboard", text: s }), i) { let t, e, s; if (i.startsWith("http")) t = i; else if (i.startsWith("data:")) { const [r] = i.split(";"), [, a] = i.split(","); e = a, s = r.replace("data:", "") } else e = i, s = (t => { var e, s = { JVBERi0: "application/pdf", R0lGODdh: "image/gif", R0lGODlh: "image/gif", iVBORw0KGgo: "image/png", "/9j/": "image/jpg" }; for (e in s) if (0 === t.indexOf(e)) return s[e]; return null })(i); Object.assign(o, { "media-url": t, "media-base64": e, "media-base64-mime": a ?? s }) } return Object.assign(o, { "auto-dismiss": r["auto-dismiss"], sound: r.sound }), o; case "Loon": { const e = {}; (s = r.openUrl || r.url || r["open-url"] || t) && Object.assign(e, { openUrl: s }); var n = r.mediaUrl || r["media-url"]; return (n = i?.startsWith("http") ? i : n) && Object.assign(e, { mediaUrl: n }), console.log(JSON.stringify(e)), e } case "Quantumult X": { const a = {}; (o = r["open-url"] || r.url || r.openUrl || t) && Object.assign(a, { "open-url": o }); n = r["media-url"] || r.mediaUrl; return (n = i?.startsWith("http") ? i : n) && Object.assign(a, { "media-url": n }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(a, { "update-pasteboard": s }), console.log(JSON.stringify(a)), a } case "Node.js": return }default: return } }; if (!this.isMute) switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: $notification.post(t, e, s, a(r)); break; case "Quantumult X": $notify(t, e, s, a(r)); break; case "Node.js": }this.isMuteLog || ((i = ["", "==============📣系统通知📣=============="]).push(t), e && i.push(e), s && i.push(s), console.log(i.join("\n")), this.logs = this.logs.concat(i)) } debug(...t) { this.logLevels[this.logLevel] <= this.logLevels.debug && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.debug + t.map(t => t ?? String(t)).join(this.logSeparator))) } info(...t) { this.logLevels[this.logLevel] <= this.logLevels.info && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.info + t.map(t => t ?? String(t)).join(this.logSeparator))) } warn(...t) { this.logLevels[this.logLevel] <= this.logLevels.warn && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.warn + t.map(t => t ?? String(t)).join(this.logSeparator))) } error(...t) { this.logLevels[this.logLevel] <= this.logLevels.error && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.error + t.map(t => t ?? String(t)).join(this.logSeparator))) } log(...t) { 0 < t.length && (this.logs = [...this.logs, ...t]), console.log(t.map(t => t ?? String(t)).join(this.logSeparator)) } logErr(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: this.log("", `❗️${this.name}, 错误!`, t); break; case "Node.js": this.log("", `❗️${this.name}, 错误!`, void 0 !== t.message ? t.message : t) } } wait(e) { return new Promise(t => setTimeout(t, e)) } done(t = {}) { var e = ((new Date).getTime() - this.startTime) / 1e3; switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: $done(t); break; case "Node.js": process.exit(1) } } }(o, t) }