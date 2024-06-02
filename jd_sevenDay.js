/*
活动名称：店铺签到 · 超级无线
环境变量：多活动id用逗号分开，不同环境变量对应不同链接类型，注意区分

LZKJ_SEVENDAY   https://lzkj-isv.isvjcloud.com/sign/sevenDay/signActivity?activityId=<活动id>
LZKJ_SIGN       https://lzkj-isv.isvjcloud.com/sign/signActivity2?activityId=<活动id>
CJHY_SEVENDAY   https://cjhy-isv.isvjcloud.com/sign/sevenDay/signActivity?activityId=<活动id>
CJHY_SIGN       https://cjhy-isv.isvjcloud.com/sign/signActivity?activityId=<活动id>

下方例子：	单个无需 ,  多活动id用逗号分开
export LZKJ_SEVENDAY="xxxx,xxxx,xxxxx"
export LZKJ_SIGN="xxxx,xxxx,xxxxx"
export CJHY_SEVENDAY="xxxx,xxxx,xxxxx"
export CJHY_SIGN="xxxx,xxxx,xxxxx"
export jd_sevenDay_blacklist="" 黑名单 用&隔开 pin值

默认不会入会，开启请设置变量 WXSIGNRH=true;
cron: 1 1 11 1 * jd_sevenDay.js
updatetime:2023/11/01
*/

const $ = new Env('超级无线店铺签到');
const _0x2f90a2 = $.isNode() ? require("./jdCookie.js") : "",
      _0x4fbcfe = $.isNode() ? require("./sendNotify") : "",
      _0x158fa7 = require("./USER_AGENTS"),
      _0x150502 = require("./function/dylank"),
      _0x2f71e9 = require("crypto-js"),
      _0x5b195c = require("child_process").execSync,
      _0x2a85e9 = require("fs");

if (process.env.DY_PROXY) {
  const _0x1eaab5 = require("./function/proxy.js");

  $.get = _0x1eaab5.intoRequest($.get.bind($));
  $.post = _0x1eaab5.intoRequest($.post.bind($));
}

const _0x141558 = _0x2a85e9.existsSync("/ql/data/config") ? "/ql/data/config/config.sh" : "/ql/config/config.sh",
      _0x55d7b1 = process.env.WXSIGNRH ? process.env.WXSIGNRH : false;

let _0x2e02da = [],
    _0x5d9066 = "",
    _0xede1c3 = "",
    _0x3aedce = [],
    _0x1ad1d8 = [],
    _0x117b34 = [],
    _0x3d1287 = [],
    _0x50c78c = {},
    _0x4bd55e = 10,
    _0x2f9a81 = 0,
    _0x5081dd = [],
    _0x1b44c7;

process.env.LZKJ_SEVENDAY && process.env.LZKJ_SEVENDAY != "" && (_0x3aedce = process.env.LZKJ_SEVENDAY.split(",").filter(_0x2c817e => !!_0x2c817e && _0x2c817e.length === 32), _0x3aedce = [...new Set(_0x3aedce)]);
process.env.LZKJ_SIGN && process.env.LZKJ_SIGN != "" && (_0x1ad1d8 = process.env.LZKJ_SIGN.split(",").filter(_0x405cf8 => !!_0x405cf8 && _0x405cf8.length === 32), _0x1ad1d8 = [...new Set(_0x1ad1d8)]);
process.env.CJHY_SEVENDAY && process.env.CJHY_SEVENDAY != "" && (_0x117b34 = process.env.CJHY_SEVENDAY.split(",").filter(_0x318bfc => !!_0x318bfc && _0x318bfc.length === 32), _0x117b34 = [...new Set(_0x117b34)]);
process.env.CJHY_SIGN && process.env.CJHY_SIGN != "" && (_0x3d1287 = process.env.CJHY_SIGN.split(",").filter(_0x337540 => !!_0x337540 && _0x337540.length === 32), _0x3d1287 = [...new Set(_0x3d1287)]);
process.env.COOKIE_NUM && process.env.COOKIE_NUM != 10 && (_0x4bd55e = process.env.COOKIE_NUM);

if ($.isNode()) {
  Object.keys(_0x2f90a2).forEach(_0x2761c4 => {
    _0x2e02da.push(_0x2f90a2[_0x2761c4]);
  });
  process.env.JD_DEBUG && process.env.JD_DEBUG === "false" && (console.log = () => {});
} else {
  let _0x41833c = $.getdata("CookiesJD") || "[]";

  _0x41833c = JSON.parse(_0x41833c);
  _0x2e02da = _0x41833c.map(_0x528cd2 => {
    return _0x528cd2.cookie;
  });

  _0x2e02da.reverse();

  _0x2e02da.push(...[$.getdata("CookieJD2"), $.getdata("CookieJD")]);

  _0x2e02da.reverse();

  _0x2e02da = _0x2e02da.filter(_0x3b8fc2 => {
    return !!_0x3b8fc2;
  });
}

let _0x29a37 = "",
    _0x156a0d = "";
$.whitelist = process.env.jd_sevenDay_whitelist || _0x29a37;
$.blacklist = process.env.jd_sevenDay_blacklist || _0x156a0d;

_0x5972e3();

_0x1eed74();

!(async () => {
  console.log("\n默认只跑前10账号，变量为：COOKIE_NUM");
  console.log("支持代理API");

  if ([..._0x3aedce, ..._0x1ad1d8, ..._0x117b34, ..._0x3d1287].length === 0) {
    console.log("\n没有配置活动变量，详情查看注释，退出！\n");
    return;
  }

  if (!_0x2e02da[0]) {
    const _0x3ca81e = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x3ca81e);
    return;
  }

  for (let _0x2d4c35 = 0; _0x2d4c35 < _0x4bd55e; _0x2d4c35++) {
    if (_0x2e02da[_0x2d4c35]) {
      _0x5d9066 = _0x2e02da[_0x2d4c35];
      originCookie = _0x2e02da[_0x2d4c35];
      newCookie = "";
      $.UserName = decodeURIComponent(_0x5d9066.match(/pt_pin=(.+?);/) && _0x5d9066.match(/pt_pin=(.+?);/)[1]);
      $.index = _0x2d4c35 + 1;
      $.isLogin = true;
      $.nickName = "";
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      $.UA = _0x158fa7.UARAM ? _0x158fa7.UARAM() : _0x158fa7.USER_AGENT;
      await _0x5b1225();

      if (!$.isLogin) {
        const _0x13370c = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\\n请重新登录获取\\nhttps://bean.m.jd.com/bean/signIndex.action", _0x13370c);
        $.isNode() && (await _0x4fbcfe.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\\n请重新登录获取cookie"));
        continue;
      }

      $.bean = 0;
      $.ADID = _0x56c6c8("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", 1);
      $.UUID = _0x56c6c8("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

      if (_0x3aedce.length >= 1) {
        console.log("❖ 签到类型1（ lzkj sevenDay ）");
        await _0x5d854e();
        await $.wait(2000);
      }

      _0x1ad1d8.length >= 1 && (console.log("\n❖ 签到类型2（ lzkj signActivity2 ）"), await _0x3f549a(), await $.wait(2000));
      _0x117b34.length >= 1 && (console.log("\n❖ 签到类型3（ cjhy sevenDay ）"), await _0x369db7(), await $.wait(2000));
      _0x3d1287.length >= 1 && (console.log("\n❖ 签到类型4（ cjhy signActivity ）"), await _0x1f00a8(), await $.wait(2000));
      $.bean > 0 && (_0xede1c3 += "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + " \\n       └ 获得 " + $.bean + " 京豆。");
    }
  }

  try {
    _0x1b44c7 = _0x5081dd.length;

    for (let _0x2d1259 of _0x5081dd) {
      _0x5b195c("sed -i \"s!" + _0x2d1259 + "!!g\" " + _0x141558);
    }
  } catch (_0x20dba4) {}

  console.log("\n" + (_0x1b44c7 > 0 ? _0x1b44c7 + "个失效活动，变量已移除" : ""));
  _0xede1c3 !== "" && ($.isNode() ? await _0x4fbcfe.sendNotify($.name, _0xede1c3, "", "\n") : $.msg($.name, "有点儿收获", _0xede1c3));
})().catch(_0x512e26 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x512e26 + "!", "");
}).finally(() => {
  $.done();
});

async function _0x5d854e() {
  for (let _0x4c57c3 = 0; _0x4c57c3 < _0x3aedce.length; _0x4c57c3++) {
    $.activityId = _0x3aedce[_0x4c57c3];

    if (!$.activityId) {
      continue;
    }

    $.activityUrl = "https://lzkj-isv.isvjcloud.com/sign/sevenDay/signActivity?activityId=" + $.activityId;
    console.log("");
    _0x2f9a81 = 0;
    _0x4c57c3 == 0 && ($.token = null, $.secretPin = null);
    $.venderId = null;
    await _0x24e43e();
    await $.wait(500);
    await _0x27b2e7("customer/getSimpleActInfoVo", "activityId=" + $.activityId, 1);
    await $.wait(500);

    if (_0x4c57c3 == 0) {
      $.token = await _0x150502(_0x5d9066, "https://lzkj-isv.isvjcloud.com");

      if ($.token) {
        await _0x35712f();
        await $.wait(500);

        if (!$.secretPin) {
          await _0x35712f();
        }
      } else {
        $.log("没有成功获取到用户鉴权信息");
        break;
      }
    }

    if ($.secretPin) {
      console.log("活动ID：" + $.activityId);

      if ($.index == 1) {
        $.log("活动链接：" + $.activityUrl);
        await _0x41e246("lzkj", "wx", "getShopInfo", $.venderId, $.secretPin, $.activityId);
        await _0x41e246("lzkj", "sevenDay/wx", "getSignInfo", $.venderId, undefined, $.activityId);

        if ($.activityEnd) {
          $.log("活动已结束，不执行签到");
          delete _0x1ad1d8[_0x4c57c3];
          continue;
        }
      }

      if ($.venderId) {
        await _0x27b2e7("common/accessLogWithAD", "venderId=" + $.venderId + "&code=" + $.activityType + "&pin=" + encodeURIComponent($.secretPin) + "&activityId=" + $.activityId + "&pageUrl=" + $.activityUrl + "&subType=app&adSource=tg_xuanFuTuBiao", 1);
        await $.wait(500);
      }

      await _0x27b2e7("sign/wx/signUp", "actId=" + $.activityId + "&pin=" + encodeURIComponent($.secretPin), 1);
      await $.wait(1000);
    } else {
      $.log("没有成功获取到用户信息");
      break;
    }
  }

  _0x27b2e7;
}

async function _0x3f549a() {
  for (let _0x124219 = 0; _0x124219 < _0x1ad1d8.length; _0x124219++) {
    $.activityId = _0x1ad1d8[_0x124219];

    if (!$.activityId) {
      continue;
    }

    $.activityUrl = "https://lzkj-isv.isvjcloud.com/sign/signActivity2?activityId=" + $.activityId;
    console.log("");
    _0x2f9a81 = 0;
    _0x124219 == 0 && ($.token = null, $.secretPin = null);
    $.venderId = null;
    await _0x24e43e();
    await $.wait(500);
    await _0x27b2e7("customer/getSimpleActInfoVo", "activityId=" + $.activityId, 1);
    await $.wait(500);

    if (_0x124219 == 0) {
      $.token = await _0x150502(_0x5d9066, "https://lzkj-isv.isvjcloud.com");

      if ($.token) {
        await _0x35712f();
        await $.wait(500);

        if (!$.secretPin) {
          await _0x35712f();
        }
      } else {
        $.log("没有成功获取到用户鉴权信息");
        break;
      }
    }

    if ($.secretPin) {
      console.log("活动ID：" + $.activityId);

      if ($.index == 1) {
        $.log("活动链接：" + $.activityUrl);
        await _0x41e246("lzkj", "wx", "getShopInfo", $.venderId, $.secretPin, $.activityId);
        await _0x41e246("lzkj", "wx", "getActivity", $.venderId, undefined, $.activityId);

        if ($.activityEnd) {
          $.log("活动已结束，不执行签到");
          delete _0x1ad1d8[_0x124219];
          continue;
        }
      }

      if ($.venderId) {
        await _0x27b2e7("common/accessLogWithAD", "venderId=" + $.venderId + "&code=" + $.activityType + "&pin=" + encodeURIComponent($.secretPin) + "&activityId=" + $.activityId + "&pageUrl=" + $.activityUrl + "&subType=app&adSource=tg_xuanFuTuBiao", 1);
        await $.wait(500);
      }

      await _0x27b2e7("sign/wx/signUp", "actId=" + $.activityId + "&pin=" + encodeURIComponent($.secretPin), 1);
      await $.wait(1000);
    } else {
      $.log("没有成功获取到用户信息");
      break;
    }
  }
}

async function _0x369db7() {
  for (let _0x3501f0 = 0; _0x3501f0 < _0x117b34.length; _0x3501f0++) {
    $.activityId = _0x117b34[_0x3501f0];

    if (!$.activityId) {
      continue;
    }

    $.activityUrl = "https://cjhy-isv.isvjcloud.com/sign/sevenDay/signActivity?activityId=" + $.activityId;
    console.log("");
    _0x2f9a81 = 0;
    _0x3501f0 == 0 && ($.token = null, $.secretPin = null);
    $.venderId = null;
    await _0x7848d0();
    await $.wait(500);
    await _0x201cf0("customer/getSimpleActInfoVo", "activityId=" + $.activityId, 1);
    await $.wait(500);
    _0x3501f0 == 0 && ($.token = await _0x150502(_0x5d9066, "https://cjhy-isv.isvjcloud.com"));
    await _0x2c2c81();

    if ($.secretPin) {
      console.log("活动ID：" + $.activityId);

      if ($.index == 1) {
        $.log("活动链接：" + $.activityUrl);
        await _0x41e246("cjhy", "wx", "getShopInfo", $.venderId, $.secretPin, $.activityId);
        await _0x41e246("cjhy", "sevenDay/wx", "getSignInfo", $.venderId, undefined, $.activityId);

        if ($.activityEnd) {
          $.log("活动已结束，不执行签到");
          delete _0x117b34[_0x3501f0];
          continue;
        }
      }

      $.venderId && (await _0x201cf0("common/accessLogWithAD", "venderId=" + $.venderId + "&code=" + $.activityType + "&pin=" + encodeURIComponent(encodeURIComponent($.secretPin)) + "&activityId=" + $.activityId + "&pageUrl=" + encodeURIComponent($.activityUrl) + "&subType=app&adSource=", 1), await $.wait(500));
      let _0x329a99 = {
        ecyText: _0x42f4f9({
          actId: $.activityId,
          pin: encodeURIComponent($.secretPin)
        }, $.pinToken, $.te)
      };
      await _0x201cf0("sign/sevenDay/wx/signUp", JSON.stringify(_0x329a99), 1);
      await $.wait(1000);
    } else {
      $.log("没有成功获取到用户信息");
      break;
    }
  }
}

async function _0x1f00a8() {
  for (let _0x336b25 = 0; _0x336b25 < _0x3d1287.length; _0x336b25++) {
    $.activityId = _0x3d1287[_0x336b25];

    if (!$.activityId) {
      continue;
    }

    $.activityUrl = "https://cjhy-isv.isvjcloud.com/sign/signActivity?activityId=" + $.activityId;
    console.log("");
    _0x2f9a81 = 0;
    _0x336b25 == 0 && ($.token = null, $.secretPin = null);
    $.venderId = null;
    await _0x7848d0();
    await $.wait(500);
    await _0x201cf0("customer/getSimpleActInfoVo", "activityId=" + $.activityId, 1);
    await $.wait(500);
    _0x336b25 == 0 && ($.token = await _0x150502(_0x5d9066, "https://cjhy-isv.isvjcloud.com"));
    await _0x2c2c81();

    if ($.secretPin) {
      console.log("活动ID：" + $.activityId);

      if ($.index == 1) {
        $.log("活动链接：" + $.activityUrl);
        await _0x41e246("cjhy", "wx", "getShopInfo", $.venderId, $.secretPin, $.activityId);
        await _0x41e246("cjhy", "wx", "getActivity", $.venderId, undefined, $.activityId);

        if ($.activityEnd) {
          $.log("活动已结束，不执行签到");
          delete _0x3d1287[_0x336b25];
          continue;
        }
      }

      if ($.venderId) {
        await _0x201cf0("common/accessLogWithAD", "venderId=" + $.venderId + "&code=" + $.activityType + "&pin=" + encodeURIComponent(encodeURIComponent($.secretPin)) + "&activityId=" + $.activityId + "&pageUrl=" + encodeURIComponent($.activityUrl) + "&subType=app", 1);
        await $.wait(500);
      }

      let _0x2ed96a = {
        ecyText: _0x42f4f9({
          actId: $.activityId,
          pin: encodeURIComponent($.secretPin)
        }, $.pinToken, $.te)
      };
      await _0x201cf0("sign/wx/signUp", JSON.stringify(_0x2ed96a), 1);
      await $.wait(1000);
    } else {
      $.log("没有成功获取到用户信息");
      break;
    }
  }
}

async function _0x27b2e7(_0x2d09b2, _0x343223, _0x302018 = 0) {
  return new Promise(_0x3cf4ea => {
    $.post(_0x17621e(_0x2d09b2, _0x343223, _0x302018), async (_0x416ecf, _0x26e9e6, _0x5bb968) => {
      try {
        if (_0x416ecf) {
          $.log(_0x416ecf);
        } else {
          if (_0x5bb968) {
            _0x5bb968 = JSON.parse(_0x5bb968);

            if (_0x26e9e6.headers["set-cookie"]) {
              _0x5d9066 = originCookie + ";";

              for (let _0x3229cc of _0x26e9e6.headers["set-cookie"]) {
                _0x50c78c[_0x3229cc.split(";")[0].substr(0, _0x3229cc.split(";")[0].indexOf("="))] = _0x3229cc.split(";")[0].substr(_0x3229cc.split(";")[0].indexOf("=") + 1);
              }

              for (const _0x122f44 of Object.keys(_0x50c78c)) {
                _0x5d9066 += _0x122f44 + "=" + _0x50c78c[_0x122f44] + ";";
              }
            }

            if (_0x5bb968) {
              switch (_0x2d09b2) {
                case "customer/getSimpleActInfoVo":
                  $.venderId = _0x5bb968.data.venderId;
                  $.activityType = _0x5bb968.data.activityType;
                  break;

                case "sign/sevenDay/wx/signUp":
                  if (_0x5bb968) {
                    if (_0x5bb968.isOk) {
                      _0x2f9a81 = 0;
                      _0x5bb968.signResult.gift != null ? console.log("签到结果 -> 签到成功" + (_0x5bb968.signResult.send ? ",获得" + _0x5bb968.signResult.gift.giftName + " 🎉" : "")) : $.log("簽到結果 -> 簽到成功");
                    } else {
                      console.log("簽到结果 -> " + _0x5bb968.msg);

                      if (_0x55d7b1 && _0x5bb968.msg.includes("会员")) {
                        process.stdout.write("去入会 -> ");

                        let _0x13a316;

                        for (let _0x4f6ed7 of Array(2)) {
                          _0x13a316 = await _0xde7990($.venderId);

                          if (_0x13a316.includes("成功")) {
                            break;
                          }
                        }

                        if (!_0x13a316.includes("成功")) {
                          return;
                        }

                        await _0x27b2e7(_0x2d09b2, _0x343223, _0x302018);
                      } else {
                        if (_0x5bb968.msg.includes("火爆")) {
                          if (_0x2f9a81 > 2) {
                            return;
                          }

                          _0x2f9a81++;
                          $.log("重试 " + _0x2f9a81);
                          await $.wait(100);
                          await _0x27b2e7(_0x2d09b2, _0x343223, _0x302018);
                        }
                      }
                    }
                  }

                  break;

                case "sign/wx/signUp":
                  if (_0x5bb968) {
                    if (_0x5bb968.isOk) {
                      _0x2f9a81 = 0;
                      _0x5bb968.gift != null ? console.log("签到结果 -> 签到成功" + (_0x5bb968.isSend ? ",获得" + _0x5bb968.gift.giftName + " 🎉" : "") + " ") : $.log("簽到結果 -> 簽到成功");
                      await _0x41e246("lzkj", "wx", "getSignInfo", $.venderId, $.secretPin, $.activityId);
                    } else {
                      console.log("签到结果 -> " + _0x5bb968.msg);

                      if (_0x55d7b1 && _0x5bb968.msg.includes("会员")) {
                        process.stdout.write("去入会 -> ");

                        let _0x4b472e;

                        for (let _0x514885 of Array(2)) {
                          _0x4b472e = await _0xde7990($.venderId);

                          if (_0x4b472e.includes("成功")) {
                            break;
                          }
                        }

                        if (!_0x4b472e.includes("成功")) {
                          return;
                        }

                        await _0x27b2e7(_0x2d09b2, _0x343223, _0x302018);
                      } else {
                        if (_0x5bb968.msg.includes("火爆")) {
                          if (_0x2f9a81 > 2) {
                            return;
                          }

                          _0x2f9a81++;
                          $.log("重试 " + _0x2f9a81);
                          await $.wait(100);
                          await _0x27b2e7(_0x2d09b2, _0x343223, _0x302018);
                        }
                      }
                    }
                  }

                  break;

                default:
                  $.log(JSON.stringify(_0x5bb968));
                  break;
              }
            }
          }
        }
      } catch (_0x639aa5) {
        _0x2d09b2 != "customer/getSimpleActInfoVo" && $.log(_0x2d09b2 + " -> " + _0x639aa5);
      } finally {
        _0x3cf4ea();
      }
    });
  });
}

