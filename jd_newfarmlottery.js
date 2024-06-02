/*
26 5,13 * * * jd_newfarmlottery.js
*/
const $ = new Env('新农场幸运转盘');
let _0x47fee3 = false,
  _0x5f2985 = [],
  _0x9d3ed5 = "",
  _0x2e27ba,
  _0x569701,
  _0x54ad1b = "",
  _0x3e0e5a = "",
  _0xe0701d = "",
  _0x547a8a = {};
const _0x577efb = "https://api.m.jd.com/client.action",
  _0x570162 = require("./USER_AGENTS"),
  _0x4967bb = require("./function/dylib"),
  _0x5991d8 = require("./function/dylans"),
  _0x12ca5a = require("./function/dylanw");
if (process.env.DY_PROXY) {
  const _0x980c43 = require("./function/proxy.js");
  $.get = _0x980c43.intoRequest($.get.bind($));
  $.post = _0x980c43.intoRequest($.post.bind($));
}
$.reqnum = 1;
const _0x2bf884 = {
  "dongDongFarmSignHome": "deba1",
  "dongDongFarmSignIn": "65f9d",
  "wheelsHome": "c06b7",
  "wheelsLottery": "bd6c8",
  "apsDoTask": "54ed7"
};
!(async () => {
  await _0x30a1bd();
  if (!_0x5f2985[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  $.log("\n容易403，建议上代理");
  $.log("版本：20240524");
  $.log("问题建议：https://t.me/dylan_jdpro");
  $.log("环境变量（可选项）：");
  $.log("export DY_PROXY='api_url' 可使用代理API");
  for (let _0x2baa16 = 0; _0x2baa16 < _0x5f2985.length; _0x2baa16++) {
    if (_0x5f2985[_0x2baa16]) {
      _0x9d3ed5 = _0x5f2985[_0x2baa16];
      $.UserName = decodeURIComponent(_0x9d3ed5.match(/pt_pin=([^; ]+)(?=;?)/) && _0x9d3ed5.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x2baa16 + 1;
      $.isLogin = true;
      $.nickName = "";
      $.farmInfo = "";
      ct = 0;
      $.kuwei = false;
      await _0x5ddd05();
      console.log("\n------------------【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "-------------------\n");
      if (!$.isLogin) {
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        });
        $.isNode() && (await _0x2e27ba.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      _0x3e0e5a = "";
      _0xe0701d = "";
      _0x547a8a = {};
      $.UA = _0x570162.UARAM ? _0x570162.UARAM() : _0x570162.USER_AGENT;
      $.UUID = _0x4967bb.UUID("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      await _0x59dc5e();
      await $.wait(2000);
    }
  }
})().catch(_0x54b962 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x54b962 + "!", "");
}).finally(() => {
  $.done();
});
async function _0x59dc5e() {
  _0xe0701d = "【京东账号" + $.index + "🆔】" + ($.nickName || $.UserName);
  try {
    await _0x305900();
  } catch (_0x36f071) {
    console.log("任务执行异常，请检查执行日志 ‼️‼️\n\n");
    $.logErr(_0x36f071);
  }
  await _0x4e5336();
}
async function _0x305900() {
  await _0x14d6fb();
}
async function _0x14d6fb() {
  await _0x58cc24();
  if ($.initForTurntableFarmRes && $.initForTurntableFarmRes.code === 0) {
    console.log("\n开始天天抽奖任务...");
    await _0x1a5666();
    if ($.wheeltaskRes.code == 0) {
      for (let _0x4d89b3 of $.wheeltaskRes.data) {
        if (_0x4d89b3.taskFinished) {
          console.log(_0x4d89b3.taskTitle + "----" + _0x4d89b3.taskShowTitle + " 已完成");
          continue;
        }
        await _0x53752d(_0x4d89b3.taskType, _0x4d89b3.id, _0x4d89b3.taskSourceUrl);
        if ($.wheeldoRes && $.wheeldoRes.code == 0) console.log("任务完成，获得1次抽奖机会");else {
          console.log("错误了，403");
          break;
        }
        await $.wait(3000);
      }
    }
    await _0x58cc24();
    if ($.initForTurntableFarmRes.data.lotteryChances > 0) {
      console.log("\n天天抽奖次数 " + $.initForTurntableFarmRes.data.lotteryChances);
      console.log("开始抽奖...");
      let _0x57cbe1 = "";
      for (let _0x2ae63b = 0; _0x2ae63b < $.initForTurntableFarmRes.data.lotteryChances; _0x2ae63b++) {
        await _0x3a6970();
        console.log("第" + (_0x2ae63b + 1) + "次抽奖");
        if ($.lotteryRes && $.lotteryRes.code === 0) {
          _0x57cbe1 += $.lotteryRes.data.prizeName + "，";
          if ($.lotteryRes.data.lotteryChances === 0) break;
        } else {
          console.log("错误了！");
          break;
        }
        await $.wait(3000);
      }
      _0x57cbe1 && console.log("天天抽奖奖励：" + _0x57cbe1.substr(0, _0x57cbe1.length - 1) + "\n");
    } else console.log("天天抽奖无次数！");
  } else console.log("初始化天天抽奖得好礼失败！");
}
async function _0x24da2d() {
  await _0x4c37f7();
  if ($.farmAssistResult.code === 0) {
    if ($.farmAssistResult.data.result.assistFriendList && $.farmAssistResult.data.result.assistFriendList.length >= 2) {
      if ($.farmAssistResult.data.result.status === 2) {
        let _0x58e71f = 0;
        for (let _0x594a43 of Object.keys($.farmAssistResult.data.result.assistStageList)) {
          let _0xc5e333 = $.farmAssistResult.data.result.assistStageList[_0x594a43];
          _0xc5e333.stageStaus === 2 && (await _0x397982(), await $.wait(500), $.receiveStageEnergy.code === 0 && (console.log("成功领取第" + (Number(_0x594a43) + 1) + "段助力奖励：" + $.receiveStageEnergy.data.result.amount + "g💧"), _0x58e71f += $.receiveStageEnergy.data.result.amount));
        }
        _0x3e0e5a += "【额外奖励】" + _0x58e71f + "g💧领取完成\n";
        console.log("【额外奖励】" + _0x58e71f + "g💧领取完成\n");
      } else {
        if ($.farmAssistResult.data.result.status === 3) {
          console.log("已经领取过好友助力额外奖励");
          _0x3e0e5a += "【额外奖励】已领取过\n";
        }
      }
    } else console.log("助力好友未达到2个"), _0x3e0e5a += "【额外奖励】领取失败,原因：给您助力的人未达2个\n";
    if ($.farmAssistResult.data.result.assistFriendList && $.farmAssistResult.data.result.assistFriendList.length > 0) {
      let _0x1dfa22 = "";
      $.farmAssistResult.data.result.assistFriendList.map((_0x300864, _0x173243) => {
        _0x173243 === $.farmAssistResult.data.result.assistFriendList.length - 1 ? _0x1dfa22 += _0x300864.nickname || "匿名用户" : _0x1dfa22 += (_0x300864.nickname || "匿名用户") + ",";
        let _0x4c97e7 = new Date(_0x300864.time),
          _0x2745ac = _0x4c97e7.getFullYear() + "/" + ("0" + (_0x4c97e7.getMonth() + 1)).slice(-2) + "/" + ("0" + _0x4c97e7.getDate()).slice(-2) + " " + ("0" + _0x4c97e7.getHours()).slice(-2) + ":" + ("0" + _0x4c97e7.getMinutes()).slice(-2) + ":" + ("0" + _0x4c97e7.getSeconds()).slice(-2);
        console.log("【" + (_0x300864.nickname || "匿名用户") + "】 在 " + _0x2745ac + " 给您助过力");
      });
      _0x3e0e5a += "【助力您的好友】" + _0x1dfa22 + "\n";
    }
    console.log("\n领取额外奖励水滴结束\n");
  } else {
    await _0x65bb87();
    if ($.masterHelpResult.code === "0") {
      if ($.masterHelpResult.masterHelpPeoples && $.masterHelpResult.masterHelpPeoples.length >= 5) {
        if (!$.masterHelpResult.masterGotFinal) {
          await _0x26db98();
          if ($.masterGotFinished.code === "0") {
            console.log("已成功领取好友助力奖励：【" + $.masterGotFinished.amount + "】g💧");
            _0x3e0e5a += "【额外奖励】" + $.masterGotFinished.amount + "g💧领取成功\n";
          }
        } else {
          console.log("已经领取过5好友助力额外奖励");
          _0x3e0e5a += "【额外奖励】已被领取过\n";
        }
      } else console.log("助力好友未达到5个"), _0x3e0e5a += "【额外奖励】领取失败,原因：给您助力的人未达5个\n";
      if ($.masterHelpResult.masterHelpPeoples && $.masterHelpResult.masterHelpPeoples.length > 0) {
        let _0x102064 = "";
        $.masterHelpResult.masterHelpPeoples.map((_0x273ff1, _0x1fb2c8) => {
          if (_0x1fb2c8 === $.masterHelpResult.masterHelpPeoples.length - 1) {
            _0x102064 += _0x273ff1.nickName || "匿名用户";
          } else _0x102064 += (_0x273ff1.nickName || "匿名用户") + ",";
          let _0x4961f0 = new Date(_0x273ff1.time),
            _0x4fcc3b = _0x4961f0.getFullYear() + "-" + (_0x4961f0.getMonth() + 1) + "-" + _0x4961f0.getDate() + " " + _0x4961f0.getHours() + ":" + _0x4961f0.getMinutes() + ":" + _0x4961f0.getMinutes();
          console.log("【" + (_0x273ff1.nickName || "匿名用户") + "】 在 " + _0x4fcc3b + " 给您助过力");
        });
        _0x3e0e5a += "【助力您的好友】" + _0x102064 + "\n";
      }
      console.log("领取额外奖励水滴结束\n");
    }
  }
}
async function _0x557578() {
  let _0x43b004 = !$.farmTask.waterRainInit.f;
  if (_0x43b004) {
    console.log("水滴雨任务，每天两次，最多可得10g水滴");
    console.log("两次水滴雨任务是否全部完成：" + ($.farmTask.waterRainInit.f ? "是" : "否"));
    $.farmTask.waterRainInit.lastTime && Date.now() < $.farmTask.waterRainInit.lastTime + 3 * 60 * 60 * 1000 && (_0x43b004 = false, console.log("【第" + ($.farmTask.waterRainInit.winTimes + 1) + "次水滴雨】还未到时间\n"));
    if (_0x43b004) {
      console.log("开始水滴雨任务,这是第" + ($.farmTask.waterRainInit.winTimes + 1) + "次，剩余" + (2 - ($.farmTask.waterRainInit.winTimes + 1)) + "次");
      await _0x356e41();
      console.log("水滴雨waterRain");
      if ($.waterRain.code === "0") {
        console.log("水滴雨任务执行成功，获得水滴：" + $.waterRain.addEnergy + "g💧");
        console.log("【第" + ($.farmTask.waterRainInit.winTimes + 1) + "次水滴雨】获得" + $.waterRain.addEnergy + "g💧\n");
      }
    }
  } else console.log("【水滴雨】已全部完成\n");
}
async function _0x5b00f2() {
  await _0x5b6c4a();
  if ($.clockInInit.code === 0) {
    if ($.clockInInit.data.signInFlag == 0) {
      console.log("\n开始今日签到");
      await _0x13e100();
      if ($.clockInForFarmRes.code === 0) console.log("获得" + $.clockInForFarmRes.data.prizeDesc + "💧\n");else $.clockInForFarmRes.code === 210000 ? (console.log("签到失败：" + JSON.stringify($.clockInForFarmRes)), $.kuwei = true) : console.log("签到失败：" + JSON.stringify($.clockInForFarmRes));
    }
  }
}
async function _0x3f95c4() {
  await _0x4e6a0b();
  console.log("\n开始给好友浇水...");
  await _0x35b13b();
  const {
    waterFriendCountKey: _0x1ed742,
    waterFriendMax: _0x2bb22a
  } = $.farmTask.waterFriendTaskInit;
  console.log("今日已给" + _0x1ed742 + "个好友浇水");
  if (_0x1ed742 < _0x2bb22a) {
    let _0x4e733e = [];
    if ($.friendList.friends && $.friendList.friends.length > 0) {
      $.friendList.friends.map((_0x50d5f3, _0x175f5a) => {
        if (_0x50d5f3.friendState === 1) {
          if (_0x4e733e.length < _0x2bb22a - _0x1ed742) {
            _0x4e733e.push(_0x50d5f3.shareCode);
          }
        }
      });
      _0x4e733e.length > 0 && console.log("需要浇水的好友shareCodes:" + JSON.stringify(_0x4e733e));
      _0x4e733e.length == 0 && console.log("没有需要浇水的好友!\n");
      let _0x4781db = 0,
        _0x192656 = "";
      for (let _0x4b3d44 = 0; _0x4b3d44 < _0x4e733e.length; _0x4b3d44++) {
        await _0xfa6f44(_0x4e733e[_0x4b3d44]);
        console.log("为第" + (_0x4b3d44 + 1) + "个好友浇水");
        if ($.waterFriendForFarmRes.code === "0") {
          _0x4781db++;
          if ($.waterFriendForFarmRes.cardInfo) {
            console.log("为好友浇水获得道具了");
            if ($.waterFriendForFarmRes.cardInfo.type === "beanCard") console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule), _0x192656 += "水滴换豆卡,";else {
              if ($.waterFriendForFarmRes.cardInfo.type === "fastCard") console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule), _0x192656 += "快速浇水卡,";else {
                if ($.waterFriendForFarmRes.cardInfo.type === "doubleCard") console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule), _0x192656 += "水滴翻倍卡,";else $.waterFriendForFarmRes.cardInfo.type === "signCard" && (console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule), _0x192656 += "加签卡,");
              }
            }
          }
        } else $.waterFriendForFarmRes.code === "11" && console.log("水滴不够,跳出浇水");
      }
      _0x4781db > 0 && console.log("已给" + _0x4781db + "个好友浇水,消耗" + _0x4781db * 10 + "g水\n");
      _0x192656 && _0x192656.length > 0 && console.log("【好友浇水奖励】" + _0x192656.substr(0, _0x192656.length - 1) + "\n");
    } else console.log("好友列表无好友,快去邀请您的好友吧!\n");
  } else console.log("今日已为" + _0x2bb22a + "个好友浇水\n");
}
async function _0xa7253b() {
  await _0x35b13b();
  const {
    waterFriendCountKey: _0x48dbce,
    waterFriendMax: _0x50fa38,
    waterFriendSendWater: _0x25d678,
    waterFriendGotAward: _0x49393d
  } = $.farmTask.waterFriendTaskInit;
  _0x48dbce >= _0x50fa38 ? !_0x49393d ? (await _0x45b01c(), $.waterFriendGotAwardRes.code === "0" && console.log("领取给好友浇水奖励" + $.waterFriendGotAwardRes.addWater + "g💧\n")) : console.log("给好友浇水的水滴奖励已领取\n") : console.log("给" + _0x50fa38 + "个好友浇水未完成\n");
}
async function _0x1ba0d9() {
  for (let _0x23bd82 of _0x569701) {
    if (_0x23bd82 === $.farmInfo.farmUserPro.shareCode) {
      console.log("自己不能邀请自己成为好友噢\n");
      continue;
    }
    await _0x1cd23e(_0x23bd82);
    if ($.inviteFriendRes && $.inviteFriendRes.helpResult && $.inviteFriendRes.helpResult.code === "0") console.log("接收邀请成为好友结果成功,您已成为" + $.inviteFriendRes.helpResult.masterUserInfo.nickName + "的好友");else $.inviteFriendRes && $.inviteFriendRes.helpResult && $.inviteFriendRes.helpResult.code === "17" && console.log("接收邀请成为好友结果失败,对方已是您的好友");
  }
}
async function _0x1b090f() {
  for (let _0x2285a8 = 0; _0x2285a8 < 10; _0x2285a8++) {
    $.duckRes = await request("getFullCollectionReward", {
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
async function _0xc5af2f() {
  $.totalWaterReward = await request("totalWaterTaskForFarm");
}
async function _0x1de4f2() {
  $.firstWaterReward = await request("firstWaterTaskForFarm");
}
async function _0x282b42() {
  $.newtaskinfo = await request("gotNewUserTaskForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x29d5a1() {
  $.newtaskinfo = await request("gotLowFreqWaterForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x469275() {
  $.farmInfo = await request("farm_home", {
    "version": 1
  });
}
async function _0x59cede() {
  $.rain_round = await request("farm_rain_round_icon", {
    "version": 1
  });
}
async function _0xf3ff1d(_0x14be08) {
  $.rain_page = await request("farm_rain_page", {
    "version": 1,
    "token": _0x14be08
  });
}
async function _0x29c444(_0x9e9ae9) {
  $.rain_reward = await request("farm_rain_reward", {
    "version": 1,
    "token": _0x9e9ae9,
    "bcc": 200,
    "scc": 0
  });
}
async function _0x45b01c() {
  $.waterFriendGotAwardRes = await request("waterFriendGotAwardForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  });
}
async function _0x28bea9() {
  $.myCardInfoRes = await request("myCardInfoForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  });
}
async function _0x12d10a(_0x3d2d36) {
  $.userMyCardRes = await request("userMyCardForFarm", {
    "cardType": _0x3d2d36
  });
}
async function _0x4e4e17(_0x2915fa) {
  $.gotStageAwardForFarmRes = await request("gotStageAwardForFarm", {
    "type": _0x2915fa
  });
}
async function _0x51049b(_0x128422) {
  await $.wait(1000);
  $.waterResult = await request("farm_water", {
    "version": 1,
    "waterType": _0x128422
  });
}
async function _0x58cc24() {
  $.initForTurntableFarmRes = await _0xa5c078("wheelsHome", {
    "linkId": "VssYBUKJOen7HZXpC8dRFA",
    "inviteActId": "",
    "inviterEncryptPin": ""
  });
}
async function _0x1a5666() {
  $.wheeltaskRes = await _0xa5c078("apTaskList", {
    "linkId": "VssYBUKJOen7HZXpC8dRFA"
  });
}
async function _0x53752d(_0x5541ff, _0x4050, _0x3439ea) {
  $.wheeldoRes = await _0xa5c078("apsDoTask", {
    "taskType": _0x5541ff,
    "taskId": _0x4050,
    "channel": 4,
    "checkVersion": true,
    "linkId": "VssYBUKJOen7HZXpC8dRFA",
    "itemId": _0x3439ea
  });
}
async function _0x3a6970() {
  $.lotteryRes = await _0xa5c078("wheelsLottery", {
    "linkId": "VssYBUKJOen7HZXpC8dRFA"
  });
}
async function _0x215f8a() {
  $.treeboardRes = await request("farm_tree_board", {
    "version": 1
  });
}
async function _0x26af42(_0xfc6cab) {
  $.planttreeRes = await request("farm_plant_tree", {
    "version": 1,
    "uid": _0xfc6cab
  });
}
async function _0x52edb9(_0x448d15) {
  const _0x4205ca = {
    "type": 2,
    "adId": _0x448d15,
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  };
  $.browserForTurntableFarm2Res = await request("browserForTurntableFarm", _0x4205ca);
}
async function _0x2e634d() {
  $.lotteryMasterHelpRes = await request("initForFarm", {
    "imageUrl": "",
    "nickName": "",
    "shareCode": arguments[0] + "-3",
    "babelChannel": "3",
    "version": 24,
    "channel": 1
  });
}
async function _0x26db98() {
  $.masterGotFinished = await request("masterGotFinishedTaskForFarm");
}
async function _0x65bb87() {
  $.masterHelpResult = await request("masterHelpTaskInitForFarm");
}
async function _0x4c37f7() {
  $.farmAssistResult = await request("farm_assist_init_info", {
    "version": 1
  });
}
async function _0x397982() {
  $.receiveStageEnergy = await request("farm_assist_receive_award", {
    "version": 1
  });
}
async function _0x1cd23e() {
  $.inviteFriendRes = await request("initForFarm", {
    "imageUrl": "",
    "nickName": "",
    "shareCode": arguments[0] + "-inviteFriend",
    "version": 4,
    "channel": 2
  });
}
async function _0x3de8b5() {
  $.helpResult = await request("initForFarm", {
    "imageUrl": "",
    "nickName": "",
    "shareCode": arguments[0],
    "babelChannel": "3",
    "version": 2,
    "channel": 1
  });
}
async function _0x356e41() {
  const _0x3141da = {
    "type": 1,
    "hongBaoTimes": 100,
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  };
  $.waterRain = await request("waterRainForFarm", _0x3141da);
}
async function _0x5b6c4a() {
  $.clockInInit = await _0xa5c078("dongDongFarmSignHome", {
    "linkId": "LCH-fV7hSnChB-6i5f4ayw"
  });
}
async function _0x13e100() {
  $.clockInForFarmRes = await _0xa5c078("dongDongFarmSignIn", {
    "linkId": "LCH-fV7hSnChB-6i5f4ayw"
  });
}
async function _0x496ce4(_0x3f8e17, _0x3e0c81, _0x1f5188) {
  const _0x5cb704 = "clockInFollowForFarm";
  let _0x4708e7 = {
    "id": _0x3f8e17,
    "type": _0x3e0c81,
    "step": _0x1f5188
  };
  if (_0x3e0c81 === "theme") {
    if (_0x1f5188 === "1") $.themeStep1 = await request(_0x5cb704, _0x4708e7);else _0x1f5188 === "2" && ($.themeStep2 = await request(_0x5cb704, _0x4708e7));
  } else {
    if (_0x3e0c81 === "venderCoupon") {
      if (_0x1f5188 === "1") $.venderCouponStep1 = await request(_0x5cb704, _0x4708e7);else _0x1f5188 === "2" && ($.venderCouponStep2 = await request(_0x5cb704, _0x4708e7));
    }
  }
}
async function _0x24a09e() {
  $.gotClockInGiftRes = await request("clockInForFarm", {
    "type": 2,
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x40555b() {
  $.threeMeal = await request("gotThreeMealForFarm");
}
async function _0x30f30a(_0x1427d8, _0xa956c0, _0x2bf099) {
  $.browseResult = await request("farm_do_task", {
    "version": 1,
    "taskType": _0x1427d8,
    "taskId": _0xa956c0,
    "taskInsert": true,
    "itemId": _0x2bf099,
    "channel": 0
  });
}
async function _0x336de2(_0x1ab58, _0xc5f6d8) {
  $.dotaskResult = await request("farm_task_receive_award", {
    "version": 1,
    "taskType": _0x1ab58,
    "taskId": _0xc5f6d8,
    "channel": 0
  });
}
async function _0x587500(_0x700c5b, _0x4c1c60) {
  $.taskDetail = await request("farm_task_detail", {
    "version": 1,
    "taskType": _0x700c5b,
    "taskId": _0x4c1c60,
    "channel": 0
  });
}
async function _0x2a4c06() {
  $.goalResult = await request("gotWaterGoalTaskForFarm", {
    "type": 3
  });
}
async function _0x35b13b() {
  $.farmTask = await request("farm_task_list", {
    "version": 1,
    "channel": 0
  });
}
async function _0x296006() {
  $.farmTask = await request("taskInitForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "45",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x4e6a0b() {
  $.friendList = await request("friendListInitForFarm", {
    "version": 24,
    "channel": 1,
    "babelChannel": "121",
    "lat": "0",
    "lng": "0"
  });
}
async function _0x26bfd2() {
  $.awardInviteFriendRes = await request("awardInviteFriendForFarm");
}
async function _0xfa6f44(_0x437979) {
  const _0x20d198 = {
    "shareCode": _0x437979,
    "version": 24,
    "channel": 1,
    "babelChannel": "121"
  };
  $.waterFriendForFarmRes = await request("waterFriendForFarm", _0x20d198);
}
async function _0x4e5336() {
  if ($.isNode() && process.env.FRUIT_NOTIFY_CONTROL) $.ctrTemp = "" + process.env.FRUIT_NOTIFY_CONTROL === "false";else $.getdata("jdFruitNotify") ? $.ctrTemp = $.getdata("jdFruitNotify") === "false" : $.ctrTemp = "" + _0x47fee3 === "false";
  if ($.ctrTemp) {
    $.msg($.name, _0xe0701d, _0x3e0e5a, _0x547a8a);
    $.isNode() && (_0x54ad1b += _0xe0701d + "\n" + _0x3e0e5a + ($.index !== _0x5f2985.length ? "\n\n" : ""));
  } else $.log("\n" + _0x3e0e5a + "\n");
}
function _0x30a1bd() {
  return new Promise(_0x32400a => {
    console.log("开始获取配置文件\n");
    _0x2e27ba = $.isNode() ? require("./sendNotify") : "";
    const _0x52118f = $.isNode() ? require("./jdCookie.js") : "";
    if ($.isNode()) {
      Object.keys(_0x52118f).forEach(_0x1c303e => {
        _0x52118f[_0x1c303e] && _0x5f2985.push(_0x52118f[_0x1c303e]);
      });
      if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
    } else _0x5f2985 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0x24b9c9($.getdata("CookiesJD") || "[]").map(_0x120fb4 => _0x120fb4.cookie)].filter(_0x5c17dc => !!_0x5c17dc);
    _0x32400a();
  });
}
function _0x53ebb5() {
  return new Promise(_0x445995 => {
    const _0x381563 = {
      "url": "https://api.m.jd.com/client.action?functionId=beanTaskList&body=%7B%22viewChannel%22%3A%22AppHome%22%2C%22beanVersion%22%3A1%2C%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D&appid=ld",
      "headers": {
        "Cookie": _0x9d3ed5,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x381563, (_0x15b36c, _0x25f155, _0x471841) => {
      _0x445995();
    });
  });
}
function _0x5ddd05() {
  return new Promise(_0x4cf478 => {
    const _0x39e088 = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": {
        "Cookie": _0x9d3ed5,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x39e088, (_0x136ec3, _0x22d8d6, _0x1712a1) => {
      try {
        if (_0x1712a1) {
          _0x1712a1 = JSON.parse(_0x1712a1);
          if (_0x1712a1.islogin === "1") {} else _0x1712a1.islogin === "0" && ($.isLogin = false);
        }
      } catch (_0x5dcea8) {
        console.log(_0x5dcea8);
      } finally {
        _0x4cf478();
      }
    });
  });
}
function _0x12a4dd(_0x3580ad, _0x33783b, _0x251b4a) {
  if (_0x3580ad == null) return "";
  var _0x3db911 = [],
    _0xdc51f2 = typeof _0x3580ad;
  if (_0xdc51f2 == "string" || _0xdc51f2 == "number" || _0xdc51f2 == "boolean") _0x3db911.push(_0x33783b + "=" + (_0x251b4a == null || _0x251b4a ? encodeURIComponent(_0x3580ad) : _0x3580ad));else {
    for (var _0x335962 in _0x3580ad) {
      var _0x220d43 = _0x33783b == null ? _0x335962 : _0x33783b + (_0x3580ad instanceof Array ? "[" + _0x335962 + "]" : "." + _0x335962);
      _0x3db911.push(_0x12a4dd(_0x3580ad[_0x335962], _0x220d43, _0x251b4a));
    }
  }
  return _0x3db911.join("&");
}
async function _0xa5c078(_0x1172a8, _0x45a56d = {}, _0x5ce87c = 1500) {
  $.reqnum++;
  if (_0x2bf884[_0x1172a8]) {
    if (_0x1172a8 == "wheelsHome" || 1) {
      let _0xb4e85 = {
        "appId": _0x2bf884[_0x1172a8],
        "fn": _0x1172a8,
        "apid": "activities_platform",
        "ver": $.UA.split(";")[2],
        "cl": "ios",
        "body": _0x45a56d,
        "ua": $.UA,
        "code": 1
      };
      _0x45a56d = await _0x12ca5a.getbody(_0xb4e85);
    } else {
      let _0x47179e = {
        "appId": _0x2bf884[_0x1172a8],
        "functionId": _0x1172a8,
        "appid": "activities_platform",
        "clientVersion": $.UA.split(";")[2],
        "client": "ios",
        "body": _0x45a56d,
        "ua": $.UA,
        "t": Date.now()
      };
      _0x45a56d = await _0x5991d8.getbody(_0x47179e);
    }
  } else _0x45a56d = "functionId=" + _0x1172a8 + "&body=" + encodeURIComponent(JSON.stringify(_0x45a56d)) + "&appid=activities_platform";
  return new Promise(_0x329f93 => {
    setTimeout(() => {
      $.post(_0x3ae1ae(_0x45a56d), (_0x3c2105, _0x3e412f, _0x4310d9) => {
        try {
          _0x3c2105 ? (console.log("\n东东农场: API请求失败 ‼️‼️"), console.log(JSON.stringify(_0x3c2105)), console.log("function_id:" + _0x1172a8), $.logErr(_0x3c2105)) : _0x206419(_0x4310d9) && (_0x4310d9 = JSON.parse(_0x4310d9));
        } catch (_0x220572) {
          $.logErr(_0x220572, _0x3e412f);
        } finally {
          _0x329f93(_0x4310d9);
        }
      });
    }, _0x5ce87c);
  });
}
function _0x206419(_0x7bce2d) {
  try {
    if (typeof JSON.parse(_0x7bce2d) == "object") return true;
  } catch (_0x393300) {
    return console.log(_0x393300), console.log("京东服务器访问数据为空，请检查自身设备网络情况"), false;
  }
}
function _0x3764e0(_0xe8e531 = {}) {
  return {
    "url": _0x577efb + "?" + _0xe8e531,
    "headers": {
      "Host": "api.m.jd.com",
      "Accept": "*/*",
      "Origin": "https://h5.m.jd.com",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": $.UA,
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Referer": "https://h5.m.jd.com/",
      "Cookie": _0x9d3ed5
    },
    "timeout": 30000
  };
}
function _0x3ae1ae(_0x5c1d4c = {}) {
  return {
    "url": "http://api.m.jd.com/api",
    "body": _0x5c1d4c + "&cthr=1&loginType=&loginWQBiz=wegame&openudid=" + $.UUID + "&uuid=" + $.UUID + "&networkType=wifi&d_brand=iPhone&d_model=iPhone&lang=zh_CN",
    "headers": {
      "Accept": "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      "Content-Type": "application/x-www-form-urlencoded",
      "Cookie": _0x9d3ed5,
      "Host": "api.m.jd.com",
      "Referer": "https://lotterydraw-new.jd.com/",
      "x-referer-page": "https://lotterydraw-new.jd.com/",
      "Origin": "https://lotterydraw-new.jd.com",
      "x-rp-client": "h5_1.0.0",
      "User-Agent": $.UA,
      "x-requested-with": "native"
    },
    "timeout": 30000
  };
}
function _0x142a77(_0x569e63, _0x475f6e = {}) {
  return {
    "url": _0x577efb + "?" + _0x475f6e,
    "headers": {
      "Host": "api.m.jd.com",
      "Accept": "*/*",
      "Origin": "https://carry.m.jd.com",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": $.UA,
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Referer": "https://carry.m.jd.com/",
      "Cookie": _0x9d3ed5
    },
    "timeout": 10000
  };
}
function _0x24b9c9(_0x499159) {
  if (typeof _0x499159 == "string") try {
    return JSON.parse(_0x499159);
  } catch (_0x32dca4) {
    return console.log(_0x32dca4), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
  }
}
async function _0x4bf081() {
  let _0x1c0349 = {
      "channelId": "10233",
      "ext": {
        "babelActivityId": "",
        "babelPageUrl": "https://lotterydraw-new.jd.com/?id=VssYBUKJOen7HZXpC8dRFA"
      }
    },
    _0x4ca1a5 = {
      "appId": "5fd3d",
      "functionId": "jutouDisplayIndex",
      "appid": "pages-factory",
      "clientVersion": $.UA.split(";")[2],
      "client": "ios",
      "body": _0x1c0349,
      "ua": $.UA,
      "t": Date.now()
    };
  _0x1c0349 = await _0x5991d8.getbody(_0x4ca1a5);
  let _0x2c7783 = {
    "url": "http://api.m.jd.com/",
    "body": _0x1c0349,
    "headers": {
      "Accept": "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      "Content-Type": "application/x-www-form-urlencoded",
      "Cookie": _0x9d3ed5,
      "Host": "api.m.jd.com",
      "Referer": "https://lotterydraw-new.jd.com/",
      "x-referer-page": "https://lotterydraw-new.jd.com/",
      "Origin": "https://lotterydraw-new.jd.com",
      "x-rp-client": "h5_1.0.0",
      "User-Agent": $.UA,
      "x-requested-with": "native"
    },
    "timeout": 30000
  };
  return new Promise(_0x39317e => {
    $.post(_0x2c7783, (_0x204f52, _0xcfb302, _0x300a4b) => {
      try {
        if (_0x204f52) console.log("\n东东农场: API请求失败 ‼️‼️"), console.log(JSON.stringify(_0x204f52)), console.log("function_id:" + function_id), $.logErr(_0x204f52);else {
          if (_0x206419(_0x300a4b)) {
            _0x300a4b = JSON.parse(_0x300a4b);
            _0x300a4b.code == 200 && ($.aid = _0x300a4b.data.ext.uuid);
          }
        }
      } catch (_0x2778fa) {
        $.logErr(_0x2778fa, _0xcfb302);
      } finally {
        _0x39317e(_0x300a4b);
      }
    });
  });
}
async function _0x2bea90() {
  let _0x1c7a49 = {
    "url": "http://api.m.jd.com/",
    "body": "functionId=getStaticResource&body={\"linkId\":\"VssYBUKJOen7HZXpC8dRFA\"}&t=1716511588400&appid=activities_platform&client=android&clientVersion=13.0.1&cthr=1&loginType=&loginWQBiz=wegame&imei=1346466673661656&aid=1ddf7fae1311d071&h5st=null&x-api-eid-token=jdd03N3YZWKTIUUH6R3CO6AGN3J4OZKY3VLV6U6KOI67XCO34WPMUNBQZFS3RFKJHJHMR3LMLIN53LBLP6NZPNLMQB2M7SMAAAAMPVAH7MEIAAAAAD2L6KJCAR7LZ74X&uuid=1346466673661656-1333131346037313&build=99192&screen=393*873&networkType=wifi&d_brand=Redmi&d_model=Redmi K40S&lang=zh_CN&osVersion=12&partner=xiaomi001&eufv=1&eu=1346466673661656&fv=1333131346037313",
    "headers": {
      "Accept": "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      "Content-Type": "application/x-www-form-urlencoded",
      "Cookie": _0x9d3ed5,
      "Host": "api.m.jd.com",
      "Referer": "https://lotterydraw-new.jd.com/",
      "x-referer-page": "https://lotterydraw-new.jd.com/",
      "Origin": "https://lotterydraw-new.jd.com",
      "x-rp-client": "h5_1.0.0",
      "User-Agent": $.UA,
      "x-requested-with": "native"
    },
    "timeout": 30000
  };
  return new Promise(_0xe6a9e0 => {
    $.post(_0x1c7a49, (_0x5af277, _0x23368c, _0x19005a) => {
      try {
        if (_0x5af277) {
          console.log("\n东东农场: API请求失败 ‼️‼️");
          console.log(JSON.stringify(_0x5af277));
          console.log("function_id:" + function_id);
          $.logErr(_0x5af277);
        } else {
          console.log(_0x19005a);
          if (_0x206419(_0x19005a)) {
            _0x19005a = JSON.parse(_0x19005a);
            if (_0x19005a.code == 200) {}
          }
        }
      } catch (_0x5450d4) {
        $.logErr(_0x5450d4, _0x23368c);
      } finally {
        _0xe6a9e0(_0x19005a);
      }
    });
  });
}
function Env(o,t){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((r,i)=>{s.call(this,t,(t,e,s)=>{t?i(t):r(e)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.logLevels={debug:0,info:1,warn:2,error:3},this.logLevelPrefixs={debug:"[DEBUG] ",info:"[INFO] ",warn:"[WARN] ",error:"[ERROR] "},this.logLevel="info",this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null,...s){try{return JSON.stringify(t,...s)}catch{return e}}getjson(t,e){let s=e;if(this.getdata(t))try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(r=>{this.get({url:t},(t,e,s)=>r(s))})}runScript(a,o){return new Promise(r=>{let t=this.getdata("@chavy_boxjs_userCfgs.httpapi");t=t&&t.replace(/\n/g,"").trim();var e=(e=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"))?+e:20,[s,i]=(e=o&&o.timeout?o.timeout:e,t.split("@"));this.post({url:`http://${i}/v1/scripting/evaluate`,body:{script_text:a,mock_type:"cron",timeout:e},headers:{"X-Key":s,Accept:"*/*"},timeout:e},(t,e,s)=>r(s))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};this.fs=this.fs||require("fs"),this.path=this.path||require("path");var t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),r=!s&&this.fs.existsSync(e);if(!s&&!r)return{};r=s?t:e;try{return JSON.parse(this.fs.readFileSync(r))}catch(t){return{}}}writedata(){var t,e,s,r,i;this.isNode()&&(this.fs=this.fs||require("fs"),this.path=this.path||require("path"),t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),r=!(s=this.fs.existsSync(t))&&this.fs.existsSync(e),i=JSON.stringify(this.data),!s&&r?this.fs.writeFileSync(e,i):this.fs.writeFileSync(t,i))}lodash_get(t,e,s){let r=t;for(const t of e.replace(/\[(\d+)\]/g,".$1").split("."))if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,r,e){return Object(t)===t&&((r=Array.isArray(r)?r:r.toString().match(/[^.[\]]+/g)||[]).slice(0,-1).reduce((t,e,s)=>Object(t[e])===t[e]?t[e]:t[e]=Math.abs(r[s+1])>>0==+r[s+1]?[]:{},t)[r[r.length-1]]=e),t}getdata(t){let e=this.getval(t);if(/^@/.test(t)){var[,s,r]=/^@(.*?)\.(.*?)$/.exec(t);if(s=s?this.getval(s):"")try{const t=JSON.parse(s);e=t?this.lodash_get(t,r,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){var[,r,i]=/^@(.*?)\.(.*?)$/.exec(e),a=this.getval(r),a=r?"null"===a?null:a||"{}":"{}";try{const e=JSON.parse(a);this.lodash_set(e,i,t),s=this.setval(JSON.stringify(e),r)}catch(e){this.lodash_set(a={},i,t),s=this.setval(JSON.stringify(a),r)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got||require("got"),this.cktough=this.cktough||require("tough-cookie"),this.ckjar=this.ckjar||new this.cktough.CookieJar,t&&(t.headers=t.headers||{},t)&&(t.headers=t.headers||{},void 0===t.headers.cookie)&&void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar)}tmout(){return new Promise((t,e)=>{this.tmoutId=setTimeout(()=>{this.prms.cancel(),e({message:"timemout",response:""})},5e4)})}get(t,a=()=>{}){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),t.params&&(t.url+="?"+this.queryStr(t.params)),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,e,s)=>{!t&&e&&(e.body=s,e.statusCode=e.status||e.statusCode,e.status=e.statusCode),a(t,e,s)});break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{var{statusCode:t,statusCode:e,headers:s,body:r,bodyBytes:i}=t;a(null,{status:t,statusCode:e,headers:s,body:r,bodyBytes:i},r,i)},t=>a(t&&t.error||"UndefinedError"));break;case"Node.js":this.initGotEnv(t),this.prms=this.got(t).on("redirect",(t,e)=>{try{var s;t.headers["set-cookie"]&&((s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString())&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar)}catch(t){this.logErr(t)}}),Promise.race([this.prms,this.tmout()]).then(t=>{var{statusCode:t,statusCode:e,headers:s,rawBody:r,body:i}=t;a(null,{status:t,statusCode:e,headers:s,rawBody:r,body:i},i),clearTimeout(this.tmoutId)},t=>{var{message:t,response:e}=t;clearTimeout(this.tmoutId),a(t,e,e&&e.body)})}}post(t,a=()=>{}){var e=t.method?t.method.toLocaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[e](t,(t,e,s)=>{!t&&e&&(e.body=s,e.statusCode=e.status||e.statusCode,e.status=e.statusCode),a(t,e,s)});break;case"Quantumult X":t.method=e,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{var{statusCode:t,statusCode:e,headers:s,body:r,bodyBytes:i}=t;a(null,{status:t,statusCode:e,headers:s,body:r,bodyBytes:i},r,i)},t=>a(t&&t.error||"UndefinedError"));break;case"Node.js":this.initGotEnv(t);var{url:s,...r}=t;this.prms=this.got[e](s,r),Promise.race([this.prms,this.tmout()]).then(t=>{var{statusCode:t,statusCode:e,headers:s,rawBody:r,body:i}=t;a(null,{status:t,statusCode:e,headers:s,rawBody:r,body:i},i),clearTimeout(this.tmoutId)},t=>{var{message:t,response:e}=t;clearTimeout(this.tmoutId),a(t,e,e&&e.body)})}}time(t,e=null){var s,r={"M+":(e=e?new Date(e):new Date).getMonth()+1,"d+":e.getDate(),"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(s in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[s]:("00"+r[s]).substr((""+r[s]).length)));return t}queryStr(e){let s="";for(const r in e){let t=e[r];null!=t&&""!==t&&("object"==typeof t&&(t=JSON.stringify(t)),s+=`${r}=${t}&`)}return s=s.substring(0,s.length-1)}msg(t=o,e="",s="",r={}){var i,a=r=>{const{$open:t,$copy:e,$media:i,$mediaMime:a}=r;switch(typeof r){case void 0:return r;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:r};case"Loon":case"Shadowrocket":return r;case"Quantumult X":return{"open-url":r};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:var o={},s=r.openUrl||r.url||r["open-url"]||t;if(s&&Object.assign(o,{action:"open-url",url:s}),(s=r["update-pasteboard"]||r.updatePasteboard||e)&&Object.assign(o,{action:"clipboard",text:s}),i){let t,e,s;if(i.startsWith("http"))t=i;else if(i.startsWith("data:")){const[r]=i.split(";"),[,a]=i.split(",");e=a,s=r.replace("data:","")}else e=i,s=(t=>{var e,s={JVBERi0:"application/pdf",R0lGODdh:"image/gif",R0lGODlh:"image/gif",iVBORw0KGgo:"image/png","/9j/":"image/jpg"};for(e in s)if(0===t.indexOf(e))return s[e];return null})(i);Object.assign(o,{"media-url":t,"media-base64":e,"media-base64-mime":a??s})}return Object.assign(o,{"auto-dismiss":r["auto-dismiss"],sound:r.sound}),o;case"Loon":{const e={};(s=r.openUrl||r.url||r["open-url"]||t)&&Object.assign(e,{openUrl:s});var n=r.mediaUrl||r["media-url"];return(n=i?.startsWith("http")?i:n)&&Object.assign(e,{mediaUrl:n}),console.log(JSON.stringify(e)),e}case"Quantumult X":{const a={};(o=r["open-url"]||r.url||r.openUrl||t)&&Object.assign(a,{"open-url":o});n=r["media-url"]||r.mediaUrl;return(n=i?.startsWith("http")?i:n)&&Object.assign(a,{"media-url":n}),(s=r["update-pasteboard"]||r.updatePasteboard||e)&&Object.assign(a,{"update-pasteboard":s}),console.log(JSON.stringify(a)),a}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(t,e,s,a(r));break;case"Quantumult X":$notify(t,e,s,a(r));break;case"Node.js":}this.isMuteLog||((i=["","==============📣系统通知📣=============="]).push(t),e&&i.push(e),s&&i.push(s),console.log(i.join("\n")),this.logs=this.logs.concat(i))}debug(...t){this.logLevels[this.logLevel]<=this.logLevels.debug&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.debug+t.map(t=>t??String(t)).join(this.logSeparator)))}info(...t){this.logLevels[this.logLevel]<=this.logLevels.info&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.info+t.map(t=>t??String(t)).join(this.logSeparator)))}warn(...t){this.logLevels[this.logLevel]<=this.logLevels.warn&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.warn+t.map(t=>t??String(t)).join(this.logSeparator)))}error(...t){this.logLevels[this.logLevel]<=this.logLevels.error&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.error+t.map(t=>t??String(t)).join(this.logSeparator)))}log(...t){0<t.length&&(this.logs=[...this.logs,...t]),console.log(t.map(t=>t??String(t)).join(this.logSeparator))}logErr(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️${this.name}, 错误!`,t);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,void 0!==t.message?t.message:t)}}wait(e){return new Promise(t=>setTimeout(t,e))}done(t={}){var e=((new Date).getTime()-this.startTime)/1e3;switch(this.log("",`🔔${this.name}, 结束! 🕛 ${e} 秒`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(o,t)}