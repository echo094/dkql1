/*
星系牧场
活动入口：QQ星儿童牛奶京东自营旗舰店->品牌会员->星系牧场
号1默认作者助力,后续 2给1 3给2 接龙,助力需要新用户，已助力过的不能在助力
#伊利星系牧场
33 0-23/6 * * * https://raw.githubusercontent.com/6dylan6/jdpro/main/jd_qqxing.js
*/

const $ = new Env('伊利星系牧场');
const _0xbe096 = $.isNode() ? require("./jdCookie.js") : "",
      _0x1ebdbe = $.isNode() ? require("./sendNotify") : "",
      _0x3efb6f = require("./function/dylanx.js");

Exchange = true;
let _0x67d950 = [],
    _0x3a9361 = "";

function _0x23069a(_0x3fda19, _0x5caadb) {
  try {
    return _0x3fda19();
  } catch (_0x37cc31) {
    return undefined;
  }
}

if ($.isNode()) {
  Object.keys(_0xbe096).forEach(_0x49790f => {
    _0x67d950.push(_0xbe096[_0x49790f]);
  });

  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  _0x67d950 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0xbcf589($.getdata("CookiesJD") || "[]").map(_0x2fa7f9 => _0x2fa7f9.cookie)].filter(_0x293e73 => !!_0x293e73);
}

message = "";
!(async () => {
  if (!_0x67d950[0]) {
    const _0x146489 = {
      "open-url": "https://bean.m.jd.com/"
    };
    $.msg($.name, "【提示】请先获取cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/", _0x146489);
    return;
  }

  let _0xf7e3a6 = ["3081a5203b974323bbc06fa621c874d7", "65c835b2cc1b44918bcad9adfbdb2816", "4ff8b32e6b2e4dc1ba1f546f9363e09c", "a17e04ef07fd42de82f1014acd78a03a", "988211503df847ddafa6abe61d22bffd"];
  $.shareUuid = _0xf7e3a6[Math.floor(Math.random() * _0xf7e3a6.length)];

  for (let _0x4f5aba = 0; _0x4f5aba < 10; _0x4f5aba++) {
    _0x3a9361 = _0x67d950[_0x4f5aba];

    if (_0x3a9361) {
      $.UserName = decodeURIComponent(_0x3a9361.match(/pt_pin=([^; ]+)(?=;?)/) && _0x3a9361.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x4f5aba + 1;
      $.cando = true;
      $.cow = "";
      $.openCard = true;
      $.isLogin = true;
      $.needhelp = true;
      $.foodNum = 0;
      $.nickName = "";
      $.drawresult = "";
      $.exchange = 0;
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");

      if (!$.isLogin) {
        const _0x120cb4 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x120cb4);

        if ($.isNode()) {
          await _0x1ebdbe.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie");
        }

        continue;
      }

      await _0x333b96();
      await _0x493cd2();
      await _0x5d6b38();
      await _0x3766d0();
      await _0x171f9f();
      await _0x5d25e8();
      await _0x34ae5e();

      if ($.cando) {
        await _0x20cddd($.shareuuid);
        await _0x1c80a9();

        let _0x13f70d = Math.floor($.foodNum / 1000);

        console.log("可兑换 " + _0x13f70d + " 次 20京🐶");

        for (q = 0; q < 1 && Exchange; q++) {
          await _0x17ac39(13);
        }

        if (!Exchange) {
          console.log("你设置的不兑换东西,请自行进去活动兑换");
        }

        taskList = [...$.taskList, ...$.taskList2];

        for (j = 0; j < taskList.length; j++) {
          task = taskList[j];
          console.log(task.taskname);

          if (task.taskid == "interact") {
            for (l = 0; l < 20 - task.curNum; l++) {
              await _0x1165bc(task.taskid, task.params);
              await $.wait(5000);
            }

            console.log("互动完成");
          } else {
            if (task.taskid == "scansku") {
              await _0x1fb8ac();
              await _0x4340c3($.vid);
              await _0x1165bc(task.taskid, $.pparam);
            } else {
              task.taskid !== "add2cart" && (await _0x1165bc(task.taskid, task.params), await $.wait(3000));
            }
          }
        }

        await _0x1c80a9();

        for (k = 0; k < $.drawchance; k++) {
          await _0x156481();
          await $.wait(1000);
        }

        message += "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n" + $.cow + " 兑换京🐶 " + $.exchange + "  " + $.drawresult + "\n";
        console.log("休息休息~");
        await $.wait(20000);
      } else {
        $.msg($.name, " 跑不起来~手动进活动看看吧");
      }
    }
  }

  if (message.length != 0) {
    if (!$.isNode()) {
      $.msg($.name, "", "星系牧场" + message);
    }
  }
})().catch(_0x13eef1 => $.logErr(_0x13eef1)).finally(() => $.done());