async function _0x201cf0(_0x50691d, _0x7a29aa, _0x3e61a4 = 0) {
  return new Promise(_0x56b859 => {
    $.post(_0x32d856(_0x50691d, _0x7a29aa, _0x3e61a4), async (_0x1912f9, _0x5b78f2, _0x2e56e3) => {
      try {
        if (_0x1912f9) {
          $.log(_0x1912f9);
        } else {
          if (_0x2e56e3) {
            _0x2e56e3 = JSON.parse(_0x2e56e3);

            if (_0x5b78f2.headers["set-cookie"]) {
              _0x5d9066 = originCookie + ";";

              for (let _0x4dfbff of _0x5b78f2.headers["set-cookie"]) {
                _0x50c78c[_0x4dfbff.split(";")[0].substr(0, _0x4dfbff.split(";")[0].indexOf("="))] = _0x4dfbff.split(";")[0].substr(_0x4dfbff.split(";")[0].indexOf("=") + 1);
              }

              for (const _0x526edf of Object.keys(_0x50c78c)) {
                _0x5d9066 += _0x526edf + "=" + _0x50c78c[_0x526edf] + ";";
              }
            }

            if (_0x2e56e3) {
              switch (_0x50691d) {
                case "customer/getSimpleActInfoVo":
                  $.venderId = _0x2e56e3.data.venderId;
                  $.activityType = _0x2e56e3.data.activityType;
                  break;

                case "sign/sevenDay/wx/signUp":
                  if (_0x2e56e3) {
                    if (_0x2e56e3.isOk) {
                      _0x2f9a81 = 0;
                      _0x2e56e3.signResult.gift != null ? console.log("签到结果 -> 签到成功" + (_0x2e56e3.signResult.send ? ",获得" + _0x2e56e3.signResult.gift.giftName + " 🎉" : "")) : $.log("簽到結果 -> 簽到成功");
                    } else {
                      console.log("签到结果 -> " + _0x2e56e3.msg);

                      if (_0x55d7b1 && _0x2e56e3.msg.includes("会员")) {
                        process.stdout.write("去入会 -> ");

                        let _0x1eafe7;

                        for (let _0x2a8647 of Array(2)) {
                          _0x1eafe7 = await _0xde7990($.venderId);

                          if (_0x1eafe7.includes("成功")) {
                            break;
                          }
                        }

                        if (!_0x1eafe7.includes("成功")) {
                          return;
                        }

                        await _0x201cf0(_0x50691d, _0x7a29aa, _0x3e61a4);
                      } else {
                        if (_0x2e56e3.msg.includes("火爆")) {
                          if (_0x2f9a81 > 2) {
                            return;
                          }

                          _0x2f9a81++;
                          $.log("重试 " + _0x2f9a81);
                          await $.wait(100);
                          await _0x201cf0(_0x50691d, _0x7a29aa, _0x3e61a4);
                        }
                      }
                    }
                  }

                  break;

                case "sign/wx/signUp":
                  if (_0x2e56e3) {
                    if (_0x2e56e3.isOk) {
                      _0x2f9a81 = 0;
                      _0x2e56e3.gift != null ? console.log("签到结果 -> 签到成功" + (_0x2e56e3.signResult.send ? ",获得" + _0x2e56e3.gift.giftName + " 🎉" : "")) : $.log("簽到結果 -> 簽到成功");
                      await _0x41e246("cjhy", "wx", "getSignInfo", $.venderId, $.secretPin, $.activityId);
                    } else {
                      console.log("签到结果 -> " + _0x2e56e3.msg);

                      if (_0x55d7b1 && _0x2e56e3.msg.includes("会员")) {
                        process.stdout.write("去入会 -> ");

                        let _0xe49c72;

                        for (let _0x4efbc9 of Array(2)) {
                          _0xe49c72 = await _0xde7990($.venderId);

                          if (_0xe49c72.includes("成功")) {
                            break;
                          }
                        }

                        if (!_0xe49c72.includes("成功")) {
                          return;
                        }

                        await _0x201cf0(_0x50691d, _0x7a29aa, _0x3e61a4);
                      } else {
                        if (_0x2e56e3.msg.includes("火爆")) {
                          if (_0x2f9a81 > 2) {
                            return;
                          }

                          _0x2f9a81++;
                          $.log("重试 " + _0x2f9a81);
                          await $.wait(100);
                          await _0x201cf0(_0x50691d, _0x7a29aa, _0x3e61a4);
                        }
                      }
                    }
                  }

                  break;

                default:
                  $.log(JSON.stringify(_0x2e56e3));
                  break;
              }
            }
          }
        }
      } catch (_0xffbbcc) {
        if (_0x50691d != "customer/getSimpleActInfoVo") {
          $.log(_0x50691d + " -> " + _0xffbbcc);
        }
      } finally {
        _0x56b859();
      }
    });
  });
}

function _0x17621e(_0x8233df, _0x58ed9c, _0x193964) {
  const _0x1d0d75 = {
    Host: "lzkj-isv.isvjcloud.com",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Accept-Language": "zh-cn",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/x-www-form-urlencoded",
    Origin: "https://lzkj-isv.isvjcloud.comm",
    "User-Agent": $.UA,
    Connection: "keep-alive",
    Referer: $.activityUrl,
    Cookie: _0x5d9066
  };
  const _0x562a60 = {
    url: _0x193964 ? "https://lzkj-isv.isvjcloud.com/" + _0x8233df : "https://lzkj-isv.isvjcloud.com/sign/wx/" + _0x8233df,
    headers: _0x1d0d75,
    body: _0x58ed9c
  };
  return _0x562a60;
}

function _0x32d856(_0x2da0d5, _0x1fd013, _0x36db7b) {
  const _0x144da9 = {
    Host: "cjhy-isv.isvjcloud.com",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Accept-Language": "zh-cn",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/x-www-form-urlencoded",
    Origin: "https://cjhy-isv.isvjcloud.comm",
    "User-Agent": $.UA,
    Connection: "keep-alive",
    Referer: $.activityUrl,
    Cookie: _0x5d9066
  };
  const _0x39df96 = {
    url: _0x36db7b ? "https://cjhy-isv.isvjcloud.com/" + _0x2da0d5 : "https://cjhy-isv.isvjcloud.com/sign/wx/" + _0x2da0d5,
    headers: _0x144da9,
    body: _0x1fd013
  };
  return _0x39df96;
}

function _0x35712f() {
  const _0xf17a64 = {
    Host: "lzkj-isv.isvjcloud.com",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Accept-Language": "zh-cn",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/x-www-form-urlencoded",
    Origin: "https://lzkj-isv.isvjcloud.com",
    "User-Agent": $.UA,
    Connection: "keep-alive",
    Referer: $.activityUrl,
    Cookie: _0x5d9066
  };
  const _0x154f2c = {
    url: "https://lzkj-isv.isvjcloud.com/customer/getMyPing",
    headers: _0xf17a64,
    body: "userId=" + $.venderId + "&token=" + $.token + "&fromType=APP"
  };
  return new Promise(_0x401dc1 => {
    $.post(_0x154f2c, (_0x41b905, _0x412244, _0x530d74) => {
      try {
        if (_0x41b905) {
          $.log(_0x41b905);
        } else {
          if (_0x412244.headers["set-cookie"]) {
            _0x5d9066 = originCookie + ";";

            for (let _0xb42255 of _0x412244.headers["set-cookie"]) {
              _0x50c78c[_0xb42255.split(";")[0].substr(0, _0xb42255.split(";")[0].indexOf("="))] = _0xb42255.split(";")[0].substr(_0xb42255.split(";")[0].indexOf("=") + 1);
            }

            for (const _0x4d09b3 of Object.keys(_0x50c78c)) {
              _0x5d9066 += _0x4d09b3 + "=" + _0x50c78c[_0x4d09b3] + ";";
            }
          }

          _0x530d74 ? (_0x530d74 = JSON.parse(_0x530d74), _0x530d74.result ? ($.pin = _0x530d74.data.nickname, $.secretPin = _0x530d74.data.secretPin) : $.log(_0x530d74.errorMessage)) : $.log("京东返回了空数据");
        }
      } catch (_0x4ea297) {
        $.log(_0x4ea297);
      } finally {
        _0x401dc1();
      }
    });
  });
}

function _0x2c2c81() {
  let _0x28bbf1 = {
    url: "https://cjhy-isv.isvjcloud.com/customer/initPinToken?activityId=" + $.activityId + "&jdToken=" + $.token + "&source=01&venderId=" + $.venderId + "&uuid=" + $.UUID + "&clientTime=" + Date.now() + "&fromType=APP&riskType=1",
    headers: {
      Host: "cjhy-isv.isvjcloud.com",
      "Accept-Language": "zh-cn",
      "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/json",
      Origin: "https://cjhy-isv.isvjcloud.com",
      "User-Agent": $.UA,
      Referer: $.activityUrl,
      Cookie: _0x5d9066
    }
  };
  return new Promise(_0x8711e0 => {
    $.post(_0x28bbf1, (_0x1844ac, _0x4573c1, _0x1458e2) => {
      try {
        if (_0x1844ac) {
          $.log(_0x1844ac);
        } else {
          if (_0x4573c1.headers["set-cookie"]) {
            _0x5d9066 = originCookie + ";";

            for (let _0xe3ce74 of _0x4573c1.headers["set-cookie"]) {
              _0x50c78c[_0xe3ce74.split(";")[0].substr(0, _0xe3ce74.split(";")[0].indexOf("="))] = _0xe3ce74.split(";")[0].substr(_0xe3ce74.split(";")[0].indexOf("=") + 1);
            }

            for (const _0x28bbfc of Object.keys(_0x50c78c)) {
              _0x5d9066 += _0x28bbfc + "=" + _0x50c78c[_0x28bbfc] + ";";
            }

            try {
              $.pinToken = _0x5d9066.match(/pToken=(.*?);/)[1];
              $.te = _0x5d9066.match(/te=(\d+);/)[1];
            } catch {}
          }

          _0x1458e2 ? (_0x1458e2 = JSON.parse(_0x1458e2), _0x1458e2.result ? ($.pin = _0x1458e2.data.nickname, $.secretPin = _0x1458e2.data.secretPin) : $.log(_0x1458e2.errorMessage)) : $.log("京东返回了空数据");
        }
      } catch (_0x3f0122) {
        $.log(_0x3f0122);
      } finally {
        _0x8711e0();
      }
    });
  });
}

function _0x24e43e() {
  return new Promise(_0x1a2cd3 => {
    const _0x4bd14e = {
      Accept: "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      Connection: "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie: _0x5d9066,
      "User-Agent": $.UA
    };
    const _0x443e0b = {
      url: "https://lzkj-isv.isvjcloud.com/wxCommonInfo/token",
      headers: _0x4bd14e,
      timeout: 30000
    };
    $.get(_0x443e0b, async (_0x5d899d, _0x29091a, _0x31471e) => {
      try {
        if (_0x5d899d) {
          _0x29091a && typeof _0x29091a.statusCode != "undefined" && _0x29091a.statusCode == 493 && (console.log("此ip已被限制，请过10分钟后再执行脚本\n"), $.outFlag = true);
          console.log("" + $.toStr(_0x5d899d));
          console.log("" + $.name + " cookie API请求失败，请检查网路重试");
        } else {
          let _0x506f7a = _0x31471e.match(/(活动已经结束)/) && _0x31471e.match(/(活动已经结束)/)[1] || "";

          if (_0x506f7a) {
            $.activityEnd = true;
            console.log("活动已结束");
          }

          if (_0x29091a.headers["set-cookie"]) {
            _0x5d9066 = originCookie + ";";

            for (let _0x1b8bb6 of _0x29091a.headers["set-cookie"]) {
              _0x50c78c[_0x1b8bb6.split(";")[0].substr(0, _0x1b8bb6.split(";")[0].indexOf("="))] = _0x1b8bb6.split(";")[0].substr(_0x1b8bb6.split(";")[0].indexOf("=") + 1);
            }

            for (const _0x510ff1 of Object.keys(_0x50c78c)) {
              _0x5d9066 += _0x510ff1 + "=" + _0x50c78c[_0x510ff1] + ";";
            }

            activityCookie = _0x5d9066;
          }
        }
      } catch (_0x4fe0d0) {
        $.logErr(_0x4fe0d0, _0x29091a);
      } finally {
        _0x1a2cd3();
      }
    });
  });
}

function _0x7848d0() {
  return new Promise(_0x1415a7 => {
    $.get({
      url: $.activityUrl,
      headers: {
        "user-agent": $.UA
      }
    }, (_0x90f2a8, _0x2946e6, _0x29fa20) => {
      try {
        if (_0x90f2a8) {
          console.log(_0x90f2a8);
        } else {
          if (_0x2946e6.headers["set-cookie"]) {
            _0x5d9066 = originCookie + ";";

            for (let _0x101cce of _0x2946e6.headers["set-cookie"]) {
              _0x50c78c[_0x101cce.split(";")[0].substr(0, _0x101cce.split(";")[0].indexOf("="))] = _0x101cce.split(";")[0].substr(_0x101cce.split(";")[0].indexOf("=") + 1);
            }

            for (const _0xba1183 of Object.keys(_0x50c78c)) {
              _0x5d9066 += _0xba1183 + "=" + _0x50c78c[_0xba1183] + ";";
            }
          }
        }
      } catch (_0xc767f1) {
        console.log(_0xc767f1);
      } finally {
        _0x1415a7();
      }
    });
  });
}

function _0x41e246(_0x5d7e46, _0x5e14af, _0x3ac53a, _0x56fde5, _0x4521e7, _0x49bfa7) {
  let _0x39d244;

  $.activityEnd = false;

  switch (_0x3ac53a) {
    case "getSignInfo":
      if (_0x5d7e46 == "lzkj") {
        _0x39d244 = "venderId=" + _0x56fde5 + "&pin=" + encodeURIComponent(_0x4521e7) + "&actId=" + _0x49bfa7;
      } else {
        _0x39d244 = "venderId=" + _0x56fde5 + "&pin=" + encodeURIComponent(encodeURIComponent(_0x4521e7)) + "&actId=" + _0x49bfa7;
      }

      break;

    case "getShopInfo":
      _0x39d244 = "venderId=" + _0x56fde5;
      break;

    case "getActivity":
      _0x39d244 = "venderId=" + _0x56fde5 + "&actId=" + _0x49bfa7;
      break;
  }

  const _0x44450c = {
    url: "https://" + _0x5d7e46 + "-isv.isvjcloud.com/sign/" + _0x5e14af + "/" + _0x3ac53a,
    body: _0x39d244,
    headers: {}
  };
  _0x44450c.headers.Accept = "application/json";
  _0x44450c.headers.Referer = "https://" + _0x5d7e46 + "-isv.isvjcloud.com/";
  _0x44450c.headers["Content-Type"] = "application/x-www-form-urlencoded";
  _0x44450c.headers["User-Agent"] = $.UA;
  _0x44450c.headers.Cookie = _0x5d9066;
  return new Promise(_0x5c97d5 => {
    $.post(_0x44450c, (_0x3bc525, _0x5d321a, _0x5867bc) => {
      try {
        if (_0x3bc525) {
          $.log(JSON.stringify(_0x3bc525));
        } else {
          _0x5867bc = JSON.parse(_0x5867bc);

          if (_0x5867bc.isOk) {
            switch (_0x3ac53a) {
              case "getSignInfo":
                if (_0x5e14af == "sevenDay/wx") {
                  if (_0x5d7e46 === "cjhy") {
                    $.log("活动时间：" + new Date(_0x5867bc.startTime).toLocaleString() + " 至 " + new Date(_0x5867bc.endTime).toLocaleString());
                    Date.now() > _0x5867bc.endTime && (_0x5081dd.push(_0x49bfa7), $.activityEnd = true);

                    if (_0x5867bc.giftConditions && _0x5867bc.giftConditions.length !== 0) {
                      $.log("7日签到奖励：");

                      for (let _0x3a2dcd of _0x5867bc.giftConditions) {
                        if (_0x3a2dcd.gift == null) {
                          continue;
                        }

                        $.log(_0x3a2dcd.dayNum + "天" + "|" + _0x3a2dcd.gift.giftName + "|" + _0x3a2dcd.gift.giftTotal + "份|" + (_0x3a2dcd.gift.insufficient ? "无了" : "还有"));
                      }
                    }
                  } else {
                    $.log("活动时间：" + _0x5867bc.actRule.match(/(\d+-\d+-\d+ \d+:\d+ - \d+-\d+-\d+ \d+:\d+)/)[1]);
                    Date.now() > new Date(_0x5867bc.actRule.match(/- (\d+-\d+-\d+ \d+:\d+)/)[1] + ":00") && (_0x5081dd.push(_0x49bfa7), $.activityEnd = true);

                    if (_0x5867bc.giftConditions && _0x5867bc.giftConditions.length !== 0) {
                      $.log("7日签到奖励：");

                      for (let _0x2e68fa of _0x5867bc.giftConditions) {
                        if (_0x2e68fa.gift == null) {
                          continue;
                        }

                        $.log(_0x2e68fa.dayNum + "天" + "|" + _0x2e68fa.gift.giftName + "|" + (_0x2e68fa.gift.insufficient ? "无了" : "还有"));
                      }
                    }
                  }
                } else {
                  $.log("累计签到" + _0x5867bc.signRecord.totalSignNum + "天|连签" + _0x5867bc.signRecord.contiSignNum + "天");
                }

                break;

              case "getShopInfo":
                $.log("店铺名称：" + _0x5867bc.shopInfo.shopName);
                break;

              case "getActivity":
                $.log("活动时间：" + _0x5867bc.act.actTimeStr);
                Date.now() > _0x5867bc.act.endTime && (_0x5081dd.push(_0x49bfa7), $.activityEnd = true);
                _0x5867bc.act.wxSignActivityGiftBean.hasGiftEveryDay == "y" && $.log("每日签到奖励：" + _0x5867bc.act.wxSignActivityGiftBean.gift.giftName + "|" + _0x5867bc.act.wxSignActivityGiftBean.gift.giftTotal + "份|" + (_0x5867bc.act.wxSignActivityGiftBean.gift.insufficient ? "无了" : "还有"));

                if (_0x5867bc.act.wxSignActivityGiftBean.giftConditions && _0x5867bc.act.wxSignActivityGiftBean.giftConditions.length !== 0) {
                  $.log("连续签到奖励：");

                  for (let _0x4f4ab9 of _0x5867bc.act.wxSignActivityGiftBean.giftConditions) {
                    $.log(_0x4f4ab9.dayNum + "天" + "|" + _0x4f4ab9.gift.giftName + "|" + _0x4f4ab9.gift.giftTotal + "份|" + (_0x4f4ab9.gift.insufficient ? "无了" : "还有"));
                  }
                }

                break;
            }
          } else {
            if (_0x5867bc.msg.includes("结束")) {
              _0x5081dd.push(_0x49bfa7);

              $.activityEnd = true;
            }
          }
        }
      } catch (_0x20e863) {
        $.logErr(_0x20e863, _0x5d321a);
      } finally {
        _0x5c97d5(_0x5867bc);
      }
    });
  });
}

function _0x16d571(_0xb83f30) {
  var _0x48b3a7 = false;

  for (let _0x5c1436 of lajiprizewords) {
    if (_0xb83f30.includes(_0x5c1436)) {
      _0x48b3a7 = true;
      break;
    }
  }

  return _0x48b3a7;
}

function _0xe3ad25(_0x22c659, _0x21b4e8) {
  return Math.floor(Math.random() * (_0x21b4e8 - _0x22c659)) + _0x22c659;
}

function _0x42f4f9(_0x4f5521, _0x319e7b, _0x3d85c7) {
  const _0xd694f6 = ["B6dB3QqGZP1lKNICTaiAeNJSHKNepO5GGgtL6FUceqSlpFZCdx2SZ5MPPbzrgy91HeR0dnJazcMrvMgPF7bhFrfsGaApJKk4JohEEhoJ4kKJpAaGsfrFhb7FPgMvrMczaJnd0ReH19ygrzbPPM5ZS2xdCZFplSqecUF6LtgGG5OpeNKHSJNeAiaTCINKl1PZGqQ3Bd6B", "EUhzJoyKP7VydtpyBwNUGU2tqzI0QB0LIpQ10Fk3hX2ZcPoGRpACqmzcTQbKd98i3U7raFz2rMl2kys0ODgtAh22E3i57wmh38RbbR83hmw75i3E22hAtgDO0syk2lMr2zFar7U3i89dKbQTczmqCApRGoPcZ2Xh3kF01QpIL0BQ0Izqt2UGUNwByptdyV7PKyoJzhUE", "xexcHoyVwOs5TYTQVvU0iXn56ryKVdWedLTpq3KEKmbUHfwzuZjIpZOPVXMEappFhjdqwtp1bBrWaRBCfPFwCq2W8SsyvwqZ6sIGGIs6ZqwvysS8W2qCwFPfCBRaWrBb1ptwqdjhFppaEMXVPOZpIjZuzwfHUbmKEK3qpTLdeWdVKyr65nXi0UvVQTYT5sOwVyoHcxex", "2Llnegc5i4flqd4HZPFK210yh61boBxRSdnNVMeudKimx92Qi4aPuHP12HmEImbWrXjLgBGqy1bSnKvLhqMqhknyuse4nFoeLTkJJkTLeoFn4esuynkhqMqhLvKnSb1yqGBgLjXrWbmIEmH21PHuPa4iQ29xmiKdueMVNndSRxBob16hy012KFPZH4dqlf4i5cgenlL2", "dZzoMZF6xtt3voTFDbPzEZ7GeM8t7uY05d4K4xfhtdxELh96dDRB4oRYA2smET5dy1dafGkXOz2V7tNOVi0vSqfuhI99IKprVK6QQ6KVrpKI99IhufqSv0iVONt7V2zOXkGfad1yd5TEms2AYRo4BRDd69hLExdthfx4K4d50Yu7t8MeG7ZEzPbDFTov3ttx6FZMozZd", "SNYr3bWMtQulWZO2FEwuhSFp3EXPR1TujPRJwUFlxBh9Pvf2MeTEpR7a3dU6e9rNUMyBh2osDdK4Vdm4gZ0XcRCoHZPi2jiXT2dCCd2TXij2iPZHoCRcX0Zg4mdV4KdDso2hByMUNr9e6Ud3a7RpETeM2fvP9hBxlFUwJRPjuT1RPXE3pFShuwEF2OZWluQtMWb3rYNS", "4viQ2FrYHcrH44gqvPLo6KtiFu56AW1eXbDBZrBepzdLKE33Ey4TwFERnkVLnbHAXbKqAi0HFP9Eu7yg8WNlI7q2dvXGGiPaMbrBBrbMaPiGGXvd2q7IlNW8gy7uE9PFH0iAqKbXAHbnLVknREFwT4yE33EKLdzpeBrZBDbXe1WA65uFitK6oLPvqg44HrcHYrF2Qiv4", "0VIoSHBNVAW8De7NquFyEUm0o9xNnQJGn2OR1yOK9djWALhyP3a1XoQEwTnXuzypRuwsaLPUlertksOY6LYmnbQmPgdDQRXXKdKooKdKXXRQDdgPmQbnmYL6YOsktrelUPLaswuRpyzuXnTwEQoX1a3PyhLAWjd9KOy1RO2nGJQnNx9o0mUEyFuqN7eD8WAVNBHSoIV0", "fdJPBiTra9E0qg2HJrobeEC2SkOfSzbw6nG5J5ACx42GQDBsCyGfxNlHHYhl7EmkdvYaKAXUVXSKcTT1KhyYaj9Q4YtyhnOA7cLrrLc7AOnhytY4Q9jaYyhK1TTcKSXVUXAKaYvdkmE7lhYHHlNxfGyCsBDQG24xCA5J5Gn6wbzSfOkS2CEeborJH2gq0E9arTiBPJdf", "kLOA93PyUOX3QdlLuZ9JgNq1peyIITAQSnKzuLBZ2NthOSseAJMGCecvSLVKAww61Y31hJ4l7kAOcjLmtqQNJlNyJb5yu9d9vqWUUWqv9d9uy5bJyNlJNQqtmLjcOAk7l4Jh13Y16wwAKVLSvceCGMJAesSOhtN2ZBLuzKnSQATIIyep1qNgJ9ZuLldQ3XOUyP39AOLk"];

  function _0x27ac06(_0x19b766) {
    _0x19b766 = _0x19b766.split("").reverse().join("");

    const _0x2097b7 = new Uint8Array(12),
          _0x14a93e = new TextEncoder().encode(_0x19b766);

    for (let _0x25cd9d = 0; _0x25cd9d < _0x14a93e.length; _0x25cd9d += 2) {
      let _0x30b9bb = _0x14a93e[_0x25cd9d] << 5 | _0x14a93e[_0x25cd9d + 1] & 255;

      _0x30b9bb %= 63;
      _0x2097b7[_0x25cd9d >> 1] = _0x30b9bb;
    }

    let _0x11842d = "";

    for (let _0x1d6d82 = 0; _0x1d6d82 < _0x2097b7.length; _0x1d6d82++) {
      _0x11842d += (_0x2097b7[_0x1d6d82] + 256).toString(2).slice(1);
    }

    let _0xf54053 = "",
        _0x4a6dda = "";

    for (let _0x3665ab = 0; _0x3665ab < 16; _0x3665ab++) {
      if (_0x3665ab !== 0) {
        const _0x35e00c = _0x3665ab * 6,
              _0x3f3c34 = _0x11842d.substring(_0x35e00c, _0x35e00c + 6);

        let _0x4bbe04 = parseInt(_0x3f3c34, 2);

        const _0x14204a = _0x4a6dda.split("");

        for (let _0x3fdc36 = 0; _0x3fdc36 < _0x14204a.length; _0x3fdc36++) {
          _0x14204a[_0x3fdc36] === "1" && (_0x4bbe04 = (_0x4bbe04 >> 6 - _0x3fdc36 | _0x4bbe04 << _0x3fdc36) & 63);
        }

        _0x4a6dda = (_0x4bbe04 & 63).toString(2).padStart(6, "0");
      } else {
        _0x4a6dda = _0x11842d.substring(0, 6);
      }

      _0xf54053 += _0x4a6dda;
    }

    for (let _0x483560 = 0; _0x483560 < 12; _0x483560++) {
      const _0x2ad0aa = _0x483560 * 8;

      _0x2097b7[_0x483560] = parseInt(_0xf54053.substring(_0x2ad0aa, _0x2ad0aa + 8), 2);
    }

    const _0x2027c8 = btoa(String.fromCharCode.apply(null, _0x2097b7));

    return _0x2027c8;
  }

  let _0x1250c7 = Date.now() + parseInt(_0x3d85c7);

  typeof _0x4f5521 != "object" && (_0x4f5521 = JSON.parse(_0x4f5521));
  _0x4f5521.nowTime = _0x1250c7;

  let _0x576b70 = _0x319e7b + _0x1250c7;

  const _0x1c5175 = _0x576b70.substring(0, _0x576b70.length - 5);

  let _0x46db70 = "";

  for (let _0x467b8d = 0; _0x467b8d < _0x1c5175.length; _0x467b8d++) {
    let _0x3e85a5 = _0x1c5175.charCodeAt(_0x467b8d),
        _0x408bfd = _0x3e85a5 % 10,
        _0x17b4c1 = _0xd694f6[_0x408bfd][_0x467b8d];

    _0x46db70 += _0x17b4c1;
  }

  var _0x249288 = _0x46db70.length,
      _0x4eab69 = Math.floor(_0x249288 / 24),
      _0x40ba62 = "";

  for (var _0x5787b9 = 0; _0x5787b9 < 24; _0x5787b9++) {
    var _0x2101c1 = (_0x5787b9 + 1) * _0x4eab69;

    _0x5787b9 === 23 && (_0x2101c1 = _0x249288);

    var _0x5d119b = _0x46db70.substring(_0x5787b9 * _0x4eab69, _0x2101c1),
        _0x26f208 = [];

    for (var _0x4cfa3b = 0; _0x4cfa3b < _0x5d119b.length; _0x4cfa3b++) {
      _0x26f208.push(_0x5d119b.charCodeAt(_0x4cfa3b));
    }

    var _0x5ec15e = _0x26f208.reduce(function (_0x5445e8, _0x20e1d8) {
      return _0x5445e8 + _0x20e1d8;
    }, 0),
        _0x1f3632 = Math.floor(_0x5ec15e / _0x26f208.length);

    _0x40ba62 += String.fromCharCode(_0x1f3632);
  }

  _0x46db70 = _0x40ba62;

  const _0x25755b = _0x27ac06(_0x46db70),
        _0x306092 = _0x2f71e9.enc.Utf8.parse(_0x25755b),
        _0x6b15ba = _0x2f71e9.enc.Utf8.parse(""),
        _0x268cf5 = _0x2f71e9.AES.encrypt(JSON.stringify(_0x4f5521), _0x306092, {
    iv: _0x6b15ba,
    mode: _0x2f71e9.mode.ECB,
    padding: _0x2f71e9.pad.Pkcs7
  });

  return _0x268cf5.toString();
}

