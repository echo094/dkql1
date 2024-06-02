/*
东东农场助力
20 2,6,11 * * * jd_farm_help.js
updatetime:2023/10/29
变量
epxort FRUIT_DELAY='1000',设置等待时间(毫秒)，默认请求5次接口等待5秒（5000）
export FRUITCODES='xxx&xxx' 指定助力码助力，多个用&分割，不指定则自动搜集任务助力码
*/

const $ = new Env('东东农场-助力');
let bdy_0x17d864 = [],
  bdy_0x5bd15d = "",
  bdy_0x1e8564,
  bdy_0x39e533 = [],
  bdy_0x1d4667 = [],
  bdy_0x5654bd = "",
  bdy_0x22f97d = "",
  bdy_0x4179f4 = "",
  bdy_0x4dce21 = [],
  bdy_0x4acef3 = {},
  bdy_0x2fb742 = false;
const bdy_0x3dbd8e = require("fs"),
  bdy_0x5aa1ee = "https://api.m.jd.com/client.action",
  bdy_0x1a7748 = process.env.FRUIT_DELAY ? process.env.FRUIT_DELAY * 1 : 5000,
  bdy_0x249c8b = require("./function/dylany");
$.reqnum = 1;
!(async () => {
  await bdy_0xe523d1();
  if (!bdy_0x17d864[0]) {
    const _0x430a87 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x430a87);
    return;
  }
  $.log("\n当前版本：2024/4/29");
  $.log("问题建议：https://t.me/dylan_jdpro\n");
  $.log("\n环境变量：");
  $.log("export DY_PROXY='api_url' 可使用代理api");
  $.log("export FRUITCODES = 'xxx&xxx' 指定助力码助力，多个用&分割，不指定则自动搜集任务助力码");
  $.log("epxort FRUIT_DELAY='1000',设置等待时间(毫秒)，默认请求5次接口等待5秒（5000）\n\n");
  for (let _0x2a9007 = 0; _0x2a9007 < bdy_0x17d864.length; _0x2a9007++) {
    if (bdy_0x17d864[_0x2a9007]) {
      bdy_0x5bd15d = bdy_0x17d864[_0x2a9007];
      $.UserName = decodeURIComponent(bdy_0x5bd15d.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x5bd15d.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x2a9007 + 1;
      $.isLogin = true;
      $.nickName = "";
      await bdy_0xa5cdb1();
      console.log("\n开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n");
      if (!$.isLogin) {
        const _0x1f8331 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x1f8331);
        $.isNode() && (await bdy_0x1e8564.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      bdy_0x22f97d = "";
      bdy_0x4179f4 = "";
      bdy_0x4acef3 = {};
      $.UA = require("./USER_AGENTS").UARAM();
      await bdy_0x41a35a();
      if (bdy_0x39e533.length == 0) {
        $.log("没有助力码,先执行农场任务在跑助力");
        return;
      }
      await bdy_0x39841d();
      await $.wait(2000);
    }
  }
})().catch(_0x5c4db0 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x5c4db0 + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0x39841d() {
  bdy_0x4179f4 = "【京东账号" + $.index + "🆔】" + ($.nickName || $.UserName);
  try {
    await bdy_0x4d33c1("", 1);
    if ($.farmInfo.farmUserPro) {
      await bdy_0x34705a();
      await bdy_0x178d6a();
    } else {
      JSON.stringify($.farmInfo).includes("winTexts") ? (console.log("初始化农场数据异常, 请确认此账号是否开通农场"), bdy_0x22f97d = "【数据异常】请确认此账号是否开通农场\n") : (console.log("初始化农场数据异常, 请登录京东 app查看农场0元水果功能是否正常,农场初始化数据: " + JSON.stringify($.farmInfo)), bdy_0x22f97d = "【数据异常】请手动登录京东app查看此账号" + $.name + "是否正常");
    }
  } catch (_0x1a1802) {
    console.log("任务执行异常，请检查执行日志 ‼️‼️");
    $.logErr(_0x1a1802);
  }
  await bdy_0xdbbe69();
}
async function bdy_0x178d6a() {
  await bdy_0x281e60();
  await bdy_0x4e3ae6();
}
async function bdy_0x4e3ae6() {
  console.log("\n开始天天抽奖助力...");
  for (let _0xd9e9c3 of bdy_0x39e533) {
    if (_0xd9e9c3 === $.farmInfo.farmUserPro.shareCode) {
      console.log("跳过自己\n");
      continue;
    }
    await bdy_0x3dfcf0(_0xd9e9c3);
    await $.wait(1000);
    if ($.lotteryMasterHelpRes.helpResult === undefined) {
      break;
    }
    if ($.lotteryMasterHelpRes.helpResult.code === "0") {
      console.log("助力" + $.lotteryMasterHelpRes.helpResult.masterUserInfo.nickName + "成功\n");
    } else {
      if ($.lotteryMasterHelpRes.helpResult.code === "11") {
        console.log("不要重复助力" + $.lotteryMasterHelpRes.helpResult.masterUserInfo.nickName + "\n");
      } else {
        if ($.lotteryMasterHelpRes.helpResult.code === "13") {
          console.log("助力" + $.lotteryMasterHelpRes.helpResult.masterUserInfo.nickName + "失败,助力次数耗尽\n");
          break;
        }
      }
    }
  }
}
async function bdy_0x34705a() {
  console.log("\n开始助力好友...");
  let _0x1bc307 = 0,
    _0x43f814 = 3,
    _0x32944d = "",
    _0x17af42 = 0;
  for (let _0x361cf9 of bdy_0x39e533) {
    console.log("去助力: " + _0x361cf9);
    if (!_0x361cf9) {
      continue;
    }
    if (_0x17af42 > 2) {
      break;
    }
    if (_0x361cf9 === $.farmInfo.farmUserPro.shareCode) {
      console.log("不能为自己助力哦，跳过\n");
      continue;
    }
    await bdy_0x5599c4(_0x361cf9);
    await $.wait(2000);
    if ($.helpResult.code === "0") {
      if ($.helpResult.helpResult.code === "0") {
        _0x1bc307 += $.helpResult.helpResult.salveHelpAddWater;
        console.log("【助力结果】: 助力成功");
        console.log("助力获得" + $.helpResult.helpResult.salveHelpAddWater + "g水滴");
        _0x32944d += ($.helpResult.helpResult.masterUserInfo.nickName || "匿名用户") + ",";
      } else {
        if ($.helpResult.helpResult.code === "8") {
          console.log("【助力结果】: 助力失败，今天助力次数已耗尽");
        } else {
          if ($.helpResult.helpResult.code === "9") {
            console.log("【助力结果】: 已经助力过TA了");
          } else {
            $.helpResult.helpResult.code === "10" ? (console.log("【助力结果】: 对方已满助力"), bdy_0x4dce21.push(_0x361cf9)) : console.log("助力其他情况：" + JSON.stringify($.helpResult.helpResult));
          }
        }
      }
      console.log("【助力次数还剩】" + $.helpResult.helpResult.remainTimes + "次\n");
      _0x43f814 = $.helpResult.helpResult.remainTimes;
      if ($.helpResult.helpResult.remainTimes === 0) {
        console.log("您当前助力次数已耗尽，跳出助力");
        break;
      }
    } else {
      console.log("助力失败::" + JSON.stringify($.helpResult));
      _0x17af42++;
    }
  }
  if ($.isLoon() || $.isQuanX() || $.isSurge()) {
    let _0x582720 = bdy_0x56979c() + $.farmInfo.farmUserPro.shareCode;
    !$.getdata(_0x582720) && ($.setdata("", bdy_0x56979c(Date.now() - 86400000) + $.farmInfo.farmUserPro.shareCode), $.setdata("", _0x582720));
    _0x32944d && ($.getdata(_0x582720) ? $.setdata($.getdata(_0x582720) + "," + _0x32944d, _0x582720) : $.setdata(_0x32944d, _0x582720));
    _0x32944d = $.getdata(_0x582720);
  }
  _0x1bc307 > 0 && console.log("【助力好友👬】获得" + _0x1bc307 + "g💧\n");
  bdy_0x22f97d += "【今日剩余助力👬】" + _0x43f814 + "次\n";
  console.log("助力好友结束，即将开始领取额外水滴奖励\n");
}
async function bdy_0x281e60() {
  await bdy_0x23458a();
  $.friendList ? (console.log("\n今日已邀请好友" + $.friendList.inviteFriendCount + "个 / 每日邀请上限" + $.friendList.inviteFriendMax + "个"), await bdy_0x12967e(), $.friendList.inviteFriendCount > 0 ? $.friendList.inviteFriendCount > $.friendList.inviteFriendGotAwardCount && (console.log("开始领取邀请好友的奖励"), await bdy_0x2f95c8(), console.log("领取邀请好友的奖励结果：：" + JSON.stringify($.awardInviteFriendRes))) : console.log("今日未邀请过好友")) : console.log("查询好友列表失败\n");
}
async function bdy_0x12967e() {
  for (let _0xf75d33 of bdy_0x39e533) {
    if (_0xf75d33 === $.farmInfo.farmUserPro.shareCode) {
      console.log("自己不能邀请自己成为好友噢\n");
      continue;
    }
    if (bdy_0x39e533.findIndex(_0x5497f3 => _0x5497f3 === _0xf75d33) >= 5) {
      break;
    }
    await bdy_0x41b161(_0xf75d33);
    if ($.inviteFriendRes && $.inviteFriendRes.helpResult && $.inviteFriendRes.helpResult.code === "0") {
      console.log("接收邀请成为好友结果成功,您已成为" + $.inviteFriendRes.helpResult.masterUserInfo.nickName + "的好友");
    } else {
      $.inviteFriendRes && $.inviteFriendRes.helpResult && $.inviteFriendRes.helpResult.code === "17" && console.log("接收邀请成为好友结果失败,对方已是您的好友");
    }
  }
}
async function bdy_0x3dfcf0() {
  const _0x2b8ce7 = {
    imageUrl: "",
    nickName: "",
    shareCode: arguments[0] + "-3",
    babelChannel: "3",
    version: 24,
    channel: 1
  };
  $.lotteryMasterHelpRes = await bdy_0x4d33c1(_0x2b8ce7);
}
async function bdy_0x41b161() {
  const _0x5b7fa4 = {
    imageUrl: "",
    nickName: "",
    shareCode: arguments[0] + "-inviteFriend",
    version: 24,
    channel: 1
  };
  $.inviteFriendRes = await bdy_0x4d33c1(_0x5b7fa4);
}
async function bdy_0x5599c4() {
  for (let _0x41737a of Array(3)) {
    const _0x14d6be = {
      sid: "",
      mpin: "",
      shareCode: arguments[0],
      babelChannel: "121",
      version: 24,
      channel: 1,
      lat: "0",
      lng: "0"
    };
    $.helpResult = await bdy_0x4d33c1(_0x14d6be);
    if ($.helpResult.code == "0") {
      break;
    }
    await $.wait(2000);
  }
}
async function bdy_0x4d33c1(_0xeff53e, _0x35ee2f, _0x13cae5 = 1500) {
  $.reqnum % 5 == 0 && (console.log("\n等待" + bdy_0x1a7748 / 1000 + "秒......\n"), _0x13cae5 = bdy_0x1a7748);
  $.reqnum++;
  const _0x19a4b7 = {
    babelChannel: "121",
    sid: "",
    un_area: "",
    version: 24,
    channel: 1,
    lat: "0",
    lng: "0"
  };
  if (!_0xeff53e) {
    _0xeff53e = _0x19a4b7;
  }
  let _0x5e9eb5 = {
      appId: "8a2af",
      fn: "initForFarm",
      body: _0xeff53e,
      apid: "signed_wh5",
      ver: $.UA.split(";")[2],
      cl: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    },
    _0x5034f7 = await bdy_0x249c8b.getbody(_0x5e9eb5);
  return new Promise(_0x1c8ca3 => {
    const _0x43e413 = {
      cookie: bdy_0x5bd15d,
      origin: "https://carry.m.jd.com",
      referer: "https://carry.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x5b932e = {
      url: "https://api.m.jd.com/client.action?functionId=initForFarm&" + _0x5034f7,
      headers: _0x43e413,
      timeout: 10000
    };
    setTimeout(() => {
      $.get(_0x5b932e, async (_0x143c85, _0xc4bca1, _0x16aedb) => {
        try {
          if (_0x143c85) {
            console.log("initForFarm: 请求失败 ‼️‼️");
            console.log(JSON.stringify(_0x143c85));
          } else {
            if (bdy_0x1a1205(_0x16aedb)) {
              _0x16aedb = JSON.parse(_0x16aedb);
              _0x16aedb.code != "0";
              _0x35ee2f && ($.farmInfo = _0x16aedb);
            }
          }
        } catch (_0x22a4ca) {
          $.logErr(_0x22a4ca, _0xc4bca1);
        } finally {
          _0x1c8ca3(_0x16aedb);
        }
      });
    }, _0x13cae5);
  });
}
async function bdy_0x23458a() {
  const _0x45b639 = {
    version: 24,
    channel: 1
  };
  $.friendList = await bdy_0x15a096("friendListInitForFarm", _0x45b639);
}
async function bdy_0x2f95c8() {
  $.awardInviteFriendRes = await bdy_0x15a096("awardInviteFriendForFarm");
}
async function bdy_0xdbbe69() {
  if ($.isNode() && process.env.FRUIT_NOTIFY_CONTROL) {
    $.ctrTemp = "" + process.env.FRUIT_NOTIFY_CONTROL === "false";
  } else {
    $.getdata("jdFruitNotify") ? $.ctrTemp = $.getdata("jdFruitNotify") === "false" : $.ctrTemp = "" + bdy_0x2fb742 === "false";
  }
  $.ctrTemp ? ($.msg($.name, bdy_0x4179f4, bdy_0x22f97d, bdy_0x4acef3), $.isNode() && (bdy_0x5654bd += bdy_0x4179f4 + "\n" + bdy_0x22f97d + ($.index !== bdy_0x17d864.length ? "\n\n" : ""))) : $.log("\n" + bdy_0x22f97d + "\n");
}
function bdy_0x56979c(_0x3d9070) {
  let _0x248fc8;
  _0x3d9070 ? _0x248fc8 = new Date(_0x3d9070) : _0x248fc8 = new Date();
  return _0x248fc8.getFullYear() + "-" + (_0x248fc8.getMonth() + 1 >= 10 ? _0x248fc8.getMonth() + 1 : "0" + (_0x248fc8.getMonth() + 1)) + "-" + (_0x248fc8.getDate() >= 10 ? _0x248fc8.getDate() : "0" + _0x248fc8.getDate());
}
function bdy_0x41a35a() {
  return new Promise(async _0x3b1ca7 => {
    if ($.shareCodesArr.length != 0) {
      if (bdy_0x39e533[$.index - 1]) {
        bdy_0x39e533 = $.shareCodesArr[$.index - 1].split("@");
      } else {
        const _0x1fda39 = $.index > bdy_0x1d4667.length ? bdy_0x1d4667.length - 1 : $.index - 1;
        bdy_0x39e533 = bdy_0x1d4667[_0x1fda39].split("@");
      }
    }
    bdy_0x39e533 = bdy_0x39e533.filter(_0x47eb9c => bdy_0x4dce21.indexOf(_0x47eb9c) == -1 && !!_0x47eb9c);
    console.log("您提供了" + bdy_0x39e533.length + "个农场助力码\n");
    console.log("将要助力的好友" + JSON.stringify(bdy_0x39e533));
    _0x3b1ca7();
  });
}
function bdy_0xe523d1() {
  return new Promise(_0x1ee515 => {
    console.log("开始获取配置文件...\n");
    bdy_0x1e8564 = $.isNode() ? require("./sendNotify") : "";
    const _0x1237cc = $.isNode() ? require("./jdCookie.js") : "";
    if (process.env.DY_PROXY) {
      const _0x3854d9 = require("./function/proxy.js");
      $.get = _0x3854d9.intoRequest($.get.bind($));
      $.post = _0x3854d9.intoRequest($.post.bind($));
    }
    $.shareCodesArr = [];
    if ($.isNode()) {
      if (process.env.FRUITCODES) {
        bdy_0x39e533 = process.env.FRUITCODES.split("&");
      } else {
        process.env.FRUITSHARECODES && (process.env.FRUITSHARECODES.indexOf("\n") > -1 ? bdy_0x1d4667 = process.env.FRUITSHARECODES.split("\n") : bdy_0x1d4667 = process.env.FRUITSHARECODES.split("&"));
      }
    }
    if ($.isNode()) {
      Object.keys(_0x1237cc).forEach(_0x157db2 => {
        _0x1237cc[_0x157db2] && bdy_0x17d864.push(_0x1237cc[_0x157db2]);
      });
      if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
        console.log = () => {};
      }
    } else {
      bdy_0x17d864 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...bdy_0x1189be($.getdata("CookiesJD") || "[]").map(_0x4bef4f => _0x4bef4f.cookie)].filter(_0x55efed => !!_0x55efed);
    }
    if ($.isNode()) {
      Object.keys(bdy_0x1d4667).forEach(_0x4b7d45 => {
        bdy_0x1d4667[_0x4b7d45] && $.shareCodesArr.push(bdy_0x1d4667[_0x4b7d45]);
      });
    } else {
      if ($.getdata("jd_fruit_inviter")) {
        $.shareCodesArr = $.getdata("jd_fruit_inviter").split("\n").filter(_0xd7d756 => !!_0xd7d756);
      }
      console.log("\nBoxJs设置的" + $.name + "好友邀请码:" + ($.getdata("jd_fruit_inviter") ? $.getdata("jd_fruit_inviter") : "暂无") + "\n");
    }
    let _0x73f066 = bdy_0x3dbd8e.existsSync("./fruit_helpcode");
    if (process.env.FRUITSHARECODES) {
      $.log("使用日志搜集的助力码\n");
    } else {
      if (process.env.FRUITCODES) {
        $.log("使用变量指定的助力码\n");
      } else {
        if (bdy_0x1d4667.length == 0 && _0x73f066) {
          $.log("使用本地缓存的助力码\n");
          bdy_0x39e533 = bdy_0x3dbd8e.readFileSync("./fruit_helpcode", "utf-8");
          try {
            bdy_0x39e533 = JSON.parse(bdy_0x39e533);
          } catch {
            console.log("本地缓存的助力码格式有误，请检查！");
            console.log(bdy_0x39e533 + bdy_0x39e533.length);
            bdy_0x39e533 = [];
          }
        } else {
          $.log("没有检测到任何助力码！！！\n");
        }
      }
    }
    _0x1ee515();
  });
}
function bdy_0xa5cdb1() {
  return new Promise(_0x4e8fd3 => {
    const _0x32d4bd = {
      Cookie: bdy_0x5bd15d,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x35b5f4 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x32d4bd,
      timeout: 10000
    };
    $.get(_0x35b5f4, (_0x45f9d8, _0x5292f9, _0xea6d3a) => {
      try {
        if (_0xea6d3a) {
          _0xea6d3a = JSON.parse(_0xea6d3a);
          if (!(_0xea6d3a.islogin === "1")) {
            _0xea6d3a.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x352676) {
        console.log(_0x352676);
      } finally {
        _0x4e8fd3();
      }
    });
  });
}
function bdy_0x15a096(_0x2f43de, _0x332919 = {}, _0x54b1db = 1500) {
  $.reqnum % 5 == 0 && (console.log("\n等待" + bdy_0x1a7748 / 1000 + "秒......\n"), _0x54b1db = bdy_0x1a7748);
  $.reqnum++;
  return new Promise(_0x4766fb => {
    setTimeout(() => {
      $.get(bdy_0x1c7686(_0x2f43de, _0x332919), (_0x4e5745, _0x25180e, _0x52c2d4) => {
        try {
          _0x4e5745 ? (console.log("\n东东农场: API查询请求失败 ‼️‼️"), console.log(JSON.stringify(_0x4e5745)), console.log("function_id:" + _0x2f43de), $.logErr(_0x4e5745)) : bdy_0x1a1205(_0x52c2d4) && (_0x52c2d4 = JSON.parse(_0x52c2d4));
        } catch (_0x120120) {
          $.logErr(_0x120120, _0x25180e);
        } finally {
          _0x4766fb(_0x52c2d4);
        }
      });
    }, _0x54b1db);
  });
}
function bdy_0x1a1205(_0x40f19b) {
  try {
    if (typeof JSON.parse(_0x40f19b) == "object") {
      return true;
    }
  } catch (_0x40e567) {
    console.log(_0x40e567);
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function bdy_0x1c7686(_0x4570c7, _0x42775 = {}) {
  const _0x170b4f = {
    Host: "api.m.jd.com",
    Accept: "*/*",
    Origin: "https://carry.m.jd.com",
    "Accept-Encoding": "gzip, deflate, br",
    "User-Agent": $.UA,
    "Accept-Language": "zh-CN,zh-Hans;q=0.9",
    Referer: "https://carry.m.jd.com/",
    Cookie: bdy_0x5bd15d
  };
  return {
    url: bdy_0x5aa1ee + "?functionId=" + _0x4570c7 + "&body=" + encodeURIComponent(JSON.stringify(_0x42775)) + "&appid=wh5",
    headers: _0x170b4f,
    timeout: 10000
  };
}
function bdy_0x1189be(_0x3ef8ae) {
  if (typeof _0x3ef8ae == "string") {
    try {
      return JSON.parse(_0x3ef8ae);
    } catch (_0x628893) {
      console.log(_0x628893);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
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
      "POST" === e && (s = this.post);
      return new Promise((r, i) => {
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
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
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
      if (!this.isNode()) {
        return {};
      }
      this.fs = this.fs || require("fs");
      this.path = this.path || require("path");
      var t = this.path.resolve(this.dataFile),
        e = this.path.resolve(process.cwd(), this.dataFile),
        s = this.fs.existsSync(t),
        r = !s && this.fs.existsSync(e);
      if (!s && !r) {
        return {};
      }
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
      for (const t of e.replace(/\[(\d+)\]/g, ".$1").split(".")) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, r, e) {
      Object(t) === t && ((r = Array.isArray(r) ? r : r.toString().match(/[^.[\]]+/g) || []).slice(0, -1).reduce((t, e, s) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(r[s + 1]) >> 0 == +r[s + 1] ? [] : {}, t)[r[r.length - 1]] = e);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        var [, s, r] = /^@(.*?)\.(.*?)$/.exec(t);
        if (s = s ? this.getval(s) : "") {
          try {
            const t = JSON.parse(s);
            e = t ? this.lodash_get(t, r, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
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
      } else {
        s = this.setval(t, e);
      }
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
          this.data = this.loaddata();
          return this.data[t];
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
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return !0;
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
          }));
          $httpClient.get(t, (t, e, s) => {
            !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode);
            a(t, e, s);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
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
          this.prms = this.got(t).on("redirect", (t, e) => {
            try {
              var s;
              t.headers["set-cookie"] && ((s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString()) && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar);
            } catch (t) {
              this.logErr(t);
            }
          });
          Promise.race([this.prms, this.tmout()]).then(t => {
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
          }));
          $httpClient[e](t, (t, e, s) => {
            !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode);
            a(t, e, s);
          });
          break;
        case "Quantumult X":
          t.method = e;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
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
          this.prms = this.got[e](s, r);
          Promise.race([this.prms, this.tmout()]).then(t => {
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
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [r] = i.split(";"),
                          [, a] = i.split(",");
                        e = a;
                        s = r.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          var e,
                            s = {
                              JVBERi0: "application/pdf",
                              R0lGODdh: "image/gif",
                              R0lGODlh: "image/gif",
                              iVBORw0KGgo: "image/png",
                              "/9j/": "image/jpg"
                            };
                          for (e in s) if (0 === t.indexOf(e)) {
                            return s[e];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(o, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": a ?? s
                    });
                  }
                  Object.assign(o, {
                    "auto-dismiss": r["auto-dismiss"],
                    sound: r.sound
                  });
                  return o;
                case "Loon":
                  {
                    const e = {};
                    (s = r.openUrl || r.url || r["open-url"] || t) && Object.assign(e, {
                      openUrl: s
                    });
                    var n = r.mediaUrl || r["media-url"];
                    (n = i?.startsWith("http") ? i : n) && Object.assign(e, {
                      mediaUrl: n
                    });
                    console.log(JSON.stringify(e));
                    return e;
                  }
                case "Quantumult X":
                  {
                    const a = {};
                    (o = r["open-url"] || r.url || r.openUrl || t) && Object.assign(a, {
                      "open-url": o
                    });
                    n = r["media-url"] || r.mediaUrl;
                    (n = i?.startsWith("http") ? i : n) && Object.assign(a, {
                      "media-url": n
                    });
                    (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(a, {
                      "update-pasteboard": s
                    });
                    console.log(JSON.stringify(a));
                    return a;
                  }
                case "Node.js":
                  return;
              }
            default:
              return;
          }
        };
      if (!this.isMute) {
        switch (this.getEnv()) {
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