function _0x194ee6(_0x56759f) {
  if (!_0x23069a(() => _0x56759f.headers["set-cookie"])) {
    return;
  }

  let _0x35ca43 = {},
      _0x376f81 = {},
      _0x6f60c5 = _0x3a9361.split(";");

  for (let _0x324f3b of _0x6f60c5) {
    const _0x4d1420 = _0x324f3b.split("=");

    _0x35ca43[_0x4d1420[0]] = _0x324f3b.replace(_0x4d1420[0] + "=", "");
  }

  for (let _0x5b45cf of _0x56759f.headers["set-cookie"]) {
    const _0x4b9071 = _0x5b45cf.split(";")[0],
          _0x2f9b69 = _0x4b9071.split("=");

    _0x35ca43[_0x2f9b69[0]] = _0x4b9071.replace(_0x2f9b69[0] + "=", "");
  }

  const _0x160f0c = { ..._0x376f81,
    ..._0x35ca43
  },
        _0x1f28f0 = _0x160f0c;
  _0x3a9361 = "";

  for (let _0xc386bc in _0x1f28f0) {
    _0xc386bc && (_0x3a9361 = _0x3a9361 + (_0xc386bc + "=" + _0x1f28f0[_0xc386bc] + ";"));
  }
}

function _0x2af6a0(_0x4ef22b, _0x5923aa) {
  const _0xeef45e = {
    "Host": "api.m.jd.com",
    "accept": "*/*",
    "user-agent": "JD4iPhone/167490 (iPhone; iOS 14.2; Scale/3.00)",
    "accept-language": "zh-Hans-JP;q=1, en-JP;q=0.9, zh-Hant-TW;q=0.8, ja-JP;q=0.7, en-US;q=0.6",
    "content-type": "application/x-www-form-urlencoded",
    "Cookie": _0x3a9361
  };
  const _0x33887e = {
    "url": "https://api.m.jd.com/client.action?functionId=" + _0x4ef22b,
    "body": _0x5923aa,
    "headers": _0xeef45e
  };
  return _0x33887e;
}

function _0x333b96() {
  const _0x22e685 = {
    "Host": "api.m.jd.com",
    "accept": "*/*",
    "user-agent": "JD4iPhone/167490 (iPhone; iOS 14.2; Scale/3.00)",
    "accept-language": "zh-Hans-JP;q=1, en-JP;q=0.9, zh-Hant-TW;q=0.8, ja-JP;q=0.7, en-US;q=0.6",
    "content-type": "application/x-www-form-urlencoded",
    "Cookie": _0x3a9361
  };
  const _0x454206 = {
    "url": "https://api.m.jd.com/client.action?functionId=genToken",
    "body": "&body=%7B%22to%22%3A%22https%3A%5C/%5C/lzdz-isv.isvjcloud.com%5C/dingzhi%5C/qqxing%5C/pasture%5C/activity?activityId%3D90121061401%22%2C%22action%22%3A%22to%22%7D&build=167588&client=apple&clientVersion=9.4.4&d_brand=apple&d_model=iPhone9%2C2&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=1805a3ab499eebc088fd9ed1c67f5eaf350856d4&osVersion=12.0&partner=apple&rfs=0000&scope=11&screen=1242%2A2208&sign=73af724a6be5f3cb89bf934dfcde647f&st=1624887881842&sv=111",
    "headers": _0x22e685
  };
  return new Promise(_0x442481 => {
    $.post(_0x454206, async (_0x2b03fe, _0x3d7486, _0x310c5a) => {
      _0x194ee6(_0x3d7486);

      try {
        _0x2b03fe ? (console.log($.name + " API请求失败，请检查网路重试"), console.log("" + JSON.stringify(_0x2b03fe))) : (_0x310c5a = JSON.parse(_0x310c5a), $.isvToken = _0x310c5a.tokenKey, _0x3a9361 += "IsvToken=" + _0x310c5a.tokenKey);
      } catch (_0x20f020) {
        $.logErr(_0x20f020, _0x3d7486);
      } finally {
        _0x442481(_0x310c5a);
      }
    });
  });
}

async function _0x5d6b38() {
  const _0x30044c = {
    "id": "",
    "url": "https://lzdz-isv.isvjcloud.com"
  };
  const _0x43bcad = {
    "Host": "api.m.jd.com",
    "accept": "*/*",
    "user-agent": "JD4iPhone/167490 (iPhone; iOS 14.2; Scale/3.00)",
    "accept-language": "zh-Hans-JP;q=1, en-JP;q=0.9, zh-Hant-TW;q=0.8, ja-JP;q=0.7, en-US;q=0.6",
    "content-type": "application/x-www-form-urlencoded",
    "Cookie": _0x3a9361
  };
  let _0x1d307b = {
    "url": "https://api.m.jd.com/client.action?functionId=isvObfuscator",
    "body": await _0x3efb6f.getbody2("isvObfuscator", _0x30044c),
    "headers": _0x43bcad
  };
  return new Promise(_0x13af70 => {
    $.post(_0x1d307b, async (_0x1794d8, _0x410468, _0x183d6d) => {
      _0x194ee6(_0x410468);

      try {
        _0x1794d8 ? (console.log("" + JSON.stringify(_0x1794d8)), console.log($.name + " API请求失败，请检查网路重试")) : (_0x183d6d = JSON.parse(_0x183d6d), $.token2 = _0x183d6d.token);
      } catch (_0x9c6583) {
        $.logErr(_0x9c6583, _0x410468);
      } finally {
        _0x13af70(_0x183d6d);
      }
    });
  });
}

function _0x493cd2() {
  return new Promise(_0x3e4906 => {
    $.get(_0x350ef3("/dingzhi/qqxing/pasture/activity", "activityId=90121061401"), (_0x11a52f, _0x17ae96, _0x233faf) => {
      _0x194ee6(_0x17ae96);

      try {
        if (_0x11a52f) {
          console.log($.name + " API请求失败，请检查网路重试");
        }
      } catch (_0x40fbd0) {
        $.logErr(_0x40fbd0, _0x17ae96);
      } finally {
        _0x3e4906(_0x233faf);
      }
    });
  });
}

function _0x3766d0() {
  let _0x7e7ca1 = _0x165ad0("/dz/common/getSimpleActInfoVo", "activityId=90121061401");

  return new Promise(_0x2a2ac4 => {
    $.post(_0x7e7ca1, async (_0x5cd3af, _0x207543, _0x1e7098) => {
      _0x194ee6(_0x207543);

      try {
        _0x5cd3af ? (console.log("" + JSON.stringify(_0x5cd3af)), console.log($.name + " API请求失败，请检查网路重试")) : (_0x1e7098 = JSON.parse(_0x1e7098), _0x1e7098.result && ($.shopid = _0x1e7098.data.shopId));
      } catch (_0xbaf10a) {
        $.logErr(_0xbaf10a, _0x207543);
      } finally {
        _0x2a2ac4(_0x1e7098);
      }
    });
  });
}

function _0x171f9f() {
  let _0x1ff6e4 = _0x165ad0("/dingzhi/bd/common/getMyPing", "userId=" + $.shopid + "&token=" + encodeURIComponent($.token2) + "&fromType=APP&activityId=90121061401");

  return new Promise(_0x579f65 => {
    $.post(_0x1ff6e4, async (_0x56dc1f, _0x5f2236, _0x152941) => {
      _0x194ee6(_0x5f2236);

      try {
        _0x56dc1f ? (console.log("" + JSON.stringify(_0x56dc1f)), console.log($.name + " API请求失败，请检查网路重试")) : (_0x152941 = JSON.parse(_0x152941), _0x152941.data && _0x152941.data.secretPin && ($.pin = _0x152941.data.secretPin, $.nickname = _0x152941.data.nickname, console.log("欢迎回来~  " + $.nickname)));
      } catch (_0x5b1a25) {
        $.logErr(_0x5b1a25, _0x5f2236);
      } finally {
        _0x579f65(_0x152941);
      }
    });
  });
}

