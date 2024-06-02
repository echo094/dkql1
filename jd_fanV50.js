/*
15 1,15 * * * jd_fanV50.js
 */

const $ = new Env('小范大人V你50');
const bdy_0x8c58e = $.isNode() ? require("./sendNotify") : "",
  bdy_0x3235ab = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x3f2ea7 = require("./USER_AGENTS"),
  bdy_0x35d05 = require("./function/dylany");
let bdy_0x2f912c = true,
  bdy_0x3c8bda = [],
  bdy_0x1dc602 = [],
  bdy_0x4e35c7 = "",
  bdy_0x4ff417 = "";
if ($.isNode()) {
  Object.keys(bdy_0x3235ab).forEach(_0xeb070c => {
    bdy_0x1dc602.push(bdy_0x3235ab[_0xeb070c]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x1dc602 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...bdy_0x40a6e3($.getdata("CookiesJD") || "[]").map(_0x24c7ca => _0x24c7ca.cookie)].filter(_0x126c92 => !!_0x126c92);
}
$.linkId = "kKf0fO1O_28HF2Ff0hucCw";
!(async () => {
  if (!bdy_0x1dc602[0]) {
    const _0x365ede = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x365ede);
    return;
  }
  console.log("问题建议：https://t.me/dylan_jdpro");
  for (let _0x33765a = 0; _0x33765a < bdy_0x1dc602.length; _0x33765a++) {
    if (bdy_0x1dc602[_0x33765a]) {
      bdy_0x4e35c7 = bdy_0x1dc602[_0x33765a];
      $.UserName = decodeURIComponent(bdy_0x4e35c7.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x4e35c7.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x33765a + 1;
      $.isLogin = true;
      $.nickName = "";
      $.UA = bdy_0x3f2ea7.UARAM ? bdy_0x3f2ea7.UARAM() : bdy_0x3f2ea7.USER_AGENT;
      await bdy_0x25fae0();
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      if (!$.isLogin) {
        const _0x27473f = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x27473f);
        $.isNode() && (await bdy_0x8c58e.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      let _0x320c83 = await bdy_0x3f4c76();
      if (_0x320c83.length != 0) {
        console.log("\n去做任务...");
        for (let _0x26ec53 of _0x320c83) {
          if (_0x26ec53.taskTitle === "邀请好友助力") {
            continue;
          }
          if (_0x26ec53.taskFinished) {
            console.log(_0x26ec53.taskShowTitle + " ---- 已完成");
            continue;
          }
          console.log("去做任务 " + _0x26ec53.taskShowTitle);
          if (_0x26ec53.taskType === "FOLLOW_CHANNEL") {
            await bdy_0xc3fb4a();
          }
          let _0x5670ee = await bdy_0x19971d(_0x26ec53.taskType, _0x26ec53.id);
          if (_0x5670ee.code) {
            break;
          }
          let _0x5f4f71 = _0x26ec53.taskLimitTimes - _0x26ec53.taskDoTimes;
          for (let _0x114f3c of _0x5670ee) {
            if (_0x5f4f71 == 0) {
              break;
            }
            _0x26ec53.id == 5281 && (_0x114f3c.itemId = _0x114f3c.itemName);
            await bdy_0x5f5896(_0x114f3c.itemId, _0x26ec53.taskType, _0x26ec53.id);
            await $.wait(parseInt(Math.random() * 500 + 1000, 10));
            _0x5f4f71--;
          }
        }
      } else {
        console.log("活动结束了，期待下期！");
        return;
      }
      await bdy_0xe01696();
      if ($.remainchance > 0) {
        $.log("\n开始抽奖...");
        for (let _0x41f100 = 0; _0x41f100 < $.remainchance; _0x41f100++) {
          $.log("第" + (_0x41f100 + 1) + "次抽奖：");
          await bdy_0x3b5b6e();
          await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
        }
      }
      await $.wait(parseInt(Math.random() * 1000 + 1500, 10));
    }
  }
  bdy_0x4ff417 && (await bdy_0x8c58e.sendNotify($.name, bdy_0x4ff417));
})().catch(_0x23ad3b => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x23ad3b + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0xe01696() {
  const _0x598634 = {
    linkId: $.linkId,
    taskId: "",
    inviter: "",
    inJdApp: true
  };
  let _0x2c64cd = _0x598634,
    _0x317e32 = {
      appId: "b7d17",
      fn: "superLeagueHome",
      body: _0x2c64cd,
      apid: "activities_platform",
      ver: $.UA.split(";")[2],
      cl: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
  _0x2c64cd = await bdy_0x35d05.getbody(_0x317e32);
  if (!_0x2c64cd) {
    return;
  }
  return new Promise(async _0x1c1f14 => {
    $.post(bdy_0x147f0d(_0x2c64cd), async (_0xf37a53, _0x65fc1a, _0x39a043) => {
      try {
        _0xf37a53 ? (console.log("" + JSON.stringify(_0xf37a53)), console.log(" API请求失败，请检查网路重试")) : (_0x39a043 = JSON.parse(_0x39a043), _0x39a043.code == 0 ? ($.remainchance = _0x39a043.data.remainTimes || 0, bdy_0x3c8bda.push(_0x39a043.data.userCode)) : console.log(_0x39a043.msg));
      } catch (_0x49218c) {
        $.logErr(_0x49218c, _0x65fc1a);
      } finally {
        _0x1c1f14(_0x39a043);
      }
    });
  });
}
async function bdy_0xea5070(_0x1b7d81) {
  const _0x2f27a7 = {
    linkId: $.linkId,
    taskId: 5144,
    inviter: _0x1b7d81,
    inJdApp: true
  };
  let _0x44593b = _0x2f27a7,
    _0x3e2165 = {
      appId: "b7d17",
      fn: "superLeagueHome",
      body: _0x44593b,
      apid: "activities_platform",
      ver: $.UA.split(";")[2],
      cl: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
  _0x44593b = await bdy_0x35d05.getbody(_0x3e2165);
  if (!_0x44593b) {
    return;
  }
  return new Promise(async _0x4a8207 => {
    $.post(bdy_0x147f0d(_0x44593b), async (_0x5e7315, _0x364eda, _0x268eef) => {
      try {
        _0x5e7315 ? (console.log("" + JSON.stringify(_0x5e7315)), console.log(" API请求失败，请检查网路重试")) : (_0x268eef = JSON.parse(_0x268eef), _0x268eef.code == 0 ? $.remainchance = _0x268eef.data.remainTimes || 0 : console.log(_0x268eef.msg));
      } catch (_0x5a0a20) {
        $.logErr(_0x5a0a20, _0x364eda);
      } finally {
        _0x4a8207(_0x268eef);
      }
    });
  });
}
async function bdy_0xc3fb4a() {
  const _0x1ab343 = {
    Host: "api.m.jd.com",
    Origin: "https://pro.m.jd.com",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": $.UA,
    Cookie: bdy_0x4e35c7
  };
  let _0x2e74d3 = {
    url: "https://api.m.jd.com/userFollow",
    body: "appid=jd-super-market&t=" + Date.now() + "&functionId=userFollow&client=m&body=%7B%22pin%22%3A%22%E9%85%B7%E5%A5%94%E8%B5%B6%E4%B8%8D%E4%B8%8A%22%2C%22type%22%3A%220%22%2C%22businessId%22%3A1%2C%22themeId%22%3A112%2C%22babelChannel%22%3A%22ttt9%22%2C%22isJdApp%22%3A%221%22%2C%22isWx%22%3A%220%22%7D",
    headers: _0x1ab343
  };
  return new Promise(async _0x57bc38 => {
    $.post(_0x2e74d3, async (_0x204294, _0x4766d3, _0x2c014e) => {
      try {
        if (_0x204294) {
          console.log("" + JSON.stringify(_0x204294));
          console.log(" API请求失败，请检查网路重试");
        } else {
          _0x2c014e = JSON.parse(_0x2c014e);
          !(_0x2c014e.code == 0);
        }
      } catch (_0x270dcc) {
        $.logErr(_0x270dcc, _0x4766d3);
      } finally {
        _0x57bc38(_0x2c014e);
      }
    });
  });
}
async function bdy_0x3f4c76() {
  let _0x320ba9 = "";
  return new Promise(async _0xea04ee => {
    $.post(bdy_0x147f0d("functionId=apTaskList&body=%7B%22linkId%22%3A%22" + $.linkId + "%22%7D&t=" + Date.now() + "&appid=activities_platform&client=android&clientVersion=12.1.0"), async (_0x519ea2, _0x286ae9, _0x36a954) => {
      try {
        _0x519ea2 ? (console.log("" + JSON.stringify(_0x519ea2)), console.log(" API请求失败，请检查网路重试")) : (_0x36a954 = JSON.parse(_0x36a954), _0x36a954.code == 0 ? _0x320ba9 = _0x36a954.data : console.log(_0x36a954.msg));
      } catch (_0x1d863a) {
        $.logErr(_0x1d863a, _0x286ae9);
      } finally {
        _0xea04ee(_0x320ba9);
      }
    });
  });
}
async function bdy_0x3b5b6e() {
  const _0x554ac3 = {
    linkId: $.linkId
  };
  let _0x19f5f9 = _0x554ac3,
    _0x201025 = {
      appId: "60dc4",
      fn: "superLeagueLottery",
      body: _0x19f5f9,
      apid: "activities_platform",
      ver: $.UA.split(";")[2],
      cl: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
  _0x19f5f9 = await bdy_0x35d05.getbody(_0x201025);
  if (!_0x19f5f9) {
    return;
  }
  return new Promise(async _0x456977 => {
    $.post(bdy_0x147f0d(_0x19f5f9), async (_0x4ae5e3, _0x2500e7, _0x480944) => {
      try {
        _0x4ae5e3 ? (console.log("" + JSON.stringify(_0x4ae5e3)), console.log(" API请求失败，请检查网路重试")) : (_0x480944 = JSON.parse(_0x480944), _0x480944.success ? _0x480944.data.prizeConfigName ? _0x480944.data.prizeConfigName.includes("超市卡") ? (console.log("----获得：" + _0x480944.data.prizeConfigName + " 🤑"), _0x480944.data.prizeConfigName === "50元超市卡" && (bdy_0x4ff417 += "[账号" + $.index + $.UserName + "]获得：  " + _0x480944.data.prizeConfigName + "\n")) : console.log("----获得：" + _0x480944.data.prizeConfigName + " " + _0x480944.data.codeDesc) : console.log("----空气") : console.log(_0x480944.msg));
      } catch (_0x472171) {
        $.logErr(_0x472171, _0x2500e7);
      } finally {
        _0x456977();
      }
    });
  });
}
async function bdy_0x5f5896(_0xf97ce9, _0x681cc4, _0x20cd47) {
  const _0x5458b7 = {
    taskType: "" + _0x681cc4,
    taskId: _0x20cd47,
    channel: 4,
    checkVersion: true,
    cityId: 0,
    provinceId: 0,
    countyId: 0,
    linkId: $.linkId,
    taskInsert: false,
    resourceType: null,
    itemId: "" + _0xf97ce9
  };
  let _0x5a10ef = _0x5458b7,
    _0x4cf30a = {
      appId: "54ed7",
      fn: "apsDoTask",
      body: _0x5a10ef,
      apid: "activities_platform",
      ver: $.UA.split(";")[2],
      cl: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
  _0x5a10ef = await bdy_0x35d05.getbody(_0x4cf30a);
  if (!_0x5a10ef) {
    return;
  }
  return new Promise(async _0x25f5e9 => {
    $.post(bdy_0x147f0d(_0x5a10ef), async (_0x63716c, _0x3005e2, _0x381a79) => {
      try {
        _0x63716c ? (console.log("" + JSON.stringify(_0x63716c)), console.log(" API请求失败，请检查网路重试")) : (_0x381a79 = JSON.parse(_0x381a79), _0x381a79.code == 0 ? $.log("任务成功，抽奖次数 +" + _0x381a79.data.awardInfo[0].factAwardNum) : console.log(_0x381a79.msg));
      } catch (_0xba092a) {
        $.logErr(_0xba092a, _0x3005e2);
      } finally {
        _0x25f5e9();
      }
    });
  });
}
async function bdy_0x19971d(_0x5476d, _0x3a739b) {
  let _0x39eaaf = "functionId=apTaskDetail&body={\"taskType\":\"" + _0x5476d + "\",\"taskId\":" + _0x3a739b + ",\"channel\":4,\"checkVersion\":true,\"cityId\":0,\"provinceId\":0,\"countyId\":0,\"linkId\":\"" + $.linkId + "\"}&t=" + Date.now() + "&appid=activities_platform&client=android&clientVersion=12.3.2&loginType=2&loginWQBiz=wegame&h5st=null";
  return new Promise(async _0x2a89ef => {
    $.post(bdy_0x147f0d(_0x39eaaf), async (_0x34b6e9, _0x4b67e2, _0x4a2f0c) => {
      try {
        if (_0x34b6e9) {
          console.log("" + JSON.stringify(_0x34b6e9));
          console.log(" API请求失败，请检查网路重试");
        } else {
          _0x4a2f0c = JSON.parse(_0x4a2f0c);
          _0x4a2f0c.code == 0 ? _0x4a2f0c = _0x4a2f0c.data.taskItemList : console.log(_0x4a2f0c.errMsg);
        }
      } catch (_0xfa33f5) {
        $.logErr(_0xfa33f5, _0x4b67e2);
      } finally {
        _0x2a89ef(_0x4a2f0c);
      }
    });
  });
}
async function bdy_0x39cea7(_0x107976, _0x6b9697) {
  let _0x438d8e = {
    linkId: "l-yLvQMhLwCqYy6_nXUBgg",
    taskId: _0x107976,
    itemId: encodeURIComponent(_0x6b9697),
    channel: 4
  };
  _0x438d8e = "functionId=apStartTaskTime&body=" + JSON.stringify(_0x438d8e) + "&t=" + Date.now() + "&appid=activities_platform&client=android&clientVersion=12.1.0";
  return new Promise(async _0x14b6b2 => {
    $.post(bdy_0x147f0d(_0x438d8e), async (_0x2a13b1, _0x2fe2ab, _0x3a0c81) => {
      try {
        if (_0x2a13b1) {
          console.log("" + JSON.stringify(_0x2a13b1));
          console.log(" API请求失败，请检查网路重试");
        } else {
          _0x3a0c81 = JSON.parse(_0x3a0c81);
          if (!(_0x3a0c81.code == 0)) {
            console.log(_0x3a0c81.errMsg);
          }
        }
      } catch (_0x5893a9) {
        $.logErr(_0x5893a9, _0x2fe2ab);
      } finally {
        _0x14b6b2(_0x3a0c81);
      }
    });
  });
}
async function bdy_0x357f84(_0x45fdde) {
  const _0x2b5528 = {
    linkId: "l-yLvQMhLwCqYy6_nXUBgg",
    taskId: _0x45fdde
  };
  let _0x7f076b = _0x2b5528;
  _0x7f076b = "functionId=apCheckAndResetTaskTime&body=" + JSON.stringify(_0x7f076b) + "&t=" + Date.now() + "&appid=activities_platform&client=android&clientVersion=12.1.0";
  return new Promise(async _0x37a171 => {
    $.post(bdy_0x147f0d(_0x7f076b), async (_0x4509b4, _0x15adaf, _0x1e2b4a) => {
      try {
        if (_0x4509b4) {
          console.log("" + JSON.stringify(_0x4509b4));
          console.log(" API请求失败，请检查网路重试");
        } else {
          _0x1e2b4a = JSON.parse(_0x1e2b4a);
          if (!(_0x1e2b4a.code == 0)) {
            console.log(_0x1e2b4a.errMsg);
          }
        }
      } catch (_0x38cff4) {
        $.logErr(_0x38cff4, _0x15adaf);
      } finally {
        _0x37a171(_0x1e2b4a);
      }
    });
  });
}
async function bdy_0x2a91df() {
  const _0x2c3252 = {
    linkId: "DI7EC1v1FNDMSoTfLID0zg"
  };
  let _0x4360ef = _0x2c3252,
    _0x197e15 = {
      appId: "ebecc",
      fn: "apDoLimitTimeTask",
      body: _0x4360ef,
      apid: "activities_platform",
      ver: $.UA.split(";")[2],
      cl: "ios",
      user: $.UserName,
      code: 1,
      xcr: 1,
      ua: $.UA
    };
  _0x4360ef = await bdy_0x35d05.getbody(_0x197e15);
  if (!_0x4360ef) {
    return;
  }
  return new Promise(async _0x3c61d9 => {
    $.post(bdy_0x147f0d(_0x4360ef), async (_0x989652, _0x1cbc7e, _0x5ac2d6) => {
      try {
        if (_0x989652) {
          console.log("" + JSON.stringify(_0x989652));
          console.log(" API请求失败，请检查网路重试");
        } else {
          _0x5ac2d6 = JSON.parse(_0x5ac2d6);
          if (!(_0x5ac2d6.code == 0)) {
            console.log(_0x5ac2d6.errMsg);
          }
        }
      } catch (_0x4f5d6f) {
        $.logErr(_0x4f5d6f, _0x1cbc7e);
      } finally {
        _0x3c61d9(_0x5ac2d6);
      }
    });
  });
}
async function bdy_0x3d73fe(_0x115e8a) {
  let _0x570dcf = {
    linkId: "l-yLvQMhLwCqYy6_nXUBgg",
    taskId: String(_0x115e8a)
  };
  _0x570dcf = "functionId=apCheckTaskTimeEnd&body=" + JSON.stringify(_0x570dcf) + "&t=" + Date.now() + "&appid=activities_platform&client=android&clientVersion=12.1.0";
  return new Promise(async _0x309650 => {
    $.post(bdy_0x147f0d(_0x570dcf), async (_0x292641, _0x567d4a, _0x57f267) => {
      try {
        if (_0x292641) {
          console.log("" + JSON.stringify(_0x292641));
          console.log(" API请求失败，请检查网路重试");
        } else {
          _0x57f267 = JSON.parse(_0x57f267);
          if (!(_0x57f267.code == 0)) {
            console.log(_0x57f267.errMsg);
          }
        }
      } catch (_0x5a45f2) {
        $.logErr(_0x5a45f2, _0x567d4a);
      } finally {
        _0x309650(_0x57f267);
      }
    });
  });
}
function bdy_0x147f0d(_0x5b17a3) {
  const _0x1b3fdf = {
    Host: "api.m.jd.com",
    Origin: "https://prodev.m.jd.com",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": $.UA,
    Cookie: bdy_0x4e35c7
  };
  const _0x3742d5 = {
    url: "https://api.m.jd.com/api",
    body: _0x5b17a3,
    headers: _0x1b3fdf
  };
  return _0x3742d5;
}
function bdy_0x25fae0() {
  return new Promise(_0x37a2b0 => {
    const _0x24cbc3 = {
      Cookie: bdy_0x4e35c7,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x412d5d = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x24cbc3,
      timeout: 10000
    };
    $.get(_0x412d5d, (_0x34d49b, _0x398869, _0x50a8cb) => {
      try {
        if (_0x50a8cb) {
          _0x50a8cb = JSON.parse(_0x50a8cb);
          if (!(_0x50a8cb.islogin === "1")) {
            _0x50a8cb.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x5bafce) {
        console.log(_0x5bafce);
      } finally {
        _0x37a2b0();
      }
    });
  });
}
function bdy_0x22f396() {
  return new Promise(_0x59e632 => {
    !bdy_0x2f912c ? $.msg($.name, "", "" + bdy_0x4ff417) : $.log("京东账号" + $.index + $.nickName + "\n" + bdy_0x4ff417);
    _0x59e632();
  });
}
function bdy_0x3e6ece(_0x2c9170) {
  try {
    if (typeof JSON.parse(_0x2c9170) == "object") {
      return true;
    }
  } catch (_0x510bd2) {
    console.log(_0x510bd2);
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function bdy_0x40a6e3(_0x8119fc) {
  if (typeof _0x8119fc == "string") {
    try {
      return JSON.parse(_0x8119fc);
    } catch (_0x2f4838) {
      console.log(_0x2f4838);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }