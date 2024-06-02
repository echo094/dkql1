/*
1 21 * * * jd_wyw_TX.js
*/

const $ = new Env('玩一玩提现');
const bdy_0x37c991 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x49e951 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x53c0b6 = require("./function/dylans"),
  bdy_0x50ead0 = process.env.WYW_DBNUM ? process.env.WYW_DBNUM : "10";
const bdy_0x8c2850 = process.env.WYW_DELAY ? process.env.WYW_DELAY : "5";
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
let bdy_0x5c6920 = [],
  bdy_0x34fc41 = "",
  bdy_0x5ceac8 = 0;
if ($.isNode()) {
  Object.keys(bdy_0x37c991).forEach(_0x1a8973 => {
    bdy_0x5c6920.push(bdy_0x37c991[_0x1a8973]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x5c6920 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x391663 => _0x391663.cookie)].filter(_0x465334 => !!_0x465334);
}
$.helpId = [];
$.fullId = [];
!(async () => {
  if (!bdy_0x5c6920[0]) {
    const _0x107705 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x107705);
    return;
  }
  console.log("当前版本：20240601");
  console.log("问题建议：https://t.me/dylan_jdpro");
  console.log("提现间隔 WYW_DELAY='3'秒 默认5秒");
  for (let _0xe57106 = 0; _0xe57106 < bdy_0x5c6920.length; _0xe57106++) {
    bdy_0x34fc41 = bdy_0x5c6920[_0xe57106];
    originCookie = bdy_0x5c6920[_0xe57106];
    if (bdy_0x34fc41) {
      $.UserName = decodeURIComponent(bdy_0x34fc41.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x34fc41.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0xe57106 + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      $.isban = false;
      $.hasRisk = false;
      $.nostart = false;
      $.cashList = [];
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      bdy_0x590274();
      await bdy_0x271005();
      if (!$.isLogin) {
        const _0x397ee3 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x397ee3);
        if ($.isNode()) {
          await bdy_0x49e951.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie");
        }
        continue;
      }
      await bdy_0x4adfdd();
      if ($.outFlag || $.nostart) {
        break;
      }
    }
  }
})().catch(_0x5395d9 => {
  return $.logErr(_0x5395d9);
}).finally(() => {
  return $.done();
});
async function bdy_0x4fe9f1() {
  for (let _0x117dc2 = 0; _0x117dc2 < bdy_0x5c6920.length; _0x117dc2++) {
    bdy_0x34fc41 = bdy_0x5c6920[_0x117dc2];
    if (bdy_0x34fc41) {
      $.UserName = decodeURIComponent(bdy_0x34fc41.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x34fc41.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x117dc2 + 1;
      console.log("\n-------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
      bdy_0x590274();
      $.nonum = false;
      $.fullId.length != 0 && ($.helpId = $.helpId.filter(_0x1c6c37 => !$.fullId.includes(_0x1c6c37)), $.fullId = []);
      for (let _0x2815fc of $.helpId) {
        $.itemId = _0x2815fc;
        console.log("去助力 --> " + $.itemId);
        await bdy_0x46bc6d("wanyiwan_assist");
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
async function bdy_0x4adfdd() {
  try {
    $.failtxlist = [];
    for (let _0x42b7a5 = 0; _0x42b7a5 < 1; _0x42b7a5++) {
      console.log("\n开始提现...");
      await bdy_0x46bc6d("superRedBagList", _0x42b7a5);
      if ($.bagList.length == 0) {
        break;
      }
      for (let _0x4f887b of $.bagList) {
        if (_0x4f887b.prizeType == 4) {
          $.txfail = false;
          if (_0x4f887b.state == 0 || _0x4f887b.state == 2) {
            console.log("提现 --- " + _0x4f887b.amount);
            await bdy_0x46bc6d("apCashWithDraw", _0x4f887b);
            $.txfail && $.failtxlist.push(_0x4f887b);
            await $.wait(2000);
          } else {
            _0x4f887b.state == 8;
          }
        }
      }
      await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
    }
    while ($.failtxlist.length > 0) {
      console.log("\n" + $.failtxlist.length + "失败");
      for (let _0x26b53b = 0; _0x26b53b < $.failtxlist.length;) {
        let _0x40252b = $.failtxlist[_0x26b53b];
        _0x40252b.prizeType == 4 && ($.txfail = false, console.log("重试提现 --- " + _0x40252b.amount), await bdy_0x46bc6d("apCashWithDraw", _0x40252b), $.txfail ? _0x26b53b++ : $.failtxlist.splice(_0x26b53b, 1), await $.wait(bdy_0x8c2850 * 1000));
      }
    }
    await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
  } catch (_0x863d8c) {
    console.log(_0x863d8c);
  }
}
async function bdy_0x46bc6d(_0x51a1cf, ..._0x1ce660) {
  if ($.outFlag || $.isban) {
    return;
  }
  let _0x4f869b = "",
    _0x3d7d0,
    _0x27479f,
    _0x11515f = "post",
    _0x1489f5 = "https://api.m.jd.com/client.action",
    _0x4f8b95 = "signed_wh5";
  switch (_0x51a1cf) {
    case "wanyiwan_sign":
      const _0x11e047 = {
        version: 1
      };
      _0x4f869b = _0x11e047;
      _0x3d7d0 = "d12dd";
      _0x27479f = "wanyiwan_sign";
      break;
    case "wanyiwan_home":
      const _0x4f6921 = {
        outsite: 0,
        firstCall: 1,
        version: 1,
        lbsSwitch: true
      };
      _0x4f869b = _0x4f6921;
      _0x3d7d0 = "c81ad";
      _0x27479f = "wanyiwan_home";
      break;
    case "apTaskList":
      _0x1489f5 = "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22%3A%22Fl1LmxG_f0poD7w1ycZqnw%22%7D&t=1715170975269&appid=activities_platform&client=android&clientVersion=6.24.0&loginType=2&loginWQBiz=wegame&h5st=null&build=22779&screen=393*873&networkType=wifi&eufv=1&cthr=1";
      _0x11515f = "get";
      break;
    case "startTask":
      const _0x4acd77 = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 1,
        version: 1
      };
      _0x4f869b = _0x4acd77;
      _0x3d7d0 = "89db2";
      _0x27479f = "wanyiwan_do_task";
      break;
    case "endTask":
      const _0x3e8a9b = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 0,
        version: 1
      };
      _0x4f869b = _0x3e8a9b;
      _0x3d7d0 = "89db2";
      _0x27479f = "wanyiwan_do_task";
      break;
    case "award":
      const _0x2977ea = {
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        version: 1
      };
      _0x4f869b = _0x2977ea;
      _0x27479f = "wanyiwan_task_receive_award";
      break;
    case "wanyiwan_assist":
      const _0x211118 = {
        inviteCode: $.itemId,
        version: 1
      };
      _0x4f869b = _0x211118;
      _0x3d7d0 = "ba505";
      _0x27479f = "wanyiwan_assist";
      break;
    case "turnHappyHome":
      _0x1489f5 = "https://api.m.jd.com/api";
      const _0x1756a1 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x4f869b = _0x1756a1;
      _0x4f8b95 = "activities_platform";
      _0x27479f = "turnHappyHome";
      break;
    case "turnHappyDouble":
      _0x1489f5 = "https://api.m.jd.com/api";
      _0x4f869b = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ",
        turnNum: parseInt(bdy_0x50ead0)
      };
      _0x3d7d0 = "614f1";
      _0x4f8b95 = "activities_platform";
      _0x27479f = "turnHappyDouble";
      break;
    case "turnHappyReceive":
      _0x1489f5 = "https://api.m.jd.com/api";
      const _0x2e370a = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x4f869b = _0x2e370a;
      _0x3d7d0 = "25fac";
      _0x4f8b95 = "activities_platform";
      _0x27479f = "turnHappyReceive";
      break;
    case "superRedBagHome":
      _0x1489f5 = "https://api.m.jd.com/api";
      const _0xf83da4 = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x4f869b = _0xf83da4;
      _0x3d7d0 = "5be1b";
      _0x4f8b95 = "activity_platform_se";
      _0x27479f = "superRedBagHome";
      break;
    case "superRedBagDraw":
      _0x1489f5 = "https://api.m.jd.com/api";
      const _0x510005 = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x4f869b = _0x510005;
      _0x3d7d0 = "89cfe";
      _0x4f8b95 = "activity_platform_se";
      _0x27479f = "superRedBagDraw";
      break;
    case "apCashWithDraw":
      _0x1489f5 = "https://api.m.jd.com/api";
      const _0x5826a7 = {
        id: _0x1ce660[0].id,
        business: "superRedEnvelope",
        poolBaseId: _0x1ce660[0].poolBaseId,
        prizeGroupId: _0x1ce660[0].prizeGroupId,
        prizeBaseId: _0x1ce660[0].prizeBaseId,
        prizeType: 4,
        activityId: "2013"
      };
      const _0x5aadd8 = {
        businessSource: "NONE",
        base: _0x5826a7,
        linkId: "aE-1vg6_no2csxgXFuv3Kg",
        channel: "1"
      };
      _0x4f869b = _0x5aadd8;
      _0x3d7d0 = "73bca";
      _0x4f8b95 = "activities_platform";
      _0x27479f = "apCashWithDraw";
      break;
    case "superRedBagList":
      _0x1489f5 = "http://api.m.jd.com/api";
      const _0x4317d0 = {
        pageNum: _0x1ce660[0],
        pageSize: 100,
        linkId: "aE-1vg6_no2csxgXFuv3Kg",
        associateLinkId: "",
        business: "superRedEnvelope"
      };
      _0x4f869b = _0x4317d0;
      _0x3d7d0 = "f2b1d";
      _0x4f8b95 = "activities_platform";
      _0x27479f = "superRedBagList";
      break;
    default:
      console.log("错误" + _0x51a1cf);
  }
  if (_0x3d7d0) {
    let _0x3808a8 = {
      appId: _0x3d7d0,
      functionId: _0x27479f,
      body: _0x4f869b,
      appid: _0x4f8b95,
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      t: Date.now(),
      ua: $.UA
    };
    _0x4f869b = await bdy_0x53c0b6.getbody(_0x3808a8);
    if (!_0x4f869b) {
      return;
    }
  } else {
    _0x4f869b && (_0x4f869b = "functionId=" + _0x27479f + "&body=" + encodeURIComponent(JSON.stringify(_0x4f869b)) + "&t=" + Date.now() + "&appid=" + _0x4f8b95 + "&client=ios&" + $.UA.split(";")[2] + "&cthr=1&networkType=wifi");
  }
  let _0x51f743 = bdy_0x997a(_0x1489f5, _0x4f869b);
  return new Promise(async _0x312be3 => {
    $["d" + _0x11515f](_0x51f743, async (_0x58f955, _0x4d760c, _0x58cb1f) => {
      try {
        if (_0x58f955) {
          if (_0x4d760c && typeof _0x4d760c.statusCode != "undefined") {
            if (_0x4d760c.statusCode == 493) {
              if (bdy_0x5ceac8 < 6) {
                bdy_0x5ceac8++;
                await bdy_0x46bc6d(_0x51a1cf);
                return;
              }
              console.log("ip可能被限制，过10分钟后再执行脚本\n");
              $.outFlag = true;
            }
          }
          console.log("" + $.toStr(_0x58f955, _0x58f955));
        } else {
          if (_0x58cb1f.includes("doctype") && bdy_0x5ceac8 < 6) {
            bdy_0x5ceac8++;
            await bdy_0x46bc6d(_0x51a1cf);
            return;
          }
          bdy_0x5ceac8 = 0;
          bdy_0x59dd37(_0x51a1cf, _0x58cb1f);
        }
      } catch (_0x139d08) {
        console.log(_0x139d08, _0x4d760c);
      } finally {
        _0x312be3();
      }
    });
  });
}
function bdy_0x4ef71b(_0x1677a8) {
  let _0x411f9f = "";
  switch (type) {
    case [_0x411f9f]:
      const _0x3c3569 = {
        ed: ed
      };
      _0xf1f6le = _0x3c3569;
      break;
    case [_0x411f9f]:
      const _0x4c05a3 = {
        bd: bd
      };
      _0xf1f6lc = _0x4c05a3;
      break;
    case [_0x411f9f]:
      const _0x446030 = {
        ed: ed
      };
      _0xf1f6lf = _0x446030;
      break;
    case [_0x411f9f]:
      const _0x23f7d4 = {
        ed: ed
      };
      _0xf1f6lg = _0x23f7d4;
      break;
    case [_0x411f9f]:
      const _0x243111 = {
        ed: ed
      };
      _0xf1f6lv = _0x243111;
      break;
  }
}
async function bdy_0x59dd37(_0x547949, _0x233edd) {
  let _0x109d97 = "";
  try {
    _0x109d97 = JSON.parse(_0x233edd);
  } catch (_0x30d10d) {
    console.log(_0x547949 + " 执行任务异常");
  }
  try {
    switch (_0x547949) {
      case "award":
        if (_0x109d97.code == 0) {
          _0x109d97.data.bizCode == 0 ? console.log("任务完成，获得" + _0x109d97.data.result.rewardCount + "奖票 🎫") : console.log(_0x109d97.data.bizMsg);
        } else {
          console.log(_0x109d97.message);
        }
        break;
      case "wanyiwan_sign":
        _0x109d97.code == 0 ? _0x109d97.data.bizCode == 0 ? console.log("签到成功,获得" + _0x109d97.data.result.getScore + "奖票 🎫") : console.log(_0x109d97.data.bizMsg) : console.log(_0x109d97.message);
        break;
      case "wanyiwan_assist":
        if (_0x109d97.code == 0) {
          if (_0x109d97.data.bizCode == 0) {
            console.log("✔️ 助力成功");
            $.nonum = true;
          } else {
            if (_0x109d97.data.bizMsg.includes("太多人") || _0x109d97.data.bizMsg.includes("重复")) {
              console.log("❌", _0x109d97.data.bizMsg);
              $.nonum = true;
            } else {
              _0x109d97.data.bizMsg.includes("已经完成") ? (console.log("❌", _0x109d97.data.bizMsg), $.fullId.push($.itemId)) : console.log("❌", _0x109d97.data.bizMsg);
            }
          }
        } else {
          console.log(_0x109d97.message);
        }
        break;
      case "wanyiwan_home":
        _0x109d97.code == 0 ? _0x109d97.data.bizCode == 0 ? (_0x109d97.data.result.popWindows.length != 0 && console.log("获得新手奖励：", _0x109d97.data.result.popWindows[0].getScore, "奖票 🎫"), console.log("当前奖票总量：" + _0x109d97.data.result.score + " 🎫"), $.isLogin = _0x109d97.data?.["result"]?.["isLogin"], $.taskList = _0x109d97.data?.["result"]?.["taskBoard"] || [], $.signstatus = _0x109d97.data?.["result"]?.["signBoard"]?.["status"] || 0) : console.log(_0x109d97.data.bizMsg) : console.log(_0x109d97.message);
        break;
      case "superRedBagList":
        _0x109d97.success ? $.bagList = _0x109d97.data.items || [] : console.log(_0x109d97.errMsg);
        break;
      case "apCashWithDraw":
        if (_0x109d97.code == 0) {
          if (_0x109d97.data.message.indexOf("待发放") > -1) {
            console.log(_0x109d97.data.message);
            $.txfail = true;
          } else {
            if (_0x109d97.data.message.includes("上限")) {
              console.log(_0x109d97.data.message);
              $.txfail = false;
            } else {
              _0x109d97.data.message.includes("提现中") ? (console.log("提现成功"), $.txfail = false) : console.log(_0x109d97.data.message);
            }
          }
        } else {
          console.log(_0x109d97.errMsg);
        }
        break;
      case "superRedBagHome":
        _0x109d97.success ? ($.sceneStatus = _0x109d97.data.sceneStatus, $.nextLeftTime = _0x109d97.data.nextLeftTime) : console.log(_0x109d97.errMsg);
        break;
      case "superRedBagDraw":
        if (_0x109d97.success) {
          $.shakeLeftTime = _0x109d97.data.shakeLeftTime;
          const {
            prizeDrawVo = ""
          } = _0x109d97.data;
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
                const _0x5e4f21 = {
                  id: prizeDrawVo.id,
                  poolBaseId: 41486,
                  prizeGroupId: prizeDrawVo.prizeGroupId,
                  prizeBaseId: prizeDrawVo.prizeBaseId,
                  prizeType: prizeDrawVo.prizeType,
                  amount: prizeDrawVo.amount
                };
                $.cashList.push(_0x5e4f21);
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
            console.log(_0x233edd);
          }
        } else {
          console.log(_0x109d97.errMsg);
        }
        break;
      case "startTask":
      case "turnHappyReceive":
      case "endTask":
        break;
      default:
        console.log(_0x547949 + " -> " + _0x233edd);
    }
    typeof _0x109d97 == "object" && _0x109d97.errorMessage && _0x109d97.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0x24800d) {
    console.log(_0x547949 + " " + _0x24800d);
  }
}
function bdy_0x997a(_0x493449, _0x4359a2) {
  const _0x387858 = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    Cookie: bdy_0x34fc41,
    "User-Agent": $.UA
  };
  const _0x341521 = {
    url: _0x493449,
    headers: _0x387858,
    timeout: 30000,
    ...(_0x4359a2 ? {
      body: _0x4359a2
    } : {})
  };
  return _0x341521;
}
async function bdy_0x590274() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0x215bfe(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0x215bfe(_0x100264) {
  _0x100264 = _0x100264 || 32;
  let _0x4bab1e = "abcdef0123456789",
    _0x586eef = _0x4bab1e.length,
    _0x30aa41 = "";
  for (i = 0; i < _0x100264; i++) {
    _0x30aa41 += _0x4bab1e.charAt(Math.floor(Math.random() * _0x586eef));
  }
  return _0x30aa41;
}
function bdy_0x47d4f0(_0x598d69) {
  if (typeof _0x598d69 == "string") {
    try {
      return JSON.parse(_0x598d69);
    } catch (_0x5762d6) {
      console.log(_0x5762d6);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function bdy_0x697c7() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x16482d => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x279834 = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    $.shopactivityId == "" && delete _0x279834.activityId;
    const _0x41457d = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x279834,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x279834 = await dyy.getbody(_0x41457d);
    const _0x376ead = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x34fc41,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x1717b6 = {
      url: "https://api.m.jd.com/client.action?" + _0x279834 + "&uuid=88888",
      headers: _0x376ead,
      timeout: 30000
    };
    $.dget(_0x1717b6, async (_0x3537ef, _0x47c3a1, _0x483e27) => {
      try {
        _0x483e27 = _0x483e27 && _0x483e27.match(/jsonp_.*?\((.*?)\);/) && _0x483e27.match(/jsonp_.*?\((.*?)\);/)[1] || _0x483e27;
        let _0x20c103 = $.toObj(_0x483e27, _0x483e27);
        if (_0x20c103 && typeof _0x20c103 == "object") {
          if (_0x20c103 && _0x20c103.success === true) {
            console.log("    " + _0x20c103.message);
            $.errorJoinShop = _0x20c103.message;
            if (_0x20c103.result && _0x20c103.result.giftInfo) {
              for (let _0x527d04 of _0x20c103.result.giftInfo.giftList) {
                console.log("入会获得:" + _0x527d04.discountString + _0x527d04.prizeName + _0x527d04.secondLineDesc);
              }
            }
          } else {
            _0x20c103 && typeof _0x20c103 == "object" && _0x20c103.message ? ($.errorJoinShop = _0x20c103.message, console.log("" + (_0x20c103.message || ""))) : console.log(_0x483e27);
          }
        } else {
          console.log(_0x483e27);
        }
      } catch (_0x52b1fc) {
        $.logErr(_0x52b1fc, _0x47c3a1);
      } finally {
        _0x16482d();
      }
    });
  });
}
async function bdy_0xd44ba7() {
  return new Promise(async _0x143f64 => {
    const _0x44ed6f = {
      venderId: $.joinVenderId,
      payUpShop: true,
      queryVersion: "10.5.2",
      appid: "ef79a",
      needSecurity: true,
      bizId: "shop_view_app",
      channel: 406
    };
    let _0x3a986a = _0x44ed6f;
    const _0x22c95c = {
      appId: "ef79a",
      fn: "getShopOpenCardInfo",
      body: _0x3a986a,
      apid: "jd_shop_member",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x3a986a = await dyy.getbody(_0x22c95c);
    const _0x58fae8 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x34fc41,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    const _0x5317cd = {
      url: "https://api.m.jd.com/client.action?" + _0x3a986a + "&uuid=88888",
      headers: _0x58fae8,
      timeout: 60000
    };
    $.get(_0x5317cd, async (_0x51d244, _0x35f63d, _0x552e4c) => {
      try {
        _0x552e4c = _0x552e4c && _0x552e4c.match(/jsonp_.*?\((.*?)\);/) && _0x552e4c.match(/jsonp_.*?\((.*?)\);/)[1] || _0x552e4c;
        let _0x5954a6 = $.toObj(_0x552e4c, _0x552e4c);
        _0x5954a6 && typeof _0x5954a6 == "object" ? _0x5954a6 && _0x5954a6.success == true && (console.log("去加入 -> " + (_0x5954a6.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x5954a6.result[0].interestsRuleList && _0x5954a6.result[0].interestsRuleList[0] && _0x5954a6.result[0].interestsRuleList[0].interestsInfo && _0x5954a6.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x552e4c);
      } catch (_0x3d072f) {
        $.logErr(_0x3d072f, _0x35f63d);
      } finally {
        _0x143f64();
      }
    });
  });
}
function bdy_0x12a6dd(_0x5382eb, _0x7205db) {
  return Math.floor(Math.random() * (_0x7205db - _0x5382eb)) + _0x5382eb;
}
function bdy_0xf9e32e(_0x21063d = +new Date()) {
  var _0x3cabd7 = new Date(_0x21063d + 28800000);
  return _0x3cabd7.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function bdy_0x271005() {
  return new Promise(_0x3bd2d9 => {
    const _0x399c07 = {
      Cookie: bdy_0x34fc41,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x229724 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x399c07,
      timeout: 10000
    };
    $.get(_0x229724, (_0x10075a, _0x5fdb99, _0x49dbb2) => {
      try {
        if (_0x49dbb2) {
          _0x49dbb2 = JSON.parse(_0x49dbb2);
          if (!(_0x49dbb2.islogin === "1")) {
            _0x49dbb2.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x58d935) {
        console.log(_0x58d935);
      } finally {
        _0x3bd2d9();
      }
    });
  });
}
function Env(o, t) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((r, i) => { s.call(this, t, (t, e, s) => { t ? i(t) : r(e) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.logLevels = { debug: 0, info: 1, warn: 2, error: 3 }, this.logLevelPrefixs = { debug: "[DEBUG] ", info: "[INFO] ", warn: "[WARN] ", error: "[ERROR] " }, this.logLevel = "info", this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } getEnv() { return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0 } isNode() { return "Node.js" === this.getEnv() } isQuanX() { return "Quantumult X" === this.getEnv() } isSurge() { return "Surge" === this.getEnv() } isLoon() { return "Loon" === this.getEnv() } isShadowrocket() { return "Shadowrocket" === this.getEnv() } isStash() { return "Stash" === this.getEnv() } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null, ...s) { try { return JSON.stringify(t, ...s) } catch { return e } } getjson(t, e) { let s = e; if (this.getdata(t)) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(r => { this.get({ url: t }, (t, e, s) => r(s)) }) } runScript(a, o) { return new Promise(r => { let t = this.getdata("@chavy_boxjs_userCfgs.httpapi"); t = t && t.replace(/\n/g, "").trim(); var e = (e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout")) ? +e : 20, [s, i] = (e = o && o.timeout ? o.timeout : e, t.split("@")); this.post({ url: `http://${i}/v1/scripting/evaluate`, body: { script_text: a, mock_type: "cron", timeout: e }, headers: { "X-Key": s, Accept: "*/*" }, timeout: e }, (t, e, s) => r(s)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; this.fs = this.fs || require("fs"), this.path = this.path || require("path"); var t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), r = !s && this.fs.existsSync(e); if (!s && !r) return {}; r = s ? t : e; try { return JSON.parse(this.fs.readFileSync(r)) } catch (t) { return {} } } writedata() { var t, e, s, r, i; this.isNode() && (this.fs = this.fs || require("fs"), this.path = this.path || require("path"), t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), r = !(s = this.fs.existsSync(t)) && this.fs.existsSync(e), i = JSON.stringify(this.data), !s && r ? this.fs.writeFileSync(e, i) : this.fs.writeFileSync(t, i)) } lodash_get(t, e, s) { let r = t; for (const t of e.replace(/\[(\d+)\]/g, ".$1").split(".")) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, r, e) { return Object(t) === t && ((r = Array.isArray(r) ? r : r.toString().match(/[^.[\]]+/g) || []).slice(0, -1).reduce((t, e, s) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(r[s + 1]) >> 0 == +r[s + 1] ? [] : {}, t)[r[r.length - 1]] = e), t } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { var [, s, r] = /^@(.*?)\.(.*?)$/.exec(t); if (s = s ? this.getval(s) : "") try { const t = JSON.parse(s); e = t ? this.lodash_get(t, r, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { var [, r, i] = /^@(.*?)\.(.*?)$/.exec(e), a = this.getval(r), a = r ? "null" === a ? null : a || "{}" : "{}"; try { const e = JSON.parse(a); this.lodash_set(e, i, t), s = this.setval(JSON.stringify(e), r) } catch (e) { this.lodash_set(a = {}, i, t), s = this.setval(JSON.stringify(a), r) } } else s = this.setval(t, e); return s } getval(t) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.read(t); case "Quantumult X": return $prefs.valueForKey(t); case "Node.js": return this.data = this.loaddata(), this.data[t]; default: return this.data && this.data[t] || null } } setval(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.write(t, e); case "Quantumult X": return $prefs.setValueForKey(t, e); case "Node.js": return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0; default: return this.data && this.data[e] || null } } initGotEnv(t) { this.got = this.got || require("got"), this.cktough = this.cktough || require("tough-cookie"), this.ckjar = this.ckjar || new this.cktough.CookieJar, t && (t.headers = t.headers || {}, t) && (t.headers = t.headers || {}, void 0 === t.headers.cookie) && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar) } tmout() { return new Promise((t, e) => { this.tmoutId = setTimeout(() => { this.prms.cancel(), e({ message: "timemout", response: "" }) }, 5e4) }) } get(t, a = () => { }) { switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t), this.prms = this.got(t).on("redirect", (t, e) => { try { var s; t.headers["set-cookie"] && ((s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString()) && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar) } catch (t) { this.logErr(t) } }), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } post(t, a = () => { }) { var e = t.method ? t.method.toLocaleLowerCase() : "post"; switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[e](t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": t.method = e, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t); var { url: s, ...r } = t; this.prms = this.got[e](s, r), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } time(t, e = null) { var s, r = { "M+": (e = e ? new Date(e) : new Date).getMonth() + 1, "d+": e.getDate(), "H+": e.getHours(), "m+": e.getMinutes(), "s+": e.getSeconds(), "q+": Math.floor((e.getMonth() + 3) / 3), S: e.getMilliseconds() }; for (s in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), r) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[s] : ("00" + r[s]).substr(("" + r[s]).length))); return t } queryStr(e) { let s = ""; for (const r in e) { let t = e[r]; null != t && "" !== t && ("object" == typeof t && (t = JSON.stringify(t)), s += `${r}=${t}&`) } return s = s.substring(0, s.length - 1) } msg(t = o, e = "", s = "", r = {}) { var i, a = r => { const { $open: t, $copy: e, $media: i, $mediaMime: a } = r; switch (typeof r) { case void 0: return r; case "string": switch (this.getEnv()) { case "Surge": case "Stash": default: return { url: r }; case "Loon": case "Shadowrocket": return r; case "Quantumult X": return { "open-url": r }; case "Node.js": return }case "object": switch (this.getEnv()) { case "Surge": case "Stash": case "Shadowrocket": default: var o = {}, s = r.openUrl || r.url || r["open-url"] || t; if (s && Object.assign(o, { action: "open-url", url: s }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(o, { action: "clipboard", text: s }), i) { let t, e, s; if (i.startsWith("http")) t = i; else if (i.startsWith("data:")) { const [r] = i.split(";"), [, a] = i.split(","); e = a, s = r.replace("data:", "") } else e = i, s = (t => { var e, s = { JVBERi0: "application/pdf", R0lGODdh: "image/gif", R0lGODlh: "image/gif", iVBORw0KGgo: "image/png", "/9j/": "image/jpg" }; for (e in s) if (0 === t.indexOf(e)) return s[e]; return null })(i); Object.assign(o, { "media-url": t, "media-base64": e, "media-base64-mime": a ?? s }) } return Object.assign(o, { "auto-dismiss": r["auto-dismiss"], sound: r.sound }), o; case "Loon": { const e = {}; (s = r.openUrl || r.url || r["open-url"] || t) && Object.assign(e, { openUrl: s }); var n = r.mediaUrl || r["media-url"]; return (n = i?.startsWith("http") ? i : n) && Object.assign(e, { mediaUrl: n }), console.log(JSON.stringify(e)), e } case "Quantumult X": { const a = {}; (o = r["open-url"] || r.url || r.openUrl || t) && Object.assign(a, { "open-url": o }); n = r["media-url"] || r.mediaUrl; return (n = i?.startsWith("http") ? i : n) && Object.assign(a, { "media-url": n }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(a, { "update-pasteboard": s }), console.log(JSON.stringify(a)), a } case "Node.js": return }default: return } }; if (!this.isMute) switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: $notification.post(t, e, s, a(r)); break; case "Quantumult X": $notify(t, e, s, a(r)); break; case "Node.js": }this.isMuteLog || ((i = ["", "==============📣系统通知📣=============="]).push(t), e && i.push(e), s && i.push(s), console.log(i.join("\n")), this.logs = this.logs.concat(i)) } debug(...t) { this.logLevels[this.logLevel] <= this.logLevels.debug && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.debug + t.map(t => t ?? String(t)).join(this.logSeparator))) } info(...t) { this.logLevels[this.logLevel] <= this.logLevels.info && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.info + t.map(t => t ?? String(t)).join(this.logSeparator))) } warn(...t) { this.logLevels[this.logLevel] <= this.logLevels.warn && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.warn + t.map(t => t ?? String(t)).join(this.logSeparator))) } error(...t) { this.logLevels[this.logLevel] <= this.logLevels.error && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.error + t.map(t => t ?? String(t)).join(this.logSeparator))) } log(...t) { 0 < t.length && (this.logs = [...this.logs, ...t]), console.log(t.map(t => t ?? String(t)).join(this.logSeparator)) } logErr(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: this.log("", `❗️${this.name}, 错误!`, t); break; case "Node.js": this.log("", `❗️${this.name}, 错误!`, void 0 !== t.message ? t.message : t) } } wait(e) { return new Promise(t => setTimeout(t, e)) } done(t = {}) { var e = ((new Date).getTime() - this.startTime) / 1e3; switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: $done(t); break; case "Node.js": process.exit(1) } } }(o, t) }