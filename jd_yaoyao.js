/*
30 19 * * * jd_yaoyao.js
*/

const $ = new Env('玩一玩的摇一摇');
const bdy_0x5bcd2f = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x376b1a = $.isNode() ? require("./sendNotify") : "",
  bdy_0x5dee0f = require("./function/dylans"),
  bdy_0x446e2e = process.env.WYW_DBNUM ? process.env.WYW_DBNUM : "10";
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
let bdy_0x18d722 = [],
  bdy_0x14016e = "",
  bdy_0x29f588 = 0;
if ($.isNode()) {
  Object.keys(bdy_0x5bcd2f).forEach(_0x3a4332 => {
    bdy_0x18d722.push(bdy_0x5bcd2f[_0x3a4332]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x18d722 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x29ecfb => _0x29ecfb.cookie)].filter(_0x35b681 => !!_0x35b681);
}
$.helpId = [];
$.fullId = [];
!(async () => {
  if (!bdy_0x18d722[0]) {
    const _0x2d859e = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x2d859e);
    return;
  }
  console.log("当前版本：20240601");
  console.log("问题建议：https://t.me/dylan_jdpro");
  console.log("只做摇一摇，提现用提现本，根据剩余时间设置定时");
  for (let _0x1ddd25 = 0; _0x1ddd25 < bdy_0x18d722.length; _0x1ddd25++) {
    bdy_0x14016e = bdy_0x18d722[_0x1ddd25];
    originCookie = bdy_0x18d722[_0x1ddd25];
    if (bdy_0x14016e) {
      $.UserName = decodeURIComponent(bdy_0x14016e.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x14016e.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x1ddd25 + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      $.isban = false;
      $.hasRisk = false;
      $.nostart = false;
      $.cashList = [];
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      bdy_0x12213e();
      await bdy_0x32be88();
      if (!$.isLogin) {
        const _0x2b4253 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x2b4253);
        $.isNode() && (await bdy_0x376b1a.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      await bdy_0x561004();
      if ($.outFlag || $.nostart) {
        break;
      }
    }
  }
})().catch(_0x2f865f => {
  return $.logErr(_0x2f865f);
}).finally(() => {
  return $.done();
});
async function bdy_0x2c1c8d() {
  for (let _0x35553a = 0; _0x35553a < bdy_0x18d722.length; _0x35553a++) {
    bdy_0x14016e = bdy_0x18d722[_0x35553a];
    if (bdy_0x14016e) {
      $.UserName = decodeURIComponent(bdy_0x14016e.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x14016e.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x35553a + 1;
      console.log("\n-------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
      bdy_0x12213e();
      $.nonum = false;
      $.fullId.length != 0 && ($.helpId = $.helpId.filter(_0x1c247d => !$.fullId.includes(_0x1c247d)), $.fullId = []);
      for (let _0x5bc555 of $.helpId) {
        $.itemId = _0x5bc555;
        console.log("去助力 --> " + $.itemId);
        await bdy_0x1fbe61("wanyiwan_assist");
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
async function bdy_0x561004() {
  try {
    await bdy_0x1fbe61("superRedBagHome");
    if ($.sceneStatus == 2) {
      console.log("\n去摇一摇...");
      for (let _0x5b2fef of Array(15)) {
        await bdy_0x1fbe61("superRedBagDraw");
        await $.wait(parseInt(Math.random() * 500 + 1100, 10));
      }
    } else {
      console.log("\n" + $.time("yyyy/MM/dd HH:mm:ss", Date.now() + $.nextLeftTime * 1000) + " 活动才开启，请确保定时在这时间后执行");
      $.nostart = true;
    }
    await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
  } catch (_0x43c63c) {
    console.log(_0x43c63c);
  }
}
async function bdy_0x1fbe61(_0x5ba052, ..._0x1741e6) {
  if ($.outFlag || $.isban) {
    return;
  }
  let _0x4b593c = "",
    _0x52ed61,
    _0x3a64d2,
    _0x48a1df = "post",
    _0x2f1e68 = "https://api.m.jd.com/client.action",
    _0x196614 = "signed_wh5";
  switch (_0x5ba052) {
    case "wanyiwan_sign":
      const _0x3c1c98 = {
        version: 1
      };
      _0x4b593c = _0x3c1c98;
      _0x52ed61 = "d12dd";
      _0x3a64d2 = "wanyiwan_sign";
      break;
    case "wanyiwan_home":
      const _0x11d238 = {
        outsite: 0,
        firstCall: 1,
        version: 1,
        lbsSwitch: true
      };
      _0x4b593c = _0x11d238;
      _0x52ed61 = "c81ad";
      _0x3a64d2 = "wanyiwan_home";
      break;
    case "apTaskList":
      _0x2f1e68 = "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22%3A%22Fl1LmxG_f0poD7w1ycZqnw%22%7D&t=1715170975269&appid=activities_platform&client=android&clientVersion=6.24.0&loginType=2&loginWQBiz=wegame&h5st=null&build=22779&screen=393*873&networkType=wifi&eufv=1&cthr=1";
      _0x48a1df = "get";
      break;
    case "startTask":
      const _0x28561a = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 1,
        version: 1
      };
      _0x4b593c = _0x28561a;
      _0x52ed61 = "89db2";
      _0x3a64d2 = "wanyiwan_do_task";
      break;
    case "endTask":
      const _0x3043ca = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 0,
        version: 1
      };
      _0x4b593c = _0x3043ca;
      _0x52ed61 = "89db2";
      _0x3a64d2 = "wanyiwan_do_task";
      break;
    case "award":
      const _0x5abbb3 = {
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        version: 1
      };
      _0x4b593c = _0x5abbb3;
      _0x3a64d2 = "wanyiwan_task_receive_award";
      break;
    case "wanyiwan_assist":
      const _0x500b34 = {
        inviteCode: $.itemId,
        version: 1
      };
      _0x4b593c = _0x500b34;
      _0x52ed61 = "ba505";
      _0x3a64d2 = "wanyiwan_assist";
      break;
    case "turnHappyHome":
      _0x2f1e68 = "https://api.m.jd.com/api";
      const _0x3a9cf1 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x4b593c = _0x3a9cf1;
      _0x196614 = "activities_platform";
      _0x3a64d2 = "turnHappyHome";
      break;
    case "turnHappyDouble":
      _0x2f1e68 = "https://api.m.jd.com/api";
      _0x4b593c = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ",
        turnNum: parseInt(bdy_0x446e2e)
      };
      _0x52ed61 = "614f1";
      _0x196614 = "activities_platform";
      _0x3a64d2 = "turnHappyDouble";
      break;
    case "turnHappyReceive":
      _0x2f1e68 = "https://api.m.jd.com/api";
      const _0x5be695 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x4b593c = _0x5be695;
      _0x52ed61 = "25fac";
      _0x196614 = "activities_platform";
      _0x3a64d2 = "turnHappyReceive";
      break;
    case "superRedBagHome":
      _0x2f1e68 = "https://api.m.jd.com/api";
      const _0x2309d9 = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x4b593c = _0x2309d9;
      _0x52ed61 = "5be1b";
      _0x196614 = "activity_platform_se";
      _0x3a64d2 = "superRedBagHome";
      break;
    case "superRedBagDraw":
      _0x2f1e68 = "https://api.m.jd.com/api";
      const _0x4f8708 = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x4b593c = _0x4f8708;
      _0x52ed61 = "89cfe";
      _0x196614 = "activity_platform_se";
      _0x3a64d2 = "superRedBagDraw";
      break;
    case "apCashWithDraw":
      _0x2f1e68 = "https://api.m.jd.com/api";
      const _0x3ac2a9 = {
        id: _0x1741e6[0].id,
        business: "superRedEnvelope",
        poolBaseId: _0x1741e6[0].poolBaseId,
        prizeGroupId: _0x1741e6[0].prizeGroupId,
        prizeBaseId: _0x1741e6[0].prizeBaseId,
        prizeType: 4,
        activityId: "2013"
      };
      const _0x4e32af = {
        businessSource: "NONE",
        base: _0x3ac2a9,
        linkId: "aE-1vg6_no2csxgXFuv3Kg",
        channel: "1"
      };
      _0x4b593c = _0x4e32af;
      _0x52ed61 = "73bca";
      _0x196614 = "activities_platform";
      _0x3a64d2 = "apCashWithDraw";
      break;
    case "superRedBagList":
      _0x2f1e68 = "http://api.m.jd.com/api";
      const _0x29a914 = {
        pageNum: _0x1741e6[0],
        pageSize: 100,
        linkId: "aE-1vg6_no2csxgXFuv3Kg",
        associateLinkId: "",
        business: "superRedEnvelope"
      };
      _0x4b593c = _0x29a914;
      _0x52ed61 = "f2b1d";
      _0x196614 = "activities_platform";
      _0x3a64d2 = "superRedBagList";
      break;
    default:
      console.log("错误" + _0x5ba052);
  }
  if (_0x52ed61) {
    let _0xf0532b = {
      appId: _0x52ed61,
      functionId: _0x3a64d2,
      body: _0x4b593c,
      appid: _0x196614,
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      t: Date.now(),
      ua: $.UA
    };
    _0x4b593c = await bdy_0x5dee0f.getbody(_0xf0532b);
    if (!_0x4b593c) {
      return;
    }
  } else {
    _0x4b593c && (_0x4b593c = "functionId=" + _0x3a64d2 + "&body=" + encodeURIComponent(JSON.stringify(_0x4b593c)) + "&t=" + Date.now() + "&appid=" + _0x196614 + "&client=ios&" + $.UA.split(";")[2] + "&cthr=1&networkType=wifi");
  }
  let _0x4354f7 = bdy_0x4b36b1(_0x2f1e68, _0x4b593c);
  return new Promise(async _0x77d0a0 => {
    $["d" + _0x48a1df](_0x4354f7, async (_0x49d720, _0x173d40, _0x577485) => {
      try {
        if (_0x49d720) {
          if (_0x173d40 && typeof _0x173d40.statusCode != "undefined") {
            if (_0x173d40.statusCode == 493) {
              if (bdy_0x29f588 < 6) {
                bdy_0x29f588++;
                await bdy_0x1fbe61(_0x5ba052);
                return;
              }
              console.log("ip可能被限制，过10分钟后再执行脚本\n");
              $.outFlag = true;
            }
          }
          console.log("" + $.toStr(_0x49d720, _0x49d720));
        } else {
          if (_0x577485.includes("doctype") && bdy_0x29f588 < 6) {
            bdy_0x29f588++;
            await bdy_0x1fbe61(_0x5ba052);
            return;
          }
          bdy_0x29f588 = 0;
          bdy_0x28f8af(_0x5ba052, _0x577485);
        }
      } catch (_0x99774c) {
        console.log(_0x99774c, _0x173d40);
      } finally {
        _0x77d0a0();
      }
    });
  });
}
function bdy_0x5777d9(_0x5bde8e) {
  let _0x32ecb2 = "";
  switch (type) {
    case [_0x32ecb2]:
      const _0x3fa255 = {
        ed: ed
      };
      _0xf1f6le = _0x3fa255;
      break;
    case [_0x32ecb2]:
      const _0x151c2f = {
        bd: bd
      };
      _0xf1f6lc = _0x151c2f;
      break;
    case [_0x32ecb2]:
      const _0x5b1fa7 = {
        ed: ed
      };
      _0xf1f6lf = _0x5b1fa7;
      break;
    case [_0x32ecb2]:
      const _0x26fe19 = {
        ed: ed
      };
      _0xf1f6lg = _0x26fe19;
      break;
    case [_0x32ecb2]:
      const _0xac816b = {
        ed: ed
      };
      _0xf1f6lv = _0xac816b;
      break;
  }
}
async function bdy_0x28f8af(_0x393108, _0x229aa5) {
  let _0x463de8 = "";
  try {
    _0x463de8 = JSON.parse(_0x229aa5);
  } catch (_0x3b62ca) {
    console.log(_0x393108 + " 执行任务异常");
  }
  try {
    switch (_0x393108) {
      case "award":
        _0x463de8.code == 0 ? _0x463de8.data.bizCode == 0 ? console.log("任务完成，获得" + _0x463de8.data.result.rewardCount + "奖票 🎫") : console.log(_0x463de8.data.bizMsg) : console.log(_0x463de8.message);
        break;
      case "wanyiwan_sign":
        _0x463de8.code == 0 ? _0x463de8.data.bizCode == 0 ? console.log("签到成功,获得" + _0x463de8.data.result.getScore + "奖票 🎫") : console.log(_0x463de8.data.bizMsg) : console.log(_0x463de8.message);
        break;
      case "wanyiwan_assist":
        if (_0x463de8.code == 0) {
          if (_0x463de8.data.bizCode == 0) {
            console.log("✔️ 助力成功");
            $.nonum = true;
          } else {
            if (_0x463de8.data.bizMsg.includes("太多人") || _0x463de8.data.bizMsg.includes("重复")) {
              console.log("❌", _0x463de8.data.bizMsg);
              $.nonum = true;
            } else {
              _0x463de8.data.bizMsg.includes("已经完成") ? (console.log("❌", _0x463de8.data.bizMsg), $.fullId.push($.itemId)) : console.log("❌", _0x463de8.data.bizMsg);
            }
          }
        } else {
          console.log(_0x463de8.message);
        }
        break;
      case "wanyiwan_home":
        _0x463de8.code == 0 ? _0x463de8.data.bizCode == 0 ? (_0x463de8.data.result.popWindows.length != 0 && console.log("获得新手奖励：", _0x463de8.data.result.popWindows[0].getScore, "奖票 🎫"), console.log("当前奖票总量：" + _0x463de8.data.result.score + " 🎫"), $.isLogin = _0x463de8.data?.["result"]?.["isLogin"], $.taskList = _0x463de8.data?.["result"]?.["taskBoard"] || [], $.signstatus = _0x463de8.data?.["result"]?.["signBoard"]?.["status"] || 0) : console.log(_0x463de8.data.bizMsg) : console.log(_0x463de8.message);
        break;
      case "superRedBagList":
        if (_0x463de8.success) {
          $.bagList = _0x463de8.data.items || [];
        } else {
          console.log(_0x463de8.errMsg);
        }
        break;
      case "apCashWithDraw":
        if (_0x463de8.code == 0) {
          if (_0x463de8.data.message.indexOf("待发放") > -1) {
            console.log(_0x463de8.data.message);
          } else {
            if (_0x463de8.data.message.includes("上限")) {
              console.log(_0x463de8.data.message);
            } else {
              _0x463de8.data.message.includes("提现中") ? console.log("提现成功") : console.log(_0x463de8.data.message);
            }
          }
        } else {
          console.log(_0x463de8.errMsg);
        }
        break;
      case "superRedBagHome":
        _0x463de8.success ? ($.sceneStatus = _0x463de8.data.sceneStatus, $.nextLeftTime = _0x463de8.data.nextLeftTime) : console.log(_0x463de8.errMsg);
        break;
      case "superRedBagDraw":
        if (_0x463de8.success) {
          $.shakeLeftTime = _0x463de8.data.shakeLeftTime;
          const {
            prizeDrawVo = ""
          } = _0x463de8.data;
          if (prizeDrawVo) {
            switch (prizeDrawVo.prizeType) {
              case 24:
                console.log("获得：" + prizeDrawVo.amount + "票奖 🎫");
                $.sucdraw++;
                break;
              case 1:
                console.log("获得:" + prizeDrawVo.prizeConfigName);
                break;
              case 4:
                console.log("获得:" + prizeDrawVo.amount + "现金💰️");
                const _0x308afc = {
                  id: prizeDrawVo.id,
                  poolBaseId: 41486,
                  prizeGroupId: prizeDrawVo.prizeGroupId,
                  prizeBaseId: prizeDrawVo.prizeBaseId,
                  prizeType: prizeDrawVo.prizeType,
                  amount: prizeDrawVo.amount
                };
                $.cashList.push(_0x308afc);
                break;
              case 3:
                console.log("获得:" + prizeDrawVo.amount + "京豆🥔");
                break;
              case 2:
                console.log("获得:" + prizeDrawVo.amount + "红包🧧");
                break;
              default:
                console.log(JSON.stringify(prizeDrawVo));
                break;
            }
          } else {
            console.log(_0x229aa5);
          }
        } else {
          console.log(_0x463de8.errMsg);
        }
        break;
      case "startTask":
      case "turnHappyReceive":
      case "endTask":
        break;
      default:
        console.log(_0x393108 + " -> " + _0x229aa5);
    }
    typeof _0x463de8 == "object" && _0x463de8.errorMessage && _0x463de8.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0x31c925) {
    console.log(_0x393108 + " " + _0x31c925);
  }
}
function bdy_0x4b36b1(_0x38382b, _0x198476) {
  const _0x4cba29 = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    Cookie: bdy_0x14016e,
    "User-Agent": $.UA
  };
  const _0x2c4f57 = {
    url: _0x38382b,
    headers: _0x4cba29,
    timeout: 30000,
    ...(_0x198476 ? {
      body: _0x198476
    } : {})
  };
  return _0x2c4f57;
}
async function bdy_0x12213e() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0x8ffee6(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0x8ffee6(_0x46106e) {
  _0x46106e = _0x46106e || 32;
  let _0x1e120c = "abcdef0123456789",
    _0x4fb8ab = _0x1e120c.length,
    _0x1250d1 = "";
  for (i = 0; i < _0x46106e; i++) {
    _0x1250d1 += _0x1e120c.charAt(Math.floor(Math.random() * _0x4fb8ab));
  }
  return _0x1250d1;
}
function bdy_0x3a41bd(_0x637c1f) {
  if (typeof _0x637c1f == "string") {
    try {
      return JSON.parse(_0x637c1f);
    } catch (_0x137dda) {
      console.log(_0x137dda);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function bdy_0x10e7ce() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x535511 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    const _0x1fb75b = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    let _0x4a9200 = _0x1fb75b;
    $.shopactivityId == "" && delete _0x4a9200.activityId;
    const _0x3ed9ed = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x4a9200,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x4a9200 = await dyy.getbody(_0x3ed9ed);
    const _0x33bb97 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x14016e,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x452435 = {
      url: "https://api.m.jd.com/client.action?" + _0x4a9200 + "&uuid=88888",
      headers: _0x33bb97,
      timeout: 30000
    };
    $.dget(_0x452435, async (_0x3577d1, _0x44e32f, _0x1af8d5) => {
      try {
        _0x1af8d5 = _0x1af8d5 && _0x1af8d5.match(/jsonp_.*?\((.*?)\);/) && _0x1af8d5.match(/jsonp_.*?\((.*?)\);/)[1] || _0x1af8d5;
        let _0x1969ec = $.toObj(_0x1af8d5, _0x1af8d5);
        if (_0x1969ec && typeof _0x1969ec == "object") {
          if (_0x1969ec && _0x1969ec.success === true) {
            console.log("    " + _0x1969ec.message);
            $.errorJoinShop = _0x1969ec.message;
            if (_0x1969ec.result && _0x1969ec.result.giftInfo) {
              for (let _0x46fe82 of _0x1969ec.result.giftInfo.giftList) {
                console.log("入会获得:" + _0x46fe82.discountString + _0x46fe82.prizeName + _0x46fe82.secondLineDesc);
              }
            }
          } else {
            _0x1969ec && typeof _0x1969ec == "object" && _0x1969ec.message ? ($.errorJoinShop = _0x1969ec.message, console.log("" + (_0x1969ec.message || ""))) : console.log(_0x1af8d5);
          }
        } else {
          console.log(_0x1af8d5);
        }
      } catch (_0x30849c) {
        $.logErr(_0x30849c, _0x44e32f);
      } finally {
        _0x535511();
      }
    });
  });
}
async function bdy_0x3349df() {
  return new Promise(async _0x3a8667 => {
    const _0x8320d = {
      venderId: $.joinVenderId,
      payUpShop: true,
      queryVersion: "10.5.2",
      appid: "ef79a",
      needSecurity: true,
      bizId: "shop_view_app",
      channel: 406
    };
    let _0x5d9118 = _0x8320d;
    const _0x5c9699 = {
      appId: "ef79a",
      fn: "getShopOpenCardInfo",
      body: _0x5d9118,
      apid: "jd_shop_member",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x5d9118 = await dyy.getbody(_0x5c9699);
    const _0xc6d8aa = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x14016e,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    const _0x58bfba = {
      url: "https://api.m.jd.com/client.action?" + _0x5d9118 + "&uuid=88888",
      headers: _0xc6d8aa,
      timeout: 60000
    };
    $.get(_0x58bfba, async (_0x589a61, _0x418b22, _0x6e825d) => {
      try {
        _0x6e825d = _0x6e825d && _0x6e825d.match(/jsonp_.*?\((.*?)\);/) && _0x6e825d.match(/jsonp_.*?\((.*?)\);/)[1] || _0x6e825d;
        let _0x35747c = $.toObj(_0x6e825d, _0x6e825d);
        _0x35747c && typeof _0x35747c == "object" ? _0x35747c && _0x35747c.success == true && (console.log("去加入 -> " + (_0x35747c.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x35747c.result[0].interestsRuleList && _0x35747c.result[0].interestsRuleList[0] && _0x35747c.result[0].interestsRuleList[0].interestsInfo && _0x35747c.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x6e825d);
      } catch (_0x185a24) {
        $.logErr(_0x185a24, _0x418b22);
      } finally {
        _0x3a8667();
      }
    });
  });
}
function bdy_0x3211b7(_0x55e894, _0x5e08c0) {
  return Math.floor(Math.random() * (_0x5e08c0 - _0x55e894)) + _0x55e894;
}
function bdy_0x2b5f0e(_0x3036b7 = +new Date()) {
  var _0x68ad4 = new Date(_0x3036b7 + 28800000);
  return _0x68ad4.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function bdy_0x32be88() {
  return new Promise(_0x2c0f20 => {
    const _0x56e66c = {
      Cookie: bdy_0x14016e,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x37cb24 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x56e66c,
      timeout: 10000
    };
    $.get(_0x37cb24, (_0x569570, _0x408a00, _0x4f08c5) => {
      try {
        if (_0x4f08c5) {
          _0x4f08c5 = JSON.parse(_0x4f08c5);
          if (!(_0x4f08c5.islogin === "1")) {
            if (_0x4f08c5.islogin === "0") {
              $.isLogin = false;
            }
          }
        }
      } catch (_0x434589) {
        console.log(_0x434589);
      } finally {
        _0x2c0f20();
      }
    });
  });
}
function Env(o, t) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((r, i) => { s.call(this, t, (t, e, s) => { t ? i(t) : r(e) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.logLevels = { debug: 0, info: 1, warn: 2, error: 3 }, this.logLevelPrefixs = { debug: "[DEBUG] ", info: "[INFO] ", warn: "[WARN] ", error: "[ERROR] " }, this.logLevel = "info", this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } getEnv() { return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0 } isNode() { return "Node.js" === this.getEnv() } isQuanX() { return "Quantumult X" === this.getEnv() } isSurge() { return "Surge" === this.getEnv() } isLoon() { return "Loon" === this.getEnv() } isShadowrocket() { return "Shadowrocket" === this.getEnv() } isStash() { return "Stash" === this.getEnv() } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null, ...s) { try { return JSON.stringify(t, ...s) } catch { return e } } getjson(t, e) { let s = e; if (this.getdata(t)) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(r => { this.get({ url: t }, (t, e, s) => r(s)) }) } runScript(a, o) { return new Promise(r => { let t = this.getdata("@chavy_boxjs_userCfgs.httpapi"); t = t && t.replace(/\n/g, "").trim(); var e = (e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout")) ? +e : 20, [s, i] = (e = o && o.timeout ? o.timeout : e, t.split("@")); this.post({ url: `http://${i}/v1/scripting/evaluate`, body: { script_text: a, mock_type: "cron", timeout: e }, headers: { "X-Key": s, Accept: "*/*" }, timeout: e }, (t, e, s) => r(s)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; this.fs = this.fs || require("fs"), this.path = this.path || require("path"); var t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), r = !s && this.fs.existsSync(e); if (!s && !r) return {}; r = s ? t : e; try { return JSON.parse(this.fs.readFileSync(r)) } catch (t) { return {} } } writedata() { var t, e, s, r, i; this.isNode() && (this.fs = this.fs || require("fs"), this.path = this.path || require("path"), t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), r = !(s = this.fs.existsSync(t)) && this.fs.existsSync(e), i = JSON.stringify(this.data), !s && r ? this.fs.writeFileSync(e, i) : this.fs.writeFileSync(t, i)) } lodash_get(t, e, s) { let r = t; for (const t of e.replace(/\[(\d+)\]/g, ".$1").split(".")) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, r, e) { return Object(t) === t && ((r = Array.isArray(r) ? r : r.toString().match(/[^.[\]]+/g) || []).slice(0, -1).reduce((t, e, s) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(r[s + 1]) >> 0 == +r[s + 1] ? [] : {}, t)[r[r.length - 1]] = e), t } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { var [, s, r] = /^@(.*?)\.(.*?)$/.exec(t); if (s = s ? this.getval(s) : "") try { const t = JSON.parse(s); e = t ? this.lodash_get(t, r, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { var [, r, i] = /^@(.*?)\.(.*?)$/.exec(e), a = this.getval(r), a = r ? "null" === a ? null : a || "{}" : "{}"; try { const e = JSON.parse(a); this.lodash_set(e, i, t), s = this.setval(JSON.stringify(e), r) } catch (e) { this.lodash_set(a = {}, i, t), s = this.setval(JSON.stringify(a), r) } } else s = this.setval(t, e); return s } getval(t) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.read(t); case "Quantumult X": return $prefs.valueForKey(t); case "Node.js": return this.data = this.loaddata(), this.data[t]; default: return this.data && this.data[t] || null } } setval(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.write(t, e); case "Quantumult X": return $prefs.setValueForKey(t, e); case "Node.js": return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0; default: return this.data && this.data[e] || null } } initGotEnv(t) { this.got = this.got || require("got"), this.cktough = this.cktough || require("tough-cookie"), this.ckjar = this.ckjar || new this.cktough.CookieJar, t && (t.headers = t.headers || {}, t) && (t.headers = t.headers || {}, void 0 === t.headers.cookie) && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar) } tmout() { return new Promise((t, e) => { this.tmoutId = setTimeout(() => { this.prms.cancel(), e({ message: "timemout", response: "" }) }, 5e4) }) } get(t, a = () => { }) { switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t), this.prms = this.got(t).on("redirect", (t, e) => { try { var s; t.headers["set-cookie"] && ((s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString()) && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar) } catch (t) { this.logErr(t) } }), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } post(t, a = () => { }) { var e = t.method ? t.method.toLocaleLowerCase() : "post"; switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[e](t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": t.method = e, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t); var { url: s, ...r } = t; this.prms = this.got[e](s, r), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } time(t, e = null) { var s, r = { "M+": (e = e ? new Date(e) : new Date).getMonth() + 1, "d+": e.getDate(), "H+": e.getHours(), "m+": e.getMinutes(), "s+": e.getSeconds(), "q+": Math.floor((e.getMonth() + 3) / 3), S: e.getMilliseconds() }; for (s in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), r) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[s] : ("00" + r[s]).substr(("" + r[s]).length))); return t } queryStr(e) { let s = ""; for (const r in e) { let t = e[r]; null != t && "" !== t && ("object" == typeof t && (t = JSON.stringify(t)), s += `${r}=${t}&`) } return s = s.substring(0, s.length - 1) } msg(t = o, e = "", s = "", r = {}) { var i, a = r => { const { $open: t, $copy: e, $media: i, $mediaMime: a } = r; switch (typeof r) { case void 0: return r; case "string": switch (this.getEnv()) { case "Surge": case "Stash": default: return { url: r }; case "Loon": case "Shadowrocket": return r; case "Quantumult X": return { "open-url": r }; case "Node.js": return }case "object": switch (this.getEnv()) { case "Surge": case "Stash": case "Shadowrocket": default: var o = {}, s = r.openUrl || r.url || r["open-url"] || t; if (s && Object.assign(o, { action: "open-url", url: s }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(o, { action: "clipboard", text: s }), i) { let t, e, s; if (i.startsWith("http")) t = i; else if (i.startsWith("data:")) { const [r] = i.split(";"), [, a] = i.split(","); e = a, s = r.replace("data:", "") } else e = i, s = (t => { var e, s = { JVBERi0: "application/pdf", R0lGODdh: "image/gif", R0lGODlh: "image/gif", iVBORw0KGgo: "image/png", "/9j/": "image/jpg" }; for (e in s) if (0 === t.indexOf(e)) return s[e]; return null })(i); Object.assign(o, { "media-url": t, "media-base64": e, "media-base64-mime": a ?? s }) } return Object.assign(o, { "auto-dismiss": r["auto-dismiss"], sound: r.sound }), o; case "Loon": { const e = {}; (s = r.openUrl || r.url || r["open-url"] || t) && Object.assign(e, { openUrl: s }); var n = r.mediaUrl || r["media-url"]; return (n = i?.startsWith("http") ? i : n) && Object.assign(e, { mediaUrl: n }), console.log(JSON.stringify(e)), e } case "Quantumult X": { const a = {}; (o = r["open-url"] || r.url || r.openUrl || t) && Object.assign(a, { "open-url": o }); n = r["media-url"] || r.mediaUrl; return (n = i?.startsWith("http") ? i : n) && Object.assign(a, { "media-url": n }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(a, { "update-pasteboard": s }), console.log(JSON.stringify(a)), a } case "Node.js": return }default: return } }; if (!this.isMute) switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: $notification.post(t, e, s, a(r)); break; case "Quantumult X": $notify(t, e, s, a(r)); break; case "Node.js": }this.isMuteLog || ((i = ["", "==============📣系统通知📣=============="]).push(t), e && i.push(e), s && i.push(s), console.log(i.join("\n")), this.logs = this.logs.concat(i)) } debug(...t) { this.logLevels[this.logLevel] <= this.logLevels.debug && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.debug + t.map(t => t ?? String(t)).join(this.logSeparator))) } info(...t) { this.logLevels[this.logLevel] <= this.logLevels.info && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.info + t.map(t => t ?? String(t)).join(this.logSeparator))) } warn(...t) { this.logLevels[this.logLevel] <= this.logLevels.warn && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.warn + t.map(t => t ?? String(t)).join(this.logSeparator))) } error(...t) { this.logLevels[this.logLevel] <= this.logLevels.error && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.error + t.map(t => t ?? String(t)).join(this.logSeparator))) } log(...t) { 0 < t.length && (this.logs = [...this.logs, ...t]), console.log(t.map(t => t ?? String(t)).join(this.logSeparator)) } logErr(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: this.log("", `❗️${this.name}, 错误!`, t); break; case "Node.js": this.log("", `❗️${this.name}, 错误!`, void 0 !== t.message ? t.message : t) } } wait(e) { return new Promise(t => setTimeout(t, e)) } done(t = {}) { var e = ((new Date).getTime() - this.startTime) / 1e3; switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: $done(t); break; case "Node.js": process.exit(1) } } }(o, t) }