function _0x5d25e8() {
  let _0x8884fe = _0x165ad0("/common/accessLogWithAD", "venderId=1000361242&code=99&pin=" + encodeURIComponent($.pin) + "&activityId=90121061401&pageUrl=https%3A%2F%2Flzdz-isv.isvjcloud.com%2Fdingzhi%2Fqqxing%2Fpasture%2Factivity%3FactivityId%3D90121061401%26lng%3D107.146945%26lat%3D33.255267%26sid%3Dcad74d1c843bd47422ae20cadf6fe5aw%26un_area%3D27_2442_2444_31912&subType=app&adSource=");

  return new Promise(_0x250f89 => {
    $.post(_0x8884fe, async (_0x28141a, _0x59b1a7, _0x46d97c) => {
      _0x194ee6(_0x59b1a7);

      try {
        if (_0x28141a) {
          console.log("" + JSON.stringify(_0x28141a));
          console.log($.name + " API请求失败，请检查网路重试");
        } else {
          if ($.isNode()) {
            for (let _0x44d700 of _0x59b1a7.headers["set-cookie"]) {
              _0x3a9361 = _0x3a9361 + "; " + _0x44d700.split(";")[0] + ";";
            }
          } else {
            for (let _0x18c0db of _0x59b1a7.headers["Set-Cookie"].split(",")) {
              _0x3a9361 = _0x3a9361 + "; " + _0x18c0db.split(";")[0] + ";";
            }
          }
        }
      } catch (_0x19c35a) {
        $.logErr(_0x19c35a, _0x59b1a7);
      } finally {
        _0x250f89(_0x46d97c);
      }
    });
  });
}

function _0x34ae5e() {
  return new Promise(_0x2793f6 => {
    let _0x3036c3 = "pin=" + encodeURIComponent($.pin),
        _0xf70f33 = _0x165ad0("/wxActionCommon/getUserInfo", _0x3036c3);

    $.post(_0xf70f33, async (_0x4cf69c, _0x3b38f3, _0x451359) => {
      _0x194ee6(_0x3b38f3);

      try {
        _0x4cf69c ? console.log($.name + " API请求失败，请检查网路重试") : (_0x451359 = JSON.parse(_0x451359), _0x451359.data ? ($.userId = _0x451359.data.id, $.pinImg = _0x451359.data.yunMidImageUrl, $.nick = _0x451359.data.nickname) : $.cando = false);
      } catch (_0x2b40ec) {
        $.logErr(_0x2b40ec, _0x3b38f3);
      } finally {
        _0x2793f6(_0x451359);
      }
    });
  });
}

function _0x20cddd() {
  return new Promise(_0x52ef19 => {
    let _0x31ff36 = "activityId=90121061401&pin=" + encodeURIComponent($.pin) + "&pinImg=" + $.pinImg + "&nick=" + encodeURIComponent($.nick) + "&cjyxPin=&cjhyPin=&shareUuid=" + $.shareuuid;

    $.post(_0x165ad0("/dingzhi/qqxing/pasture/activityContent", _0x31ff36), async (_0x2e745c, _0x576e5a, _0x34a85b) => {
      _0x194ee6(_0x576e5a);

      try {
        if (_0x2e745c) {
          console.log($.name + " API请求失败，请检查网路重试");
        } else {
          _0x34a85b = JSON.parse(_0x34a85b);
          _0x34a85b.result && (_0x34a85b.data.openCardStatus != 3 && console.log("当前未开卡,无法助力和兑换奖励哦"), $.shareuuid = _0x34a85b.data.uid, console.log("\n【（" + $.UserName + "）的" + $.name + "互助码】" + $.shareuuid + "\n"));
        }
      } catch (_0x5caae6) {
        $.logErr(_0x5caae6, _0x576e5a);
      } finally {
        _0x52ef19(_0x34a85b);
      }
    });
  });
}

