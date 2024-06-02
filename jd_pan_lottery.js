/*
1 0,5 * * * jd_pan_lottery.js
 */

const $ = new Env('转盘抽豆');
const bdy_0x2ec6f1 = {
  id: "owhKjYXbriiozPoqKvCc47UChaQ",
  pid: "2uj3zc9n1jMY67As1e75hrdnphYn"
};
const bdy_0x81b103 = [bdy_0x2ec6f1],
  bdy_0x2aae3f = $.isNode() ? require("./sendNotify") : "",
  bdy_0x1a48ed = $.isNode() ? require("./jdCookie.js") : "";
let bdy_0x155f3f = [],
  bdy_0x179b8d = "";
if ($.isNode()) {
  Object.keys(bdy_0x1a48ed).forEach(_0x2ceaac => {
    bdy_0x155f3f.push(bdy_0x1a48ed[_0x2ceaac]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x155f3f = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x5066c1 => _0x5066c1.cookie)].filter(_0xbb4953 => !!_0xbb4953);
}
$.scid = "lottery";
$.suc = "no";
$.ver = "1.0.1";
$.encdata = "BB363561D6F82DC5CF2D785E7513E8E867C2D95DDE7CB6DBAA09FF3118D16660";
$.encdata = "082F6E6EB76A8CBEE15FCF7E92519D4A0C14A052EDB9C9248A0F4121699403D36C35C158EFB65C32311DCE62FF076E717D80B5322FC0FC3B1D3CA22644BC685E";
!(async () => {
  if (!bdy_0x155f3f[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  console.log("很多黑子！");
  for (let _0x22b22c = 0; _0x22b22c < bdy_0x155f3f.length; _0x22b22c++) {
    if (bdy_0x155f3f[_0x22b22c]) {
      bdy_0x179b8d = bdy_0x155f3f[_0x22b22c];
      $.UserName = decodeURIComponent(bdy_0x179b8d.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x179b8d.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x22b22c + 1;
      $.isLogin = true;
      $.nickName = "";
      message = "";
      $.hotflag = false;
      $.limit = false;
      $.UUID = bdy_0x26991f("xxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx");
      $.jdk = bdy_0x26991f("--xxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      bdy_0x1ff75d();
      $.UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";
      $.joytoken = "";
      await bdy_0x991399();
      $.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      if (!$.isLogin) {
        const _0x32e0b1 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x32e0b1);
        $.isNode() && (await bdy_0x2aae3f.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      for (let _0x17264a of bdy_0x81b103) {
        console.log("\n开始 " + _0x17264a.id + " ");
        $.appid = "babel_" + _0x17264a.id;
        $.projectId = _0x17264a.pid;
        await bdy_0x1a2f3b();
        if ($.hotflag) {
          console.log("\n火爆号！\n");
          break;
        }
        await $.wait(3000);
      }
      await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
    }
  }
})().catch(_0x1a738e => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x1a738e + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0x1a2f3b() {
  await bdy_0x41fcb5($.projectId);
  await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
  if ($.taskList) {
    for (const _0x455a08 of $.taskList) {
      if ($.limit || $.hotflag) {
        break;
      }
      if (_0x455a08.ext.extraType !== "brandMemberList" && _0x455a08.ext.extraType !== "assistTaskDetail") {
        if (_0x455a08.assignmentName.indexOf("抽奖") > -1) {
          $.rewardId = _0x455a08.encryptAssignmentId;
        }
        if (_0x455a08.completionCnt < _0x455a08.assignmentTimesLimit) {
          let _0x5fb89c = _0x455a08.assignmentTimesLimit - _0x455a08.completionCnt;
          $.log("任务：" + _0x455a08.assignmentName + ",去完成");
          if (_0x455a08.ext) {
            _0x455a08.ext.extraType === "sign1" && (await bdy_0x7626d9($.projectId, _0x455a08.encryptAssignmentId, _0x455a08.ext.sign1.itemId), await $.wait(parseInt(Math.random() * 1000 + 1000, 10)));
            if (_0x455a08.ext.extraType === "followChannel") {
              if (_0x455a08.ext.followChannel.length == 0) {
                continue;
              }
              await bdy_0x7626d9($.projectId, _0x455a08.encryptAssignmentId, _0x455a08.ext.followChannel[0].itemId);
              await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
            }
            for (let _0x5350bd of _0x455a08.ext.productsInfo || []) {
              if (_0x5fb89c === 0 || $.hotflag) {
                break;
              }
              if (_0x5350bd.status === 1) {
                const _0x35ac82 = {
                  actionType: 1
                };
                await bdy_0x7626d9($.projectId, _0x455a08.encryptAssignmentId, _0x5350bd.itemId, _0x35ac82);
                await $.wait(_0x455a08.ext.waitDuration * 1000);
                const _0x1de48b = {
                  actionType: 0
                };
                await bdy_0x7626d9($.projectId, _0x455a08.encryptAssignmentId, _0x5350bd.itemId, _0x1de48b);
                await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
              }
              _0x5fb89c--;
            }
            for (let _0x313bbc of _0x455a08.ext.shoppingActivity || []) {
              if (_0x5fb89c === 0 || $.hotflag) {
                break;
              }
              if (_0x313bbc.status === 1) {
                const _0x4527fd = {
                  actionType: 1
                };
                await bdy_0x7626d9($.projectId, _0x455a08.encryptAssignmentId, _0x313bbc.advId, _0x4527fd);
                if (_0x455a08.ext.waitDuration) {
                  await $.wait(_0x455a08.ext.waitDuration * 1000);
                  const _0x522a7d = {
                    actionType: 0
                  };
                  await bdy_0x7626d9($.projectId, _0x455a08.encryptAssignmentId, _0x313bbc.advId, _0x522a7d);
                }
                await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
              }
              _0x5fb89c--;
            }
            for (let _0x5f31a0 of _0x455a08.ext.browseShop || []) {
              if (_0x5fb89c === 0 || $.hotflag) {
                break;
              }
              if (_0x5f31a0.status === 1) {
                const _0x465c67 = {
                  actionType: 1
                };
                await bdy_0x7626d9($.projectId, _0x455a08.encryptAssignmentId, _0x5f31a0.itemId, _0x465c67);
                if (_0x455a08.ext.waitDuration) {
                  await $.wait(_0x455a08.ext.waitDuration * 1000);
                  const _0xc040f8 = {
                    actionType: 0
                  };
                  await bdy_0x7626d9($.projectId, _0x455a08.encryptAssignmentId, _0x5f31a0.itemId, _0xc040f8);
                }
                await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
              }
              _0x5fb89c--;
            }
            for (let _0x6c7587 of _0x455a08.ext.addCart || []) {
              if (_0x5fb89c === 0 || $.hotflag) {
                break;
              }
              if (_0x6c7587.status === 1) {
                const _0xd29133 = {
                  actionType: 1
                };
                await bdy_0x7626d9($.projectId, _0x455a08.encryptAssignmentId, _0x6c7587.itemId, _0xd29133);
                if (_0x455a08.ext.waitDuration) {
                  await $.wait(_0x455a08.ext.waitDuration * 1000);
                  const _0x115240 = {
                    actionType: 0
                  };
                  await bdy_0x7626d9($.projectId, _0x455a08.encryptAssignmentId, _0x6c7587.itemId, _0x115240);
                }
                await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
              }
              _0x5fb89c--;
            }
            for (let _0x7d5378 of _0x455a08.ext.followShop || []) {
              if (_0x5fb89c === 0 || $.hotflag) {
                break;
              }
              _0x7d5378.status === 1 && (await bdy_0x7626d9($.projectId, _0x455a08.encryptAssignmentId, _0x7d5378.itemId), await $.wait(parseInt(Math.random() * 1000 + 1000, 10)));
              _0x5fb89c--;
            }
          }
        } else {
          $.log("任务：" + _0x455a08.assignmentName + ",已完成");
        }
      }
    }
  } else {
    $.log("没有获取到活动信息");
  }
  $.nolotty = false;
  if ($.rewardId === undefined) {
    return;
  }
  console.log("\n开始抽奖...");
  for (let _0x188f06 of Array(10)) {
    if ($.nolotty) {
      break;
    }
    await bdy_0x475dd2($.projectId);
    await $.wait(1000);
  }
}
async function bdy_0x7626d9(_0x307761, _0x3ab625, _0x165be4, _0x4e47af = {}) {
  const _0x1e09d0 = {
    forceBot: "1",
    businessData: {},
    signStr: "-1",
    sceneid: $.appid
  };
  let _0x2c4962 = {
    sourceCode: "acerwq20220316",
    encryptProjectId: _0x307761,
    encryptAssignmentId: _0x3ab625,
    itemId: _0x165be4,
    ..._0x4e47af,
    extParam: _0x1e09d0,
    activity_id: $.appid.split("_")[1],
    template_id: "00026961",
    floor_id: "106911852",
    enc: $.encdata
  };
  return new Promise(_0x16f2fa => {
    $.post(bdy_0x8121ff("doInteractiveAssignment", _0x2c4962), async (_0x3648d5, _0x5a06e8, _0x20410b) => {
      try {
        if (_0x3648d5) {
          $.log("" + _0x3648d5);
          $.log($.name + " API请求失败，请检查网路重试");
        } else {
          if (_0x20410b) {
            _0x20410b = JSON.parse(_0x20410b);
            console.log(_0x165be4 + " " + _0x20410b.msg);
            if (_0x20410b.msg.indexOf("火爆") > -1) {
              $.hotflag = true;
            }
            if (_0x20410b.msg.indexOf("未通过") > -1) {
              $.limit = true;
            }
          } else {
            $.log("没有返回数据");
          }
        }
      } catch (_0x20e521) {
        $.logErr(_0x20e521, _0x5a06e8);
      } finally {
        _0x16f2fa(_0x20410b);
      }
    });
  });
}
async function bdy_0x475dd2(_0x65e12e) {
  const _0x359cba = {
    exchangeNum: 1
  };
  let _0x474a7f = {
    sourceCode: "acerwq20220316",
    encryptProjectId: _0x65e12e,
    encryptAssignmentId: $.rewardId,
    completionFlag: true,
    ext: _0x359cba,
    lat: "",
    lng: "",
    extParam: {
      forceBot: "1",
      businessData: {},
      signStr: "-1",
      sceneid: $.appid
    },
    activity_id: $.appid.split("_")[1],
    template_id: "00026961",
    floor_id: "106911852",
    enc: $.encdata
  };
  const _0x46ecfd = {
    "Content-Type": "application/x-www-form-urlencoded",
    Origin: "https://pro.m.jd.com",
    "User-Agent": $.UA,
    Referer: "https://pro.m.jd.com/",
    Cookie: bdy_0x179b8d
  };
  let _0x39d190 = {
    url: "http://api.m.jd.com/client.action?functionId=doInteractiveAssignment",
    body: "body=" + encodeURIComponent(JSON.stringify(_0x474a7f)) + "&appid=babelh5&sign=11&t=" + Date.now(),
    headers: _0x46ecfd
  };
  return new Promise(_0x230f94 => {
    $.post(_0x39d190, async (_0xa156bb, _0x2ed58e, _0x54bb6a) => {
      try {
        if (_0xa156bb) {
          $.log("" + _0xa156bb);
          $.log($.name + " API请求失败，请检查网路重试");
        } else {
          _0x54bb6a = JSON.parse(_0x54bb6a);
          if (_0x54bb6a.subCode == 0) {
            if (_0x54bb6a.subCode == 0 && JSON.stringify(_0x54bb6a.rewardsInfo.successRewards) !== "{}" && _0x54bb6a.rewardsInfo.successRewards !== undefined) {
              for (let _0x50ab8a of Object.values(_0x54bb6a.rewardsInfo.successRewards)) {
                if (_0x50ab8a.length === 0) {
                  $.log("什么都没有！");
                  continue;
                }
                $.log("中奖啦：" + _0x50ab8a[0].rewardName);
              }
            } else {
              if (JSON.stringify(_0x54bb6a.rewardsInfo.successRewards) === "{}" || _0x54bb6a.rewardsInfo.successRewards === undefined) {
                $.log("啥都没有！");
              } else {
                $.log(_0x54bb6a.msg);
                $.nolotty = true;
              }
            }
          } else {
            $.log(_0x54bb6a.msg);
            $.nolotty = true;
          }
        }
      } catch (_0x52a2a2) {
        $.logErr(_0x52a2a2, _0x2ed58e);
      } finally {
        _0x230f94(_0x54bb6a);
      }
    });
  });
}
function bdy_0x41fcb5(_0x351baf) {
  const _0x3e8138 = {
    rewardEncryptAssignmentId: null,
    needNum: 50
  };
  let _0x26a5cd = {
    sourceCode: "acerwq20220316",
    encryptProjectId: _0x351baf,
    ext: _0x3e8138,
    lat: "",
    lng: ""
  };
  return new Promise(_0x29496b => {
    $.post(bdy_0x8121ff("queryInteractiveInfo", _0x26a5cd), async (_0x263056, _0x197ffc, _0x129356) => {
      try {
        _0x263056 ? ($.log("" + _0x263056), $.log($.name + " API请求失败，请检查网路重试")) : _0x129356 ? (_0x129356 = JSON.parse(_0x129356), $.taskList = _0x129356.assignmentList) : $.log("没有返回数据");
      } catch (_0x2ea888) {
        $.logErr(_0x2ea888, _0x197ffc);
      } finally {
        _0x29496b(_0x129356);
      }
    });
  });
}
function bdy_0x8121ff(_0x49767e, _0x394522) {
  return {
    url: "http://api.m.jd.com/client.action?functionId=" + _0x49767e + "&body=" + encodeURIComponent(JSON.stringify(_0x394522)) + "&appid=babelh5&sign=11&t=" + Date.now(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Origin: "https://pro.m.jd.com",
      "User-Agent": $.UA,
      Referer: "https://pro.m.jd.com/",
      Cookie: bdy_0x179b8d
    }
  };
}
function bdy_0x26991f(_0x4429a7 = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", _0x52c0db = 0) {
  return _0x4429a7.replace(/[xy]/g, function (_0x3e72e0) {
    var _0x22cc2d = 16 * Math.random() | 0,
      _0x3ab243 = "x" == _0x3e72e0 ? _0x22cc2d : 3 & _0x22cc2d | 8;
    uuid = _0x52c0db ? _0x3ab243.toString(36).toUpperCase() : _0x3ab243.toString(36);
    return uuid;
  });
}
function bdy_0x1ff75d() {
  let _0x196641 = {
      A: "K",
      B: "L",
      C: "M",
      D: "N",
      E: "O",
      F: "P",
      G: "Q",
      H: "R",
      I: "S",
      J: "T",
      K: "A",
      L: "B",
      M: "C",
      N: "D",
      O: "E",
      P: "F",
      Q: "G",
      R: "H",
      S: "I",
      T: "J",
      e: "o",
      f: "p",
      g: "q",
      h: "r",
      i: "s",
      j: "t",
      k: "u",
      l: "v",
      m: "w",
      n: "x",
      o: "e",
      p: "f",
      q: "g",
      r: "h",
      s: "i",
      t: "j",
      u: "k",
      v: "l",
      w: "m",
      x: "n"
    },
    _0x114009 = ["MI9 Build/QKQ1.190825.002", "MI8 Build/OPM1.171019.026", "HLK-AL00 Build/HONORHLK-AL00", "SM-G9750 Build/QP1A.190711.020", "LIO-AL00 Build/HUAWEILIO-AL00", "ELE-AL00 Build/HUAWEIELE-AL00", "ANE-AL00 Build/HUAWEIANE-AL00", "22021211RC Build/SKQ1.211006.001"],
    _0x3154c5 = ["9", "10", "11", "12", "13"],
    _0x2bba53 = ["11.2.8", "11.2.6", "11.2.5", "11.2.4", "11.2.3", "11.1.4", "11.1.3", "11.2.0", "11.3.0"],
    _0x3bfe59 = ["98413", "98416", "98415", "98417", "98450", "98527"];
  $.dv = _0x114009[Math.floor(Math.random() * _0x114009.length)];
  $.iv = _0x3154c5[Math.floor(Math.random() * _0x3154c5.length)];
  $.av = _0x2bba53[Math.floor(Math.random() * _0x2bba53.length)];
  $.bv = _0x3bfe59[Math.floor(Math.random() * _0x3bfe59.length)];
  getstr = function (_0x449b63) {
    let _0x16698d = "",
      _0x5053e2 = "0123456789abcdef";
    for (let _0x27848e = 0; _0x27848e < _0x449b63; _0x27848e++) {
      let _0x12c57e = Math.round(Math.random() * (_0x5053e2.length - 1));
      _0x16698d += _0x5053e2.substring(_0x12c57e, _0x12c57e + 1);
    }
    return _0x16698d;
  };
  let _0x5e0039 = Buffer.from(getstr(16)).toString("base64"),
    _0x3de241 = Buffer.from(getstr(16)).toString("base64"),
    _0x4ee731 = Buffer.from($.iv).toString("base64").split("").map(_0x1b7d9c => _0x196641[_0x1b7d9c] || _0x1b7d9c).join(""),
    _0x4c9d7b = Buffer.from("31").toString("base64").split("").map(_0x5c1d88 => _0x196641[_0x5c1d88] || _0x5c1d88).join("");
  _0x3de241 = _0x3de241.split("").map(_0x12dee4 => _0x196641[_0x12dee4] || _0x12dee4).join("");
  _0x5e0039 = _0x5e0039.split("").map(_0x51a414 => _0x196641[_0x51a414] || _0x51a414).join("");
  const _0x3d8ae8 = {
    sv: _0x4ee731,
    ad: _0x5e0039,
    od: _0x3de241,
    ov: _0x4c9d7b,
    ud: _0x5e0039
  };
  ep = encodeURIComponent(JSON.stringify({
    hdid: "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
    ts: Date.now(),
    ridx: -1,
    cipher: _0x3d8ae8,
    ciphertype: 5,
    version: "1.2.0",
    appname: "com.jingdong.app.mall"
  }));
  $.UA = "jdapp;android;" + $.av + ";;;appBuild/" + $.bv + ";ef/1;ep/" + ep + ";jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android " + $.iv + "; " + $.dv + "; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046141 Mobile Safari/537.36";
}
function bdy_0x4627ac(_0x6f3e1d) {
  return new Promise(_0x51f2cb => {
    const _0x345cec = {
      "User-Agent": $.UA
    };
    const _0x2cf164 = {
      url: _0x6f3e1d,
      headers: _0x345cec,
      timeout: 10000
    };
    $.get(_0x2cf164, (_0x3b4b8b, _0x400858, _0x22e53b) => {
      try {
        $.encdata = _0x22e53b.match(/"enc":"(.*?)","id"/)[1];
      } catch (_0x24b8d1) {
        console.log(_0x24b8d1);
      } finally {
        _0x51f2cb();
      }
    });
  });
}
function bdy_0x991399() {
  return new Promise(_0x3403a4 => {
    const _0x5c5bbf = {
      Cookie: bdy_0x179b8d,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x231736 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x5c5bbf,
      timeout: 10000
    };
    $.get(_0x231736, (_0x5e8c63, _0x4bfa48, _0x4f9a34) => {
      try {
        if (_0x4f9a34) {
          _0x4f9a34 = JSON.parse(_0x4f9a34);
          if (!(_0x4f9a34.islogin === "1")) {
            _0x4f9a34.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x1c790f) {
        console.log(_0x1c790f);
      } finally {
        _0x3403a4();
      }
    });
  });
}
const bdy_0x2ec6f1 = {
  id: "owhKjYXbriiozPoqKvCc47UChaQ",
  pid: "2uj3zc9n1jMY67As1e75hrdnphYn"
};
const bdy_0x81b103 = [bdy_0x2ec6f1],
  bdy_0x2aae3f = $.isNode() ? require("./sendNotify") : "",
  bdy_0x1a48ed = $.isNode() ? require("./jdCookie.js") : "";
let bdy_0x155f3f = [],
  bdy_0x179b8d = "";
if ($.isNode()) {
  Object.keys(bdy_0x1a48ed).forEach(_0x2ceaac => {
    bdy_0x155f3f.push(bdy_0x1a48ed[_0x2ceaac]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x155f3f = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x5066c1 => _0x5066c1.cookie)].filter(_0xbb4953 => !!_0xbb4953);
}
$.scid = "lottery";
$.suc = "no";
$.ver = "1.0.1";
$.encdata = "BB363561D6F82DC5CF2D785E7513E8E867C2D95DDE7CB6DBAA09FF3118D16660";
$.encdata = "082F6E6EB76A8CBEE15FCF7E92519D4A0C14A052EDB9C9248A0F4121699403D36C35C158EFB65C32311DCE62FF076E717D80B5322FC0FC3B1D3CA22644BC685E";
!(async () => {
  if (!bdy_0x155f3f[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  console.log("很多黑子！");
  for (let _0x22b22c = 0; _0x22b22c < bdy_0x155f3f.length; _0x22b22c++) {
    if (bdy_0x155f3f[_0x22b22c]) {
      bdy_0x179b8d = bdy_0x155f3f[_0x22b22c];
      $.UserName = decodeURIComponent(bdy_0x179b8d.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x179b8d.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x22b22c + 1;
      $.isLogin = true;
      $.nickName = "";
      message = "";
      $.hotflag = false;
      $.limit = false;
      $.UUID = bdy_0x26991f("xxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx");
      $.jdk = bdy_0x26991f("--xxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      bdy_0x1ff75d();
      $.UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";
      $.joytoken = "";
      await bdy_0x991399();
      $.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      if (!$.isLogin) {
        const _0x32e0b1 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x32e0b1);
        $.isNode() && (await bdy_0x2aae3f.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      for (let _0x17264a of bdy_0x81b103) {
        console.log("\n开始 " + _0x17264a.id + " ");
        $.appid = "babel_" + _0x17264a.id;
        $.projectId = _0x17264a.pid;
        await bdy_0x1a2f3b();
        if ($.hotflag) {
          console.log("\n火爆号！\n");
          break;
        }
        await $.wait(3000);
      }
      await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
    }
  }
})().catch(_0x1a738e => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x1a738e + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0x1a2f3b() {
  await bdy_0x41fcb5($.projectId);
  await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
  if ($.taskList) {
    for (const _0x455a08 of $.taskList) {
      if ($.limit || $.hotflag) {
        break;
      }
      if (_0x455a08.ext.extraType !== "brandMemberList" && _0x455a08.ext.extraType !== "assistTaskDetail") {
        if (_0x455a08.assignmentName.indexOf("抽奖") > -1) {
          $.rewardId = _0x455a08.encryptAssignmentId;
        }
        if (_0x455a08.completionCnt < _0x455a08.assignmentTimesLimit) {
          let _0x5fb89c = _0x455a08.assignmentTimesLimit - _0x455a08.completionCnt;
          $.log("任务：" + _0x455a08.assignmentName + ",去完成");
          if (_0x455a08.ext) {
            _0x455a08.ext.extraType === "sign1" && (await bdy_0x7626d9($.projectId, _0x455a08.encryptAssignmentId, _0x455a08.ext.sign1.itemId), await $.wait(parseInt(Math.random() * 1000 + 1000, 10)));
            if (_0x455a08.ext.extraType === "followChannel") {
              if (_0x455a08.ext.followChannel.length == 0) {
                continue;
              }
              await bdy_0x7626d9($.projectId, _0x455a08.encryptAssignmentId, _0x455a08.ext.followChannel[0].itemId);
              await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
            }
            for (let _0x5350bd of _0x455a08.ext.productsInfo || []) {
              if (_0x5fb89c === 0 || $.hotflag) {
                break;
              }
              if (_0x5350bd.status === 1) {
                const _0x35ac82 = {
                  actionType: 1
                };
                await bdy_0x7626d9($.projectId, _0x455a08.encryptAssignmentId, _0x5350bd.itemId, _0x35ac82);
                await $.wait(_0x455a08.ext.waitDuration * 1000);
                const _0x1de48b = {
                  actionType: 0
                };
                await bdy_0x7626d9($.projectId, _0x455a08.encryptAssignmentId, _0x5350bd.itemId, _0x1de48b);
                await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
              }
              _0x5fb89c--;
            }
            for (let _0x313bbc of _0x455a08.ext.shoppingActivity || []) {
              if (_0x5fb89c === 0 || $.hotflag) {
                break;
              }
              if (_0x313bbc.status === 1) {
                const _0x4527fd = {
                  actionType: 1
                };
                await bdy_0x7626d9($.projectId, _0x455a08.encryptAssignmentId, _0x313bbc.advId, _0x4527fd);
                if (_0x455a08.ext.waitDuration) {
                  await $.wait(_0x455a08.ext.waitDuration * 1000);
                  const _0x522a7d = {
                    actionType: 0
                  };
                  await bdy_0x7626d9($.projectId, _0x455a08.encryptAssignmentId, _0x313bbc.advId, _0x522a7d);
                }
                await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
              }
              _0x5fb89c--;
            }
            for (let _0x5f31a0 of _0x455a08.ext.browseShop || []) {
              if (_0x5fb89c === 0 || $.hotflag) {
                break;
              }
              if (_0x5f31a0.status === 1) {
                const _0x465c67 = {
                  actionType: 1
                };
                await bdy_0x7626d9($.projectId, _0x455a08.encryptAssignmentId, _0x5f31a0.itemId, _0x465c67);
                if (_0x455a08.ext.waitDuration) {
                  await $.wait(_0x455a08.ext.waitDuration * 1000);
                  const _0xc040f8 = {
                    actionType: 0
                  };
                  await bdy_0x7626d9($.projectId, _0x455a08.encryptAssignmentId, _0x5f31a0.itemId, _0xc040f8);
                }
                await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
              }
              _0x5fb89c--;
            }
            for (let _0x6c7587 of _0x455a08.ext.addCart || []) {
              if (_0x5fb89c === 0 || $.hotflag) {
                break;
              }
              if (_0x6c7587.status === 1) {
                const _0xd29133 = {
                  actionType: 1
                };
                await bdy_0x7626d9($.projectId, _0x455a08.encryptAssignmentId, _0x6c7587.itemId, _0xd29133);
                if (_0x455a08.ext.waitDuration) {
                  await $.wait(_0x455a08.ext.waitDuration * 1000);
                  const _0x115240 = {
                    actionType: 0
                  };
                  await bdy_0x7626d9($.projectId, _0x455a08.encryptAssignmentId, _0x6c7587.itemId, _0x115240);
                }
                await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
              }
              _0x5fb89c--;
            }
            for (let _0x7d5378 of _0x455a08.ext.followShop || []) {
              if (_0x5fb89c === 0 || $.hotflag) {
                break;
              }
              _0x7d5378.status === 1 && (await bdy_0x7626d9($.projectId, _0x455a08.encryptAssignmentId, _0x7d5378.itemId), await $.wait(parseInt(Math.random() * 1000 + 1000, 10)));
              _0x5fb89c--;
            }
          }
        } else {
          $.log("任务：" + _0x455a08.assignmentName + ",已完成");
        }
      }
    }
  } else {
    $.log("没有获取到活动信息");
  }
  $.nolotty = false;
  if ($.rewardId === undefined) {
    return;
  }
  console.log("\n开始抽奖...");
  for (let _0x188f06 of Array(10)) {
    if ($.nolotty) {
      break;
    }
    await bdy_0x475dd2($.projectId);
    await $.wait(1000);
  }
}
async function bdy_0x7626d9(_0x307761, _0x3ab625, _0x165be4, _0x4e47af = {}) {
  const _0x1e09d0 = {
    forceBot: "1",
    businessData: {},
    signStr: "-1",
    sceneid: $.appid
  };
  let _0x2c4962 = {
    sourceCode: "acerwq20220316",
    encryptProjectId: _0x307761,
    encryptAssignmentId: _0x3ab625,
    itemId: _0x165be4,
    ..._0x4e47af,
    extParam: _0x1e09d0,
    activity_id: $.appid.split("_")[1],
    template_id: "00026961",
    floor_id: "106911852",
    enc: $.encdata
  };
  return new Promise(_0x16f2fa => {
    $.post(bdy_0x8121ff("doInteractiveAssignment", _0x2c4962), async (_0x3648d5, _0x5a06e8, _0x20410b) => {
      try {
        if (_0x3648d5) {
          $.log("" + _0x3648d5);
          $.log($.name + " API请求失败，请检查网路重试");
        } else {
          if (_0x20410b) {
            _0x20410b = JSON.parse(_0x20410b);
            console.log(_0x165be4 + " " + _0x20410b.msg);
            if (_0x20410b.msg.indexOf("火爆") > -1) {
              $.hotflag = true;
            }
            if (_0x20410b.msg.indexOf("未通过") > -1) {
              $.limit = true;
            }
          } else {
            $.log("没有返回数据");
          }
        }
      } catch (_0x20e521) {
        $.logErr(_0x20e521, _0x5a06e8);
      } finally {
        _0x16f2fa(_0x20410b);
      }
    });
  });
}
async function bdy_0x475dd2(_0x65e12e) {
  const _0x359cba = {
    exchangeNum: 1
  };
  let _0x474a7f = {
    sourceCode: "acerwq20220316",
    encryptProjectId: _0x65e12e,
    encryptAssignmentId: $.rewardId,
    completionFlag: true,
    ext: _0x359cba,
    lat: "",
    lng: "",
    extParam: {
      forceBot: "1",
      businessData: {},
      signStr: "-1",
      sceneid: $.appid
    },
    activity_id: $.appid.split("_")[1],
    template_id: "00026961",
    floor_id: "106911852",
    enc: $.encdata
  };
  const _0x46ecfd = {
    "Content-Type": "application/x-www-form-urlencoded",
    Origin: "https://pro.m.jd.com",
    "User-Agent": $.UA,
    Referer: "https://pro.m.jd.com/",
    Cookie: bdy_0x179b8d
  };
  let _0x39d190 = {
    url: "http://api.m.jd.com/client.action?functionId=doInteractiveAssignment",
    body: "body=" + encodeURIComponent(JSON.stringify(_0x474a7f)) + "&appid=babelh5&sign=11&t=" + Date.now(),
    headers: _0x46ecfd
  };
  return new Promise(_0x230f94 => {
    $.post(_0x39d190, async (_0xa156bb, _0x2ed58e, _0x54bb6a) => {
      try {
        if (_0xa156bb) {
          $.log("" + _0xa156bb);
          $.log($.name + " API请求失败，请检查网路重试");
        } else {
          _0x54bb6a = JSON.parse(_0x54bb6a);
          if (_0x54bb6a.subCode == 0) {
            if (_0x54bb6a.subCode == 0 && JSON.stringify(_0x54bb6a.rewardsInfo.successRewards) !== "{}" && _0x54bb6a.rewardsInfo.successRewards !== undefined) {
              for (let _0x50ab8a of Object.values(_0x54bb6a.rewardsInfo.successRewards)) {
                if (_0x50ab8a.length === 0) {
                  $.log("什么都没有！");
                  continue;
                }
                $.log("中奖啦：" + _0x50ab8a[0].rewardName);
              }
            } else {
              if (JSON.stringify(_0x54bb6a.rewardsInfo.successRewards) === "{}" || _0x54bb6a.rewardsInfo.successRewards === undefined) {
                $.log("啥都没有！");
              } else {
                $.log(_0x54bb6a.msg);
                $.nolotty = true;
              }
            }
          } else {
            $.log(_0x54bb6a.msg);
            $.nolotty = true;
          }
        }
      } catch (_0x52a2a2) {
        $.logErr(_0x52a2a2, _0x2ed58e);
      } finally {
        _0x230f94(_0x54bb6a);
      }
    });
  });
}
function bdy_0x41fcb5(_0x351baf) {
  const _0x3e8138 = {
    rewardEncryptAssignmentId: null,
    needNum: 50
  };
  let _0x26a5cd = {
    sourceCode: "acerwq20220316",
    encryptProjectId: _0x351baf,
    ext: _0x3e8138,
    lat: "",
    lng: ""
  };
  return new Promise(_0x29496b => {
    $.post(bdy_0x8121ff("queryInteractiveInfo", _0x26a5cd), async (_0x263056, _0x197ffc, _0x129356) => {
      try {
        _0x263056 ? ($.log("" + _0x263056), $.log($.name + " API请求失败，请检查网路重试")) : _0x129356 ? (_0x129356 = JSON.parse(_0x129356), $.taskList = _0x129356.assignmentList) : $.log("没有返回数据");
      } catch (_0x2ea888) {
        $.logErr(_0x2ea888, _0x197ffc);
      } finally {
        _0x29496b(_0x129356);
      }
    });
  });
}
function bdy_0x8121ff(_0x49767e, _0x394522) {
  return {
    url: "http://api.m.jd.com/client.action?functionId=" + _0x49767e + "&body=" + encodeURIComponent(JSON.stringify(_0x394522)) + "&appid=babelh5&sign=11&t=" + Date.now(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Origin: "https://pro.m.jd.com",
      "User-Agent": $.UA,
      Referer: "https://pro.m.jd.com/",
      Cookie: bdy_0x179b8d
    }
  };
}
function bdy_0x26991f(_0x4429a7 = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", _0x52c0db = 0) {
  return _0x4429a7.replace(/[xy]/g, function (_0x3e72e0) {
    var _0x22cc2d = 16 * Math.random() | 0,
      _0x3ab243 = "x" == _0x3e72e0 ? _0x22cc2d : 3 & _0x22cc2d | 8;
    uuid = _0x52c0db ? _0x3ab243.toString(36).toUpperCase() : _0x3ab243.toString(36);
    return uuid;
  });
}
function bdy_0x1ff75d() {
  let _0x196641 = {
      A: "K",
      B: "L",
      C: "M",
      D: "N",
      E: "O",
      F: "P",
      G: "Q",
      H: "R",
      I: "S",
      J: "T",
      K: "A",
      L: "B",
      M: "C",
      N: "D",
      O: "E",
      P: "F",
      Q: "G",
      R: "H",
      S: "I",
      T: "J",
      e: "o",
      f: "p",
      g: "q",
      h: "r",
      i: "s",
      j: "t",
      k: "u",
      l: "v",
      m: "w",
      n: "x",
      o: "e",
      p: "f",
      q: "g",
      r: "h",
      s: "i",
      t: "j",
      u: "k",
      v: "l",
      w: "m",
      x: "n"
    },
    _0x114009 = ["MI9 Build/QKQ1.190825.002", "MI8 Build/OPM1.171019.026", "HLK-AL00 Build/HONORHLK-AL00", "SM-G9750 Build/QP1A.190711.020", "LIO-AL00 Build/HUAWEILIO-AL00", "ELE-AL00 Build/HUAWEIELE-AL00", "ANE-AL00 Build/HUAWEIANE-AL00", "22021211RC Build/SKQ1.211006.001"],
    _0x3154c5 = ["9", "10", "11", "12", "13"],
    _0x2bba53 = ["11.2.8", "11.2.6", "11.2.5", "11.2.4", "11.2.3", "11.1.4", "11.1.3", "11.2.0", "11.3.0"],
    _0x3bfe59 = ["98413", "98416", "98415", "98417", "98450", "98527"];
  $.dv = _0x114009[Math.floor(Math.random() * _0x114009.length)];
  $.iv = _0x3154c5[Math.floor(Math.random() * _0x3154c5.length)];
  $.av = _0x2bba53[Math.floor(Math.random() * _0x2bba53.length)];
  $.bv = _0x3bfe59[Math.floor(Math.random() * _0x3bfe59.length)];
  getstr = function (_0x449b63) {
    let _0x16698d = "",
      _0x5053e2 = "0123456789abcdef";
    for (let _0x27848e = 0; _0x27848e < _0x449b63; _0x27848e++) {
      let _0x12c57e = Math.round(Math.random() * (_0x5053e2.length - 1));
      _0x16698d += _0x5053e2.substring(_0x12c57e, _0x12c57e + 1);
    }
    return _0x16698d;
  };
  let _0x5e0039 = Buffer.from(getstr(16)).toString("base64"),
    _0x3de241 = Buffer.from(getstr(16)).toString("base64"),
    _0x4ee731 = Buffer.from($.iv).toString("base64").split("").map(_0x1b7d9c => _0x196641[_0x1b7d9c] || _0x1b7d9c).join(""),
    _0x4c9d7b = Buffer.from("31").toString("base64").split("").map(_0x5c1d88 => _0x196641[_0x5c1d88] || _0x5c1d88).join("");
  _0x3de241 = _0x3de241.split("").map(_0x12dee4 => _0x196641[_0x12dee4] || _0x12dee4).join("");
  _0x5e0039 = _0x5e0039.split("").map(_0x51a414 => _0x196641[_0x51a414] || _0x51a414).join("");
  const _0x3d8ae8 = {
    sv: _0x4ee731,
    ad: _0x5e0039,
    od: _0x3de241,
    ov: _0x4c9d7b,
    ud: _0x5e0039
  };
  ep = encodeURIComponent(JSON.stringify({
    hdid: "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
    ts: Date.now(),
    ridx: -1,
    cipher: _0x3d8ae8,
    ciphertype: 5,
    version: "1.2.0",
    appname: "com.jingdong.app.mall"
  }));
  $.UA = "jdapp;android;" + $.av + ";;;appBuild/" + $.bv + ";ef/1;ep/" + ep + ";jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android " + $.iv + "; " + $.dv + "; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046141 Mobile Safari/537.36";
}
function bdy_0x4627ac(_0x6f3e1d) {
  return new Promise(_0x51f2cb => {
    const _0x345cec = {
      "User-Agent": $.UA
    };
    const _0x2cf164 = {
      url: _0x6f3e1d,
      headers: _0x345cec,
      timeout: 10000
    };
    $.get(_0x2cf164, (_0x3b4b8b, _0x400858, _0x22e53b) => {
      try {
        $.encdata = _0x22e53b.match(/"enc":"(.*?)","id"/)[1];
      } catch (_0x24b8d1) {
        console.log(_0x24b8d1);
      } finally {
        _0x51f2cb();
      }
    });
  });
}
function bdy_0x991399() {
  return new Promise(_0x3403a4 => {
    const _0x5c5bbf = {
      Cookie: bdy_0x179b8d,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x231736 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x5c5bbf,
      timeout: 10000
    };
    $.get(_0x231736, (_0x5e8c63, _0x4bfa48, _0x4f9a34) => {
      try {
        if (_0x4f9a34) {
          _0x4f9a34 = JSON.parse(_0x4f9a34);
          if (!(_0x4f9a34.islogin === "1")) {
            _0x4f9a34.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x1c790f) {
        console.log(_0x1c790f);
      } finally {
        _0x3403a4();
      }
    });
  });
}
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }