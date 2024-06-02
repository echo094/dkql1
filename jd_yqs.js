/*
特价版摇钱树
46 3,15 * * * jd_yqs.js
 */
const $ = new Env('摇钱树');
const _0x3077c2 = $.isNode() ? require("./sendNotify") : "",
  _0x36f108 = $.isNode() ? require("./jdCookie.js") : "",
  _0x21ab89 = require("./function/dylanw"),
  _0xf62460 = require("./USER_AGENTS");
let _0x1a8ff9 = [],
  _0x570477 = "";
const _0xa4b8fd = "Zo2V3cM1MM6mVgjjsX3pCQ";
if ($.isNode()) {
  Object.keys(_0x36f108).forEach(_0x2f690f => {
    _0x1a8ff9.push(_0x36f108[_0x2f690f]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else _0x1a8ff9 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0x51c72e($.getdata("CookiesJD") || "[]").map(_0x1cae04 => _0x1cae04.cookie)].filter(_0x429a32 => !!_0x429a32);
!(async () => {
  if (!_0x1a8ff9[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  for (let _0x3083a4 = 0; _0x3083a4 < _0x1a8ff9.length; _0x3083a4++) {
    if (_0x1a8ff9[_0x3083a4]) {
      _0x570477 = _0x1a8ff9[_0x3083a4];
      $.UserName = decodeURIComponent(_0x570477.match(/pt_pin=([^; ]+)(?=;?)/) && _0x570477.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x3083a4 + 1;
      $.isLogin = true;
      $.nickName = "";
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      if (!$.isLogin) {
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        });
        $.isNode() && (await _0x3077c2.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      $.UA = _0xf62460.UARAM ? _0xf62460.UARAM() : _0xf62460.USER_AGENT;
      await _0x5f155b();
      await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
    }
  }
})().catch(_0x2e6bf5 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x2e6bf5 + "!", "");
}).finally(() => {
  $.done();
});
async function _0x5f155b() {
  $.txman = false;
  $.runflag = false;
  $.drawLotteryNum = 0;
  await _0x255222(true);
  await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
  if ($.runflag) {
    await _0x255222(false);
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    await _0x58bb9a();
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    console.log("\n去开红包...");
    for (let _0x25b8a6 = 0; _0x25b8a6 < $.drawLotteryNum; _0x25b8a6++) {
      await _0x1b96ab();
      await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    }
    console.log("\n去提现...");
    for (let _0x5e753a = 0; _0x5e753a < 1; _0x5e753a++) {
      await _0x1e6165(1);
      await $.wait(parseInt(Math.random() * 2000 + 2000, 10));
      if ($.txman) break;
    }
  }
}
function _0x153b3e(_0x2e6d15) {
  try {
    if (typeof JSON.parse(_0x2e6d15) == "object") {
      return true;
    }
  } catch (_0x3b3f4c) {
    return console.log(_0x3b3f4c), console.log("京东服务器访问数据为空，请检查网络情况"), false;
  }
}
function _0x51c72e(_0x3eb2a1) {
  if (typeof _0x3eb2a1 == "string") try {
    return JSON.parse(_0x3eb2a1);
  } catch (_0xb8bee2) {
    return console.log(_0xb8bee2), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
  }
}
async function _0x255222(_0x1b4500) {
  let _0x4b45d7 = {
      "linkId": _0xa4b8fd
    },
    _0x3564d3 = {
      "appId": "34e92",
      "fn": "richTreeHome",
      "body": _0x4b45d7,
      "apid": "activities_platform",
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x4b45d7 = await _0x21ab89.getbody(_0x3564d3);
  if (!_0x4b45d7) return;
  let _0x5f01dd = {
    "url": "https://api.m.jd.com/api?" + _0x4b45d7,
    "headers": {
      "origin": "https://h5platform.jd.com",
      "Referer": "https://h5platform.jd.com/",
      "User-Agent": $.UA,
      "Cookie": _0x570477,
      "content-type": "application/x-www-form-urlencoded",
      "accept": "application/json, text/plain, */*"
    },
    "timeout": 30000
  };
  return new Promise(async _0x2dd572 => {
    $.post(_0x5f01dd, async (_0x4d356c, _0x2bac26, _0x4d3135) => {
      try {
        if (_0x4d356c) console.log("" + JSON.stringify(_0x4d356c));else {
          _0x4d3135 = JSON.parse(_0x4d3135);
          if (_0x4d3135.code == 0) {
            $.drawLotteryNum = _0x4d3135?.["data"]?.["drawLotteryNum"];
            let _0x227360 = _0x4d3135?.["data"]?.["kettle"]?.["currentCapacity"],
              _0x52d62f = _0x4d3135?.["data"]?.["richTree"]?.["nowStep"],
              _0x34d93b = _0x4d3135?.["data"]?.["richTree"]?.["nowExp"];
            _0x1b4500 && console.log("剩余水滴：" + _0x227360 + ",等级：" + _0x52d62f + ",进度：" + _0x34d93b + "%");
            if (_0x4d3135?.["data"]?.["prizeDrawVO"] != null) console.log("获得新手礼包: " + _0x4d3135?.["data"]?.["prizeDrawVO"]?.["prizeConfigName"]), await $.wait(parseInt(Math.random() * 1000 + 1000, 10)), await _0x2cdeab(_0x227360, 2);else {
              $.runflag = true;
              let _0x3b80b1 = _0x4d3135?.["data"]?.["totalReward"] || [];
              $.prizeList = "";
              for (let _0x3fbb4c = 0; _0x3fbb4c < _0x3b80b1.length; _0x3fbb4c++) {
                $.amount = _0x3b80b1[_0x3fbb4c].amount;
                $.prizeType = _0x3b80b1[_0x3fbb4c].prizeType;
                switch ($.prizeType) {
                  case 1:
                    $.prizeType = "[优惠券]";
                    break;
                  case 2:
                    $.prizeType = "[红包]";
                    break;
                  case 3:
                    $.prizeType = "[实物]";
                    break;
                  case 4:
                    $.prizeType = "[现金]";
                    break;
                  default:
                    console.log($.prizeType);
                    return;
                }
                _0x3fbb4c != _0x3b80b1.length - 1 ? $.prizeList += $.prizeType + "：" + $.amount + "，" : $.prizeList += $.prizeType + "：" + $.amount;
              }
              _0x1b4500 && console.log("获得累计：" + $.prizeList);
              await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
              _0x227360 >= 2000 && _0x52d62f < 40 && (await _0x2cdeab(_0x227360, 0), await $.wait(parseInt(Math.random() * 1000 + 1000, 10)));
            }
          } else _0x4d3135.code == 402 ? console.log("获取活动失败," + (_0x4d3135?.["errMsg"] || "")) : console.log("获取活动失败," + (_0x4d3135?.["errMsg"] || ""));
        }
      } catch (_0x1a1efa) {
        $.logErr(_0x1a1efa, _0x2bac26);
      } finally {
        _0x2dd572();
      }
    });
  });
}
async function _0x2cdeab(_0x49dced, _0x1ce685) {
  let _0x6d3ea0 = {
      "waterNum": _0x49dced,
      "type": _0x1ce685,
      "linkId": _0xa4b8fd
    },
    _0x1dfde0 = {
      "appId": "34e92",
      "fn": "richTreeWater",
      "body": _0x6d3ea0,
      "apid": "activities_platform",
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x6d3ea0 = await _0x21ab89.getbody(_0x1dfde0);
  if (!_0x6d3ea0) return;
  let _0x589125 = {
    "url": "https://api.m.jd.com/api?" + _0x6d3ea0,
    "headers": {
      "origin": "https://h5platform.jd.com",
      "Referer": "https://h5platform.jd.com/",
      "User-Agent": $.UA,
      "Cookie": _0x570477,
      "content-type": "application/x-www-form-urlencoded",
      "accept": "application/json, text/plain, */*"
    },
    "timeout": 30000
  };
  return new Promise(async _0x166887 => {
    $.post(_0x589125, async (_0x294241, _0xea2eb3, _0x3b48c5) => {
      try {
        if (_0x294241) console.log("" + JSON.stringify(_0x294241));else {
          _0x3b48c5 = JSON.parse(_0x3b48c5);
          if (_0x3b48c5.code == 0) {
            let _0x1e1f02 = _0x3b48c5?.["data"]?.["redPacketNum"] || 0;
            console.log("浇水完成,开红包次数+" + _0x1e1f02);
            await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
            $.drawLotteryNum = $.drawLotteryNum + _0x1e1f02;
          } else _0x3b48c5.code == 402 ? console.log("浇水失败," + (_0x3b48c5?.["errMsg"] || "")) : console.log("浇水失败," + (_0x3b48c5?.["errMsg"] || ""));
        }
      } catch (_0x35aeb9) {
        $.logErr(_0x35aeb9, _0xea2eb3);
      } finally {
        _0x166887();
      }
    });
  });
}
async function _0x1b96ab() {
  let _0x41e494 = {
      "linkId": _0xa4b8fd
    },
    _0x587688 = {
      "appId": "34e92",
      "fn": "richTreeOpen",
      "body": _0x41e494,
      "apid": "activities_platform",
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x41e494 = await _0x21ab89.getbody(_0x587688);
  if (!_0x41e494) return;
  let _0x305dbd = {
    "url": "https://api.m.jd.com/api?" + _0x41e494,
    "headers": {
      "origin": "https://h5platform.jd.com",
      "Referer": "https://h5platform.jd.com/",
      "User-Agent": $.UA,
      "Cookie": _0x570477,
      "content-type": "application/x-www-form-urlencoded",
      "accept": "application/json, text/plain, */*"
    },
    "timeout": 30000
  };
  return new Promise(async _0x37a826 => {
    $.post(_0x305dbd, async (_0x58bf1a, _0x64e6d1, _0x517276) => {
      try {
        if (_0x58bf1a) console.log("" + JSON.stringify(_0x58bf1a));else {
          _0x517276 = JSON.parse(_0x517276);
          if (_0x517276.code == 0) switch (_0x517276?.["data"]?.["prizeType"]) {
            case 1:
              console.log("获得," + _0x517276?.["data"]?.["prizeConfigName"]);
              break;
            case 2:
              console.log("获得" + _0x517276?.["data"]?.["prizeConfigName"] + "🧧");
              break;
            case 4:
              console.log("获得" + _0x517276?.["data"]?.["prizeConfigName"] + "💰️");
              break;
            case null:
              console.log("空气");
              break;
            default:
              console.log(_0x517276?.["data"]?.["prizeType"]);
              return;
          } else _0x517276.code == 402 ? console.log("开红包失败," + (_0x517276?.["errMsg"] || "")) : console.log("开红包失败," + (_0x517276?.["errMsg"] || ""));
        }
      } catch (_0x1fb4b8) {
        $.logErr(_0x1fb4b8, _0x64e6d1);
      } finally {
        _0x37a826();
      }
    });
  });
}
async function _0x58bb9a() {
  let _0x4a9f2d = {
    "url": "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22:%22Zo2V3cM1MM6mVgjjsX3pCQ%22%7D&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=13.0.6",
    "headers": {
      "origin": "https://h5platform.jd.com",
      "Referer": "https://h5platform.jd.com/",
      "User-Agent": $.UA,
      "Cookie": _0x570477,
      "content-type": "application/x-www-form-urlencoded",
      "accept": "application/json, text/plain, */*"
    },
    "timeout": 30000
  };
  return new Promise(_0x3d1f01 => {
    $.get(_0x4a9f2d, async (_0x27e87, _0xd090dc, _0xa8c84c) => {
      try {
        if (_0x27e87) $.log(_0x27e87);else {
          _0xa8c84c = JSON.parse(_0xa8c84c);
          if (_0xa8c84c?.["code"] == 0) {
            let _0x16ce4c = _0xa8c84c?.["data"] || [];
            for (let _0x3e74d6 = 0; _0x3e74d6 < _0x16ce4c.length; _0x3e74d6++) {
              $.taskTitle = _0x16ce4c[_0x3e74d6].taskTitle;
              $.apTaskListid = _0x16ce4c[_0x3e74d6].id;
              $.taskType = _0x16ce4c[_0x3e74d6].taskType;
              $.taskSourceUrl = _0x16ce4c[_0x3e74d6].taskSourceUrl;
              $.taskFinished = _0x16ce4c[_0x3e74d6].taskFinished;
              $.taskDoTimes = _0x16ce4c[_0x3e74d6].taskDoTimes;
              $.taskFinished = _0x16ce4c[_0x3e74d6].taskFinished;
              $.taskShowTitle = _0x16ce4c[_0x3e74d6].taskShowTitle;
              $.timeLimitPeriod = _0x16ce4c[_0x3e74d6].timeLimitPeriod;
              if ($.timeLimitPeriod == null) {
                if (!$.taskFinished && $.taskType.includes("BROWSE_")) {
                  for (let _0x12ec91 = 0; _0x12ec91 < 1; _0x12ec91++) {
                    console.log("去做 " + $.taskShowTitle);
                    await _0x393b00($.taskType, $.apTaskListid, $.taskSourceUrl);
                    await $.wait(parseInt(Math.random() * 1500 + 1500, 10));
                  }
                }
              } else {
                if (!$.taskFinished && $.taskType.includes("BROWSE_")) for (let _0x55edd0 = 0; _0x55edd0 < 1; _0x55edd0++) {
                  console.log("去做 " + $.taskShowTitle);
                  await _0x293ea7($.apTaskListid, $.taskSourceUrl);
                  await _0x19641c($.apTaskListid);
                  await $.wait($.timeLimitPeriod * 1000 + 1500, 10);
                  await _0x47c483($.apTaskListid);
                  await $.wait(parseInt(Math.random() * 1500 + 1500, 10));
                  await _0xbe086d();
                  await $.wait(parseInt(Math.random() * 1500 + 1500, 10));
                }
              }
            }
          } else console.log("获取任务失败," + (_0xa8c84c?.["errMsg"] || _0xa8c84c?.["msg"] || ""));
        }
      } catch (_0x132157) {
        $.log(_0x132157);
      } finally {
        _0x3d1f01();
      }
    });
  });
}
async function _0x293ea7(_0x55c438, _0x406b41) {
  let _0xac82e4 = {
      "taskId": _0x55c438,
      "channel": 4,
      "linkId": _0xa4b8fd,
      "itemId": _0x406b41
    },
    _0x3dfe1e = {
      "appId": "76674",
      "fn": "apStartTaskTime",
      "body": _0xac82e4,
      "apid": "activities_platform",
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0xac82e4 = await _0x21ab89.getbody(_0x3dfe1e);
  if (!_0xac82e4) return;
  let _0x123d45 = {
    "url": "https://api.m.jd.com/api?" + _0xac82e4,
    "headers": {
      "origin": "https://h5platform.jd.com",
      "Referer": "https://h5platform.jd.com/",
      "User-Agent": $.UA,
      "Cookie": _0x570477,
      "content-type": "application/x-www-form-urlencoded",
      "accept": "application/json, text/plain, */*"
    },
    "timeout": 30000
  };
  return new Promise(async _0x10f3f8 => {
    $.post(_0x123d45, async (_0x4b8a67, _0x120df0, _0x158431) => {
      try {
        if (_0x4b8a67) console.log("" + JSON.stringify(_0x4b8a67));else {
          _0x158431 = JSON.parse(_0x158431);
          if (_0x158431.code == 0) {} else {
            if (_0x158431.code == 402) {} else {}
          }
        }
      } catch (_0x271755) {
        $.logErr(_0x271755, _0x120df0);
      } finally {
        _0x10f3f8();
      }
    });
  });
}
async function _0x19641c(_0x3d97d7) {
  let _0x186966 = {
      "taskId": _0x3d97d7,
      "linkId": _0xa4b8fd
    },
    _0x398bdd = {
      "appId": "76674",
      "fn": "apCheckAndResetTaskTime",
      "body": _0x186966,
      "apid": "activities_platform",
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x186966 = await _0x21ab89.getbody(_0x398bdd);
  if (!_0x186966) return;
  let _0x187a19 = {
    "url": "https://api.m.jd.com/api?" + _0x186966,
    "headers": {
      "origin": "https://h5platform.jd.com",
      "Referer": "https://h5platform.jd.com/",
      "User-Agent": $.UA,
      "Cookie": _0x570477,
      "content-type": "application/x-www-form-urlencoded",
      "accept": "application/json, text/plain, */*"
    },
    "timeout": 30000
  };
  return new Promise(async _0x212ebe => {
    $.post(_0x187a19, async (_0x2aba25, _0x4c3a20, _0x4b442b) => {
      try {
        if (_0x2aba25) console.log("" + JSON.stringify(_0x2aba25));else {
          _0x4b442b = JSON.parse(_0x4b442b);
          if (_0x4b442b.code == 0) {} else {
            if (_0x4b442b.code == 402) {} else {}
          }
        }
      } catch (_0x34a8ec) {
        $.logErr(_0x34a8ec, _0x4c3a20);
      } finally {
        _0x212ebe();
      }
    });
  });
}
async function _0x47c483(_0x3834ba) {
  let _0x5da8a0 = {
      "taskId": _0x3834ba,
      "linkId": _0xa4b8fd
    },
    _0x50a52a = {
      "appId": "76674",
      "fn": "apCheckTaskTimeEnd",
      "body": _0x5da8a0,
      "apid": "activities_platform",
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x5da8a0 = await _0x21ab89.getbody(_0x50a52a);
  if (!_0x5da8a0) return;
  let _0x51ad6e = {
    "url": "https://api.m.jd.com/api?" + _0x5da8a0,
    "headers": {
      "origin": "https://h5platform.jd.com",
      "Referer": "https://h5platform.jd.com/",
      "User-Agent": $.UA,
      "Cookie": _0x570477,
      "content-type": "application/x-www-form-urlencoded",
      "accept": "application/json, text/plain, */*"
    },
    "timeout": 30000
  };
  return new Promise(async _0x4c767a => {
    $.post(_0x51ad6e, async (_0x5d75f7, _0xe1d633, _0xa51d49) => {
      try {
        if (_0x5d75f7) console.log("" + JSON.stringify(_0x5d75f7));else _0xa51d49 = JSON.parse(_0xa51d49);
      } catch (_0xf25edf) {
        $.logErr(_0xf25edf, _0xe1d633);
      } finally {
        _0x4c767a();
      }
    });
  });
}
async function _0x393b00(_0x53a7e1, _0x17f4f4, _0x1452e5) {
  let _0x21cc4f = {
      "taskType": _0x53a7e1,
      "taskId": _0x17f4f4,
      "channel": 4,
      "checkVersion": true,
      "cityId": "",
      "provinceId": "",
      "countyId": "",
      "linkId": _0xa4b8fd,
      "itemId": _0x1452e5
    },
    _0x2d54cb = {
      "appId": "54ed7",
      "fn": "apsDoTask",
      "body": _0x21cc4f,
      "apid": "activities_platform",
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x21cc4f = await _0x21ab89.getbody(_0x2d54cb);
  if (!_0x21cc4f) return;
  let _0x2e631c = {
    "url": "https://api.m.jd.com/api?" + _0x21cc4f,
    "headers": {
      "origin": "https://h5platform.jd.com",
      "Referer": "https://h5platform.jd.com/",
      "User-Agent": $.UA,
      "Cookie": _0x570477,
      "content-type": "application/x-www-form-urlencoded"
    },
    "timeout": 30000
  };
  return new Promise(async _0x59270a => {
    $.post(_0x2e631c, async (_0x41f7fb, _0x4c5620, _0x4e856d) => {
      try {
        if (_0x41f7fb) console.log("" + JSON.stringify(_0x41f7fb));else {
          _0x4e856d = JSON.parse(_0x4e856d);
          if (_0x4e856d.code == 0) console.log("任务完成,开红包次数 +1"), $.drawLotteryNum++;else _0x4e856d.code == 402 ? console.log("任务失败," + (_0x4e856d?.["errMsg"] || "")) : console.log("任务失败," + (_0x4e856d?.["errMsg"] || ""));
        }
      } catch (_0x590876) {
        $.logErr(_0x590876, _0x4c5620);
      } finally {
        _0x59270a();
      }
    });
  });
}
async function _0xbe086d() {
  let _0x18effd = {
      "linkId": _0xa4b8fd
    },
    _0x14c724 = {
      "appId": "ebecc",
      "fn": "apDoLimitTimeTask",
      "body": _0x18effd,
      "apid": "activities_platform",
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x18effd = await _0x21ab89.getbody(_0x14c724);
  if (!_0x18effd) return;
  let _0x58f203 = {
    "url": "https://api.m.jd.com/",
    "body": _0x18effd,
    "headers": {
      "origin": "https://h5platform.jd.com",
      "Referer": "https://h5platform.jd.com/",
      "User-Agent": $.UA,
      "Cookie": _0x570477,
      "content-type": "application/x-www-form-urlencoded",
      "accept": "application/json, text/plain, */*"
    },
    "timeout": 30000
  };
  return new Promise(async _0x397b0c => {
    $.post(_0x58f203, async (_0x3a9697, _0x26e9f3, _0x217a6d) => {
      try {
        if (_0x3a9697) console.log("" + JSON.stringify(_0x3a9697));else {
          _0x217a6d = JSON.parse(_0x217a6d);
          if (_0x217a6d.code == 0) $.drawLotteryNum++, console.log("任务完成,开红包次数 +1");else _0x217a6d.code == 402 ? console.log("任务完成失败," + (_0x217a6d?.["errMsg"] || "")) : console.log("任务完成失败," + (_0x217a6d?.["errMsg"] || ""));
        }
      } catch (_0x2557f2) {
        $.logErr(_0x2557f2, _0x26e9f3);
      } finally {
        _0x397b0c();
      }
    });
  });
}
async function _0x4d6779(_0x295cf8, _0x1fe94c, _0x48f15d, _0x4053f6) {
  return new Promise(async _0x2c778 => {
    const _0x16e96e = {
        "linkId": _0xa4b8fd,
        "businessSource": "NONE",
        "base": {
          "prizeType": 4,
          "business": "richTree",
          "id": _0x295cf8,
          "poolBaseId": _0x1fe94c,
          "prizeGroupId": _0x48f15d,
          "prizeBaseId": _0x4053f6
        }
      },
      _0x1397e5 = {
        "url": "https://api.m.jd.com",
        "body": "functionId=apCashWithDraw&body=" + escape(JSON.stringify(_0x16e96e)) + "&_t=" + +new Date() + "&appid=activities_platform",
        "headers": {
          "origin": "https://h5platform.jd.com",
          "Referer": "https://h5platform.jd.com/",
          "User-Agent": $.UA,
          "Cookie": _0x570477
        },
        "timeout": 30 * 1000
      };
    $.post(_0x1397e5, async (_0x39aefa, _0x44c73e, _0x5131aa) => {
      try {
        if (_0x39aefa) console.log("" + JSON.stringify(_0x39aefa)), console.log($.name + " API请求失败，请检查网路重试");else {
          if (_0x153b3e(_0x5131aa)) {
            _0x5131aa = $.toObj(_0x5131aa);
            if (_0x5131aa.code === 0) {
              if (_0x5131aa.data.status === "310") console.log("提现成功✔️");else {
                console.log("提现失败:" + _0x5131aa.data.message);
                if (_0x5131aa.data.message.includes("上限")) $.txman = true;else _0x5131aa.data.message.includes("已存在状态") && (await $.wait(parseInt(Math.random() * 5000 + 10000, 10)), await _0x4d6779(_0x295cf8, _0x1fe94c, _0x48f15d, _0x4053f6));
              }
            } else console.log(JSON.stringify(_0x5131aa));
          }
        }
      } catch (_0x5e529f) {
        $.logErr(_0x5e529f, _0x44c73e);
      } finally {
        _0x2c778(_0x5131aa);
      }
    });
  });
}
async function _0x1e6165(_0x4a5988) {
  let _0x183ba0 = {
      "linkId": _0xa4b8fd,
      "pageNum": _0x4a5988,
      "pageSize": 100,
      "business": "richTree"
    },
    _0x199818 = {
      "appId": "f2b1d",
      "fn": "superRedBagList",
      "body": _0x183ba0,
      "apid": "activities_platform",
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x183ba0 = await _0x21ab89.getbody(_0x199818);
  if (!_0x183ba0) return;
  let _0x584a89 = {
    "url": "http://api.m.jd.com/api?" + _0x183ba0,
    "headers": {
      "origin": "https://h5platform.jd.com",
      "Referer": "https://h5platform.jd.com/",
      "User-Agent": $.UA,
      "Cookie": _0x570477
    },
    "timeout": 30000
  };
  return new Promise(async _0x1fc396 => {
    $.get(_0x584a89, async (_0x36129a, _0x55063c, _0x2b3386) => {
      try {
        if (_0x36129a) console.log("" + JSON.stringify(_0x36129a));else {
          _0x2b3386 = JSON.parse(_0x2b3386);
          if (_0x2b3386) {
            if (_0x2b3386.code == 0 && _0x2b3386.success == true) {
              const _0x57d93a = (_0x2b3386.data.items || []).filter(_0x2bcefc => _0x2bcefc.prizeType === 4 && _0x2bcefc.state === 0 || _0x2bcefc.state === 2);
              for (let _0x2d59a5 of _0x57d93a) {
                console.log("去提现" + _0x2d59a5.amount);
                await _0x4d6779(_0x2d59a5.id, _0x2d59a5.poolBaseId, _0x2d59a5.prizeGroupId, _0x2d59a5.prizeBaseId);
                await $.wait(parseInt(Math.random() * 5000 + 5000, 10));
                if ($.txman) {
                  break;
                }
              }
            } else console.log(JSON.stringify(_0x2b3386));
          }
        }
      } catch (_0x544e90) {
        $.logErr(_0x544e90, _0x55063c);
      } finally {
        _0x1fc396();
      }
    });
  });
}
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
