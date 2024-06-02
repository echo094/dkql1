/*
东东健康社区
33 0,6,22 * * * jd_health.js
 */
const $ = new Env("东东健康社区");
const bdy_0x515f57 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x1ada7d = $.isNode() ? require("./sendNotify") : "";
let bdy_0x159b1c = [],
  bdy_0x41700b = "",
  bdy_0x14ee03 = "",
  bdy_0x223dc8;
const bdy_0x54aaa3 = [""];
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
let bdy_0x5c79ce = $.isNode() ? process.env.JD_HEALTH_REWARD_NAME ? process.env.JD_HEALTH_REWARD_NAME : "" : $.getdata("JD_HEALTH_REWARD_NAME") ? $.getdata("JD_HEALTH_REWARD_NAME") : "";
function bdy_0x4fda62(_0x4238ea, _0x135910) {
  try {
    return _0x4238ea();
  } catch (_0x5952ee) {
    return undefined;
  }
}
function bdy_0x553546(_0x47cfee, _0x44b63d) {
  return _0x47cfee != undefined ? _0x47cfee : _0x44b63d;
}
if ($.isNode()) {
  Object.keys(bdy_0x515f57).forEach(_0x522d10 => {
    bdy_0x159b1c.push(bdy_0x515f57[_0x522d10]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x159b1c = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...$.toObj($.getdata("CookiesJD") || "[]").map(_0x3b484e => _0x3b484e.cookie)].filter(_0x388c49 => !!_0x388c49);
}
const bdy_0xfa08f8 = "https://api.m.jd.com/";
!(async () => {
  if (!bdy_0x159b1c[0]) {
    const _0x3f530a = {
      "open-url": "https://bean.m.jd.com/"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/", _0x3f530a);
    return;
  }
  await bdy_0x3ab857();
  for (let _0xdba3a3 = 0; _0xdba3a3 < bdy_0x159b1c.length; _0xdba3a3++) {
    if (bdy_0x159b1c[_0xdba3a3]) {
      bdy_0x41700b = bdy_0x159b1c[_0xdba3a3];
      $.UserName = decodeURIComponent(bdy_0x41700b.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x41700b.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0xdba3a3 + 1;
      bdy_0x223dc8 = "";
      console.log("\n******开始【京东账号" + $.index + "】" + $.UserName + "*********\n");
      bdy_0x161909();
      await bdy_0x1d68bc();
      await bdy_0xb11c43();
      await bdy_0x12209c();
    }
  }
  $.isNode() && bdy_0x14ee03 && (await bdy_0x1ada7d.sendNotify("" + $.name, "" + bdy_0x14ee03));
})().catch(_0xfcfa18 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0xfcfa18 + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0xb11c43() {
  try {
    bdy_0x5c79ce && (await bdy_0x3f2166());
    $.score = 0;
    $.earn = false;
    await bdy_0x3b7ac5(-1);
    await bdy_0x3b7ac5(16);
    await bdy_0x3b7ac5(6);
    for (let _0x433c01 = 0; _0x433c01 < 5; ++_0x433c01) {
      $.canDo = false;
      await bdy_0x3b7ac5();
      if (!$.canDo) {
        break;
      }
      await $.wait(1000);
    }
    await bdy_0x91d1c0();
    await bdy_0x3b2195();
    await bdy_0x3b7ac5(-1);
  } catch (_0x359a48) {
    $.logErr(_0x359a48);
  }
}
async function bdy_0x3b2195() {
  for (let _0x21207f of $.newShareCodes) {
    if (!_0x21207f) {
      continue;
    }
    console.log("去助力好友" + _0x21207f);
    let _0x3fe859 = await bdy_0x4854ba(_0x21207f, 6);
    if ([108, -1001].includes(_0x3fe859?.["data"]?.["bizCode"])) {
      console.log("助力次数已满，跳出");
      break;
    }
    await $.wait(1000);
  }
}
function bdy_0x12209c() {
  return new Promise(async _0x1e725c => {
    bdy_0x223dc8 += "本次获得" + $.earn + "健康值，累计" + $.score + "健康值\n";
    $.msg($.name, "", "京东账号" + $.index + " " + $.UserName + "\n" + bdy_0x223dc8);
    _0x1e725c();
  });
}
function bdy_0x3b7ac5(_0x4b9383 = "") {
  return new Promise(_0x344717 => {
    const _0x402086 = {
      buildingId: "",
      taskId: _0x4b9383 === -1 ? "" : _0x4b9383,
      channelId: 1
    };
    $.dpost(bdy_0x776c59("jdhealth_getTaskDetail", _0x402086), async (_0x19fa3c, _0x10bd5e, _0x3e9487) => {
      try {
        if (_0x19fa3c) {
          console.log(_0x19fa3c);
        } else {
          _0x3e9487 = $.toObj(_0x3e9487);
          if (_0x4b9383 === -1) {
            let _0xd1f64b = parseInt(parseFloat(bdy_0x553546(bdy_0x4fda62(() => _0x3e9487.data.result.userScore), "0")));
            !$.earn ? ($.score = _0xd1f64b, $.earn = 1) : ($.earn = _0xd1f64b - $.score, $.score = _0xd1f64b);
          } else {
            if (_0x4b9383 === 6) {
              bdy_0x4fda62(() => _0x3e9487.data.result.taskVos) && console.log("\n【账号（" + $.UserName + "）的" + $.name + "好友互助码】" + bdy_0x4fda62(() => _0x3e9487.data.result.taskVos[0].assistTaskDetailVo.taskToken) + "\n");
            } else {
              if (_0x4b9383 === 22) {
                console.log(bdy_0x4fda62(() => _0x3e9487.data.result.taskVos[0].taskName) + "任务，完成次数：" + bdy_0x4fda62(() => _0x3e9487.data.result.taskVos[0].times) + "/" + bdy_0x4fda62(() => _0x3e9487.data.result.taskVos[0].maxTimes));
                if (bdy_0x4fda62(() => _0x3e9487.data.result.taskVos[0].times) === bdy_0x4fda62(() => _0x3e9487.data.result.taskVos[0].maxTimes)) {
                  return;
                }
                await bdy_0x4854ba(bdy_0x4fda62(() => _0x3e9487.data.result.taskVos[0].shoppingActivityVos[0].taskToken), 22, 1);
                await $.wait(1000 * (bdy_0x4fda62(() => _0x3e9487.data.result.taskVos[0].waitDuration) || 3));
                await bdy_0x4854ba(bdy_0x4fda62(() => _0x3e9487.data.result.taskVos[0].shoppingActivityVos[0].taskToken), 22, 0);
              } else {
                for (let _0x33eb3a of bdy_0x553546(bdy_0x4fda62(() => _0x3e9487.data.result.taskVos.filter(_0x2d1bd2 => ![19, 25, 15, 21].includes(_0x2d1bd2.taskType))), [])) {
                  console.log(_0x33eb3a.taskName + "任务，完成次数：" + _0x33eb3a.times + "/" + _0x33eb3a.maxTimes);
                  let _0x365f2d = _0x33eb3a.waitDuration || 0,
                    _0x32dcce = _0x33eb3a.maxTimes - _0x33eb3a.times;
                  for (let _0xf3db2d = 0; _0xf3db2d < _0x32dcce; _0xf3db2d++) {
                    if (_0x33eb3a.taskType === 13) {
                      await bdy_0x4854ba(bdy_0x4fda62(() => _0x33eb3a.simpleRecordInfoVo.taskToken), bdy_0x4fda62(() => _0x33eb3a.taskId));
                    } else {
                      if (_0x33eb3a.taskType === 8) {
                        if (_0x33eb3a.productInfoVos[_0xf3db2d].status == 2) {
                          continue;
                        }
                        await bdy_0x4854ba(bdy_0x4fda62(() => _0x33eb3a.productInfoVos[_0xf3db2d].taskToken), bdy_0x4fda62(() => _0x33eb3a.taskId), 1);
                        await $.wait(10000);
                        await bdy_0x4854ba(bdy_0x4fda62(() => _0x33eb3a.productInfoVos[_0xf3db2d].taskToken), bdy_0x4fda62(() => _0x33eb3a.taskId), 0);
                      } else {
                        if (_0x33eb3a.taskType === 9) {
                          if (_0x33eb3a.shoppingActivityVos[_0xf3db2d].status == 2) {
                            continue;
                          }
                          console.log(_0x33eb3a.shoppingActivityVos[_0xf3db2d].title);
                          await bdy_0x4854ba(bdy_0x4fda62(() => _0x33eb3a.shoppingActivityVos[_0xf3db2d].taskToken), bdy_0x4fda62(() => _0x33eb3a.taskId), 1);
                          await $.wait(_0x365f2d * 1000);
                          await bdy_0x4854ba(bdy_0x4fda62(() => _0x33eb3a.shoppingActivityVos[_0xf3db2d].taskToken), bdy_0x4fda62(() => _0x33eb3a.taskId), 0);
                        } else {
                          if (_0x33eb3a.taskType === 10) {
                            if (_0x33eb3a.threeMealInfoVos[_0xf3db2d].status == 2) {
                              continue;
                            }
                            await bdy_0x4854ba(bdy_0x4fda62(() => _0x33eb3a.threeMealInfoVos[_0xf3db2d].taskToken), bdy_0x4fda62(() => _0x33eb3a.taskId));
                          } else {
                            if (_0x33eb3a.taskType === 26 || _0x33eb3a.taskType === 3) {
                              await bdy_0x4854ba(bdy_0x4fda62(() => _0x33eb3a.shoppingActivityVos[_0xf3db2d].taskToken), bdy_0x4fda62(() => _0x33eb3a.taskId));
                            } else {
                              if (_0x33eb3a.taskType === 1) {
                                for (let _0x29142e of Object.keys(_0x33eb3a.followShopVo)) {
                                  let _0x36585c = _0x33eb3a.followShopVo[_0x29142e];
                                  if (_0x36585c.status !== 2) {
                                    await bdy_0x4854ba(_0x36585c.taskToken, _0x33eb3a.taskId, 0);
                                    break;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    await $.wait(1000);
                  }
                }
              }
            }
          }
        }
      } catch (_0x341f8e) {
        console.log(_0x341f8e);
      } finally {
        _0x344717();
      }
    });
  });
}
function bdy_0x4e550e(_0x306245, _0x344efd) {
  return new Promise(_0x5adff7 => {
    const _0xf6780c = {
      taskId: 1
    };
    const _0x4fdf47 = bdy_0x776c59("jdhealth_doLottery", _0xf6780c);
    $.post(_0x4fdf47, (_0xe696b9, _0x2023b4, _0xafc344) => {
      try {
        _0xe696b9 ? console.log(_0xe696b9) : (_0xafc344 = $.toObj(_0xafc344), _0xafc344.data.bizCode === 0 || _0xafc344.data.bizMsg === "success" ? console.log("领取" + _0xafc344.data.result.jingBeanNum + "京豆成功") : console.log(_0xafc344.data.bizMsg));
      } catch (_0x3b20f3) {
        console.log(_0x3b20f3);
      } finally {
        _0x5adff7(_0xafc344);
      }
    });
  });
}
async function bdy_0x3f2166() {
  return new Promise(async _0x202096 => {
    const _0x11b53f = bdy_0x776c59("jdhealth_getCommodities");
    $.post(_0x11b53f, async (_0x1d5ec9, _0x4dfe2e, _0x4ca9cd) => {
      try {
        if (_0x1d5ec9) {
          console.log(_0x1d5ec9);
        } else {
          _0x4ca9cd = $.toObj(_0x4ca9cd);
          let _0x48d37d = _0x4ca9cd.data.result.jBeans.filter(_0x225afb => _0x225afb.status !== 0 && _0x225afb.status !== 1);
          if (_0x48d37d.length !== 0) {
            for (let _0x3119f4 of Object.keys(_0x48d37d)) {
              let _0x57580d = _0x48d37d[_0x3119f4];
              _0x57580d.title === bdy_0x5c79ce && $.score >= _0x57580d.exchangePoints && (await $.wait(1000), await bdy_0x5413d0(_0x57580d.type, _0x57580d.id));
            }
          } else {
            console.log("兑换京豆次数已达上限");
          }
        }
      } catch (_0x2af094) {
        console.log(_0x2af094);
      } finally {
        _0x202096(_0x4ca9cd);
      }
    });
  });
}
function bdy_0x5413d0(_0x7a90e3, _0x10171f) {
  return new Promise(_0x157116 => {
    const _0x446907 = {
      commodityType: _0x7a90e3,
      commodityId: _0x10171f
    };
    const _0x6f4a8d = bdy_0x776c59("jdhealth_exchange", _0x446907);
    $.post(_0x6f4a8d, (_0xcbc8be, _0x42f87b, _0x314977) => {
      try {
        _0xcbc8be ? console.log(_0xcbc8be) : (_0x314977 = $.toObj(_0x314977), _0x314977.data.bizCode === 0 || _0x314977.data.bizMsg === "success" ? ($.score = _0x314977.data.result.userScore, console.log("兑换" + _0x314977.data.result.jingBeanNum + "京豆成功"), bdy_0x223dc8 += "兑换" + _0x314977.data.result.jingBeanNum + "京豆成功\n", $.isNode() && (bdy_0x14ee03 += "【京东账号" + $.index + "】 " + $.UserName + "\n兑换" + _0x314977.data.result.jingBeanNum + "京豆成功🎉" + ($.index !== bdy_0x159b1c.length ? "\n\n" : ""))) : console.log(_0x314977.data.bizMsg));
      } catch (_0x3815ad) {
        console.log(_0x3815ad);
      } finally {
        _0x157116(_0x314977);
      }
    });
  });
}
function bdy_0x4854ba(_0x368e98, _0x3a4f47, _0x5413df = 0) {
  return new Promise(_0x56ac4a => {
    const _0x485ef0 = {
      taskToken: _0x368e98,
      taskId: _0x3a4f47,
      actionType: _0x5413df
    };
    const _0x41c1c1 = bdy_0x776c59("jdhealth_collectScore", _0x485ef0);
    $.dget(_0x41c1c1, (_0x125506, _0x22aadc, _0x1e07ce) => {
      try {
        if (_0x125506) {
          console.log(_0x125506);
        } else {
          _0x1e07ce = $.toObj(_0x1e07ce);
          if ([0, 1].includes(bdy_0x553546(bdy_0x4fda62(() => _0x1e07ce.data.bizCode), -1))) {
            $.canDo = true;
            if (bdy_0x4fda62(() => _0x1e07ce.data.result.score)) {
              console.log("任务完成，获得：" + bdy_0x553546(bdy_0x4fda62(() => _0x1e07ce.data.result.score), "未知") + "健康能量");
            } else {
              console.log("任务领取：" + bdy_0x553546(bdy_0x4fda62(() => _0x1e07ce.data.bizMsg), JSON.stringify(_0x1e07ce)));
            }
          } else {
            console.log("任务失败：" + bdy_0x553546(bdy_0x4fda62(() => _0x1e07ce.data.bizMsg), JSON.stringify(_0x1e07ce)));
          }
        }
      } catch (_0x4aaeed) {
        console.log(_0x4aaeed);
      } finally {
        _0x56ac4a(_0x1e07ce);
      }
    });
  });
}
function bdy_0x91d1c0() {
  return new Promise(_0x56e216 => {
    $.dget(bdy_0x776c59("jdhealth_collectProduceScore", {}), (_0x52939d, _0x483e1d, _0x1fa47a) => {
      try {
        if (_0x52939d) {
          console.log(_0x52939d);
        } else {
          _0x1fa47a = $.toObj(_0x1fa47a);
          if (bdy_0x4fda62(() => _0x1fa47a.data.bizCode) === 0) {
            if (bdy_0x4fda62(() => _0x1fa47a.data.result.produceScore)) {
              console.log("任务完成成功，获得：" + bdy_0x553546(bdy_0x4fda62(() => _0x1fa47a.data.result.produceScore), "未知") + "能量");
            } else {
              console.log("任务领取结果：" + bdy_0x553546(bdy_0x4fda62(() => _0x1fa47a.data.bizMsg), JSON.stringify(_0x1fa47a)));
            }
          } else {
            console.log("任务完成失败：" + bdy_0x553546(bdy_0x4fda62(() => _0x1fa47a.data.bizMsg), JSON.stringify(_0x1fa47a)));
          }
        }
      } catch (_0x270771) {
        console.log(_0x270771);
      } finally {
        _0x56e216();
      }
    });
  });
}
function bdy_0x776c59(_0x5405be, _0xa33640 = {}) {
  const _0x549780 = {
    Host: "api.m.jd.com",
    Cookie: bdy_0x41700b,
    origin: "https://h5.m.jd.com",
    referer: "https://h5.m.jd.com/",
    "accept-language": "zh-cn",
    "accept-encoding": "gzip, deflate, br",
    accept: "application/json, text/plain, */*",
    "Content-Type": "application/x-www-form-urlencoded",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "User-Agent": $.UA,
    "x-requested-with": "com.jingdong.app.mall"
  };
  return {
    url: bdy_0xfa08f8 + "?functionId=" + _0x5405be + "&body=" + JSON.stringify(_0xa33640) + "&client=wh5&clientVersion=1.0.0&uuid=",
    headers: _0x549780,
    ciphers: "TLS_AES_256_GCM_SHA384"
  };
}
function bdy_0x3d6621(_0x5aeba0) {
  try {
    if (typeof JSON.parse(_0x5aeba0) == "object") {
      return true;
    }
  } catch (_0x42cc82) {
    console.log(_0x42cc82);
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function bdy_0x795e94() {
  console.log("开始");
  return new Promise(async _0x16744e => {
    const _0x1268c3 = {
      url: "https://cdn.jsdelivr.net/gh/6dylan6/updateTeam@main/shareCodes/health.json",
      timeout: 10000
    };
    $.get(_0x1268c3, (_0x252b77, _0x304190, _0x155fac) => {
      try {
        _0x252b77 ? (console.log(JSON.stringify(_0x252b77)), console.log($.name + " health/read API请求失败，请检查网路重试")) : _0x155fac && (_0x155fac = JSON.parse(_0x155fac));
      } catch (_0x688ccd) {
        $.logErr(_0x688ccd, _0x304190);
      } finally {
        _0x16744e(_0x155fac);
      }
    });
    await $.wait(10000);
    _0x16744e();
  });
}
function bdy_0x1d68bc() {
  return new Promise(async _0x3c4daf => {
    $.newShareCodes = [];
    if ($.shareCodesArr[$.index - 1]) {
      $.newShareCodes = $.shareCodesArr[$.index - 1].split("@");
    } else {
      const _0x5d1bcc = $.index > bdy_0x54aaa3.length ? bdy_0x54aaa3.length - 1 : $.index - 1;
      $.newShareCodes = bdy_0x54aaa3[_0x5d1bcc].split("@");
    }
    console.log("第" + $.index + "个京东账号将要助力的好友" + JSON.stringify($.newShareCodes));
    _0x3c4daf();
  });
}
function bdy_0x3ab857() {
  return new Promise(_0x136807 => {
    console.log("开始获取" + $.name + "配置文件\n");
    let _0x27868b = [];
    if ($.isNode()) {
      if (process.env.JDHEALTH_SHARECODES) {
        process.env.JDHEALTH_SHARECODES.indexOf("\n") > -1 ? _0x27868b = process.env.JDHEALTH_SHARECODES.split("\n") : _0x27868b = process.env.JDHEALTH_SHARECODES.split("&");
      }
    }
    $.shareCodesArr = [];
    $.isNode() && Object.keys(_0x27868b).forEach(_0x49cb62 => {
      _0x27868b[_0x49cb62] && $.shareCodesArr.push(_0x27868b[_0x49cb62]);
    });
    console.log("您提供了" + $.shareCodesArr.length + "个账号的" + $.name + "助力码\n");
    _0x136807();
  });
}
async function bdy_0x161909() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0x32f58e(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0x32f58e(_0x214275) {
  _0x214275 = _0x214275 || 32;
  let _0x3ed372 = "abcdef0123456789",
    _0x21a920 = _0x3ed372.length,
    _0x16823d = "";
  for (i = 0; i < _0x214275; i++) {
    _0x16823d += _0x3ed372.charAt(Math.floor(Math.random() * _0x21a920));
  }
  return _0x16823d;
}
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}