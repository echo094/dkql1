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
const _0x335eb9 = 100;
let _0x439f08 = false;
const _0xd086e9 = process.env.FRUIT_NOTIFY == false ? process.env.FRUIT_NOTIFY : true;
let _0x3db6ab = [],
  _0xb14677 = "",
  _0x153182,
  _0xf4f9de,
  _0x53a203 = "",
  _0x5ce8c2 = "",
  _0x32d1bd = "",
  _0x54e5b8 = {},
  _0x111dd8 = false,
  _0x3935d4;
const _0x5c1346 = "https://api.m.jd.com/client.action",
  _0x55b916 = "openjd://virtual?params=%7B%20%22category%22:%20%22jump%22,%20%22des%22:%20%22m%22,%20%22url%22:%20%22https://h5.m.jd.com/babelDiy/Zeus/3KSjXqQabiTuD1cJ28QskrpWoBKT/index.html%22%20%7D",
  _0x304fdb = process.env.FRUIT_DELAY ? process.env.FRUIT_DELAY * 1 : 2000,
  _0x28ebec = process.env.FRUIT_PIN ? decodeURIComponent(process.env.FRUIT_PIN) : "",
  _0x3a6395 = require("./USER_AGENTS"),
  _0x418a59 = require("fs"),
  _0x5f42f0 = require("./function/dylanv");
if (process.env.DY_PROXY) {
  const _0x359ed0 = require("./function/proxy.js");
  $.get = _0x359ed0.intoRequest($.get.bind($));
  $.post = _0x359ed0.intoRequest($.post.bind($));
}
let _0x5092c4 = [];
$.reqnum = 1;
const _0x400260 = {
  "totalWaterTaskForFarm": "102f5",
  "gotThreeMealForFarm": "57b30",
  "browseAdTaskForFarm": "53f09",
  "clockInFollowForFarm": "4a0b4",
  "waterFriendForFarm": "673a0",
  "awardFirstFriendForFarm": "9b655",
  "limitWaterInitForFarm": "6bdc2",
  "ddnc_surpriseModal": "e81c1",
  "friendInitForFarm": "a5a9c",
  "waterGoodForFarm": "0c010",
  "firstWaterTaskForFarm": "0cf1e",
  "waterFriendGotAwardForFarm": "d08ff",
  "ddnc_getTreasureBoxAward": "67dfc",
  "orderTaskGotWaterForFarm": "eed5c",
  "clockInForFarm": "32b94",
  "awardInviteFriendForFarm": "2b5ca",
  "awardCallOrInviteFriendForFarm": "b0b03",
  "getFullCollectionReward": "5c767",
  "getOrderPayLotteryWater": "ef089",
  "receiveStageEnergy": "15507",
  "exchangeGood": "52963",
  "initForFarm": "8a2af",
  "userMyCardForFarm": "86ba5",
  "getCallUserCardForFarm": "2ca57",
  "deleteFriendForFarm": "eaf91",
  "gotLowFreqWaterForFarm": "8172b",
  "choiceGoodsForFarm": "5f4ca",
  "gotCouponForFarm": "b1515",
  "gotStageAwardForFarm": "81591",
  "followVenderForBrand": "71547",
  "clockInInitForFarm": "08dc3",
  "guideTaskAward": "59bc4",
  "farmAssistInit": "92354",
  "myCardInfoForFarm": "157b6",
  "gotPopFirstPurchaseTaskForFarm": "d432f",
  "gotWaterGoalTaskForFarm": "c901b",
  "gotNewUserTaskForFarm": "de8f8"
};
!(async () => {
  await _0x449b19();
  if (!_0x3db6ab[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  $.log("\n当前版本：2024/6/23 fix");
  $.log("TG反馈：https://t.me/dylan_jdpro\n");
  $.log("\n环境变量：");
  $.log("export DY_PROXY='api_url' 可使用代理api");
  $.log("export NO_WATER='true' 完全不浇水，浇水任务不做了");
  $.log("export FRUIT_PIN='pin1&pin2' 不浇水的pin，多个&分隔，使用pin控制就不要使用NO_WATER");
  $.log("export DO_TEN_WATER_AGAIN='true' 攒水滴只交10次水，默认不攒水滴");
  $.log("epxort FRUIT_DELAY='1000',设置等待时间(毫秒)，默认请求5次接口等待5秒（5000）\n\n");
  $.log("export FRUIT_NOTIFY=false 开启详情通知，默认只通知成熟和异常");
  if (process.env.NO_WATER == "true") _0x53a203 = "【一水不缴模式已开启！】\n\n", $.log("【一水不缴模式已开启！】\n");else {
    process.env.DO_TEN_WATER_AGAIN == "true" && (_0x53a203 = "【攒水滴模式已开启，每天只浇水10次！】\n\n", $.log("【攒水滴模式已开启，每天只浇水10次！】\n"));
  }
  for (let _0x55258d = 0; _0x55258d < _0x3db6ab.length; _0x55258d++) {
    if (_0x3db6ab[_0x55258d]) {
      _0xb14677 = _0x3db6ab[_0x55258d];
      $.UserName = decodeURIComponent(_0xb14677.match(/pt_pin=([^; ]+)(?=;?)/) && _0xb14677.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x55258d + 1;
      $.isLogin = true;
      $.nickName = "";
      $.farmInfo = "";
      _0x3935d4 = 0;
      await _0x2e22a7();
      console.log("------------------【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "-------------------\n");
      if (!$.isLogin) {
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        });
        $.isNode() && (await _0x153182.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      _0x5ce8c2 = "";
      _0x32d1bd = "";
      _0x54e5b8 = {};
      $.UA = _0x3a6395.UARAM ? _0x3a6395.UARAM() : _0x3a6395.USER_AGENT;
      await _0x1639c6();
      await $.wait(2000);
    }
  }
  _0x418a59.writeFileSync("./fruit_helpcode", JSON.stringify(_0x5092c4), _0x188a86 => {
    _0x188a86 && console.log(_0x188a86);
  });
  $.isNode() && _0x53a203 && $.ctrTemp && (await _0x153182.sendNotify("" + $.name, "" + _0x53a203));
})().catch(_0x1e87e4 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x1e87e4 + "!", "");
}).finally(() => {
  $.done();
});
async function _0x1639c6() {
  _0x32d1bd = "【京东账号" + $.index + "🆔】" + ($.nickName || $.UserName);
  try {
    await _0x293612();
    await $.wait(500);
    await _0x24582f();
    let _0x1b48fd = $.farmInfo.farmUserPro || $.farmInfoI.farmUserPro;
    if (_0x1b48fd) {
      _0x5ce8c2 = "【水果名称】" + $.farmInfo.farmUserPro.name + "\n";
      console.log("\n【账号（" + $.UserName + "）的" + $.name + "好友互助码】" + $.farmInfo.farmUserPro.shareCode);
      console.log("\n【已成功兑换水果】" + $.farmInfo.farmUserPro.winTimes + "次");
      _0x5ce8c2 += "【已兑换水果】" + $.farmInfo.farmUserPro.winTimes + "次\n";
      _0x5092c4.push($.farmInfo.farmUserPro.shareCode);
      if ($.farmInfo.farmUserPro.treeState === 2 || $.farmInfo.farmUserPro.treeState === 3) _0x54e5b8["open-url"] = _0x55b916, $.msg($.name, "", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo.farmUserPro.name + "已可领取\n请去京东APP或微信小程序查看\n点击弹窗即达", _0x54e5b8), $.isNode() && (await _0x153182.sendNotify($.name + " - 账号" + $.index + " - " + ($.nickName || $.UserName) + "水果已可领取", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo.farmUserPro.name + "已可领取\n请去京东APP或微信小程序查看"));else {
        if ($.farmInfo.farmUserPro.treeState === 1) console.log("\n" + $.farmInfo.farmUserPro.name + "种植中...");else {
          if ($.farmInfo.farmUserPro.treeState === 0) {
            _0x54e5b8["open-url"] = _0x55b916;
            $.msg($.name, "", "【京东账号" + $.index + "】 " + ($.nickName || $.UserName) + "\n【提醒⏰】您忘了种植新的水果\n请去京东APP或微信小程序选购并种植新的水果\n点击弹窗即达", _0x54e5b8);
            $.isNode() && (await _0x153182.sendNotify($.name + " - 您忘了种植新的水果", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n【提醒⏰】您忘了种植新的水果\n请去京东APP或微信小程序选购并种植新的水果"));
            return;
          }
        }
      }
      $.farmInfo.farmUserPro.newOldState == "0" && (await _0x4204a(), $.newtaskinfo.addEnergy && console.log("\n获得" + $.newtaskinfo.addEnergy + "g💧"));
      $.farmInfoI.lowFreqSendWater && (await _0x5038ae(), $.newtaskinfo.addWater && console.log("\n获得" + $.newtaskinfo.addWater + "g💧"));
      await _0x3e9103();
      await _0x2d3966();
      process.env.NO_WATER == "true" || _0x28ebec.includes($.UserName) ? $.log("\n已设置完全不浇水\n") : (await _0x99d5b2(), process.env.DO_TEN_WATER_AGAIN != "true" ? ($.log("执行继续浇水..."), await _0x3ecb06()) : $.log("不执行再次浇水，攒水滴!"));
      await _0x5d5198();
      await _0x5a8d6e();
      await _0x4f678d();
      await _0x539aa5();
      await $.wait(3000);
      await _0x2ac36f();
    } else JSON.stringify($.farmInfoI).includes("winTexts") ? (console.log("初始化农场数据异常, 请确认此账号是否开通农场\n"), _0x5ce8c2 = "【数据异常】请确认此账号是否开通农场\n\n") : (console.log("初始化农场数据异常, 请登录京东 app查看农场0元水果功能是否正常,农场初始化数据: " + JSON.stringify($.farmInfoI) + "\n"), _0x5ce8c2 = "【数据异常】请手动登录app查看此账号农场是否正常\n\n");
  } catch (_0x314545) {
    console.log("任务执行异常，请检查执行日志 ‼️‼️\n\n");
    $.logErr(_0x314545);
  }
  await _0x8eb37e();
}
async function _0x3e9103() {
  await _0x3742dc();
  console.log("被水滴砸中： " + ($.farmInfo.todayGotWaterGoalTask.canPop ? "是" : "否"));
  $.farmInfo.todayGotWaterGoalTask.canPop && (await _0x5b4472(), $.goalResult.code === "0" && console.log("获得" + $.goalResult.addEnergy + "g💧\n"));
  console.log("\n开始日常任务...");
  let _0xb447ac = $.farmTask.gotBrowseTaskAdInit.userBrowseTaskAds,
    _0x3f4bbd = $.farmTask.businessImprovementInit ? $.farmTask.businessImprovementInit.busiImproveTasks : [],
    _0x429205 = 0,
    _0x4583f5 = 0,
    _0x4149ec = 0;
  if (!$.farmTask.gotThreeMealInit.f) await _0x4c0037(), $.threeMeal.code === "0" ? (console.log("定时领水 获得" + $.threeMeal.amount + "g💧\n"), _0x429205 += $.threeMeal.amount, _0x4583f5++) : console.log("定时领水失败:  " + JSON.stringify($.threeMeal));else {}
  if ($.farmTask.treasureBoxInit && !$.farmTask.treasureBoxInit.f) {
    console.log("" + $.farmTask.treasureBoxInit.taskMainTitle);
    let _0x1a10fe = await _0x28fd29();
    _0x1a10fe.code == 0 && ($.log("完成，获得" + _0x1a10fe.waterGram + "g💧\n"), _0x429205 += _0x1a10fe.waterGram, _0x4583f5++);
  } else {}
  if ($.farmTask["treasureBoxInit-getBean"] && !$.farmTask["treasureBoxInit-getBean"].f) {
    console.log("" + $.farmTask["treasureBoxInit-getBean"].taskMainTitle);
    let _0x388817 = await _0x9c4d7f();
    _0x388817.code == 0 && ($.log("完成，获得" + _0x388817.waterGram + "g💧\n"), _0x429205 += _0x388817.waterGram, _0x4583f5++);
  } else {}
  _0xb447ac = _0xb447ac.concat(_0x3f4bbd);
  for (let _0x468fbd of _0xb447ac) {
    if (_0x468fbd.limit <= _0x468fbd.hadFinishedTimes) {
      if (_0x468fbd.mainTitle.includes("领奖")) {
        await _0x4c38fa(_0x468fbd.advertId, 1, _0x468fbd.adType);
        continue;
      }
      console.log(_0x468fbd.mainTitle + " ---- 已完成");
      continue;
    }
    console.log("去做任务: " + _0x468fbd.mainTitle);
    await _0x4c38fa(_0x468fbd.advertId, 0, _0x468fbd.adType);
    if ($.browseResult.code === "0") console.log(_0x468fbd.mainTitle + " 任务完成"), await _0x4c38fa(_0x468fbd.advertId, 1, _0x468fbd.adType), $.browseRwardResult.code === "0" ? (console.log("领取 " + _0x468fbd.mainTitle + " 任务奖励成功, 获得" + $.browseRwardResult.amount + "g💧"), _0x429205 += $.browseRwardResult.amount, _0x4583f5++) : (_0x4149ec++, console.log("领取奖励结果:  " + JSON.stringify($.browseRwardResult)));else {
      _0x4149ec++;
      console.log("任务结果:   " + JSON.stringify($.browseResult));
    }
  }
  if (_0x4149ec > 0) console.log("\n日常任务 完成" + _0x4583f5 + "个,失败" + _0x4149ec + ",获得" + _0x429205 + "g💧\\n");else _0x4583f5 > 0 && console.log("\n日常任务 完成" + _0x4583f5 + "个,获得" + _0x429205 + "g💧\n");
  !$.farmTask.waterFriendTaskInit.f ? $.farmTask.waterFriendTaskInit.waterFriendCountKey < $.farmTask.waterFriendTaskInit.waterFriendMax && (await _0x595e48()) : console.log("给" + $.farmTask.waterFriendTaskInit.waterFriendMax + "个好友浇水任务已完成\n");
  await _0xcc871f();
  await _0xc172cd();
  await _0x52a111();
  await _0x3bae0b();
}
async function _0x2ac36f() {
  console.log("开始预测水果成熟时间...\n");
  await _0x24582f();
  if (!$.farmInfo.farmUserPro) await _0x24582f();
  await _0x3742dc();
  let _0x3fa992 = $.farmTask.firstWaterInit.totalWaterTimes;
  _0x5ce8c2 += "【今日共浇水】" + _0x3fa992 + "次\n";
  _0x5ce8c2 += "【剩余水滴】" + $.farmInfo.farmUserPro.totalEnergy + "g💧\n";
  _0x5ce8c2 += "【水果进度】" + ($.farmInfo.farmUserPro.treeEnergy / $.farmInfo.farmUserPro.treeTotalEnergy * 100).toFixed(2) + "%，已浇水" + $.farmInfo.farmUserPro.treeEnergy / 10 + "次,还需" + ($.farmInfo.farmUserPro.treeTotalEnergy - $.farmInfo.farmUserPro.treeEnergy) / 10 + "次\n";
  if ($.farmInfo.toFlowTimes > $.farmInfo.farmUserPro.treeEnergy / 10) _0x5ce8c2 += "【开花进度】再浇水" + ($.farmInfo.toFlowTimes - $.farmInfo.farmUserPro.treeEnergy / 10) + "次开花\n";else $.farmInfo.toFruitTimes > $.farmInfo.farmUserPro.treeEnergy / 10 && (_0x5ce8c2 += "【结果进度】再浇水" + ($.farmInfo.toFruitTimes - $.farmInfo.farmUserPro.treeEnergy / 10) + "次结果\n");
  let _0x3a91b2 = ($.farmInfo.farmUserPro.treeTotalEnergy - $.farmInfo.farmUserPro.treeEnergy) / 10;
  if (_0x3fa992 > 2) {
    let _0x595210 = Math.ceil(_0x3a91b2 / _0x3fa992) || 0;
    _0x5ce8c2 += "【预测】" + (_0x595210 === 1 ? "明天" : _0x595210 === 2 ? "后天" : _0x595210 + "天之后") + "(" + _0x59e591(24 * 60 * 60 * 1000 * _0x595210 + Date.now()) + "日)可兑换水果🍉\n";
  } else {
    _0x5ce8c2 += "【预测】不浇水无限期\n";
  }
}
async function _0x99d5b2() {
  _0x439f08 = $.getdata("jdFruitBeanCard") ? $.getdata("jdFruitBeanCard") : _0x439f08;
  $.isNode() && process.env.FRUIT_BEAN_CARD && (_0x439f08 = process.env.FRUIT_BEAN_CARD);
  await _0x23db59();
  const {
    fastCard: _0x1c47b4,
    doubleCard: _0x25a6af,
    beanCard: _0x576f45,
    signCard: _0x5ea22e
  } = $.myCardInfoRes;
  if ("" + _0x439f08 === "true" && JSON.stringify($.myCardInfoRes).match("限时翻倍") && _0x576f45 > 0) {
    console.log("您设置的是使用水滴换豆卡，且背包有水滴换豆卡" + _0x576f45 + "张, 跳过10次浇水任务");
    return;
  }
  if ($.farmTask.totalWaterTaskInit.totalWaterTaskTimes < $.farmTask.totalWaterTaskInit.totalWaterTaskLimit) {
    console.log("\n准备浇水十次");
    let _0x5eccd3 = 0;
    _0x111dd8 = false;
    for (; _0x5eccd3 < $.farmTask.totalWaterTaskInit.totalWaterTaskLimit - $.farmTask.totalWaterTaskInit.totalWaterTaskTimes; _0x5eccd3++) {
      console.log("第" + (_0x5eccd3 + 1) + "次浇水");
      await _0x1dcd1c();
      if ($.waterResult.code === "0") {
        console.log("浇水成功，剩余水滴" + $.waterResult.totalEnergy + "g");
        if ($.waterResult.finished) {
          _0x111dd8 = true;
          break;
        } else {
          if ($.waterResult.totalEnergy < 10) {
            console.log("水滴不够，结束浇水\n");
            break;
          }
          await _0x103709();
        }
      } else {
        console.log("浇水出现失败异常,跳出不在继续浇水\n");
        break;
      }
    }
    _0x111dd8 && (_0x54e5b8["open-url"] = _0x55b916, $.msg($.name, "", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo.farmUserPro.name + "已可领取\n请去京东APP或微信小程序查看\n点击弹窗即达", _0x54e5b8), $.isNode() && (await _0x153182.sendNotify($.name + " - 账号" + $.index + " - " + ($.nickName || $.UserName) + "水果已可领取", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n" + $.farmInfo.farmUserPro.name + "已可领取")));
  } else console.log("\n今日已完成10次浇水任务\n");
}
async function _0x5d5198() {
  await _0x3742dc();
  !$.farmTask.firstWaterInit.f && $.farmTask.firstWaterInit.totalWaterTimes > 0 ? (await _0xdb3872(), $.firstWaterReward.code === "0" ? console.log("【首次浇水奖励】获得" + $.firstWaterReward.amount + "g💧\n") : console.log("领取首次浇水奖励结果:  " + JSON.stringify($.firstWaterReward))) : console.log("首次浇水奖励已领取\n");
}
async function _0x5a8d6e() {
  if (!$.farmTask.totalWaterTaskInit.f && $.farmTask.totalWaterTaskInit.totalWaterTaskTimes >= $.farmTask.totalWaterTaskInit.totalWaterTaskLimit) await _0x3f9b84(), $.totalWaterReward.code === "0" ? console.log("10次浇水完成 获得" + $.totalWaterReward.totalWaterTaskEnergy + "g💧\n") : console.log("领取10次浇水奖励结果:  " + JSON.stringify($.totalWaterReward) + "\n");else $.farmTask.totalWaterTaskInit.totalWaterTaskTimes < $.farmTask.totalWaterTaskInit.totalWaterTaskLimit && console.log("10次浇水 未完成，今日浇水" + $.farmTask.totalWaterTaskInit.totalWaterTaskTimes + "次\n");
  console.log("finished 水果任务完成!");
}
async function _0x2d3966() {
  await _0x23db59();
  let _0x40338a = $.farmInfo.farmUserPro.totalEnergy;
  const {
    fastCard: _0x418ec9,
    doubleCard: _0x198c09,
    beanCard: _0x470453,
    signCard: _0x46c899
  } = $.myCardInfoRes;
  console.log("\n检查背包道具:\n快速浇水卡:" + (_0x418ec9 === -1 ? "未解锁" : _0x418ec9 + "张") + "\n水滴翻倍卡:" + (_0x198c09 === -1 ? "未解锁" : _0x198c09 + "张") + "\n水滴换京豆卡:" + (_0x470453 === -1 ? "未解锁" : _0x470453 + "张") + "\n加签卡:" + (_0x46c899 === -1 ? "未解锁" : _0x46c899 + "张") + "\n");
  if (_0x40338a >= 100 && _0x198c09 > 0 && $.farmInfo.farmUserPro.treeState == 1) {
    for (let _0x541670 = 0; _0x541670 < new Array(_0x198c09).fill("").length; _0x541670++) {
      await _0x599ed5("doubleCard");
      $.userMyCardRes.code == "0" && ($.log("翻倍成功，获得" + $.userMyCardRes.addWater + "g💧"), _0x40338a += $.userMyCardRes.addWater);
    }
  }
  if (_0x46c899 > 0 && $.farmInfo.farmUserPro.treeState == 1) {
    $.log("\n使用加签卡...");
    for (let _0x5c7cd5 = 0; _0x5c7cd5 < 3; _0x5c7cd5++) {
      await _0x599ed5("signCard");
      if ($.userMyCardRes.code == 0) $.log("加签成功，获得" + $.userMyCardRes.amount + "g💧"), _0x40338a += $.userMyCardRes.amount;else {
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
  _0x439f08 = $.getdata("jdFruitBeanCard") ? $.getdata("jdFruitBeanCard") : _0x439f08;
  $.isNode() && process.env.FRUIT_BEAN_CARD && (_0x439f08 = process.env.FRUIT_BEAN_CARD);
  if (_0x439f08 == "true" && JSON.stringify($.myCardInfoRes).match("限时翻倍")) {
    console.log("\n您设置的是水滴换豆功能,现在为您换豆");
    if (_0x40338a >= 100 && $.myCardInfoRes.beanCard > 0) {
      await _0x599ed5("beanCard");
      if ($.userMyCardRes.code === "0") {
        _0x5ce8c2 += "【水滴换豆卡】获得" + $.userMyCardRes.beanCount + "个京豆\n";
        return;
      }
    } else console.log("您目前水滴:" + _0x40338a + "g,水滴换豆卡" + $.myCardInfoRes.beanCard + "张,暂不满足水滴换豆的条件,为您继续浇水");
  }
}
async function _0x3ecb06() {
  console.log("检查剩余水滴能否继续浇水...\n");
  await _0x24582f();
  let _0x55fcdc = $.farmInfo.farmUserPro.totalEnergy;
  console.log("剩余水滴" + _0x55fcdc + "g\n");
  const {
    fastCard: _0x1db6c0,
    doubleCard: _0x4aacb6,
    beanCard: _0x146779,
    signCard: _0x19091a
  } = $.myCardInfoRes;
  let _0x197e63 = _0x55fcdc - _0x335eb9;
  $.log("\n开始浇水...");
  if (_0x55fcdc > 800 && $.myCardInfoRes.fastCard > 0 && $.farmInfo.farmUserPro.treeState === 1) {
    $.log("\n水比较多去快速浇水...");
    for (let _0x18bc17 = 0; _0x18bc17 < Math.min.apply(null, [new Array(_0x1db6c0).fill("").length, parseInt(_0x197e63 / 10), ($.farmInfo.farmUserPro.treeTotalEnergy - $.farmInfo.farmUserPro.treeEnergy) / 10]); _0x18bc17++) {
      await _0x599ed5("fastCard");
      $.log("快速浇水" + (_0x18bc17 + 1) + "次");
      $.userMyCardRes.code === "0" && console.log("快速浇水" + $.userMyCardRes.waterEnergy + "g成功\n");
      if ($.userMyCardRes.treeFinished) {
        $.log("水果已成熟啦！\n");
        break;
      }
      await $.wait(500);
      _0x55fcdc -= 100;
      if (_0x55fcdc < 200) break;
    }
    _0x197e63 = _0x55fcdc - _0x335eb9;
  } else {
    if (_0x55fcdc >= $.farmInfo.farmUserPro.treeTotalEnergy - $.farmInfo.farmUserPro.treeEnergy) {
      _0x111dd8 = false;
      for (let _0x4c5d4b = 0; _0x4c5d4b < ($.farmInfo.farmUserPro.treeTotalEnergy - $.farmInfo.farmUserPro.treeEnergy) / 10; _0x4c5d4b++) {
        await _0x1dcd1c();
        await $.wait(500);
        $.log("浇水" + (_0x4c5d4b + 1) + "次");
        if ($.waterResult.code === "0") {
          console.log("浇水10g成功");
          if ($.waterResult.finished) {
            _0x111dd8 = true;
            $.log("水果已成熟啦！\n");
            break;
          } else console.log("剩余水滴" + $.waterResult.totalEnergy + "g,果树已浇水" + $.waterResult.treeEnergy + "g\n");
        } else {
          console.log("浇水出现失败异常,跳出不在继续浇水");
          break;
        }
      }
      _0x111dd8 && (_0x54e5b8["open-url"] = _0x55b916, $.msg($.name, "", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo.farmUserPro.name + "已可领取\n请去京东APP或微信小程序查看\n点击弹窗即达", _0x54e5b8), $.isNode() && (await _0x153182.sendNotify($.name + " - 账号" + $.index + " - " + ($.nickName || $.UserName) + "水果已可领取", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n" + $.farmInfo.farmUserPro.name + "已可领取")));
    } else {
      if (_0x197e63 > 10) {
        console.log("目前剩余水滴：" + _0x55fcdc + "g，可继续浇水");
        _0x111dd8 = false;
        for (let _0x36b6cd = 0; _0x36b6cd < parseInt(_0x197e63 / 10); _0x36b6cd++) {
          $.log("浇水" + (_0x36b6cd + 1) + "次");
          await _0x1dcd1c();
          if ($.waterResult.code === "0") {
            console.log("浇水10g成功,剩余" + $.waterResult.totalEnergy + "g,果树已浇水" + $.waterResult.treeEnergy + "g\n");
            if ($.waterResult.finished) {
              _0x111dd8 = true;
              $.log("水果已成熟啦！\n");
              break;
            } else await _0x103709();
          } else {
            console.log("浇水出现失败异常,跳出不在继续浇水");
            break;
          }
        }
        if (_0x111dd8) {
          _0x54e5b8["open-url"] = _0x55b916;
          $.msg($.name, "", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo.farmUserPro.name + "已可领取\n请去京东APP或微信小程序查看\n点击弹窗即达", _0x54e5b8);
          if ($.isNode()) {
            await _0x153182.sendNotify($.name + " - 账号" + $.index + " - " + ($.nickName || $.UserName) + "水果已可领取", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n" + $.farmInfo.farmUserPro.name + "已可领取");
          }
        }
      } else console.log("目前剩余水滴：【" + _0x55fcdc + "】g,不再继续浇水,保留部分水滴用于完成第二天【十次浇水得水滴】任务");
    }
  }
}
function _0x103709() {
  return new Promise(async _0x535c7b => {
    if ($.waterResult.waterStatus === 0 && $.waterResult.treeEnergy === 10) console.log("果树发芽了,奖励30g💧"), await _0x1e994e("1"), console.log("浇水阶段奖励1领取结果 " + JSON.stringify($.gotStageAwardForFarmRes)), $.gotStageAwardForFarmRes.code === "0" && console.log("【果树发芽了】奖励" + $.gotStageAwardForFarmRes.addEnergy + "💧\n");else {
      if ($.waterResult.waterStatus === 1) console.log("果树开花了,奖励40g💧"), await _0x1e994e("2"), console.log("浇水阶段奖励2领取结果 " + JSON.stringify($.gotStageAwardForFarmRes)), $.gotStageAwardForFarmRes.code === "0" && console.log("【果树开花了】奖励" + $.gotStageAwardForFarmRes.addEnergy + "g💧\n");else $.waterResult.waterStatus === 2 && (console.log("果树长出小果子啦, 奖励50g💧"), await _0x1e994e("3"), console.log("浇水阶段奖励3领取结果 " + JSON.stringify($.gotStageAwardForFarmRes)), $.gotStageAwardForFarmRes.code === "0" && console.log("【果树结果了】奖励" + $.gotStageAwardForFarmRes.addEnergy + "g💧\n"));
    }
    _0x535c7b();
  });
}
async function _0x3bae0b() {
  await _0x553450();
  if ($.initForTurntableFarmRes.code === "0") {
    let {
      timingIntervalHours: _0x139126,
      timingLastSysTime: _0x25e525,
      sysTime: _0x4b4e30,
      timingGotStatus: _0x230e71,
      remainLotteryTimes: _0x429fda,
      turntableInfos: _0xe45c99
    } = $.initForTurntableFarmRes;
    !_0x230e71 ? (console.log("领取免费赠送的抽奖机会----" + (_0x4b4e30 > _0x25e525 + 60 * 60 * _0x139126 * 1000)), _0x4b4e30 > _0x25e525 + 60 * 60 * _0x139126 * 1000 ? (await _0x3e7fec(), $.timingAwardRes.code == 0 ? (console.log("领取定时奖励: " + $.timingAwardRes.addTimes + "次抽奖机会🥳"), _0x429fda = $.timingAwardRes.remainLotteryTimes) : console.log("" + JSON.stringify($.timingAwardRes))) : console.log("免费赠送的抽奖机会未到时间")) : console.log("4小时免费赠送的抽奖机会已领取");
    let _0xcc2f75 = $.initForTurntableFarmRes.turntableBrowserAds.filter(_0x581a4d => !_0x581a4d.status);
    if (_0xcc2f75.length > 0) for (let _0xa0a7bf = 0; _0xa0a7bf < _0xcc2f75.length; _0xa0a7bf++) {
      console.log("\n开始天天抽奖的第" + (_0xa0a7bf + 1) + "个逛会场任务");
      await _0x5caacb(1, $.initForTurntableFarmRes.turntableBrowserAds[_0xa0a7bf].adId);
      $.browserForTurntableFarmRes.code === "0" && $.browserForTurntableFarmRes.status && (console.log("任务完成，去领取奖励"), await _0x5caacb(2, $.initForTurntableFarmRes.turntableBrowserAds[_0xa0a7bf].adId), $.browserForTurntableFarmRes.code === "0" && (console.log("获得" + $.browserForTurntableFarmRes.addTimes + "次抽奖机会🥳\n"), _0x429fda = $.browserForTurntableFarmRes.totalTimes));
    } else $.log("\n天天抽奖任务已全部完成！");
    if (_0x429fda > 0) {
      console.log("\n天天抽奖次数 " + _0x429fda);
      console.log("开始抽奖...");
      let _0x593fd2 = "";
      for (let _0x500193 = 0; _0x500193 < new Array(_0x429fda).fill("").length; _0x500193++) {
        await _0x118201();
        await $.wait(500);
        console.log("第" + (_0x500193 + 1) + "次抽奖");
        if ($.lotteryRes.code === "0") {
          _0xe45c99.map(_0xd17710 => {
            if (_0xd17710.type === $.lotteryRes.type) {
              if ($.lotteryRes.type.match(/bean/g) && $.lotteryRes.type.match(/bean/g)[0] === "bean") _0x593fd2 += _0xd17710.name + "个🥔，";else $.lotteryRes.type.match(/water/g) && $.lotteryRes.type.match(/water/g)[0] === "water" ? _0x593fd2 += _0xd17710.name + "💧，" : _0x593fd2 += _0xd17710.name + "，";
            }
          });
          if ($.lotteryRes.remainLotteryTimes === 0) break;
        }
      }
      _0x593fd2 && console.log("天天抽奖奖励：" + _0x593fd2.substr(0, _0x593fd2.length - 1) + "\n");
    } else console.log("天天抽奖无次数！");
  } else console.log("初始化天天抽奖得好礼失败！");
}
async function _0x52a111() {
  await _0x3667c2();
  if ($.farmAssistResult.code === "0") {
    if ($.farmAssistResult.assistFriendList && $.farmAssistResult.assistFriendList.length >= 1) {
      if ($.farmAssistResult.status === 2) {
        let _0x54bf87 = 0;
        for (let _0x30c5c2 of Object.keys($.farmAssistResult.assistStageList)) {
          let _0xa8c94e = $.farmAssistResult.assistStageList[_0x30c5c2];
          _0xa8c94e.stageStaus === 2 && (await _0x362afd(), await $.wait(500), $.receiveStageEnergy.code === "0" && (console.log("成功领取第" + (Number(_0x30c5c2) + 1) + "段助力奖励：【" + $.receiveStageEnergy.amount + "】g💧"), _0x54bf87 += $.receiveStageEnergy.amount));
        }
        _0x5ce8c2 += "【额外奖励】" + _0x54bf87 + "g💧领取成功\n";
      } else $.farmAssistResult.status === 3 && (console.log("已经领取过助力额外奖励"), _0x5ce8c2 += "【额外奖励】已领取过\n");
    } else console.log("助力好友未达门槛"), _0x5ce8c2 += "【额外奖励】领取失败,原因：给您助力的人未达门槛\n";
    if ($.farmAssistResult.assistFriendList && $.farmAssistResult.assistFriendList.length > 0) {
      let _0x5b842f = "";
      $.farmAssistResult.assistFriendList.map((_0x534ab2, _0x1f2644) => {
        _0x1f2644 === $.farmAssistResult.assistFriendList.length - 1 ? _0x5b842f += _0x534ab2.nickName || "匿名用户" : _0x5b842f += (_0x534ab2.nickName || "匿名用户") + ",";
        let _0x1bbef3 = new Date(_0x534ab2.time),
          _0x5cecbd = _0x1bbef3.getFullYear() + "-" + (_0x1bbef3.getMonth() + 1) + "-" + _0x1bbef3.getDate() + " " + _0x1bbef3.getHours() + ":" + _0x1bbef3.getMinutes() + ":" + _0x1bbef3.getMinutes();
        console.log("【" + (_0x534ab2.nickName || "匿名用户") + "】 在 " + _0x5cecbd + " 给您助过力");
      });
      _0x5ce8c2 += "【助力您的好友】" + _0x5b842f + "\n";
    }
    console.log("\n领取额外奖励水滴结束\n");
  } else {
    await _0x424b86();
    if ($.masterHelpResult.code === "0") {
      $.masterHelpResult.masterHelpPeoples && $.masterHelpResult.masterHelpPeoples.length >= 5 ? !$.masterHelpResult.masterGotFinal ? (await _0x1ccb87(), $.masterGotFinished.code === "0" && (console.log("已成功领取好友助力奖励：【" + $.masterGotFinished.amount + "】g💧"), _0x5ce8c2 += "【额外奖励】" + $.masterGotFinished.amount + "g💧领取成功\n")) : (console.log("已经领取过5好友助力额外奖励"), _0x5ce8c2 += "【额外奖励】已被领取过\n") : (console.log("助力好友未达到5个"), _0x5ce8c2 += "【额外奖励】领取失败,原因：给您助力的人未达5个\n");
      if ($.masterHelpResult.masterHelpPeoples && $.masterHelpResult.masterHelpPeoples.length > 0) {
        let _0x5c8e55 = "";
        $.masterHelpResult.masterHelpPeoples.map((_0x5ee52a, _0x140ad2) => {
          _0x140ad2 === $.masterHelpResult.masterHelpPeoples.length - 1 ? _0x5c8e55 += _0x5ee52a.nickName || "匿名用户" : _0x5c8e55 += (_0x5ee52a.nickName || "匿名用户") + ",";
          let _0x5ced02 = new Date(_0x5ee52a.time),
            _0x67b54b = _0x5ced02.getFullYear() + "-" + (_0x5ced02.getMonth() + 1) + "-" + _0x5ced02.getDate() + " " + _0x5ced02.getHours() + ":" + _0x5ced02.getMinutes() + ":" + _0x5ced02.getMinutes();
          console.log("【" + (_0x5ee52a.nickName || "匿名用户") + "】 在 " + _0x67b54b + " 给您助过力");
        });
        _0x5ce8c2 += "【助力您的好友】" + _0x5c8e55 + "\n";
      }
      console.log("领取额外奖励水滴结束\n");
    }
  }
}
async function _0xc172cd() {
  let _0x132a2c = !$.farmTask.waterRainInit.f;
  if (_0x132a2c) {
    console.log("水滴雨任务，每天两次，最多可得10g水滴");
    console.log("两次水滴雨任务是否全部完成：" + ($.farmTask.waterRainInit.f ? "是" : "否"));
    if ($.farmTask.waterRainInit.lastTime) {
      if (Date.now() < $.farmTask.waterRainInit.lastTime + 3 * 60 * 60 * 1000) {
        _0x132a2c = false;
        console.log("【第" + ($.farmTask.waterRainInit.winTimes + 1) + "次水滴雨】还未到时间\n");
      }
    }
    _0x132a2c && (console.log("开始水滴雨任务,这是第" + ($.farmTask.waterRainInit.winTimes + 1) + "次，剩余" + (2 - ($.farmTask.waterRainInit.winTimes + 1)) + "次"), await _0x4828b8(), console.log("水滴雨waterRain"), $.waterRain.code === "0" && (console.log("水滴雨任务执行成功，获得水滴：" + $.waterRain.addEnergy + "g💧"), console.log("【第" + ($.farmTask.waterRainInit.winTimes + 1) + "次水滴雨】获得" + $.waterRain.addEnergy + "g💧\n")));
  } else console.log("【水滴雨】已全部完成\n");
}
async function _0xcc871f() {
  console.log("开始打卡领水活动（签到，关注，领券）");
  await _0x45ffc6();
  if ($.clockInInit.code === "0") {
    !$.clockInInit.todaySigned && (console.log("开始今日签到"), await _0x535d10(), $.clockInForFarmRes.code === "0" ? (console.log("【第" + $.clockInForFarmRes.signDay + "天签到】获得" + $.clockInForFarmRes.amount + "g💧\n"), $.clockInForFarmRes.signDay === 7 && (console.log("开始领取惊喜礼包"), await _0x36540b(), $.gotClockInGiftRes.code === "0" && console.log("【惊喜礼包】获得" + $.gotClockInGiftRes.amount + "g💧\n"))) : console.log("打卡结果" + JSON.stringify($.clockInForFarmRes)));
    $.clockInInit.todaySigned && $.clockInInit.totalSigned === 7 && (console.log("开始领取惊喜礼包"), await _0x36540b(), $.gotClockInGiftRes.code === "0" && console.log("【惊喜礼包】获得" + $.gotClockInGiftRes.amount + "g💧\n"));
    if ($.clockInInit.themes && $.clockInInit.themes.length > 0) {
      for (let _0x4c2e17 of $.clockInInit.themes) {
        if (!_0x4c2e17.hadGot) {
          console.log("去关注" + _0x4c2e17.name);
          await _0x362609(_0x4c2e17.id, "theme", "1");
          if ($.themeStep1.code === "0") {
            await _0x362609(_0x4c2e17.id, "theme", "2");
            if ($.themeStep2.code === "0") {
              console.log("关注 成功，获得" + $.themeStep2.amount + "g💧\n");
            } else console.log("themeStep2结果: " + JSON.stringify($.themeStep2));
          } else console.log("themeStep1结果: " + JSON.stringify($.themeStep1));
        }
      }
    }
    if ($.clockInInit.venderCoupons && $.clockInInit.venderCoupons.length > 0) {
      for (let _0x13f8ef of $.clockInInit.venderCoupons) {
        !_0x13f8ef.hadGot && (console.log("领券的ID" + _0x13f8ef.id), await _0x362609(_0x13f8ef.id, "venderCoupon", "1"), console.log("venderCouponStep1--结果" + JSON.stringify($.venderCouponStep1)), $.venderCouponStep1.code === "0" && (await _0x362609(_0x13f8ef.id, "venderCoupon", "2"), $.venderCouponStep2.code === "0" && (console.log("venderCouponStep2--结果" + JSON.stringify($.venderCouponStep2)), console.log("从" + _0x13f8ef.name + "领券，获得水滴" + $.venderCouponStep2.amount + "g💧"))));
      }
    }
  }
  console.log("打卡领水活动结束\n");
}
async function _0x595e48() {
  await _0x4a87b9();
  console.log("\n开始给好友浇水...");
  await _0x3742dc();
  const {
    waterFriendCountKey: _0x33ae8b,
    waterFriendMax: _0x37e62f
  } = $.farmTask.waterFriendTaskInit;
  console.log("今日已给" + _0x33ae8b + "个好友浇水");
  if (_0x33ae8b < _0x37e62f) {
    let _0x17e52f = [];
    if ($.friendList.friends && $.friendList.friends.length > 0) {
      $.friendList.friends.map((_0x820021, _0x18c7e6) => {
        _0x820021.friendState === 1 && _0x17e52f.length < _0x37e62f - _0x33ae8b && _0x17e52f.push(_0x820021.shareCode);
      });
      _0x17e52f.length > 0 && console.log("需要浇水的好友shareCodes:" + JSON.stringify(_0x17e52f));
      _0x17e52f.length == 0 && console.log("没有需要浇水的好友!\n");
      let _0x570305 = 0,
        _0x5a5cc7 = "";
      for (let _0x59b93e = 0; _0x59b93e < _0x17e52f.length; _0x59b93e++) {
        await _0xb49c45(_0x17e52f[_0x59b93e]);
        console.log("为第" + (_0x59b93e + 1) + "个好友浇水");
        if ($.waterFriendForFarmRes.code === "0") {
          _0x570305++;
          if ($.waterFriendForFarmRes.cardInfo) {
            console.log("为好友浇水获得道具了");
            if ($.waterFriendForFarmRes.cardInfo.type === "beanCard") console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule), _0x5a5cc7 += "水滴换豆卡,";else {
              if ($.waterFriendForFarmRes.cardInfo.type === "fastCard") console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule), _0x5a5cc7 += "快速浇水卡,";else {
                if ($.waterFriendForFarmRes.cardInfo.type === "doubleCard") console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule), _0x5a5cc7 += "水滴翻倍卡,";else $.waterFriendForFarmRes.cardInfo.type === "signCard" && (console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule), _0x5a5cc7 += "加签卡,");
              }
            }
          }
        } else $.waterFriendForFarmRes.code === "11" && console.log("水滴不够,跳出浇水");
      }
      _0x570305 > 0 && console.log("已给" + _0x570305 + "个好友浇水,消耗" + _0x570305 * 10 + "g水\n");
      _0x5a5cc7 && _0x5a5cc7.length > 0 && console.log("【好友浇水奖励】" + _0x5a5cc7.substr(0, _0x5a5cc7.length - 1) + "\n");
    } else console.log("好友列表无好友,快去邀请您的好友吧!\n");
  } else console.log("今日已为" + _0x37e62f + "个好友浇水\n");
}
async function _0x4f678d() {
  await _0x3742dc();
  const {
    waterFriendCountKey: _0xe9f14f,
    waterFriendMax: _0x24b7b8,
    waterFriendSendWater: _0x2e46e2,
    waterFriendGotAward: _0x1e559a
  } = $.farmTask.waterFriendTaskInit;
  if (_0xe9f14f >= _0x24b7b8) {
    if (!_0x1e559a) {
      await _0x276111();
      $.waterFriendGotAwardRes.code === "0" && console.log("领取给好友浇水奖励" + $.waterFriendGotAwardRes.addWater + "g💧\n");
    } else console.log("给好友浇水的水滴奖励已领取\n");
  } else console.log("给" + _0x24b7b8 + "个好友浇水未完成\n");
}
async function _0x3f3647() {
  for (let _0x251e7a of _0xf4f9de) {
    if (_0x251e7a === $.farmInfo.farmUserPro.shareCode) {
      console.log("自己不能邀请自己成为好友噢\n");
      continue;
    }
    await _0x222476(_0x251e7a);
    if ($.inviteFriendRes && $.inviteFriendRes.helpResult && $.inviteFriendRes.helpResult.code === "0") console.log("接收邀请成为好友结果成功,您已成为" + $.inviteFriendRes.helpResult.masterUserInfo.nickName + "的好友");else $.inviteFriendRes && $.inviteFriendRes.helpResult && $.inviteFriendRes.helpResult.code === "17" && console.log("接收邀请成为好友结果失败,对方已是您的好友");
  }
}
async function _0x539aa5() {
  for (let _0x589107 = 0; _0x589107 < 10; _0x589107++) {
    $.duckRes = await _0x337675("getFullCollectionReward", {
      "type": 2,
      "version": 24,
      "channel": 1,
      "babelChannel": "121"
    });
    if ($.duckRes.code === "0") {
      if (!$.duckRes.hasLimit) console.log("小鸭子游戏:" + $.duckRes.title);else {
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
async function _0x3f9b84() {
  $.totalWaterReward = await _0x337675("totalWaterTaskForFarm");
}
async function _0xdb3872() {
  $.firstWaterReward = await _0x337675("firstWaterTaskForFarm");
}
async function _0x4204a() {
  $.newtaskinfo = await _0x337675("gotNewUserTaskForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x5038ae() {
  $.newtaskinfo = await _0x337675("gotLowFreqWaterForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x24582f() {
  $.farmInfo = await _0x337675("gotNewUserTaskForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x293612() {
  $.farmInfoI = await _0x337675("initForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x276111() {
  $.waterFriendGotAwardRes = await _0x337675("waterFriendGotAwardForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  });
}
async function _0x23db59() {
  $.myCardInfoRes = await _0x337675("myCardInfoForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  });
}
async function _0x599ed5(_0x433e00) {
  $.userMyCardRes = await _0x337675("userMyCardForFarm", {
    "cardType": _0x433e00
  });
}
async function _0x1e994e(_0x576944) {
  $.gotStageAwardForFarmRes = await _0x337675("gotStageAwardForFarm", {
    "type": _0x576944
  });
}
async function _0x1dcd1c() {
  await $.wait(1000);
  $.waterResult = await _0x337675("waterGoodForFarm");
}
async function _0x553450() {
  $.initForTurntableFarmRes = await _0x337675("initForTurntableFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  });
}
async function _0x118201() {
  await $.wait(2000);
  $.lotteryRes = await _0x337675("lotteryForTurntableFarm", {
    "type": 1,
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  });
}
async function _0x3e7fec() {
  $.timingAwardRes = await _0x337675("timingAwardForTurntableFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  });
}
async function _0x5caacb(_0x47b7a2, _0x30ac71) {
  const _0x1362bb = {
    "type": _0x47b7a2,
    "adId": _0x30ac71,
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  };
  $.browserForTurntableFarmRes = await _0x337675("browserForTurntableFarm", _0x1362bb);
}
async function _0x41da8a(_0x4f3f7e) {
  const _0x15d2c4 = {
    "type": 2,
    "adId": _0x4f3f7e,
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  };
  $.browserForTurntableFarm2Res = await _0x337675("browserForTurntableFarm", _0x15d2c4);
}
async function _0x244d17() {
  $.lotteryMasterHelpRes = await _0x337675("initForFarm", {
    "imageUrl": "",
    "nickName": "",
    "shareCode": arguments[0] + "-3",
    "babelChannel": "3",
    "version": 24,
    "channel": 1
  });
}
async function _0x1ccb87() {
  $.masterGotFinished = await _0x337675("masterGotFinishedTaskForFarm");
}
async function _0x424b86() {
  $.masterHelpResult = await _0x337675("masterHelpTaskInitForFarm");
}
async function _0x3667c2() {
  $.farmAssistResult = await _0x337675("farmAssistInit", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  });
}
async function _0x362afd() {
  $.receiveStageEnergy = await _0x337675("receiveStageEnergy", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  });
}
async function _0x222476() {
  $.inviteFriendRes = await _0x337675("initForFarm", {
    "imageUrl": "",
    "nickName": "",
    "shareCode": arguments[0] + "-inviteFriend",
    "version": 4,
    "channel": 2
  });
}
async function _0x51e72b() {
  $.helpResult = await _0x337675("initForFarm", {
    "imageUrl": "",
    "nickName": "",
    "shareCode": arguments[0],
    "babelChannel": "3",
    "version": 2,
    "channel": 1
  });
}
async function _0x4828b8() {
  const _0x5c66d2 = {
    "type": 1,
    "hongBaoTimes": 100,
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  };
  $.waterRain = await _0x337675("waterRainForFarm", _0x5c66d2);
}
async function _0x45ffc6() {
  $.clockInInit = await _0x337675("clockInInitForFarm");
}
async function _0x535d10() {
  $.clockInForFarmRes = await _0x337675("clockInForFarm", {
    "type": 1
  });
}
async function _0x362609(_0x52038d, _0x2f3f0d, _0x2cc3b3) {
  const _0x368d55 = "clockInFollowForFarm";
  let _0x35e68b = {
    "id": _0x52038d,
    "type": _0x2f3f0d,
    "step": _0x2cc3b3
  };
  if (_0x2f3f0d === "theme") {
    if (_0x2cc3b3 === "1") $.themeStep1 = await _0x337675(_0x368d55, _0x35e68b);else _0x2cc3b3 === "2" && ($.themeStep2 = await _0x337675(_0x368d55, _0x35e68b));
  } else {
    if (_0x2f3f0d === "venderCoupon") {
      if (_0x2cc3b3 === "1") $.venderCouponStep1 = await _0x337675(_0x368d55, _0x35e68b);else _0x2cc3b3 === "2" && ($.venderCouponStep2 = await _0x337675(_0x368d55, _0x35e68b));
    }
  }
}
async function _0x36540b() {
  $.gotClockInGiftRes = await _0x337675("clockInForFarm", {
    "type": 2,
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x4c0037() {
  $.threeMeal = await _0x337675("gotThreeMealForFarm");
}
async function _0x4c38fa(_0x5afb96, _0x53ba22, _0x16cd63) {
  if (_0x53ba22 === 0) $.browseResult = await _0x337675("browseAdTaskForFarm", {
    "advertId": _0x5afb96,
    "type": _0x53ba22,
    "adType": _0x16cd63,
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });else _0x53ba22 === 1 && ($.browseRwardResult = await _0x337675("browseAdTaskForFarm", {
    "advertId": _0x5afb96,
    "type": _0x53ba22,
    "adType": _0x16cd63,
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  }));
}
async function _0x5b4472() {
  $.goalResult = await _0x337675("gotWaterGoalTaskForFarm", {
    "type": 3
  });
}
async function _0x3742dc() {
  $.farmTask = await _0x337675("taskInitForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0xb7a594() {
  $.farmTask = await _0x337675("taskInitForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "45",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x4a87b9() {
  $.friendList = await _0x337675("friendListInitForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x36142c() {
  $.awardInviteFriendRes = await _0x337675("awardInviteFriendForFarm");
}
async function _0xb49c45(_0x15d332) {
  const _0x354851 = {
    "shareCode": _0x15d332,
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  };
  $.waterFriendForFarmRes = await _0x337675("waterFriendForFarm", _0x354851);
}
async function _0x8eb37e() {
  if ($.isNode() && process.env.FRUIT_NOTIFY_CONTROL) $.ctrTemp = "" + process.env.FRUIT_NOTIFY_CONTROL === "false";else $.getdata("jdFruitNotify") ? $.ctrTemp = $.getdata("jdFruitNotify") === "false" : $.ctrTemp = "" + _0xd086e9 === "false";
  $.ctrTemp ? ($.msg($.name, _0x32d1bd, _0x5ce8c2, _0x54e5b8), $.isNode() && (_0x53a203 += _0x32d1bd + "\n" + _0x5ce8c2 + ($.index !== _0x3db6ab.length ? "\n\n" : ""))) : $.log("\n" + _0x5ce8c2 + "\n");
}
function _0x59e591(_0x3fc284) {
  let _0x9f672d;
  return _0x3fc284 ? _0x9f672d = new Date(_0x3fc284) : _0x9f672d = new Date(), _0x9f672d.getFullYear() + "-" + (_0x9f672d.getMonth() + 1 >= 10 ? _0x9f672d.getMonth() + 1 : "0" + (_0x9f672d.getMonth() + 1)) + "-" + (_0x9f672d.getDate() >= 10 ? _0x9f672d.getDate() : "0" + _0x9f672d.getDate());
}
function _0x449b19() {
  return new Promise(_0x2f09a1 => {
    console.log("开始获取配置文件\n");
    _0x153182 = $.isNode() ? require("./sendNotify") : "";
    const _0x2cb7c2 = $.isNode() ? require("./jdCookie.js") : "";
    if ($.isNode()) {
      Object.keys(_0x2cb7c2).forEach(_0x25b0cb => {
        _0x2cb7c2[_0x25b0cb] && _0x3db6ab.push(_0x2cb7c2[_0x25b0cb]);
      });
      if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
    } else _0x3db6ab = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0x1ea493($.getdata("CookiesJD") || "[]").map(_0x4d9c8d => _0x4d9c8d.cookie)].filter(_0x1bdd9f => !!_0x1bdd9f);
    _0x2f09a1();
  });
}
async function _0x9c4d7f() {
  await _0x337675("ddnc_getTreasureBoxAward", {
    "type": 1,
    "babelChannel": "121",
    "line": "getBean",
    "version": 24,
    "channel": 1,
    "lat": "0",
    "lng": "0"
  });
  await $.wait(500);
  await _0x42d105();
  await $.wait(2000);
  let _0x4e09c8 = await _0x337675("ddnc_getTreasureBoxAward", {
    "type": 2,
    "babelChannel": "121",
    "line": "getBean",
    "version": 24,
    "channel": 1,
    "lat": "0",
    "lng": "0"
  });
  return _0x4e09c8;
}
async function _0x28fd29() {
  await _0x337675("ddnc_getTreasureBoxAward", {
    "type": 1,
    "babelChannel": "121",
    "version": 24,
    "channel": 1,
    "lat": "0",
    "lng": "0"
  });
  await $.wait(500);
  await _0xb7a594();
  await $.wait(2000);
  let _0xbdfcf9 = await _0x337675("ddnc_getTreasureBoxAward", {
    "type": 2,
    "babelChannel": "45",
    "version": 24,
    "channel": 1,
    "lat": "0",
    "lng": "0"
  });
  return _0xbdfcf9;
}
function _0x42d105() {
  return new Promise(_0x49266e => {
    const _0x57e7d5 = {
      "url": "https://api.m.jd.com/client.action?functionId=beanTaskList&body=%7B%22viewChannel%22%3A%22AppHome%22%2C%22beanVersion%22%3A1%2C%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D&appid=ld",
      "headers": {
        "Cookie": _0xb14677,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x57e7d5, (_0x1f3ba3, _0x146fc9, _0x351965) => {
      _0x49266e();
    });
  });
}
function _0x2e22a7() {
  return new Promise(_0x4b6a8d => {
    const _0x30e884 = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": {
        "Cookie": _0xb14677,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x30e884, (_0x13e044, _0x1d3677, _0x3ecf1) => {
      try {
        if (_0x3ecf1) {
          _0x3ecf1 = JSON.parse(_0x3ecf1);
          if (_0x3ecf1.islogin === "1") {} else _0x3ecf1.islogin === "0" && ($.isLogin = false);
        }
      } catch (_0x53a60c) {
        console.log(_0x53a60c);
      } finally {
        _0x4b6a8d();
      }
    });
  });
}
async function _0x337675(_0x3623c6, _0x37d235 = {}, _0x3ef9d2 = 1500) {
  if ($.reqnum % 5 == 0) {
    console.log("\n等待" + _0x304fdb / 1000 + "秒......\n");
    _0x3ef9d2 = _0x304fdb;
  }
  $.reqnum++;
  if (_0x400260[_0x3623c6]) {
    let _0x297bb0 = {
      "appId": _0x400260[_0x3623c6],
      "fn": _0x3623c6,
      "body": _0x37d235,
      "apid": "signed_wh5",
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
    _0x37d235 = await _0x5f42f0.getbody(_0x297bb0);
  } else _0x37d235 = "functionId=" + _0x3623c6 + "&body=" + encodeURIComponent(JSON.stringify(_0x37d235)) + "&appid=wh5";
  return new Promise(_0x5d44a3 => {
    setTimeout(() => {
      $.get(_0x3a8b02(_0x37d235), (_0x179ab9, _0x2a5a57, _0x111ced) => {
        try {
          _0x179ab9 ? (console.log("\n东东农场: API查询请求失败 ‼️‼️"), console.log(JSON.stringify(_0x179ab9)), console.log("function_id:" + _0x3623c6), $.logErr(_0x179ab9)) : _0x2e3a51(_0x111ced) && (_0x111ced = JSON.parse(_0x111ced));
        } catch (_0x387831) {
          $.logErr(_0x387831, _0x2a5a57);
        } finally {
          _0x5d44a3(_0x111ced);
        }
      });
    }, _0x3ef9d2);
  });
}
function _0x2e3a51(_0x5182fd) {
  try {
    if (typeof JSON.parse(_0x5182fd) == "object") return true;
  } catch (_0x485b7b) {
    return console.log(_0x485b7b), console.log("京东服务器访问数据为空，请检查自身设备网络情况"), false;
  }
}
function _0x3a8b02(_0x137a7f = {}) {
  return {
    "url": _0x5c1346 + "?" + _0x137a7f,
    "headers": {
      "Host": "api.m.jd.com",
      "Accept": "*/*",
      "Origin": "https://carry.m.jd.com",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": $.UA,
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Referer": "https://carry.m.jd.com/",
      "Cookie": _0xb14677
    },
    "timeout": 30000
  };
}
function _0x2bc535(_0x5154f5, _0x1c70ae = {}) {
  return {
    "url": _0x5c1346 + "?" + _0x1c70ae,
    "headers": {
      "Host": "api.m.jd.com",
      "Accept": "*/*",
      "Origin": "https://carry.m.jd.com",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": $.UA,
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Referer": "https://carry.m.jd.com/",
      "Cookie": _0xb14677
    },
    "timeout": 10000
  };
}
function _0x1ea493(_0x544eba) {
  if (typeof _0x544eba == "string") try {
    return JSON.parse(_0x544eba);
  } catch (_0x3831fe) {
    return console.log(_0x3831fe), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
  }
}
function Env(o,t){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((r,i)=>{s.call(this,t,(t,e,s)=>{t?i(t):r(e)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.logLevels={debug:0,info:1,warn:2,error:3},this.logLevelPrefixs={debug:"[DEBUG] ",info:"[INFO] ",warn:"[WARN] ",error:"[ERROR] "},this.logLevel="info",this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null,...s){try{return JSON.stringify(t,...s)}catch{return e}}getjson(t,e){let s=e;if(this.getdata(t))try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(r=>{this.get({url:t},(t,e,s)=>r(s))})}runScript(a,o){return new Promise(r=>{let t=this.getdata("@chavy_boxjs_userCfgs.httpapi");t=t&&t.replace(/\n/g,"").trim();var e=(e=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"))?+e:20,[s,i]=(e=o&&o.timeout?o.timeout:e,t.split("@"));this.post({url:`http://${i}/v1/scripting/evaluate`,body:{script_text:a,mock_type:"cron",timeout:e},headers:{"X-Key":s,Accept:"*/*"},timeout:e},(t,e,s)=>r(s))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};this.fs=this.fs||require("fs"),this.path=this.path||require("path");var t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),r=!s&&this.fs.existsSync(e);if(!s&&!r)return{};r=s?t:e;try{return JSON.parse(this.fs.readFileSync(r))}catch(t){return{}}}writedata(){var t,e,s,r,i;this.isNode()&&(this.fs=this.fs||require("fs"),this.path=this.path||require("path"),t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),r=!(s=this.fs.existsSync(t))&&this.fs.existsSync(e),i=JSON.stringify(this.data),!s&&r?this.fs.writeFileSync(e,i):this.fs.writeFileSync(t,i))}lodash_get(t,e,s){let r=t;for(const t of e.replace(/\[(\d+)\]/g,".$1").split("."))if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,r,e){return Object(t)===t&&((r=Array.isArray(r)?r:r.toString().match(/[^.[\]]+/g)||[]).slice(0,-1).reduce((t,e,s)=>Object(t[e])===t[e]?t[e]:t[e]=Math.abs(r[s+1])>>0==+r[s+1]?[]:{},t)[r[r.length-1]]=e),t}getdata(t){let e=this.getval(t);if(/^@/.test(t)){var[,s,r]=/^@(.*?)\.(.*?)$/.exec(t);if(s=s?this.getval(s):"")try{const t=JSON.parse(s);e=t?this.lodash_get(t,r,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){var[,r,i]=/^@(.*?)\.(.*?)$/.exec(e),a=this.getval(r),a=r?"null"===a?null:a||"{}":"{}";try{const e=JSON.parse(a);this.lodash_set(e,i,t),s=this.setval(JSON.stringify(e),r)}catch(e){this.lodash_set(a={},i,t),s=this.setval(JSON.stringify(a),r)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got||require("got"),this.cktough=this.cktough||require("tough-cookie"),this.ckjar=this.ckjar||new this.cktough.CookieJar,t&&(t.headers=t.headers||{},t)&&(t.headers=t.headers||{},void 0===t.headers.cookie)&&void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar)}tmout(){return new Promise((t,e)=>{this.tmoutId=setTimeout(()=>{this.prms.cancel(),e({message:"timemout",response:""})},5e4)})}get(t,a=()=>{}){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),t.params&&(t.url+="?"+this.queryStr(t.params)),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,e,s)=>{!t&&e&&(e.body=s,e.statusCode=e.status||e.statusCode,e.status=e.statusCode),a(t,e,s)});break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{var{statusCode:t,statusCode:e,headers:s,body:r,bodyBytes:i}=t;a(null,{status:t,statusCode:e,headers:s,body:r,bodyBytes:i},r,i)},t=>a(t&&t.error||"UndefinedError"));break;case"Node.js":this.initGotEnv(t),this.prms=this.got(t).on("redirect",(t,e)=>{try{var s;t.headers["set-cookie"]&&((s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString())&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar)}catch(t){this.logErr(t)}}),Promise.race([this.prms,this.tmout()]).then(t=>{var{statusCode:t,statusCode:e,headers:s,rawBody:r,body:i}=t;a(null,{status:t,statusCode:e,headers:s,rawBody:r,body:i},i),clearTimeout(this.tmoutId)},t=>{var{message:t,response:e}=t;clearTimeout(this.tmoutId),a(t,e,e&&e.body)})}}post(t,a=()=>{}){var e=t.method?t.method.toLocaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[e](t,(t,e,s)=>{!t&&e&&(e.body=s,e.statusCode=e.status||e.statusCode,e.status=e.statusCode),a(t,e,s)});break;case"Quantumult X":t.method=e,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{var{statusCode:t,statusCode:e,headers:s,body:r,bodyBytes:i}=t;a(null,{status:t,statusCode:e,headers:s,body:r,bodyBytes:i},r,i)},t=>a(t&&t.error||"UndefinedError"));break;case"Node.js":this.initGotEnv(t);var{url:s,...r}=t;this.prms=this.got[e](s,r),Promise.race([this.prms,this.tmout()]).then(t=>{var{statusCode:t,statusCode:e,headers:s,rawBody:r,body:i}=t;a(null,{status:t,statusCode:e,headers:s,rawBody:r,body:i},i),clearTimeout(this.tmoutId)},t=>{var{message:t,response:e}=t;clearTimeout(this.tmoutId),a(t,e,e&&e.body)})}}time(t,e=null){var s,r={"M+":(e=e?new Date(e):new Date).getMonth()+1,"d+":e.getDate(),"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(s in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[s]:("00"+r[s]).substr((""+r[s]).length)));return t}queryStr(e){let s="";for(const r in e){let t=e[r];null!=t&&""!==t&&("object"==typeof t&&(t=JSON.stringify(t)),s+=`${r}=${t}&`)}return s=s.substring(0,s.length-1)}msg(t=o,e="",s="",r={}){var i,a=r=>{const{$open:t,$copy:e,$media:i,$mediaMime:a}=r;switch(typeof r){case void 0:return r;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:r};case"Loon":case"Shadowrocket":return r;case"Quantumult X":return{"open-url":r};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:var o={},s=r.openUrl||r.url||r["open-url"]||t;if(s&&Object.assign(o,{action:"open-url",url:s}),(s=r["update-pasteboard"]||r.updatePasteboard||e)&&Object.assign(o,{action:"clipboard",text:s}),i){let t,e,s;if(i.startsWith("http"))t=i;else if(i.startsWith("data:")){const[r]=i.split(";"),[,a]=i.split(",");e=a,s=r.replace("data:","")}else e=i,s=(t=>{var e,s={JVBERi0:"application/pdf",R0lGODdh:"image/gif",R0lGODlh:"image/gif",iVBORw0KGgo:"image/png","/9j/":"image/jpg"};for(e in s)if(0===t.indexOf(e))return s[e];return null})(i);Object.assign(o,{"media-url":t,"media-base64":e,"media-base64-mime":a??s})}return Object.assign(o,{"auto-dismiss":r["auto-dismiss"],sound:r.sound}),o;case"Loon":{const e={};(s=r.openUrl||r.url||r["open-url"]||t)&&Object.assign(e,{openUrl:s});var n=r.mediaUrl||r["media-url"];return(n=i?.startsWith("http")?i:n)&&Object.assign(e,{mediaUrl:n}),console.log(JSON.stringify(e)),e}case"Quantumult X":{const a={};(o=r["open-url"]||r.url||r.openUrl||t)&&Object.assign(a,{"open-url":o});n=r["media-url"]||r.mediaUrl;return(n=i?.startsWith("http")?i:n)&&Object.assign(a,{"media-url":n}),(s=r["update-pasteboard"]||r.updatePasteboard||e)&&Object.assign(a,{"update-pasteboard":s}),console.log(JSON.stringify(a)),a}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(t,e,s,a(r));break;case"Quantumult X":$notify(t,e,s,a(r));break;case"Node.js":}this.isMuteLog||((i=["","==============📣系统通知📣=============="]).push(t),e&&i.push(e),s&&i.push(s),console.log(i.join("\n")),this.logs=this.logs.concat(i))}debug(...t){this.logLevels[this.logLevel]<=this.logLevels.debug&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.debug+t.map(t=>t??String(t)).join(this.logSeparator)))}info(...t){this.logLevels[this.logLevel]<=this.logLevels.info&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.info+t.map(t=>t??String(t)).join(this.logSeparator)))}warn(...t){this.logLevels[this.logLevel]<=this.logLevels.warn&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.warn+t.map(t=>t??String(t)).join(this.logSeparator)))}error(...t){this.logLevels[this.logLevel]<=this.logLevels.error&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.error+t.map(t=>t??String(t)).join(this.logSeparator)))}log(...t){0<t.length&&(this.logs=[...this.logs,...t]),console.log(t.map(t=>t??String(t)).join(this.logSeparator))}logErr(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️${this.name}, 错误!`,t);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,void 0!==t.message?t.message:t)}}wait(e){return new Promise(t=>setTimeout(t,e))}done(t={}){var e=((new Date).getTime()-this.startTime)/1e3;switch(this.log("",`🔔${this.name}, 结束! 🕛 ${e} 秒`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(o,t)}