function _0x1eed74() {
  if ($.blacklist == "") {
    return;
  }

  console.log("当前已设置黑名单：");

  const _0x5d3d8b = Array.from(new Set($.blacklist.split("&")));

  console.log(_0x5d3d8b.join("&") + "\n");
  let _0x46cd19 = _0x5d3d8b,
      _0x4209bc = [],
      _0x1fb5b6 = false;

  for (let _0xc90e18 = 0; _0xc90e18 < _0x2e02da.length; _0xc90e18++) {
    let _0x96b6fd = decodeURIComponent(_0x2e02da[_0xc90e18].match(/pt_pin=([^; ]+)(?=;?)/) && _0x2e02da[_0xc90e18].match(/pt_pin=([^; ]+)(?=;?)/)[1] || "");

    if (!_0x96b6fd) {
      break;
    }

    let _0x3e554f = false;

    for (let _0x478ec6 of _0x46cd19) {
      if (_0x478ec6 && _0x478ec6 == _0x96b6fd) {
        _0x3e554f = true;
        break;
      }
    }

    !_0x3e554f && (_0x1fb5b6 = true, _0x4209bc.splice(_0xc90e18, -1, _0x2e02da[_0xc90e18]));
  }

  _0x1fb5b6 && (_0x2e02da = _0x4209bc);
}

function _0x1f2f19(_0x23cb02, _0x53121d) {
  _0x53121d != 0 && _0x23cb02.unshift(_0x23cb02.splice(_0x53121d, 1)[0]);
}

function _0x5972e3() {
  if ($.whitelist == "") {
    helpCookiesArr = $.toObj($.toStr(_0x2e02da, _0x2e02da));
    return;
  }

  console.log("当前已设置白名单：");

  const _0x1e1fc4 = Array.from(new Set($.whitelist.split("&")));

  console.log(_0x1e1fc4.join("&") + "\n");
  let _0x997fa0 = [],
      _0x1df944 = _0x1e1fc4;

  for (let _0x4aeea9 in _0x2e02da) {
    let _0x4d4fdc = decodeURIComponent(_0x2e02da[_0x4aeea9].match(/pt_pin=([^; ]+)(?=;?)/) && _0x2e02da[_0x4aeea9].match(/pt_pin=([^; ]+)(?=;?)/)[1] || "");

    _0x1df944.includes(_0x4d4fdc) && _0x997fa0.push(_0x2e02da[_0x4aeea9]);
  }

  helpCookiesArr = _0x997fa0;

  if (_0x1df944.length > 1) {
    for (let _0x6a24fd in _0x1df944) {
      let _0x20e967 = _0x1df944[_0x1df944.length - 1 - _0x6a24fd];

      if (!_0x20e967) {
        continue;
      }

      for (let _0x9bab8c in helpCookiesArr) {
        let _0x58c231 = decodeURIComponent(helpCookiesArr[_0x9bab8c].match(/pt_pin=([^; ]+)(?=;?)/) && helpCookiesArr[_0x9bab8c].match(/pt_pin=([^; ]+)(?=;?)/)[1]);

        _0x20e967 == _0x58c231 && _0x1f2f19(helpCookiesArr, _0x9bab8c);
      }
    }
  }
}

