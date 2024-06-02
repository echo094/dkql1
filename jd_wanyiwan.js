/*
1 5,10,15 * * * jd_wanyiwan.js
*/

const $ = new Env('新版玩一玩');
const bdy_0x388c14 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x497a5b = $.isNode() ? require("./sendNotify") : "",
  bdy_0x1d3439 = require("./function/dylans"),
  bdy_0x122718 = require("./function/dylib.js"),
  bdy_0x39a3da = process.env.WYW_DBNUM ? process.env.WYW_DBNUM : "50";
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
let bdy_0x5c82c6 = [],
  bdy_0x19d5bd = "",
  bdy_0xed44c = 0;
if ($.isNode()) {
  Object.keys(bdy_0x388c14).forEach(_0x1374cc => {
    bdy_0x5c82c6.push(bdy_0x388c14[_0x1374cc]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x5c82c6 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x1921c9 => _0x1921c9.cookie)].filter(_0x1cf969 => !!_0x1cf969);
}
const bdy_0x477adf = process.env.WYW_HELPTM ? process.env.WYW_HELPTM : "23",
  bdy_0x1feb42 = new Date().setHours(bdy_0x477adf);
$.helpId = [];
$.fullId = [];
!(async () => {
  if (!bdy_0x5c82c6[0]) {
    const _0xd3b8ad = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0xd3b8ad);
    return;
  }
  console.log("当前版本：20240524");
  console.log("问题建议：https://t.me/dylan_jdpro");
  console.log("环境变量：\n    WYW_DBNUM='100' 翻翻乐投注多少奖票，默认50\n    WYW_HELPTM='15' 几点后关闭助力");
  console.log("玩法介绍\n活动期间，用户可以使用自己的奖票参与翻翻乐玩法， 翻成功则参与奖票翻倍，翻失败则清零当此参与的奖票。\n活动规则:\n1.活动时间：2024年5月17日 12:00:00—2024年8月31日23:59:59\n2.活动入口： APP我的——更多游戏——玩一玩\n3.用户可根据页面提示，用自己账户内的奖票作为初始奖票参与翻翻乐玩法。点击弹窗开启翻倍后，即代表活动开始，活动将扣减用户的参与奖票的数量。若翻倍成功，则参与的奖票数量翻倍，用户可以选择直接领走奖励或继续参与活动；若翻倍失败，则用户参与的奖票将清零，不予返还。 \n4.翻翻乐每日有参与次数的上限，活动将于0点刷新参与进度。以用户上一次开始参与翻倍的时间计算，每30分钟为一个完整场次，30分钟后上一场次过期，用户可开启新场次，即活动场次间有30分钟的冷却期，冷却期内不可参与。(特殊情况：若开启的时间为23：30以后的活动场次，将在第二日0点到期并开启新场次，请合理安排参与时间)。\n5.奖励金额以开始参与翻倍时间计算，有效期为30分钟（特殊情况：若开启翻倍的时间为23：30以后，则该奖励的有效期为至当日24点），翻倍奖励需在当前场次的有效期内手动领取，过期作废。 \n6.翻翻乐活动点击“我的奖励”按钮可查看翻翻乐活动中用户实际获取到的奖票奖励。");
  for (let _0x505037 = 0; _0x505037 < bdy_0x5c82c6.length; _0x505037++) {
    bdy_0x19d5bd = bdy_0x5c82c6[_0x505037];
    originCookie = bdy_0x5c82c6[_0x505037];
    if (bdy_0x19d5bd) {
      $.UserName = decodeURIComponent(bdy_0x19d5bd.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x19d5bd.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x505037 + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      $.isban = false;
      $.hasRisk = false;
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      bdy_0x104cb7();
      await bdy_0xde8b50();
      if (!$.isLogin) {
        const _0x4d69a8 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x4d69a8);
        $.isNode() && (await bdy_0x497a5b.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      await bdy_0x4b58a0();
      if ($.outFlag) {
        break;
      }
    }
  }
  Date.now() > bdy_0x1feb42 ? console.log("\n\n已设置" + bdy_0x477adf + "点后关闭助力") : $.helpId.length > 1 && (console.log("\n\n开始内部助力..."), await bdy_0x340ce1());
})().catch(_0x27b5d8 => {
  return $.logErr(_0x27b5d8);
}).finally(() => {
  return $.done();
});
async function bdy_0x340ce1() {
  for (let _0x29af14 = 0; _0x29af14 < bdy_0x5c82c6.length; _0x29af14++) {
    bdy_0x19d5bd = bdy_0x5c82c6[_0x29af14];
    if (bdy_0x19d5bd) {
      $.UserName = decodeURIComponent(bdy_0x19d5bd.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x19d5bd.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x29af14 + 1;
      console.log("\n-------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
      bdy_0x104cb7();
      $.nonum = false;
      $.hphotflag = false;
      $.fullId.length != 0 && ($.helpId = $.helpId.filter(_0x3915c9 => !$.fullId.includes(_0x3915c9)), $.fullId = []);
      for (let _0x4a02f4 of $.helpId) {
        $.itemId = _0x4a02f4;
        console.log("去助力 --> " + $.itemId);
        await bdy_0x1b31ca("wanyiwan_assist");
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
async function bdy_0x4b58a0() {
  try {
    $.taskList = [];
    await bdy_0x1b31ca("wanyiwan_home");
    $.signstatus != 1 ? (console.log("\n去签到..."), await bdy_0x1b31ca("wanyiwan_sign")) : console.log("\n今日以签过!");
    console.log("\n去做任务...");
    for (let _0x545a87 of $.taskList) {
      $.itemId = 0;
      $.encryptAssignmentId = _0x545a87.encryptAssignmentId;
      $.taskType = _0x545a87.taskType;
      let _0x3d3642 = _0x545a87.maxTimes - _0x545a87.finishTimes;
      if (_0x545a87.status == 3) {
        console.log(_0x545a87.title + "---已完成");
        continue;
      } else {
        if (_0x545a87.status == 2) {
          console.log("领取 " + _0x545a87.title + " 奖励...");
          await bdy_0x1b31ca("award");
          continue;
        } else {
          if (_0x545a87.title.includes("下单")) {
            console.log("下单任务跳过");
            continue;
          }
        }
      }
      if (_0x545a87.title.includes("邀请")) {
        $.helpId.push(_0x545a87.taskDetail[0].itemId);
        continue;
      }
      console.log("去做 " + _0x545a87.title);
      for (let _0x36468c = 0; _0x36468c < _0x3d3642; _0x36468c++) {
        _0x545a87.taskDetail && ($.itemId = _0x545a87.taskDetail[_0x36468c].itemId);
        await bdy_0x1b31ca("startTask");
        _0x545a87.limitTime != 0 && (await $.wait(_0x545a87.limitTime * 1000 + 500, 10), await bdy_0x1b31ca("endTask"));
        await $.wait(parseInt(Math.random() * 500 + 500, 10));
        await bdy_0x1b31ca("award");
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
      }
      await $.wait(parseInt(Math.random() * 500 + 1500, 10));
    }
    await $.wait(parseInt(Math.random() * 500 + 500, 10));
    await bdy_0x1b31ca("turnHappyHome");
    $.leftTime == 0 ? (console.log("\n去翻翻乐(投注" + bdy_0x39a3da + "奖票)..."), $.dbsuc = false, await bdy_0x1b31ca("turnHappyDouble"), $.dbsuc && (await bdy_0x1b31ca("turnHappyReceive"))) : console.log("\n" + bdy_0x122718.SecToTime(parseInt($.leftTime / 1000)) + "后可翻翻乐");
    await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
  } catch (_0x158b0e) {
    console.log(_0x158b0e);
  }
}
async function bdy_0x1b31ca(_0x303ac1) {
  if ($.outFlag || $.isban) {
    return;
  }
  let _0x258bdc = "",
    _0x4a7b7d,
    _0x3dde91,
    _0x51d6c1 = "post",
    _0x2593fd = "https://api.m.jd.com/client.action",
    _0x4b256c = "signed_wh5";
  switch (_0x303ac1) {
    case "wanyiwan_sign":
      const _0x104794 = {
        version: 1
      };
      _0x258bdc = _0x104794;
      _0x4a7b7d = "d12dd";
      _0x3dde91 = "wanyiwan_sign";
      break;
    case "wanyiwan_home":
      const _0x2088ad = {
        outsite: 0,
        firstCall: 1,
        version: 1,
        lbsSwitch: true
      };
      _0x258bdc = _0x2088ad;
      _0x4a7b7d = "c81ad";
      _0x3dde91 = "wanyiwan_home";
      break;
    case "apTaskList":
      _0x2593fd = "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22%3A%22Fl1LmxG_f0poD7w1ycZqnw%22%7D&t=1715170975269&appid=activities_platform&client=android&clientVersion=6.24.0&loginType=2&loginWQBiz=wegame&h5st=null&build=22779&screen=393*873&networkType=wifi&eufv=1&cthr=1";
      _0x51d6c1 = "get";
      break;
    case "startTask":
      const _0xc48588 = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 1,
        version: 1
      };
      _0x258bdc = _0xc48588;
      _0x4a7b7d = "89db2";
      _0x3dde91 = "wanyiwan_do_task";
      break;
    case "endTask":
      const _0x4e7518 = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 0,
        version: 1
      };
      _0x258bdc = _0x4e7518;
      _0x4a7b7d = "89db2";
      _0x3dde91 = "wanyiwan_do_task";
      break;
    case "award":
      const _0x1aa606 = {
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        version: 1
      };
      _0x258bdc = _0x1aa606;
      _0x3dde91 = "wanyiwan_task_receive_award";
      break;
    case "wanyiwan_assist":
      const _0x50c20f = {
        inviteCode: $.itemId,
        version: 1
      };
      _0x258bdc = _0x50c20f;
      _0x4a7b7d = "ba505";
      _0x3dde91 = "wanyiwan_assist";
      break;
    case "turnHappyHome":
      _0x2593fd = "https://api.m.jd.com/api";
      const _0x3e1b25 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x258bdc = _0x3e1b25;
      _0x4b256c = "activities_platform";
      _0x3dde91 = "turnHappyHome";
      break;
    case "turnHappyDouble":
      _0x2593fd = "https://api.m.jd.com/api";
      _0x258bdc = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ",
        turnNum: parseInt(bdy_0x39a3da)
      };
      _0x4a7b7d = "614f1";
      _0x4b256c = "activities_platform";
      _0x3dde91 = "turnHappyDouble";
      break;
    case "turnHappyReceive":
      _0x2593fd = "https://api.m.jd.com/api";
      const _0x22ad5f = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x258bdc = _0x22ad5f;
      _0x4a7b7d = "25fac";
      _0x4b256c = "activities_platform";
      _0x3dde91 = "turnHappyReceive";
      break;
    case "superRedBagHome":
      _0x2593fd = "https://api.m.jd.com/api";
      const _0x32b69b = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x258bdc = _0x32b69b;
      _0x4a7b7d = "5be1b";
      _0x4b256c = "activity_platform_se";
      _0x3dde91 = "superRedBagHome";
      break;
    case "superRedBagDraw":
      _0x2593fd = "https://api.m.jd.com/api";
      const _0x56694e = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x258bdc = _0x56694e;
      _0x4a7b7d = "89cfe";
      _0x4b256c = "activity_platform_se";
      _0x3dde91 = "superRedBagDraw";
      break;
    default:
      console.log("错误" + _0x303ac1);
  }
  if (_0x4a7b7d) {
    let _0x3484cc = {
      appId: _0x4a7b7d,
      functionId: _0x3dde91,
      body: _0x258bdc,
      appid: _0x4b256c,
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      t: Date.now(),
      ua: $.UA
    };
    _0x258bdc = await bdy_0x1d3439.getbody(_0x3484cc);
    if (!_0x258bdc) {
      return;
    }
  } else {
    _0x258bdc && (_0x258bdc = "functionId=" + _0x3dde91 + "&body=" + encodeURIComponent(JSON.stringify(_0x258bdc)) + "&t=" + Date.now() + "&appid=" + _0x4b256c + "&client=ios&" + $.UA.split(";")[2] + "&cthr=1&networkType=wifi");
  }
  let _0x2873ac = bdy_0x56beeb(_0x2593fd, _0x258bdc);
  return new Promise(async _0x4c49c5 => {
    $["d" + _0x51d6c1](_0x2873ac, async (_0x58eb27, _0x2adbfb, _0x9d487e) => {
      try {
        if (_0x58eb27) {
          if (_0x2adbfb && typeof _0x2adbfb.statusCode != "undefined") {
            if (_0x2adbfb.statusCode == 493) {
              if (bdy_0xed44c < 6) {
                bdy_0xed44c++;
                await bdy_0x1b31ca(_0x303ac1);
                return;
              }
              console.log("ip可能被限制，过10分钟后再执行脚本\n");
              $.outFlag = true;
            }
          }
          console.log("" + $.toStr(_0x58eb27, _0x58eb27));
        } else {
          if (_0x9d487e.includes("doctype") && bdy_0xed44c < 6) {
            bdy_0xed44c++;
            await bdy_0x1b31ca(_0x303ac1);
            return;
          }
          bdy_0xed44c = 0;
          bdy_0x4a6e00(_0x303ac1, _0x9d487e);
        }
      } catch (_0x3825df) {
        console.log(_0x3825df, _0x2adbfb);
      } finally {
        _0x4c49c5();
      }
    });
  });
}
function bdy_0x1fe3ca(_0x56162b) {
  let _0x996cfe = "";
  switch (type) {
    case [_0x996cfe]:
      const _0x91b3f5 = {
        ed: ed
      };
      _0xf1f6le = _0x91b3f5;
      break;
    case [_0x996cfe]:
      const _0x5c819e = {
        bd: bd
      };
      _0xf1f6lc = _0x5c819e;
      break;
    case [_0x996cfe]:
      const _0x46b492 = {
        ed: ed
      };
      _0xf1f6lf = _0x46b492;
      break;
    case [_0x996cfe]:
      const _0x584507 = {
        ed: ed
      };
      _0xf1f6lg = _0x584507;
      break;
    case [_0x996cfe]:
      const _0x37d0bf = {
        ed: ed
      };
      _0xf1f6lv = _0x37d0bf;
      break;
  }
}
async function bdy_0x4a6e00(_0x32cda8, _0x231ece) {
  let _0x3b56fe = "";
  try {
    _0x3b56fe = JSON.parse(_0x231ece);
  } catch (_0x4b4719) {
    console.log(_0x32cda8 + " 执行任务异常");
  }
  try {
    switch (_0x32cda8) {
      case "award":
        if (_0x3b56fe.code == 0) {
          _0x3b56fe.data.bizCode == 0 ? console.log("任务完成，获得" + _0x3b56fe.data.result.rewardCount + "奖票 🎫") : console.log(_0x3b56fe.data.bizMsg);
        } else {
          console.log(_0x3b56fe.message);
        }
        break;
      case "wanyiwan_sign":
        _0x3b56fe.code == 0 ? _0x3b56fe.data.bizCode == 0 ? console.log("签到成功,获得" + _0x3b56fe.data.result.getScore + "奖票 🎫") : console.log(_0x3b56fe.data.bizMsg) : console.log(_0x3b56fe.message);
        break;
      case "wanyiwan_assist":
        if (_0x3b56fe.code == 0) {
          if (_0x3b56fe.data.bizCode == 0) {
            console.log("✔️ 助力成功");
            $.nonum = true;
          } else {
            if (_0x3b56fe.data.bizMsg.includes("太多人") || _0x3b56fe.data.bizMsg.includes("重复")) {
              console.log("❌", _0x3b56fe.data.bizCode, _0x3b56fe.data.bizMsg);
              $.nonum = true;
            } else {
              if (_0x3b56fe.data.bizMsg.includes("已经完成")) {
                console.log("❌", _0x3b56fe.data.bizCode, _0x3b56fe.data.bizMsg);
                $.fullId.push($.itemId);
              } else {
                _0x3b56fe.data.bizMsg.includes("火爆") ? (console.log("❌", _0x3b56fe.data.bizCode, _0x3b56fe.data.bizMsg), $.hphotflag = true) : console.log("❌", _0x3b56fe.data.bizCode, _0x3b56fe.data.bizMsg);
              }
            }
          }
        } else {
          console.log(_0x3b56fe.message);
          _0x3b56fe.message.includes("火爆") && ($.hphotflag = true);
        }
        break;
      case "wanyiwan_home":
        _0x3b56fe.code == 0 ? _0x3b56fe.data.bizCode == 0 ? (_0x3b56fe.data.result.popWindows.length != 0 && console.log("获得新手奖励：", _0x3b56fe.data.result.popWindows[0].getScore, "奖票 🎫"), console.log("当前奖票总量：" + _0x3b56fe.data.result.score + " 🎫"), $.isLogin = _0x3b56fe.data?.["result"]?.["isLogin"], $.taskList = _0x3b56fe.data?.["result"]?.["taskBoard"] || [], $.signstatus = _0x3b56fe.data?.["result"]?.["signBoard"]?.["status"] || 0) : console.log(_0x3b56fe.data.bizMsg) : console.log(_0x3b56fe.message);
        break;
      case "turnHappyHome":
        _0x3b56fe.success ? $.leftTime = _0x3b56fe.data.leftTime : console.log(_0x3b56fe.errMsg);
        break;
      case "turnHappyDouble":
        _0x3b56fe.success ? _0x3b56fe.data.rewardState == 1 ? (console.log("翻倍成功，获得 " + _0x3b56fe.data.rewardValue + "奖票 🎫"), $.dbsuc = true) : console.log("叼了，翻倍失败！再接再厉！") : console.log(_0x3b56fe.errMsg);
        break;
      case "superRedBagHome":
        _0x3b56fe.success ? ($.sceneStatus = _0x3b56fe.data.sceneStatus, $.nextLeftTime = _0x3b56fe.data.nextLeftTime) : console.log(_0x3b56fe.errMsg);
        break;
      case "superRedBagDraw":
        if (_0x3b56fe.success) {
          $.shakeLeftTime = _0x3b56fe.data.shakeLeftTime;
          const {
            prizeDrawVo = ""
          } = _0x3b56fe.data;
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
            console.log(_0x231ece);
          }
        } else {
          console.log(_0x3b56fe.errMsg);
        }
        break;
      case "startTask":
      case "turnHappyReceive":
      case "endTask":
        break;
      default:
        console.log(_0x32cda8 + " -> " + _0x231ece);
    }
    typeof _0x3b56fe == "object" && _0x3b56fe.errorMessage && _0x3b56fe.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0x4d75e6) {
    console.log(_0x32cda8 + " " + _0x4d75e6);
  }
}
function bdy_0x56beeb(_0x15d771, _0x746562) {
  const _0x73b6d7 = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    Cookie: bdy_0x19d5bd,
    "User-Agent": $.UA
  };
  const _0x1f26c4 = {
    url: _0x15d771,
    headers: _0x73b6d7,
    timeout: 30000,
    ...(_0x746562 ? {
      body: _0x746562
    } : {})
  };
  return _0x1f26c4;
}
async function bdy_0x104cb7() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0x469cbe(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0x469cbe(_0x1b96c5) {
  _0x1b96c5 = _0x1b96c5 || 32;
  let _0x1ed6c2 = "abcdef0123456789",
    _0x3f534c = _0x1ed6c2.length,
    _0x30d931 = "";
  for (i = 0; i < _0x1b96c5; i++) {
    _0x30d931 += _0x1ed6c2.charAt(Math.floor(Math.random() * _0x3f534c));
  }
  return _0x30d931;
}
function bdy_0x479908(_0x46e9a8) {
  if (typeof _0x46e9a8 == "string") {
    try {
      return JSON.parse(_0x46e9a8);
    } catch (_0x228a5e) {
      console.log(_0x228a5e);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function bdy_0x1db36a() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x2d9633 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x209ffe = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    $.shopactivityId == "" && delete _0x209ffe.activityId;
    const _0x2387a6 = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x209ffe,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x209ffe = await dyy.getbody(_0x2387a6);
    const _0x3262b2 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x19d5bd,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x277bfb = {
      url: "https://api.m.jd.com/client.action?" + _0x209ffe + "&uuid=88888",
      headers: _0x3262b2,
      timeout: 30000
    };
    $.dget(_0x277bfb, async (_0x11c3a4, _0x5b04da, _0x569eac) => {
      try {
        _0x569eac = _0x569eac && _0x569eac.match(/jsonp_.*?\((.*?)\);/) && _0x569eac.match(/jsonp_.*?\((.*?)\);/)[1] || _0x569eac;
        let _0xd8dde7 = $.toObj(_0x569eac, _0x569eac);
        if (_0xd8dde7 && typeof _0xd8dde7 == "object") {
          if (_0xd8dde7 && _0xd8dde7.success === true) {
            console.log("    " + _0xd8dde7.message);
            $.errorJoinShop = _0xd8dde7.message;
            if (_0xd8dde7.result && _0xd8dde7.result.giftInfo) {
              for (let _0xc54900 of _0xd8dde7.result.giftInfo.giftList) {
                console.log("入会获得:" + _0xc54900.discountString + _0xc54900.prizeName + _0xc54900.secondLineDesc);
              }
            }
          } else {
            _0xd8dde7 && typeof _0xd8dde7 == "object" && _0xd8dde7.message ? ($.errorJoinShop = _0xd8dde7.message, console.log("" + (_0xd8dde7.message || ""))) : console.log(_0x569eac);
          }
        } else {
          console.log(_0x569eac);
        }
      } catch (_0x5ec64a) {
        $.logErr(_0x5ec64a, _0x5b04da);
      } finally {
        _0x2d9633();
      }
    });
  });
}
async function bdy_0x2dbe4e() {
  return new Promise(async _0x2f62db => {
    const _0x3c21e1 = {
      venderId: $.joinVenderId,
      payUpShop: true,
      queryVersion: "10.5.2",
      appid: "ef79a",
      needSecurity: true,
      bizId: "shop_view_app",
      channel: 406
    };
    let _0x4e2194 = _0x3c21e1;
    const _0x10b33e = {
      appId: "ef79a",
      fn: "getShopOpenCardInfo",
      body: _0x4e2194,
      apid: "jd_shop_member",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x4e2194 = await dyy.getbody(_0x10b33e);
    const _0x11fad3 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x19d5bd,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    const _0x30a01e = {
      url: "https://api.m.jd.com/client.action?" + _0x4e2194 + "&uuid=88888",
      headers: _0x11fad3,
      timeout: 60000
    };
    $.get(_0x30a01e, async (_0xfb9cd6, _0x225937, _0x492664) => {
      try {
        _0x492664 = _0x492664 && _0x492664.match(/jsonp_.*?\((.*?)\);/) && _0x492664.match(/jsonp_.*?\((.*?)\);/)[1] || _0x492664;
        let _0x266ce3 = $.toObj(_0x492664, _0x492664);
        _0x266ce3 && typeof _0x266ce3 == "object" ? _0x266ce3 && _0x266ce3.success == true && (console.log("去加入 -> " + (_0x266ce3.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x266ce3.result[0].interestsRuleList && _0x266ce3.result[0].interestsRuleList[0] && _0x266ce3.result[0].interestsRuleList[0].interestsInfo && _0x266ce3.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x492664);
      } catch (_0x48acde) {
        $.logErr(_0x48acde, _0x225937);
      } finally {
        _0x2f62db();
      }
    });
  });
}
function bdy_0x396618(_0x1f79bd, _0xa6ff96) {
  return Math.floor(Math.random() * (_0xa6ff96 - _0x1f79bd)) + _0x1f79bd;
}
function bdy_0x4649af(_0x492211 = +new Date()) {
  var _0x4d49aa = new Date(_0x492211 + 28800000);
  return _0x4d49aa.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function bdy_0xde8b50() {
  return new Promise(_0x588189 => {
    const _0x3dd33d = {
      Cookie: bdy_0x19d5bd,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x10914c = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x3dd33d,
      timeout: 10000
    };
    $.get(_0x10914c, (_0x5734cb, _0x2597a7, _0x3759d5) => {
      try {
        if (_0x3759d5) {
          _0x3759d5 = JSON.parse(_0x3759d5);
          if (!(_0x3759d5.islogin === "1")) {
            _0x3759d5.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x587069) {
        console.log(_0x587069);
      } finally {
        _0x588189();
      }
    });
  });
}
function Env(o, t) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((r, i) => { s.call(this, t, (t, e, s) => { t ? i(t) : r(e) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.logLevels = { debug: 0, info: 1, warn: 2, error: 3 }, this.logLevelPrefixs = { debug: "[DEBUG] ", info: "[INFO] ", warn: "[WARN] ", error: "[ERROR] " }, this.logLevel = "info", this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } getEnv() { return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0 } isNode() { return "Node.js" === this.getEnv() } isQuanX() { return "Quantumult X" === this.getEnv() } isSurge() { return "Surge" === this.getEnv() } isLoon() { return "Loon" === this.getEnv() } isShadowrocket() { return "Shadowrocket" === this.getEnv() } isStash() { return "Stash" === this.getEnv() } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null, ...s) { try { return JSON.stringify(t, ...s) } catch { return e } } getjson(t, e) { let s = e; if (this.getdata(t)) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(r => { this.get({ url: t }, (t, e, s) => r(s)) }) } runScript(a, o) { return new Promise(r => { let t = this.getdata("@chavy_boxjs_userCfgs.httpapi"); t = t && t.replace(/\n/g, "").trim(); var e = (e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout")) ? +e : 20, [s, i] = (e = o && o.timeout ? o.timeout : e, t.split("@")); this.post({ url: `http://${i}/v1/scripting/evaluate`, body: { script_text: a, mock_type: "cron", timeout: e }, headers: { "X-Key": s, Accept: "*/*" }, timeout: e }, (t, e, s) => r(s)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; this.fs = this.fs || require("fs"), this.path = this.path || require("path"); var t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), r = !s && this.fs.existsSync(e); if (!s && !r) return {}; r = s ? t : e; try { return JSON.parse(this.fs.readFileSync(r)) } catch (t) { return {} } } writedata() { var t, e, s, r, i; this.isNode() && (this.fs = this.fs || require("fs"), this.path = this.path || require("path"), t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), r = !(s = this.fs.existsSync(t)) && this.fs.existsSync(e), i = JSON.stringify(this.data), !s && r ? this.fs.writeFileSync(e, i) : this.fs.writeFileSync(t, i)) } lodash_get(t, e, s) { let r = t; for (const t of e.replace(/\[(\d+)\]/g, ".$1").split(".")) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, r, e) { return Object(t) === t && ((r = Array.isArray(r) ? r : r.toString().match(/[^.[\]]+/g) || []).slice(0, -1).reduce((t, e, s) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(r[s + 1]) >> 0 == +r[s + 1] ? [] : {}, t)[r[r.length - 1]] = e), t } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { var [, s, r] = /^@(.*?)\.(.*?)$/.exec(t); if (s = s ? this.getval(s) : "") try { const t = JSON.parse(s); e = t ? this.lodash_get(t, r, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { var [, r, i] = /^@(.*?)\.(.*?)$/.exec(e), a = this.getval(r), a = r ? "null" === a ? null : a || "{}" : "{}"; try { const e = JSON.parse(a); this.lodash_set(e, i, t), s = this.setval(JSON.stringify(e), r) } catch (e) { this.lodash_set(a = {}, i, t), s = this.setval(JSON.stringify(a), r) } } else s = this.setval(t, e); return s } getval(t) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.read(t); case "Quantumult X": return $prefs.valueForKey(t); case "Node.js": return this.data = this.loaddata(), this.data[t]; default: return this.data && this.data[t] || null } } setval(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.write(t, e); case "Quantumult X": return $prefs.setValueForKey(t, e); case "Node.js": return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0; default: return this.data && this.data[e] || null } } initGotEnv(t) { this.got = this.got || require("got"), this.cktough = this.cktough || require("tough-cookie"), this.ckjar = this.ckjar || new this.cktough.CookieJar, t && (t.headers = t.headers || {}, t) && (t.headers = t.headers || {}, void 0 === t.headers.cookie) && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar) } tmout() { return new Promise((t, e) => { this.tmoutId = setTimeout(() => { this.prms.cancel(), e({ message: "timemout", response: "" }) }, 5e4) }) } get(t, a = () => { }) { switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t), this.prms = this.got(t).on("redirect", (t, e) => { try { var s; t.headers["set-cookie"] && ((s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString()) && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar) } catch (t) { this.logErr(t) } }), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } post(t, a = () => { }) { var e = t.method ? t.method.toLocaleLowerCase() : "post"; switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[e](t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": t.method = e, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t); var { url: s, ...r } = t; this.prms = this.got[e](s, r), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } time(t, e = null) { var s, r = { "M+": (e = e ? new Date(e) : new Date).getMonth() + 1, "d+": e.getDate(), "H+": e.getHours(), "m+": e.getMinutes(), "s+": e.getSeconds(), "q+": Math.floor((e.getMonth() + 3) / 3), S: e.getMilliseconds() }; for (s in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), r) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[s] : ("00" + r[s]).substr(("" + r[s]).length))); return t } queryStr(e) { let s = ""; for (const r in e) { let t = e[r]; null != t && "" !== t && ("object" == typeof t && (t = JSON.stringify(t)), s += `${r}=${t}&`) } return s = s.substring(0, s.length - 1) } msg(t = o, e = "", s = "", r = {}) { var i, a = r => { const { $open: t, $copy: e, $media: i, $mediaMime: a } = r; switch (typeof r) { case void 0: return r; case "string": switch (this.getEnv()) { case "Surge": case "Stash": default: return { url: r }; case "Loon": case "Shadowrocket": return r; case "Quantumult X": return { "open-url": r }; case "Node.js": return }case "object": switch (this.getEnv()) { case "Surge": case "Stash": case "Shadowrocket": default: var o = {}, s = r.openUrl || r.url || r["open-url"] || t; if (s && Object.assign(o, { action: "open-url", url: s }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(o, { action: "clipboard", text: s }), i) { let t, e, s; if (i.startsWith("http")) t = i; else if (i.startsWith("data:")) { const [r] = i.split(";"), [, a] = i.split(","); e = a, s = r.replace("data:", "") } else e = i, s = (t => { var e, s = { JVBERi0: "application/pdf", R0lGODdh: "image/gif", R0lGODlh: "image/gif", iVBORw0KGgo: "image/png", "/9j/": "image/jpg" }; for (e in s) if (0 === t.indexOf(e)) return s[e]; return null })(i); Object.assign(o, { "media-url": t, "media-base64": e, "media-base64-mime": a ?? s }) } return Object.assign(o, { "auto-dismiss": r["auto-dismiss"], sound: r.sound }), o; case "Loon": { const e = {}; (s = r.openUrl || r.url || r["open-url"] || t) && Object.assign(e, { openUrl: s }); var n = r.mediaUrl || r["media-url"]; return (n = i?.startsWith("http") ? i : n) && Object.assign(e, { mediaUrl: n }), console.log(JSON.stringify(e)), e } case "Quantumult X": { const a = {}; (o = r["open-url"] || r.url || r.openUrl || t) && Object.assign(a, { "open-url": o }); n = r["media-url"] || r.mediaUrl; return (n = i?.startsWith("http") ? i : n) && Object.assign(a, { "media-url": n }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(a, { "update-pasteboard": s }), console.log(JSON.stringify(a)), a } case "Node.js": return }default: return } }; if (!this.isMute) switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: $notification.post(t, e, s, a(r)); break; case "Quantumult X": $notify(t, e, s, a(r)); break; case "Node.js": }this.isMuteLog || ((i = ["", "==============📣系统通知📣=============="]).push(t), e && i.push(e), s && i.push(s), console.log(i.join("\n")), this.logs = this.logs.concat(i)) } debug(...t) { this.logLevels[this.logLevel] <= this.logLevels.debug && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.debug + t.map(t => t ?? String(t)).join(this.logSeparator))) } info(...t) { this.logLevels[this.logLevel] <= this.logLevels.info && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.info + t.map(t => t ?? String(t)).join(this.logSeparator))) } warn(...t) { this.logLevels[this.logLevel] <= this.logLevels.warn && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.warn + t.map(t => t ?? String(t)).join(this.logSeparator))) } error(...t) { this.logLevels[this.logLevel] <= this.logLevels.error && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.error + t.map(t => t ?? String(t)).join(this.logSeparator))) } log(...t) { 0 < t.length && (this.logs = [...this.logs, ...t]), console.log(t.map(t => t ?? String(t)).join(this.logSeparator)) } logErr(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: this.log("", `❗️${this.name}, 错误!`, t); break; case "Node.js": this.log("", `❗️${this.name}, 错误!`, void 0 !== t.message ? t.message : t) } } wait(e) { return new Promise(t => setTimeout(t, e)) } done(t = {}) { var e = ((new Date).getTime() - this.startTime) / 1e3; switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: $done(t); break; case "Node.js": process.exit(1) } } }(o, t) }