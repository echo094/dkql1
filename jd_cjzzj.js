/*
0 6,20 * * * jd_cjzzj.js
*/

const $ = new Env('超级抓抓机');
const bdy_0x1c2633 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x165984 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x486c8b = require("./function/dylans");
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
let bdy_0x47ad61 = [],
  bdy_0x25d397 = "",
  bdy_0x39be4c = 0,
  bdy_0xad18c9;
if ($.isNode()) {
  var bdy_0x103c97 = new Buffer.from("64796C616E", "Hex").toString("utf8");
  Object.keys(bdy_0x1c2633).forEach(_0xada3fe => {
    bdy_0x47ad61.push(bdy_0x1c2633[_0xada3fe]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x47ad61 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x1aa588 => _0x1aa588.cookie)].filter(_0x314154 => !!_0x314154);
}
!__filename.includes(bdy_0x103c97) && (bdy_0xad18c9 = "unb");
let bdy_0x1bc3e2 = [],
  bdy_0x3e62d3 = [],
  bdy_0xa014f3 = [],
  bdy_0x1979ef = "",
  bdy_0x13b911 = new Date().setHours(20, 0, 0, 0),
  bdy_0x82d8b2 = new Date().setHours(20, 5, 0, 0);
$.helpId = [];
$.fullId = [];
!(async () => {
  if (!bdy_0x47ad61[0]) {
    const _0x24e868 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x24e868);
    return;
  }
  bdy_0xa014f3 = bdy_0x3e62d3.length != 0 ? bdy_0x3e62d3 : bdy_0x1bc3e2;
  bdy_0x1979ef = bdy_0xa014f3[bdy_0x33c41b(0, bdy_0xa014f3.length)];
  $.shareUuid = bdy_0x1979ef;
  console.log("当前版本：20240511");
  console.log("每晚8点开放兑换，100币兑10豆，200币兑20豆");
  console.log("问题建议：https://t.me/dylan_jdpro");
  $.nohelp = false;
  for (let _0x281614 = 0; _0x281614 < bdy_0x47ad61.length; _0x281614++) {
    bdy_0x25d397 = bdy_0x47ad61[_0x281614];
    originCookie = bdy_0x47ad61[_0x281614];
    if (bdy_0x25d397) {
      $.UserName = decodeURIComponent(bdy_0x25d397.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x25d397.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x281614 + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      $.isban = false;
      $.hasRisk = false;
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      bdy_0x3aa891();
      await bdy_0x459dfc();
      if (!$.isLogin) {
        const _0x11d196 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x11d196);
        $.isNode() && (await bdy_0x165984.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      let _0x3e1d70 = new Date();
      _0x3e1d70 >= bdy_0x13b911 && _0x3e1d70 <= bdy_0x82d8b2 ? (console.log("20点了，去尝试兑换..."), bdy_0xad18c9 !== "unb" && (await bdy_0x48c112("reward20"), await $.wait(parseInt(Math.random() * 500 + 500, 10)), await bdy_0x48c112("reward10"), await $.wait(parseInt(Math.random() * 500 + 500, 10)))) : (console.log("不在兑换时间！"), await bdy_0x123cf1());
      if ($.outFlag) {
        break;
      }
    }
  }
  console.log("\n开始内部互助...");
  await bdy_0x5c1b36();
})().catch(_0x12b0d9 => {
  return $.logErr(_0x12b0d9);
}).finally(() => {
  return $.done();
});
async function bdy_0x5c1b36() {
  for (let _0x3e3130 in bdy_0x47ad61) {
    bdy_0x25d397 = bdy_0x47ad61[_0x3e3130];
    if (bdy_0x25d397) {
      $.UserName = decodeURIComponent(bdy_0x25d397.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x25d397.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x3e3130 + 1;
      console.log("\n-------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
      bdy_0x3aa891();
      $.nonum = false;
      $.fullId.length != 0 && ($.helpId = $.helpId.filter(_0x69349 => !$.fullId.includes(_0x69349)), $.fullId = []);
      for (let _0x51cd2d of $.helpId) {
        $.itemId = _0x51cd2d;
        console.log("去助力 --> " + $.itemId);
        await bdy_0x48c112("assit");
        if ($.nonum) {
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
async function bdy_0x123cf1() {
  try {
    await bdy_0x48c112("queryInteractiveInfo");
    if ($.hasRisk) {
      console.log("当前活动暂不可参加...");
      delete bdy_0x47ad61[$.index - 1];
      return;
    }
    console.log("\n去做任务...");
    for (let _0x2b64cb of $.taskList) {
      if ($.isban) {
        return;
      }
      if (_0x2b64cb.assignmentName.includes("抓抓机")) {
        $.lotterynum = _0x2b64cb.assignmentTimesLimit - _0x2b64cb.completionCnt;
        continue;
      }
      if (_0x2b64cb.assignmentName.includes("积分兑换")) {
        continue;
      }
      if (_0x2b64cb.assignmentType === 2) {
        $.helpId.push(_0x2b64cb.ext[_0x2b64cb.ext.extraType].itemId || "");
        continue;
      }
      if (_0x2b64cb.completionFlag) {
        console.log(_0x2b64cb.assignmentName + "---已完成");
        continue;
      }
      console.log(_0x2b64cb.assignmentName);
      let _0x49d781 = _0x2b64cb.assignmentTimesLimit;
      $.eAid = _0x2b64cb.encryptAssignmentId;
      let _0x14359d = [];
      JSON.stringify(_0x2b64cb.ext) !== "{}" && (_0x14359d = _0x2b64cb.ext[_0x2b64cb.ext.extraType]);
      for (j = 0; j < _0x49d781; j++) {
        $.itemId = "";
        if (_0x14359d.length != 0) {
          if (_0x14359d[j].status == 2) {
            continue;
          }
          console.log("----" + (_0x14359d[j].title || _0x14359d[j].skuId));
          $.itemId = _0x14359d[j].itemId;
          $.wtime = _0x14359d[j].waitDuration || 0;
        }
        await bdy_0x48c112("startTask");
        await $.wait(parseInt(Math.random() * 1000 + $.wtime * 1000 + 500, 10));
        await bdy_0x48c112("endTask");
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
      }
      await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    }
    if ($.lotterynum > 0) {
      console.log("\n去抓抓机...");
      for (let _0x1b5ff2 of Array($.lotterynum)) {
        await bdy_0x48c112("lottery");
        await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
      }
    } else {
      console.log("\n今日已完成5次抓抓机，明天再来");
    }
    await bdy_0x48c112("goldinfo");
    await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
  } catch (_0x2331ee) {
    console.log(_0x2331ee);
  }
}
switch ($.type) {
  case "nb":
    const bdy_0x4c68b1 = {
      nb: nb
    };
    _0xf1f6le = bdy_0x4c68b1;
    break;
}
async function bdy_0x48c112(_0x409bd6) {
  if ($.outFlag || $.isban) {
    return;
  }
  let _0x5392e6 = "",
    _0x2184d0,
    _0xa66c66,
    _0xdca293 = "POST";
  switch (_0x409bd6) {
    case "queryInteractiveInfo":
      const _0x41ab8e = {
        encryptProjectId: "6pvWvhxzcHzeEiWsqP5oKgUbHEy",
        sourceCode: "ace454250",
        ext: {}
      };
      _0x41ab8e.ext.needNum = 10;
      _0x41ab8e.ext.rewardEncryptAssignmentId = "2oGxy3iBrKw3YFG2Z7DGWFNXxVkT";
      _0x41ab8e.ext.assistEncryptAssignmentId = "36a4jWTk5hyZS5fq76FhWKHGHm9a";
      _0x41ab8e.ext.assistInfoFlag = 4;
      _0x41ab8e.ext.assistNum = 5;
      _0x5392e6 = _0x41ab8e;
      _0x2184d0 = "684f0";
      _0xa66c66 = "queryInteractiveInfo";
      break;
    case "endTask":
      const _0x3ffea2 = {
        encryptAssignmentId: $.eAid,
        encryptProjectId: "6pvWvhxzcHzeEiWsqP5oKgUbHEy"
      };
      _0x5392e6 = _0x3ffea2;
      if ($.itemId != "") {
        _0x5392e6.itemId = $.itemId;
      }
      _0x2184d0 = "4afaa";
      _0xa66c66 = "hc.doTaskColorJsf.finishTask";
      break;
    case "assit":
      const _0x9c803d = {
        encryptAssignmentId: "36a4jWTk5hyZS5fq76FhWKHGHm9a",
        itemId: $.itemId,
        encryptProjectId: "6pvWvhxzcHzeEiWsqP5oKgUbHEy"
      };
      _0x5392e6 = _0x9c803d;
      if ($.itemId != "") {
        _0x5392e6.itemId = $.itemId;
      }
      _0x2184d0 = "4afaa";
      _0xa66c66 = "hc.doTaskColorJsf.finishTask";
      break;
    case "lottery":
      const _0x529e86 = {
        encryptAssignmentId: "2oGxy3iBrKw3YFG2Z7DGWFNXxVkT",
        encryptProjectId: "6pvWvhxzcHzeEiWsqP5oKgUbHEy"
      };
      _0x5392e6 = _0x529e86;
      _0x2184d0 = "4afaa";
      _0xa66c66 = "hc.doTaskColorJsf.exchangePrizes";
      break;
    case "reward10":
      const _0x126d5f = {
        encryptAssignmentId: "W9V5c1BTYELqNCr9FJafhNgTKYt",
        actionType: 2,
        encryptProjectId: "6pvWvhxzcHzeEiWsqP5oKgUbHEy"
      };
      _0x5392e6 = _0x126d5f;
      _0x2184d0 = "4afaa";
      _0xa66c66 = "hc.doTaskColorJsf.exchangePrizes";
      break;
    case "reward20":
      const _0x28be96 = {
        encryptAssignmentId: "4P53Ars5B2hFuEFrtP6owpFriDbW",
        actionType: 2,
        encryptProjectId: "6pvWvhxzcHzeEiWsqP5oKgUbHEy"
      };
      _0x5392e6 = _0x28be96;
      _0x2184d0 = "4afaa";
      _0xa66c66 = "hc.doTaskColorJsf.exchangePrizes";
      break;
    case "startTask":
      const _0x37b80d = {
        actionType: 2
      };
      _0x5392e6 = _0x37b80d;
      _0x2184d0 = "4affa";
      _0xa66c66 = "hc.doTaskColorJsf.validOpen";
      break;
    case "goldinfo":
      const _0x5e8336 = {
        encryptProjectId: "6pvWvhxzcHzeEiWsqP5oKgUbHEy"
      };
      _0x5392e6 = _0x5e8336;
      _0x2184d0 = "4afaa";
      _0xa66c66 = "myAssets";
      break;
    default:
      console.log("错误" + _0x409bd6);
  }
  if (_0x2184d0) {
    let _0x549a3d = {
      appId: _0x2184d0,
      functionId: _0xa66c66,
      body: _0x5392e6,
      appid: "home-channel",
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      t: Date.now(),
      ua: $.UA
    };
    _0x5392e6 = await bdy_0x486c8b.getbody(_0x549a3d);
    if (!_0x5392e6) {
      return;
    }
  }
  let _0x3306f3 = bdy_0x127179(_0x5392e6, _0xdca293);
  return new Promise(async _0xbb011 => {
    $.dpost(_0x3306f3, async (_0x435b91, _0x3bef68, _0x159e73) => {
      try {
        if (_0x435b91) {
          if (_0x3bef68 && typeof _0x3bef68.statusCode != "undefined") {
            if (_0x3bef68.statusCode == 493) {
              if (bdy_0x39be4c < 6) {
                bdy_0x39be4c++;
                await bdy_0x48c112(_0x409bd6);
                return;
              }
              console.log("ip可能被限制，过10分钟后再执行脚本\n");
              $.outFlag = true;
            }
          }
          console.log("" + $.toStr(_0x435b91, _0x435b91));
        } else {
          if (_0x159e73.includes("doctype") && bdy_0x39be4c < 6) {
            bdy_0x39be4c++;
            await bdy_0x48c112(_0x409bd6);
            return;
          }
          bdy_0x39be4c = 0;
          bdy_0x54a7e6(_0x409bd6, _0x159e73);
        }
      } catch (_0x356342) {
        console.log(_0x356342, _0x3bef68);
      } finally {
        _0xbb011();
      }
    });
  });
}
async function bdy_0x54a7e6(_0x35fb32, _0x1269dd) {
  let _0x2e3d2a = "";
  try {
    _0x2e3d2a = JSON.parse(_0x1269dd);
  } catch (_0x5a62af) {
    console.log(_0x35fb32 + " 执行任务异常");
  }
  try {
    switch (_0x35fb32) {
      case "queryInteractiveInfo":
        if (_0x2e3d2a.code == 0) {
          $.taskList = _0x2e3d2a.assignmentList || [];
          $.hasRisk = _0x2e3d2a.hasRisk || false;
        }
        break;
      case "lottery":
      case "endTask":
        if (_0x2e3d2a.success) {
          if (_0x2e3d2a.data.subCode == 0) {
            if (_0x2e3d2a.data.rewardsDetail) {
              switch (_0x2e3d2a.data.rewardsType) {
                case 1:
                  console.log("获得金币：", _0x2e3d2a.data.rewardsDetail, "📀");
                  break;
                case 3:
                  console.log("获得京豆：", _0x2e3d2a.data.rewardsDetail, "🥔");
                  break;
                default:
                  console.log("未知，进app看，也许大奖");
                  console.log(_0x1269dd);
              }
            } else {
              console.log("获得：空气");
            }
          } else {
            console.log(_0x2e3d2a.data.msg);
            _0x2e3d2a.data.msg.includes("未通过") && ($.isban = true);
          }
        }
        break;
      case "reward10":
      case "reward20":
        if (_0x2e3d2a.success) {
          _0x2e3d2a.data.subCode == 0 ? console.log("兑换成功：", _0x2e3d2a.data.rewardsDetail, "🥔") : console.log(_0x2e3d2a.data.msg);
        }
        break;
      case "goldinfo":
        if (_0x2e3d2a.success) {
          $.goldcount = _0x2e3d2a.data.myGold.num;
          console.log("\n剩余金币：", $.goldcount, "📀");
        }
        break;
      case "assit":
        if (_0x2e3d2a.success) {
          if (_0x2e3d2a.data.subCode == 0) {
            console.log("助力成功 ✔️");
            _0x2e3d2a.data.completionCnt === 5 && $.fullId.push($.itemId);
          } else {
            if (_0x2e3d2a.data.msg.includes("上限")) {
              console.log(_0x2e3d2a.data.msg + " ❌");
              $.nonum = true;
            } else {
              if (_0x2e3d2a.data.msg.includes("已经做过")) {
                console.log("今天已助力过TA ❌");
              } else {
                if (_0x2e3d2a.data.msg.includes("已完成")) {
                  console.log(_0x2e3d2a.data.msg + " ❌");
                  $.fullId.push($.itemId);
                } else {
                  console.log(_0x2e3d2a.data.msg, " ❌");
                }
              }
            }
          }
        } else {
          console.log(_0x2e3d2a.msg);
        }
        break;
      case "startTask":
        break;
      default:
        console.log(_0x35fb32 + " -> " + _0x1269dd);
    }
    typeof _0x2e3d2a == "object" && _0x2e3d2a.errorMessage && _0x2e3d2a.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0x2c8253) {
    console.log(_0x35fb32 + " " + _0x2c8253);
  }
}
function bdy_0x127179(_0x249e43, _0x489563 = "POST") {
  let _0x588d91 = "https://api.m.jd.com/";
  const _0x560ab0 = {
    Accept: "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/x-www-form-urlencoded",
    Origin: "https://prodev.m.jd.com",
    Referer: "https://prodev.m.jd.com/",
    Cookie: bdy_0x25d397,
    "User-Agent": $.UA
  };
  const _0x522abd = {
    url: _0x588d91,
    method: _0x489563,
    headers: _0x560ab0,
    body: _0x249e43,
    timeout: 30000
  };
  return _0x522abd;
}
async function bdy_0x3aa891() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0x5ac019(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0x5ac019(_0x55064c) {
  _0x55064c = _0x55064c || 32;
  let _0x14693d = "abcdef0123456789",
    _0x55bd01 = _0x14693d.length,
    _0x22a2f2 = "";
  for (i = 0; i < _0x55064c; i++) {
    _0x22a2f2 += _0x14693d.charAt(Math.floor(Math.random() * _0x55bd01));
  }
  return _0x22a2f2;
}
function bdy_0x1f07da(_0x141e52) {
  if (typeof _0x141e52 == "string") {
    try {
      return JSON.parse(_0x141e52);
    } catch (_0x2da94f) {
      console.log(_0x2da94f);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function bdy_0x201712() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x1dc4d0 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    const _0xa9f670 = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    let _0x3dec2c = _0xa9f670;
    $.shopactivityId == "" && delete _0x3dec2c.activityId;
    const _0x10f3e7 = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x3dec2c,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x3dec2c = await dyy.getbody(_0x10f3e7);
    const _0x3a27d3 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x25d397,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x331f57 = {
      url: "https://api.m.jd.com/client.action?" + _0x3dec2c + "&uuid=88888",
      headers: _0x3a27d3,
      timeout: 30000
    };
    $.dget(_0x331f57, async (_0x4ad399, _0x10c8da, _0x598d51) => {
      try {
        _0x598d51 = _0x598d51 && _0x598d51.match(/jsonp_.*?\((.*?)\);/) && _0x598d51.match(/jsonp_.*?\((.*?)\);/)[1] || _0x598d51;
        let _0x27b34d = $.toObj(_0x598d51, _0x598d51);
        if (_0x27b34d && typeof _0x27b34d == "object") {
          if (_0x27b34d && _0x27b34d.success === true) {
            console.log("    " + _0x27b34d.message);
            $.errorJoinShop = _0x27b34d.message;
            if (_0x27b34d.result && _0x27b34d.result.giftInfo) {
              for (let _0x2d1f9e of _0x27b34d.result.giftInfo.giftList) {
                console.log("入会获得:" + _0x2d1f9e.discountString + _0x2d1f9e.prizeName + _0x2d1f9e.secondLineDesc);
              }
            }
          } else {
            _0x27b34d && typeof _0x27b34d == "object" && _0x27b34d.message ? ($.errorJoinShop = _0x27b34d.message, console.log("" + (_0x27b34d.message || ""))) : console.log(_0x598d51);
          }
        } else {
          console.log(_0x598d51);
        }
      } catch (_0x401f70) {
        $.logErr(_0x401f70, _0x10c8da);
      } finally {
        _0x1dc4d0();
      }
    });
  });
}
async function bdy_0x340f13() {
  return new Promise(async _0x21abf8 => {
    const _0xa747ec = {
      venderId: $.joinVenderId,
      payUpShop: true,
      queryVersion: "10.5.2",
      appid: "ef79a",
      needSecurity: true,
      bizId: "shop_view_app",
      channel: 406
    };
    let _0x4da468 = _0xa747ec;
    const _0x3822f0 = {
      appId: "ef79a",
      fn: "getShopOpenCardInfo",
      body: _0x4da468,
      apid: "jd_shop_member",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x4da468 = await dyy.getbody(_0x3822f0);
    const _0x1c1a0d = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x25d397,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    const _0x461f93 = {
      url: "https://api.m.jd.com/client.action?" + _0x4da468 + "&uuid=88888",
      headers: _0x1c1a0d,
      timeout: 60000
    };
    $.get(_0x461f93, async (_0x1a719b, _0x1cd356, _0x54cbd7) => {
      try {
        _0x54cbd7 = _0x54cbd7 && _0x54cbd7.match(/jsonp_.*?\((.*?)\);/) && _0x54cbd7.match(/jsonp_.*?\((.*?)\);/)[1] || _0x54cbd7;
        let _0x3c0426 = $.toObj(_0x54cbd7, _0x54cbd7);
        _0x3c0426 && typeof _0x3c0426 == "object" ? _0x3c0426 && _0x3c0426.success == true && (console.log("去加入 -> " + (_0x3c0426.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x3c0426.result[0].interestsRuleList && _0x3c0426.result[0].interestsRuleList[0] && _0x3c0426.result[0].interestsRuleList[0].interestsInfo && _0x3c0426.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x54cbd7);
      } catch (_0xdb14c0) {
        $.logErr(_0xdb14c0, _0x1cd356);
      } finally {
        _0x21abf8();
      }
    });
  });
}
function bdy_0x33c41b(_0x5ec649, _0x1cb961) {
  return Math.floor(Math.random() * (_0x1cb961 - _0x5ec649)) + _0x5ec649;
}
function bdy_0x1f46c3(_0x4d3303 = +new Date()) {
  var _0x1d739d = new Date(_0x4d3303 + 28800000);
  return _0x1d739d.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function bdy_0x459dfc() {
  return new Promise(_0x3f08bf => {
    const _0x12fa9a = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: {},
      timeout: 10000
    };
    _0x12fa9a.headers.Cookie = bdy_0x25d397;
    _0x12fa9a.headers.referer = "https://h5.m.jd.com/";
    _0x12fa9a.headers["User-Agent"] = $.UA;
    $.get(_0x12fa9a, (_0x3cfc2d, _0x39c119, _0x1eb1e2) => {
      try {
        if (_0x1eb1e2) {
          _0x1eb1e2 = JSON.parse(_0x1eb1e2);
          if (!(_0x1eb1e2.islogin === "1")) {
            _0x1eb1e2.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x3d24e7) {
        console.log(_0x3d24e7);
      } finally {
        _0x3f08bf();
      }
    });
  });
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
