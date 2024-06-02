
/*
只助力，无抽奖
 */

const $ = new Env('刮刮红包');
const bdy_0x54feb0 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x3e0d54 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x540b9a = require("./function/dylans.js"),
  bdy_0x408a8a = require("./function/dylib.js"),
  bdy_0x3f33d8 = require("./USER_AGENTS");
let bdy_0x4a9d47 = true,
  bdy_0x5c56b0 = [],
  bdy_0x93c41 = {},
  bdy_0x81f86e = [],
  bdy_0x4d21da = "",
  bdy_0x53caf2 = "",
  bdy_0x278d86 = "",
  bdy_0x12c29c = "",
  bdy_0x319d25;
const bdy_0x5f3099 = process.env.GGHBHPNUM || "9999",
  bdy_0x706c68 = process.env.HLDELAY || "2",
  bdy_0x205676 = process.env.GGHBPIN || "",
  bdy_0x31bf59 = process.env.GGHBCODE || "",
  bdy_0x535fd6 = process.env.GGHBDRAW ? process.env.GGHBDRAW : false;
if (process.env.DY_PROXY) {
  try {
    bdy_0x93c41 = require("./function/proxy.js");
    $.dget = bdy_0x93c41.intoRequest($.get.bind($));
    $.dpost = bdy_0x93c41.intoRequest($.post.bind($));
  } catch {
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
if ($.isNode()) {
  Object.keys(bdy_0x3e0d54).forEach(_0x5237ce => {
    bdy_0x81f86e.push(bdy_0x3e0d54[_0x5237ce]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x81f86e = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...bdy_0x56d12b($.getdata("CookiesJD") || "[]").map(_0x658447 => _0x658447.cookie)].filter(_0x55a6f6 => !!_0x55a6f6);
}
!(async () => {
  if (!bdy_0x81f86e[0]) {
    const _0x5b865e = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x5b865e);
    return;
  }
  $.log("\n当前版本：20230531");
  console.log("执行流程，车头开团--助力--检查提现");
  console.log("TG频道：https://t.me/dylan_jdpro");
  $.log("\n环境变量清单（可选项）：");
  $.log("  指定PIN车头，不指定默认CK1  GGHBPIN='jdpin'\n  指定助力CODE，都去助力TA  GGHBCODE='xxx'\n  多少助力停止，默认9999个  GGHBHPNUM='100'\n  开启车头抽奖，默认关闭  GGHBDRAW='true'\n  助力间隔，默认1秒  HLDELAY='3'\n  开启代理API DY_PROXY='apiurl'\n");
  let _0x12654e = await bdy_0x1f9e26();
  if (bdy_0x205676) {
    console.log("\n已指定PIN：" + bdy_0x205676);
    let _0x3c0435 = bdy_0x81f86e.findIndex(_0x43fd23 => _0x43fd23.includes(bdy_0x205676));
    if (_0x3c0435 == -1) {
      console.log("运行的CK中没找到指定的PIN，停止执行");
      return;
    }
    bdy_0x53caf2 = bdy_0x81f86e[_0x3c0435];
  } else {
    console.log("\n未指定PIN默认CK1车头");
    bdy_0x53caf2 = bdy_0x81f86e[0];
  }
  bdy_0x4d21da = bdy_0x53caf2;
  $.UserName = decodeURIComponent(bdy_0x4d21da.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x4d21da.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
  $.isLogin = true;
  $.nickName = "";
  $.ktx = false;
  $.UA = bdy_0x3f33d8.UARAM ? bdy_0x3f33d8.UARAM() : bdy_0x3f33d8.USER_AGENT;
  console.log("\n————————————————————车头开团——————————————————————————");
  console.log("账号：" + ($.nickName || $.UserName));
  await bdy_0xf4477();
  if (!$.isLogin) {
    const _0x3791b2 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】cookie已失效", "账号" + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x3791b2);
    if ($.isNode()) {
      await bdy_0x54feb0.sendNotify($.name + "cookie已失效 - " + $.UserName, "账号 " + $.UserName + "\n请重新登录获取cookie");
    }
    return;
  }
  let _0x322bc5 = await bdy_0x408a8a.jddToken("https://pro.m.jd.com/mall/active/4TeSpXMCG6Kwy63rTeRDUp6wfL4n/index.html");
  $.eid = _0x322bc5.eid;
  $.eid_token = _0x322bc5.token;
  $.uuid = bdy_0x492077("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  $.eu = $.uuid.split("-")[0];
  $.fv = $.uuid.split("-")[1];
  await bdy_0x115725(false);
  await bdy_0x2b4ffd(1);
  await $.wait(1000);
  if (_0x12654e.length != 0) {
    let _0x202127 = _0x12654e[Math.floor(Math.random() * _0x12654e.length)];
    console.log("车头去助力 -> 作者");
    $.UserName = decodeURIComponent(bdy_0x4d21da.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x4d21da.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
    $.UA = bdy_0x3f33d8.UARAM ? bdy_0x3f33d8.UARAM() : bdy_0x3f33d8.USER_AGENT;
    await bdy_0x89022b(_0x202127);
    await $.wait(2000);
  }
  console.log("——————————————————————————————————————————————————————");
  console.log("\n\n—————————————开始助力车头(助力间隔" + bdy_0x706c68 + "秒)———————————————");
  bdy_0x31bf59 && (console.log("\n已指定助力CODE,那抛弃车头去助力TA"), bdy_0x5c56b0 = [], bdy_0x5c56b0.push(bdy_0x31bf59));
  bdy_0x319d25 = 0;
  for (let _0x8f70a9 of bdy_0x5c56b0) {
    console.log("\n去助力-> " + _0x8f70a9);
    $.suc = 0;
    for (let _0x4e8557 = bdy_0x319d25; _0x4e8557 < bdy_0x81f86e.length; _0x4e8557++) {
      if (bdy_0x81f86e[_0x4e8557]) {
        bdy_0x4d21da = bdy_0x81f86e[_0x4e8557];
        $.UserName = decodeURIComponent(bdy_0x4d21da.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x4d21da.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = _0x4e8557 + 1;
        $.isLogin = true;
        $.nickName = "";
        $.UA = bdy_0x3f33d8.UARAM ? bdy_0x3f33d8.UARAM() : bdy_0x3f33d8.USER_AGENT;
        let _0x4765a7 = await bdy_0x408a8a.jddToken("pro.m.jd.com/mall/active/3uT8xr7BvwiWmif5m2h9j1zeKgBG/index.html");
        $.eid = _0x4765a7.eid;
        $.eid_token = _0x4765a7.token;
        $.uuid = bdy_0x492077("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        $.eu = $.uuid.split("-")[0];
        $.fv = $.uuid.split("-")[1];
        console.log("\n开始【账号" + $.index + "】 " + ($.nickName || $.UserName) + "\n");
        await bdy_0x89022b(_0x8f70a9);
        !bdy_0x31bf59 && (bdy_0x4d21da = bdy_0x205676 ? bdy_0x53caf2 : bdy_0x81f86e[0], await bdy_0x115725(true));
        if ($.ktx) {
          console.log("可提现了");
          break;
        }
        if ($.suc >= Number(bdy_0x5f3099)) {
          $.log("已达目标助力数，跳出！");
          bdy_0x319d25 = _0x4e8557 + 1;
          break;
        }
        await $.wait(bdy_0x706c68 * 1000);
        bdy_0x93c41.swip && (await bdy_0x93c41.swip());
      }
    }
    if ($.index === bdy_0x81f86e.length) {
      console.log("\n没有可用于助力的ck，跳出！");
      break;
    }
  }
  $.ktx && !bdy_0x31bf59 && (console.log("\n\n———————————————————开始领取红包——————————————————————"), bdy_0x4d21da = bdy_0x205676 ? bdy_0x53caf2 : bdy_0x81f86e[0], $.UserName = decodeURIComponent(bdy_0x4d21da.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x4d21da.match(/pt_pin=([^; ]+)(?=;?)/)[1]), $.UA = bdy_0x3f33d8.UARAM ? bdy_0x3f33d8.UARAM() : bdy_0x3f33d8.USER_AGENT, await bdy_0x51cdc0());
  if ($.times > 0 && bdy_0x535fd6) {
    console.log("\n\n—————————————————————开始刮奖——————————————————————");
    bdy_0x4d21da = bdy_0x81f86e[0];
    $.UserName = decodeURIComponent(bdy_0x4d21da.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x4d21da.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
    $.UA = bdy_0x3f33d8.UARAM ? bdy_0x3f33d8.UARAM() : bdy_0x3f33d8.USER_AGENT;
    for (let _0x145015 = 0; _0x145015 < $.times; _0x145015++) {
      console.log("第" + (_0x145015 + 1) + "次抽奖：");
      await bdy_0x56574d();
      await $.wait(2000);
    }
  }
})().catch(_0x1c68e2 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x1c68e2 + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0x115725(_0x833871) {
  const _0x473462 = {
    areaInfo: "0_0_0_0",
    unpl: "",
    refresh: null,
    tUuid: "",
    skuId: null
  };
  let _0x2be17b = _0x473462;
  const _0x4d96ae = {
    appId: "a525b",
    functionId: "jx_party_home",
    body: _0x2be17b,
    appid: "signed_wh5",
    clientVersion: "1.0.0",
    client: "wh5",
    user: $.UserName,
    ua: $.UA
  };
  $.fg == 1 && ($.fg = 0);
  _0x2be17b = await bdy_0x540b9a.getbody(_0x4d96ae);
  if (!_0x2be17b) {
    return;
  }
  _0x2be17b = _0x2be17b + "&uuid=" + $.uuid + "&d_model=0-2-999&osVersion=16.1&eid=" + $.eid + "&x-api-eid-token=" + $.eid_token;
  return new Promise(async _0x41b695 => {
    $.dpost(bdy_0x4a8429(_0x2be17b), async (_0x215abb, _0x1186ce, _0xc88ea2) => {
      try {
        if (_0x215abb) {
          console.log("" + JSON.stringify(_0x215abb));
          console.log("home 请求失败，请检查网路重试");
          _0x215abb.includes("403") && ($.banip = true);
        } else {
          _0xc88ea2 = JSON.parse(_0xc88ea2);
          if (_0xc88ea2.code == 0) {
            if (_0xc88ea2.data.bizCode == 0) {
              if (!_0xc88ea2.data.result.stageHongbao.got) {
                console.log("无进度跳，黑了？");
                return;
              }
              $.times = _0xc88ea2.data.result.round.remainTimes;
              _0xc88ea2.data.result.popUp.joinPop && _0x833871 && console.log("" + (_0xc88ea2.data.result.popUp.joinPop.value ? "获得兑换金 " + _0xc88ea2.data.result.popUp.joinPop.value : ""));
              console.log("进度：" + _0xc88ea2.data.result.stageHongbao.got + "/" + _0xc88ea2.data.result.stageHongbao.all);
              _0xc88ea2.data.result.stageHongbao.stage.status == 0 && ($.ktx = true);
            }
          } else {
            $.hotflag = false;
            console.log(_0xc88ea2.message);
          }
        }
      } catch (_0x1bc87e) {
        $.logErr(_0x1bc87e, _0x1186ce);
      } finally {
        _0x41b695(_0xc88ea2);
      }
    });
  });
}
async function bdy_0x2b4ffd(_0x419bfa) {
  const _0x4b1dfa = {
    channel: "jkl"
  };
  let _0x5c8db8 = _0x4b1dfa;
  const _0x1a5b7b = {
    channel: "jkl"
  };
  _0x5c8db8 = "functionId=jx_party_invite&appid=signed_wh5&body=" + JSON.stringify(_0x1a5b7b);
  return new Promise(async _0x2cd63d => {
    $.dpost(bdy_0x4a8429(_0x5c8db8), async (_0x5a62d3, _0x3ea864, _0x253289) => {
      try {
        if (_0x5a62d3) {
          console.log("" + JSON.stringify(_0x5a62d3));
          console.log("lottery请求失败，请检查网路重试");
          _0x5a62d3.includes("403") && ($.banip = true);
        } else {
          _0x253289 = JSON.parse(_0x253289);
          if (_0x253289.code == 0) {
            if (_0x253289.data.bizCode == 0) {
              if (_0x419bfa) {
                console.log("我的助力码：" + _0x253289.data.result.inviteCode);
              }
              !$.ktx && bdy_0x5c56b0.push(_0x253289.data.result.inviteCode);
            } else {
              console.log(_0x253289.data.bizMsg);
            }
          } else {
            $.hotflag = false;
            console.log(_0x253289.message);
          }
        }
      } catch (_0x5ebdea) {
        $.logErr(_0x5ebdea, _0x3ea864);
      } finally {
        _0x2cd63d(_0x253289);
      }
    });
  });
}
async function bdy_0x89022b(_0xd9bf09) {
  const _0x3067fe = {
    sdkToken: "",
    jsToken: $.eid_token
  };
  let _0x5a86c1 = {
    inviteCode: "" + _0xd9bf09,
    deviceInfo: JSON.stringify(_0x3067fe),
    areaInfo: "",
    unpl: "",
    qdPageId: "MO-J2011-1",
    mdClickId: "Babel_dev_other_11lotterystart"
  };
  const _0x4b9057 = {
    appId: "a525b",
    functionId: "jx_party_assist",
    body: _0x5a86c1,
    appid: "signed_wh5",
    clientVersion: "1.0.0",
    client: "wh5",
    user: $.UserName,
    xcr: 1,
    ua: $.UA
  };
  _0x5a86c1 = await bdy_0x540b9a.getbody(_0x4b9057);
  if (!_0x5a86c1) {
    return;
  }
  _0x5a86c1 = _0x5a86c1 + "&uuid=" + $.uuid + "&d_model=0-2-999&osVersion=16.1&eid=" + $.eid + "&x-api-eid-token=" + $.eid_token;
  return new Promise(async _0x42a7d0 => {
    $.dpost(bdy_0x4a8429(_0x5a86c1), async (_0x878ff1, _0x27e46a, _0x53d100) => {
      try {
        _0x878ff1 ? (console.log("" + JSON.stringify(_0x878ff1)), console.log("lottery请求失败，请检查网路重试"), _0x878ff1.includes("403") && ($.banip = true)) : (_0x53d100 = JSON.parse(_0x53d100), _0x53d100.code == 0 ? _0x53d100.data.bizCode == 0 ? ($.suc++, console.log("助力成功 ✅ " + ($.suc || ""))) : console.log(_0x53d100.data.bizCode, _0x53d100.data.bizMsg) : ($.hotflag = false, console.log(_0x53d100.message)));
      } catch (_0x504c15) {
        $.logErr(_0x504c15, _0x27e46a);
      } finally {
        _0x42a7d0(_0x53d100);
      }
    });
  });
}
async function bdy_0x56574d(_0x31b987) {
  const _0x30182b = {
    uemps: "0-0-999",
    areaInfo: "0_0_0_0",
    latitude: 0,
    longitude: 0,
    deviceInfo: "{\"sdkToken\":\"\",\"jsToken\":\"\"}",
    unpl: "",
    qdPageId: "MO-J2011-1",
    mdClickId: "Babel_dev_other_11lotterystart"
  };
  let _0x435293 = _0x30182b;
  const _0x2cb829 = {
    appId: "a525b",
    functionId: "jx_party_lottery",
    body: _0x435293,
    appid: "signed_wh5",
    clientVersion: "1.0.0",
    client: "wh5",
    user: $.UserName,
    ua: $.UA
  };
  $.fg == 1 && ($.fg = 0);
  _0x435293 = await bdy_0x540b9a.getbody(_0x2cb829);
  if (!_0x435293) {
    return;
  }
  _0x435293 = _0x435293 + "&uuid=" + $.uuid + "&d_model=0-2-999&osVersion=16.1&eid=" + $.eid + "&x-api-eid-token=" + $.eid_token;
  return new Promise(async _0x45c41f => {
    $.dpost(bdy_0x4a8429(_0x435293), async (_0x4e03a0, _0x3642cb, _0x2150b5) => {
      try {
        if (_0x4e03a0) {
          console.log("" + JSON.stringify(_0x4e03a0));
          console.log("lottery请求失败，请检查网路重试");
          _0x4e03a0.includes("403") && ($.banip = true);
        } else {
          _0x2150b5 = JSON.parse(_0x2150b5);
          if (_0x2150b5.code == 0) {
            if (_0x2150b5.data.bizCode == 0) {
              for (let _0x36a647 of _0x2150b5.data.result.awardList) {
                if (_0x36a647.name) {
                  console.log("获得： " + _0x36a647.name);
                } else {
                  _0x36a647.blessingsStr ? console.log("获得祝福： " + _0x36a647.blessingsStr) : console.log(JSON.stringify(_0x2150b5.data.result.awardList));
                }
              }
            } else {
              console.log(_0x2150b5.data.bizMsg);
            }
          } else {
            $.hotflag = false;
            console.log(_0x2150b5.message);
          }
        }
      } catch (_0x1154d8) {
        $.logErr(_0x1154d8, _0x3642cb);
      } finally {
        _0x45c41f(_0x2150b5);
      }
    });
  });
}
async function bdy_0x51cdc0() {
  const _0x11508e = {
    deviceInfo: "{\"sdkToken\":\"\",\"jsToken\":\"\"}",
    unpl: "",
    qdPageId: "MO-J2011-1",
    mdClickId: "Babel_dev_other_11lotterystart"
  };
  let _0xbc69fe = _0x11508e;
  _0xbc69fe = encodeURIComponent(JSON.stringify(_0xbc69fe)) + "&appid=signed_wh5&functionId=jx_party_receive";
  return new Promise(async _0x1ac5f0 => {
    $.dpost(bdy_0x4a8429(_0xbc69fe), async (_0x36fb2c, _0x8e1a2f, _0x20402a) => {
      try {
        _0x36fb2c ? (console.log("" + JSON.stringify(_0x36fb2c)), console.log("recevie 请求失败，请检查网路重试"), _0x36fb2c.includes("403") && ($.banip = true)) : (_0x20402a = JSON.parse(_0x20402a), _0x20402a.code == 0 ? _0x20402a.data.bizCode == 0 ? console.log("领取 " + _0x20402a.data.result.discount + " 红包成功，" + _0x20402a.data.result.endTime) : (console.log(""), console.log(_0x20402a.data.bizMsg)) : ($.hotflag = false, console.log(_0x20402a.message)));
      } catch (_0x1a757f) {
        $.logErr(_0x1a757f, _0x8e1a2f);
      } finally {
        _0x1ac5f0(_0x20402a);
      }
    });
  });
}
function bdy_0x4a8429(_0x3c07b2) {
  const _0x32e883 = {
    Host: "api.m.jd.com",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/mall/active/3uT8xr7BvwiWmif5m2h9j1zeKgBG/index.html",
    "x-rreferer-page": "https://pro.m.jd.com/mall/active/3uT8xr7BvwiWmif5m2h9j1zeKgBG/index.html",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "x-rp-client": "h5_1.0.0",
    "Content-Type": "application/x-www-form-urlencoded",
    "x-requested-with": "com.jingdong.app.mall",
    "User-Agent": $.UA,
    Cookie: bdy_0x4d21da
  };
  const _0x5a6f97 = {
    url: "https://api.m.jd.com/",
    body: _0x3c07b2,
    headers: _0x32e883
  };
  return _0x5a6f97;
}
function bdy_0xf4477() {
  return new Promise(_0x47e9e2 => {
    const _0x2aec59 = {
      Cookie: bdy_0x4d21da,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x1155f0 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x2aec59,
      timeout: 10000
    };
    $.get(_0x1155f0, (_0x5630ae, _0x2640b6, _0x58cf5f) => {
      try {
        if (_0x58cf5f) {
          _0x58cf5f = JSON.parse(_0x58cf5f);
          if (!(_0x58cf5f.islogin === "1")) {
            _0x58cf5f.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x4b1a5d) {
        console.log(_0x4b1a5d);
      } finally {
        _0x47e9e2();
      }
    });
  });
}
function bdy_0x2d69a4() {
  return new Promise(_0x4ae4d5 => {
    !bdy_0x4a9d47 ? $.msg($.name, "", "" + bdy_0x278d86) : $.log("京东账号" + $.index + $.nickName + "\n" + bdy_0x278d86);
    _0x4ae4d5();
  });
}
function bdy_0x567315(_0x28004a) {
  try {
    if (typeof JSON.parse(_0x28004a) == "object") {
      return true;
    }
  } catch (_0x5ab2f4) {
    console.log(_0x5ab2f4);
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function bdy_0x1f9e26() {
  const _0x37ed0c = {
    url: "https://src-dy-server-dmujhfwxmu.cn-hangzhou.fcapp.run/618ghb",
    timeout: 30000
  };
  return new Promise(_0x4e9c45 => {
    $.get(_0x37ed0c, async (_0x20dae2, _0xcaa570, _0x37a702) => {
      try {
        if (_0x20dae2) {
          console.log("\n服务连接失败，终止执行！");
          process.exit(111);
        } else {
          if (_0x37a702) {
            _0x37a702 = JSON.parse(_0x37a702);
            if (_0x37a702.code === 200) {
              bdy_0x12c29c = _0x37a702.data;
            }
          }
        }
      } catch (_0x558e17) {
        $.logErr(_0x558e17, _0xcaa570);
      } finally {
        _0x4e9c45(bdy_0x12c29c);
      }
    });
  });
}
function bdy_0xd66cbd(_0x3d99b8) {
  const _0x528581 = _0x3d99b8.getFullYear(),
    _0x2be057 = ("0" + (_0x3d99b8.getMonth() + 1)).slice(-2),
    _0x33fa48 = ("0" + _0x3d99b8.getDate()).slice(-2),
    _0x2b3ec4 = ("0" + _0x3d99b8.getHours()).slice(-2),
    _0xf78b46 = ("0" + _0x3d99b8.getMinutes()).slice(-2),
    _0x1be442 = ("0" + _0x3d99b8.getSeconds()).slice(-2);
  return _0x528581 + "/" + _0x2be057 + "/" + _0x33fa48 + " " + _0x2b3ec4 + ":" + _0xf78b46 + ":" + _0x1be442;
}
function bdy_0x401722(_0xd83cdd) {
  const _0x1f73f3 = {
    "Content-Type": "application/json"
  };
  let _0x5af07a = {
      url: "https://zjd-hst-vyyhcqhprg.cn-hangzhou.fcapp.run/api",
      body: JSON.stringify(_0xd83cdd),
      headers: _0x1f73f3,
      timeout: 10000
    },
    _0x13e63f = "";
  return new Promise(_0x1c6cbc => {
    $.post(_0x5af07a, (_0x120a8c, _0x56a0b3, _0x1175a9) => {
      try {
        if (_0x120a8c) {
          console.log("连接失败，重试一次");
        } else {
          _0x1175a9 = JSON.parse(_0x1175a9);
          if (_0x1175a9.code == 200) {
            _0x13e63f = _0x1175a9.data;
          } else {
            $.log(_0x1175a9.msg + "重试一次");
          }
        }
      } catch (_0x3320d9) {
        console.log(_0x3320d9, _0x56a0b3);
      } finally {
        _0x1c6cbc(_0x13e63f);
      }
    });
  });
}
function bdy_0x492077(_0x5175df = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", _0x404c70 = 0) {
  return _0x5175df.replace(/[xy]/g, function (_0x2085ec) {
    var _0x1d7c8e = Math.random() * 16 | 0,
      _0x422049 = _0x2085ec == "x" ? _0x1d7c8e : _0x1d7c8e & 3 | 8;
    _0x404c70 ? uuid = _0x422049.toString(36).toUpperCase() : uuid = _0x422049.toString(36);
    return uuid;
  });
}
function bdy_0x56d12b(_0x1160ac) {
  if (typeof _0x1160ac == "string") {
    try {
      return JSON.parse(_0x1160ac);
    } catch (_0x5cbcd3) {
      console.log(_0x5cbcd3);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }