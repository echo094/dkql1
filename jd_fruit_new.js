/*
活动入口：京东APP我的--东东农场
==========================Quantumultx=========================
[task_local]
#jd新农场
10 6,12,17 * * * jd_fruit_new.js

*/
const $ = new Env('新农场任务');
const _0x10dddb = 100;
let _0x4635d6 = [],
  _0x435a9a = "",
  _0x102d21,
  _0x53fca0,
  _0x5ca3c8 = "",
  _0x29eeeb = "",
  _0x5e6655 = "",
  _0x11febd = {},
  _0xf8d90b = false,
  _0x59f7b4 = 0;
const _0x2649a5 = "https://api.m.jd.com/client.action",
  _0x17cbff = "openjd://virtual?params=%7B%20%22category%22:%20%22jump%22,%20%22des%22:%20%22m%22,%20%22url%22:%20%22https://h5.m.jd.com/babelDiy/Zeus/3KSjXqQabiTuD1cJ28QskrpWoBKT/index.html%22%20%7D";
let _0x2013ef = "";
const _0x16826b = process.env.WTNUM_NEW ? process.env.WTNUM_NEW : 0,
  _0x2f8984 = process.env.FRUIT_NOTIFY == false ? process.env.FRUIT_NOTIFY : true,
  _0x770a39 = 1000,
  _0x278fbf = require("./USER_AGENTS"),
  _0x5c5712 = require("fs"),
  _0x3b6b78 = require("./function/dylib"),
  _0x18ee8d = require("./function/dylanv"),
  _0xd6afe8 = require("./function/jdCommon1"),
  {
    H5st: _0x23d7bb
  } = require("./function/jdCrypto");
if (process.env.DY_PROXY) {
  const _0x23cfb3 = require("./function/proxy.js");
  $.get = _0x23cfb3.intoRequest($.get.bind($));
  $.post = _0x23cfb3.intoRequest($.post.bind($));
}
let _0x4a7f2d = [];
const _0x378476 = {
    "farm_home": "c57f6",
    "farm_do_task": "28981",
    "farm_task_receive_award": "33e0f",
    "farm_water": "28981",
    "farm_assist_receive_award": "c4332",
    "farm_rain_round_icon": "c57f6",
    "farm_rain_reward": "c57f6"
  },
  _0x30c6ff = {
    "dongDongFarmSignHome": "deba1",
    "dongDongFarmSignIn": "65f9d",
    "wheelsHome": "c06b7",
    "wheelsLottery": "bd6c8",
    "apsDoTask": "54ed7"
  };
!(async () => {
  await _0x338f1b();
  if (!_0x4635d6[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  $.log("\n版本：2024/6/23 ");
  $.log("问题建议：https://t.me/dylan_jdpro\n");
  $.log("\n环境变量（可选项）：");
  $.log("export DY_PROXY='api_url' 可使用代理API");
  $.log("export WTNUM_NEW='100' 指定浇水次数");
  $.log("export FRUIT_NOTIFY=false 开启详情通知，默认只通知成熟和异常");
  $.log("没种植会随机选择最高等级种子自动种植\n");
  $.reqnum = 1;
  process.env.NO_WATER == "true" && 0 ? (_0x5ca3c8 = "【一水不缴模式已开启！】\n\n", $.log("【一水不缴模式已开启！】\n")) : process.env.DO_TEN_WATER_AGAIN == "true" && 0 && (_0x5ca3c8 = "【攒水滴模式已开启，每天只浇水10次！】\n\n", $.log("【攒水滴模式已开启，每天只浇水10次！】\n"));
  for (let _0xa62b7f = 0; _0xa62b7f < _0x4635d6.length; _0xa62b7f++) {
    if (_0x4635d6[_0xa62b7f]) {
      _0x435a9a = _0x4635d6[_0xa62b7f];
      $.UserName = decodeURIComponent(_0x435a9a.match(/pt_pin=([^; ]+)(?=;?)/) && _0x435a9a.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0xa62b7f + 1;
      $.isLogin = true;
      $.nickName = "";
      $.farmInfo = "";
      ct = 0;
      $.kuwei = false;
      await _0xd2024();
      console.log("\n------------------【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "-------------------\n");
      if (!$.isLogin) {
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        });
        $.isNode() && (await _0x102d21.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      _0x29eeeb = "";
      _0x5e6655 = "";
      _0x11febd = {};
      $.UA = _0x278fbf.UARAM ? _0x278fbf.UARAM() : _0x278fbf.USER_AGENT;
      $.UUID = _0xd6afe8.genUuid("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      await _0x23805a();
      await $.wait(2000);
    }
  }
  _0x5c5712.writeFileSync("./fruit_helpcode_new", JSON.stringify(_0x4a7f2d), _0x121eea => {
    _0x121eea && console.log(_0x121eea);
  });
  $.isNode() && _0x5ca3c8 && $.ctrTemp && (await _0x102d21.sendNotify("" + $.name, "" + _0x5ca3c8));
})().catch(_0x3e8ff9 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x3e8ff9 + "!", "");
}).finally(() => {
  $.done();
});
async function _0x23805a() {
  _0x5e6655 = "【京东账号" + $.index + "🆔】" + ($.nickName || $.UserName);
  try {
    await _0x5b72ad();
    await $.wait(500);
    if ($.farmInfo?.["data"]?.["result"]?.["skuName"]) {
      _0x29eeeb = "【水果名称】" + $.farmInfo.data.result.skuName + "\n";
      console.log("【账号（" + $.UserName + "）的" + $.name + "好友互助码】" + $.farmInfo.data.result.farmHomeShare.inviteCode);
      console.log("【已成功兑换水果】" + $.farmInfo.data.result.completeTimes + "次");
      _0x29eeeb += "【已兑换水果】" + $.farmInfo.data.result.completeTimes + "次\n";
      _0x4a7f2d.push($.farmInfo.data.result.farmHomeShare.inviteCode);
      await _0x1e978a();
      if ($.farmInfo.data.result.treeFullStage === 5 || $.kuwei) {
        if ($.farmInfo.data.result.treeFullStage === 5) _0x11febd["open-url"] = _0x17cbff, $.msg($.name, "", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo?.["data"]?.["result"]?.["skuName"] + "已种成\n请去京东APP或微信小程序查看\n点击弹窗即达", _0x11febd), await _0x102d21.sendNotify($.name + " - 账号" + $.index + " - " + ($.nickName || $.UserName) + "水果已种成", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo?.["data"]?.["result"]?.["skuName"] + "已种成\n请去京东APP农场奖品记录里兑换");else $.kuwei && console.log("\n" + $.farmInfo.data.result.skuName + "   枯萎了，重新种植吧！");
        await _0x446c5b();
        if ($.treeboardRes.data?.["result"]?.["farmTreeLevels"][2]?.["farmLevelTrees"]) {
          let _0x4f2390 = $.treeboardRes.data?.["result"]?.["farmTreeLevels"][2]?.["farmLevelTrees"];
          _0x2013ef = _0x4f2390[Math.floor(Math.random() * _0x4f2390.length)].uid;
          console.log("\n已选择3级商品为自动种植目标");
        } else {
          if ($.treeboardRes.data?.["result"]?.["farmTreeLevels"][1]?.["farmLevelTrees"]) {
            let _0x120580 = $.treeboardRes.data?.["result"]?.["farmTreeLevels"][1]?.["farmLevelTrees"];
            _0x2013ef = _0x120580[Math.floor(Math.random() * _0x120580.length)].uid;
            console.log("\n已选择2级商品为自动种植目标");
          } else {
            if ($.treeboardRes.data?.["result"]?.["farmTreeLevels"][0]?.["farmLevelTrees"]) {
              let _0xc1d744 = $.treeboardRes.data?.["result"]?.["farmTreeLevels"][0]?.["farmLevelTrees"];
              _0x2013ef = _0xc1d744[Math.floor(Math.random() * _0xc1d744.length)].uid;
              console.log("\n已选择1级商品为自动种植目标");
            }
          }
        }
        if (_0x2013ef) {
          console.log("\n\n已随机选择种植目标，开始种植。。。");
          await _0x23d276(_0x2013ef);
          if ($.planttreeRes.code == 0 && $.planttreeRes.data.bizCode == 0) {
            console.log("种植成功！！！再次执行做任务领水滴浇水吧！");
            return;
          }
        }
        return;
      } else {
        if ($.farmInfo.data.result.treeCurrentState === 0) {
          console.log("\n" + $.farmInfo.data.result.skuName + "   种植中...");
          console.log("种植进度：" + $.farmInfo.data.result.treeFullStage + "/5----" + $.farmInfo.data.result.currentProcess + "%");
        }
      }
      await _0x3761a7();
      $.rain_round.data.result.curRoundToken && (console.log("\n开始水滴红包雨..."), await $.wait(1000), await _0x153ec7($.rain_round.data.result.curRoundToken), await _0x1cf5f1($.rain_round.data.result.curRoundToken), $.rain_reward.data.bizCode == 0 && console.log("获得水滴" + $.rain_reward.data.result.waterRainPrize[0].value + "g💧"));
      await _0x49242b();
      await _0x226513();
      if (process.env.DO_TEN_WATER_AGAIN != "true" || 1) {
        $.log("执行继续浇水...");
        await _0x1c3d62();
      } else $.log("不执行再次浇水，攒水滴!");
      await $.wait(500);
      await _0x5b72ad();
      console.log("种植进度：" + $.farmInfo.data.result.treeFullStage + "/5----" + $.farmInfo.data.result.currentProcess + "%");
      _0x29eeeb += "【种植进度】" + $.farmInfo.data.result.treeFullStage + "/5----" + $.farmInfo.data.result.currentProcess + "%\n";
      _0x29eeeb += "【剩余水滴】" + _0x59f7b4 + "g💧\n";
    } else {
      if ($.farmInfo?.["data"]?.["result"]?.["treeFullStage"] === 0) {
        console.log("没有种植水果，请在下面选择种植的商品，设置变量（商品的UID)再次运行即可种植");
        await _0x446c5b();
        if ($.treeboardRes.data?.["result"]?.["farmTreeLevels"][0]?.["farmLevelTrees"]) {
          console.log("\n===============1级商品(UID)最快20天种成=================");
          for (let _0x59bc2a of $.treeboardRes.data?.["result"]?.["farmTreeLevels"][0]?.["farmLevelTrees"]) {
            console.log(_0x59bc2a.skuName + "(" + _0x59bc2a.uid + ")");
          }
        }
        if ($.treeboardRes.data?.["result"]?.["farmTreeLevels"][1]?.["farmLevelTrees"]) {
          console.log("\n===============2级商品(UID)最快30天种成=================");
          for (let _0x2d37ec of $.treeboardRes.data?.["result"]?.["farmTreeLevels"][1]?.["farmLevelTrees"]) {
            console.log(_0x2d37ec.skuName + "(" + _0x2d37ec.uid + ")");
          }
        }
        if ($.treeboardRes.data?.["result"]?.["farmTreeLevels"][2]?.["farmLevelTrees"]) {
          console.log("\n===============3级商品(UID)最快41天种成=================");
          for (let _0x56af96 of $.treeboardRes.data?.["result"]?.["farmTreeLevels"][2]?.["farmLevelTrees"]) {
            console.log(_0x56af96.skuName + "(" + _0x56af96.uid + ")");
          }
        }
        if (_0x2013ef) {
          console.log("\n\n已设置种植目标，开始种植。。。");
          await _0x23d276(_0x2013ef);
          if ($.planttreeRes.code == 0 && $.planttreeRes.data.bizCode == 0) {
            console.log("种植成功！！！再次执行去做任务领水滴浇水吧！");
            return;
          }
        }
        $.msg($.name, "", "【京东账号" + $.index + "】 " + ($.nickName || $.UserName) + "\n【提醒⏰】您忘了种植新的水果\n请去京东APP选购并种植新的水果");
        $.isNode() && (await _0x102d21.sendNotify($.name + " - 您忘了种植新的水果", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n【提醒⏰】您忘了种植新的水果\n请去京东APP种植新的水果"));
        return;
      } else console.log("初始化农场数据异常, 请登录京东app查看农场功能是否正常,农场初始化数据: " + JSON.stringify($.farmInfo) + "\n"), _0x29eeeb = "【数据异常】请手动登录app查看此账号农场是否正常\n\n";
    }
  } catch (_0x31405d) {
    console.log("任务执行异常，请检查执行日志 ‼️‼️\n\n");
    $.logErr(_0x31405d);
  }
  await _0x2eade2();
}
async function _0x226513() {
  await _0x113a7d();
  console.log("\n开始日常任务...");
  for (let _0x4c2990 of $.farmTask.data.result.taskList) {
    if (_0x4c2990.taskStatus == 3) {
      console.log(_0x4c2990.mainTitle + "已完成");
      continue;
    }
    console.log("去做 " + _0x4c2990.mainTitle);
    if (_0x4c2990.taskStatus == 2) {
      await _0x330f1a(_0x4c2990.taskType, _0x4c2990.taskId);
      $.dotaskResult?.["data"] && Object.keys($.dotaskResult.data.result).length > 0 && console.log("任务完成，获得水滴" + $.dotaskResult.data.result.taskAward[0].awardValue + "g💧");
      continue;
    }
    await $.wait(1000);
    switch (_0x4c2990.taskType) {
      case "CUMULATIVE_TIMES":
        break;
      case "ORDER_MARK":
        break;
      case "EXTERNAL_BROWSE":
      case "BROWSE_CHANNEL":
      case "BROWSE_PRODUCT":
        if (!_0x4c2990.taskSourceUrl) {
          await _0x11b81b(_0x4c2990.taskType, _0x4c2990.taskId);
          let _0xb02793 = $.taskDetail.data.result.taskDetaiList;
          _0x4c2990.taskSourceUrl = _0xb02793[Math.floor(Math.random() * _0xb02793.length)].itemId;
        }
        await _0xb7e258(_0x4c2990.taskType, _0x4c2990.taskId, Buffer.from(_0x4c2990.taskSourceUrl).toString("base64")), await $.wait(_0x4c2990.timePeriod * 1000), await _0x330f1a(_0x4c2990.taskType, _0x4c2990.taskId);
        $.dotaskResult?.["data"] && Object.keys($.dotaskResult.data.result).length > 0 && console.log("任务完成，获得水滴" + $.dotaskResult.data.result.taskAward[0].awardValue + "g💧");
        break;
      default:
        console.log(_0x4c2990.taskType + " 类型未支持");
        break;
    }
  }
  await _0x2a2b7d();
  await $.wait(500);
}
async function _0x26922e() {
  console.log("开始预测水果成熟时间...\n");
  await initForFarm();
  if (!$.farmInfo.farmUserPro) await initForFarm();
  await _0x113a7d();
  let _0x4b8e6b = $.farmTask.firstWaterInit.totalWaterTimes;
  _0x29eeeb += "【今日共浇水】" + _0x4b8e6b + "次\n";
  _0x29eeeb += "【剩余水滴】" + $.farmInfo.farmUserPro.totalEnergy + "g💧\n";
  _0x29eeeb += "【水果进度】" + ($.farmInfo.farmUserPro.treeEnergy / $.farmInfo.farmUserPro.treeTotalEnergy * 100).toFixed(2) + "%，已浇水" + $.farmInfo.farmUserPro.treeEnergy / 10 + "次,还需" + ($.farmInfo.farmUserPro.treeTotalEnergy - $.farmInfo.farmUserPro.treeEnergy) / 10 + "次\n";
  if ($.farmInfo.toFlowTimes > $.farmInfo.farmUserPro.treeEnergy / 10) _0x29eeeb += "【开花进度】再浇水" + ($.farmInfo.toFlowTimes - $.farmInfo.farmUserPro.treeEnergy / 10) + "次开花\n";else $.farmInfo.toFruitTimes > $.farmInfo.farmUserPro.treeEnergy / 10 && (_0x29eeeb += "【结果进度】再浇水" + ($.farmInfo.toFruitTimes - $.farmInfo.farmUserPro.treeEnergy / 10) + "次结果\n");
  let _0x14aced = ($.farmInfo.farmUserPro.treeTotalEnergy - $.farmInfo.farmUserPro.treeEnergy) / 10;
  if (_0x4b8e6b > 2) {
    let _0x56b50c = Math.ceil(_0x14aced / _0x4b8e6b) || 0;
    _0x29eeeb += "【预测】" + (_0x56b50c === 1 ? "明天" : _0x56b50c === 2 ? "后天" : _0x56b50c + "天之后") + "(" + _0x5b60e3(24 * 60 * 60 * 1000 * _0x56b50c + Date.now()) + "日)可兑换水果🍉\n";
  } else _0x29eeeb += "【预测】不浇水无限期\n";
}
async function _0x49242b() {
  await _0x113a7d();
  if (JSON.stringify($.farmTask.data.result.taskList).includes("\"每日累计浇水10次\",\"singleTask\":true,\"subTitle\":\"完成任务，奖励20g水滴\",\"taskDoTimes\":10") === false) {
    console.log("\n准备浇水十次");
    _0xf8d90b = false;
    for (let _0x4f2fa8 = 0; _0x4f2fa8 < 10 - $.farmTask.data.result.taskList[0].taskDoTimes; _0x4f2fa8++) {
      console.log("第" + (_0x4f2fa8 + 1) + "次浇水");
      await _0x4a7518(1);
      if ($.waterResult.data.bizCode === 0) {
        console.log("浇水成功，剩余水滴" + $.waterResult.data.result.bottleWater + "g，" + $.waterResult.data.result.waterTips);
        if ($.waterResult.data.result.finished) {
          _0xf8d90b = true;
          break;
        } else {
          if ($.waterResult.data.result.bottleWater < 10) {
            console.log("水滴不够，结束浇水\n");
            break;
          }
        }
      } else {
        if ($.waterResult.data.bizCode === 4) {
          console.log("水滴不够，结束浇水\n");
          break;
        } else {
          console.log("浇水出现失败异常,跳出不在继续浇水\n");
          break;
        }
      }
      _0x59f7b4 = $.waterResult.data.result.bottleWater;
    }
    _0xf8d90b && ($.msg($.name, "", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo?.["data"]?.["result"]?.["skuName"] + "已可领取\n请去京东APP查看"), $.isNode() && (await _0x102d21.sendNotify($.name + " - 账号" + $.index + " - " + ($.nickName || $.UserName) + "水果已种成", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo?.["data"]?.["result"]?.["skuName"] + "已种成\n请去京东APP农场奖品记录里兑换")));
  } else console.log("\n今日已完成10次浇水任务\n");
}
async function _0x1c3d62() {
  console.log("检查剩余水滴能否继续浇水...\n");
  await _0x5b72ad();
  _0x59f7b4 = $.farmInfo.data.result.bottleWater;
  console.log("剩余水滴" + _0x59f7b4 + "g\n");
  let _0x444fc1 = _0x59f7b4 - _0x10dddb;
  if (_0x444fc1 >= 10) {
    $.log("\n开始浇水...");
    console.log("目前剩余水滴：" + _0x59f7b4 + "g，可继续浇水");
    _0xf8d90b = false;
    let _0x2164ed = _0x16826b > 0 ? Math.min.apply(null, [Number(_0x16826b), parseInt(_0x444fc1 / 10)]) : parseInt(_0x444fc1 / 10);
    console.log("\n开始执行" + _0x2164ed + "次浇水，可变量指定次数...");
    for (let _0x5f51c4 = 0; _0x5f51c4 < _0x2164ed; _0x5f51c4++) {
      $.log("浇水第" + (_0x5f51c4 + 1) + "次");
      await _0x4a7518(1);
      if ($.waterResult.code === 0) {
        console.log("浇水10g成功,剩余" + $.waterResult.data.result.bottleWater + "g，" + $.waterResult.data.result.waterTips + "\n");
        if ($.waterResult.data.result.finished) {
          _0xf8d90b = true;
          $.log("水果已成熟啦！\n");
          break;
        } else {}
      } else {
        console.log("浇水出现失败异常,跳出不在继续浇水");
        break;
      }
    }
    _0x59f7b4 = $.waterResult.data.result.bottleWater;
  } else console.log("目前剩余水滴：【" + _0x59f7b4 + "】g,不再继续浇水,保留部分水滴用于完成第二天【十次浇水得水滴】任务");
  _0xf8d90b && ($.msg($.name, "", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo?.["data"]?.["result"]?.["skuName"] + "已可领取\n请去京东APP或微信小程序查看"), $.isNode() && (await _0x102d21.sendNotify($.name + " - 账号" + $.index + " - " + ($.nickName || $.UserName) + "水果已种成", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo?.["data"]?.["result"]?.["skuName"] + "已种成\n请去京东APP农场奖品记录里兑换")));
}
function _0x3a9233() {
  return new Promise(async _0x37406b => {
    if ($.waterResult.waterStatus === 0 && $.waterResult.treeEnergy === 10) console.log("果树发芽了,奖励30g💧"), await _0x4c1cfc("1"), console.log("浇水阶段奖励1领取结果 " + JSON.stringify($.gotStageAwardForFarmRes)), $.gotStageAwardForFarmRes.code === "0" && console.log("【果树发芽了】奖励" + $.gotStageAwardForFarmRes.addEnergy + "💧\n");else {
      if ($.waterResult.waterStatus === 1) console.log("果树开花了,奖励40g💧"), await _0x4c1cfc("2"), console.log("浇水阶段奖励2领取结果 " + JSON.stringify($.gotStageAwardForFarmRes)), $.gotStageAwardForFarmRes.code === "0" && console.log("【果树开花了】奖励" + $.gotStageAwardForFarmRes.addEnergy + "g💧\n");else $.waterResult.waterStatus === 2 && (console.log("果树长出小果子啦, 奖励50g💧"), await _0x4c1cfc("3"), console.log("浇水阶段奖励3领取结果 " + JSON.stringify($.gotStageAwardForFarmRes)), $.gotStageAwardForFarmRes.code === "0" && console.log("【果树结果了】奖励" + $.gotStageAwardForFarmRes.addEnergy + "g💧\n"));
    }
    _0x37406b();
  });
}
async function _0x3f1022() {
  await _0x4fbc35();
  if ($.initForTurntableFarmRes && $.initForTurntableFarmRes.code === 0) {
    console.log("\n开始天天抽奖任务...");
    await _0x147f0b();
    if ($.wheeltaskRes.code == 0) {
      for (let _0xfd7178 of $.wheeltaskRes.data) {
        if (_0xfd7178.taskFinished) {
          console.log(_0xfd7178.taskTitle + "----" + _0xfd7178.taskShowTitle + " 已完成");
          continue;
        }
        await _0x239cb1(_0xfd7178.taskType, _0xfd7178.id, _0xfd7178.taskSourceUrl);
        if ($.wheeldoRes && $.wheeldoRes.code == 0) {
          console.log("任务完成，获得1次抽奖机会");
        } else {
          console.log("错误了，403");
          break;
        }
        await $.wait(3000);
      }
    }
    await _0x4fbc35();
    if ($.initForTurntableFarmRes.data.lotteryChances > 0) {
      console.log("\n天天抽奖次数 " + $.initForTurntableFarmRes.data.lotteryChances);
      console.log("开始抽奖...");
      let _0x130a2b = "";
      for (let _0x493a89 = 0; _0x493a89 < $.initForTurntableFarmRes.data.lotteryChances; _0x493a89++) {
        await _0x2904fe();
        console.log("第" + (_0x493a89 + 1) + "次抽奖");
        if ($.lotteryRes && $.lotteryRes.code === 0) {
          _0x130a2b += $.lotteryRes.data.prizeName + "，";
          if ($.lotteryRes.data.lotteryChances === 0) {
            break;
          }
        } else {
          console.log("错误了！");
          break;
        }
        await $.wait(3000);
      }
      _0x130a2b && console.log("天天抽奖奖励：" + _0x130a2b.substr(0, _0x130a2b.length - 1) + "\n");
    } else console.log("天天抽奖无次数！");
  } else console.log("初始化天天抽奖得好礼失败！");
}
async function _0x2a2b7d() {
  await _0x2fabfe();
  if ($.farmAssistResult.code === 0) {
    if ($.farmAssistResult.data.result.assistFriendList && $.farmAssistResult.data.result.assistFriendList.length >= 2) {
      if ($.farmAssistResult.data.result.status === 2) {
        let _0x2a13a0 = 0;
        for (let _0xfd4d98 of Object.keys($.farmAssistResult.data.result.assistStageList)) {
          let _0x27edbd = $.farmAssistResult.data.result.assistStageList[_0xfd4d98];
          _0x27edbd.stageStaus === 2 && (await _0x20062b(), $.receiveStageEnergy.code === 0 && (console.log("成功领取第" + (Number(_0xfd4d98) + 1) + "段助力奖励：" + $.receiveStageEnergy.data.result.amount + "g💧"), _0x2a13a0 += $.receiveStageEnergy.data.result.amount), await $.wait(1500));
        }
        _0x29eeeb += "【额外奖励】" + _0x2a13a0 + "g💧领取完成\n";
        console.log("【额外奖励】" + _0x2a13a0 + "g💧领取完成\n");
      } else $.farmAssistResult.data.result.status === 3 && (console.log("已经领取过好友助力额外奖励"), _0x29eeeb += "【额外奖励】已领取过\n");
    } else {
      console.log("助力好友未达到2个");
      _0x29eeeb += "【额外奖励】领取失败,原因：给您助力的人未达2个\n";
    }
    if ($.farmAssistResult.data.result.assistFriendList && $.farmAssistResult.data.result.assistFriendList.length > 0) {
      let _0x31458d = "";
      $.farmAssistResult.data.result.assistFriendList.map((_0x2ed0e8, _0x55850c) => {
        if (_0x55850c === $.farmAssistResult.data.result.assistFriendList.length - 1) _0x31458d += _0x2ed0e8.nickname || "匿名用户";else {
          _0x31458d += (_0x2ed0e8.nickname || "匿名用户") + ",";
        }
        let _0xdd6408 = new Date(_0x2ed0e8.time),
          _0x5ee653 = _0xdd6408.getFullYear() + "/" + ("0" + (_0xdd6408.getMonth() + 1)).slice(-2) + "/" + ("0" + _0xdd6408.getDate()).slice(-2) + " " + ("0" + _0xdd6408.getHours()).slice(-2) + ":" + ("0" + _0xdd6408.getMinutes()).slice(-2) + ":" + ("0" + _0xdd6408.getSeconds()).slice(-2);
        console.log("【" + (_0x2ed0e8.nickname || "匿名用户") + "】 在 " + _0x5ee653 + " 给您助过力");
      });
      _0x29eeeb += "【助力您的好友】" + _0x31458d + "\n";
    }
    console.log("\n领取额外奖励水滴结束\n");
  } else {
    await _0x5d5a87();
    if ($.masterHelpResult.code === "0") {
      $.masterHelpResult.masterHelpPeoples && $.masterHelpResult.masterHelpPeoples.length >= 5 ? !$.masterHelpResult.masterGotFinal ? (await _0x59fe4e(), $.masterGotFinished.code === "0" && (console.log("已成功领取好友助力奖励：【" + $.masterGotFinished.amount + "】g💧"), _0x29eeeb += "【额外奖励】" + $.masterGotFinished.amount + "g💧领取成功\n")) : (console.log("已经领取过5好友助力额外奖励"), _0x29eeeb += "【额外奖励】已被领取过\n") : (console.log("助力好友未达到5个"), _0x29eeeb += "【额外奖励】领取失败,原因：给您助力的人未达5个\n");
      if ($.masterHelpResult.masterHelpPeoples && $.masterHelpResult.masterHelpPeoples.length > 0) {
        let _0x151684 = "";
        $.masterHelpResult.masterHelpPeoples.map((_0x12398d, _0x49495f) => {
          _0x49495f === $.masterHelpResult.masterHelpPeoples.length - 1 ? _0x151684 += _0x12398d.nickName || "匿名用户" : _0x151684 += (_0x12398d.nickName || "匿名用户") + ",";
          let _0x2e5586 = new Date(_0x12398d.time),
            _0x5957df = _0x2e5586.getFullYear() + "-" + (_0x2e5586.getMonth() + 1) + "-" + _0x2e5586.getDate() + " " + _0x2e5586.getHours() + ":" + _0x2e5586.getMinutes() + ":" + _0x2e5586.getMinutes();
          console.log("【" + (_0x12398d.nickName || "匿名用户") + "】 在 " + _0x5957df + " 给您助过力");
        });
        _0x29eeeb += "【助力您的好友】" + _0x151684 + "\n";
      }
      console.log("领取额外奖励水滴结束\n");
    }
  }
}
async function _0x516510() {
  let _0x23e934 = !$.farmTask.waterRainInit.f;
  _0x23e934 ? (console.log("水滴雨任务，每天两次，最多可得10g水滴"), console.log("两次水滴雨任务是否全部完成：" + ($.farmTask.waterRainInit.f ? "是" : "否")), $.farmTask.waterRainInit.lastTime && Date.now() < $.farmTask.waterRainInit.lastTime + 3 * 60 * 60 * 1000 && (_0x23e934 = false, console.log("【第" + ($.farmTask.waterRainInit.winTimes + 1) + "次水滴雨】还未到时间\n")), _0x23e934 && (console.log("开始水滴雨任务,这是第" + ($.farmTask.waterRainInit.winTimes + 1) + "次，剩余" + (2 - ($.farmTask.waterRainInit.winTimes + 1)) + "次"), await _0x35572e(), console.log("水滴雨waterRain"), $.waterRain.code === "0" && (console.log("水滴雨任务执行成功，获得水滴：" + $.waterRain.addEnergy + "g💧"), console.log("【第" + ($.farmTask.waterRainInit.winTimes + 1) + "次水滴雨】获得" + $.waterRain.addEnergy + "g💧\n")))) : console.log("【水滴雨】已全部完成\n");
}
async function _0x1e978a() {
  await _0x4d071c();
  if ($.clockInInit.code === 0) {
    if ($.clockInInit.data.signInFlag == 0) {
      console.log("\n开始今日签到");
      await _0x5b77e6();
      if ($.clockInForFarmRes.code === 0) console.log("获得" + $.clockInForFarmRes.data.prizeDesc + "💧\n");else {
        if ($.clockInForFarmRes.code === 210000) {
          console.log("签到失败：" + JSON.stringify($.clockInForFarmRes));
          $.kuwei = true;
        } else console.log("签到失败：" + JSON.stringify($.clockInForFarmRes));
      }
    }
  }
}
async function _0x9e0936() {
  await _0x59fa33();
  console.log("\n开始给好友浇水...");
  await _0x113a7d();
  const {
    waterFriendCountKey: _0x476b13,
    waterFriendMax: _0x45bac7
  } = $.farmTask.waterFriendTaskInit;
  console.log("今日已给" + _0x476b13 + "个好友浇水");
  if (_0x476b13 < _0x45bac7) {
    let _0x262869 = [];
    if ($.friendList.friends && $.friendList.friends.length > 0) {
      $.friendList.friends.map((_0xd0463c, _0x2d88d8) => {
        if (_0xd0463c.friendState === 1) {
          if (_0x262869.length < _0x45bac7 - _0x476b13) {
            _0x262869.push(_0xd0463c.shareCode);
          }
        }
      });
      _0x262869.length > 0 && console.log("需要浇水的好友shareCodes:" + JSON.stringify(_0x262869));
      _0x262869.length == 0 && console.log("没有需要浇水的好友!\n");
      let _0x2bcb0d = 0,
        _0x473b8a = "";
      for (let _0x1de9d0 = 0; _0x1de9d0 < _0x262869.length; _0x1de9d0++) {
        await _0x15c3c2(_0x262869[_0x1de9d0]);
        console.log("为第" + (_0x1de9d0 + 1) + "个好友浇水");
        if ($.waterFriendForFarmRes.code === "0") {
          _0x2bcb0d++;
          if ($.waterFriendForFarmRes.cardInfo) {
            console.log("为好友浇水获得道具了");
            if ($.waterFriendForFarmRes.cardInfo.type === "beanCard") {
              console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule);
              _0x473b8a += "水滴换豆卡,";
            } else {
              if ($.waterFriendForFarmRes.cardInfo.type === "fastCard") {
                console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule);
                _0x473b8a += "快速浇水卡,";
              } else {
                if ($.waterFriendForFarmRes.cardInfo.type === "doubleCard") console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule), _0x473b8a += "水滴翻倍卡,";else $.waterFriendForFarmRes.cardInfo.type === "signCard" && (console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule), _0x473b8a += "加签卡,");
              }
            }
          }
        } else $.waterFriendForFarmRes.code === "11" && console.log("水滴不够,跳出浇水");
      }
      _0x2bcb0d > 0 && console.log("已给" + _0x2bcb0d + "个好友浇水,消耗" + _0x2bcb0d * 10 + "g水\n");
      _0x473b8a && _0x473b8a.length > 0 && console.log("【好友浇水奖励】" + _0x473b8a.substr(0, _0x473b8a.length - 1) + "\n");
    } else {
      console.log("好友列表无好友,快去邀请您的好友吧!\n");
    }
  } else console.log("今日已为" + _0x45bac7 + "个好友浇水\n");
}
async function _0x34f1ae() {
  await _0x113a7d();
  const {
    waterFriendCountKey: _0x59cacd,
    waterFriendMax: _0x41860f,
    waterFriendSendWater: _0x2ac3c8,
    waterFriendGotAward: _0xaf0d44
  } = $.farmTask.waterFriendTaskInit;
  if (_0x59cacd >= _0x41860f) {
    !_0xaf0d44 ? (await _0x5d0e72(), $.waterFriendGotAwardRes.code === "0" && console.log("领取给好友浇水奖励" + $.waterFriendGotAwardRes.addWater + "g💧\n")) : console.log("给好友浇水的水滴奖励已领取\n");
  } else console.log("给" + _0x41860f + "个好友浇水未完成\n");
}
async function _0x14dd77() {
  for (let _0x2f62c1 of _0x53fca0) {
    if (_0x2f62c1 === $.farmInfo.farmUserPro.shareCode) {
      console.log("自己不能邀请自己成为好友噢\n");
      continue;
    }
    await _0x5b9ce4(_0x2f62c1);
    if ($.inviteFriendRes && $.inviteFriendRes.helpResult && $.inviteFriendRes.helpResult.code === "0") {
      console.log("接收邀请成为好友结果成功,您已成为" + $.inviteFriendRes.helpResult.masterUserInfo.nickName + "的好友");
    } else $.inviteFriendRes && $.inviteFriendRes.helpResult && $.inviteFriendRes.helpResult.code === "17" && console.log("接收邀请成为好友结果失败,对方已是您的好友");
  }
}
async function _0x2c49e2() {
  for (let _0x5592dd = 0; _0x5592dd < 10; _0x5592dd++) {
    $.duckRes = await _0x6d28ce("getFullCollectionReward", {
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
async function _0x2af4f6() {
  $.totalWaterReward = await _0x6d28ce("totalWaterTaskForFarm");
}
async function _0x3fdcdc() {
  $.firstWaterReward = await _0x6d28ce("firstWaterTaskForFarm");
}
async function _0x2dc073() {
  $.newtaskinfo = await _0x6d28ce("gotNewUserTaskForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x14ca19() {
  $.newtaskinfo = await _0x6d28ce("gotLowFreqWaterForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x5b72ad() {
  $.farmInfo = await _0x6d28ce("farm_home", {
    "version": 1
  });
}
async function _0x3761a7() {
  $.rain_round = await _0x6d28ce("farm_rain_round_icon", {
    "version": 1
  });
}
async function _0x153ec7(_0x10b660) {
  $.rain_page = await _0x6d28ce("farm_rain_page", {
    "version": 1,
    "token": _0x10b660
  });
}
async function _0x1cf5f1(_0x5c2fc4) {
  $.rain_reward = await _0x6d28ce("farm_rain_reward", {
    "version": 1,
    "token": _0x5c2fc4,
    "bcc": 200,
    "scc": 0
  });
}
async function _0x5d0e72() {
  $.waterFriendGotAwardRes = await _0x6d28ce("waterFriendGotAwardForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  });
}
async function _0x5e0e87() {
  $.myCardInfoRes = await _0x6d28ce("myCardInfoForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  });
}
async function _0x45f6ff(_0x4be816) {
  $.userMyCardRes = await _0x6d28ce("userMyCardForFarm", {
    "cardType": _0x4be816
  });
}
async function _0x4c1cfc(_0x3e5947) {
  $.gotStageAwardForFarmRes = await _0x6d28ce("gotStageAwardForFarm", {
    "type": _0x3e5947
  });
}
async function _0x4a7518(_0x574543) {
  await $.wait(1500);
  $.waterResult = await _0x6d28ce("farm_water", {
    "version": 1,
    "waterType": _0x574543
  });
}
async function _0x4fbc35() {
  $.initForTurntableFarmRes = await _0x1ac737("wheelsHome", {
    "linkId": "VssYBUKJOen7HZXpC8dRFA"
  });
}
async function _0x147f0b() {
  $.wheeltaskRes = await _0x1ac737("apTaskList", {
    "linkId": "VssYBUKJOen7HZXpC8dRFA"
  });
}
async function _0x239cb1(_0x4b66e1, _0x50828b, _0x2ec71a) {
  $.wheeldoRes = await _0x1ac737("apsDoTask", {
    "taskType": _0x4b66e1,
    "taskId": _0x50828b,
    "channel": 4,
    "checkVersion": true,
    "linkId": "VssYBUKJOen7HZXpC8dRFA",
    "itemId": _0x2ec71a
  });
}
async function _0x2904fe() {
  $.lotteryRes = await _0x1ac737("wheelsLottery", {
    "linkId": "VssYBUKJOen7HZXpC8dRFA"
  });
}
async function _0x446c5b() {
  $.treeboardRes = await _0x6d28ce("farm_tree_board", {
    "version": 1
  });
}
async function _0x23d276(_0x151ed3) {
  $.planttreeRes = await _0x6d28ce("farm_plant_tree", {
    "version": 1,
    "uid": _0x151ed3
  });
}
async function _0x4423b1(_0x345326) {
  const _0x24f6a5 = {
    "type": 2,
    "adId": _0x345326,
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  };
  $.browserForTurntableFarm2Res = await _0x6d28ce("browserForTurntableFarm", _0x24f6a5);
}
async function _0x5be4cb() {
  $.lotteryMasterHelpRes = await _0x6d28ce("initForFarm", {
    "imageUrl": "",
    "nickName": "",
    "shareCode": arguments[0] + "-3",
    "babelChannel": "3",
    "version": 24,
    "channel": 1
  });
}
async function _0x59fe4e() {
  $.masterGotFinished = await _0x6d28ce("masterGotFinishedTaskForFarm");
}
async function _0x5d5a87() {
  $.masterHelpResult = await _0x6d28ce("masterHelpTaskInitForFarm");
}
async function _0x2fabfe() {
  $.farmAssistResult = await _0x6d28ce("farm_assist_init_info", {
    "version": 1
  });
}
async function _0x20062b() {
  $.receiveStageEnergy = await _0x6d28ce("farm_assist_receive_award", {
    "version": 1
  });
}
async function _0x5b9ce4() {
  $.inviteFriendRes = await _0x6d28ce("initForFarm", {
    "imageUrl": "",
    "nickName": "",
    "shareCode": arguments[0] + "-inviteFriend",
    "version": 4,
    "channel": 2
  });
}
async function _0x54e208() {
  $.helpResult = await _0x6d28ce("initForFarm", {
    "imageUrl": "",
    "nickName": "",
    "shareCode": arguments[0],
    "babelChannel": "3",
    "version": 2,
    "channel": 1
  });
}
async function _0x35572e() {
  const _0x51d043 = {
    "type": 1,
    "hongBaoTimes": 100,
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  };
  $.waterRain = await _0x6d28ce("waterRainForFarm", _0x51d043);
}
async function _0x4d071c() {
  $.clockInInit = await _0x1ac737("dongDongFarmSignHome", {
    "linkId": "LCH-fV7hSnChB-6i5f4ayw"
  });
}
async function _0x5b77e6() {
  $.clockInForFarmRes = await _0x1ac737("dongDongFarmSignIn", {
    "linkId": "LCH-fV7hSnChB-6i5f4ayw"
  });
}
async function _0x4512aa(_0x3f2836, _0x3857fe, _0x2c32db) {
  const _0x328266 = "clockInFollowForFarm";
  let _0x2cb262 = {
    "id": _0x3f2836,
    "type": _0x3857fe,
    "step": _0x2c32db
  };
  if (_0x3857fe === "theme") {
    if (_0x2c32db === "1") {
      $.themeStep1 = await _0x6d28ce(_0x328266, _0x2cb262);
    } else _0x2c32db === "2" && ($.themeStep2 = await _0x6d28ce(_0x328266, _0x2cb262));
  } else {
    if (_0x3857fe === "venderCoupon") {
      if (_0x2c32db === "1") $.venderCouponStep1 = await _0x6d28ce(_0x328266, _0x2cb262);else _0x2c32db === "2" && ($.venderCouponStep2 = await _0x6d28ce(_0x328266, _0x2cb262));
    }
  }
}
async function _0x5aa1ae() {
  $.gotClockInGiftRes = await _0x6d28ce("clockInForFarm", {
    "type": 2,
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x5989db() {
  $.threeMeal = await _0x6d28ce("gotThreeMealForFarm");
}
async function _0xb7e258(_0x36a3de, _0x2a9dbc, _0x46b431) {
  $.browseResult = await _0x6d28ce("farm_do_task", {
    "version": 1,
    "taskType": _0x36a3de,
    "taskId": _0x2a9dbc,
    "taskInsert": true,
    "itemId": _0x46b431,
    "channel": 0
  });
}
async function _0x330f1a(_0x3a06c3, _0x188c87) {
  $.dotaskResult = await _0x6d28ce("farm_task_receive_award", {
    "version": 1,
    "taskType": _0x3a06c3,
    "taskId": _0x188c87,
    "channel": 0
  });
}
async function _0x11b81b(_0x4ad928, _0x5d1918) {
  $.taskDetail = await _0x6d28ce("farm_task_detail", {
    "version": 1,
    "taskType": _0x4ad928,
    "taskId": _0x5d1918,
    "channel": 0
  });
}
async function _0x324170() {
  $.goalResult = await _0x6d28ce("gotWaterGoalTaskForFarm", {
    "type": 3
  });
}
async function _0x113a7d() {
  $.farmTask = await _0x6d28ce("farm_task_list", {
    "version": 1,
    "channel": 0
  });
}
async function _0x1adee6() {
  $.farmTask = await _0x6d28ce("taskInitForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "45",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x59fa33() {
  $.friendList = await _0x6d28ce("friendListInitForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0xca2973() {
  $.awardInviteFriendRes = await _0x6d28ce("awardInviteFriendForFarm");
}
async function _0x15c3c2(_0x5f6748) {
  const _0x8e77cc = {
    "shareCode": _0x5f6748,
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  };
  $.waterFriendForFarmRes = await _0x6d28ce("waterFriendForFarm", _0x8e77cc);
}
async function _0x2eade2() {
  if ($.isNode() && process.env.FRUIT_NOTIFY_CONTROL) $.ctrTemp = "" + process.env.FRUIT_NOTIFY_CONTROL === "false";else {
    if ($.getdata("jdFruitNotify")) {
      $.ctrTemp = $.getdata("jdFruitNotify") === "false";
    } else $.ctrTemp = "" + _0x2f8984 === "false";
  }
  $.ctrTemp ? ($.msg($.name, _0x5e6655, _0x29eeeb, _0x11febd), $.isNode() && (_0x5ca3c8 += _0x5e6655 + "\n" + _0x29eeeb + ($.index !== _0x4635d6.length ? "\n\n" : ""))) : $.log("\n" + _0x29eeeb + "\n");
}
function _0x5b60e3(_0x198409) {
  let _0x5c82e5;
  return _0x198409 ? _0x5c82e5 = new Date(_0x198409) : _0x5c82e5 = new Date(), _0x5c82e5.getFullYear() + "-" + (_0x5c82e5.getMonth() + 1 >= 10 ? _0x5c82e5.getMonth() + 1 : "0" + (_0x5c82e5.getMonth() + 1)) + "-" + (_0x5c82e5.getDate() >= 10 ? _0x5c82e5.getDate() : "0" + _0x5c82e5.getDate());
}
function _0x338f1b() {
  return new Promise(_0x1ab951 => {
    console.log("开始获取配置文件\n");
    _0x102d21 = $.isNode() ? require("./sendNotify") : "";
    const _0x21c3ba = $.isNode() ? require("./jdCookie.js") : "";
    if ($.isNode()) {
      Object.keys(_0x21c3ba).forEach(_0x23ce18 => {
        _0x21c3ba[_0x23ce18] && _0x4635d6.push(_0x21c3ba[_0x23ce18]);
      });
      if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
    } else _0x4635d6 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0x118684($.getdata("CookiesJD") || "[]").map(_0x169e44 => _0x169e44.cookie)].filter(_0x294faa => !!_0x294faa);
    _0x1ab951();
  });
}
async function _0x28d317() {
  await _0x6d28ce("ddnc_getTreasureBoxAward", {
    "type": 1,
    "babelChannel": "121",
    "line": "getBean",
    "version": 24,
    "channel": 1,
    "lat": "0",
    "lng": "0"
  });
  await $.wait(500);
  await _0x238c58();
  await $.wait(2000);
  let _0x4339a3 = await _0x6d28ce("ddnc_getTreasureBoxAward", {
    "type": 2,
    "babelChannel": "121",
    "line": "getBean",
    "version": 24,
    "channel": 1,
    "lat": "0",
    "lng": "0"
  });
  return _0x4339a3;
}
async function _0x41b94b() {
  await _0x6d28ce("ddnc_getTreasureBoxAward", {
    "type": 1,
    "babelChannel": "121",
    "version": 24,
    "channel": 1,
    "lat": "0",
    "lng": "0"
  });
  await $.wait(500);
  await _0x1adee6();
  await $.wait(2000);
  let _0x3cf29a = await _0x6d28ce("ddnc_getTreasureBoxAward", {
    "type": 2,
    "babelChannel": "45",
    "version": 24,
    "channel": 1,
    "lat": "0",
    "lng": "0"
  });
  return _0x3cf29a;
}
function _0x238c58() {
  return new Promise(_0x3e5942 => {
    const _0x483dfd = {
      "url": "https://api.m.jd.com/client.action?functionId=beanTaskList&body=%7B%22viewChannel%22%3A%22AppHome%22%2C%22beanVersion%22%3A1%2C%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D&appid=ld",
      "headers": {
        "Cookie": _0x435a9a,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x483dfd, (_0x3f9b9d, _0x25ab6b, _0x2b181a) => {
      _0x3e5942();
    });
  });
}
function _0xd2024() {
  return new Promise(_0x5a443b => {
    const _0x5d1d72 = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": {
        "Cookie": _0x435a9a,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x5d1d72, (_0x35f449, _0x3c3d68, _0x412b86) => {
      try {
        if (_0x412b86) {
          _0x412b86 = JSON.parse(_0x412b86);
          if (_0x412b86.islogin === "1") {} else _0x412b86.islogin === "0" && ($.isLogin = false);
        }
      } catch (_0x135b67) {
        console.log(_0x135b67);
      } finally {
        _0x5a443b();
      }
    });
  });
}
async function _0x6d28ce(_0x541622, _0xd8b45 = {}, _0x22e98a = 800) {
  if ($.reqnum % 5 == 0) _0x22e98a = _0x770a39;
  $.reqnum++;
  if (_0x378476[_0x541622]) {
    let _0x3782c0 = {
      "appId": _0x378476[_0x541622],
      "fn": _0x541622,
      "body": _0xd8b45,
      "apid": "signed_wh5",
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
    _0xd8b45 = await _0x18ee8d.getbody(_0x3782c0);
  } else _0xd8b45 = "functionId=" + _0x541622 + "&body=" + encodeURIComponent(JSON.stringify(_0xd8b45)) + "&appid=signed_wh5";
  return new Promise(_0xf9cd26 => {
    setTimeout(() => {
      $.get(_0x92c31c(_0xd8b45), (_0x211c6e, _0x6d66ac, _0x30aa71) => {
        try {
          _0x211c6e ? (console.log("\n东东农场: API查询请求失败 ‼️‼️"), console.log(JSON.stringify(_0x211c6e)), console.log("function_id:" + _0x541622), $.logErr(_0x211c6e)) : _0x558724(_0x30aa71) && (_0x30aa71 = JSON.parse(_0x30aa71));
        } catch (_0x552251) {
          $.logErr(_0x552251, _0x6d66ac);
        } finally {
          _0xf9cd26(_0x30aa71);
        }
      });
    }, _0x22e98a);
  });
}
async function _0x15eff7(_0x47d2f1, _0x2aface = {}) {
  return new Promise(async _0x11b6bb => {
    let _0x519cbf = "POST",
      _0x17cab4;
    const _0x2babf4 = {
      "wqDefault": "false",
      "rfs": "0000",
      "cthr": "1",
      "loginType": "",
      "loginWQBiz": "wegame",
      "openudid": $.UUID,
      "uuid": $.UUID,
      "build": "169107",
      "screen": "430*932",
      "networkType": "wifi",
      "d_brand": "iPhone",
      "d_model": "iPhone16,2",
      "lang": "zh_CN",
      "osVersion": _0xd6afe8.getLatestIOSVersion(),
      "partner": ""
    };
    if (_0x30c6ff[_0x47d2f1]) {
      _0x1d7f09 = {
        "appId": _0x30c6ff[_0x47d2f1],
        "functionId": _0x47d2f1,
        "appid": "activities_platform",
        "clientVersion": _0xd6afe8.getLatestAppVersion(),
        "client": "ios",
        "body": _0x2aface,
        "version": "4.4",
        "ua": $.UA,
        "t": true
      };
      let _0x48cc04 = await _0x23d7bb.getH5st(_0x1d7f09);
      _0x2aface = _0x48cc04.paramsData;
    } else _0x519cbf = "GET", _0x2aface = {
      "functionId": _0x47d2f1,
      "body": JSON.stringify(_0x2aface),
      "t": Date.now(),
      "appid": "activities_platform",
      "client": "ios",
      "clientVersion": _0xd6afe8.getLatestAppVersion()
    }, _0x17cab4 = Object.assign(_0x2aface, _0x2babf4);
    const _0x3bf79b = {
      "url": "https://api.m.jd.com/api",
      "method": _0x519cbf,
      "headers": {
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": _0x435a9a,
        "Host": "api.m.jd.com",
        "Referer": "https://h5.m.jd.com/",
        "X-Referer-Page": "https://h5.m.jd.com/pb/015686010/Bc9WX7MpCW7nW9QjZ5N3fFeJXMH/index.html",
        "Origin": "https://h5.m.jd.com",
        "x-rp-client": "h5_1.0.0",
        "User-Agent": $.UA
      },
      "params": _0x17cab4,
      "data": _0x2aface,
      "timeout": 30000,
      "httpsTlsOptions": ["wheelsHome", "wheelsLottery"].includes(_0x47d2f1) ? _0xd6afe8.useAppTls() : null
    };
    ["wheelsHome", "apsDoTask", "wheelsLottery", "apTaskList"].includes(_0x47d2f1) && (_0x3bf79b.headers.Referer = "https://lotterydraw-new.jd.com/?id=VssYBUKJOen7HZXpC8dRFA", _0x3bf79b.headers.Origin = "https://lotterydraw-new.jd.com", _0x3bf79b.headers["X-Referer-Page"] = "https://lotterydraw-new.jd.com/");
    const _0x19c7a6 = await _0xd6afe8.request(_0x3bf79b);
    _0x11b6bb(_0x19c7a6.data);
  });
}
function _0x161667(_0x4c0561, _0x26b719, _0x49603e) {
  if (_0x4c0561 == null) return "";
  var _0x5c3004 = [];
  var _0x146eaa = typeof _0x4c0561;
  if (_0x146eaa == "string" || _0x146eaa == "number" || _0x146eaa == "boolean") _0x5c3004.push(_0x26b719 + "=" + (_0x49603e == null || _0x49603e ? encodeURIComponent(_0x4c0561) : _0x4c0561));else for (var _0x3b2264 in _0x4c0561) {
    var _0xf7e872 = _0x26b719 == null ? _0x3b2264 : _0x26b719 + (_0x4c0561 instanceof Array ? "[" + _0x3b2264 + "]" : "." + _0x3b2264);
    _0x5c3004.push(_0x161667(_0x4c0561[_0x3b2264], _0xf7e872, _0x49603e));
  }
  return _0x5c3004.join("&");
}
async function _0x1ac737(_0x4b03ef, _0x14c056 = {}, _0x320ff8 = 1500) {
  $.reqnum++;
  if (_0x30c6ff[_0x4b03ef]) {
    let _0x536bda = {
        "appId": _0x30c6ff[_0x4b03ef],
        "functionId": _0x4b03ef,
        "appid": "activities_platform",
        "clientVersion": $.UA.split(";")[2],
        "client": "ios",
        "body": _0x14c056,
        "version": "4.4",
        "ua": $.UA,
        "t": true
      },
      _0x51ee75 = await _0x23d7bb.getH5st(_0x536bda);
    _0x14c056 = _0x161667(_0x51ee75.paramsData);
  } else _0x14c056 = "functionId=" + _0x4b03ef + "&body=" + encodeURIComponent(JSON.stringify(_0x14c056)) + "&appid=activities_platform";
  return new Promise(_0x2e9be2 => {
    setTimeout(() => {
      $.post(_0x3f2ed2(_0x14c056), (_0x4a663e, _0x256653, _0x187a72) => {
        try {
          if (_0x4a663e) console.log("\n东东农场: API请求失败 ‼️‼️"), console.log(JSON.stringify(_0x4a663e)), console.log("function_id:" + _0x4b03ef), $.logErr(_0x4a663e);else {
            if (_0x558724(_0x187a72)) {
              _0x187a72 = JSON.parse(_0x187a72);
            }
          }
        } catch (_0x224766) {
          $.logErr(_0x224766, _0x256653);
        } finally {
          _0x2e9be2(_0x187a72);
        }
      });
    }, _0x320ff8);
  });
}
function _0x558724(_0x196fc1) {
  try {
    if (typeof JSON.parse(_0x196fc1) == "object") return true;
  } catch (_0x3a3a03) {
    return console.log(_0x3a3a03), console.log("京东服务器访问数据为空，请检查自身设备网络情况"), false;
  }
}
function _0x92c31c(_0x865af0 = {}) {
  return {
    "url": _0x2649a5 + "?" + _0x865af0,
    "headers": {
      "Host": "api.m.jd.com",
      "Accept": "*/*",
      "Origin": "https://h5.m.jd.com",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": $.UA,
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Referer": "https://h5.m.jd.com/",
      "Cookie": _0x435a9a
    },
    "timeout": 30000
  };
}
function _0x3f2ed2(_0x2aa411 = {}) {
  return {
    "url": "https://api.m.jd.com/api",
    "body": _0x2aa411 + "&cthr=1&loginType=&loginWQBiz=wegame&openudid=" + $.UUID + "&uuid=" + $.UUID + "&build=169088&screen=414*736&networkType=wifi&d_brand=iPhone&d_model=iPhone&lang=zh_CN&osVersion=&partner=-1",
    "headers": {
      "Accept": "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      "Connection": "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      "Cookie": _0x435a9a,
      "Host": "api.m.jd.com",
      "Referer": "https://lotterydraw-new.jd.com/?id=VssYBUKJOen7HZXpC8dRFA",
      "x-referer-page": "https://lotterydraw-new.jd.com/",
      "Origin": "https://lotterydraw-new.jd.com",
      "x-rp-client": "h5_1.0.0",
      "User-Agent": $.UA,
      "request-from": "native"
    },
    "ciphers": _0x3b6b78.cpstr,
    "timeout": 30000
  };
}
function _0x51f53c(_0x266c38, _0x892db = {}) {
  return {
    "url": _0x2649a5 + "?" + _0x892db,
    "headers": {
      "Host": "api.m.jd.com",
      "Accept": "*/*",
      "Origin": "https://carry.m.jd.com",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": $.UA,
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Referer": "https://carry.m.jd.com/",
      "Cookie": _0x435a9a
    },
    "timeout": 10000
  };
}
function _0x118684(_0x5ac9de) {
  if (typeof _0x5ac9de == "string") try {
    return JSON.parse(_0x5ac9de);
  } catch (_0x522de3) {
    return console.log(_0x522de3), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
  }
}
function Env(o, t) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((r, i) => {
        s.call(this, t, (t, e, s) => {
          t ? i(t) : r(e);
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
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
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
      return new Promise(r => {
        this.get({
          url: t
        }, (t, e, s) => r(s));
      });
    }
    runScript(a, o) {
      return new Promise(r => {
        let t = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        t = t && t.replace(/\n/g, "").trim();
        var e = (e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout")) ? +e : 20,
          [s, i] = (e = o && o.timeout ? o.timeout : e, t.split("@"));
        this.post({
          url: `http://${i}/v1/scripting/evaluate`,
          body: {
            script_text: a,
            mock_type: "cron",
            timeout: e
          },
          headers: {
            "X-Key": s,
            Accept: "*/*"
          },
          timeout: e
        }, (t, e, s) => r(s));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      this.fs = this.fs || require("fs");
      this.path = this.path || require("path");
      var t = this.path.resolve(this.dataFile),
        e = this.path.resolve(process.cwd(), this.dataFile),
        s = this.fs.existsSync(t),
        r = !s && this.fs.existsSync(e);
      if (!s && !r) return {};
      r = s ? t : e;
      try {
        return JSON.parse(this.fs.readFileSync(r));
      } catch (t) {
        return {};
      }
    }
    writedata() {
      var t, e, s, r, i;
      this.isNode() && (this.fs = this.fs || require("fs"), this.path = this.path || require("path"), t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), r = !(s = this.fs.existsSync(t)) && this.fs.existsSync(e), i = JSON.stringify(this.data), !s && r ? this.fs.writeFileSync(e, i) : this.fs.writeFileSync(t, i));
    }
    lodash_get(t, e, s) {
      let r = t;
      for (const t of e.replace(/\[(\d+)\]/g, ".$1").split(".")) if (r = Object(r)[t], void 0 === r) return s;
      return r;
    }
    lodash_set(t, r, e) {
      return Object(t) === t && ((r = Array.isArray(r) ? r : r.toString().match(/[^.[\]]+/g) || []).slice(0, -1).reduce((t, e, s) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(r[s + 1]) >> 0 == +r[s + 1] ? [] : {}, t)[r[r.length - 1]] = e), t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        var [, s, r] = /^@(.*?)\.(.*?)$/.exec(t);
        if (s = s ? this.getval(s) : "") try {
          const t = JSON.parse(s);
          e = t ? this.lodash_get(t, r, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        var [, r, i] = /^@(.*?)\.(.*?)$/.exec(e),
          a = this.getval(r),
          a = r ? "null" === a ? null : a || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, i, t);
          s = this.setval(JSON.stringify(e), r);
        } catch (e) {
          this.lodash_set(a = {}, i, t);
          s = this.setval(JSON.stringify(a), r);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          return this.data = this.loaddata(), this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got || require("got");
      this.cktough = this.cktough || require("tough-cookie");
      this.ckjar = this.ckjar || new this.cktough.CookieJar();
      t && (t.headers = t.headers || {}, t) && (t.headers = t.headers || {}, void 0 === t.headers.cookie) && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar);
    }
    tmout() {
      return new Promise((t, e) => {
        this.tmoutId = setTimeout(() => {
          this.prms.cancel();
          e({
            message: "timemout",
            response: ""
          });
        }, 50000);
      });
    }
    get(t, a = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient.get(t, (t, e, s) => {
            !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode);
            a(t, e, s);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          })), $task.fetch(t).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            }, r, i);
          }, t => a(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          this.initGotEnv(t), this.prms = this.got(t).on("redirect", (t, e) => {
            try {
              var s;
              t.headers["set-cookie"] && ((s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString()) && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar);
            } catch (t) {
              this.logErr(t);
            }
          }), Promise.race([this.prms, this.tmout()]).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            }, i);
            clearTimeout(this.tmoutId);
          }, t => {
            var {
              message: t,
              response: e
            } = t;
            clearTimeout(this.tmoutId);
            a(t, e, e && e.body);
          });
      }
    }
    post(t, a = () => {}) {
      var e = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient[e](t, (t, e, s) => {
            !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode);
            a(t, e, s);
          });
          break;
        case "Quantumult X":
          t.method = e, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          })), $task.fetch(t).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            }, r, i);
          }, t => a(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          this.initGotEnv(t);
          var {
            url: s,
            ...r
          } = t;
          this.prms = this.got[e](s, r), Promise.race([this.prms, this.tmout()]).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            }, i);
            clearTimeout(this.tmoutId);
          }, t => {
            var {
              message: t,
              response: e
            } = t;
            clearTimeout(this.tmoutId);
            a(t, e, e && e.body);
          });
      }
    }
    time(t, e = null) {
      var s,
        r = {
          "M+": (e = e ? new Date(e) : new Date()).getMonth() + 1,
          "d+": e.getDate(),
          "H+": e.getHours(),
          "m+": e.getMinutes(),
          "s+": e.getSeconds(),
          "q+": Math.floor((e.getMonth() + 3) / 3),
          S: e.getMilliseconds()
        };
      for (s in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), r) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[s] : ("00" + r[s]).substr(("" + r[s]).length)));
      return t;
    }
    queryStr(e) {
      let s = "";
      for (const r in e) {
        let t = e[r];
        null != t && "" !== t && ("object" == typeof t && (t = JSON.stringify(t)), s += `${r}=${t}&`);
      }
      return s = s.substring(0, s.length - 1);
    }
    msg(t = o, e = "", s = "", r = {}) {
      var i,
        a = r => {
          const {
            $open: t,
            $copy: e,
            $media: i,
            $mediaMime: a
          } = r;
          switch (typeof r) {
            case void 0:
              return r;
            case "string":
              switch (this.getEnv()) {
                case "Surge":
                case "Stash":
                default:
                  return {
                    url: r
                  };
                case "Loon":
                case "Shadowrocket":
                  return r;
                case "Quantumult X":
                  return {
                    "open-url": r
                  };
                case "Node.js":
                  return;
              }
            case "object":
              switch (this.getEnv()) {
                case "Surge":
                case "Stash":
                case "Shadowrocket":
                default:
                  var o = {},
                    s = r.openUrl || r.url || r["open-url"] || t;
                  if (s && Object.assign(o, {
                    action: "open-url",
                    url: s
                  }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(o, {
                    action: "clipboard",
                    text: s
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) t = i;else if (i.startsWith("data:")) {
                      const [r] = i.split(";"),
                        [, a] = i.split(",");
                      e = a;
                      s = r.replace("data:", "");
                    } else e = i, s = (t => {
                      var e,
                        s = {
                          JVBERi0: "application/pdf",
                          R0lGODdh: "image/gif",
                          R0lGODlh: "image/gif",
                          iVBORw0KGgo: "image/png",
                          "/9j/": "image/jpg"
                        };
                      for (e in s) if (0 === t.indexOf(e)) return s[e];
                      return null;
                    })(i);
                    Object.assign(o, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": a ?? s
                    });
                  }
                  return Object.assign(o, {
                    "auto-dismiss": r["auto-dismiss"],
                    sound: r.sound
                  }), o;
                case "Loon":
                  {
                    const e = {};
                    (s = r.openUrl || r.url || r["open-url"] || t) && Object.assign(e, {
                      openUrl: s
                    });
                    var n = r.mediaUrl || r["media-url"];
                    return (n = i?.startsWith("http") ? i : n) && Object.assign(e, {
                      mediaUrl: n
                    }), console.log(JSON.stringify(e)), e;
                  }
                case "Quantumult X":
                  {
                    const a = {};
                    (o = r["open-url"] || r.url || r.openUrl || t) && Object.assign(a, {
                      "open-url": o
                    });
                    n = r["media-url"] || r.mediaUrl;
                    return (n = i?.startsWith("http") ? i : n) && Object.assign(a, {
                      "media-url": n
                    }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(a, {
                      "update-pasteboard": s
                    }), console.log(JSON.stringify(a)), a;
                  }
                case "Node.js":
                  return;
              }
            default:
              return;
          }
        };
      if (!this.isMute) switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          $notification.post(t, e, s, a(r));
          break;
        case "Quantumult X":
          $notify(t, e, s, a(r));
          break;
        case "Node.js":
      }
      this.isMuteLog || ((i = ["", "==============📣系统通知📣=============="]).push(t), e && i.push(e), s && i.push(s), console.log(i.join("\n")), this.logs = this.logs.concat(i));
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.debug + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.info + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.warn + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.error + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    log(...t) {
      0 < t.length && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, void 0 !== t.message ? t.message : t);
      }
    }
    wait(e) {
      return new Promise(t => setTimeout(t, e));
    }
    done(t = {}) {
      var e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(o, t);
}