function _0x1c80a9() {
  let _0x45de65 = _0x165ad0("/dingzhi/qqxing/pasture/myInfo", "activityId=90121061401&pin=" + encodeURIComponent($.pin) + "&pinImg=" + $.pinImg + "&nick=" + $.nick + "&cjyxPin=&cjhyPin=&shareUuid=" + $.shareuuid);

  return new Promise(_0x17f7c3 => {
    $.post(_0x45de65, async (_0x51dc0b, _0x21c5ec, _0xfb5415) => {
      _0x194ee6(_0x21c5ec);

      try {
        if (_0x51dc0b) {
          console.log("" + JSON.stringify(_0x51dc0b));
          console.log($.name + " API请求失败，请检查网路重试");
        } else {
          _0xfb5415 = JSON.parse(_0xfb5415);

          if (_0xfb5415.result) {
            $.taskList = _0xfb5415.data.task.filter(_0x66d98c => _0x66d98c.maxNeed == 1 && _0x66d98c.curNum == 0 || _0x66d98c.taskid == "interact");
            $.taskList2 = _0xfb5415.data.task.filter(_0x569514 => _0x569514.maxNeed != 1 && _0x569514.type == 0);
            $.draw = _0xfb5415.data.bags.filter(_0xf7203b => _0xf7203b.bagId == "drawchance")[0];
            $.food = _0xfb5415.data.bags.filter(_0x3155d2 => _0x3155d2.bagId == "food")[0];
            $.sign = _0xfb5415.data.bags.filter(_0x37cdab => _0x37cdab.bagId == "signDay")[0];
            $.score = _0xfb5415.data.score;

            let _0x3c0d40 = _0xfb5415.data.task.filter(_0xa0b4c9 => _0xa0b4c9.taskid == "share2help")[0];

            if (_0x3c0d40) {
              if (_0x3c0d40.curNum == 20) {
                $.needhelp = false;
              }
            }

            $.cow = "当前🐮🐮成长值：" + $.score + "  饲料：" + ($.food.totalNum - $.food.useNum) + "  抽奖次数：" + ($.draw.totalNum - $.draw.useNum) + "  签到天数：" + $.sign.totalNum;
            $.foodNum = $.food.totalNum - $.food.useNum;
            console.log($.cow);
            $.drawchance = $.draw.totalNum - $.draw.useNum;
          } else {
            $.cando = false;
            console.log(_0xfb5415.errorMessage);
          }
        }
      } catch (_0x3dbfc1) {
        $.logErr(_0x3dbfc1, _0x21c5ec);
      } finally {
        _0x17f7c3(_0xfb5415);
      }
    });
  });
}

function _0x1fb8ac() {
  return new Promise(_0x30a9a1 => {
    let _0x379d02 = "type=4&activityId=90121061401&pin=" + encodeURIComponent($.pin) + "&actorUuid=" + $.uuid + "&userUuid=" + $.uuid;

    $.post(_0x165ad0("/dingzhi/qqxing/pasture/getproduct", _0x379d02), async (_0x33c60f, _0x17ee1b, _0x42d9a8) => {
      _0x194ee6(_0x17ee1b);

      try {
        _0x33c60f ? console.log($.name + " API请求失败，请检查网路重试") : (_0x42d9a8 = JSON.parse(_0x42d9a8), _0x42d9a8.data && _0x42d9a8.data[0] && ($.pparam = _0x42d9a8.data[0].id, $.vid = _0x42d9a8.data[0].venderId));
      } catch (_0x159e95) {
        $.logErr(_0x159e95, _0x17ee1b);
      } finally {
        _0x30a9a1(_0x42d9a8);
      }
    });
  });
}

function _0x4340c3(_0x26e746) {
  return new Promise(_0x527b9c => {
    let _0x584df7 = "jdActivityId=1404370&pin=" + encodeURIComponent($.pin) + "&actionType=5&venderId=" + _0x26e746 + "&activityId=90121061401";

    $.post(_0x165ad0("/interaction/write/writePersonInfo", _0x584df7), async (_0x555dc7, _0x15701b, _0x149b34) => {
      _0x194ee6(_0x15701b);

      try {
        if (_0x555dc7) {
          console.log($.name + " API请求失败，请检查网路重试");
        } else {
          console.log("浏览：" + $.vid);
          console.log(_0x149b34);
        }
      } catch (_0x31b865) {
        $.logErr(_0x31b865, _0x15701b);
      } finally {
        _0x527b9c(_0x149b34);
      }
    });
  });
}

function _0x17ac39(_0x2940a2) {
  return new Promise(_0x3bac4d => {
    let _0x118eda = "pid=" + _0x2940a2 + "&activityId=90121061401&pin=" + encodeURIComponent($.pin) + "&actorUuid=&userUuid=";

    $.post(_0x165ad0("/dingzhi/qqxing/pasture/exchange?_", _0x118eda), async (_0x5d5917, _0x1ea823, _0x121fcc) => {
      _0x194ee6(_0x1ea823);

      try {
        _0x5d5917 ? console.log($.name + " API请求失败，请检查网路重试") : (_0x121fcc = JSON.parse(_0x121fcc), _0x121fcc.result ? (console.log("兑换 " + _0x121fcc.data.rewardName + "成功"), $.exchange += 20) : console.log(_0x121fcc.errorMessage, "\n"));
      } catch (_0x31b157) {
        $.logErr(_0x31b157, _0x1ea823);
      } finally {
        _0x3bac4d(_0x121fcc);
      }
    });
  });
}

function _0x1165bc(_0x413584, _0x7a69fa) {
  let _0x289d38 = _0x165ad0("/dingzhi/qqxing/pasture/doTask", "taskId=" + _0x413584 + "&" + (_0x7a69fa ? "param=" + _0x7a69fa + "&" : "") + "activityId=90121061401&pin=" + encodeURIComponent($.pin) + "&actorUuid=" + $.uuid + "&userUuid=" + $.shareuuid);

  return new Promise(_0x45a341 => {
    $.post(_0x289d38, async (_0x4364b9, _0x509b73, _0x52b162) => {
      _0x194ee6(_0x509b73);

      try {
        _0x4364b9 ? (console.log("" + JSON.stringify(_0x4364b9)), console.log($.name + " API请求失败，请检查网路重试")) : (_0x52b162 = JSON.parse(_0x52b162), _0x52b162.result ? _0x52b162.data.food && console.log("操作成功,获得饲料： " + _0x52b162.data.food + "  抽奖机会：" + _0x52b162.data.drawChance + "  成长值：" + _0x52b162.data.growUp) : console.log(_0x52b162.errorMessage));
      } catch (_0x2298d1) {
        $.logErr(_0x2298d1, _0x509b73);
      } finally {
        _0x45a341(_0x52b162);
      }
    });
  });
}

function _0x156481() {
  let _0x4f4173 = _0x165ad0("/dingzhi/qqxing/pasture/luckydraw", "activityId=90121061401&pin=" + encodeURIComponent($.pin) + "&actorUuid=&userUuid=");

  return new Promise(_0x371d27 => {
    $.post(_0x4f4173, async (_0x1de18c, _0xd545cc, _0x1f1c86) => {
      _0x194ee6(_0xd545cc);

      try {
        _0x1de18c ? (console.log("" + JSON.stringify(_0x1de18c)), console.log($.name + " API请求失败，请检查网路重试")) : (_0x1f1c86 = JSON.parse(_0x1f1c86), _0x1f1c86.result ? Object.keys(_0x1f1c86.data).length == 0 ? console.log("抽奖成功,恭喜你抽了个寂寞： ") : (console.log("恭喜你抽中 " + _0x1f1c86.data.prize.rewardName), $.drawresult += "恭喜你抽中 " + _0x1f1c86.data.prize.rewardName + " ") : console.log(_0x1f1c86.errorMessage));
      } catch (_0x16071f) {
        $.logErr(_0x16071f, _0xd545cc);
      } finally {
        _0x371d27(_0x1f1c86);
      }
    });
  });
}

