/*
活动入口：京东APP我的--东东农场
==========================Quantumultx=========================
[task_local]
#jd新农场
10 6,12,17 * * * jd_fruit_new.js

*/
const $ = new Env('新农场任务');
const _0x1867b3 = 100;
let _0x4754b7 = false,
  _0x3ab354 = [],
  _0x354559 = "",
  _0x13423c,
  _0x4491b3,
  _0x2ad025 = "",
  _0xc59bfd = "",
  _0x1dd8c8 = "",
  _0x2b5917 = {},
  _0xd99303 = false,
  _0xf92b24 = 0;
const _0x354d12 = "https://api.m.jd.com/client.action",
  _0x4b81bd = "openjd://virtual?params=%7B%20%22category%22:%20%22jump%22,%20%22des%22:%20%22m%22,%20%22url%22:%20%22https://h5.m.jd.com/babelDiy/Zeus/3KSjXqQabiTuD1cJ28QskrpWoBKT/index.html%22%20%7D";
let _0xccab85 = "";
const _0x67f505 = process.env.WTNUM_NEW ? process.env.WTNUM_NEW : 0,
  _0x1ea854 = 1000,
  _0x1d2ddd = require("./USER_AGENTS"),
  _0x5556f4 = require("fs"),
  _0x579534 = require("./function/dylib"),
  _0x4e8f46 = require("./function/dylanv"),
  _0x178a02 = require("./function/jdCommon1"),
  {
    H5st: _0x555cee
  } = require("./function/jdCrypto");
if (process.env.DY_PROXY) {
  const _0x1650b0 = require("./function/proxy.js");
  $.get = _0x1650b0.intoRequest($.get.bind($));
  $.post = _0x1650b0.intoRequest($.post.bind($));
}
let _0x95b0dc = [];
const _0x436692 = {
    "farm_home": "c57f6",
    "farm_do_task": "28981",
    "farm_task_receive_award": "33e0f",
    "farm_water": "28981",
    "farm_assist_receive_award": "c4332",
    "farm_rain_round_icon": "c57f6",
    "farm_rain_reward": "c57f6"
  },
  _0x481754 = {
    "dongDongFarmSignHome": "deba1",
    "dongDongFarmSignIn": "65f9d",
    "wheelsHome": "c06b7",
    "wheelsLottery": "bd6c8",
    "apsDoTask": "54ed7"
  };