function _0x56c6c8(_0xab5091 = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", _0x4c224b = 0) {
  return _0xab5091.replace(/[xy]/g, function (_0x21fa41) {
    var _0x20950f = Math.random() * 16 | 0,
        _0x3df7a7 = _0x21fa41 == "x" ? _0x20950f : _0x20950f & 3 | 8;

    _0x4c224b ? uuid = _0x3df7a7.toString(36).toUpperCase() : uuid = _0x3df7a7.toString(36);
    return uuid;
  });
}

function _0xde7990(_0xdff50c) {
  const _0x29b8cb = {
    venderId: _0xdff50c,
    shopId: _0xdff50c,
    bindByVerifyCodeFlag: 1
  };
  const _0x383bf9 = {
    url: "https://api.m.jd.com/client.action",
    body: "appid=shopmember_m_jd_com&functionId=bindWithVender&body=" + encodeURIComponent(JSON.stringify(_0x29b8cb)) + "&clientVersion=9.2.0&client=H5&h5st=",
    headers: {
      Cookie: _0x5d9066,
      "User-Agent": $.UA,
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Referer: "https://shopmember.m.jd.com/"
    }
  };
  return new Promise(_0x1ee3a6 => {
    $.post(_0x383bf9, (_0x523193, _0xd33047, _0xdaec9c) => {
      try {
        if (_0x523193) {
          $.logErr(_0x523193);
        } else {
          if (_0xdaec9c) {
            _0xdaec9c = JSON.parse(_0xdaec9c);

            if (_0xdaec9c.busiCode == "0") {
              process.stdout.write(_0xdaec9c.message + "\n");

              if (_0xdaec9c.result && _0xdaec9c.result.giftInfo) {
                for (let _0x3b36c9 of lIIII1il.result.giftInfo.giftList) {
                  console.log(" >> 入会获得：" + _0x3b36c9.discountString + _0x3b36c9.prizeName + _0x3b36c9.secondLineDesc);
                }
              }
            } else {
              process.stdout.write(_0xdaec9c.message + "\n");
            }
          } else {
            $.log("京东返回了空数据");
          }
        }
      } catch (_0x3b02d5) {
        $.logErr(_0x3b02d5);
      } finally {
        _0x1ee3a6(_0xdaec9c.message);
      }
    });
  });
}

function _0x5b1225() {
  return new Promise(_0x27cd0d => {
    const _0x25b977 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: {},
      timeout: 10000
    };
    _0x25b977.headers.Cookie = _0x5d9066;
    _0x25b977.headers.referer = "https://h5.m.jd.com/";
    _0x25b977.headers["User-Agent"] = $.UA;
    $.get(_0x25b977, (_0x197070, _0x10f849, _0x1c4357) => {
      try {
        if (_0x1c4357) {
          _0x1c4357 = JSON.parse(_0x1c4357);

          if (!(_0x1c4357.islogin === "1")) {
            _0x1c4357.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x2c51ad) {
        console.log(_0x2c51ad);
      } finally {
        _0x27cd0d();
      }
    });
  });
}
!function (n) { "use strict"; function t(n, t) { var r = (65535 & n) + (65535 & t); return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r } function r(n, t) { return n << t | n >>> 32 - t } function e(n, e, o, u, c, f) { return t(r(t(t(e, n), t(u, f)), c), o) } function o(n, t, r, o, u, c, f) { return e(t & r | ~t & o, n, t, u, c, f) } function u(n, t, r, o, u, c, f) { return e(t & o | r & ~o, n, t, u, c, f) } function c(n, t, r, o, u, c, f) { return e(t ^ r ^ o, n, t, u, c, f) } function f(n, t, r, o, u, c, f) { return e(r ^ (t | ~o), n, t, u, c, f) } function i(n, r) { n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r; var e, i, a, d, h, l = 1732584193, g = -271733879, v = -1732584194, m = 271733878; for (e = 0; e < n.length; e += 16)i = l, a = g, d = v, h = m, g = f(g = f(g = f(g = f(g = c(g = c(g = c(g = c(g = u(g = u(g = u(g = u(g = o(g = o(g = o(g = o(g, v = o(v, m = o(m, l = o(l, g, v, m, n[e], 7, -680876936), g, v, n[e + 1], 12, -389564586), l, g, n[e + 2], 17, 606105819), m, l, n[e + 3], 22, -1044525330), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 4], 7, -176418897), g, v, n[e + 5], 12, 1200080426), l, g, n[e + 6], 17, -1473231341), m, l, n[e + 7], 22, -45705983), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 8], 7, 1770035416), g, v, n[e + 9], 12, -1958414417), l, g, n[e + 10], 17, -42063), m, l, n[e + 11], 22, -1990404162), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 12], 7, 1804603682), g, v, n[e + 13], 12, -40341101), l, g, n[e + 14], 17, -1502002290), m, l, n[e + 15], 22, 1236535329), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 1], 5, -165796510), g, v, n[e + 6], 9, -1069501632), l, g, n[e + 11], 14, 643717713), m, l, n[e], 20, -373897302), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 5], 5, -701558691), g, v, n[e + 10], 9, 38016083), l, g, n[e + 15], 14, -660478335), m, l, n[e + 4], 20, -405537848), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 9], 5, 568446438), g, v, n[e + 14], 9, -1019803690), l, g, n[e + 3], 14, -187363961), m, l, n[e + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 13], 5, -1444681467), g, v, n[e + 2], 9, -51403784), l, g, n[e + 7], 14, 1735328473), m, l, n[e + 12], 20, -1926607734), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 5], 4, -378558), g, v, n[e + 8], 11, -2022574463), l, g, n[e + 11], 16, 1839030562), m, l, n[e + 14], 23, -35309556), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 1], 4, -1530992060), g, v, n[e + 4], 11, 1272893353), l, g, n[e + 7], 16, -155497632), m, l, n[e + 10], 23, -1094730640), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 13], 4, 681279174), g, v, n[e], 11, -358537222), l, g, n[e + 3], 16, -722521979), m, l, n[e + 6], 23, 76029189), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 9], 4, -640364487), g, v, n[e + 12], 11, -421815835), l, g, n[e + 15], 16, 530742520), m, l, n[e + 2], 23, -995338651), v = f(v, m = f(m, l = f(l, g, v, m, n[e], 6, -198630844), g, v, n[e + 7], 10, 1126891415), l, g, n[e + 14], 15, -1416354905), m, l, n[e + 5], 21, -57434055), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 12], 6, 1700485571), g, v, n[e + 3], 10, -1894986606), l, g, n[e + 10], 15, -1051523), m, l, n[e + 1], 21, -2054922799), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 8], 6, 1873313359), g, v, n[e + 15], 10, -30611744), l, g, n[e + 6], 15, -1560198380), m, l, n[e + 13], 21, 1309151649), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 4], 6, -145523070), g, v, n[e + 11], 10, -1120210379), l, g, n[e + 2], 15, 718787259), m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, d), m = t(m, h); return [l, g, v, m] } function a(n) { var t, r = "", e = 32 * n.length; for (t = 0; t < e; t += 8)r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255); return r } function d(n) { var t, r = []; for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1)r[t] = 0; var e = 8 * n.length; for (t = 0; t < e; t += 8)r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32; return r } function h(n) { return a(i(d(n), 8 * n.length)) } function l(n, t) { var r, e, o = d(n), u = [], c = []; for (u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1)u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r]; return e = i(u.concat(d(t)), 512 + 8 * t.length), a(i(c.concat(e), 640)) } function g(n) { var t, r, e = ""; for (r = 0; r < n.length; r += 1)t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t); return e } function v(n) { return unescape(encodeURIComponent(n)) } function m(n) { return h(v(n)) } function p(n) { return g(m(n)) } function s(n, t) { return l(v(n), v(t)) } function C(n, t) { return g(s(n, t)) } function A(n, t, r) { return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n) } $.md5 = A }(this);
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }