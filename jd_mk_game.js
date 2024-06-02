/*
2 2 29 2 * jd_mk_game.js
*/
const $ = new Env('赚汪贝兑礼品')

const fuck_0x1abd2a = $.isNode() ? require("./jdCookie.js") : "",
  fuck_0x39287d = require("crypto-js"),
  fuck_0x23ecfc = require("./function/dylany"),
  fuck_0x3f3d20 = require("./USER_AGENTS");
let fuck_0x5f17d1 = [],
  fuck_0x4000b0 = "";
$.isNode() ? (Object.keys(fuck_0x1abd2a).forEach(_0x286bb3 => {
  fuck_0x5f17d1.push(fuck_0x1abd2a[_0x286bb3]);
}), process.env.JD_DEBUG && process.env.JD_DEBUG === "false" && (console.log = () => {})) : fuck_0x5f17d1 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...fuck_0x4662d8($.getdata("CookiesJD") || "[]").map(_0x203412 => _0x203412.cookie)].filter(_0x448626 => !!_0x448626);
$.hotFlag = false;
$.outFlag = false;
$.activityEnd = false;
$.activityId = "ba6e852dd2bc05a1de75b2d2dc9fda305096bcc0";
$.activityURL = "https://pro.m.jd.com/mall/active/472hYWPS9d6GP7xtJzsWscXepKZf/index.html";
!(async () => {
  if (!fuck_0x5f17d1[0]) {
    const _0x4c6cd8 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x4c6cd8);
    return;
  }
  console.log("版本：20240408");
  console.log("问题建议TG：https://t.me/dylan_jdpro");
  console.log("活动入口: APP首页--京东超市--底部游戏菜单");
  for (let _0x2a5d18 = 0; _0x2a5d18 < fuck_0x5f17d1.length; _0x2a5d18++) {
    fuck_0x4000b0 = fuck_0x5f17d1[_0x2a5d18];
    if (fuck_0x4000b0) {
      $.UserName = decodeURIComponent(fuck_0x4000b0.match(/pt_pin=([^; ]+)(?=;?)/) && fuck_0x4000b0.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x2a5d18 + 1;
      $.bean = 0;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********");
      $.UA = fuck_0x3f3d20.UARAM ? fuck_0x3f3d20.UARAM() : fuck_0x3f3d20.USER_AGENT;
      await fuck_0x1bf86e();
      if ($.outFlag || $.activityEnd) {
        break;
      }
      await $.wait(parseInt(Math.random() * 5000 + 5000, 10));
    }
  }
})().catch(_0x346b27 => $.logErr(_0x346b27)).finally(() => $.done());
async function fuck_0x1bf86e() {
  try {
    $.Token = "";
    $.taskList_op = [];
    $.taskList_er = [];
    $.energy = 0;
    $.score = 0;
    $.nofen = false;
    $.x_api_eid_token = "jdd03" + fuck_0x18f92b(122, "234567abcdefghijklmnopqrstuvwxyzABCDEFIJKLMNOPQRSTUVWXYZ").toUpperCase() + "X";
    await fuck_0xfadb6d("arvr_getRequestToken");
    if (!$.Token) {
      console.log("获取token失败");
      return;
    }
    await fuck_0xfadb6d("arvr_queryInteractiveInfoNew");
    if ($.isLogin == false) {
      return;
    }
    if ($.taskList_er.length >= 1) {
      $.log("\n开始日常任务领体力...");
      $.itemId = "";
      for (let _0x52816b of $.taskList_er) {
        let _0xa29f3a = _0x52816b.assignmentTimesLimit - _0x52816b.completionCnt;
        if (_0x52816b.completionFlag == true) {
          console.log(_0x52816b.assignmentName + "----已完成");
        } else {
          if ([0, 5].includes(_0x52816b.assignmentType)) {
            console.log("去做  " + _0x52816b.assignmentName);
            $.subTaskId = _0x52816b.encryptAssignmentId;
            $.actionType = 3;
            await fuck_0xfadb6d("arvr_doInteractiveAssignmentNew");
          } else {
            if (_0x52816b.assignmentType == 1) {
              let _0x4bce58 = _0x52816b.ext.waitDuration || 1,
                _0x97fdaa = _0x52816b.ext.extraType;
              for (let _0x3d3b2d = 0; _0x3d3b2d < _0xa29f3a; _0x3d3b2d++) {
                console.log("去做  " + _0x52816b.assignmentName);
                $.subTaskId = _0x52816b.encryptAssignmentId;
                $.itemId = _0x52816b.ext[_0x97fdaa].length > _0x3d3b2d ? _0x52816b.ext[_0x97fdaa][_0x3d3b2d].itemId : "";
                if ($.itemId == "") {
                  continue;
                }
                $.actionType = 1;
                await fuck_0xfadb6d("arvr_doInteractiveAssignmentNew");
                await $.wait(parseInt(Math.random() * 1000 + _0x4bce58 * 1000, 10));
                $.actionType = 0;
                await fuck_0xfadb6d("arvr_doInteractiveAssignmentNew");
                await $.wait(parseInt(Math.random() * 500 + 1000, 10));
              }
            } else {
              if ([3, 4, 7].includes(_0x52816b.assignmentType)) {
                let _0x319576 = _0x52816b.ext.waitDuration || 1,
                  _0x4a82e5 = _0x52816b.ext.extraType;
                for (let _0x13a8f4 = 0; _0x13a8f4 < _0xa29f3a; _0x13a8f4++) {
                  console.log("去做 " + _0x52816b.assignmentName);
                  $.subTaskId = _0x52816b.encryptAssignmentId;
                  $.itemId = _0x52816b.ext[_0x4a82e5].length > _0x13a8f4 ? _0x52816b.ext[_0x4a82e5][_0x13a8f4].itemId : "";
                  if ($.itemId == "") {
                    continue;
                  }
                  $.actionType = 2;
                  await fuck_0xfadb6d("arvr_doInteractiveAssignmentNew");
                  await $.wait(parseInt(Math.random() * 1000 + _0x319576 * 1000, 10));
                  await $.wait(parseInt(Math.random() * 500 + 500, 10));
                }
              } else {
                if ([9].includes(_0x52816b.assignmentType)) {
                  console.log("去做  分享任务");
                  for (let _0x30d5e9 = 0; _0x30d5e9 < _0xa29f3a; _0x30d5e9++) {
                    $.encryptAssignmentId = _0x52816b.encryptAssignmentId;
                    await fuck_0xfadb6d("arvr_rewardNew");
                    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
                  }
                }
              }
            }
          }
        }
      }
    }
    await fuck_0xfadb6d("arvr_queryInteractiveRewardInfo");
    console.log("\n体力余额: " + $.energy + "\n");
    await fuck_0xfadb6d("arvr_queryInteractiveInfoNew_wb");
    if ($.taskList_op.length >= 1) {
      console.log("\n开始做经营事件...");
      for (let _0x51c68e of $.taskList_op) {
        if (_0x51c68e.timeStatus == 1) {
          if (_0x51c68e.completionFlag == true || _0x51c68e.completionCnt - _0x51c68e.assignmentTimesLimit == 0) {
            console.log(_0x51c68e.assignmentName + "----已完成");
            continue;
          }
          if (!(_0x51c68e.exchangeRate >= 1000 && _0x51c68e.assignmentType == 30)) {
            if ([30, 0].includes(_0x51c68e.assignmentType)) {
              if ($.energy < _0x51c68e.exchangeRate) {
                console.log(_0x51c68e.assignmentName + "----体力不够");
                continue;
              }
              console.log("去做 " + _0x51c68e.assignmentName);
              $.subTaskId = _0x51c68e.encryptAssignmentId || "";
              _0x51c68e.exchangeRate == 0 ? (await fuck_0xfadb6d("arvr_doInteractiveAssignmentNew_wb"), await $.wait(parseInt(Math.random() * 1000 + 1000, 10))) : (await fuck_0xfadb6d("arvr_doInteractiveAssignmentNew_wb"), await $.wait(parseInt(Math.random() * 1000 + 1000, 10)), $.energy -= _0x51c68e.exchangeRate);
            }
          }
        } else {
          _0x51c68e.timeStatus == 2;
        }
      }
    }
    await fuck_0xfadb6d("arvr_queryInteractiveRewardInfo_wb");
    console.log("\n汪贝余额: " + $.score);
  } catch (_0x127894) {
    console.log(_0x127894.message);
  }
}
async function fuck_0xfadb6d(_0x533f09) {
  if ($.outFlag) {
    return;
  }
  let _0x25629b = "https://api.m.jd.com",
    _0x317d64 = "",
    _0x269350 = "post",
    _0x348542 = {},
    _0xfb42f8 = "",
    _0x1e3e66 = {},
    _0x48e2b6 = "",
    _0x4c9fbd = {},
    _0x35d604 = {};
  switch (_0x533f09) {
    case "meta2LoginGame":
      _0x48e2b6 = _0x25629b + "/api/meta2LoginGame";
      const _0xf97d12 = {
        channel: "2",
        roomId: "90"
      };
      _0x1e3e66 = _0xf97d12;
      _0x317d64 = "appid=commonActivity&functionId=meta2LoginGame&body=" + encodeURIComponent(JSON.stringify(_0x1e3e66)) + "&t=" + Date.now();
      break;
    case "arvrMeta2RoomSortListByTemplateId":
      _0x48e2b6 = _0x25629b + "/api/arvrMeta2RoomSortListByTemplateId";
      _0x317d64 = "appid=commonActivity&functionId=arvrMeta2RoomSortListByTemplateId&body=%7B%22templateId%22%3A%22790088977%22%7D&t=" + Date.now();
      break;
    case "arvr_getRequestToken":
      _0x48e2b6 = _0x25629b + "/api/arvr_getRequestToken";
      _0x4c9fbd = fuck_0x400ee7({
        rewardType: 6,
        activityId: $.activityId,
        appId: "app_440"
      });
      const _0x159ad5 = {
        rewardType: 6,
        activityId: $.activityId,
        appId: "app_440",
        timestamp: _0x4c9fbd.timestamp,
        sign: _0x4c9fbd.sign,
        signKey: _0x4c9fbd.signKey
      };
      _0x1e3e66 = _0x159ad5;
      _0x317d64 = "appid=commonActivity&functionId=arvr_getRequestToken&body=" + encodeURIComponent(JSON.stringify(_0x1e3e66)) + "&t=" + Date.now();
      break;
    case "arvr_queryInteractiveInfoNew":
      _0x48e2b6 = _0x25629b + "/api/arvr_queryInteractiveInfoNew";
      const _0x50072e = {
        projectId: "1753589",
        projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
        sourceCode: 2,
        channel: 2
      };
      _0x4c9fbd = fuck_0x400ee7(_0x50072e);
      const _0x4d5b43 = {
        projectId: "1753589",
        projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
        sourceCode: 2,
        channel: 2,
        timestamp: _0x4c9fbd.timestamp,
        sign: _0x4c9fbd.sign,
        signKey: _0x4c9fbd.signKey
      };
      _0x1e3e66 = _0x4d5b43;
      _0x317d64 = "appid=commonActivity&functionId=arvr_queryInteractiveInfoNew&body=" + encodeURIComponent(JSON.stringify(_0x1e3e66)) + "&t=" + Date.now();
      break;
    case "arvr_queryInteractiveInfoNew_wb":
      _0x48e2b6 = _0x25629b + "/api/arvr_queryInteractiveInfoNew";
      const _0x4234e3 = {
        projectId: "1764671",
        projectKey: "2nym8aW7jNKRbmxXLdbb75m3ebSH",
        sourceCode: 2,
        queryTypes: 6,
        channel: 2
      };
      _0x4c9fbd = fuck_0x400ee7(_0x4234e3);
      const _0x25c36f = {
        projectId: "1764671",
        projectKey: "2nym8aW7jNKRbmxXLdbb75m3ebSH",
        sourceCode: 2,
        channel: "2",
        queryTypes: 6,
        timestamp: _0x4c9fbd.timestamp,
        sign: _0x4c9fbd.sign,
        signKey: _0x4c9fbd.signKey
      };
      _0x1e3e66 = _0x25c36f;
      _0x317d64 = "appid=commonActivity&functionId=arvr_queryInteractiveInfoNew&body=" + encodeURIComponent(JSON.stringify(_0x1e3e66)) + "&t=" + Date.now();
      break;
    case "arvr_rewardNew":
      _0x48e2b6 = _0x25629b + "/api/arvr_rewardNew";
      _0x4c9fbd = fuck_0x400ee7({
        projectId: "1753589",
        projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
        sourceCode: 2,
        channel: "2",
        encryptAssignmentId: $.encryptAssignmentId,
        completionFlag: true,
        rewardType: 0
      });
      const _0x5c4933 = {
        projectId: "1753589",
        projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
        sourceCode: 2,
        channel: "2",
        encryptAssignmentId: $.encryptAssignmentId,
        completionFlag: true,
        rewardType: 0,
        timestamp: _0x4c9fbd.timestamp,
        sign: _0x4c9fbd.sign,
        signKey: _0x4c9fbd.signKey
      };
      _0x1e3e66 = _0x5c4933;
      _0x348542 = {
        appId: "e3b36",
        fn: "arvr_rewardNew",
        body: _0x1e3e66,
        apid: "commonActivity",
        ver: $.UA.split(";")[2],
        cl: "ios",
        user: $.UserName,
        ua: $.UA
      };
      _0xfb42f8 = await fuck_0x23ecfc.getbody(_0x348542);
      _0x317d64 = _0xfb42f8 + "&x-api-eid-token=" + $.x_api_eid_token;
      break;
    case "arvr_queryInteractiveRewardInfo":
      _0x48e2b6 = _0x25629b + "/api/arvr_queryInteractiveRewardInfo";
      const _0x44cb3c = {
        pageSize: 10,
        currentPage: 1,
        projectId: "1753589",
        projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
        sourceCode: 2,
        needExchangeRestScore: 1
      };
      _0x4c9fbd = fuck_0x400ee7(_0x44cb3c);
      const _0x2d87a2 = {
        pageSize: 10,
        currentPage: 1,
        projectId: "1753589",
        projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
        sourceCode: 2,
        needExchangeRestScore: 1,
        timestamp: _0x4c9fbd.timestamp,
        sign: _0x4c9fbd.sign,
        signKey: _0x4c9fbd.signKey
      };
      _0x1e3e66 = _0x2d87a2;
      _0x317d64 = "appid=commonActivity&functionId=arvr_queryInteractiveRewardInfo&body=" + encodeURIComponent(JSON.stringify(_0x1e3e66)) + "&t=" + Date.now();
      break;
    case "arvr_queryInteractiveRewardInfo_wb":
      _0x48e2b6 = _0x25629b + "/api/arvr_queryInteractiveRewardInfo";
      const _0x43b78a = {
        pageSize: 10,
        currentPage: 1,
        projectId: "1764671",
        projectKey: "2nym8aW7jNKRbmxXLdbb75m3ebSH",
        sourceCode: 2,
        needExchangeRestScore: 1
      };
      _0x4c9fbd = fuck_0x400ee7(_0x43b78a);
      const _0x23445b = {
        pageSize: 10,
        currentPage: 1,
        projectId: "1764671",
        projectKey: "2nym8aW7jNKRbmxXLdbb75m3ebSH",
        sourceCode: 2,
        needExchangeRestScore: 1,
        timestamp: _0x4c9fbd.timestamp,
        sign: _0x4c9fbd.sign,
        signKey: _0x4c9fbd.signKey
      };
      _0x1e3e66 = _0x23445b;
      _0x317d64 = "appid=commonActivity&functionId=arvr_queryInteractiveRewardInfo&body=" + encodeURIComponent(JSON.stringify(_0x1e3e66)) + "&t=" + Date.now();
      break;
    case "arvr_doInteractiveAssignmentNew":
      _0x48e2b6 = _0x25629b + "/api/arvr_doInteractiveAssignmentNew";
      const _0x58c365 = {
        projectId: "1753589",
        projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
        sourceCode: 2,
        channel: 2,
        accessToken: $.Token,
        subTaskId: $.subTaskId,
        subTaskIdSecret: true
      };
      _0x35d604 = _0x58c365;
      if ([0, 1].includes($.actionType)) {
        const _0x2bce2a = {
          projectId: "1753589",
          projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
          sourceCode: 2,
          channel: 2,
          accessToken: $.Token,
          subTaskId: $.subTaskId,
          itemId: $.itemId,
          actionType: $.actionType,
          subTaskIdSecret: true
        };
        _0x35d604 = _0x2bce2a;
      } else {
        if ([2].includes($.actionType)) {
          const _0x3b9717 = {
            projectId: "1753589",
            projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
            sourceCode: 2,
            channel: 2,
            accessToken: $.Token,
            subTaskId: $.subTaskId,
            itemId: $.itemId,
            subTaskIdSecret: true
          };
          _0x35d604 = _0x3b9717;
        }
      }
      if ($.itemId != "") {
        _0x4c9fbd = fuck_0x400ee7(_0x35d604);
        _0x35d604.itemId = $.itemId || "";
        if ($.actionType == 2) {
          const _0x1b3ec4 = {
            projectId: "1753589",
            projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
            sourceCode: 2,
            channel: "2",
            accessToken: $.Token,
            subTaskId: $.subTaskId,
            subTaskIdSecret: true,
            itemId: $.itemId,
            timestamp: _0x4c9fbd.timestamp,
            sign: _0x4c9fbd.sign,
            signKey: _0x4c9fbd.signKey
          };
          _0x1e3e66 = _0x1b3ec4;
        } else {
          const _0x1f7195 = {
            projectId: "1753589",
            projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
            sourceCode: 2,
            channel: "2",
            accessToken: $.Token,
            subTaskId: $.subTaskId,
            subTaskIdSecret: true,
            itemId: $.itemId,
            actionType: $.actionType,
            timestamp: _0x4c9fbd.timestamp,
            sign: _0x4c9fbd.sign,
            signKey: _0x4c9fbd.signKey
          };
          _0x1e3e66 = _0x1f7195;
        }
      } else {
        _0x4c9fbd = fuck_0x400ee7(_0x35d604);
        if ($.actionType == 2) {
          const _0x5c00dc = {
            projectId: "1753589",
            projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
            sourceCode: 2,
            channel: "2",
            accessToken: $.Token,
            subTaskId: $.subTaskId,
            subTaskIdSecret: true,
            itemId: $.itemId,
            timestamp: _0x4c9fbd.timestamp,
            sign: _0x4c9fbd.sign,
            signKey: _0x4c9fbd.signKey
          };
          _0x1e3e66 = _0x5c00dc;
        } else {
          const _0x55de95 = {
            projectId: "1753589",
            projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
            sourceCode: 2,
            channel: "2",
            accessToken: $.Token,
            subTaskId: $.subTaskId,
            subTaskIdSecret: true,
            timestamp: _0x4c9fbd.timestamp,
            sign: _0x4c9fbd.sign,
            signKey: _0x4c9fbd.signKey
          };
          _0x1e3e66 = _0x55de95;
        }
      }
      _0x348542 = {
        appId: "84692",
        fn: "arvr_doInteractiveAssignmentNew",
        body: _0x1e3e66,
        apid: "commonActivity",
        ver: $.UA.split(";")[2],
        cl: "ios",
        user: $.UserName,
        ua: $.UA
      };
      _0xfb42f8 = await fuck_0x23ecfc.getbody(_0x348542);
      _0x317d64 = _0xfb42f8 + "&x-api-eid-token=" + $.x_api_eid_token;
      break;
    case "arvr_doInteractiveAssignmentNew_wb":
      _0x48e2b6 = _0x25629b + "/api/arvr_doInteractiveAssignmentNew";
      const _0x12c365 = {
        projectId: "1764671",
        projectKey: "2nym8aW7jNKRbmxXLdbb75m3ebSH",
        sourceCode: 2,
        channel: 2,
        accessToken: $.Token,
        subTaskId: $.subTaskId,
        exchangeNum: 1,
        subTaskIdSecret: true
      };
      _0x4c9fbd = fuck_0x400ee7(_0x12c365);
      const _0x5efa1d = {
        projectId: "1764671",
        projectKey: "2nym8aW7jNKRbmxXLdbb75m3ebSH",
        sourceCode: 2,
        channel: "2",
        accessToken: $.Token,
        subTaskId: $.subTaskId,
        subTaskIdSecret: true,
        exchangeNum: 1,
        timestamp: _0x4c9fbd.timestamp,
        sign: _0x4c9fbd.sign,
        signKey: _0x4c9fbd.signKey
      };
      _0x1e3e66 = _0x5efa1d;
      _0x348542 = {
        appId: "84692",
        fn: "arvr_doInteractiveAssignmentNew",
        body: _0x1e3e66,
        apid: "commonActivity",
        ver: $.UA.split(";")[2],
        cl: "ios",
        user: $.UserName,
        ua: $.UA
      };
      _0xfb42f8 = await fuck_0x23ecfc.getbody(_0x348542);
      _0x317d64 = _0xfb42f8 + "&x-api-eid-token=" + $.x_api_eid_token;
      break;
    default:
      console.log("" + _0x533f09);
  }
  let _0x9adcf5 = fuck_0x484bbc(_0x48e2b6, _0x317d64, _0x269350);
  return new Promise(async _0x5bd07c => {
    $.post(_0x9adcf5, async (_0x114348, _0x3b0700, _0x4ff892) => {
      try {
        if (_0x114348) {
          _0x3b0700 && typeof _0x3b0700.statusCode != "undefined" && _0x3b0700.statusCode == 493 && (console.log("ip可能被限制，过10分钟后再执行脚本\n"), $.outFlag = true);
          console.log("" + $.toStr(_0x114348, _0x114348));
        } else {
          fuck_0x2424e1(_0x533f09, _0x4ff892);
        }
      } catch (_0x2d0737) {
        console.log(_0x2d0737, _0x3b0700);
      } finally {
        _0x5bd07c();
      }
    });
  });
}
function fuck_0x2424e1(_0x3a56e9, _0x389b64) {
  let _0x3058fa = "";
  try {
    _0x389b64 && (_0x3058fa = JSON.parse(_0x389b64));
  } catch (_0x43615c) {
    console.log(_0x3a56e9 + " 执行任务异常");
    console.log(_0x389b64 + "->" + _0x43615c);
    $.runFalag = false;
  }
  try {
    switch (_0x3a56e9) {
      case "meta2LoginGame":
      case "arvrMeta2RoomSortListByTemplateId":
        break;
      case "arvr_getRequestToken":
        if (_0x3058fa.code == 200) {
          $.Token = _0x3058fa.data;
        }
        break;
      case "arvr_queryInteractiveInfoNew":
        $.isLogin = _0x3058fa.login || false;
        if (_0x3058fa.subCode == 0) {
          $.taskList_er = _0x3058fa.assignmentList || [];
          $.projectName = _0x3058fa.projectName;
        } else {
          console.log(_0x389b64);
        }
        break;
      case "arvr_queryInteractiveInfoNew_wb":
        $.isLogin = _0x3058fa.login || false;
        if (_0x3058fa.subCode == 0) {
          $.taskList_op = _0x3058fa.assignmentList || [];
          $.projectName = _0x3058fa.projectName;
        } else {
          console.log(_0x389b64);
        }
        break;
      case "arvr_queryInteractiveRewardInfo":
        if (_0x3058fa.subCode == 0) {
          $.energy = _0x3058fa.scoreInfoMap.usable || 0;
        }
        break;
      case "arvr_queryInteractiveRewardInfo_wb":
        _0x3058fa.subCode == 0 && ($.score = _0x3058fa.scoreInfoMap.usable || 0);
        break;
      case "arvr_doInteractiveAssignmentNew":
      case "arvr_rewardNew":
        if (_0x3058fa.subCode == 0) {
          JSON.stringify(_0x3058fa.rewardsInfo.successRewards) !== "{}" ? console.log("获得: " + _0x3058fa.rewardsInfo.successRewards["1"].quantity + "体力⚡") : console.log(_0x389b64);
        }
        break;
      case "arvr_doInteractiveAssignmentNew_wb":
        _0x3058fa.subCode == 0 ? JSON.stringify(_0x3058fa.rewardsInfo.successRewards) !== "{}" ? console.log("获得: " + _0x3058fa.rewardsInfo.successRewards["1"].quantity + "汪贝🥰") : console.log(_0x389b64) : console.log(_0x389b64);
        break;
      default:
        console.log(_0x3a56e9 + "-> " + JSON.stringify(_0x3058fa));
    }
  } catch (_0x4f0c0d) {
    console.log(_0x4f0c0d);
  }
}
function fuck_0x484bbc(_0x16cceb, _0x72b5fe, _0x276431 = "post") {
  const _0x44146d = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "Content-Type": "application/x-www-form-urlencoded",
    Origin: "https://pro.m.jd.com",
    Cookie: fuck_0x4000b0,
    "User-Agent": $.UA,
    "X-Requested-With": "com.jingdong.app.mall"
  };
  _0x16cceb.indexOf("https://api.m.jd.com") > -1 && (_0x44146d.Referer = "" + $.activityURL);
  const _0x1f28b4 = {
    url: _0x16cceb,
    method: _0x276431,
    headers: _0x44146d,
    body: _0x72b5fe,
    timeout: 30000
  };
  return _0x1f28b4;
}
function fuck_0x18f92b(_0xe97ab3, _0x4a7dfb) {
  _0xe97ab3 = _0xe97ab3 || 32;
  let _0x456c28 = _0x4a7dfb,
    _0xc50db9 = _0x456c28.length,
    _0x50611e = "";
  for (i = 0; i < _0xe97ab3; i++) {
    _0x50611e += _0x456c28.charAt(Math.floor(Math.random() * _0xc50db9));
  }
  return _0x50611e;
}
function fuck_0x4662d8(_0x4e548f) {
  if (typeof _0x4e548f == "string") {
    try {
      return JSON.parse(_0x4e548f);
    } catch (_0xb3ae9a) {
      console.log(_0xb3ae9a);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function fuck_0x400ee7(_0x55c65f) {
  let _0x202d61 = "",
    _0x2d8017 = Object.keys(_0x55c65f).sort(function (_0x14aace, _0x3ef3b2) {
      return _0x14aace.localeCompare(_0x3ef3b2);
    });
  for (let _0x25ecdb of _0x2d8017) {
    _0x202d61 = _0x202d61.concat(_0x55c65f[_0x25ecdb]);
  }
  let _0x583a9a = Date.now();
  r = "c4491f13dce9c71f".concat(_0x202d61).concat(_0x583a9a);
  let _0x372627 = fuck_0x39287d.MD5(r).toString();
  _0x55c65f.timestamp = _0x583a9a;
  _0x55c65f.sign = _0x372627;
  _0x55c65f.signKey = "c4491f13dce9c71f";
  return _0x55c65f;
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
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
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
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
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
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
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
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
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}
