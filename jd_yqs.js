/*
特价版摇钱树
46 3,15 * * * jd_yqs.js
 */
const $ = new Env('摇钱树');
const bdy_0xe41c8e = $.isNode() ? require("./sendNotify") : "",
  bdy_0x5410e1 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x99a83c = require("./function/dylans"),
  bdy_0x305423 = require("./USER_AGENTS");
let bdy_0x55e97d = [],
  bdy_0x167fd0 = "";
const bdy_0x39f5fa = "Zo2V3cM1MM6mVgjjsX3pCQ";
if ($.isNode()) {
  Object.keys(bdy_0x5410e1).forEach(_0x25f50c => {
    bdy_0x55e97d.push(bdy_0x5410e1[_0x25f50c]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x55e97d = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...bdy_0x304bd6($.getdata("CookiesJD") || "[]").map(_0x1056b3 => _0x1056b3.cookie)].filter(_0x30873b => !!_0x30873b);
}
!(async () => {
  if (!bdy_0x55e97d[0]) {
    const _0x439c49 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x439c49);
    return;
  }
  for (let _0x3001b4 = 0; _0x3001b4 < bdy_0x55e97d.length; _0x3001b4++) {
    if (bdy_0x55e97d[_0x3001b4]) {
      bdy_0x167fd0 = bdy_0x55e97d[_0x3001b4];
      $.UserName = decodeURIComponent(bdy_0x167fd0.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x167fd0.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x3001b4 + 1;
      $.isLogin = true;
      $.nickName = "";
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      if (!$.isLogin) {
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        });
        $.isNode() && (await bdy_0xe41c8e.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      $.UA = bdy_0x305423.UARAM ? bdy_0x305423.UARAM() : bdy_0x305423.USER_AGENT;
      await bdy_0x2e0b19();
      await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
    }
  }
})().catch(_0x39f0a3 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x39f0a3 + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0x2e0b19() {
  $.txman = false;
  $.runflag = false;
  $.drawLotteryNum = 0;
  await bdy_0x4ff0a7(true);
  await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
  if ($.runflag) {
    await bdy_0x4ff0a7(false);
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    await bdy_0x558b55();
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    console.log("\n去开红包...");
    for (let _0x24d51c = 0; _0x24d51c < $.drawLotteryNum; _0x24d51c++) {
      await bdy_0x4eafa4();
      await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    }
    console.log("\n去提现...");
    for (let _0x582da4 = 0; _0x582da4 < 1; _0x582da4++) {
      await bdy_0x130b14(1);
      await $.wait(parseInt(Math.random() * 2000 + 2000, 10));
      if ($.txman) {
        break;
      }
    }
  }
}
function bdy_0x1e51f9(_0x178d6f) {
  try {
    if (typeof JSON.parse(_0x178d6f) == "object") {
      return true;
    }
  } catch (_0x1fbf4c) {
    console.log(_0x1fbf4c);
    console.log("京东服务器访问数据为空，请检查网络情况");
    return false;
  }
}
function bdy_0x304bd6(_0x32c9a5) {
  if (typeof _0x32c9a5 == "string") {
    try {
      return JSON.parse(_0x32c9a5);
    } catch (_0x121c87) {
      console.log(_0x121c87);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function bdy_0x4ff0a7(_0x11de1) {
  let _0x8af154 = {
      linkId: bdy_0x39f5fa
    },
    _0x3aa7f8 = {
      appId: "34e92",
      functionId: "richTreeHome",
      body: _0x8af154,
      appid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
  _0x8af154 = await bdy_0x99a83c.getbody(_0x3aa7f8);
  if (!_0x8af154) {
    return;
  }
  let _0x3df2a7 = {
    url: "https://api.m.jd.com/api?" + _0x8af154,
    headers: {
      origin: "https://h5platform.jd.com",
      Referer: "https://h5platform.jd.com/",
      "User-Agent": $.UA,
      Cookie: bdy_0x167fd0,
      "content-type": "application/x-www-form-urlencoded",
      accept: "application/json, text/plain, */*"
    },
    timeout: 30000
  };
  return new Promise(async _0x334377 => {
    $.post(_0x3df2a7, async (_0x4f2812, _0x57fc4a, _0x1076a3) => {
      try {
        if (_0x4f2812) {
          console.log("" + JSON.stringify(_0x4f2812));
        } else {
          _0x1076a3 = JSON.parse(_0x1076a3);
          if (_0x1076a3.code == 0) {
            $.drawLotteryNum = _0x1076a3?.["data"]?.["drawLotteryNum"];
            let _0x36a8d4 = _0x1076a3?.["data"]?.["kettle"]?.["currentCapacity"],
              _0xf15921 = _0x1076a3?.["data"]?.["richTree"]?.["nowStep"],
              _0x3ba5ea = _0x1076a3?.["data"]?.["richTree"]?.["nowExp"];
            _0x11de1 && console.log("剩余水滴：" + _0x36a8d4 + ",等级：" + _0xf15921 + ",进度：" + _0x3ba5ea + "%");
            if (_0x1076a3?.["data"]?.["prizeDrawVO"] != null) {
              console.log("获得新手礼包: " + _0x1076a3?.["data"]?.["prizeDrawVO"]?.["prizeConfigName"]);
              await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
              await bdy_0x1758d4(_0x36a8d4, 2);
            } else {
              $.runflag = true;
              let _0x4669b4 = _0x1076a3?.["data"]?.["totalReward"] || [];
              $.prizeList = "";
              for (let _0x80e002 = 0; _0x80e002 < _0x4669b4.length; _0x80e002++) {
                $.amount = _0x4669b4[_0x80e002].amount;
                $.prizeType = _0x4669b4[_0x80e002].prizeType;
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
                _0x80e002 != _0x4669b4.length - 1 ? $.prizeList += $.prizeType + "：" + $.amount + "，" : $.prizeList += $.prizeType + "：" + $.amount;
              }
              _0x11de1 && console.log("获得累计：" + $.prizeList);
              await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
              _0x36a8d4 >= 2000 && _0xf15921 < 40 && (await bdy_0x1758d4(_0x36a8d4, 0), await $.wait(parseInt(Math.random() * 1000 + 1000, 10)));
            }
          } else {
            _0x1076a3.code == 402 ? console.log("获取活动失败," + (_0x1076a3?.["errMsg"] || "")) : console.log("获取活动失败," + (_0x1076a3?.["errMsg"] || ""));
          }
        }
      } catch (_0x4b82f0) {
        $.logErr(_0x4b82f0, _0x57fc4a);
      } finally {
        _0x334377();
      }
    });
  });
}
async function bdy_0x1758d4(_0x236703, _0x9c3662) {
  let _0x4f0b64 = {
      waterNum: _0x236703,
      type: _0x9c3662,
      linkId: bdy_0x39f5fa
    },
    _0x1f308a = {
      appId: "34e92",
      functionId: "richTreeWater",
      body: _0x4f0b64,
      appid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
  _0x4f0b64 = await bdy_0x99a83c.getbody(_0x1f308a);
  if (!_0x4f0b64) {
    return;
  }
  const _0x29a359 = {
    origin: "https://h5platform.jd.com",
    Referer: "https://h5platform.jd.com/",
    "User-Agent": $.UA,
    Cookie: bdy_0x167fd0,
    "content-type": "application/x-www-form-urlencoded",
    accept: "application/json, text/plain, */*"
  };
  let _0x301969 = {
    url: "https://api.m.jd.com/api?" + _0x4f0b64,
    headers: _0x29a359,
    timeout: 30000
  };
  return new Promise(async _0x5cd514 => {
    $.post(_0x301969, async (_0x39f0a6, _0x1c4f8e, _0x24433d) => {
      try {
        if (_0x39f0a6) {
          console.log("" + JSON.stringify(_0x39f0a6));
        } else {
          _0x24433d = JSON.parse(_0x24433d);
          if (_0x24433d.code == 0) {
            let _0x264dab = _0x24433d?.["data"]?.["redPacketNum"] || 0;
            console.log("浇水完成,开红包次数+" + _0x264dab);
            await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
            $.drawLotteryNum = $.drawLotteryNum + _0x264dab;
          } else {
            _0x24433d.code == 402 ? console.log("浇水失败," + (_0x24433d?.["errMsg"] || "")) : console.log("浇水失败," + (_0x24433d?.["errMsg"] || ""));
          }
        }
      } catch (_0x62b4bb) {
        $.logErr(_0x62b4bb, _0x1c4f8e);
      } finally {
        _0x5cd514();
      }
    });
  });
}
async function bdy_0x4eafa4() {
  let _0x5c47ee = {
      linkId: bdy_0x39f5fa
    },
    _0x2383a7 = {
      appId: "34e92",
      functionId: "richTreeOpen",
      body: _0x5c47ee,
      appid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
  _0x5c47ee = await bdy_0x99a83c.getbody(_0x2383a7);
  if (!_0x5c47ee) {
    return;
  }
  let _0x3ca799 = {
    url: "https://api.m.jd.com/api?" + _0x5c47ee,
    headers: {
      origin: "https://h5platform.jd.com",
      Referer: "https://h5platform.jd.com/",
      "User-Agent": $.UA,
      Cookie: bdy_0x167fd0,
      "content-type": "application/x-www-form-urlencoded",
      accept: "application/json, text/plain, */*"
    },
    timeout: 30000
  };
  return new Promise(async _0xb50e34 => {
    $.post(_0x3ca799, async (_0x56c61e, _0x50d4e6, _0x560c2b) => {
      try {
        if (_0x56c61e) {
          console.log("" + JSON.stringify(_0x56c61e));
        } else {
          _0x560c2b = JSON.parse(_0x560c2b);
          if (_0x560c2b.code == 0) {
            switch (_0x560c2b?.["data"]?.["prizeType"]) {
              case 1:
                console.log("获得," + _0x560c2b?.["data"]?.["prizeConfigName"]);
                break;
              case 2:
                console.log("获得" + _0x560c2b?.["data"]?.["prizeConfigName"] + "🧧");
                break;
              case 4:
                console.log("获得" + _0x560c2b?.["data"]?.["prizeConfigName"] + "💰️");
                break;
              case null:
                console.log("空气");
                break;
              default:
                console.log(_0x560c2b?.["data"]?.["prizeType"]);
                return;
            }
          } else {
            _0x560c2b.code == 402 ? console.log("开红包失败," + (_0x560c2b?.["errMsg"] || "")) : console.log("开红包失败," + (_0x560c2b?.["errMsg"] || ""));
          }
        }
      } catch (_0x403270) {
        $.logErr(_0x403270, _0x50d4e6);
      } finally {
        _0xb50e34();
      }
    });
  });
}
async function bdy_0x558b55() {
  let _0x469b81 = {
    url: "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22:%22Zo2V3cM1MM6mVgjjsX3pCQ%22%7D&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=13.0.6",
    headers: {
      origin: "https://h5platform.jd.com",
      Referer: "https://h5platform.jd.com/",
      "User-Agent": $.UA,
      Cookie: bdy_0x167fd0,
      "content-type": "application/x-www-form-urlencoded",
      accept: "application/json, text/plain, */*"
    },
    timeout: 30000
  };
  return new Promise(_0x35a598 => {
    $.get(_0x469b81, async (_0x43bfc8, _0x4761e6, _0x46d32e) => {
      try {
        if (_0x43bfc8) {
          $.log(_0x43bfc8);
        } else {
          _0x46d32e = JSON.parse(_0x46d32e);
          if (_0x46d32e?.["code"] == 0) {
            let _0x2c37ee = _0x46d32e?.["data"] || [];
            for (let _0x2f4453 = 0; _0x2f4453 < _0x2c37ee.length; _0x2f4453++) {
              $.taskTitle = _0x2c37ee[_0x2f4453].taskTitle;
              $.apTaskListid = _0x2c37ee[_0x2f4453].id;
              $.taskType = _0x2c37ee[_0x2f4453].taskType;
              $.taskSourceUrl = _0x2c37ee[_0x2f4453].taskSourceUrl;
              $.taskFinished = _0x2c37ee[_0x2f4453].taskFinished;
              $.taskDoTimes = _0x2c37ee[_0x2f4453].taskDoTimes;
              $.taskFinished = _0x2c37ee[_0x2f4453].taskFinished;
              $.taskShowTitle = _0x2c37ee[_0x2f4453].taskShowTitle;
              $.timeLimitPeriod = _0x2c37ee[_0x2f4453].timeLimitPeriod;
              if ($.timeLimitPeriod == null) {
                if (!$.taskFinished && $.taskType.includes("BROWSE_")) {
                  for (let _0x3561eb = 0; _0x3561eb < 1; _0x3561eb++) {
                    console.log("去做 " + $.taskShowTitle);
                    await bdy_0x45b6c8($.taskType, $.apTaskListid, $.taskSourceUrl);
                    await $.wait(parseInt(Math.random() * 1500 + 1500, 10));
                  }
                }
              } else {
                if (!$.taskFinished && $.taskType.includes("BROWSE_")) {
                  for (let _0x2bb548 = 0; _0x2bb548 < 1; _0x2bb548++) {
                    console.log("去做 " + $.taskShowTitle);
                    await bdy_0x572ae4($.apTaskListid, $.taskSourceUrl);
                    await bdy_0x53f171($.apTaskListid);
                    await $.wait($.timeLimitPeriod * 1000 + 1500, 10);
                    await bdy_0x553cad($.apTaskListid);
                    await $.wait(parseInt(Math.random() * 1500 + 1500, 10));
                    await bdy_0x37fc00();
                    await $.wait(parseInt(Math.random() * 1500 + 1500, 10));
                  }
                }
              }
            }
          } else {
            console.log("获取任务失败," + (_0x46d32e?.["errMsg"] || _0x46d32e?.["msg"] || ""));
          }
        }
      } catch (_0x5df111) {
        $.log(_0x5df111);
      } finally {
        _0x35a598();
      }
    });
  });
}
async function bdy_0x572ae4(_0x29b2c0, _0x38656d) {
  let _0x39f218 = {
      taskId: _0x29b2c0,
      channel: 4,
      linkId: bdy_0x39f5fa,
      itemId: _0x38656d
    },
    _0x4a9ef9 = {
      appId: "76674",
      functionId: "apStartTaskTime",
      body: _0x39f218,
      appid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
  _0x39f218 = await bdy_0x99a83c.getbody(_0x4a9ef9);
  if (!_0x39f218) {
    return;
  }
  const _0x39ce67 = {
    origin: "https://h5platform.jd.com",
    Referer: "https://h5platform.jd.com/",
    "User-Agent": $.UA,
    Cookie: bdy_0x167fd0,
    "content-type": "application/x-www-form-urlencoded",
    accept: "application/json, text/plain, */*"
  };
  let _0x5a7737 = {
    url: "https://api.m.jd.com/api?" + _0x39f218,
    headers: _0x39ce67,
    timeout: 30000
  };
  return new Promise(async _0x2d2caf => {
    $.post(_0x5a7737, async (_0x2c9a2a, _0x10b01d, _0xd97042) => {
      try {
        if (_0x2c9a2a) {
          console.log("" + JSON.stringify(_0x2c9a2a));
        } else {
          _0xd97042 = JSON.parse(_0xd97042);
          if (!(_0xd97042.code == 0)) {
            !(_0xd97042.code == 402);
          }
        }
      } catch (_0x53ce08) {
        $.logErr(_0x53ce08, _0x10b01d);
      } finally {
        _0x2d2caf();
      }
    });
  });
}
async function bdy_0x53f171(_0x5a2397) {
  let _0x23cd32 = {
      taskId: _0x5a2397,
      linkId: bdy_0x39f5fa
    },
    _0x59ccaa = {
      appId: "76674",
      functionId: "apCheckAndResetTaskTime",
      body: _0x23cd32,
      appid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
  _0x23cd32 = await bdy_0x99a83c.getbody(_0x59ccaa);
  if (!_0x23cd32) {
    return;
  }
  let _0x263395 = {
    url: "https://api.m.jd.com/api?" + _0x23cd32,
    headers: {
      origin: "https://h5platform.jd.com",
      Referer: "https://h5platform.jd.com/",
      "User-Agent": $.UA,
      Cookie: bdy_0x167fd0,
      "content-type": "application/x-www-form-urlencoded",
      accept: "application/json, text/plain, */*"
    },
    timeout: 30000
  };
  return new Promise(async _0xf65bbc => {
    $.post(_0x263395, async (_0x7c6432, _0x43a1a1, _0x2d338f) => {
      try {
        if (_0x7c6432) {
          console.log("" + JSON.stringify(_0x7c6432));
        } else {
          _0x2d338f = JSON.parse(_0x2d338f);
          if (!(_0x2d338f.code == 0)) {
            !(_0x2d338f.code == 402);
          }
        }
      } catch (_0x2717bd) {
        $.logErr(_0x2717bd, _0x43a1a1);
      } finally {
        _0xf65bbc();
      }
    });
  });
}
async function bdy_0x553cad(_0x583da8) {
  let _0x1d1fa4 = {
      taskId: _0x583da8,
      linkId: bdy_0x39f5fa
    },
    _0x10db2e = {
      appId: "76674",
      functionId: "apCheckTaskTimeEnd",
      body: _0x1d1fa4,
      appid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
  _0x1d1fa4 = await bdy_0x99a83c.getbody(_0x10db2e);
  if (!_0x1d1fa4) {
    return;
  }
  let _0x18df1a = {
    url: "https://api.m.jd.com/api?" + _0x1d1fa4,
    headers: {
      origin: "https://h5platform.jd.com",
      Referer: "https://h5platform.jd.com/",
      "User-Agent": $.UA,
      Cookie: bdy_0x167fd0,
      "content-type": "application/x-www-form-urlencoded",
      accept: "application/json, text/plain, */*"
    },
    timeout: 30000
  };
  return new Promise(async _0xa871c1 => {
    $.post(_0x18df1a, async (_0x52364b, _0x549ee, _0x42a38b) => {
      try {
        if (_0x52364b) {
          console.log("" + JSON.stringify(_0x52364b));
        } else {
          _0x42a38b = JSON.parse(_0x42a38b);
        }
      } catch (_0x13ede1) {
        $.logErr(_0x13ede1, _0x549ee);
      } finally {
        _0xa871c1();
      }
    });
  });
}
async function bdy_0x45b6c8(_0x1e513c, _0x20fa3a, _0x5dcd36) {
  let _0x26264c = {
      taskType: _0x1e513c,
      taskId: _0x20fa3a,
      channel: 4,
      checkVersion: true,
      cityId: "",
      provinceId: "",
      countyId: "",
      linkId: bdy_0x39f5fa,
      itemId: _0x5dcd36
    },
    _0x15114d = {
      appId: "54ed7",
      functionId: "apsDoTask",
      body: _0x26264c,
      appid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
  _0x26264c = await bdy_0x99a83c.getbody(_0x15114d);
  if (!_0x26264c) {
    return;
  }
  let _0x646d99 = {
    url: "https://api.m.jd.com/api?" + _0x26264c,
    headers: {
      origin: "https://h5platform.jd.com",
      Referer: "https://h5platform.jd.com/",
      "User-Agent": $.UA,
      Cookie: bdy_0x167fd0,
      "content-type": "application/x-www-form-urlencoded"
    },
    timeout: 30000
  };
  return new Promise(async _0x174c54 => {
    $.post(_0x646d99, async (_0x311235, _0x183911, _0x57f62b) => {
      try {
        if (_0x311235) {
          console.log("" + JSON.stringify(_0x311235));
        } else {
          _0x57f62b = JSON.parse(_0x57f62b);
          if (_0x57f62b.code == 0) {
            console.log("任务完成,开红包次数 +1");
            $.drawLotteryNum++;
          } else {
            _0x57f62b.code == 402 ? console.log("任务失败," + (_0x57f62b?.["errMsg"] || "")) : console.log("任务失败," + (_0x57f62b?.["errMsg"] || ""));
          }
        }
      } catch (_0x1bfb70) {
        $.logErr(_0x1bfb70, _0x183911);
      } finally {
        _0x174c54();
      }
    });
  });
}
async function bdy_0x37fc00() {
  let _0x33ee28 = {
      linkId: bdy_0x39f5fa
    },
    _0x423c0b = {
      appId: "ebecc",
      functionId: "apDoLimitTimeTask",
      body: _0x33ee28,
      appid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
  _0x33ee28 = await bdy_0x99a83c.getbody(_0x423c0b);
  if (!_0x33ee28) {
    return;
  }
  const _0x5b7106 = {
    origin: "https://h5platform.jd.com",
    Referer: "https://h5platform.jd.com/",
    "User-Agent": $.UA,
    Cookie: bdy_0x167fd0,
    "content-type": "application/x-www-form-urlencoded",
    accept: "application/json, text/plain, */*"
  };
  let _0x4cd2bb = {
    url: "https://api.m.jd.com/",
    body: _0x33ee28,
    headers: _0x5b7106,
    timeout: 30000
  };
  return new Promise(async _0x4793c3 => {
    $.post(_0x4cd2bb, async (_0x372085, _0x46b475, _0x40c279) => {
      try {
        if (_0x372085) {
          console.log("" + JSON.stringify(_0x372085));
        } else {
          _0x40c279 = JSON.parse(_0x40c279);
          if (_0x40c279.code == 0) {
            $.drawLotteryNum++;
            console.log("任务完成,开红包次数 +1");
          } else {
            _0x40c279.code == 402 ? console.log("任务完成失败," + (_0x40c279?.["errMsg"] || "")) : console.log("任务完成失败," + (_0x40c279?.["errMsg"] || ""));
          }
        }
      } catch (_0xed9be7) {
        $.logErr(_0xed9be7, _0x46b475);
      } finally {
        _0x4793c3();
      }
    });
  });
}
async function bdy_0x2d359b(_0x176135, _0x25d4f5, _0x2434ab, _0x1a3f4a) {
  return new Promise(async _0x4c65ff => {
    const _0x547b97 = {
      prizeType: 4,
      business: "richTree",
      id: _0x176135,
      poolBaseId: _0x25d4f5,
      prizeGroupId: _0x2434ab,
      prizeBaseId: _0x1a3f4a
    };
    const _0x4286a3 = {
      origin: "https://h5platform.jd.com",
      Referer: "https://h5platform.jd.com/",
      "User-Agent": $.UA,
      Cookie: bdy_0x167fd0
    };
    const _0x15cb10 = {
        linkId: bdy_0x39f5fa,
        businessSource: "NONE",
        base: _0x547b97
      },
      _0x550d6d = {
        url: "https://api.m.jd.com",
        body: "functionId=apCashWithDraw&body=" + escape(JSON.stringify(_0x15cb10)) + "&_t=" + +new Date() + "&appid=activities_platform",
        headers: _0x4286a3,
        timeout: 30000
      };
    $.post(_0x550d6d, async (_0x4d2dcc, _0x536b56, _0x49038b) => {
      try {
        if (_0x4d2dcc) {
          console.log("" + JSON.stringify(_0x4d2dcc));
          console.log($.name + " API请求失败，请检查网路重试");
        } else {
          if (bdy_0x1e51f9(_0x49038b)) {
            _0x49038b = $.toObj(_0x49038b);
            if (_0x49038b.code === 0) {
              if (_0x49038b.data.status === "310") {
                console.log("提现成功✔️");
              } else {
                console.log("提现失败:" + _0x49038b.data.message);
                if (_0x49038b.data.message.includes("上限")) {
                  $.txman = true;
                } else {
                  _0x49038b.data.message.includes("已存在状态") && (await $.wait(parseInt(Math.random() * 5000 + 10000, 10)), await bdy_0x2d359b(_0x176135, _0x25d4f5, _0x2434ab, _0x1a3f4a));
                }
              }
            } else {
              console.log(JSON.stringify(_0x49038b));
            }
          }
        }
      } catch (_0x5965af) {
        $.logErr(_0x5965af, _0x536b56);
      } finally {
        _0x4c65ff(_0x49038b);
      }
    });
  });
}
async function bdy_0x130b14(_0x3eb448) {
  let _0x134031 = {
      linkId: bdy_0x39f5fa,
      pageNum: _0x3eb448,
      pageSize: 100,
      business: "richTree"
    },
    _0x3a5d4a = {
      appId: "f2b1d",
      functionId: "superRedBagList",
      body: _0x134031,
      appid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
  _0x134031 = await bdy_0x99a83c.getbody(_0x3a5d4a);
  if (!_0x134031) {
    return;
  }
  const _0xa69af0 = {
    origin: "https://h5platform.jd.com",
    Referer: "https://h5platform.jd.com/",
    "User-Agent": $.UA,
    Cookie: bdy_0x167fd0
  };
  let _0x19a92a = {
    url: "http://api.m.jd.com/api?" + _0x134031,
    headers: _0xa69af0,
    timeout: 30000
  };
  return new Promise(async _0x21b3c0 => {
    $.get(_0x19a92a, async (_0x15e4de, _0x44152c, _0x5b894e) => {
      try {
        if (_0x15e4de) {
          console.log("" + JSON.stringify(_0x15e4de));
        } else {
          _0x5b894e = JSON.parse(_0x5b894e);
          if (_0x5b894e) {
            if (_0x5b894e.code == 0 && _0x5b894e.success == true) {
              const _0x44d324 = (_0x5b894e.data.items || []).filter(_0x11058f => _0x11058f.prizeType === 4 && _0x11058f.state === 0 || _0x11058f.state === 2);
              for (let _0x578f87 of _0x44d324) {
                console.log("去提现" + _0x578f87.amount);
                await bdy_0x2d359b(_0x578f87.id, _0x578f87.poolBaseId, _0x578f87.prizeGroupId, _0x578f87.prizeBaseId);
                await $.wait(parseInt(Math.random() * 5000 + 5000, 10));
                if ($.txman) {
                  break;
                }
              }
            } else {
              console.log(JSON.stringify(_0x5b894e));
            }
          }
        }
      } catch (_0x447a01) {
        $.logErr(_0x447a01, _0x44152c);
      } finally {
        _0x21b3c0();
      }
    });
  });
}
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