!(async () => {
  await _0x5c0c3c();
  if (!_0x3ab354[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  $.log("\n版本：2024/5/20 ");
  $.log("问题建议：https://t.me/dylan_jdpro\n");
  $.log("\n环境变量（可选项）：");
  $.log("export DY_PROXY='api_url' 可使用代理API");
  $.log("export WTNUM_NEW='100' 指定浇水次数");
  $.log("没种植会随机选择最高等级种子自动种植\n");
  $.reqnum = 1;
  process.env.NO_WATER == "true" && 0 ? (_0x2ad025 = "【一水不缴模式已开启！】\n\n", $.log("【一水不缴模式已开启！】\n")) : process.env.DO_TEN_WATER_AGAIN == "true" && 0 && (_0x2ad025 = "【攒水滴模式已开启，每天只浇水10次！】\n\n", $.log("【攒水滴模式已开启，每天只浇水10次！】\n"));
  for (let _0x31fee0 = 0; _0x31fee0 < _0x3ab354.length; _0x31fee0++) {
    if (_0x3ab354[_0x31fee0]) {
      _0x354559 = _0x3ab354[_0x31fee0];
      $.UserName = decodeURIComponent(_0x354559.match(/pt_pin=([^; ]+)(?=;?)/) && _0x354559.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x31fee0 + 1;
      $.isLogin = true;
      $.nickName = "";
      $.farmInfo = "";
      ct = 0;
      $.kuwei = false;
      await _0x59dc9e();
      console.log("\n------------------【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "-------------------\n");
      if (!$.isLogin) {
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        });
        if ($.isNode()) {
          await _0x13423c.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie");
        }
        continue;
      }
      _0xc59bfd = "";
      _0x1dd8c8 = "";
      _0x2b5917 = {};
      $.UA = _0x1d2ddd.UARAM ? _0x1d2ddd.UARAM() : _0x1d2ddd.USER_AGENT;
      $.UUID = _0x178a02.genUuid("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      await _0x5bf933();
      await $.wait(2000);
    }
  }
  _0x5556f4.writeFileSync("./fruit_helpcode_new", JSON.stringify(_0x95b0dc), _0x45fdd9 => {
    _0x45fdd9 && console.log(_0x45fdd9);
  });
  $.isNode() && _0x2ad025 && $.ctrTemp && (await _0x13423c.sendNotify("" + $.name, "" + _0x2ad025));
})().catch(_0x5e781a => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x5e781a + "!", "");
}).finally(() => {
  $.done();
});
async function _0x5bf933() {
  _0x1dd8c8 = "【京东账号" + $.index + "🆔】" + ($.nickName || $.UserName);
  try {
    await _0x117335();
    await $.wait(500);
    if ($.farmInfo?.["data"]?.["result"]?.["skuName"]) {
      _0xc59bfd = "【水果名称】" + $.farmInfo.data.result.skuName + "\n";
      console.log("【账号（" + $.UserName + "）的" + $.name + "好友互助码】" + $.farmInfo.data.result.farmHomeShare.inviteCode);
      console.log("【已成功兑换水果】" + $.farmInfo.data.result.completeTimes + "次");
      _0xc59bfd += "【已兑换水果】" + $.farmInfo.data.result.completeTimes + "次\n";
      _0x95b0dc.push($.farmInfo.data.result.farmHomeShare.inviteCode);
      await _0x2d1a9b();
      if ($.farmInfo.data.result.treeFullStage === 5 || $.kuwei) {
        if ($.farmInfo.data.result.treeFullStage === 5) _0x2b5917["open-url"] = _0x4b81bd, $.msg($.name, "", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo?.["data"]?.["result"]?.["skuName"] + "已种成\n请去京东APP或微信小程序查看\n点击弹窗即达", _0x2b5917), await _0x13423c.sendNotify($.name + " - 账号" + $.index + " - " + ($.nickName || $.UserName) + "水果已种成", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo?.["data"]?.["result"]?.["skuName"] + "已种成\n请去京东APP农场奖品记录里兑换");else $.kuwei && console.log("\n" + $.farmInfo.data.result.skuName + "   枯萎了，重新种植吧！");
        await _0x654ce();
        if ($.treeboardRes.data?.["result"]?.["farmTreeLevels"][2]?.["farmLevelTrees"]) {
          let _0x332017 = $.treeboardRes.data?.["result"]?.["farmTreeLevels"][2]?.["farmLevelTrees"];
          _0xccab85 = _0x332017[Math.floor(Math.random() * _0x332017.length)].uid;
          console.log("\n已选择3级商品为自动种植目标");
        } else {
          if ($.treeboardRes.data?.["result"]?.["farmTreeLevels"][1]?.["farmLevelTrees"]) {
            let _0x3014e = $.treeboardRes.data?.["result"]?.["farmTreeLevels"][1]?.["farmLevelTrees"];
            _0xccab85 = _0x3014e[Math.floor(Math.random() * _0x3014e.length)].uid;
            console.log("\n已选择2级商品为自动种植目标");
          } else {
            if ($.treeboardRes.data?.["result"]?.["farmTreeLevels"][0]?.["farmLevelTrees"]) {
              let _0x5e4651 = $.treeboardRes.data?.["result"]?.["farmTreeLevels"][0]?.["farmLevelTrees"];
              _0xccab85 = _0x5e4651[Math.floor(Math.random() * _0x5e4651.length)].uid;
              console.log("\n已选择1级商品为自动种植目标");
            }
          }
        }
        if (_0xccab85) {
          console.log("\n\n已随机选择种植目标，开始种植。。。");
          await _0xb2518a(_0xccab85);
          if ($.planttreeRes.code == 0 && $.planttreeRes.data.bizCode == 0) {
            console.log("种植成功！！！再次执行做任务领水滴浇水吧！");
            return;
          }
        }
        return;
      } else $.farmInfo.data.result.treeCurrentState === 0 && (console.log("\n" + $.farmInfo.data.result.skuName + "   种植中..."), console.log("种植进度：" + $.farmInfo.data.result.treeFullStage + "/5----" + $.farmInfo.data.result.currentProcess + "%"));
      await _0x28e088();
      if ($.rain_round.data.result.curRoundToken) {
        console.log("\n开始水滴红包雨...");
        await $.wait(1000);
        await _0xe44b50($.rain_round.data.result.curRoundToken);
        await _0x1aeaa5($.rain_round.data.result.curRoundToken);
        $.rain_reward.data.bizCode == 0 && console.log("获得水滴" + $.rain_reward.data.result.waterRainPrize[0].value + "g💧");
      }
      await _0x64b720();
      await _0x5da931();
      process.env.DO_TEN_WATER_AGAIN != "true" || 1 ? ($.log("执行继续浇水..."), await _0xc94588()) : $.log("不执行再次浇水，攒水滴!");
      await $.wait(500);
      await _0x117335();
      console.log("种植进度：" + $.farmInfo.data.result.treeFullStage + "/5----" + $.farmInfo.data.result.currentProcess + "%");
      _0xc59bfd += "【种植进度】" + $.farmInfo.data.result.treeFullStage + "/5----" + $.farmInfo.data.result.currentProcess + "%\n";
      _0xc59bfd += "【剩余水滴】" + _0xf92b24 + "g💧\n";
    } else {
      if ($.farmInfo?.["data"]?.["result"]?.["treeFullStage"] === 0) {
        console.log("没有种植水果，请在下面选择种植的商品，设置变量（商品的UID)再次运行即可种植");
        await _0x654ce();
        if ($.treeboardRes.data?.["result"]?.["farmTreeLevels"][2]?.["farmLevelTrees"]) {
          let _0x58fbbd = $.treeboardRes.data?.["result"]?.["farmTreeLevels"][2]?.["farmLevelTrees"];
          _0xccab85 = _0x58fbbd[Math.floor(Math.random() * _0x58fbbd.length)].uid;
          console.log("\n已选择3级商品为自动种植目标");
        } else {
          if ($.treeboardRes.data?.["result"]?.["farmTreeLevels"][1]?.["farmLevelTrees"]) {
            let _0x5b8103 = $.treeboardRes.data?.["result"]?.["farmTreeLevels"][1]?.["farmLevelTrees"];
            _0xccab85 = _0x5b8103[Math.floor(Math.random() * _0x5b8103.length)].uid;
            console.log("\n已选择2级商品为自动种植目标");
          } else {
            if ($.treeboardRes.data?.["result"]?.["farmTreeLevels"][0]?.["farmLevelTrees"]) {
              let _0x19a500 = $.treeboardRes.data?.["result"]?.["farmTreeLevels"][0]?.["farmLevelTrees"];
              _0xccab85 = _0x19a500[Math.floor(Math.random() * _0x19a500.length)].uid;
              console.log("\n已选择1级商品为自动种植目标");
            }
          }
        }
        if (_0xccab85) {
          console.log("\n\n已设置种植目标，开始种植。。。");
          await _0xb2518a(_0xccab85);
          if ($.planttreeRes.code == 0 && $.planttreeRes.data.bizCode == 0) {
            console.log("种植成功！！！再次执行去做任务领水滴浇水吧！");
            return;
          }
        }
        $.msg($.name, "", "【京东账号" + $.index + "】 " + ($.nickName || $.UserName) + "\n【提醒⏰】您忘了种植新的水果\n请去京东APP选购并种植新的水果");
        $.isNode() && (await _0x13423c.sendNotify($.name + " - 您忘了种植新的水果", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n【提醒⏰】您忘了种植新的水果\n请去京东APP种植新的水果"));
        return;
      } else console.log("初始化农场数据异常, 请登录京东app查看农场功能是否正常,农场初始化数据: " + JSON.stringify($.farmInfo) + "\n"), _0xc59bfd = "【数据异常】请手动登录app查看此账号农场是否正常\n\n";
    }
  } catch (_0x53cc53) {
    console.log("任务执行异常，请检查执行日志 ‼️‼️\n\n");
    $.logErr(_0x53cc53);
  }
  await _0x51ad07();
}
async function _0x5da931() {
  await _0x184c99();
  console.log("\n开始日常任务...");
  for (let _0x53c30d of $.farmTask.data.result.taskList) {
    if (_0x53c30d.taskStatus == 3) {
      console.log(_0x53c30d.mainTitle + "已完成");
      continue;
    }
    console.log("去做 " + _0x53c30d.mainTitle);
    if (_0x53c30d.taskStatus == 2) {
      await _0x4db589(_0x53c30d.taskType, _0x53c30d.taskId);
      $.dotaskResult?.["data"] && Object.keys($.dotaskResult.data.result).length > 0 && console.log("任务完成，获得水滴" + $.dotaskResult.data.result.taskAward[0].awardValue + "g💧");
      continue;
    }
    await $.wait(1000);
    switch (_0x53c30d.taskType) {
      case "CUMULATIVE_TIMES":
        break;
      case "ORDER_MARK":
        break;
      case "EXTERNAL_BROWSE":
      case "BROWSE_CHANNEL":
      case "BROWSE_PRODUCT":
        if (!_0x53c30d.taskSourceUrl) {
          await _0x3aefee(_0x53c30d.taskType, _0x53c30d.taskId);
          let _0x2e942a = $.taskDetail.data.result.taskDetaiList;
          _0x53c30d.taskSourceUrl = _0x2e942a[Math.floor(Math.random() * _0x2e942a.length)].itemId;
        }
        await _0x14b119(_0x53c30d.taskType, _0x53c30d.taskId, Buffer.from(_0x53c30d.taskSourceUrl).toString("base64")), await $.wait(_0x53c30d.timePeriod * 1000), await _0x4db589(_0x53c30d.taskType, _0x53c30d.taskId);
        $.dotaskResult?.["data"] && Object.keys($.dotaskResult.data.result).length > 0 && console.log("任务完成，获得水滴" + $.dotaskResult.data.result.taskAward[0].awardValue + "g💧");
        break;
      default:
        console.log(_0x53c30d.taskType + " 类型未支持");
        break;
    }
  }
  await _0x3ab0f7();
  await $.wait(500);
}
async function _0x1195e5() {
  console.log("开始预测水果成熟时间...\n");
  await initForFarm();
  if (!$.farmInfo.farmUserPro) await initForFarm();
  await _0x184c99();
  let _0xb7e0d1 = $.farmTask.firstWaterInit.totalWaterTimes;
  _0xc59bfd += "【今日共浇水】" + _0xb7e0d1 + "次\n";
  _0xc59bfd += "【剩余水滴】" + $.farmInfo.farmUserPro.totalEnergy + "g💧\n";
  _0xc59bfd += "【水果进度】" + ($.farmInfo.farmUserPro.treeEnergy / $.farmInfo.farmUserPro.treeTotalEnergy * 100).toFixed(2) + "%，已浇水" + $.farmInfo.farmUserPro.treeEnergy / 10 + "次,还需" + ($.farmInfo.farmUserPro.treeTotalEnergy - $.farmInfo.farmUserPro.treeEnergy) / 10 + "次\n";
  if ($.farmInfo.toFlowTimes > $.farmInfo.farmUserPro.treeEnergy / 10) _0xc59bfd += "【开花进度】再浇水" + ($.farmInfo.toFlowTimes - $.farmInfo.farmUserPro.treeEnergy / 10) + "次开花\n";else $.farmInfo.toFruitTimes > $.farmInfo.farmUserPro.treeEnergy / 10 && (_0xc59bfd += "【结果进度】再浇水" + ($.farmInfo.toFruitTimes - $.farmInfo.farmUserPro.treeEnergy / 10) + "次结果\n");
  let _0x4dc4b5 = ($.farmInfo.farmUserPro.treeTotalEnergy - $.farmInfo.farmUserPro.treeEnergy) / 10;
  if (_0xb7e0d1 > 2) {
    let _0x11e8e2 = Math.ceil(_0x4dc4b5 / _0xb7e0d1) || 0;
    _0xc59bfd += "【预测】" + (_0x11e8e2 === 1 ? "明天" : _0x11e8e2 === 2 ? "后天" : _0x11e8e2 + "天之后") + "(" + _0x2d3ace(24 * 60 * 60 * 1000 * _0x11e8e2 + Date.now()) + "日)可兑换水果🍉\n";
  } else _0xc59bfd += "【预测】不浇水无限期\n";
}
async function _0x64b720() {
  await _0x184c99();
  if (JSON.stringify($.farmTask.data.result.taskList).includes("\"每日累计浇水10次\",\"singleTask\":true,\"subTitle\":\"完成任务，奖励20g水滴\",\"taskDoTimes\":10") === false) {
    console.log("\n准备浇水十次");
    _0xd99303 = false;
    for (let _0x2f18a5 = 0; _0x2f18a5 < 10 - $.farmTask.data.result.taskList[0].taskDoTimes; _0x2f18a5++) {
      console.log("第" + (_0x2f18a5 + 1) + "次浇水");
      await _0x5ad8d0(1);
      if ($.waterResult.data.bizCode === 0) {
        console.log("浇水成功，剩余水滴" + $.waterResult.data.result.bottleWater + "g，" + $.waterResult.data.result.waterTips);
        if ($.waterResult.data.result.finished) {
          _0xd99303 = true;
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
      _0xf92b24 = $.waterResult.data.result.bottleWater;
    }
    if (_0xd99303) {
      $.msg($.name, "", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo?.["data"]?.["result"]?.["skuName"] + "已可领取\n请去京东APP查看");
      $.isNode() && (await _0x13423c.sendNotify($.name + " - 账号" + $.index + " - " + ($.nickName || $.UserName) + "水果已种成", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo?.["data"]?.["result"]?.["skuName"] + "已种成\n请去京东APP农场奖品记录里兑换"));
    }
  } else console.log("\n今日已完成10次浇水任务\n");
}
async function _0xc94588() {
  console.log("检查剩余水滴能否继续浇水...\n");
  await _0x117335();
  _0xf92b24 = $.farmInfo.data.result.bottleWater;
  console.log("剩余水滴" + _0xf92b24 + "g\n");
  let _0x288eb2 = _0xf92b24 - _0x1867b3;
  if (_0x288eb2 >= 10) {
    $.log("\n开始浇水...");
    console.log("目前剩余水滴：" + _0xf92b24 + "g，可继续浇水");
    _0xd99303 = false;
    let _0x22c310 = _0x67f505 > 0 ? Math.min.apply(null, [Number(_0x67f505), parseInt(_0x288eb2 / 10)]) : parseInt(_0x288eb2 / 10);
    console.log("\n开始执行" + _0x22c310 + "次浇水，可变量指定次数...");
    for (let _0x369e20 = 0; _0x369e20 < _0x22c310; _0x369e20++) {
      $.log("浇水第" + (_0x369e20 + 1) + "次");
      await _0x5ad8d0(1);
      if ($.waterResult.code === 0) {
        console.log("浇水10g成功,剩余" + $.waterResult.data.result.bottleWater + "g，" + $.waterResult.data.result.waterTips + "\n");
        if ($.waterResult.data.result.finished) {
          _0xd99303 = true;
          $.log("水果已成熟啦！\n");
          break;
        } else {}
      } else {
        console.log("浇水出现失败异常,跳出不在继续浇水");
        break;
      }
    }
    _0xf92b24 = $.waterResult.data.result.bottleWater;
  } else console.log("目前剩余水滴：【" + _0xf92b24 + "】g,不再继续浇水,保留部分水滴用于完成第二天【十次浇水得水滴】任务");
  _0xd99303 && ($.msg($.name, "", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo?.["data"]?.["result"]?.["skuName"] + "已可领取\n请去京东APP或微信小程序查看"), $.isNode() && (await _0x13423c.sendNotify($.name + " - 账号" + $.index + " - " + ($.nickName || $.UserName) + "水果已种成", "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n【提醒⏰】" + $.farmInfo?.["data"]?.["result"]?.["skuName"] + "已种成\n请去京东APP农场奖品记录里兑换")));
}
function _0x4b85aa() {
  return new Promise(async _0x3b05ec => {
    if ($.waterResult.waterStatus === 0 && $.waterResult.treeEnergy === 10) {
      console.log("果树发芽了,奖励30g💧");
      await _0x3e2af0("1");
      console.log("浇水阶段奖励1领取结果 " + JSON.stringify($.gotStageAwardForFarmRes));
      $.gotStageAwardForFarmRes.code === "0" && console.log("【果树发芽了】奖励" + $.gotStageAwardForFarmRes.addEnergy + "💧\n");
    } else {
      if ($.waterResult.waterStatus === 1) console.log("果树开花了,奖励40g💧"), await _0x3e2af0("2"), console.log("浇水阶段奖励2领取结果 " + JSON.stringify($.gotStageAwardForFarmRes)), $.gotStageAwardForFarmRes.code === "0" && console.log("【果树开花了】奖励" + $.gotStageAwardForFarmRes.addEnergy + "g💧\n");else {
        if ($.waterResult.waterStatus === 2) {
          console.log("果树长出小果子啦, 奖励50g💧");
          await _0x3e2af0("3");
          console.log("浇水阶段奖励3领取结果 " + JSON.stringify($.gotStageAwardForFarmRes));
          $.gotStageAwardForFarmRes.code === "0" && console.log("【果树结果了】奖励" + $.gotStageAwardForFarmRes.addEnergy + "g💧\n");
        }
      }
    }
    _0x3b05ec();
  });
}
async function _0x44e73a() {
  await _0x500a84();
  if ($.initForTurntableFarmRes && $.initForTurntableFarmRes.code === 0) {
    console.log("\n开始天天抽奖任务...");
    await _0x4867fa();
    if ($.wheeltaskRes.code == 0) {
      for (let _0x3cb8c5 of $.wheeltaskRes.data) {
        if (_0x3cb8c5.taskFinished) {
          console.log(_0x3cb8c5.taskTitle + "----" + _0x3cb8c5.taskShowTitle + " 已完成");
          continue;
        }
        await _0x5a5ed8(_0x3cb8c5.taskType, _0x3cb8c5.id, _0x3cb8c5.taskSourceUrl);
        if ($.wheeldoRes && $.wheeldoRes.code == 0) console.log("任务完成，获得1次抽奖机会");else {
          console.log("错误了，403");
          break;
        }
        await $.wait(3000);
      }
    }
    await _0x500a84();
    if ($.initForTurntableFarmRes.data.lotteryChances > 0) {
      console.log("\n天天抽奖次数 " + $.initForTurntableFarmRes.data.lotteryChances);
      console.log("开始抽奖...");
      let _0x28025b = "";
      for (let _0x12a255 = 0; _0x12a255 < $.initForTurntableFarmRes.data.lotteryChances; _0x12a255++) {
        await _0xefb67d();
        console.log("第" + (_0x12a255 + 1) + "次抽奖");
        if ($.lotteryRes && $.lotteryRes.code === 0) {
          _0x28025b += $.lotteryRes.data.prizeName + "，";
          if ($.lotteryRes.data.lotteryChances === 0) {
            break;
          }
        } else {
          console.log("错误了！");
          break;
        }
        await $.wait(3000);
      }
      _0x28025b && console.log("天天抽奖奖励：" + _0x28025b.substr(0, _0x28025b.length - 1) + "\n");
    } else console.log("天天抽奖无次数！");
  } else console.log("初始化天天抽奖得好礼失败！");
}
async function _0x3ab0f7() {
  await _0x5ccd04();
  if ($.farmAssistResult.code === 0) {
    if ($.farmAssistResult.data.result.assistFriendList && $.farmAssistResult.data.result.assistFriendList.length >= 2) {
      if ($.farmAssistResult.data.result.status === 2) {
        let _0x276312 = 0;
        for (let _0x1c6040 of Object.keys($.farmAssistResult.data.result.assistStageList)) {
          let _0x3aef9e = $.farmAssistResult.data.result.assistStageList[_0x1c6040];
          _0x3aef9e.stageStaus === 2 && (await _0x325b08(), $.receiveStageEnergy.code === 0 && (console.log("成功领取第" + (Number(_0x1c6040) + 1) + "段助力奖励：" + $.receiveStageEnergy.data.result.amount + "g💧"), _0x276312 += $.receiveStageEnergy.data.result.amount), await $.wait(1500));
        }
        _0xc59bfd += "【额外奖励】" + _0x276312 + "g💧领取完成\n";
        console.log("【额外奖励】" + _0x276312 + "g💧领取完成\n");
      } else $.farmAssistResult.data.result.status === 3 && (console.log("已经领取过好友助力额外奖励"), _0xc59bfd += "【额外奖励】已领取过\n");
    } else console.log("助力好友未达到2个"), _0xc59bfd += "【额外奖励】领取失败,原因：给您助力的人未达2个\n";
    if ($.farmAssistResult.data.result.assistFriendList && $.farmAssistResult.data.result.assistFriendList.length > 0) {
      let _0x3de611 = "";
      $.farmAssistResult.data.result.assistFriendList.map((_0x53fa87, _0x4d0f1b) => {
        _0x4d0f1b === $.farmAssistResult.data.result.assistFriendList.length - 1 ? _0x3de611 += _0x53fa87.nickname || "匿名用户" : _0x3de611 += (_0x53fa87.nickname || "匿名用户") + ",";
        let _0xe7d926 = new Date(_0x53fa87.time),
          _0x23a3f2 = _0xe7d926.getFullYear() + "/" + ("0" + (_0xe7d926.getMonth() + 1)).slice(-2) + "/" + ("0" + _0xe7d926.getDate()).slice(-2) + " " + ("0" + _0xe7d926.getHours()).slice(-2) + ":" + ("0" + _0xe7d926.getMinutes()).slice(-2) + ":" + ("0" + _0xe7d926.getSeconds()).slice(-2);
        console.log("【" + (_0x53fa87.nickname || "匿名用户") + "】 在 " + _0x23a3f2 + " 给您助过力");
      });
      _0xc59bfd += "【助力您的好友】" + _0x3de611 + "\n";
    }
    console.log("\n领取额外奖励水滴结束\n");
  } else {
    await _0x164623();
    if ($.masterHelpResult.code === "0") {
      if ($.masterHelpResult.masterHelpPeoples && $.masterHelpResult.masterHelpPeoples.length >= 5) {
        if (!$.masterHelpResult.masterGotFinal) await _0x7d1ef7(), $.masterGotFinished.code === "0" && (console.log("已成功领取好友助力奖励：【" + $.masterGotFinished.amount + "】g💧"), _0xc59bfd += "【额外奖励】" + $.masterGotFinished.amount + "g💧领取成功\n");else {
          console.log("已经领取过5好友助力额外奖励");
          _0xc59bfd += "【额外奖励】已被领取过\n";
        }
      } else {
        console.log("助力好友未达到5个");
        _0xc59bfd += "【额外奖励】领取失败,原因：给您助力的人未达5个\n";
      }
      if ($.masterHelpResult.masterHelpPeoples && $.masterHelpResult.masterHelpPeoples.length > 0) {
        let _0x1d1800 = "";
        $.masterHelpResult.masterHelpPeoples.map((_0x2fa133, _0x296a3b) => {
          _0x296a3b === $.masterHelpResult.masterHelpPeoples.length - 1 ? _0x1d1800 += _0x2fa133.nickName || "匿名用户" : _0x1d1800 += (_0x2fa133.nickName || "匿名用户") + ",";
          let _0xcacae0 = new Date(_0x2fa133.time),
            _0x3a0492 = _0xcacae0.getFullYear() + "-" + (_0xcacae0.getMonth() + 1) + "-" + _0xcacae0.getDate() + " " + _0xcacae0.getHours() + ":" + _0xcacae0.getMinutes() + ":" + _0xcacae0.getMinutes();
          console.log("【" + (_0x2fa133.nickName || "匿名用户") + "】 在 " + _0x3a0492 + " 给您助过力");
        });
        _0xc59bfd += "【助力您的好友】" + _0x1d1800 + "\n";
      }
      console.log("领取额外奖励水滴结束\n");
    }
  }
}
async function _0x4e3cda() {
  let _0x5dda65 = !$.farmTask.waterRainInit.f;
  if (_0x5dda65) console.log("水滴雨任务，每天两次，最多可得10g水滴"), console.log("两次水滴雨任务是否全部完成：" + ($.farmTask.waterRainInit.f ? "是" : "否")), $.farmTask.waterRainInit.lastTime && Date.now() < $.farmTask.waterRainInit.lastTime + 3 * 60 * 60 * 1000 && (_0x5dda65 = false, console.log("【第" + ($.farmTask.waterRainInit.winTimes + 1) + "次水滴雨】还未到时间\n")), _0x5dda65 && (console.log("开始水滴雨任务,这是第" + ($.farmTask.waterRainInit.winTimes + 1) + "次，剩余" + (2 - ($.farmTask.waterRainInit.winTimes + 1)) + "次"), await _0x48fa86(), console.log("水滴雨waterRain"), $.waterRain.code === "0" && (console.log("水滴雨任务执行成功，获得水滴：" + $.waterRain.addEnergy + "g💧"), console.log("【第" + ($.farmTask.waterRainInit.winTimes + 1) + "次水滴雨】获得" + $.waterRain.addEnergy + "g💧\n")));else {
    console.log("【水滴雨】已全部完成\n");
  }
}
async function _0x2d1a9b() {
  await _0x180a04();
  if ($.clockInInit.code === 0) {
    if ($.clockInInit.data.signInFlag == 0) {
      console.log("\n开始今日签到");
      await _0x2523f5();
      if ($.clockInForFarmRes.code === 0) console.log("获得" + $.clockInForFarmRes.data.prizeDesc + "💧\n");else $.clockInForFarmRes.code === 210000 ? (console.log("签到失败：" + JSON.stringify($.clockInForFarmRes)), $.kuwei = true) : console.log("签到失败：" + JSON.stringify($.clockInForFarmRes));
    }
  }
}
async function _0x4217fc() {
  await _0x3cb893();
  console.log("\n开始给好友浇水...");
  await _0x184c99();
  const {
    waterFriendCountKey: _0x54f456,
    waterFriendMax: _0x4e99a3
  } = $.farmTask.waterFriendTaskInit;
  console.log("今日已给" + _0x54f456 + "个好友浇水");
  if (_0x54f456 < _0x4e99a3) {
    let _0x36f5a2 = [];
    if ($.friendList.friends && $.friendList.friends.length > 0) {
      $.friendList.friends.map((_0x4bcbae, _0x241053) => {
        _0x4bcbae.friendState === 1 && _0x36f5a2.length < _0x4e99a3 - _0x54f456 && _0x36f5a2.push(_0x4bcbae.shareCode);
      });
      _0x36f5a2.length > 0 && console.log("需要浇水的好友shareCodes:" + JSON.stringify(_0x36f5a2));
      _0x36f5a2.length == 0 && console.log("没有需要浇水的好友!\n");
      let _0x51beca = 0,
        _0x20dc05 = "";
      for (let _0x12fb75 = 0; _0x12fb75 < _0x36f5a2.length; _0x12fb75++) {
        await _0x4dae77(_0x36f5a2[_0x12fb75]);
        console.log("为第" + (_0x12fb75 + 1) + "个好友浇水");
        if ($.waterFriendForFarmRes.code === "0") {
          _0x51beca++;
          if ($.waterFriendForFarmRes.cardInfo) {
            console.log("为好友浇水获得道具了");
            if ($.waterFriendForFarmRes.cardInfo.type === "beanCard") console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule), _0x20dc05 += "水滴换豆卡,";else {
              if ($.waterFriendForFarmRes.cardInfo.type === "fastCard") console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule), _0x20dc05 += "快速浇水卡,";else {
                if ($.waterFriendForFarmRes.cardInfo.type === "doubleCard") console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule), _0x20dc05 += "水滴翻倍卡,";else {
                  if ($.waterFriendForFarmRes.cardInfo.type === "signCard") {
                    console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule);
                    _0x20dc05 += "加签卡,";
                  }
                }
              }
            }
          }
        } else $.waterFriendForFarmRes.code === "11" && console.log("水滴不够,跳出浇水");
      }
      _0x51beca > 0 && console.log("已给" + _0x51beca + "个好友浇水,消耗" + _0x51beca * 10 + "g水\n");
      _0x20dc05 && _0x20dc05.length > 0 && console.log("【好友浇水奖励】" + _0x20dc05.substr(0, _0x20dc05.length - 1) + "\n");
    } else console.log("好友列表无好友,快去邀请您的好友吧!\n");
  } else console.log("今日已为" + _0x4e99a3 + "个好友浇水\n");
}
async function _0x2adec4() {
  await _0x184c99();
  const {
    waterFriendCountKey: _0x58731f,
    waterFriendMax: _0x109031,
    waterFriendSendWater: _0x416ac8,
    waterFriendGotAward: _0x171f53
  } = $.farmTask.waterFriendTaskInit;
  _0x58731f >= _0x109031 ? !_0x171f53 ? (await _0xfde6af(), $.waterFriendGotAwardRes.code === "0" && console.log("领取给好友浇水奖励" + $.waterFriendGotAwardRes.addWater + "g💧\n")) : console.log("给好友浇水的水滴奖励已领取\n") : console.log("给" + _0x109031 + "个好友浇水未完成\n");
}
async function _0x1677fa() {
  for (let _0x22a2dc of _0x4491b3) {
    if (_0x22a2dc === $.farmInfo.farmUserPro.shareCode) {
      console.log("自己不能邀请自己成为好友噢\n");
      continue;
    }
    await _0xd9be32(_0x22a2dc);
    if ($.inviteFriendRes && $.inviteFriendRes.helpResult && $.inviteFriendRes.helpResult.code === "0") console.log("接收邀请成为好友结果成功,您已成为" + $.inviteFriendRes.helpResult.masterUserInfo.nickName + "的好友");else $.inviteFriendRes && $.inviteFriendRes.helpResult && $.inviteFriendRes.helpResult.code === "17" && console.log("接收邀请成为好友结果失败,对方已是您的好友");
  }
}
async function _0x22d632() {
  for (let _0x3ac151 = 0; _0x3ac151 < 10; _0x3ac151++) {
    $.duckRes = await _0x11bd2d("getFullCollectionReward", {
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
async function _0x1dfb3f() {
  $.totalWaterReward = await _0x11bd2d("totalWaterTaskForFarm");
}
async function _0x580b80() {
  $.firstWaterReward = await _0x11bd2d("firstWaterTaskForFarm");
}
async function _0x20901c() {
  $.newtaskinfo = await _0x11bd2d("gotNewUserTaskForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x4f048b() {
  $.newtaskinfo = await _0x11bd2d("gotLowFreqWaterForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x117335() {
  $.farmInfo = await _0x11bd2d("farm_home", {
    "version": 1
  });
}
async function _0x28e088() {
  $.rain_round = await _0x11bd2d("farm_rain_round_icon", {
    "version": 1
  });
}
async function _0xe44b50(_0x3cf0ad) {
  $.rain_page = await _0x11bd2d("farm_rain_page", {
    "version": 1,
    "token": _0x3cf0ad
  });
}
async function _0x1aeaa5(_0x5c07f2) {
  $.rain_reward = await _0x11bd2d("farm_rain_reward", {
    "version": 1,
    "token": _0x5c07f2,
    "bcc": 200,
    "scc": 0
  });
}
async function _0xfde6af() {
  $.waterFriendGotAwardRes = await _0x11bd2d("waterFriendGotAwardForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  });
}
async function _0x363864() {
  $.myCardInfoRes = await _0x11bd2d("myCardInfoForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  });
}
async function _0x39cdb4(_0x51ffaa) {
  $.userMyCardRes = await _0x11bd2d("userMyCardForFarm", {
    "cardType": _0x51ffaa
  });
}
async function _0x3e2af0(_0x2251e7) {
  $.gotStageAwardForFarmRes = await _0x11bd2d("gotStageAwardForFarm", {
    "type": _0x2251e7
  });
}
async function _0x5ad8d0(_0x31a33d) {
  await $.wait(1500);
  $.waterResult = await _0x11bd2d("farm_water", {
    "version": 1,
    "waterType": _0x31a33d
  });
}
async function _0x500a84() {
  $.initForTurntableFarmRes = await _0x1e479c("wheelsHome", {
    "linkId": "VssYBUKJOen7HZXpC8dRFA"
  });
}
async function _0x4867fa() {
  $.wheeltaskRes = await _0x1e479c("apTaskList", {
    "linkId": "VssYBUKJOen7HZXpC8dRFA"
  });
}
async function _0x5a5ed8(_0x3b3bf7, _0xfc3c33, _0x2d1553) {
  $.wheeldoRes = await _0x1e479c("apsDoTask", {
    "taskType": _0x3b3bf7,
    "taskId": _0xfc3c33,
    "channel": 4,
    "checkVersion": true,
    "linkId": "VssYBUKJOen7HZXpC8dRFA",
    "itemId": _0x2d1553
  });
}
async function _0xefb67d() {
  $.lotteryRes = await _0x1e479c("wheelsLottery", {
    "linkId": "VssYBUKJOen7HZXpC8dRFA"
  });
}
async function _0x654ce() {
  $.treeboardRes = await _0x11bd2d("farm_tree_board", {
    "version": 1
  });
}
async function _0xb2518a(_0x147645) {
  $.planttreeRes = await _0x11bd2d("farm_plant_tree", {
    "version": 1,
    "uid": _0x147645
  });
}
async function _0x28a621(_0x21dbf6) {
  const _0x834c67 = {
    "type": 2,
    "adId": _0x21dbf6,
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  };
  $.browserForTurntableFarm2Res = await _0x11bd2d("browserForTurntableFarm", _0x834c67);
}
async function _0x14a8f4() {
  $.lotteryMasterHelpRes = await _0x11bd2d("initForFarm", {
    "imageUrl": "",
    "nickName": "",
    "shareCode": arguments[0] + "-3",
    "babelChannel": "3",
    "version": 24,
    "channel": 1
  });
}
async function _0x7d1ef7() {
  $.masterGotFinished = await _0x11bd2d("masterGotFinishedTaskForFarm");
}
async function _0x164623() {
  $.masterHelpResult = await _0x11bd2d("masterHelpTaskInitForFarm");
}
async function _0x5ccd04() {
  $.farmAssistResult = await _0x11bd2d("farm_assist_init_info", {
    "version": 1
  });
}
async function _0x325b08() {
  $.receiveStageEnergy = await _0x11bd2d("farm_assist_receive_award", {
    "version": 1
  });
}
async function _0xd9be32() {
  $.inviteFriendRes = await _0x11bd2d("initForFarm", {
    "imageUrl": "",
    "nickName": "",
    "shareCode": arguments[0] + "-inviteFriend",
    "version": 4,
    "channel": 2
  });
}
async function _0x256539() {
  $.helpResult = await _0x11bd2d("initForFarm", {
    "imageUrl": "",
    "nickName": "",
    "shareCode": arguments[0],
    "babelChannel": "3",
    "version": 2,
    "channel": 1
  });
}
async function _0x48fa86() {
  const _0x6ec09f = {
    "type": 1,
    "hongBaoTimes": 100,
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  };
  $.waterRain = await _0x11bd2d("waterRainForFarm", _0x6ec09f);
}
async function _0x180a04() {
  $.clockInInit = await _0x1e479c("dongDongFarmSignHome", {
    "linkId": "LCH-fV7hSnChB-6i5f4ayw"
  });
}
async function _0x2523f5() {
  $.clockInForFarmRes = await _0x1e479c("dongDongFarmSignIn", {
    "linkId": "LCH-fV7hSnChB-6i5f4ayw"
  });
}
async function _0x46aeaa(_0x4d19d7, _0xa2ccdd, _0xf1e6e0) {
  const _0x36571e = "clockInFollowForFarm";
  let _0x547164 = {
    "id": _0x4d19d7,
    "type": _0xa2ccdd,
    "step": _0xf1e6e0
  };
  if (_0xa2ccdd === "theme") {
    if (_0xf1e6e0 === "1") $.themeStep1 = await _0x11bd2d(_0x36571e, _0x547164);else _0xf1e6e0 === "2" && ($.themeStep2 = await _0x11bd2d(_0x36571e, _0x547164));
  } else {
    if (_0xa2ccdd === "venderCoupon") {
      if (_0xf1e6e0 === "1") $.venderCouponStep1 = await _0x11bd2d(_0x36571e, _0x547164);else _0xf1e6e0 === "2" && ($.venderCouponStep2 = await _0x11bd2d(_0x36571e, _0x547164));
    }
  }
}
async function _0x54a2f1() {
  $.gotClockInGiftRes = await _0x11bd2d("clockInForFarm", {
    "type": 2,
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x5a7f2e() {
  $.threeMeal = await _0x11bd2d("gotThreeMealForFarm");
}
async function _0x14b119(_0x3a6b70, _0x441e83, _0x72a8d) {
  $.browseResult = await _0x11bd2d("farm_do_task", {
    "version": 1,
    "taskType": _0x3a6b70,
    "taskId": _0x441e83,
    "taskInsert": true,
    "itemId": _0x72a8d,
    "channel": 0
  });
}
async function _0x4db589(_0x37defd, _0x252dee) {
  $.dotaskResult = await _0x11bd2d("farm_task_receive_award", {
    "version": 1,
    "taskType": _0x37defd,
    "taskId": _0x252dee,
    "channel": 0
  });
}
async function _0x3aefee(_0x16afdf, _0x270466) {
  $.taskDetail = await _0x11bd2d("farm_task_detail", {
    "version": 1,
    "taskType": _0x16afdf,
    "taskId": _0x270466,
    "channel": 0
  });
}
async function _0x43af98() {
  $.goalResult = await _0x11bd2d("gotWaterGoalTaskForFarm", {
    "type": 3
  });
}
async function _0x184c99() {
  $.farmTask = await _0x11bd2d("farm_task_list", {
    "version": 1,
    "channel": 0
  });
}
async function _0x145f43() {
  $.farmTask = await _0x11bd2d("taskInitForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "45",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x3cb893() {
  $.friendList = await _0x11bd2d("friendListInitForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0xe2e780() {
  $.awardInviteFriendRes = await _0x11bd2d("awardInviteFriendForFarm");
}
async function _0x4dae77(_0x5cea23) {
  const _0x106a45 = {
    "shareCode": _0x5cea23,
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  };
  $.waterFriendForFarmRes = await _0x11bd2d("waterFriendForFarm", _0x106a45);
}
async function _0x51ad07() {
  if ($.isNode() && process.env.FRUIT_NOTIFY_CONTROL) $.ctrTemp = "" + process.env.FRUIT_NOTIFY_CONTROL === "false";else $.getdata("jdFruitNotify") ? $.ctrTemp = $.getdata("jdFruitNotify") === "false" : $.ctrTemp = "" + _0x4754b7 === "false";
  $.ctrTemp ? ($.msg($.name, _0x1dd8c8, _0xc59bfd, _0x2b5917), $.isNode() && (_0x2ad025 += _0x1dd8c8 + "\n" + _0xc59bfd + ($.index !== _0x3ab354.length ? "\n\n" : ""))) : $.log("\n" + _0xc59bfd + "\n");
}
function _0x2d3ace(_0x4ee1c6) {
  let _0x34ea31;
  return _0x4ee1c6 ? _0x34ea31 = new Date(_0x4ee1c6) : _0x34ea31 = new Date(), _0x34ea31.getFullYear() + "-" + (_0x34ea31.getMonth() + 1 >= 10 ? _0x34ea31.getMonth() + 1 : "0" + (_0x34ea31.getMonth() + 1)) + "-" + (_0x34ea31.getDate() >= 10 ? _0x34ea31.getDate() : "0" + _0x34ea31.getDate());
}
function _0x5c0c3c() {
  return new Promise(_0x12aae4 => {
    console.log("开始获取配置文件\n");
    _0x13423c = $.isNode() ? require("./sendNotify") : "";
    const _0x4e3850 = $.isNode() ? require("./jdCookie.js") : "";
    if ($.isNode()) {
      Object.keys(_0x4e3850).forEach(_0x1bccf0 => {
        _0x4e3850[_0x1bccf0] && _0x3ab354.push(_0x4e3850[_0x1bccf0]);
      });
      if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
    } else _0x3ab354 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0x45ec42($.getdata("CookiesJD") || "[]").map(_0x4ae2f1 => _0x4ae2f1.cookie)].filter(_0x211426 => !!_0x211426);
    _0x12aae4();
  });
}
async function _0x23c158() {
  await _0x11bd2d("ddnc_getTreasureBoxAward", {
    "type": 1,
    "babelChannel": "121",
    "line": "getBean",
    "version": 24,
    "channel": 1,
    "lat": "0",
    "lng": "0"
  });
  await $.wait(500);
  await _0x170eb4();
  await $.wait(2000);
  let _0x460b3f = await _0x11bd2d("ddnc_getTreasureBoxAward", {
    "type": 2,
    "babelChannel": "121",
    "line": "getBean",
    "version": 24,
    "channel": 1,
    "lat": "0",
    "lng": "0"
  });
  return _0x460b3f;
}
async function _0x571fff() {
  await _0x11bd2d("ddnc_getTreasureBoxAward", {
    "type": 1,
    "babelChannel": "121",
    "version": 24,
    "channel": 1,
    "lat": "0",
    "lng": "0"
  });
  await $.wait(500);
  await _0x145f43();
  await $.wait(2000);
  let _0x5759a9 = await _0x11bd2d("ddnc_getTreasureBoxAward", {
    "type": 2,
    "babelChannel": "45",
    "version": 24,
    "channel": 1,
    "lat": "0",
    "lng": "0"
  });
  return _0x5759a9;
}
function _0x170eb4() {
  return new Promise(_0x30333f => {
    const _0x5c2903 = {
      "url": "https://api.m.jd.com/client.action?functionId=beanTaskList&body=%7B%22viewChannel%22%3A%22AppHome%22%2C%22beanVersion%22%3A1%2C%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D&appid=ld",
      "headers": {
        "Cookie": _0x354559,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x5c2903, (_0x1fdcb2, _0x46f2cd, _0x3b9fd6) => {
      _0x30333f();
    });
  });
}
function _0x59dc9e() {
  return new Promise(_0x5dd7ff => {
    const _0x49fc3b = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": {
        "Cookie": _0x354559,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x49fc3b, (_0x370ccd, _0x14e52f, _0x50bed3) => {
      try {
        if (_0x50bed3) {
          _0x50bed3 = JSON.parse(_0x50bed3);
          if (_0x50bed3.islogin === "1") {} else _0x50bed3.islogin === "0" && ($.isLogin = false);
        }
      } catch (_0x59e2b9) {
        console.log(_0x59e2b9);
      } finally {
        _0x5dd7ff();
      }
    });
  });
}
async function _0x11bd2d(_0x228c15, _0x419b93 = {}, _0x4ea484 = 800) {
  if ($.reqnum % 5 == 0) _0x4ea484 = _0x1ea854;
  $.reqnum++;
  if (_0x436692[_0x228c15]) {
    let _0x16abb4 = {
      "appId": _0x436692[_0x228c15],
      "fn": _0x228c15,
      "body": _0x419b93,
      "apid": "signed_wh5",
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
    _0x419b93 = await _0x4e8f46.getbody(_0x16abb4);
  } else _0x419b93 = "functionId=" + _0x228c15 + "&body=" + encodeURIComponent(JSON.stringify(_0x419b93)) + "&appid=signed_wh5";
  return new Promise(_0x5ac931 => {
    setTimeout(() => {
      $.get(_0x277cc9(_0x419b93), (_0x36dc63, _0x312e96, _0x533671) => {
        try {
          _0x36dc63 ? (console.log("\n东东农场: API查询请求失败 ‼️‼️"), console.log(JSON.stringify(_0x36dc63)), console.log("function_id:" + _0x228c15), $.logErr(_0x36dc63)) : _0x5f0e83(_0x533671) && (_0x533671 = JSON.parse(_0x533671));
        } catch (_0x36cebd) {
          $.logErr(_0x36cebd, _0x312e96);
        } finally {
          _0x5ac931(_0x533671);
        }
      });
    }, _0x4ea484);
  });
}
async function _0x39ad44(_0x32e8ff, _0x2dcf67 = {}) {
  return new Promise(async _0x36e22c => {
    let _0x11fb25 = "POST",
      _0x72564;
    const _0x790e3b = {
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
      "osVersion": _0x178a02.getLatestIOSVersion(),
      "partner": ""
    };
    if (_0x481754[_0x32e8ff]) {
      _0x1d7f09 = {
        "appId": _0x481754[_0x32e8ff],
        "functionId": _0x32e8ff,
        "appid": "activities_platform",
        "clientVersion": _0x178a02.getLatestAppVersion(),
        "client": "ios",
        "body": _0x2dcf67,
        "version": "4.4",
        "ua": $.UA,
        "t": true
      };
      let _0x193075 = await _0x555cee.getH5st(_0x1d7f09);
      _0x2dcf67 = _0x193075.paramsData;
    } else _0x11fb25 = "GET", _0x2dcf67 = {
      "functionId": _0x32e8ff,
      "body": JSON.stringify(_0x2dcf67),
      "t": Date.now(),
      "appid": "activities_platform",
      "client": "ios",
      "clientVersion": _0x178a02.getLatestAppVersion()
    }, _0x72564 = Object.assign(_0x2dcf67, _0x790e3b);
    const _0x3cabae = {
      "url": "https://api.m.jd.com/api",
      "method": _0x11fb25,
      "headers": {
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": _0x354559,
        "Host": "api.m.jd.com",
        "Referer": "https://h5.m.jd.com/",
        "X-Referer-Page": "https://h5.m.jd.com/pb/015686010/Bc9WX7MpCW7nW9QjZ5N3fFeJXMH/index.html",
        "Origin": "https://h5.m.jd.com",
        "x-rp-client": "h5_1.0.0",
        "User-Agent": $.UA
      },
      "params": _0x72564,
      "data": _0x2dcf67,
      "timeout": 30000,
      "httpsTlsOptions": ["wheelsHome", "wheelsLottery"].includes(_0x32e8ff) ? _0x178a02.useAppTls() : null
    };
    ["wheelsHome", "apsDoTask", "wheelsLottery", "apTaskList"].includes(_0x32e8ff) && (_0x3cabae.headers.Referer = "https://lotterydraw-new.jd.com/?id=VssYBUKJOen7HZXpC8dRFA", _0x3cabae.headers.Origin = "https://lotterydraw-new.jd.com", _0x3cabae.headers["X-Referer-Page"] = "https://lotterydraw-new.jd.com/");
    const _0x215b3e = await _0x178a02.request(_0x3cabae);
    _0x36e22c(_0x215b3e.data);
  });
}
function _0x13fb58(_0x52ed0b, _0x322671, _0x5b20b4) {
  if (_0x52ed0b == null) return "";
  var _0x3ba74d = [],
    _0x5a241a = typeof _0x52ed0b;
  if (_0x5a241a == "string" || _0x5a241a == "number" || _0x5a241a == "boolean") {
    _0x3ba74d.push(_0x322671 + "=" + (_0x5b20b4 == null || _0x5b20b4 ? encodeURIComponent(_0x52ed0b) : _0x52ed0b));
  } else for (var _0x52531a in _0x52ed0b) {
    var _0x155029 = _0x322671 == null ? _0x52531a : _0x322671 + (_0x52ed0b instanceof Array ? "[" + _0x52531a + "]" : "." + _0x52531a);
    _0x3ba74d.push(_0x13fb58(_0x52ed0b[_0x52531a], _0x155029, _0x5b20b4));
  }
  return _0x3ba74d.join("&");
}
async function _0x1e479c(_0x5b689f, _0x2e838e = {}, _0x2ed60a = 1500) {
  $.reqnum++;
  if (_0x481754[_0x5b689f]) {
    let _0x72dafb = {
        "appId": _0x481754[_0x5b689f],
        "functionId": _0x5b689f,
        "appid": "activities_platform",
        "clientVersion": $.UA.split(";")[2],
        "client": "ios",
        "body": _0x2e838e,
        "version": "4.4",
        "ua": $.UA,
        "t": true
      },
      _0x194b83 = await _0x555cee.getH5st(_0x72dafb);
    _0x2e838e = _0x13fb58(_0x194b83.paramsData);
  } else {
    _0x2e838e = "functionId=" + _0x5b689f + "&body=" + encodeURIComponent(JSON.stringify(_0x2e838e)) + "&appid=activities_platform";
  }
  return new Promise(_0x5e0b5b => {
    setTimeout(() => {
      $.post(_0x202b02(_0x2e838e), (_0x4a72cb, _0x180524, _0x38884a) => {
        try {
          _0x4a72cb ? (console.log("\n东东农场: API请求失败 ‼️‼️"), console.log(JSON.stringify(_0x4a72cb)), console.log("function_id:" + _0x5b689f), $.logErr(_0x4a72cb)) : _0x5f0e83(_0x38884a) && (_0x38884a = JSON.parse(_0x38884a));
        } catch (_0x4c63b1) {
          $.logErr(_0x4c63b1, _0x180524);
        } finally {
          _0x5e0b5b(_0x38884a);
        }
      });
    }, _0x2ed60a);
  });
}
function _0x5f0e83(_0x3714d8) {
  try {
    if (typeof JSON.parse(_0x3714d8) == "object") {
      return true;
    }
  } catch (_0x52676e) {
    return console.log(_0x52676e), console.log("京东服务器访问数据为空，请检查自身设备网络情况"), false;
  }
}
function _0x277cc9(_0x4fd457 = {}) {
  return {
    "url": _0x354d12 + "?" + _0x4fd457,
    "headers": {
      "Host": "api.m.jd.com",
      "Accept": "*/*",
      "Origin": "https://h5.m.jd.com",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": $.UA,
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Referer": "https://h5.m.jd.com/",
      "Cookie": _0x354559
    },
    "timeout": 30000
  };
}
function _0x202b02(_0x1c04cd = {}) {
  return {
    "url": "https://api.m.jd.com/api",
    "body": _0x1c04cd + "&cthr=1&loginType=&loginWQBiz=wegame&openudid=" + $.UUID + "&uuid=" + $.UUID + "&build=169088&screen=414*736&networkType=wifi&d_brand=iPhone&d_model=iPhone&lang=zh_CN&osVersion=&partner=-1",
    "headers": {
      "Accept": "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      "Connection": "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      "Cookie": _0x354559,
      "Host": "api.m.jd.com",
      "Referer": "https://lotterydraw-new.jd.com/?id=VssYBUKJOen7HZXpC8dRFA",
      "x-referer-page": "https://lotterydraw-new.jd.com/",
      "Origin": "https://lotterydraw-new.jd.com",
      "x-rp-client": "h5_1.0.0",
      "User-Agent": $.UA,
      "request-from": "native"
    },
    "ciphers": _0x579534.cpstr,
    "timeout": 30000
  };
}
function _0x3983c1(_0x388b38, _0x34dde7 = {}) {
  return {
    "url": _0x354d12 + "?" + _0x34dde7,
    "headers": {
      "Host": "api.m.jd.com",
      "Accept": "*/*",
      "Origin": "https://carry.m.jd.com",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": $.UA,
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Referer": "https://carry.m.jd.com/",
      "Cookie": _0x354559
    },
    "timeout": 10000
  };
}
function _0x45ec42(_0xbfb995) {
  if (typeof _0xbfb995 == "string") {
    try {
      return JSON.parse(_0xbfb995);
    } catch (_0x9944ec) {
      return console.log(_0x9944ec), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
    }
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
