/*
活动入口：APP我的--瓜分得豆
15 7-21/2 * * * jd_plantBean.js

*/
const $ = new Env('种豆得豆任务');
let _0x292b29 = true,
  _0x413aa1 = [],
  _0x378924 = "",
  _0x213604,
  _0x5b108e = [],
  _0x1d22d0,
  _0x2830b4;
const _0x2fe271 = require("./function/dylany"),
  _0x368b43 = require("fs"),
  _0x1222d7 = "https://api.m.jd.com/client.action";
if (process.env.DY_PROXY) try {
  ccc = require("./function/proxy.js");
  $.dget = ccc.intoRequest($.get.bind($));
  $.dpost = ccc.intoRequest($.post.bind($));
} catch {
  $.dget = $.get;
  $.dpost = $.post;
} else $.dpost = $.post, $.dget = $.get;
let _0x669367 = "",
  _0x1fad4e = null,
  _0x279d91 = null,
  _0x2e3077 = [],
  _0x16d860 = "",
  _0x51237f,
  _0x118470 = new Date().getHours(),
  _0x51c94d = true;
$.isNode() && process.env.PLANTNOHELP && process.env.PLANTNOHELP == "true" && _0x118470 > 9 && (_0x51c94d = false, console.log("现在是9点后时段，不启用互助...."));
const _0x478ecd = {
  "plantBeanIndex": "d246a",
  "receiveNutrients": "b56b8",
  "cultureBean": "6a216",
  "receiveNutrientsTask": "d22ac",
  "plantChannelNutrientsTask": "2424e",
  "shopNutrientsTask": "19c88",
  "productTaskList": "7351b",
  "productNutrientsTask": "a4e2d",
  "receivedBean": "d4a66",
  "collectUserNutr": "14357"
};
!(async () => {
  await _0x3193ce();
  $.log("\n当前版本：20230212");
  console.log("TG频道：https://t.me/dylan_jdpro");
  $.log("\n环境变量清单（可选项）：");
  $.log("代理API DY_PROXY='apiurl'\n");
  if (!_0x413aa1[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  for (let _0x4b5c90 = 0; _0x4b5c90 < _0x413aa1.length; _0x4b5c90++) {
    if (_0x413aa1[_0x4b5c90]) {
      _0x378924 = _0x413aa1[_0x4b5c90];
      $.UserName = decodeURIComponent(_0x378924.match(/pt_pin=([^; ]+)(?=;?)/) && _0x378924.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x4b5c90 + 1;
      $.isLogin = true;
      $.nickName = "";
      $.UA = require("./USER_AGENTS").UARAM();
      await _0x487408();
      console.log("\n-------------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "-------------\n");
      if (!$.isLogin) {
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        });
        $.isNode() && (await _0x213604.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      _0x1d22d0 = "";
      _0x2830b4 = "";
      option = {};
      await _0x572de7();
      await _0x21912a();
      $.index % 3 == 0 && (console.log("\n【访问接口次数达到3次，休息一分钟.....】\n"), await $.wait(60 * 1000));
    }
  }
  _0x368b43.writeFile("./bean_helpcode", JSON.stringify(_0x5b108e), _0x27063c => {
    _0x27063c && console.log(_0x27063c);
  });
  if ($.isNode() && _0x669367) {
    await _0x213604.sendNotify("" + $.name, "" + _0x669367);
  }
})().catch(_0x151da3 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x151da3 + "!", "");
}).finally(() => {
  $.done();
});
async function _0x572de7() {
  try {
    console.log("获取任务及基本信息");
    await _0x1bd723();
    if ($.plantBeanIndexResult.errorCode === "PB101") {
      console.log("\n进入活动失败，APP上看看吧！");
      return;
    }
    for (let _0x56ee13 = 0; _0x56ee13 < $.plantBeanIndexResult.data?.["roundList"]?.["length"]; _0x56ee13++) {
      if ($.plantBeanIndexResult.data.roundList[_0x56ee13].roundState === "2") {
        _0x51237f = _0x56ee13;
        break;
      }
    }
    if ($.plantBeanIndexResult && $.plantBeanIndexResult.code === "0" && $.plantBeanIndexResult.data) {
      const _0x5c1879 = $.plantBeanIndexResult.data.jwordShareInfo.shareUrl;
      $.myPlantUuid = _0x18d124(_0x5c1879, "plantUuid");
      console.log("\n【账号（" + $.UserName + "）的" + $.name + "好友互助码】" + $.myPlantUuid + "\n");
      _0x5b108e.push($.myPlantUuid);
      _0x2e3077 = $.plantBeanIndexResult.data.roundList;
      _0x1fad4e = _0x2e3077[_0x51237f].roundId;
      _0x279d91 = _0x2e3077[_0x51237f - 1].roundId;
      _0x16d860 = _0x2e3077[_0x51237f - 1].awardState;
      $.taskList = $.plantBeanIndexResult.data.taskList;
      _0x2830b4 = "【京东昵称】" + $.plantBeanIndexResult.data.plantUserInfo.plantNickName;
      _0x1d22d0 += "【上期时间】" + _0x2e3077[_0x51237f - 1].dateDesc.replace("上期 ", "") + "\n";
      _0x1d22d0 += "【上期成长值】" + _0x2e3077[_0x51237f - 1].growth + "\n";
      await _0x1f4a38();
      await _0xe099b7();
      await _0x141981();
      await _0x35f6ae();
      await _0x3c5170();
      await _0x3a713a();
      await _0x591455();
    } else console.log("种豆得豆-初始失败:  " + JSON.stringify($.plantBeanIndexResult));
  } catch (_0x480080) {
    $.logErr(_0x480080);
    const _0x322106 = "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n任务执行异常，请检查执行日志 ‼️‼️";
    $.msg($.name, "", "" + _0x322106);
  }
}
async function _0x3c5170() {
  console.log("【上轮京豆】" + (_0x16d860 === "4" ? "采摘中" : _0x16d860 === "5" ? "可收获了" : "已领取"));
  if (_0x16d860 === "4") _0x1d22d0 += "【上期状态】" + _0x2e3077[_0x51237f - 1].tipBeanEndTitle + "\n";else {
    if (_0x16d860 === "5") {
      await _0x391e27();
      console.log("开始领取京豆");
      if ($.getReward && $.getReward.code === "0") console.log("京豆领取成功"), _0x1d22d0 += "【上期兑换京豆】" + $.getReward.data.awardBean + "个\n", $.msg($.name, _0x2830b4, _0x1d22d0), _0x669367 += "京东账号" + $.index + "🆔 " + $.nickName + "\n" + _0x1d22d0 + ($.index !== _0x413aa1.length ? "\n\n" : "");else {
        console.log("$.getReward 异常：" + JSON.stringify($.getReward));
      }
    } else _0x16d860 === "6" && (_0x1d22d0 += "【上期兑换京豆】" + _0x2e3077[_0x51237f - 1].awardBeans + "个\n");
  }
  _0x2e3077[_0x51237f].dateDesc.indexOf("本期 ") > -1 && (_0x2e3077[_0x51237f].dateDesc = _0x2e3077[_0x51237f].dateDesc.substr(_0x2e3077[_0x51237f].dateDesc.indexOf("本期 ") + 3, _0x2e3077[_0x51237f].dateDesc.length));
  _0x1d22d0 += "【本期时间】" + _0x2e3077[_0x51237f].dateDesc + "\n";
  _0x1d22d0 += "【本期成长值】" + _0x2e3077[_0x51237f].growth + "\n";
}
async function _0x35f6ae() {
  await _0x1bd723();
  if ($.plantBeanIndexResult && $.plantBeanIndexResult.code === "0") {
    const _0x1a7318 = $.plantBeanIndexResult.data?.["roundList"][_0x51237f];
    if (_0x1a7318?.["roundState"] === "2") {
      if (_0x1a7318.bubbleInfos && _0x1a7318.bubbleInfos.length) console.log("开始收取营养液");
      for (let _0x40bdc7 of _0x1a7318.bubbleInfos) {
        console.log("收取-" + _0x40bdc7.name + "-的营养液");
        await _0x288dfe(_0x1a7318.roundId, _0x40bdc7.nutrientsType);
        console.log("收取营养液结果:" + JSON.stringify($.cultureBeanRes));
      }
    }
  } else console.log("plantBeanIndexResult:" + JSON.stringify($.plantBeanIndexResult));
}
async function _0x141981() {
  await _0x4a1953();
  if ($.stealFriendList && $.stealFriendList.code === "0") {
    if ($.stealFriendList.data && $.stealFriendList.data.tips) {
      console.log("\n\n今日偷取好友营养液已达上限\n\n");
      return;
    }
    if ($.stealFriendList.data && $.stealFriendList.data.friendInfoList && $.stealFriendList.data.friendInfoList.length > 0) {
      let _0xab7b35 = new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
      for (let _0x107881 of $.stealFriendList.data.friendInfoList) {
        if (new Date(_0xab7b35).getHours() === 20) _0x107881.nutrCount >= 2 && (console.log("可以偷的好友的信息paradiseUuid::" + JSON.stringify(_0x107881.paradiseUuid)), await _0x205860(_0x107881.paradiseUuid), console.log("偷取好友营养液情况:" + JSON.stringify($.stealFriendRes)), $.stealFriendRes && $.stealFriendRes.code === "0" && console.log("偷取好友营养液成功"));else {
          if (_0x107881.nutrCount >= 3) {
            console.log("可以偷的好友的信息paradiseUuid::" + JSON.stringify(_0x107881.paradiseUuid));
            await _0x205860(_0x107881.paradiseUuid);
            console.log("偷取好友营养液情况:" + JSON.stringify($.stealFriendRes));
            if ($.stealFriendRes && $.stealFriendRes.data.collectResult == "1") console.log("偷取好友营养液成功");else {
              if ($.stealFriendRes && $.stealFriendRes.data.collectResult == "3") {
                break;
              }
            }
          }
        }
        await $.wait(1000);
      }
    }
  } else console.log("$.stealFriendList 异常： " + JSON.stringify($.stealFriendList));
}
async function _0xc8184e() {
  await _0x1a622d();
  if ($.plantEggLotteryRes && $.plantEggLotteryRes.code === "0") {
    if ($.plantEggLotteryRes.data.restLotteryNum > 0) {
      const _0x46fd8b = new Array($.plantEggLotteryRes.data.restLotteryNum).fill("");
      console.log("目前共有" + _0x46fd8b.length + "次扭蛋的机会");
      for (let _0x516033 = 0; _0x516033 < _0x46fd8b.length; _0x516033++) {
        console.log("开始第" + (_0x516033 + 1) + "次扭蛋");
        await _0x3adc61();
        console.log("天天扭蛋成功：" + JSON.stringify($.plantEggDoLotteryResult));
      }
    } else console.log("暂无扭蛋机会");
  } else console.log("查询天天扭蛋的机会失败" + JSON.stringify($.plantEggLotteryRes));
}
async function _0xe099b7() {
  if ($.taskList && $.taskList.length > 0) for (let _0x434fd1 of $.taskList) {
    if (_0x434fd1.isFinished === 1) {
      console.log(_0x434fd1.taskName + " 任务已完成\n");
      continue;
    } else switch (_0x434fd1.taskType) {
      case 92:
        await _0x4fc8be();
        continue;
      case 57:
        await _0x2b9f3d("https://m.jingxi.com/jxbfd/user/DoubleSignDeal?g_ty=h5&g_tk=&appCode=msd1188198&__t=1657108409440&dwEnv=7&strDeviceId=a3b4e844090b28d5c38e7529af8115172079be4d&strZone=jxbfd&bizCode=jxbfd&source=jxbfd&_cfd_t=1657108409190&_stk=__t%2C_cfd_t%2CbizCode%2CdwEnv%2Csource%2CstrDeviceId%2CstrZone&_ste=1&h5st=20220706195330228%3B1980457211661562%3B10032%3Btk02w78551ad830nuMcGB4Qsv9QxapLP7gZdOCYE5PVV%2Bna%2Bb4KU21drJq64oP82965Vdc1tGqVU%2Flp7ydcZ5XgH0Feh%3B241b6f1d21bf8e41f380a5dd29a7bac2a6f1f65a0c7ef1b1f751eaea4c40dd9c%3B3.0%3B1657108410228&sceneval=2"), await $.wait(2000), await _0x2b9f3d("https://wq.jd.com/jxjdsignin/SignedInfo?channel=jx_zdddsq&_t=1658021925021&h5st=20220717093845024%3B5548444396555217%3B0f6ed%3Btk02w9b851b9c18nin7CZjR7vNSlwRexAOGWbYAbl85d9DiQJ1SufW8ZQEQ%2FSygreq626CVRO2gT8DwUUTLBXGyK6wam%3B7eb86560860f8f60ad3b679c34f89aacf891b5a85580efd0a30c355537bfec54%3B3.0%3B1658021925024&_stk=_t%2Cchannel&_=1658021925027&sceneval=2&g_login_type=1&g_ty=ajax&appCode=msc588d6d5"), await $.wait(1000), await _0x2b9f3d("https://wq.jd.com/jxjdsignin/IssueReward?channel=jx_zdddsq&_t=1658021926276&h5st=20220717093846279%3B5548444396555217%3B0f6ed%3Btk02w9b851b9c18nin7CZjR7vNSlwRexAOGWbYAbl85d9DiQJ1SufW8ZQEQ%2FSygreq626CVRO2gT8DwUUTLBXGyK6wam%3Be2d7b6810b3bd1b9d9692d354ecbb582e69afc64df19bd8d6c14632b1a65660c%3B3.0%3B1658021926279&_stk=_t%2Cchannel&sceneval=2&g_login_type=1&g_ty=ajax&appCode=msc588d6d5"), await $.wait(1000);
        continue;
      case 96:
        continue;
      case 94:
        continue;
      case 3:
        console.log("开始做 " + _0x434fd1.taskName + "任务");
        let _0x1ebf79 = _0x434fd1.totalNum - _0x434fd1.gainedNum;
        if (_0x1ebf79 === 0) continue;
        await _0x4df15b();
        const {
          data: _0x3159eb
        } = $.shopTaskListRes;
        let _0x2aa688 = [],
          _0x2bb6f5 = [],
          _0x2c43e9 = [];
        const {
          goodShopList: _0x57daf6,
          moreShopList: _0x3346f5
        } = _0x3159eb;
        if (_0x57daf6) for (let _0x139309 of _0x57daf6) {
          _0x139309.taskState === "2" && _0x2aa688.push(_0x139309);
        }
        if (_0x3346f5) {
          for (let _0x2e1196 of _0x3346f5) {
            _0x2e1196.taskState === "2" && _0x2bb6f5.push(_0x2e1196);
          }
        }
        _0x2c43e9 = _0x2aa688.concat(_0x2bb6f5);
        for (let _0x24bada of _0x2c43e9) {
          const {
              shopId: _0x457fbc,
              shopTaskId: _0x1f9ed2
            } = _0x24bada,
            _0x47986d = {
              "monitor_refer": "plant_shopNutrientsTask",
              "shopId": _0x457fbc,
              "shopTaskId": _0x1f9ed2
            },
            _0xc2f8eb = await _0x32f5ab("shopNutrientsTask", _0x47986d);
          console.log("shopRes结果:" + JSON.stringify(_0xc2f8eb));
          if (_0xc2f8eb && _0xc2f8eb.code === "0") {
            _0xc2f8eb.data && _0xc2f8eb.data.nutrState && _0xc2f8eb.data.nutrState === "1" && _0x1ebf79--;
          }
          if (_0x1ebf79 <= 0) {
            console.log(_0x434fd1.taskName + "任务已做完\n");
            break;
          }
        }
        continue;
      case 5:
        console.log("开始做 " + _0x434fd1.taskName + "任务");
        let _0x4ef6a1 = _0x434fd1.totalNum - _0x434fd1.gainedNum;
        if (_0x4ef6a1 === 0) continue;
        await _0x4947f5();
        let _0x59992e = [],
          _0x1f7f32 = [];
        const {
          productInfoList: _0x2d2106
        } = $.productTaskList.data;
        for (let _0x4f44e6 = 0; _0x4f44e6 < _0x2d2106.length; _0x4f44e6++) {
          for (let _0x352282 = 0; _0x352282 < _0x2d2106[_0x4f44e6].length; _0x352282++) {
            _0x59992e.push(_0x2d2106[_0x4f44e6][_0x352282]);
          }
        }
        for (let _0x4b87b4 of _0x59992e) {
          _0x4b87b4.taskState === "2" && _0x1f7f32.push(_0x4b87b4);
        }
        for (let _0x5f28f of _0x1f7f32) {
          const {
              skuId: _0x277841,
              productTaskId: _0x155e67
            } = _0x5f28f,
            _0x279d28 = {
              "monitor_refer": "plant_productNutrientsTask",
              "productTaskId": _0x155e67,
              "skuId": _0x277841
            },
            _0x109ff6 = await _0x32f5ab("productNutrientsTask", _0x279d28);
          _0x109ff6 && _0x109ff6.code === "0" && _0x109ff6.data && _0x109ff6.data.nutrState && _0x109ff6.data.nutrState === "1" && _0x4ef6a1--;
          if (_0x4ef6a1 <= 0) {
            console.log(_0x434fd1.taskName + "任务已做完\n");
            break;
          }
        }
        continue;
      case 10:
        console.log("开始做 " + _0x434fd1.taskName + "任务");
        let _0x5ddf34 = _0x434fd1.totalNum - _0x434fd1.gainedNum;
        if (_0x5ddf34 === 0) continue;
        await _0x3158b0();
        let _0x12ecdc = [],
          _0x2e65a7 = [],
          _0x1c8abe = [];
        const {
          goodChannelList: _0x2bcc59,
          normalChannelList: _0x3ce68e
        } = $.plantChannelTaskList.data;
        for (let _0x7416cb of _0x2bcc59) {
          _0x7416cb.taskState === "2" && _0x12ecdc.push(_0x7416cb);
        }
        for (let _0x2663f4 of _0x3ce68e) {
          _0x2663f4.taskState === "2" && _0x2e65a7.push(_0x2663f4);
        }
        _0x1c8abe = _0x12ecdc.concat(_0x2e65a7);
        for (let _0x547d8b of _0x1c8abe) {
          const {
              channelId: _0x227cb8,
              channelTaskId: _0x3433ec
            } = _0x547d8b,
            _0x424ba7 = {
              "channelId": _0x227cb8,
              "channelTaskId": _0x3433ec
            },
            _0x3d5c03 = await _0x32f5ab("plantChannelNutrientsTask", _0x424ba7);
          console.log("channelRes结果:" + JSON.stringify(_0x3d5c03));
          if (_0x3d5c03 && _0x3d5c03.code === "0") {
            if (_0x3d5c03.data && _0x3d5c03.data.nutrState && _0x3d5c03.data.nutrState === "1") {
              _0x5ddf34--;
            }
          }
          if (_0x5ddf34 <= 0) {
            console.log(_0x434fd1.taskName + "任务已做完\n");
            break;
          }
        }
        continue;
      default:
        console.log("\n开始做 " + _0x434fd1.taskName + "任务"), await _0x335d6a(_0x434fd1.taskType), console.log("做 " + _0x434fd1.taskName + "任务结果:" + JSON.stringify($.receiveNutrientsTaskRes) + "\n");
        continue;
    }
  }
}
function _0x3a713a() {
  return new Promise(async _0x48d816 => {
    await _0x1bd723();
    $.taskList = $.plantBeanIndexResult.data?.["taskList"];
    if ($.taskList && $.taskList.length > 0) {
      console.log("     任务   进度");
      for (let _0x3bf888 of $.taskList) {
        console.log("[" + _0x3bf888.taskName + "]  " + _0x3bf888.gainedNum + "/" + _0x3bf888.totalNum + "   " + _0x3bf888.isFinished);
      }
    }
    _0x48d816();
  });
}
function _0x21912a() {
  $.log("\n" + _0x1d22d0 + "\n");
  _0x292b29 = $.getdata("jdPlantBeanNotify") ? $.getdata("jdPlantBeanNotify") : _0x292b29;
  (!_0x292b29 || _0x292b29 === "false") && $.msg($.name, _0x2830b4, _0x1d22d0);
}
async function _0x4fc8be() {
  await _0x43a11e();
  await $.wait(500);
  await _0x52fb95("gotConfigDataForBrand");
  await $.wait(500);
  await _0x52fb95("initForFarm");
  await $.wait(500);
  await _0x52fb95("taskInitForFarm");
  await $.wait(500);
  await _0x52fb95("farmMarkStatus");
  await $.wait(500);
  await _0x52fb95("initForFarm");
  await $.wait(500);
}
async function _0x43a11e() {
  const _0x52b217 = {
    "monitor_refer": "plant_receiveNutrientsTask",
    "monitor_source": "plant_app_plant_index",
    "awardType": "92",
    "version": "9.2.4.2"
  };
  await _0x14e751("receiveNutrientsTask", _0x52b217);
}
async function _0x52fb95(_0x445ae8) {
  let _0x320f27 = {
    "version": 17,
    "channel": 1,
    "babelChannel": "45"
  };
  return _0x445ae8 == "gotConfigDataForBrand" && (_0x320f27.type = "json", _0x320f27.k = "farmShareConfig"), new Promise(async _0x37ab16 => {
    const _0x5f569f = {
      "url": _0x1222d7 + "?functionId=" + _0x445ae8 + "&body=" + encodeURIComponent(JSON.stringify(_0x320f27)) + "&appid=wh5",
      "headers": {
        "Cookie": _0x378924,
        "Host": "api.m.jd.com",
        "Accept": "*/*",
        "Connection": "keep-alive",
        "User-Agent": $.UA,
        "Accept-Encoding": "gzip, deflate, br",
        "Referer": "https://h5.m.jd.com"
      },
      "timeout": 20000
    };
    $.dget(_0x5f569f, (_0x2bc5fd, _0x3f8279, _0x41bfdf) => {
      try {
        _0x2bc5fd && (console.log("\n API查询请求失败 ‼️‼️"), $.logErr(_0x2bc5fd));
      } catch (_0x5798e7) {
        $.logErr(_0x5798e7, _0x3f8279);
      } finally {
        _0x37ab16();
      }
    });
  });
}
function _0x2b9f3d(_0x2f5f35) {
  let _0x28ea06 = {
    "url": _0x2f5f35,
    "headers": {
      "accept": "application/json",
      "referer": "https://st.jingxi.com/",
      "User-Agent": "jdpingou;iPhone;4.13.0;14.4.2;${randomString(40)};network/wifi;model/iPhone10,2;appBuild/100609;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/1;hasOCPay/0;supportBestPay/0;session/${Math.random * 98 + 1};pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
      "Cookie": "cid=4;" + _0x378924
    }
  };
  return new Promise(async _0x2953ae => {
    $.dget(_0x28ea06, (_0x39e6a3, _0x5ea9c4, _0x25c621) => {
      try {
        if (_0x39e6a3) {
          console.log("" + JSON.stringify(_0x39e6a3));
          console.log($.name + " API请求失败，请检查网路重试");
        } else {
          if (_0x25c621) {}
        }
      } catch (_0x410b1b) {
        $.logErr(_0x410b1b, _0x5ea9c4);
      } finally {
        _0x2953ae(_0x25c621);
      }
    });
    _0x2953ae();
  });
}
function _0x36a2d8(_0x6d1e9e) {
  let _0x20fbda = {
    "url": _0x6d1e9e,
    "headers": {
      "Accept": "application/json",
      "Referer": "https://wqs.jd.com/",
      "User-Agent": _0xb0df3a(),
      "Cookie": _0x378924
    }
  };
  return new Promise(async _0x3a994a => {
    $.dget(_0x20fbda, (_0x18ac0c, _0x23baff, _0x32c158) => {
      try {
        if (_0x18ac0c) console.log("" + JSON.stringify(_0x18ac0c)), console.log("tjdoublesign 请求失败，请检查网路重试");else {
          if (_0x32c158) {}
        }
      } catch (_0x51d077) {
        $.logErr(_0x51d077, _0x23baff);
      } finally {
        _0x3a994a(_0x32c158);
      }
    });
  });
}
async function _0x391e27() {
  const _0x4f9a14 = {
    "roundId": _0x279d91
  };
  $.getReward = await _0x14e751("receivedBean", _0x4f9a14);
}
async function _0x288dfe(_0xf274d5, _0xbb27f1) {
  let _0x27551f = {
    "roundId": _0xf274d5,
    "nutrientsType": _0xbb27f1
  };
  $.cultureBeanRes = await _0x14e751("cultureBean", _0x27551f);
}
async function _0x4a1953() {
  const _0x19d383 = {
    "pageNum": "1"
  };
  $.stealFriendList = await _0x539914("plantFriendList", _0x19d383);
}
async function _0x205860(_0x1ae30d) {
  console.log("开始偷好友");
  const _0x1e700d = {
    "paradiseUuid": _0x1ae30d,
    "roundId": _0x1fad4e
  };
  $.stealFriendRes = await _0x14e751("collectUserNutr", _0x1e700d);
}
async function _0x1f4a38() {
  $.receiveNutrientsRes = await _0x14e751("receiveNutrients", {
    "roundId": _0x1fad4e,
    "monitor_refer": "plant_receiveNutrients"
  });
  console.log("定时领取营养液结果:" + JSON.stringify($.receiveNutrientsRes));
}
async function _0x3adc61() {
  $.plantEggDoLotteryResult = await _0x32f5ab("plantEggDoLottery");
}
async function _0x1a622d() {
  $.plantEggLotteryRes = await _0x32f5ab("plantEggLotteryIndex");
}
async function _0x4947f5() {
  $.productTaskList = await _0x32f5ab(functionId, {
    "monitor_refer": "plant_productTaskList"
  });
}
async function _0x3158b0() {
  $.plantChannelTaskList = await _0x539914("plantChannelTaskList");
}
async function _0x4df15b() {
  $.shopTaskListRes = await _0x539914("shopTaskList", {
    "monitor_refer": "plant_receiveNutrients"
  });
}
async function _0x335d6a(_0x557b08) {
  const _0x46c9ea = {
    "monitor_refer": "receiveNutrientsTask",
    "awardType": "" + _0x557b08
  };
  $.receiveNutrientsTaskRes = await _0x32f5ab("receiveNutrientsTask", _0x46c9ea);
}
async function _0x591455() {
  $.shareSupportList = await _0x32f5ab("plantShareSupportList", {
    "roundId": ""
  });
  if ($.shareSupportList && $.shareSupportList.code === "0") {
    const {
        data: _0x5d1099
      } = $.shareSupportList,
      _0x382e6f = parseInt((Date.now() + 28800000) / 86400000) * 86400000 - 28800000,
      _0x32f7d1 = parseInt((Date.now() + 28800000) / 86400000) * 86400000 - 28800000 + 24 * 60 * 60 * 1000;
    let _0x5aeb3e = [];
    _0x5d1099.map(_0x3cde4a => {
      _0x382e6f <= _0x3cde4a.createTime && _0x3cde4a.createTime < _0x32f7d1 && _0x5aeb3e.push(_0x3cde4a);
    });
    _0x1d22d0 += "【助力您的好友】共" + _0x5aeb3e.length + "人";
  } else console.log("异常情况：" + JSON.stringify($.shareSupportList));
}
async function _0x5bb5e1(_0x5d828e) {
  const _0x4cf0ad = {
    "plantUuid": _0x5d828e
  };
  $.helpResult = await _0x14e751("plantBeanIndex", _0x4cf0ad);
}
async function _0x1bd723() {
  $.plantBeanIndexResult = await _0x14e751("plantBeanIndex");
}
function _0x3193ce() {
  return new Promise(_0x26ba8a => {
    console.log("开始获取配置文件\n");
    _0x213604 = $.isNode() ? require("./sendNotify") : "";
    const _0x34d8b0 = $.isNode() ? require("./jdCookie.js") : "";
    if ($.isNode()) {
      Object.keys(_0x34d8b0).forEach(_0x2809a5 => {
        _0x34d8b0[_0x2809a5] && _0x413aa1.push(_0x34d8b0[_0x2809a5]);
      });
      if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
    } else _0x413aa1 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonFormat($.getdata("CookiesJD") || "[]").map(_0x46e294 => _0x46e294.cookie)].filter(_0x57a769 => !!_0x57a769);
    _0x26ba8a();
  });
}
async function _0x539914(_0x570372, _0x58fb00 = {}) {
  return new Promise(async _0x28531d => {
    const _0x5c7b72 = {
      "url": _0x1222d7 + "?functionId=" + _0x570372 + "&body=" + encodeURIComponent(JSON.stringify(_0x58fb00)) + "&appid=signed_wh5&client=apple&clientVersion=9.3.2",
      "headers": {
        "Accept": "*/*",
        "Origin": "https://h5.m.jd.com",
        "Accept-Encoding": "gzip,deflate,br",
        "User-Agent": $.UA,
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Referer": "https://h5.m.jd.com",
        "x-requested-with": "com.jingdong.app.mall",
        "Cookie": _0x378924
      },
      "timeout": 10000
    };
    $.dget(_0x5c7b72, (_0x4021d3, _0x1ed138, _0x3f7cf3) => {
      try {
        _0x4021d3 ? (console.log(_0x570372 + "\n请求失败 ‼️‼️"), $.logErr(_0x4021d3)) : _0x3f7cf3 = JSON.parse(_0x3f7cf3);
      } catch (_0x85c97a) {
        $.logErr(_0x85c97a, _0x1ed138);
      } finally {
        _0x28531d(_0x3f7cf3);
      }
    });
  });
}
async function _0x32f5ab(_0x22ab4b, _0x2cd5ec = {}) {
  return new Promise(async _0x36d8e1 => {
    let _0x58b138 = "";
    if (!_0x478ecd[_0x22ab4b]) _0x58b138 = _0x1222d7 + "?functionId=" + _0x22ab4b + "&body=" + encodeURIComponent(JSON.stringify(_0x2cd5ec)) + "&appid=ld&client=apple&area=19_1601_50258_51885&build=167490&clientVersion=9.3.2";else {
      !_0x2cd5ec.version && (_0x2cd5ec.version = "9.2.4.3");
      _0x2cd5ec.monitor_source = "plant_app_plant_index";
      _0x478ecd[_0x22ab4b] == "shopNutrientsTask" && (headers.referer = "https://plantearth.m.jd.com/", headers["x-requested-with"] = "https://plantearth.m.jd.com/");
      await $.wait(2000);
      let _0x1483ff = {
          "appId": _0x478ecd[_0x22ab4b],
          "fn": _0x22ab4b,
          "body": _0x2cd5ec,
          "apid": "signed_wh5",
          "ver": $.UA.split(";")[2],
          "cl": "android",
          "user": $.UserName,
          "ua": $.UA
        },
        _0x238a12 = await _0x2fe271.getbody(_0x1483ff);
      _0x58b138 = _0x1222d7 + "?" + _0x238a12;
    }
    const _0x1d48ad = {
      "url": _0x58b138,
      "headers": {
        "Accept": "*/*",
        "Accept-Encoding": "gzip,deflate,br",
        "User-Agent": $.UA,
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Referer": "https://plantearth.m.jd.com/plantBean/index?source=lingjingdouqiandaorili&sid=4638f2f389065566747fbdb06702d79w&un_area=4_133_58530_0",
        "Cookie": _0x378924
      },
      "timeout": 20000
    };
    $.dget(_0x1d48ad, (_0x4ff313, _0xd03df4, _0x59766d) => {
      try {
        _0x4ff313 ? (console.log("\n种豆得豆: API查询请求失败 ‼️‼️"), console.log(_0x4ff313), $.logErr(_0x4ff313)) : _0x59766d = JSON.parse(_0x59766d);
      } catch (_0x151510) {
        $.logErr(_0x151510, _0xd03df4);
      } finally {
        _0x36d8e1(_0x59766d);
      }
    });
  });
}
async function _0x14e751(_0x5a590d, _0x13c075 = {}) {
  return new Promise(async _0x54260d => {
    let _0x24b325 = "";
    if (!_0x478ecd[_0x5a590d]) _0x24b325 = _0x1222d7 + "?functionId=" + _0x5a590d + "&body=" + encodeURIComponent(JSON.stringify(_0x13c075)) + "&appid=ld&client=apple&area=19_1601_50258_51885&build=167490&clientVersion=9.3.2";else {
      _0x13c075.version = "9.2.4.3";
      _0x13c075.monitor_source = "plant_app_plant_index";
      !_0x13c075.monitor_refer && (_0x13c075.monitor_refer = "");
      let _0x505248 = {
          "appId": _0x478ecd[_0x5a590d],
          "fn": _0x5a590d,
          "body": _0x13c075,
          "apid": "signed_wh5",
          "ver": $.UA.split(";")[2],
          "cl": "android",
          "user": $.UserName,
          "ua": $.UA
        },
        _0x38f226 = await _0x2fe271.getbody(_0x505248);
      _0x24b325 = _0x1222d7 + "?" + _0x38f226;
    }
    await $.wait(2000);
    let _0x538d0a = {
      "url": _0x24b325,
      "headers": {
        "Accept": "*/*",
        "Accept-Encoding": "gzip,deflate,br",
        "User-Agent": $.UA,
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Referer": "https://plantearth.m.jd.com/plantBean/index",
        "Cookie": _0x378924
      },
      "timeout": 10000
    };
    $.dget(_0x538d0a, async (_0x1f3a31, _0x39609d, _0x8967c8) => {
      try {
        _0x1f3a31 ? (console.log("\n种豆得豆: API查询请求失败 ‼️‼️"), (console.log("function_id:" + _0x5a590d), $.logErr(_0x1f3a31))) : _0x8967c8.indexOf("data") > -1 ? _0x8967c8 = JSON.parse(_0x8967c8) : (_0x8967c8 = JSON.parse(_0x8967c8), console.log(_0x8967c8.errorMessage));
      } catch (_0x59161e) {
        $.logErr(_0x59161e, _0x39609d);
      } finally {
        _0x54260d(_0x8967c8);
      }
    });
  });
}
function _0x487408() {
  return new Promise(_0x53a548 => {
    const _0x211bef = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": {
        "Cookie": _0x378924,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.dget(_0x211bef, (_0x541044, _0x228b2f, _0x3c0127) => {
      try {
        if (_0x3c0127) {
          _0x3c0127 = JSON.parse(_0x3c0127);
          if (_0x3c0127.islogin === "1") {} else _0x3c0127.islogin === "0" && ($.isLogin = false);
        }
      } catch (_0x9dc6d8) {
        console.log(_0x9dc6d8);
      } finally {
        _0x53a548();
      }
    });
  });
}
function _0x4454f6(_0x315fc0, _0x198952) {
  return _0x198952.version = "9.2.4.2", _0x198952.monitor_source = "plant_app_plant_index", !_0x198952.monitor_refer && (_0x198952.monitor_refer = ""), {
    "url": _0x1222d7,
    "body": "functionId=" + _0x315fc0 + "&body=" + encodeURIComponent(JSON.stringify(_0x198952)) + "&appid=ld&client=apple&area=19_1601_50258_51885&build=167490&clientVersion=9.3.2",
    "headers": {
      "Cookie": _0x378924,
      "Accept": "*/*",
      "User-Agent": $.UA,
      "Accept-Language": "zh-Hans-CN;q=1,en-CN;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "timeout": 20000
  };
}
function _0x18d124(_0x503897, _0x1e9c1b) {
  const _0x535321 = new RegExp("(^|&)" + _0x1e9c1b + "=([^&]*)(&|$)", "i"),
    _0x3c6bb7 = _0x503897.match(_0x535321);
  if (_0x3c6bb7 != null) return unescape(_0x3c6bb7[2]);
  return null;
}
function _0xb0df3a() {
  getstr = function (_0x4d46cd) {
    let _0x26b29d = "",
      _0x2433af = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let _0x4c9e9c = 0; _0x4c9e9c < _0x4d46cd; _0x4c9e9c++) {
      let _0x37238f = Math.round(Math.random() * (_0x2433af.length - 1));
      _0x26b29d += _0x2433af.substring(_0x37238f, _0x37238f + 1);
    }
    return _0x26b29d;
  };
  let _0x5bcb08 = Buffer.from(getstr(16), "utf8").toString("base64"),
    _0x15ef63 = getstr(48);
  return ep = encodeURIComponent(JSON.stringify({
    "hdid": "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
    "ts": Date.now(),
    "ridx": -1,
    "cipher": {
      "sv": "EG==",
      "ad": _0x5bcb08,
      "od": _0x15ef63,
      "ov": "Ctq=",
      "ud": _0x5bcb08
    },
    "ciphertype": 5,
    "version": "1.2.0",
    "appname": "com.jingdong.app.mall"
  })), "jdapp;android;11.2.0;;;appBuild/98413;ef/1;ep/" + ep + ";Mozilla/5.0 (Linux; Android 9; LYA-AL00 Build/HUAWEILYA-AL00L; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046033 Mobile Safari/537.36";
}
function _0x258266(_0x30cc9b) {
  if (typeof _0x30cc9b == "string") try {
    return JSON.parse(_0x30cc9b);
  } catch (_0x544e3b) {
    return console.log(_0x544e3b), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
  }
}
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