function _0x350ef3(_0x2079d2, _0x249ef2) {
  const _0x57813a = {
    "Host": "lzdz-isv.isvjcloud.com",
    "Accept": "application/json",
    "Referer": "https://lzdz-isv.isvjcloud.com",
    "user-agent": "jdapp;android;10.0.4;11;2393039353533623-7383235613364343;network/wifi;model/Redmi K30;addressid/138549750;aid/290955c2782e1c44;oaid/b30cf82cacfa8972;osVer/30;appBuild/88641;partner/xiaomi001;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 11; Redmi K30 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045537 Mobile Safari/537.36",
    "content-type": "application/x-www-form-urlencoded",
    "Cookie": _0x3a9361
  };
  const _0xd3b26b = {
    "url": "https://lzdz-isv.isvjcloud.com" + _0x2079d2 + "?" + _0x249ef2,
    "headers": _0x57813a
  };
  return _0xd3b26b;
}

function _0x165ad0(_0x393f44, _0x30d26c) {
  const _0x1ac464 = {
    "Host": "lzdz-isv.isvjcloud.com",
    "Accept": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Referer": "https://lzdz-isv.isvjcloud.com",
    "user-agent": "jdapp;android;10.0.4;11;2393039353533623-7383235613364343;network/wifi;model/Redmi K30;addressid/138549750;aid/290955c2782e1c44;oaid/b30cf82cacfa8972;osVer/30;appBuild/88641;partner/xiaomi001;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 11; Redmi K30 Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045537 Mobile Safari/537.36",
    "content-type": "application/x-www-form-urlencoded",
    "Cookie": _0x3a9361
  };
  const _0x437b6a = {
    "url": "https://lzdz-isv.isvjcloud.com" + _0x393f44,
    "body": _0x30d26c,
    "headers": _0x1ac464
  };
  return _0x437b6a;
}

function _0xbcf589(_0xd159a7) {
  const _0x447ab8 = function () {
    let _0x527b29 = true;
    return function (_0xefdaef, _0x3bdea2) {
      const _0x275426 = _0x527b29 ? function () {
        if (_0x3bdea2) {
          const _0x45a5d7 = _0x3bdea2.apply(_0xefdaef, arguments);

          _0x3bdea2 = null;
          return _0x45a5d7;
        }
      } : function () {};

      _0x527b29 = false;
      return _0x275426;
    };
  }(),
        _0x4f29c6 = _0x447ab8(this, function () {
    return _0x4f29c6.toString().search("(((.+)+)+)+$").toString().constructor(_0x4f29c6).search("(((.+)+)+)+$");
  });

  _0x4f29c6();

  const _0x432652 = function () {
    let _0x572475 = true;
    return function (_0x585eff, _0x2a2b8a) {
      const _0x3cb3ab = _0x572475 ? function () {
        if (_0x2a2b8a) {
          const _0x5821de = _0x2a2b8a.apply(_0x585eff, arguments);

          _0x2a2b8a = null;
          return _0x5821de;
        }
      } : function () {};

      _0x572475 = false;
      return _0x3cb3ab;
    };
  }();

  (function () {
    _0x432652(this, function () {
      const _0x36a0e7 = new RegExp("function *\\( *\\)"),
            _0x24a4f6 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
            _0x41958f = _0x3c268c("init");

      !_0x36a0e7.test(_0x41958f + "chain") || !_0x24a4f6.test(_0x41958f + "input") ? _0x41958f("0") : _0x3c268c();
    })();
  })();

  if (typeof _0xd159a7 == "string") {
    try {
      return JSON.parse(_0xd159a7);
    } catch (_0x2b3607) {
      console.log(_0x2b3607);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}

function _0x3c268c(_0x451cc9) {
  function _0x3ced66(_0x3bb283) {
    if (typeof _0x3bb283 === "string") {
      return function (_0x4b4957) {}.constructor("while (true) {}").apply("counter");
    } else {
      ("" + _0x3bb283 / _0x3bb283).length !== 1 || _0x3bb283 % 20 === 0 ? function () {
        return true;
      }.constructor("debugger").call("action") : function () {
        return false;
      }.constructor("debugger").apply("stateObject");
    }

    _0x3ced66(++_0x3bb283);
  }

  try {
    if (_0x451cc9) {
      return _0x3ced66;
    } else {
      _0x3ced66(0);
    }
  } catch (_0x26d77d) {}
}
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}