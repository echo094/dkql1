/*
35 0-23/3 * * * jd_wyw_ffl.js
*/

const $ = new Env('玩一玩-翻翻乐');
const bdy_0x2ef71a = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x55308c = $.isNode() ? require("./sendNotify") : "",
  bdy_0x1cbd18 = require("./function/dylans"),
  bdy_0x5f0bce = require("./function/dylib.js"),
  bdy_0x49c465 = process.env.WYW_DBNUM ? process.env.WYW_DBNUM : "100",
  bdy_0x457448 = process.env.WYW_DBCOUNT ? process.env.WYW_DBCOUNT : "1";
let bdy_0x514716 = "",
  bdy_0x44007e = {};
if (process.env.DY_PROXY) {
  try {
    require("https-proxy-agent");
    bdy_0x44007e = require("./function/proxy.js");
    $.dget = bdy_0x44007e.intoRequest($.get.bind($));
    $.dpost = bdy_0x44007e.intoRequest($.post.bind($));
  } catch {
    $.log("未安装https-proxy-agent依赖，无法启用代理");
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
let bdy_0x1a4173 = [],
  bdy_0x381a38 = "",
  bdy_0x541c5c = 0;
if ($.isNode()) {
  Object.keys(bdy_0x2ef71a).forEach(_0x378728 => {
    bdy_0x1a4173.push(bdy_0x2ef71a[_0x378728]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x1a4173 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x3fe50a => _0x3fe50a.cookie)].filter(_0x314103 => !!_0x314103);
}
$.helpId = [];
$.fullId = [];
!(async () => {
  if (!bdy_0x1a4173[0]) {
    const _0x4158d2 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x4158d2);
    return;
  }
  console.log("当前版本：20240625 ");
  console.log("问题建议：https://t.me/dylan_jdpro");
  console.log("环境变量：\n    WYW_DBNUM='200' 翻翻乐投注多少奖票，默认100\n    WYW_DBCOUNT='2' 翻倍次数，默认1");
  console.log("\n每天可参与10次，每次投注最大100");
  $.total_join = 0;
  $.total_suc = 0;
  for (let _0x4f056d = 0; _0x4f056d < bdy_0x1a4173.length; _0x4f056d++) {
    bdy_0x381a38 = bdy_0x1a4173[_0x4f056d];
    originCookie = bdy_0x1a4173[_0x4f056d];
    if (bdy_0x381a38) {
      $.UserName = decodeURIComponent(bdy_0x381a38.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x381a38.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x4f056d + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      $.isban = false;
      $.hasRisk = false;
      bdy_0x514716 = bdy_0x49c465;
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      bdy_0x3d4015();
      if (!$.isLogin) {
        const _0x58968e = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x58968e);
        $.isNode() && (await bdy_0x55308c.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      $.index != 1 && bdy_0x44007e.swip && (await bdy_0x44007e.swip());
      await bdy_0x11a8ea();
      if ($.outFlag) {
        break;
      }
    }
  }
  console.log("\n以上执行账号今日总战绩：" + $.total_suc + "/" + $.total_join + " 胜率：" + ($.total_suc / $.total_join * 100).toFixed(2) + "%");
})().catch(_0x10b80c => {
  return $.logErr(_0x10b80c);
}).finally(() => {
  return $.done();
});
async function bdy_0x5c9866() {
  for (let _0x23eb9d = 0; _0x23eb9d < bdy_0x1a4173.length; _0x23eb9d++) {
    bdy_0x381a38 = bdy_0x1a4173[_0x23eb9d];
    if (bdy_0x381a38) {
      $.UserName = decodeURIComponent(bdy_0x381a38.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x381a38.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x23eb9d + 1;
      console.log("\n-------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
      bdy_0x3d4015();
      $.nonum = false;
      $.hphotflag = false;
      $.fullId.length != 0 && ($.helpId = $.helpId.filter(_0x34939f => !$.fullId.includes(_0x34939f)), $.fullId = []);
      for (let _0x1509fd of $.helpId) {
        $.itemId = _0x1509fd;
        console.log("去助力 --> " + $.itemId);
        await bdy_0xe2b9e9("wanyiwan_assist");
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
async function bdy_0x11a8ea() {
  try {
    $.taskList = [];
    $.detailList = [];
    await bdy_0xe2b9e9("wanyiwan_home");
    if (!$.isLogin) {
      console.log("未登录");
      return;
    }
    await $.wait(parseInt(Math.random() * 500 + 500, 10));
    await bdy_0xe2b9e9("turnHappyHome");
    if ($.joinTimes === "") {
      return;
    }
    if (parseInt(bdy_0x514716) > 100) {
      bdy_0x514716 = 100;
    }
    if ($.joinTimes == 10) {
      console.log("\n今日已翻10次，明日再来吧！");
    } else {
      if ($.leftTime == 0) {
        console.log("\n去翻翻乐(投注" + bdy_0x514716 + "奖票,翻倍" + bdy_0x457448 + "次)...");
        $.dbsuc = false;
        for (let _0x5c0121 = 0; _0x5c0121 < bdy_0x457448; _0x5c0121++) {
          console.log("开始" + (_0x5c0121 + 1) + "次翻倍...");
          if (_0x5c0121 > 0) {
            bdy_0x514716 = -1;
          }
          await bdy_0xe2b9e9("turnHappyDouble");
          if (!$.dbsuc) {
            break;
          }
          await $.wait(parseInt(Math.random() * 1000 + 1500, 10));
        }
        $.dbsuc && (await bdy_0xe2b9e9("turnHappyReceive"));
      } else {
        console.log("\n" + bdy_0x5f0bce.SecToTime(parseInt($.leftTime / 1000)) + "后可参与翻翻乐");
      }
    }
    await $.wait(parseInt(Math.random() * 500 + 500, 10));
    await bdy_0xe2b9e9("turnHappyDetailList", 1);
    if ($.detailList.length == 30) {
      await $.wait(parseInt(Math.random() * 500 + 500, 10));
      await bdy_0xe2b9e9("turnHappyDetailList", 2);
    }
    if ($.detailList.length != 0) {
      let _0x5c09f1 = new Date().getDate(),
        _0x48e4d6 = $.detailList.filter(_0x329972 => new Date(_0x329972.time).getDate() == _0x5c09f1 && _0x329972.operateType == 1),
        _0x55efaf = $.detailList.filter(_0x188fc1 => new Date(_0x188fc1.time).getDate() == _0x5c09f1 && _0x188fc1.operateType == 3);
      console.log("\n今日翻倍战绩：" + _0x48e4d6.length + "/" + _0x55efaf.length + " " + (_0x55efaf.length > 0 ? "胜率：" + (_0x48e4d6.length / _0x55efaf.length * 100).toFixed(2) + "%" : ""));
      let _0x2f5392 = new Date().getDate() - 1,
        _0x3189d5 = $.detailList.filter(_0x25caf4 => new Date(_0x25caf4.time).getDate() == _0x2f5392 && _0x25caf4.operateType == 1),
        _0x4f3c24 = $.detailList.filter(_0x208685 => new Date(_0x208685.time).getDate() == _0x2f5392 && _0x208685.operateType == 3);
      console.log("昨日翻倍战绩：" + _0x3189d5.length + "/" + _0x4f3c24.length + " " + (_0x4f3c24.length > 0 ? "胜率：" + (_0x3189d5.length / _0x4f3c24.length * 100).toFixed(2) + "%" : ""));
      $.total_join += _0x55efaf.length;
      $.total_suc += _0x48e4d6.length;
    } else {
      console.log("\n没有历史翻倍战绩");
    }
    await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
  } catch (_0x4a7740) {
    console.log(_0x4a7740);
  }
}
async function bdy_0xe2b9e9(_0x4a269a, ..._0x9a03a6) {
  if ($.outFlag || $.isban) {
    return;
  }
  let _0x3e9444 = "",
    _0x3efb34,
    _0x25bf81,
    _0x4925ef = "post",
    _0x159fa8 = "https://api.m.jd.com/client.action",
    _0x3096b4 = "signed_wh5";
  switch (_0x4a269a) {
    case "wanyiwan_sign":
      const _0x44ce92 = {
        version: 1
      };
      _0x3e9444 = _0x44ce92;
      _0x3efb34 = "d12dd";
      _0x25bf81 = "wanyiwan_sign";
      break;
    case "wanyiwan_home":
      const _0xc9a057 = {
        outsite: 0,
        firstCall: 1,
        version: 1,
        lbsSwitch: true
      };
      _0x3e9444 = _0xc9a057;
      _0x3efb34 = "c81ad";
      _0x25bf81 = "wanyiwan_home";
      break;
    case "apTaskList":
      _0x159fa8 = "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22%3A%22Fl1LmxG_f0poD7w1ycZqnw%22%7D&t=1715170975269&appid=activities_platform&client=android&clientVersion=6.24.0&loginType=2&loginWQBiz=wegame&h5st=null&build=22779&screen=393*873&networkType=wifi&eufv=1&cthr=1";
      _0x4925ef = "get";
      break;
    case "startTask":
      const _0x56c3e7 = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 1,
        version: 1
      };
      _0x3e9444 = _0x56c3e7;
      _0x3efb34 = "89db2";
      _0x25bf81 = "wanyiwan_do_task";
      break;
    case "endTask":
      const _0x4d6b7d = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 0,
        version: 1
      };
      _0x3e9444 = _0x4d6b7d;
      _0x3efb34 = "89db2";
      _0x25bf81 = "wanyiwan_do_task";
      break;
    case "award":
      const _0x5f372d = {
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        version: 1
      };
      _0x3e9444 = _0x5f372d;
      _0x25bf81 = "wanyiwan_task_receive_award";
      break;
    case "wanyiwan_assist":
      const _0x4649cd = {
        inviteCode: $.itemId,
        version: 1
      };
      _0x3e9444 = _0x4649cd;
      _0x3efb34 = "ba505";
      _0x25bf81 = "wanyiwan_assist";
      break;
    case "turnHappyHome":
      _0x159fa8 = "https://api.m.jd.com/api";
      const _0x128195 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x3e9444 = _0x128195;
      _0x3096b4 = "activities_platform";
      _0x25bf81 = "turnHappyHome";
      break;
    case "turnHappyDouble":
      _0x159fa8 = "https://api.m.jd.com/api";
      _0x3e9444 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ",
        turnNum: parseInt(bdy_0x514716)
      };
      _0x3efb34 = "614f1";
      _0x3096b4 = "activities_platform";
      _0x25bf81 = "turnHappyDouble";
      break;
    case "turnHappyReceive":
      _0x159fa8 = "https://api.m.jd.com/api";
      const _0x1f7aea = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x3e9444 = _0x1f7aea;
      _0x3efb34 = "25fac";
      _0x3096b4 = "activities_platform";
      _0x25bf81 = "turnHappyReceive";
      break;
    case "turnHappyDetailList":
      _0x159fa8 = "https://api.m.jd.com/api";
      const _0xf2ae27 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ",
        pageNum: _0x9a03a6[0],
        pageSize: 50
      };
      _0x3e9444 = _0xf2ae27;
      _0x3096b4 = "activities_platform";
      _0x25bf81 = "turnHappyDetailList";
      break;
    case "superRedBagHome":
      _0x159fa8 = "https://api.m.jd.com/api";
      const _0x28efe9 = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x3e9444 = _0x28efe9;
      _0x3efb34 = "5be1b";
      _0x3096b4 = "activity_platform_se";
      _0x25bf81 = "superRedBagHome";
      break;
    case "superRedBagDraw":
      _0x159fa8 = "https://api.m.jd.com/api";
      const _0x31d077 = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x3e9444 = _0x31d077;
      _0x3efb34 = "89cfe";
      _0x3096b4 = "activity_platform_se";
      _0x25bf81 = "superRedBagDraw";
      break;
    default:
      console.log("错误" + _0x4a269a);
  }
  if (_0x3efb34) {
    let _0x1fada1 = {
      appId: _0x3efb34,
      functionId: _0x25bf81,
      body: _0x3e9444,
      appid: _0x3096b4,
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      t: Date.now(),
      ua: $.UA
    };
    _0x3e9444 = await bdy_0x1cbd18.getbody(_0x1fada1);
    if (!_0x3e9444) {
      return;
    }
  } else {
    _0x3e9444 && (_0x3e9444 = "functionId=" + _0x25bf81 + "&body=" + encodeURIComponent(JSON.stringify(_0x3e9444)) + "&t=" + Date.now() + "&appid=" + _0x3096b4 + "&client=ios&" + $.UA.split(";")[2] + "&cthr=1&networkType=wifi");
  }
  let _0x3cb1a0 = bdy_0x4a2d2f(_0x159fa8, _0x3e9444);
  return new Promise(async _0x460f8b => {
    $["d" + _0x4925ef](_0x3cb1a0, async (_0x32e17c, _0x2e439c, _0x29aef6) => {
      try {
        if (_0x32e17c) {
          if (_0x2e439c && typeof _0x2e439c.statusCode != "undefined") {
            if (_0x2e439c.statusCode == 493) {
              if (bdy_0x541c5c < 6) {
                bdy_0x541c5c++;
                await bdy_0xe2b9e9(_0x4a269a);
                return;
              }
              console.log("ip可能被限制，过10分钟后再执行脚本\n");
              $.outFlag = true;
            }
          }
          console.log("" + $.toStr(_0x32e17c, _0x32e17c));
        } else {
          if (_0x29aef6.includes("doctype") && bdy_0x541c5c < 6) {
            bdy_0x541c5c++;
            await bdy_0xe2b9e9(_0x4a269a);
            return;
          }
          bdy_0x541c5c = 0;
          bdy_0xe6a773(_0x4a269a, _0x29aef6);
        }
      } catch (_0x507db8) {
        console.log(_0x507db8, _0x2e439c);
      } finally {
        _0x460f8b();
      }
    });
  });
}
function bdy_0x865a8e(_0x445cf3) {
  let _0x55fd72 = "";
  switch (type) {
    case [_0x55fd72]:
      const _0x3d067f = {
        ed: ed
      };
      _0xf1f6le = _0x3d067f;
      break;
    case [_0x55fd72]:
      const _0x49b532 = {
        bd: bd
      };
      _0xf1f6lc = _0x49b532;
      break;
    case [_0x55fd72]:
      const _0x41af93 = {
        ed: ed
      };
      _0xf1f6lf = _0x41af93;
      break;
    case [_0x55fd72]:
      const _0x2feb8c = {
        ed: ed
      };
      _0xf1f6lg = _0x2feb8c;
      break;
    case [_0x55fd72]:
      const _0x15d463 = {
        ed: ed
      };
      _0xf1f6lv = _0x15d463;
      break;
  }
}
async function bdy_0xe6a773(_0x4854bd, _0xe6e2d8) {
  let _0x56d835 = "";
  try {
    _0x56d835 = JSON.parse(_0xe6e2d8);
  } catch (_0x21c8dd) {
    console.log(_0x4854bd + " 执行任务异常");
  }
  try {
    switch (_0x4854bd) {
      case "award":
        _0x56d835.code == 0 ? _0x56d835.data.bizCode == 0 ? console.log("任务完成，获得" + _0x56d835.data.result.rewardCount + "奖票 🎫") : console.log(_0x56d835.data.bizMsg) : console.log(_0x56d835.message);
        break;
      case "wanyiwan_sign":
        _0x56d835.code == 0 ? _0x56d835.data.bizCode == 0 ? console.log("签到成功,获得" + _0x56d835.data.result.getScore + "奖票 🎫") : console.log(_0x56d835.data.bizMsg) : console.log(_0x56d835.message);
        break;
      case "wanyiwan_assist":
        if (_0x56d835.code == 0) {
          if (_0x56d835.data.bizCode == 0) {
            console.log("✔️ 助力成功");
            $.nonum = true;
          } else {
            if (_0x56d835.data.bizMsg.includes("太多人") || _0x56d835.data.bizMsg.includes("重复")) {
              console.log("❌", _0x56d835.data.bizCode, _0x56d835.data.bizMsg);
              $.nonum = true;
            } else {
              if (_0x56d835.data.bizMsg.includes("已经完成")) {
                console.log("❌", _0x56d835.data.bizCode, _0x56d835.data.bizMsg);
                $.fullId.push($.itemId);
              } else {
                if (_0x56d835.data.bizMsg.includes("火爆")) {
                  console.log("❌", _0x56d835.data.bizCode, _0x56d835.data.bizMsg);
                  $.hphotflag = true;
                } else {
                  console.log("❌", _0x56d835.data.bizCode, _0x56d835.data.bizMsg);
                }
              }
            }
          }
        } else {
          console.log(_0x56d835.message);
          _0x56d835.message.includes("火爆") && ($.hphotflag = true);
        }
        break;
      case "wanyiwan_home":
        if (_0x56d835.code == 0) {
          _0x56d835.data.bizCode == 0 ? (_0x56d835.data.result.popWindows.length != 0 && console.log("获得新手奖励：", _0x56d835.data.result.popWindows[0].getScore, "奖票 🎫"), console.log("当前奖票总量：" + _0x56d835.data.result.score + " 🎫"), $.isLogin = _0x56d835.data?.["result"]?.["isLogin"], $.taskList = _0x56d835.data?.["result"]?.["taskBoard"] || [], $.signstatus = _0x56d835.data?.["result"]?.["signBoard"]?.["status"] || 0) : console.log(_0x56d835.data.bizMsg);
        } else {
          console.log(_0x56d835.message);
        }
        break;
      case "turnHappyHome":
        _0x56d835.success ? ($.leftTime = _0x56d835.data.leftTime, $.joinTimes = _0x56d835.data.joinTimes, $.logIn = _0x56d835.data.logIn) : (console.log(_0x56d835.errMsg), $.leftTime = "", $.joinTimes = "");
        break;
      case "turnHappyDouble":
        if (_0x56d835.success) {
          if (_0x56d835.data.rewardState == 1) {
            console.log("翻倍成功，获得 " + _0x56d835.data.rewardValue + "奖票 🎫");
            $.dbsuc = true;
          } else {
            $.dbsuc = false;
            console.log("叼了，翻倍失败！再接再厉！");
          }
        } else {
          console.log(_0x56d835.errMsg);
          $.dbsuc = false;
        }
        break;
      case "turnHappyDouble":
        _0x56d835.success ? _0x56d835.data.rewardState == 1 ? (console.log("翻倍成功，获得 " + _0x56d835.data.rewardValue + "奖票 🎫"), $.dbsuc = true) : ($.dbsuc = false, console.log("叼了，翻倍失败！再接再厉！")) : (console.log(_0x56d835.errMsg), $.dbsuc = false);
        break;
      case "turnHappyDetailList":
        if (_0x56d835.success) {
          $.detailList.length == 0 ? $.detailList = _0x56d835.data.result.detailList || [] : $.detailList = $.detailList.concat(_0x56d835.data.result.detailList || []);
        } else {
          console.log(_0x56d835.errMsg);
          $.detailList = [];
        }
        break;
      case "superRedBagHome":
        _0x56d835.success ? ($.sceneStatus = _0x56d835.data.sceneStatus, $.nextLeftTime = _0x56d835.data.nextLeftTime) : console.log(_0x56d835.errMsg);
        break;
      case "superRedBagDraw":
        if (_0x56d835.success) {
          $.shakeLeftTime = _0x56d835.data.shakeLeftTime;
          const {
            prizeDrawVo = ""
          } = _0x56d835.data;
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
            console.log(_0xe6e2d8);
          }
        } else {
          console.log(_0x56d835.errMsg);
        }
        break;
      case "startTask":
      case "turnHappyReceive":
      case "endTask":
        break;
      default:
        console.log(_0x4854bd + " -> " + _0xe6e2d8);
    }
    typeof _0x56d835 == "object" && _0x56d835.errorMessage && _0x56d835.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0x50ea90) {
    console.log(_0x4854bd + " " + _0x50ea90);
  }
}
function bdy_0x4a2d2f(_0x4def31, _0x21424d) {
  let _0x46305d = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    Cookie: bdy_0x381a38,
    "User-Agent": $.UA
  };
  const _0x16a8b9 = {
    url: _0x4def31,
    headers: _0x46305d,
    timeout: 30000,
    ...(_0x21424d ? {
      body: _0x21424d
    } : {})
  };
  return _0x16a8b9;
}
async function bdy_0x3d4015() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0x46881b(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0x46881b(_0x4d7771) {
  _0x4d7771 = _0x4d7771 || 32;
  let _0x48dfe5 = "abcdef0123456789",
    _0x50f674 = _0x48dfe5.length,
    _0x4c796b = "";
  for (i = 0; i < _0x4d7771; i++) {
    _0x4c796b += _0x48dfe5.charAt(Math.floor(Math.random() * _0x50f674));
  }
  return _0x4c796b;
}
function bdy_0x1aee07(_0x19e07d) {
  if (typeof _0x19e07d == "string") {
    try {
      return JSON.parse(_0x19e07d);
    } catch (_0x2f5e8d) {
      console.log(_0x2f5e8d);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function bdy_0x518111() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x27f050 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x9c4b6c = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    $.shopactivityId == "" && delete _0x9c4b6c.activityId;
    let _0x3e0695 = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x9c4b6c,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x9c4b6c = await dyy.getbody(_0x3e0695);
    const _0x54bbd6 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x381a38,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0xd1303c = {
      url: "https://api.m.jd.com/client.action?" + _0x9c4b6c + "&uuid=88888",
      headers: _0x54bbd6,
      timeout: 30000
    };
    $.dget(_0xd1303c, async (_0x1154f0, _0x562d45, _0x4d08fd) => {
      try {
        _0x4d08fd = _0x4d08fd && _0x4d08fd.match(/jsonp_.*?\((.*?)\);/) && _0x4d08fd.match(/jsonp_.*?\((.*?)\);/)[1] || _0x4d08fd;
        let _0x267d9b = $.toObj(_0x4d08fd, _0x4d08fd);
        if (_0x267d9b && typeof _0x267d9b == "object") {
          if (_0x267d9b && _0x267d9b.success === true) {
            console.log("    " + _0x267d9b.message);
            $.errorJoinShop = _0x267d9b.message;
            if (_0x267d9b.result && _0x267d9b.result.giftInfo) {
              for (let _0x4567d2 of _0x267d9b.result.giftInfo.giftList) {
                console.log("入会获得:" + _0x4567d2.discountString + _0x4567d2.prizeName + _0x4567d2.secondLineDesc);
              }
            }
          } else {
            _0x267d9b && typeof _0x267d9b == "object" && _0x267d9b.message ? ($.errorJoinShop = _0x267d9b.message, console.log("" + (_0x267d9b.message || ""))) : console.log(_0x4d08fd);
          }
        } else {
          console.log(_0x4d08fd);
        }
      } catch (_0xf0a9cc) {
        $.logErr(_0xf0a9cc, _0x562d45);
      } finally {
        _0x27f050();
      }
    });
  });
}
async function bdy_0x103934() {
  return new Promise(async _0x3301bf => {
    let _0x128166 = {
      venderId: $.joinVenderId,
      payUpShop: true,
      queryVersion: "10.5.2",
      appid: "ef79a",
      needSecurity: true,
      bizId: "shop_view_app",
      channel: 406
    };
    let _0x468013 = {
      appId: "ef79a",
      fn: "getShopOpenCardInfo",
      body: _0x128166,
      apid: "jd_shop_member",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x128166 = await dyy.getbody(_0x468013);
    const _0x3d9d94 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x381a38,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    const _0x405a04 = {
      url: "https://api.m.jd.com/client.action?" + _0x128166 + "&uuid=88888",
      headers: _0x3d9d94,
      timeout: 60000
    };
    $.get(_0x405a04, async (_0x3ff4e1, _0x2d3ddc, _0x4ae6fa) => {
      try {
        _0x4ae6fa = _0x4ae6fa && _0x4ae6fa.match(/jsonp_.*?\((.*?)\);/) && _0x4ae6fa.match(/jsonp_.*?\((.*?)\);/)[1] || _0x4ae6fa;
        let _0x2a8e9a = $.toObj(_0x4ae6fa, _0x4ae6fa);
        _0x2a8e9a && typeof _0x2a8e9a == "object" ? _0x2a8e9a && _0x2a8e9a.success == true && (console.log("去加入 -> " + (_0x2a8e9a.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x2a8e9a.result[0].interestsRuleList && _0x2a8e9a.result[0].interestsRuleList[0] && _0x2a8e9a.result[0].interestsRuleList[0].interestsInfo && _0x2a8e9a.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x4ae6fa);
      } catch (_0x2a643b) {
        $.logErr(_0x2a643b, _0x2d3ddc);
      } finally {
        _0x3301bf();
      }
    });
  });
}
function bdy_0x3e19fc(_0xaecc50, _0x3d0828) {
  return Math.floor(Math.random() * (_0x3d0828 - _0xaecc50)) + _0xaecc50;
}
function bdy_0x39754f(_0x3fe6d1 = +new Date()) {
  var _0x494ee7 = new Date(_0x3fe6d1 + 28800000);
  return _0x494ee7.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function bdy_0x4958df() {
  return new Promise(_0x5c1fde => {
    const _0x4ceebe = {
      Cookie: bdy_0x381a38,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x151c97 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x4ceebe,
      timeout: 10000
    };
    $.get(_0x151c97, (_0x12f12c, _0x2b95a2, _0xf38f1b) => {
      try {
        if (_0xf38f1b) {
          _0xf38f1b = JSON.parse(_0xf38f1b);
          if (!(_0xf38f1b.islogin === "1")) {
            _0xf38f1b.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x4c7f63) {
        console.log(_0x4c7f63);
      } finally {
        _0x5c1fde();
      }
    });
  });
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
