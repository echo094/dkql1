/*
更新时间：2023-9-8
活动入口：京东APP我的--东东农场
==========================Quantumultx=========================
[task_local]
#jd免费水果
15 3,13,18 * * * jd_fruit.js, tag=东东农场, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jdnc.png, enabled=true

变量：
export NO_WATER='true' 完全不浇水，浇水任务不做了
export FRUIT_PIN='pin1&pin2' 不浇水的pin，多个&分隔，使用pin控制就不要使用NO_WATER
export DO_TEN_WATER_AGAIN='true' 攒水滴只交10次水，默认不攒水滴
export FRUIT_FAST_CARD='true' 使用快速浇水卡，水多可开启
epxort FRUIT_DELAY='1000',设置等待时间(毫秒)，默认请求5次接口等待5秒（5000）
*/
const $ = new Env('东东农场-任务');
const bdy_0x49cdc5 = 100;
let bdy_0x3c5af = false,
  bdy_0x5915f1 = false,
  bdy_0x5db7c6 = [],
  bdy_0x5965e4 = "",
  bdy_0x204412,
  bdy_0xcecb1a,
  bdy_0x26ce12 = "",
  bdy_0x3c133e = "",
  bdy_0x14ba9f = "",
  bdy_0x21f8a2 = {},
  bdy_0x27f2be = false,
  bdy_0x3dffc8;
const bdy_0x2cb23e = "https://api.m.jd.com/client.action",
  bdy_0x2aae28 = "openjd://virtual?params=%7B%20%22category%22:%20%22jump%22,%20%22des%22:%20%22m%22,%20%22url%22:%20%22https://h5.m.jd.com/babelDiy/Zeus/3KSjXqQabiTuD1cJ28QskrpWoBKT/index.html%22%20%7D",
  bdy_0x2b996f = process.env.FRUIT_DELAY ? process.env.FRUIT_DELAY * 1 : 2000,
  bdy_0x56c800 = process.env.FRUIT_PIN ? decodeURIComponent(process.env.FRUIT_PIN) : "",
  bdy_0x37ddad = require("./USER_AGENTS"),
  bdy_0x564f48 = require("fs"),
  bdy_0x1a6623 = require("./function/dylanv");
if (process.env.DY_PROXY) {
  const bdy_0x13894f = require("./function/proxy.js");
  $.get = bdy_0x13894f.intoRequest($.get.bind($));
  $.post = bdy_0x13894f.intoRequest($.post.bind($));
}
let bdy_0x5ab302 = [];
$.reqnum = 1;
const bdy_0xffdb7a = {
  totalWaterTaskForFarm: "102f5",
  gotThreeMealForFarm: "57b30",
  browseAdTaskForFarm: "53f09",
  clockInFollowForFarm: "4a0b4",
  waterFriendForFarm: "673a0",
  awardFirstFriendForFarm: "9b655",
  limitWaterInitForFarm: "6bdc2",
  ddnc_surpriseModal: "e81c1",
  friendInitForFarm: "a5a9c",
  waterGoodForFarm: "0c010",
  firstWaterTaskForFarm: "0cf1e",
  waterFriendGotAwardForFarm: "d08ff",
  ddnc_getTreasureBoxAward: "67dfc",
  orderTaskGotWaterForFarm: "eed5c",
  clockInForFarm: "32b94",
  awardInviteFriendForFarm: "2b5ca",
  awardCallOrInviteFriendForFarm: "b0b03",
  getFullCollectionReward: "5c767",
  getOrderPayLotteryWater: "ef089",
  receiveStageEnergy: "15507",
  exchangeGood: "52963",
  initForFarm: "8a2af",
  userMyCardForFarm: "86ba5",
  getCallUserCardForFarm: "2ca57",
  deleteFriendForFarm: "eaf91",
  gotLowFreqWaterForFarm: "8172b",
  choiceGoodsForFarm: "5f4ca",
  gotCouponForFarm: "b1515",
  gotStageAwardForFarm: "81591",
  followVenderForBrand: "71547",
  clockInInitForFarm: "08dc3",
  guideTaskAward: "59bc4",
  farmAssistInit: "92354",
  myCardInfoForFarm: "157b6",
  gotPopFirstPurchaseTaskForFarm: "d432f",
  gotWaterGoalTaskForFarm: "c901b",
  gotNewUserTaskForFarm: "de8f8"
};
!(async () => {
  await bdy_0x331d23();
  if (!bdy_0x5db7c6[0]) {
    const _0x551469 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x551469);
    return;
  }
  $.log("\n当前版本：2024/5/2 fix");
  $.log("TG反馈：https://t.me/dylan_jdpro\n");
  $.log("\n环境变量：");
  $.log("export DY_PROXY='api_url' 可使用代理api");
  $.log("export NO_WATER='true' 完全不浇水，浇水任务不做了");
  $.log("export FRUIT_PIN='pin1&pin2' 不浇水的pin，多个&分隔，使用pin控制就不要使用NO_WATER");
  $.log("export DO_TEN_WATER_AGAIN='true' 攒水滴只交10次水，默认不攒水滴");
  $.log("epxort FRUIT_DELAY='1000',设置等待时间(毫秒)，默认请求5次接口等待5秒（5000）\n\n");
  process.env.NO_WATER == "true" ? (bdy_0x26ce12 = "【一水不缴模式已开启！】\n\n", $.log("【一水不缴模式已开启！】\n")) : process.env.DO_TEN_WATER_AGAIN == "true" && (bdy_0x26ce12 = "【攒水滴模式已开启，每天只浇水10次！】\n\n", $.log("【攒水滴模式已开启，每天只浇水10次！】\n"));
  for (let _0x33ff1f = 0; _0x33ff1f < bdy_0x5db7c6.length; _0x33ff1f++) {
    if (bdy_0x5db7c6[_0x33ff1f]) {
      bdy_0x5965e4 = bdy_0x5db7c6[_0x33ff1f];
      $.UserName = decodeURIComponent(bdy_0x5965e4.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x5965e4.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x33ff1f + 1;
      $.isLogin = true;
      $.nickName = "";
      $.farmInfo = "";
      bdy_0x3dffc8 = 0;
      await bdy_0x420855();
      console.log("------------------【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "-------------------\n");
      if (!$.isLogin) {
        const _0x5afb05 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x5afb05);
        $.isNode() && (await bdy_0x204412.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      bdy_0x3c133e = "";
      bdy_0x14ba9f = "";
      bdy_0x21f8a2 = {};
      $.UA = bdy_0x37ddad.UARAM ? bdy_0x37ddad.UARAM() : bdy_0x37ddad.USER_AGENT;
      await bdy_0x4f5cd9();
      await $.wait(2000);
    }
  }
  bdy_0x564f48.writeFileSync("./fruit_helpcode", JSON.stringify(bdy_0x5ab302), _0x3a2d1d => {
    _0x3a2d1d && console.log(_0x3a2d1d);
  });
  $.isNode() && bdy_0x26ce12 && $.ctrTemp && (await bdy_0x204412.sendNotify("" + $.name, "" + bdy_0x26ce12));
})().catch(_0x14d592 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x14d592 + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0x4f5cd9() {
  bdy_0x14ba9f = "【京东账号" + $.index + "🆔】" + ($.nickName || $.UserName);
  try {
    await bdy_0x1732fa();
    await $.wait(500);
    await bdy_0x3cc3a4();
    let _0x51ac86 = $.farmInfo.farmUserPro || $.farmInfoI.farmUserPro;
    if (_0x51ac86) {
      bdy_0x3c133e = "【水果名称】" + $.farmInfo.farmUserPro.name + "\n";
      console.log("\n【账号（" + $.UserName + "）的" + $.name + "好友互助码】" + $.farmInfo.farmUserPro.shareCode);
      console.log("\n【已成功兑换水果】" + $.farmInfo.farmUserPro.winTimes + "次");
      bdy_0x3c133e += "【已兑换水果】" + $.farmInfo.farmUserPro.winTimes + "次\n";
      bdy_0x5ab302.push($.farmInfo.farmUserPro.shareCode);
      if ($.farmInfo.farmUserPro.treeState === 2 || $.farmInfo.farmUserPro.treeState === 3) {
        bdy_0x21f8a2["open-url"] = bdy_0x2aae28;
        $.msg($.name, "", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo.farmUserPro.name + "已可领取\n请去京东APP或微信小程序查看\n点击弹窗即达", bdy_0x21f8a2);
        $.isNode() && (await bdy_0x204412.sendNotify($.name + " - 账号" + $.index + " - " + ($.nickName || $.UserName) + "水果已可领取", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo.farmUserPro.name + "已可领取\n请去京东APP或微信小程序查看"));
      } else {
        if ($.farmInfo.farmUserPro.treeState === 1) {
          console.log("\n" + $.farmInfo.farmUserPro.name + "种植中...");
        } else {
          if ($.farmInfo.farmUserPro.treeState === 0) {
            bdy_0x21f8a2["open-url"] = bdy_0x2aae28;
            $.msg($.name, "", "【京东账号" + $.index + "】 " + ($.nickName || $.UserName) + "\n【提醒⏰】您忘了种植新的水果\n请去京东APP或微信小程序选购并种植新的水果\n点击弹窗即达", bdy_0x21f8a2);
            $.isNode() && (await bdy_0x204412.sendNotify($.name + " - 您忘了种植新的水果", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n【提醒⏰】您忘了种植新的水果\n请去京东APP或微信小程序选购并种植新的水果"));
            return;
          }
        }
      }
      $.farmInfo.farmUserPro.newOldState == "0" && (await bdy_0x327e7e(), $.newtaskinfo.addEnergy && console.log("\n获得" + $.newtaskinfo.addEnergy + "g💧"));
      $.farmInfoI.lowFreqSendWater && (await bdy_0x1c4d7c(), $.newtaskinfo.addWater && console.log("\n获得" + $.newtaskinfo.addWater + "g💧"));
      await bdy_0x2bd956();
      await bdy_0x3f7a35();
      process.env.NO_WATER == "true" || bdy_0x56c800.includes($.UserName) ? $.log("\n已设置完全不浇水\n") : (await bdy_0x6d2098(), process.env.DO_TEN_WATER_AGAIN != "true" ? ($.log("执行继续浇水..."), await bdy_0x534e6d()) : $.log("不执行再次浇水，攒水滴!"));
      await bdy_0x508cdc();
      await bdy_0x37858d();
      await bdy_0x4c7173();
      await bdy_0x5b8676();
      await $.wait(3000);
      await bdy_0x348307();
    } else {
      JSON.stringify($.farmInfoI).includes("winTexts") ? (console.log("初始化农场数据异常, 请确认此账号是否开通农场\n"), bdy_0x3c133e = "【数据异常】请确认此账号是否开通农场\n\n") : (console.log("初始化农场数据异常, 请登录京东 app查看农场0元水果功能是否正常,农场初始化数据: " + JSON.stringify($.farmInfoI) + "\n"), bdy_0x3c133e = "【数据异常】请手动登录app查看此账号农场是否正常\n\n");
    }
  } catch (_0xce0251) {
    console.log("任务执行异常，请检查执行日志 ‼️‼️\n\n");
    $.logErr(_0xce0251);
  }
  await bdy_0x4c9870();
}
async function bdy_0x2bd956() {
  await bdy_0x12c5f2();
  console.log("被水滴砸中： " + ($.farmInfo.todayGotWaterGoalTask.canPop ? "是" : "否"));
  $.farmInfo.todayGotWaterGoalTask.canPop && (await bdy_0x5dc20b(), $.goalResult.code === "0" && console.log("获得" + $.goalResult.addEnergy + "g💧\n"));
  console.log("\n开始日常任务...");
  let _0x6dfb0c = $.farmTask.gotBrowseTaskAdInit.userBrowseTaskAds,
    _0x2c9ce4 = $.farmTask.businessImprovementInit ? $.farmTask.businessImprovementInit.busiImproveTasks : [],
    _0x4ef51c = 0,
    _0x104963 = 0,
    _0x1ac314 = 0;
  if (!$.farmTask.gotThreeMealInit.f) {
    await bdy_0x78ae34();
    $.threeMeal.code === "0" ? (console.log("定时领水 获得" + $.threeMeal.amount + "g💧\n"), _0x4ef51c += $.threeMeal.amount, _0x104963++) : console.log("定时领水失败:  " + JSON.stringify($.threeMeal));
  }
  if ($.farmTask.treasureBoxInit && !$.farmTask.treasureBoxInit.f) {
    console.log("" + $.farmTask.treasureBoxInit.taskMainTitle);
    let _0x38639a = await bdy_0x223789();
    _0x38639a.code == 0 && ($.log("完成，获得" + _0x38639a.waterGram + "g💧\n"), _0x4ef51c += _0x38639a.waterGram, _0x104963++);
  }
  if ($.farmTask["treasureBoxInit-getBean"] && !$.farmTask["treasureBoxInit-getBean"].f) {
    console.log("" + $.farmTask["treasureBoxInit-getBean"].taskMainTitle);
    let _0x35c931 = await bdy_0x15a2f9();
    _0x35c931.code == 0 && ($.log("完成，获得" + _0x35c931.waterGram + "g💧\n"), _0x4ef51c += _0x35c931.waterGram, _0x104963++);
  }
  _0x6dfb0c = _0x6dfb0c.concat(_0x2c9ce4);
  for (let _0x4d555e of _0x6dfb0c) {
    if (_0x4d555e.limit <= _0x4d555e.hadFinishedTimes) {
      if (_0x4d555e.mainTitle.includes("领奖")) {
        await bdy_0x16efaa(_0x4d555e.advertId, 1, _0x4d555e.adType);
        continue;
      }
      console.log(_0x4d555e.mainTitle + " ---- 已完成");
      continue;
    }
    console.log("去做任务: " + _0x4d555e.mainTitle);
    await bdy_0x16efaa(_0x4d555e.advertId, 0, _0x4d555e.adType);
    $.browseResult.code === "0" ? (console.log(_0x4d555e.mainTitle + " 任务完成"), await bdy_0x16efaa(_0x4d555e.advertId, 1, _0x4d555e.adType), $.browseRwardResult.code === "0" ? (console.log("领取 " + _0x4d555e.mainTitle + " 任务奖励成功, 获得" + $.browseRwardResult.amount + "g💧"), _0x4ef51c += $.browseRwardResult.amount, _0x104963++) : (_0x1ac314++, console.log("领取奖励结果:  " + JSON.stringify($.browseRwardResult)))) : (_0x1ac314++, console.log("任务结果:   " + JSON.stringify($.browseResult)));
  }
  if (_0x1ac314 > 0) {
    console.log("\n日常任务 完成" + _0x104963 + "个,失败" + _0x1ac314 + ",获得" + _0x4ef51c + "g💧\\n");
  } else {
    _0x104963 > 0 && console.log("\n日常任务 完成" + _0x104963 + "个,获得" + _0x4ef51c + "g💧\n");
  }
  !$.farmTask.waterFriendTaskInit.f ? $.farmTask.waterFriendTaskInit.waterFriendCountKey < $.farmTask.waterFriendTaskInit.waterFriendMax && (await bdy_0x3962f4()) : console.log("给" + $.farmTask.waterFriendTaskInit.waterFriendMax + "个好友浇水任务已完成\n");
  await bdy_0x54e902();
  await bdy_0x21f601();
  await bdy_0x2171e0();
  await bdy_0x25691d();
}
async function bdy_0x348307() {
  console.log("开始预测水果成熟时间...\n");
  await bdy_0x3cc3a4();
  if (!$.farmInfo.farmUserPro) {
    await bdy_0x3cc3a4();
  }
  await bdy_0x12c5f2();
  let _0x5259af = $.farmTask.firstWaterInit.totalWaterTimes;
  bdy_0x3c133e += "【今日共浇水】" + _0x5259af + "次\n";
  bdy_0x3c133e += "【剩余水滴】" + $.farmInfo.farmUserPro.totalEnergy + "g💧\n";
  bdy_0x3c133e += "【水果进度】" + ($.farmInfo.farmUserPro.treeEnergy / $.farmInfo.farmUserPro.treeTotalEnergy * 100).toFixed(2) + "%，已浇水" + $.farmInfo.farmUserPro.treeEnergy / 10 + "次,还需" + ($.farmInfo.farmUserPro.treeTotalEnergy - $.farmInfo.farmUserPro.treeEnergy) / 10 + "次\n";
  if ($.farmInfo.toFlowTimes > $.farmInfo.farmUserPro.treeEnergy / 10) {
    bdy_0x3c133e += "【开花进度】再浇水" + ($.farmInfo.toFlowTimes - $.farmInfo.farmUserPro.treeEnergy / 10) + "次开花\n";
  } else {
    $.farmInfo.toFruitTimes > $.farmInfo.farmUserPro.treeEnergy / 10 && (bdy_0x3c133e += "【结果进度】再浇水" + ($.farmInfo.toFruitTimes - $.farmInfo.farmUserPro.treeEnergy / 10) + "次结果\n");
  }
  let _0x991052 = ($.farmInfo.farmUserPro.treeTotalEnergy - $.farmInfo.farmUserPro.treeEnergy) / 10;
  if (_0x5259af > 2) {
    let _0x3ca87f = Math.ceil(_0x991052 / _0x5259af) || 0;
    bdy_0x3c133e += "【预测】" + (_0x3ca87f === 1 ? "明天" : _0x3ca87f === 2 ? "后天" : _0x3ca87f + "天之后") + "(" + bdy_0x4a3911(86400000 * _0x3ca87f + Date.now()) + "日)可兑换水果🍉\n";
  } else {
    bdy_0x3c133e += "【预测】不浇水无限期\n";
  }
}
async function bdy_0x6d2098() {
  bdy_0x5915f1 = $.getdata("jdFruitBeanCard") ? $.getdata("jdFruitBeanCard") : bdy_0x5915f1;
  $.isNode() && process.env.FRUIT_BEAN_CARD && (bdy_0x5915f1 = process.env.FRUIT_BEAN_CARD);
  await bdy_0x25a995();
  const {
    fastCard: _0x1c6f84,
    doubleCard: _0x39da35,
    beanCard: _0x435eb9,
    signCard: _0x5cd60c
  } = $.myCardInfoRes;
  if ("" + bdy_0x5915f1 === "true" && JSON.stringify($.myCardInfoRes).match("限时翻倍") && _0x435eb9 > 0) {
    console.log("您设置的是使用水滴换豆卡，且背包有水滴换豆卡" + _0x435eb9 + "张, 跳过10次浇水任务");
    return;
  }
  if ($.farmTask.totalWaterTaskInit.totalWaterTaskTimes < $.farmTask.totalWaterTaskInit.totalWaterTaskLimit) {
    console.log("\n准备浇水十次");
    let _0x5aa87a = 0;
    bdy_0x27f2be = false;
    for (; _0x5aa87a < $.farmTask.totalWaterTaskInit.totalWaterTaskLimit - $.farmTask.totalWaterTaskInit.totalWaterTaskTimes; _0x5aa87a++) {
      console.log("第" + (_0x5aa87a + 1) + "次浇水");
      await bdy_0x259837();
      if ($.waterResult.code === "0") {
        console.log("浇水成功，剩余水滴" + $.waterResult.totalEnergy + "g");
        if ($.waterResult.finished) {
          bdy_0x27f2be = true;
          break;
        } else {
          if ($.waterResult.totalEnergy < 10) {
            console.log("水滴不够，结束浇水\n");
            break;
          }
          await bdy_0x390183();
        }
      } else {
        console.log("浇水出现失败异常,跳出不在继续浇水\n");
        break;
      }
    }
    bdy_0x27f2be && (bdy_0x21f8a2["open-url"] = bdy_0x2aae28, $.msg($.name, "", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo.farmUserPro.name + "已可领取\n请去京东APP或微信小程序查看\n点击弹窗即达", bdy_0x21f8a2), $.isNode() && (await bdy_0x204412.sendNotify($.name + " - 账号" + $.index + " - " + ($.nickName || $.UserName) + "水果已可领取", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n" + $.farmInfo.farmUserPro.name + "已可领取")));
  } else {
    console.log("\n今日已完成10次浇水任务\n");
  }
}
async function bdy_0x508cdc() {
  await bdy_0x12c5f2();
  !$.farmTask.firstWaterInit.f && $.farmTask.firstWaterInit.totalWaterTimes > 0 ? (await bdy_0x269737(), $.firstWaterReward.code === "0" ? console.log("【首次浇水奖励】获得" + $.firstWaterReward.amount + "g💧\n") : console.log("领取首次浇水奖励结果:  " + JSON.stringify($.firstWaterReward))) : console.log("首次浇水奖励已领取\n");
}
async function bdy_0x37858d() {
  if (!$.farmTask.totalWaterTaskInit.f && $.farmTask.totalWaterTaskInit.totalWaterTaskTimes >= $.farmTask.totalWaterTaskInit.totalWaterTaskLimit) {
    await bdy_0x52e080();
    $.totalWaterReward.code === "0" ? console.log("10次浇水完成 获得" + $.totalWaterReward.totalWaterTaskEnergy + "g💧\n") : console.log("领取10次浇水奖励结果:  " + JSON.stringify($.totalWaterReward) + "\n");
  } else {
    $.farmTask.totalWaterTaskInit.totalWaterTaskTimes < $.farmTask.totalWaterTaskInit.totalWaterTaskLimit && console.log("10次浇水 未完成，今日浇水" + $.farmTask.totalWaterTaskInit.totalWaterTaskTimes + "次\n");
  }
  console.log("finished 水果任务完成!");
}
async function bdy_0x3f7a35() {
  await bdy_0x25a995();
  let _0x4f8af1 = $.farmInfo.farmUserPro.totalEnergy;
  const {
    fastCard: _0x221413,
    doubleCard: _0x2fb5d7,
    beanCard: _0x2b769b,
    signCard: _0x482867
  } = $.myCardInfoRes;
  console.log("\n检查背包道具:\n快速浇水卡:" + (_0x221413 === -1 ? "未解锁" : _0x221413 + "张") + "\n水滴翻倍卡:" + (_0x2fb5d7 === -1 ? "未解锁" : _0x2fb5d7 + "张") + "\n水滴换京豆卡:" + (_0x2b769b === -1 ? "未解锁" : _0x2b769b + "张") + "\n加签卡:" + (_0x482867 === -1 ? "未解锁" : _0x482867 + "张") + "\n");
  if (_0x4f8af1 >= 100 && _0x2fb5d7 > 0 && $.farmInfo.farmUserPro.treeState == 1) {
    for (let _0x5852ad = 0; _0x5852ad < new Array(_0x2fb5d7).fill("").length; _0x5852ad++) {
      await bdy_0x511ab2("doubleCard");
      $.userMyCardRes.code == "0" && ($.log("翻倍成功，获得" + $.userMyCardRes.addWater + "g💧"), _0x4f8af1 += $.userMyCardRes.addWater);
    }
  }
  if (_0x482867 > 0 && $.farmInfo.farmUserPro.treeState == 1) {
    $.log("\n使用加签卡...");
    for (let _0x2ecb79 = 0; _0x2ecb79 < 3; _0x2ecb79++) {
      await bdy_0x511ab2("signCard");
      if ($.userMyCardRes.code == 0) {
        $.log("加签成功，获得" + $.userMyCardRes.amount + "g💧");
        _0x4f8af1 += $.userMyCardRes.amount;
      } else {
        if ($.userMyCardRes.code == 20) {
          $.log("使用上限了!");
          break;
        } else {
          if ($.userMyCardRes.code == 8) {
            $.log("无法加签了!");
            break;
          } else {
            console.log(JSON.stringify($.userMyCardRes) + "\n");
            break;
          }
        }
      }
    }
  }
  bdy_0x5915f1 = $.getdata("jdFruitBeanCard") ? $.getdata("jdFruitBeanCard") : bdy_0x5915f1;
  $.isNode() && process.env.FRUIT_BEAN_CARD && (bdy_0x5915f1 = process.env.FRUIT_BEAN_CARD);
  if (bdy_0x5915f1 == "true" && JSON.stringify($.myCardInfoRes).match("限时翻倍")) {
    console.log("\n您设置的是水滴换豆功能,现在为您换豆");
    if (_0x4f8af1 >= 100 && $.myCardInfoRes.beanCard > 0) {
      await bdy_0x511ab2("beanCard");
      if ($.userMyCardRes.code === "0") {
        bdy_0x3c133e += "【水滴换豆卡】获得" + $.userMyCardRes.beanCount + "个京豆\n";
        return;
      }
    } else {
      console.log("您目前水滴:" + _0x4f8af1 + "g,水滴换豆卡" + $.myCardInfoRes.beanCard + "张,暂不满足水滴换豆的条件,为您继续浇水");
    }
  }
}
async function bdy_0x534e6d() {
  console.log("检查剩余水滴能否继续浇水...\n");
  await bdy_0x3cc3a4();
  let _0x3c7669 = $.farmInfo.farmUserPro.totalEnergy;
  console.log("剩余水滴" + _0x3c7669 + "g\n");
  const {
    fastCard: _0x5f48e0,
    doubleCard: _0x176a4e,
    beanCard: _0x364ceb,
    signCard: _0x3a5c85
  } = $.myCardInfoRes;
  let _0x2ac389 = _0x3c7669 - bdy_0x49cdc5;
  $.log("\n开始浇水...");
  if (_0x3c7669 > 800 && $.myCardInfoRes.fastCard > 0 && $.farmInfo.farmUserPro.treeState === 1) {
    $.log("\n水比较多去快速浇水...");
    for (let _0x5273f2 = 0; _0x5273f2 < Math.min.apply(null, [new Array(_0x5f48e0).fill("").length, parseInt(_0x2ac389 / 10), ($.farmInfo.farmUserPro.treeTotalEnergy - $.farmInfo.farmUserPro.treeEnergy) / 10]); _0x5273f2++) {
      await bdy_0x511ab2("fastCard");
      $.log("快速浇水" + (_0x5273f2 + 1) + "次");
      $.userMyCardRes.code === "0" && console.log("快速浇水" + $.userMyCardRes.waterEnergy + "g成功\n");
      if ($.userMyCardRes.treeFinished) {
        $.log("水果已成熟啦！\n");
        break;
      }
      await $.wait(500);
      _0x3c7669 -= 100;
      if (_0x3c7669 < 200) {
        break;
      }
    }
    _0x2ac389 = _0x3c7669 - bdy_0x49cdc5;
  } else {
    if (_0x3c7669 >= $.farmInfo.farmUserPro.treeTotalEnergy - $.farmInfo.farmUserPro.treeEnergy) {
      bdy_0x27f2be = false;
      for (let _0xef673d = 0; _0xef673d < ($.farmInfo.farmUserPro.treeTotalEnergy - $.farmInfo.farmUserPro.treeEnergy) / 10; _0xef673d++) {
        await bdy_0x259837();
        await $.wait(500);
        $.log("浇水" + (_0xef673d + 1) + "次");
        if ($.waterResult.code === "0") {
          console.log("浇水10g成功");
          if ($.waterResult.finished) {
            bdy_0x27f2be = true;
            $.log("水果已成熟啦！\n");
            break;
          } else {
            console.log("剩余水滴" + $.waterResult.totalEnergy + "g,果树已浇水" + $.waterResult.treeEnergy + "g\n");
          }
        } else {
          console.log("浇水出现失败异常,跳出不在继续浇水");
          break;
        }
      }
      bdy_0x27f2be && (bdy_0x21f8a2["open-url"] = bdy_0x2aae28, $.msg($.name, "", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo.farmUserPro.name + "已可领取\n请去京东APP或微信小程序查看\n点击弹窗即达", bdy_0x21f8a2), $.isNode() && (await bdy_0x204412.sendNotify($.name + " - 账号" + $.index + " - " + ($.nickName || $.UserName) + "水果已可领取", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n" + $.farmInfo.farmUserPro.name + "已可领取")));
    } else {
      if (_0x2ac389 > 10) {
        console.log("目前剩余水滴：" + _0x3c7669 + "g，可继续浇水");
        bdy_0x27f2be = false;
        for (let _0x580cbb = 0; _0x580cbb < parseInt(_0x2ac389 / 10); _0x580cbb++) {
          $.log("浇水" + (_0x580cbb + 1) + "次");
          await bdy_0x259837();
          if ($.waterResult.code === "0") {
            console.log("浇水10g成功,剩余" + $.waterResult.totalEnergy + "g,果树已浇水" + $.waterResult.treeEnergy + "g\n");
            if ($.waterResult.finished) {
              bdy_0x27f2be = true;
              $.log("水果已成熟啦！\n");
              break;
            } else {
              await bdy_0x390183();
            }
          } else {
            console.log("浇水出现失败异常,跳出不在继续浇水");
            break;
          }
        }
        bdy_0x27f2be && (bdy_0x21f8a2["open-url"] = bdy_0x2aae28, $.msg($.name, "", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo.farmUserPro.name + "已可领取\n请去京东APP或微信小程序查看\n点击弹窗即达", bdy_0x21f8a2), $.isNode() && (await bdy_0x204412.sendNotify($.name + " - 账号" + $.index + " - " + ($.nickName || $.UserName) + "水果已可领取", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n" + $.farmInfo.farmUserPro.name + "已可领取")));
      } else {
        console.log("目前剩余水滴：【" + _0x3c7669 + "】g,不再继续浇水,保留部分水滴用于完成第二天【十次浇水得水滴】任务");
      }
    }
  }
}
function bdy_0x390183() {
  return new Promise(async _0x556be4 => {
    if ($.waterResult.waterStatus === 0 && $.waterResult.treeEnergy === 10) {
      console.log("果树发芽了,奖励30g💧");
      await bdy_0x365d92("1");
      console.log("浇水阶段奖励1领取结果 " + JSON.stringify($.gotStageAwardForFarmRes));
      $.gotStageAwardForFarmRes.code === "0" && console.log("【果树发芽了】奖励" + $.gotStageAwardForFarmRes.addEnergy + "💧\n");
    } else {
      if ($.waterResult.waterStatus === 1) {
        console.log("果树开花了,奖励40g💧");
        await bdy_0x365d92("2");
        console.log("浇水阶段奖励2领取结果 " + JSON.stringify($.gotStageAwardForFarmRes));
        $.gotStageAwardForFarmRes.code === "0" && console.log("【果树开花了】奖励" + $.gotStageAwardForFarmRes.addEnergy + "g💧\n");
      } else {
        $.waterResult.waterStatus === 2 && (console.log("果树长出小果子啦, 奖励50g💧"), await bdy_0x365d92("3"), console.log("浇水阶段奖励3领取结果 " + JSON.stringify($.gotStageAwardForFarmRes)), $.gotStageAwardForFarmRes.code === "0" && console.log("【果树结果了】奖励" + $.gotStageAwardForFarmRes.addEnergy + "g💧\n"));
      }
    }
    _0x556be4();
  });
}
async function bdy_0x25691d() {
  await bdy_0x4bdc02();
  if ($.initForTurntableFarmRes.code === "0") {
    let {
      timingIntervalHours: _0x1f638c,
      timingLastSysTime: _0x4e54ba,
      sysTime: _0x36cbda,
      timingGotStatus: _0x2ee3a6,
      remainLotteryTimes: _0x10af5c,
      turntableInfos: _0x224148
    } = $.initForTurntableFarmRes;
    !_0x2ee3a6 ? (console.log("领取免费赠送的抽奖机会----" + (_0x36cbda > _0x4e54ba + 3600 * _0x1f638c * 1000)), _0x36cbda > _0x4e54ba + 3600 * _0x1f638c * 1000 ? (await bdy_0x575e31(), $.timingAwardRes.code == 0 ? (console.log("领取定时奖励: " + $.timingAwardRes.addTimes + "次抽奖机会🥳"), _0x10af5c = $.timingAwardRes.remainLotteryTimes) : console.log("" + JSON.stringify($.timingAwardRes))) : console.log("免费赠送的抽奖机会未到时间")) : console.log("4小时免费赠送的抽奖机会已领取");
    let _0x803f2a = $.initForTurntableFarmRes.turntableBrowserAds.filter(_0x2669d3 => !_0x2669d3.status);
    if (_0x803f2a.length > 0) {
      for (let _0x96356a = 0; _0x96356a < _0x803f2a.length; _0x96356a++) {
        console.log("\n开始天天抽奖的第" + (_0x96356a + 1) + "个逛会场任务");
        await bdy_0x54ad43(1, $.initForTurntableFarmRes.turntableBrowserAds[_0x96356a].adId);
        $.browserForTurntableFarmRes.code === "0" && $.browserForTurntableFarmRes.status && (console.log("任务完成，去领取奖励"), await bdy_0x54ad43(2, $.initForTurntableFarmRes.turntableBrowserAds[_0x96356a].adId), $.browserForTurntableFarmRes.code === "0" && (console.log("获得" + $.browserForTurntableFarmRes.addTimes + "次抽奖机会🥳\n"), _0x10af5c = $.browserForTurntableFarmRes.totalTimes));
      }
    } else {
      $.log("\n天天抽奖任务已全部完成！");
    }
    if (_0x10af5c > 0) {
      console.log("\n天天抽奖次数 " + _0x10af5c);
      console.log("开始抽奖...");
      let _0x5529fc = "";
      for (let _0x4ef597 = 0; _0x4ef597 < new Array(_0x10af5c).fill("").length; _0x4ef597++) {
        await bdy_0x3ba2e3();
        await $.wait(500);
        console.log("第" + (_0x4ef597 + 1) + "次抽奖");
        if ($.lotteryRes.code === "0") {
          _0x224148.map(_0x465f7a => {
            if (_0x465f7a.type === $.lotteryRes.type) {
              if ($.lotteryRes.type.match(/bean/g) && $.lotteryRes.type.match(/bean/g)[0] === "bean") {
                _0x5529fc += _0x465f7a.name + "个🥔，";
              } else {
                $.lotteryRes.type.match(/water/g) && $.lotteryRes.type.match(/water/g)[0] === "water" ? _0x5529fc += _0x465f7a.name + "💧，" : _0x5529fc += _0x465f7a.name + "，";
              }
            }
          });
          if ($.lotteryRes.remainLotteryTimes === 0) {
            break;
          }
        }
      }
      _0x5529fc && console.log("天天抽奖奖励：" + _0x5529fc.substr(0, _0x5529fc.length - 1) + "\n");
    } else {
      console.log("天天抽奖无次数！");
    }
  } else {
    console.log("初始化天天抽奖得好礼失败！");
  }
}
async function bdy_0x2171e0() {
  await bdy_0x1ece08();
  if ($.farmAssistResult.code === "0") {
    if ($.farmAssistResult.assistFriendList && $.farmAssistResult.assistFriendList.length >= 1) {
      if ($.farmAssistResult.status === 2) {
        let _0x17f6bd = 0;
        for (let _0x4e0354 of Object.keys($.farmAssistResult.assistStageList)) {
          let _0x5620ca = $.farmAssistResult.assistStageList[_0x4e0354];
          _0x5620ca.stageStaus === 2 && (await bdy_0x24b9f1(), await $.wait(500), $.receiveStageEnergy.code === "0" && (console.log("成功领取第" + (Number(_0x4e0354) + 1) + "段助力奖励：【" + $.receiveStageEnergy.amount + "】g💧"), _0x17f6bd += $.receiveStageEnergy.amount));
        }
        bdy_0x3c133e += "【额外奖励】" + _0x17f6bd + "g💧领取成功\n";
      } else {
        $.farmAssistResult.status === 3 && (console.log("已经领取过助力额外奖励"), bdy_0x3c133e += "【额外奖励】已领取过\n");
      }
    } else {
      console.log("助力好友未达门槛");
      bdy_0x3c133e += "【额外奖励】领取失败,原因：给您助力的人未达门槛\n";
    }
    if ($.farmAssistResult.assistFriendList && $.farmAssistResult.assistFriendList.length > 0) {
      let _0x34520c = "";
      $.farmAssistResult.assistFriendList.map((_0x19a091, _0x33533a) => {
        _0x33533a === $.farmAssistResult.assistFriendList.length - 1 ? _0x34520c += _0x19a091.nickName || "匿名用户" : _0x34520c += (_0x19a091.nickName || "匿名用户") + ",";
        let _0xf5029 = new Date(_0x19a091.time),
          _0x26a6bf = _0xf5029.getFullYear() + "-" + (_0xf5029.getMonth() + 1) + "-" + _0xf5029.getDate() + " " + _0xf5029.getHours() + ":" + _0xf5029.getMinutes() + ":" + _0xf5029.getMinutes();
        console.log("【" + (_0x19a091.nickName || "匿名用户") + "】 在 " + _0x26a6bf + " 给您助过力");
      });
      bdy_0x3c133e += "【助力您的好友】" + _0x34520c + "\n";
    }
    console.log("\n领取额外奖励水滴结束\n");
  } else {
    await bdy_0xb31f05();
    if ($.masterHelpResult.code === "0") {
      $.masterHelpResult.masterHelpPeoples && $.masterHelpResult.masterHelpPeoples.length >= 5 ? !$.masterHelpResult.masterGotFinal ? (await bdy_0x58950d(), $.masterGotFinished.code === "0" && (console.log("已成功领取好友助力奖励：【" + $.masterGotFinished.amount + "】g💧"), bdy_0x3c133e += "【额外奖励】" + $.masterGotFinished.amount + "g💧领取成功\n")) : (console.log("已经领取过5好友助力额外奖励"), bdy_0x3c133e += "【额外奖励】已被领取过\n") : (console.log("助力好友未达到5个"), bdy_0x3c133e += "【额外奖励】领取失败,原因：给您助力的人未达5个\n");
      if ($.masterHelpResult.masterHelpPeoples && $.masterHelpResult.masterHelpPeoples.length > 0) {
        let _0x13e4a4 = "";
        $.masterHelpResult.masterHelpPeoples.map((_0x54a453, _0x19ab4b) => {
          _0x19ab4b === $.masterHelpResult.masterHelpPeoples.length - 1 ? _0x13e4a4 += _0x54a453.nickName || "匿名用户" : _0x13e4a4 += (_0x54a453.nickName || "匿名用户") + ",";
          let _0x1b25e7 = new Date(_0x54a453.time),
            _0x91f01a = _0x1b25e7.getFullYear() + "-" + (_0x1b25e7.getMonth() + 1) + "-" + _0x1b25e7.getDate() + " " + _0x1b25e7.getHours() + ":" + _0x1b25e7.getMinutes() + ":" + _0x1b25e7.getMinutes();
          console.log("【" + (_0x54a453.nickName || "匿名用户") + "】 在 " + _0x91f01a + " 给您助过力");
        });
        bdy_0x3c133e += "【助力您的好友】" + _0x13e4a4 + "\n";
      }
      console.log("领取额外奖励水滴结束\n");
    }
  }
}
async function bdy_0x21f601() {
  let _0x485743 = !$.farmTask.waterRainInit.f;
  _0x485743 ? (console.log("水滴雨任务，每天两次，最多可得10g水滴"), console.log("两次水滴雨任务是否全部完成：" + ($.farmTask.waterRainInit.f ? "是" : "否")), $.farmTask.waterRainInit.lastTime && Date.now() < $.farmTask.waterRainInit.lastTime + 10800000 && (_0x485743 = false, console.log("【第" + ($.farmTask.waterRainInit.winTimes + 1) + "次水滴雨】还未到时间\n")), _0x485743 && (console.log("开始水滴雨任务,这是第" + ($.farmTask.waterRainInit.winTimes + 1) + "次，剩余" + (2 - ($.farmTask.waterRainInit.winTimes + 1)) + "次"), await bdy_0x398d89(), console.log("水滴雨waterRain"), $.waterRain.code === "0" && (console.log("水滴雨任务执行成功，获得水滴：" + $.waterRain.addEnergy + "g💧"), console.log("【第" + ($.farmTask.waterRainInit.winTimes + 1) + "次水滴雨】获得" + $.waterRain.addEnergy + "g💧\n")))) : console.log("【水滴雨】已全部完成\n");
}
async function bdy_0x54e902() {
  console.log("开始打卡领水活动（签到，关注，领券）");
  await bdy_0x4640ab();
  if ($.clockInInit.code === "0") {
    !$.clockInInit.todaySigned && (console.log("开始今日签到"), await bdy_0x4c327a(), $.clockInForFarmRes.code === "0" ? (console.log("【第" + $.clockInForFarmRes.signDay + "天签到】获得" + $.clockInForFarmRes.amount + "g💧\n"), $.clockInForFarmRes.signDay === 7 && (console.log("开始领取惊喜礼包"), await bdy_0x20eeb7(), $.gotClockInGiftRes.code === "0" && console.log("【惊喜礼包】获得" + $.gotClockInGiftRes.amount + "g💧\n"))) : console.log("打卡结果" + JSON.stringify($.clockInForFarmRes)));
    $.clockInInit.todaySigned && $.clockInInit.totalSigned === 7 && (console.log("开始领取惊喜礼包"), await bdy_0x20eeb7(), $.gotClockInGiftRes.code === "0" && console.log("【惊喜礼包】获得" + $.gotClockInGiftRes.amount + "g💧\n"));
    if ($.clockInInit.themes && $.clockInInit.themes.length > 0) {
      for (let _0x480d2d of $.clockInInit.themes) {
        !_0x480d2d.hadGot && (console.log("去关注" + _0x480d2d.name), await bdy_0x28cc80(_0x480d2d.id, "theme", "1"), $.themeStep1.code === "0" ? (await bdy_0x28cc80(_0x480d2d.id, "theme", "2"), $.themeStep2.code === "0" ? console.log("关注 成功，获得" + $.themeStep2.amount + "g💧\n") : console.log("themeStep2结果: " + JSON.stringify($.themeStep2))) : console.log("themeStep1结果: " + JSON.stringify($.themeStep1)));
      }
    }
    if ($.clockInInit.venderCoupons && $.clockInInit.venderCoupons.length > 0) {
      for (let _0x5839ad of $.clockInInit.venderCoupons) {
        !_0x5839ad.hadGot && (console.log("领券的ID" + _0x5839ad.id), await bdy_0x28cc80(_0x5839ad.id, "venderCoupon", "1"), console.log("venderCouponStep1--结果" + JSON.stringify($.venderCouponStep1)), $.venderCouponStep1.code === "0" && (await bdy_0x28cc80(_0x5839ad.id, "venderCoupon", "2"), $.venderCouponStep2.code === "0" && (console.log("venderCouponStep2--结果" + JSON.stringify($.venderCouponStep2)), console.log("从" + _0x5839ad.name + "领券，获得水滴" + $.venderCouponStep2.amount + "g💧"))));
      }
    }
  }
  console.log("打卡领水活动结束\n");
}
async function bdy_0x3962f4() {
  await bdy_0x191f93();
  console.log("\n开始给好友浇水...");
  await bdy_0x12c5f2();
  const {
    waterFriendCountKey: _0xfd9faa,
    waterFriendMax: _0x13201f
  } = $.farmTask.waterFriendTaskInit;
  console.log("今日已给" + _0xfd9faa + "个好友浇水");
  if (_0xfd9faa < _0x13201f) {
    let _0x5464d2 = [];
    if ($.friendList.friends && $.friendList.friends.length > 0) {
      $.friendList.friends.map((_0x37703b, _0x2333f9) => {
        _0x37703b.friendState === 1 && _0x5464d2.length < _0x13201f - _0xfd9faa && _0x5464d2.push(_0x37703b.shareCode);
      });
      _0x5464d2.length > 0 && console.log("需要浇水的好友shareCodes:" + JSON.stringify(_0x5464d2));
      _0x5464d2.length == 0 && console.log("没有需要浇水的好友!\n");
      let _0x168216 = 0,
        _0x6ab4ee = "";
      for (let _0x297d68 = 0; _0x297d68 < _0x5464d2.length; _0x297d68++) {
        await bdy_0xb971d3(_0x5464d2[_0x297d68]);
        console.log("为第" + (_0x297d68 + 1) + "个好友浇水");
        if ($.waterFriendForFarmRes.code === "0") {
          _0x168216++;
          if ($.waterFriendForFarmRes.cardInfo) {
            console.log("为好友浇水获得道具了");
            if ($.waterFriendForFarmRes.cardInfo.type === "beanCard") {
              console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule);
              _0x6ab4ee += "水滴换豆卡,";
            } else {
              if ($.waterFriendForFarmRes.cardInfo.type === "fastCard") {
                console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule);
                _0x6ab4ee += "快速浇水卡,";
              } else {
                if ($.waterFriendForFarmRes.cardInfo.type === "doubleCard") {
                  console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule);
                  _0x6ab4ee += "水滴翻倍卡,";
                } else {
                  $.waterFriendForFarmRes.cardInfo.type === "signCard" && (console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule), _0x6ab4ee += "加签卡,");
                }
              }
            }
          }
        } else {
          $.waterFriendForFarmRes.code === "11" && console.log("水滴不够,跳出浇水");
        }
      }
      _0x168216 > 0 && console.log("已给" + _0x168216 + "个好友浇水,消耗" + _0x168216 * 10 + "g水\n");
      _0x6ab4ee && _0x6ab4ee.length > 0 && console.log("【好友浇水奖励】" + _0x6ab4ee.substr(0, _0x6ab4ee.length - 1) + "\n");
    } else {
      console.log("好友列表无好友,快去邀请您的好友吧!\n");
    }
  } else {
    console.log("今日已为" + _0x13201f + "个好友浇水\n");
  }
}
async function bdy_0x4c7173() {
  await bdy_0x12c5f2();
  const {
    waterFriendCountKey: _0x5a4fe3,
    waterFriendMax: _0x483c16,
    waterFriendSendWater: _0x5e9be7,
    waterFriendGotAward: _0x887f0c
  } = $.farmTask.waterFriendTaskInit;
  _0x5a4fe3 >= _0x483c16 ? !_0x887f0c ? (await bdy_0x524e6a(), $.waterFriendGotAwardRes.code === "0" && console.log("领取给好友浇水奖励" + $.waterFriendGotAwardRes.addWater + "g💧\n")) : console.log("给好友浇水的水滴奖励已领取\n") : console.log("给" + _0x483c16 + "个好友浇水未完成\n");
}
async function bdy_0x51de20() {
  for (let _0x28b337 of bdy_0xcecb1a) {
    if (_0x28b337 === $.farmInfo.farmUserPro.shareCode) {
      console.log("自己不能邀请自己成为好友噢\n");
      continue;
    }
    await bdy_0x71df87(_0x28b337);
    if ($.inviteFriendRes && $.inviteFriendRes.helpResult && $.inviteFriendRes.helpResult.code === "0") {
      console.log("接收邀请成为好友结果成功,您已成为" + $.inviteFriendRes.helpResult.masterUserInfo.nickName + "的好友");
    } else {
      $.inviteFriendRes && $.inviteFriendRes.helpResult && $.inviteFriendRes.helpResult.code === "17" && console.log("接收邀请成为好友结果失败,对方已是您的好友");
    }
  }
}
async function bdy_0x5b8676() {
  for (let _0x2376e1 = 0; _0x2376e1 < 10; _0x2376e1++) {
    const _0x5dde8e = {
      type: 2,
      version: 24,
      channel: 1,
      babelChannel: "121"
    };
    $.duckRes = await bdy_0x40f127("getFullCollectionReward", _0x5dde8e);
    if ($.duckRes.code === "0") {
      if (!$.duckRes.hasLimit) {
        console.log("小鸭子游戏:" + $.duckRes.title);
      } else {
        console.log("" + $.duckRes.title);
        break;
      }
    } else {
      if ($.duckRes.code === "10") {
        console.log("小鸭子游戏达到上限");
        break;
      }
    }
  }
}
async function bdy_0x52e080() {
  $.totalWaterReward = await bdy_0x40f127("totalWaterTaskForFarm");
}
async function bdy_0x269737() {
  $.firstWaterReward = await bdy_0x40f127("firstWaterTaskForFarm");
}
async function bdy_0x327e7e() {
  const _0xf75931 = {
    version: 24,
    channel: 1,
    babelChannel: "121",
    lat: "0",
    lng: "0"
  };
  $.newtaskinfo = await bdy_0x40f127("gotNewUserTaskForFarm", _0xf75931);
}
async function bdy_0x1c4d7c() {
  const _0x5a1b0e = {
    version: 24,
    channel: 1,
    babelChannel: "121",
    lat: "0",
    lng: "0"
  };
  $.newtaskinfo = await bdy_0x40f127("gotLowFreqWaterForFarm", _0x5a1b0e);
}
async function bdy_0x3cc3a4() {
  const _0x4139c3 = {
    version: 24,
    channel: 1,
    babelChannel: "121",
    lat: "0",
    lng: "0"
  };
  $.farmInfo = await bdy_0x40f127("gotNewUserTaskForFarm", _0x4139c3);
}
async function bdy_0x1732fa() {
  const _0x46f27b = {
    version: 24,
    channel: 1,
    babelChannel: "121",
    lat: "0",
    lng: "0"
  };
  $.farmInfoI = await bdy_0x40f127("initForFarm", _0x46f27b);
}
async function bdy_0x524e6a() {
  const _0x4c6c27 = {
    version: 24,
    channel: 1,
    babelChannel: "121"
  };
  $.waterFriendGotAwardRes = await bdy_0x40f127("waterFriendGotAwardForFarm", _0x4c6c27);
}
async function bdy_0x25a995() {
  const _0xd81a52 = {
    version: 24,
    channel: 1,
    babelChannel: "121"
  };
  $.myCardInfoRes = await bdy_0x40f127("myCardInfoForFarm", _0xd81a52);
}
async function bdy_0x511ab2(_0x1f5a55) {
  const _0x18f91b = {
    cardType: _0x1f5a55
  };
  $.userMyCardRes = await bdy_0x40f127("userMyCardForFarm", _0x18f91b);
}
async function bdy_0x365d92(_0x5cf94b) {
  const _0x57e119 = {
    type: _0x5cf94b
  };
  $.gotStageAwardForFarmRes = await bdy_0x40f127("gotStageAwardForFarm", _0x57e119);
}
async function bdy_0x259837() {
  await $.wait(1000);
  $.waterResult = await bdy_0x40f127("waterGoodForFarm");
}
async function bdy_0x4bdc02() {
  const _0x2e63d9 = {
    version: 24,
    channel: 1,
    babelChannel: "121"
  };
  $.initForTurntableFarmRes = await bdy_0x40f127("initForTurntableFarm", _0x2e63d9);
}
async function bdy_0x3ba2e3() {
  await $.wait(2000);
  const _0x1fa88a = {
    type: 1,
    version: 24,
    channel: 1,
    babelChannel: "121"
  };
  $.lotteryRes = await bdy_0x40f127("lotteryForTurntableFarm", _0x1fa88a);
}
async function bdy_0x575e31() {
  const _0x5f0785 = {
    version: 24,
    channel: 1,
    babelChannel: "121"
  };
  $.timingAwardRes = await bdy_0x40f127("timingAwardForTurntableFarm", _0x5f0785);
}
async function bdy_0x54ad43(_0x5f13c0, _0x52d981) {
  const _0x36f9c9 = {
    type: _0x5f13c0,
    adId: _0x52d981,
    version: 24,
    channel: 1,
    babelChannel: "121"
  };
  $.browserForTurntableFarmRes = await bdy_0x40f127("browserForTurntableFarm", _0x36f9c9);
}
async function bdy_0x10176b(_0x1ad36d) {
  const _0x3219f2 = {
    type: 2,
    adId: _0x1ad36d,
    version: 24,
    channel: 1,
    babelChannel: "121"
  };
  $.browserForTurntableFarm2Res = await bdy_0x40f127("browserForTurntableFarm", _0x3219f2);
}
async function bdy_0x48a037() {
  const _0xe3e8e3 = {
    imageUrl: "",
    nickName: "",
    shareCode: arguments[0] + "-3",
    babelChannel: "3",
    version: 24,
    channel: 1
  };
  $.lotteryMasterHelpRes = await bdy_0x40f127("initForFarm", _0xe3e8e3);
}
async function bdy_0x58950d() {
  $.masterGotFinished = await bdy_0x40f127("masterGotFinishedTaskForFarm");
}
async function bdy_0xb31f05() {
  $.masterHelpResult = await bdy_0x40f127("masterHelpTaskInitForFarm");
}
async function bdy_0x1ece08() {
  const _0x26aec7 = {
    version: 24,
    channel: 1,
    babelChannel: "121"
  };
  $.farmAssistResult = await bdy_0x40f127("farmAssistInit", _0x26aec7);
}
async function bdy_0x24b9f1() {
  const _0x37bfec = {
    version: 24,
    channel: 1,
    babelChannel: "121"
  };
  $.receiveStageEnergy = await bdy_0x40f127("receiveStageEnergy", _0x37bfec);
}
async function bdy_0x71df87() {
  const _0x3c0294 = {
    imageUrl: "",
    nickName: "",
    shareCode: arguments[0] + "-inviteFriend",
    version: 4,
    channel: 2
  };
  $.inviteFriendRes = await bdy_0x40f127("initForFarm", _0x3c0294);
}
async function bdy_0x295597() {
  const _0x177792 = {
    imageUrl: "",
    nickName: "",
    shareCode: arguments[0],
    babelChannel: "3",
    version: 2,
    channel: 1
  };
  $.helpResult = await bdy_0x40f127("initForFarm", _0x177792);
}
async function bdy_0x398d89() {
  const _0x3f54cf = {
    type: 1,
    hongBaoTimes: 100,
    version: 24,
    channel: 1,
    babelChannel: "121"
  };
  $.waterRain = await bdy_0x40f127("waterRainForFarm", _0x3f54cf);
}
async function bdy_0x4640ab() {
  $.clockInInit = await bdy_0x40f127("clockInInitForFarm");
}
async function bdy_0x4c327a() {
  const _0x30ef5b = {
    type: 1
  };
  $.clockInForFarmRes = await bdy_0x40f127("clockInForFarm", _0x30ef5b);
}
async function bdy_0x28cc80(_0x415756, _0x18880d, _0x47e786) {
  const _0x578c61 = "clockInFollowForFarm",
    _0x116a31 = {
      id: _0x415756,
      type: _0x18880d,
      step: _0x47e786
    };
  if (_0x18880d === "theme") {
    if (_0x47e786 === "1") {
      $.themeStep1 = await bdy_0x40f127(_0x578c61, _0x116a31);
    } else {
      _0x47e786 === "2" && ($.themeStep2 = await bdy_0x40f127(_0x578c61, _0x116a31));
    }
  } else {
    if (_0x18880d === "venderCoupon") {
      if (_0x47e786 === "1") {
        $.venderCouponStep1 = await bdy_0x40f127(_0x578c61, _0x116a31);
      } else {
        _0x47e786 === "2" && ($.venderCouponStep2 = await bdy_0x40f127(_0x578c61, _0x116a31));
      }
    }
  }
}
async function bdy_0x20eeb7() {
  const _0x5a6864 = {
    type: 2,
    version: 24,
    channel: 1,
    babelChannel: "121",
    lat: "0",
    lng: "0"
  };
  $.gotClockInGiftRes = await bdy_0x40f127("clockInForFarm", _0x5a6864);
}
async function bdy_0x78ae34() {
  $.threeMeal = await bdy_0x40f127("gotThreeMealForFarm");
}
async function bdy_0x16efaa(_0x1751e1, _0x290439, _0x2bec4f) {
  if (_0x290439 === 0) {
    const _0x54dd42 = {
      advertId: _0x1751e1,
      type: _0x290439,
      adType: _0x2bec4f,
      version: 24,
      channel: 1,
      babelChannel: "121",
      lat: "0",
      lng: "0"
    };
    $.browseResult = await bdy_0x40f127("browseAdTaskForFarm", _0x54dd42);
  } else {
    if (_0x290439 === 1) {
      const _0x318a29 = {
        advertId: _0x1751e1,
        type: _0x290439,
        adType: _0x2bec4f,
        version: 24,
        channel: 1,
        babelChannel: "121",
        lat: "0",
        lng: "0"
      };
      $.browseRwardResult = await bdy_0x40f127("browseAdTaskForFarm", _0x318a29);
    }
  }
}
async function bdy_0x5dc20b() {
  const _0x43d0aa = {
    type: 3
  };
  $.goalResult = await bdy_0x40f127("gotWaterGoalTaskForFarm", _0x43d0aa);
}
async function bdy_0x12c5f2() {
  const _0x54b91d = {
    version: 24,
    channel: 1,
    babelChannel: "121",
    lat: "0",
    lng: "0"
  };
  $.farmTask = await bdy_0x40f127("taskInitForFarm", _0x54b91d);
}
async function bdy_0x492c1d() {
  const _0x35c046 = {
    version: 24,
    channel: 1,
    babelChannel: "45",
    lat: "0",
    lng: "0"
  };
  $.farmTask = await bdy_0x40f127("taskInitForFarm", _0x35c046);
}
async function bdy_0x191f93() {
  const _0xb526d7 = {
    version: 24,
    channel: 1,
    babelChannel: "121",
    lat: "0",
    lng: "0"
  };
  $.friendList = await bdy_0x40f127("friendListInitForFarm", _0xb526d7);
}
async function bdy_0xfde96c() {
  $.awardInviteFriendRes = await bdy_0x40f127("awardInviteFriendForFarm");
}
async function bdy_0xb971d3(_0x30954a) {
  const _0x5844df = {
    shareCode: _0x30954a,
    version: 24,
    channel: 1,
    babelChannel: "121"
  };
  $.waterFriendForFarmRes = await bdy_0x40f127("waterFriendForFarm", _0x5844df);
}
async function bdy_0x4c9870() {
  if ($.isNode() && process.env.FRUIT_NOTIFY_CONTROL) {
    $.ctrTemp = "" + process.env.FRUIT_NOTIFY_CONTROL === "false";
  } else {
    $.getdata("jdFruitNotify") ? $.ctrTemp = $.getdata("jdFruitNotify") === "false" : $.ctrTemp = "" + bdy_0x3c5af === "false";
  }
  $.ctrTemp ? ($.msg($.name, bdy_0x14ba9f, bdy_0x3c133e, bdy_0x21f8a2), $.isNode() && (bdy_0x26ce12 += bdy_0x14ba9f + "\n" + bdy_0x3c133e + ($.index !== bdy_0x5db7c6.length ? "\n\n" : ""))) : $.log("\n" + bdy_0x3c133e + "\n");
}
function bdy_0x4a3911(_0x5c9ab8) {
  let _0x47658c;
  _0x5c9ab8 ? _0x47658c = new Date(_0x5c9ab8) : _0x47658c = new Date();
  return _0x47658c.getFullYear() + "-" + (_0x47658c.getMonth() + 1 >= 10 ? _0x47658c.getMonth() + 1 : "0" + (_0x47658c.getMonth() + 1)) + "-" + (_0x47658c.getDate() >= 10 ? _0x47658c.getDate() : "0" + _0x47658c.getDate());
}
function bdy_0x331d23() {
  return new Promise(_0x177e55 => {
    console.log("开始获取配置文件\n");
    bdy_0x204412 = $.isNode() ? require("./sendNotify") : "";
    const _0x3dc78b = $.isNode() ? require("./jdCookie.js") : "";
    if ($.isNode()) {
      Object.keys(_0x3dc78b).forEach(_0xd885a4 => {
        _0x3dc78b[_0xd885a4] && bdy_0x5db7c6.push(_0x3dc78b[_0xd885a4]);
      });
      if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
        console.log = () => {};
      }
    } else {
      bdy_0x5db7c6 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...bdy_0x386fea($.getdata("CookiesJD") || "[]").map(_0x404259 => _0x404259.cookie)].filter(_0x417b64 => !!_0x417b64);
    }
    _0x177e55();
  });
}
async function bdy_0x15a2f9() {
  const _0x4a7ba4 = {
    type: 1,
    babelChannel: "121",
    line: "getBean",
    version: 24,
    channel: 1,
    lat: "0",
    lng: "0"
  };
  await bdy_0x40f127("ddnc_getTreasureBoxAward", _0x4a7ba4);
  await $.wait(500);
  await bdy_0x5a960d();
  await $.wait(2000);
  const _0x3c9182 = {
    type: 2,
    babelChannel: "121",
    line: "getBean",
    version: 24,
    channel: 1,
    lat: "0",
    lng: "0"
  };
  let _0x3b60c6 = await bdy_0x40f127("ddnc_getTreasureBoxAward", _0x3c9182);
  return _0x3b60c6;
}
async function bdy_0x223789() {
  const _0x149a1b = {
    type: 1,
    babelChannel: "121",
    version: 24,
    channel: 1,
    lat: "0",
    lng: "0"
  };
  await bdy_0x40f127("ddnc_getTreasureBoxAward", _0x149a1b);
  await $.wait(500);
  await bdy_0x492c1d();
  await $.wait(2000);
  const _0x704e5 = {
    type: 2,
    babelChannel: "45",
    version: 24,
    channel: 1,
    lat: "0",
    lng: "0"
  };
  let _0x42e155 = await bdy_0x40f127("ddnc_getTreasureBoxAward", _0x704e5);
  return _0x42e155;
}
function bdy_0x5a960d() {
  return new Promise(_0x55fb4d => {
    const _0x413b6d = {
      Cookie: bdy_0x5965e4,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0xd53c12 = {
      url: "https://api.m.jd.com/client.action?functionId=beanTaskList&body=%7B%22viewChannel%22%3A%22AppHome%22%2C%22beanVersion%22%3A1%2C%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D&appid=ld",
      headers: _0x413b6d,
      timeout: 10000
    };
    $.get(_0xd53c12, (_0x441583, _0x3ce377, _0x5ce1ec) => {
      _0x55fb4d();
    });
  });
}
function bdy_0x420855() {
  return new Promise(_0x4ae3c7 => {
    const _0xed2e02 = {
      Cookie: bdy_0x5965e4,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x540d30 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0xed2e02,
      timeout: 10000
    };
    $.get(_0x540d30, (_0x65abe2, _0x417ff7, _0x3ede3c) => {
      try {
        if (_0x3ede3c) {
          _0x3ede3c = JSON.parse(_0x3ede3c);
          if (!(_0x3ede3c.islogin === "1")) {
            _0x3ede3c.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x25eca9) {
        console.log(_0x25eca9);
      } finally {
        _0x4ae3c7();
      }
    });
  });
}
async function bdy_0x40f127(_0x3043ea, _0x29454c = {}, _0x3ecac8 = 1500) {
  $.reqnum % 5 == 0 && (console.log("\n等待" + bdy_0x2b996f / 1000 + "秒......\n"), _0x3ecac8 = bdy_0x2b996f);
  $.reqnum++;
  if (bdy_0xffdb7a[_0x3043ea]) {
    let _0x4607d6 = {
      appId: bdy_0xffdb7a[_0x3043ea],
      fn: _0x3043ea,
      body: _0x29454c,
      apid: "signed_wh5",
      ver: $.UA.split(";")[2],
      cl: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
    _0x29454c = await bdy_0x1a6623.getbody(_0x4607d6);
  } else {
    _0x29454c = "functionId=" + _0x3043ea + "&body=" + encodeURIComponent(JSON.stringify(_0x29454c)) + "&appid=wh5";
  }
  return new Promise(_0x411098 => {
    setTimeout(() => {
      $.get(bdy_0x4e87e4(_0x29454c), (_0x3d4142, _0x4b320f, _0x403212) => {
        try {
          _0x3d4142 ? (console.log("\n东东农场: API查询请求失败 ‼️‼️"), console.log(JSON.stringify(_0x3d4142)), console.log("function_id:" + _0x3043ea), $.logErr(_0x3d4142)) : bdy_0x3f7a68(_0x403212) && (_0x403212 = JSON.parse(_0x403212));
        } catch (_0x8043f4) {
          $.logErr(_0x8043f4, _0x4b320f);
        } finally {
          _0x411098(_0x403212);
        }
      });
    }, _0x3ecac8);
  });
}
function bdy_0x3f7a68(_0x2753bf) {
  try {
    if (typeof JSON.parse(_0x2753bf) == "object") {
      return true;
    }
  } catch (_0x4ae836) {
    console.log(_0x4ae836);
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function bdy_0x4e87e4(_0x9363b1 = {}) {
  const _0x390fd5 = {
    Host: "api.m.jd.com",
    Accept: "*/*",
    Origin: "https://carry.m.jd.com",
    "Accept-Encoding": "gzip, deflate, br",
    "User-Agent": $.UA,
    "Accept-Language": "zh-CN,zh-Hans;q=0.9",
    Referer: "https://carry.m.jd.com/",
    Cookie: bdy_0x5965e4
  };
  const _0x44ba2d = {
    url: bdy_0x2cb23e + "?" + _0x9363b1,
    headers: _0x390fd5,
    timeout: 30000
  };
  return _0x44ba2d;
}
function bdy_0x4d7daf(_0x3d6f98, _0x2a193b = {}) {
  const _0x36814b = {
    Host: "api.m.jd.com",
    Accept: "*/*",
    Origin: "https://carry.m.jd.com",
    "Accept-Encoding": "gzip, deflate, br",
    "User-Agent": $.UA,
    "Accept-Language": "zh-CN,zh-Hans;q=0.9",
    Referer: "https://carry.m.jd.com/",
    Cookie: bdy_0x5965e4
  };
  const _0x30b5de = {
    url: bdy_0x2cb23e + "?" + _0x2a193b,
    headers: _0x36814b,
    timeout: 10000
  };
  return _0x30b5de;
}
function bdy_0x386fea(_0x469b18) {
  if (typeof _0x469b18 == "string") {
    try {
      return JSON.parse(_0x469b18);
    } catch (_0x219dcb) {
      console.log(_0x219dcb);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function Env(o,t){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((r,i)=>{s.call(this,t,(t,e,s)=>{t?i(t):r(e)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.logLevels={debug:0,info:1,warn:2,error:3},this.logLevelPrefixs={debug:"[DEBUG] ",info:"[INFO] ",warn:"[WARN] ",error:"[ERROR] "},this.logLevel="info",this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null,...s){try{return JSON.stringify(t,...s)}catch{return e}}getjson(t,e){let s=e;if(this.getdata(t))try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(r=>{this.get({url:t},(t,e,s)=>r(s))})}runScript(a,o){return new Promise(r=>{let t=this.getdata("@chavy_boxjs_userCfgs.httpapi");t=t&&t.replace(/\n/g,"").trim();var e=(e=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"))?+e:20,[s,i]=(e=o&&o.timeout?o.timeout:e,t.split("@"));this.post({url:`http://${i}/v1/scripting/evaluate`,body:{script_text:a,mock_type:"cron",timeout:e},headers:{"X-Key":s,Accept:"*/*"},timeout:e},(t,e,s)=>r(s))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};this.fs=this.fs||require("fs"),this.path=this.path||require("path");var t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),r=!s&&this.fs.existsSync(e);if(!s&&!r)return{};r=s?t:e;try{return JSON.parse(this.fs.readFileSync(r))}catch(t){return{}}}writedata(){var t,e,s,r,i;this.isNode()&&(this.fs=this.fs||require("fs"),this.path=this.path||require("path"),t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),r=!(s=this.fs.existsSync(t))&&this.fs.existsSync(e),i=JSON.stringify(this.data),!s&&r?this.fs.writeFileSync(e,i):this.fs.writeFileSync(t,i))}lodash_get(t,e,s){let r=t;for(const t of e.replace(/\[(\d+)\]/g,".$1").split("."))if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,r,e){return Object(t)===t&&((r=Array.isArray(r)?r:r.toString().match(/[^.[\]]+/g)||[]).slice(0,-1).reduce((t,e,s)=>Object(t[e])===t[e]?t[e]:t[e]=Math.abs(r[s+1])>>0==+r[s+1]?[]:{},t)[r[r.length-1]]=e),t}getdata(t){let e=this.getval(t);if(/^@/.test(t)){var[,s,r]=/^@(.*?)\.(.*?)$/.exec(t);if(s=s?this.getval(s):"")try{const t=JSON.parse(s);e=t?this.lodash_get(t,r,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){var[,r,i]=/^@(.*?)\.(.*?)$/.exec(e),a=this.getval(r),a=r?"null"===a?null:a||"{}":"{}";try{const e=JSON.parse(a);this.lodash_set(e,i,t),s=this.setval(JSON.stringify(e),r)}catch(e){this.lodash_set(a={},i,t),s=this.setval(JSON.stringify(a),r)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got||require("got"),this.cktough=this.cktough||require("tough-cookie"),this.ckjar=this.ckjar||new this.cktough.CookieJar,t&&(t.headers=t.headers||{},t)&&(t.headers=t.headers||{},void 0===t.headers.cookie)&&void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar)}tmout(){return new Promise((t,e)=>{this.tmoutId=setTimeout(()=>{this.prms.cancel(),e({message:"timemout",response:""})},5e4)})}get(t,a=()=>{}){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),t.params&&(t.url+="?"+this.queryStr(t.params)),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,e,s)=>{!t&&e&&(e.body=s,e.statusCode=e.status||e.statusCode,e.status=e.statusCode),a(t,e,s)});break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{var{statusCode:t,statusCode:e,headers:s,body:r,bodyBytes:i}=t;a(null,{status:t,statusCode:e,headers:s,body:r,bodyBytes:i},r,i)},t=>a(t&&t.error||"UndefinedError"));break;case"Node.js":this.initGotEnv(t),this.prms=this.got(t).on("redirect",(t,e)=>{try{var s;t.headers["set-cookie"]&&((s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString())&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar)}catch(t){this.logErr(t)}}),Promise.race([this.prms,this.tmout()]).then(t=>{var{statusCode:t,statusCode:e,headers:s,rawBody:r,body:i}=t;a(null,{status:t,statusCode:e,headers:s,rawBody:r,body:i},i),clearTimeout(this.tmoutId)},t=>{var{message:t,response:e}=t;clearTimeout(this.tmoutId),a(t,e,e&&e.body)})}}post(t,a=()=>{}){var e=t.method?t.method.toLocaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[e](t,(t,e,s)=>{!t&&e&&(e.body=s,e.statusCode=e.status||e.statusCode,e.status=e.statusCode),a(t,e,s)});break;case"Quantumult X":t.method=e,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{var{statusCode:t,statusCode:e,headers:s,body:r,bodyBytes:i}=t;a(null,{status:t,statusCode:e,headers:s,body:r,bodyBytes:i},r,i)},t=>a(t&&t.error||"UndefinedError"));break;case"Node.js":this.initGotEnv(t);var{url:s,...r}=t;this.prms=this.got[e](s,r),Promise.race([this.prms,this.tmout()]).then(t=>{var{statusCode:t,statusCode:e,headers:s,rawBody:r,body:i}=t;a(null,{status:t,statusCode:e,headers:s,rawBody:r,body:i},i),clearTimeout(this.tmoutId)},t=>{var{message:t,response:e}=t;clearTimeout(this.tmoutId),a(t,e,e&&e.body)})}}time(t,e=null){var s,r={"M+":(e=e?new Date(e):new Date).getMonth()+1,"d+":e.getDate(),"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(s in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[s]:("00"+r[s]).substr((""+r[s]).length)));return t}queryStr(e){let s="";for(const r in e){let t=e[r];null!=t&&""!==t&&("object"==typeof t&&(t=JSON.stringify(t)),s+=`${r}=${t}&`)}return s=s.substring(0,s.length-1)}msg(t=o,e="",s="",r={}){var i,a=r=>{const{$open:t,$copy:e,$media:i,$mediaMime:a}=r;switch(typeof r){case void 0:return r;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:r};case"Loon":case"Shadowrocket":return r;case"Quantumult X":return{"open-url":r};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:var o={},s=r.openUrl||r.url||r["open-url"]||t;if(s&&Object.assign(o,{action:"open-url",url:s}),(s=r["update-pasteboard"]||r.updatePasteboard||e)&&Object.assign(o,{action:"clipboard",text:s}),i){let t,e,s;if(i.startsWith("http"))t=i;else if(i.startsWith("data:")){const[r]=i.split(";"),[,a]=i.split(",");e=a,s=r.replace("data:","")}else e=i,s=(t=>{var e,s={JVBERi0:"application/pdf",R0lGODdh:"image/gif",R0lGODlh:"image/gif",iVBORw0KGgo:"image/png","/9j/":"image/jpg"};for(e in s)if(0===t.indexOf(e))return s[e];return null})(i);Object.assign(o,{"media-url":t,"media-base64":e,"media-base64-mime":a??s})}return Object.assign(o,{"auto-dismiss":r["auto-dismiss"],sound:r.sound}),o;case"Loon":{const e={};(s=r.openUrl||r.url||r["open-url"]||t)&&Object.assign(e,{openUrl:s});var n=r.mediaUrl||r["media-url"];return(n=i?.startsWith("http")?i:n)&&Object.assign(e,{mediaUrl:n}),console.log(JSON.stringify(e)),e}case"Quantumult X":{const a={};(o=r["open-url"]||r.url||r.openUrl||t)&&Object.assign(a,{"open-url":o});n=r["media-url"]||r.mediaUrl;return(n=i?.startsWith("http")?i:n)&&Object.assign(a,{"media-url":n}),(s=r["update-pasteboard"]||r.updatePasteboard||e)&&Object.assign(a,{"update-pasteboard":s}),console.log(JSON.stringify(a)),a}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(t,e,s,a(r));break;case"Quantumult X":$notify(t,e,s,a(r));break;case"Node.js":}this.isMuteLog||((i=["","==============📣系统通知📣=============="]).push(t),e&&i.push(e),s&&i.push(s),console.log(i.join("\n")),this.logs=this.logs.concat(i))}debug(...t){this.logLevels[this.logLevel]<=this.logLevels.debug&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.debug+t.map(t=>t??String(t)).join(this.logSeparator)))}info(...t){this.logLevels[this.logLevel]<=this.logLevels.info&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.info+t.map(t=>t??String(t)).join(this.logSeparator)))}warn(...t){this.logLevels[this.logLevel]<=this.logLevels.warn&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.warn+t.map(t=>t??String(t)).join(this.logSeparator)))}error(...t){this.logLevels[this.logLevel]<=this.logLevels.error&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.error+t.map(t=>t??String(t)).join(this.logSeparator)))}log(...t){0<t.length&&(this.logs=[...this.logs,...t]),console.log(t.map(t=>t??String(t)).join(this.logSeparator))}logErr(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️${this.name}, 错误!`,t);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,void 0!==t.message?t.message:t)}}wait(e){return new Promise(t=>setTimeout(t,e))}done(t={}){var e=((new Date).getTime()-this.startTime)/1e3;switch(this.log("",`🔔${this.name}, 结束! 🕛 ${e} 秒`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(o,t)}