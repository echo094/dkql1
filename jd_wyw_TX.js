/*
1 21 * * * jd_wyw_TX.js
*/

const $ = new Env('玩一玩提现');
const bdy_0x1d2651 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x5d8939 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x375e6c = require("./function/dylans"),
  bdy_0x30dd53 = process.env.WYW_DBNUM ? process.env.WYW_DBNUM : "10";
const bdy_0x166653 = process.env.WYW_DELAY ? process.env.WYW_DELAY : "5";
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
let bdy_0x343c2f = [],
  bdy_0x3565ca = "",
  bdy_0x5635a9 = 0;
if ($.isNode()) {
  Object.keys(bdy_0x1d2651).forEach(_0xcf59a5 => {
    bdy_0x343c2f.push(bdy_0x1d2651[_0xcf59a5]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x343c2f = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x262e9c => _0x262e9c.cookie)].filter(_0x20adac => !!_0x20adac);
}
$.helpId = [];
$.fullId = [];
!(async () => {
  if (!bdy_0x343c2f[0]) {
    const _0x35f118 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x35f118);
    return;
  }
  console.log("当前版本：20240601");
  console.log("问题建议：https://t.me/dylan_jdpro");
  console.log("提现间隔 WYW_DELAY='3'秒 默认5秒");
  for (let _0x37218b = 0; _0x37218b < bdy_0x343c2f.length; _0x37218b++) {
    bdy_0x3565ca = bdy_0x343c2f[_0x37218b];
    originCookie = bdy_0x343c2f[_0x37218b];
    if (bdy_0x3565ca) {
      $.UserName = decodeURIComponent(bdy_0x3565ca.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x3565ca.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x37218b + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      $.isban = false;
      $.hasRisk = false;
      $.nostart = false;
      $.cashList = [];
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      bdy_0x3928e6();
      await bdy_0x54b880();
      if (!$.isLogin) {
        const _0x129bf7 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x129bf7);
        if ($.isNode()) {
          await bdy_0x5d8939.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie");
        }
        continue;
      }
      await bdy_0x48fb89();
      if ($.outFlag || $.nostart) {
        break;
      }
    }
  }
})().catch(_0x2d3838 => {
  return $.logErr(_0x2d3838);
}).finally(() => {
  return $.done();
});
async function bdy_0x109e41() {
  for (let _0x2ccac1 = 0; _0x2ccac1 < bdy_0x343c2f.length; _0x2ccac1++) {
    bdy_0x3565ca = bdy_0x343c2f[_0x2ccac1];
    if (bdy_0x3565ca) {
      $.UserName = decodeURIComponent(bdy_0x3565ca.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x3565ca.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x2ccac1 + 1;
      console.log("\n-------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
      bdy_0x3928e6();
      $.nonum = false;
      $.fullId.length != 0 && ($.helpId = $.helpId.filter(_0x57b941 => !$.fullId.includes(_0x57b941)), $.fullId = []);
      for (let _0x3af858 of $.helpId) {
        $.itemId = _0x3af858;
        console.log("去助力 --> " + $.itemId);
        await bdy_0x56ad1f("wanyiwan_assist");
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
async function bdy_0x48fb89() {
  try {
    $.failtxlist = [];
    $.failnum = 0;
    $.buti = false;
    for (let _0x163aa1 = 0; _0x163aa1 < 1; _0x163aa1++) {
      console.log("\n开始提现...");
      await bdy_0x56ad1f("superRedBagList", _0x163aa1);
      if ($.bagList.length == 0) {
        break;
      }
      for (let _0x456f5b of $.bagList) {
        if (_0x456f5b.prizeType == 4) {
          $.txfail = false;
          if (_0x456f5b.state == 0 || _0x456f5b.state == 2) {
            console.log("提现 --- " + _0x456f5b.amount);
            await bdy_0x56ad1f("apCashWithDraw", _0x456f5b);
            $.txfail && $.failtxlist.push(_0x456f5b);
            await $.wait(2000);
          } else {
            _0x456f5b.state == 8;
          }
        }
      }
      await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
    }
    while ($.failtxlist.length > 0 && !$.buti) {
      console.log("\n" + $.failtxlist.length + "失败");
      for (let _0x351b45 = 0; _0x351b45 < $.failtxlist.length;) {
        let _0x5e5d2b = $.failtxlist[_0x351b45];
        _0x5e5d2b.prizeType == 4 && ($.txfail = false, console.log("重试提现 --- " + _0x5e5d2b.amount), await bdy_0x56ad1f("apCashWithDraw", _0x5e5d2b), $.txfail ? _0x351b45++ : $.failtxlist.splice(_0x351b45, 1), await $.wait(bdy_0x166653 * 1000));
      }
    }
    await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
  } catch (_0xac71f) {
    console.log(_0xac71f);
  }
}
async function bdy_0x56ad1f(_0x37586e, ..._0x475366) {
  if ($.outFlag || $.isban) {
    return;
  }
  let _0x3ba49a = "",
    _0x4dd293,
    _0x1006df,
    _0x5e9c1b = "post",
    _0xba249e = "https://api.m.jd.com/client.action",
    _0x10a998 = "signed_wh5";
  switch (_0x37586e) {
    case "wanyiwan_sign":
      const _0x291820 = {
        version: 1
      };
      _0x3ba49a = _0x291820;
      _0x4dd293 = "d12dd";
      _0x1006df = "wanyiwan_sign";
      break;
    case "wanyiwan_home":
      const _0x27849f = {
        outsite: 0,
        firstCall: 1,
        version: 1,
        lbsSwitch: true
      };
      _0x3ba49a = _0x27849f;
      _0x4dd293 = "c81ad";
      _0x1006df = "wanyiwan_home";
      break;
    case "apTaskList":
      _0xba249e = "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22%3A%22Fl1LmxG_f0poD7w1ycZqnw%22%7D&t=1715170975269&appid=activities_platform&client=android&clientVersion=6.24.0&loginType=2&loginWQBiz=wegame&h5st=null&build=22779&screen=393*873&networkType=wifi&eufv=1&cthr=1";
      _0x5e9c1b = "get";
      break;
    case "startTask":
      const _0x4f4f50 = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 1,
        version: 1
      };
      _0x3ba49a = _0x4f4f50;
      _0x4dd293 = "89db2";
      _0x1006df = "wanyiwan_do_task";
      break;
    case "endTask":
      const _0x12b699 = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 0,
        version: 1
      };
      _0x3ba49a = _0x12b699;
      _0x4dd293 = "89db2";
      _0x1006df = "wanyiwan_do_task";
      break;
    case "award":
      const _0x316afc = {
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        version: 1
      };
      _0x3ba49a = _0x316afc;
      _0x1006df = "wanyiwan_task_receive_award";
      break;
    case "wanyiwan_assist":
      const _0x325722 = {
        inviteCode: $.itemId,
        version: 1
      };
      _0x3ba49a = _0x325722;
      _0x4dd293 = "ba505";
      _0x1006df = "wanyiwan_assist";
      break;
    case "turnHappyHome":
      _0xba249e = "https://api.m.jd.com/api";
      const _0x2264e3 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x3ba49a = _0x2264e3;
      _0x10a998 = "activities_platform";
      _0x1006df = "turnHappyHome";
      break;
    case "turnHappyDouble":
      _0xba249e = "https://api.m.jd.com/api";
      _0x3ba49a = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ",
        turnNum: parseInt(bdy_0x30dd53)
      };
      _0x4dd293 = "614f1";
      _0x10a998 = "activities_platform";
      _0x1006df = "turnHappyDouble";
      break;
    case "turnHappyReceive":
      _0xba249e = "https://api.m.jd.com/api";
      const _0x400134 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x3ba49a = _0x400134;
      _0x4dd293 = "25fac";
      _0x10a998 = "activities_platform";
      _0x1006df = "turnHappyReceive";
      break;
    case "superRedBagHome":
      _0xba249e = "https://api.m.jd.com/api";
      const _0x2092f5 = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x3ba49a = _0x2092f5;
      _0x4dd293 = "5be1b";
      _0x10a998 = "activity_platform_se";
      _0x1006df = "superRedBagHome";
      break;
    case "superRedBagDraw":
      _0xba249e = "https://api.m.jd.com/api";
      const _0xa894bc = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x3ba49a = _0xa894bc;
      _0x4dd293 = "89cfe";
      _0x10a998 = "activity_platform_se";
      _0x1006df = "superRedBagDraw";
      break;
    case "apCashWithDraw":
      _0xba249e = "https://api.m.jd.com/api";
      const _0x8d65de = {
        id: _0x475366[0].id,
        business: "superRedEnvelope",
        poolBaseId: _0x475366[0].poolBaseId,
        prizeGroupId: _0x475366[0].prizeGroupId,
        prizeBaseId: _0x475366[0].prizeBaseId,
        prizeType: 4,
        activityId: "2013"
      };
      const _0x55f23a = {
        businessSource: "NONE",
        base: _0x8d65de,
        linkId: "aE-1vg6_no2csxgXFuv3Kg",
        channel: "1"
      };
      _0x3ba49a = _0x55f23a;
      _0x4dd293 = "73bca";
      _0x10a998 = "activities_platform";
      _0x1006df = "apCashWithDraw";
      break;
    case "superRedBagList":
      _0xba249e = "http://api.m.jd.com/api";
      const _0x355c91 = {
        pageNum: _0x475366[0],
        pageSize: 100,
        linkId: "aE-1vg6_no2csxgXFuv3Kg",
        associateLinkId: "",
        business: "superRedEnvelope"
      };
      _0x3ba49a = _0x355c91;
      _0x4dd293 = "f2b1d";
      _0x10a998 = "activities_platform";
      _0x1006df = "superRedBagList";
      break;
    default:
      console.log("错误" + _0x37586e);
  }
  if (_0x4dd293) {
    let _0x202d87 = {
      appId: _0x4dd293,
      functionId: _0x1006df,
      body: _0x3ba49a,
      appid: _0x10a998,
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      t: Date.now(),
      ua: $.UA
    };
    _0x3ba49a = await bdy_0x375e6c.getbody(_0x202d87);
    if (!_0x3ba49a) {
      return;
    }
  } else {
    _0x3ba49a && (_0x3ba49a = "functionId=" + _0x1006df + "&body=" + encodeURIComponent(JSON.stringify(_0x3ba49a)) + "&t=" + Date.now() + "&appid=" + _0x10a998 + "&client=ios&" + $.UA.split(";")[2] + "&cthr=1&networkType=wifi");
  }
  let _0x2b1da4 = bdy_0x24000b(_0xba249e, _0x3ba49a);
  return new Promise(async _0x52b508 => {
    $["d" + _0x5e9c1b](_0x2b1da4, async (_0xee20d6, _0x3c5462, _0x263ad7) => {
      try {
        if (_0xee20d6) {
          if (_0x3c5462 && typeof _0x3c5462.statusCode != "undefined") {
            if (_0x3c5462.statusCode == 493) {
              if (bdy_0x5635a9 < 6) {
                bdy_0x5635a9++;
                await bdy_0x56ad1f(_0x37586e);
                return;
              }
              console.log("ip可能被限制，过10分钟后再执行脚本\n");
              $.outFlag = true;
            }
          }
          console.log("" + $.toStr(_0xee20d6, _0xee20d6));
        } else {
          if (_0x263ad7.includes("doctype") && bdy_0x5635a9 < 6) {
            bdy_0x5635a9++;
            await bdy_0x56ad1f(_0x37586e);
            return;
          }
          bdy_0x5635a9 = 0;
          bdy_0x3dd129(_0x37586e, _0x263ad7);
        }
      } catch (_0x47bbbe) {
        console.log(_0x47bbbe, _0x3c5462);
      } finally {
        _0x52b508();
      }
    });
  });
}
function bdy_0x4aed52(_0x383597) {
  let _0x2dc98a = "";
  switch (type) {
    case [_0x2dc98a]:
      const _0x458ce5 = {
        ed: ed
      };
      _0xf1f6le = _0x458ce5;
      break;
    case [_0x2dc98a]:
      const _0x50c909 = {
        bd: bd
      };
      _0xf1f6lc = _0x50c909;
      break;
    case [_0x2dc98a]:
      const _0x272dd6 = {
        ed: ed
      };
      _0xf1f6lf = _0x272dd6;
      break;
    case [_0x2dc98a]:
      const _0x3e9790 = {
        ed: ed
      };
      _0xf1f6lg = _0x3e9790;
      break;
    case [_0x2dc98a]:
      const _0x3adc22 = {
        ed: ed
      };
      _0xf1f6lv = _0x3adc22;
      break;
  }
}
async function bdy_0x3dd129(_0x1275e2, _0x376b46) {
  let _0x1483d4 = "";
  try {
    _0x1483d4 = JSON.parse(_0x376b46);
  } catch (_0x3c0397) {
    console.log(_0x1275e2 + " 执行任务异常");
  }
  try {
    switch (_0x1275e2) {
      case "award":
        _0x1483d4.code == 0 ? _0x1483d4.data.bizCode == 0 ? console.log("任务完成，获得" + _0x1483d4.data.result.rewardCount + "奖票 🎫") : console.log(_0x1483d4.data.bizMsg) : console.log(_0x1483d4.message);
        break;
      case "wanyiwan_sign":
        _0x1483d4.code == 0 ? _0x1483d4.data.bizCode == 0 ? console.log("签到成功,获得" + _0x1483d4.data.result.getScore + "奖票 🎫") : console.log(_0x1483d4.data.bizMsg) : console.log(_0x1483d4.message);
        break;
      case "wanyiwan_assist":
        if (_0x1483d4.code == 0) {
          if (_0x1483d4.data.bizCode == 0) {
            console.log("✔️ 助力成功");
            $.nonum = true;
          } else {
            if (_0x1483d4.data.bizMsg.includes("太多人") || _0x1483d4.data.bizMsg.includes("重复")) {
              console.log("❌", _0x1483d4.data.bizMsg);
              $.nonum = true;
            } else {
              _0x1483d4.data.bizMsg.includes("已经完成") ? (console.log("❌", _0x1483d4.data.bizMsg), $.fullId.push($.itemId)) : console.log("❌", _0x1483d4.data.bizMsg);
            }
          }
        } else {
          console.log(_0x1483d4.message);
        }
        break;
      case "wanyiwan_home":
        if (_0x1483d4.code == 0) {
          if (_0x1483d4.data.bizCode == 0) {
            _0x1483d4.data.result.popWindows.length != 0 && console.log("获得新手奖励：", _0x1483d4.data.result.popWindows[0].getScore, "奖票 🎫");
            console.log("当前奖票总量：" + _0x1483d4.data.result.score + " 🎫");
            $.isLogin = _0x1483d4.data?.["result"]?.["isLogin"];
            $.taskList = _0x1483d4.data?.["result"]?.["taskBoard"] || [];
            $.signstatus = _0x1483d4.data?.["result"]?.["signBoard"]?.["status"] || 0;
          } else {
            console.log(_0x1483d4.data.bizMsg);
          }
        } else {
          console.log(_0x1483d4.message);
        }
        break;
      case "superRedBagList":
        _0x1483d4.success ? $.bagList = _0x1483d4.data.items || [] : console.log(_0x1483d4.errMsg);
        break;
      case "apCashWithDraw":
        if (_0x1483d4.code == 0) {
          if (_0x1483d4.data.message.indexOf("待发放") > -1) {
            console.log(_0x1483d4.data.message);
            $.txfail = true;
          } else {
            if (_0x1483d4.data.message.includes("上限")) {
              console.log(_0x1483d4.data.message);
              $.txfail = false;
              $.failnum++;
            } else {
              if (_0x1483d4.data.message.includes("提现中")) {
                console.log("提现成功");
                $.txfail = false;
                $.failnum++;
              } else {
                if (_0x1483d4.data.message.includes("其他pin")) {
                  console.log(_0x1483d4.data.message);
                  $.buti = true;
                } else {
                  _0x1483d4.data.message.includes("绑定") ? (console.log(_0x1483d4.data.message), $.buti = true) : (console.log(_0x1483d4.data.message), $.txfail = false, $.failnum++);
                }
              }
            }
          }
        } else {
          console.log(_0x1483d4.errMsg);
        }
        break;
      case "superRedBagHome":
        if (_0x1483d4.success) {
          $.sceneStatus = _0x1483d4.data.sceneStatus;
          $.nextLeftTime = _0x1483d4.data.nextLeftTime;
        } else {
          console.log(_0x1483d4.errMsg);
        }
        break;
      case "superRedBagDraw":
        if (_0x1483d4.success) {
          $.shakeLeftTime = _0x1483d4.data.shakeLeftTime;
          const {
            prizeDrawVo = ""
          } = _0x1483d4.data;
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
                const _0x4c2b70 = {
                  id: prizeDrawVo.id,
                  poolBaseId: 41486,
                  prizeGroupId: prizeDrawVo.prizeGroupId,
                  prizeBaseId: prizeDrawVo.prizeBaseId,
                  prizeType: prizeDrawVo.prizeType,
                  amount: prizeDrawVo.amount
                };
                $.cashList.push(_0x4c2b70);
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
            console.log(_0x376b46);
          }
        } else {
          console.log(_0x1483d4.errMsg);
        }
        break;
      case "startTask":
      case "turnHappyReceive":
      case "endTask":
        break;
      default:
        console.log(_0x1275e2 + " -> " + _0x376b46);
    }
    typeof _0x1483d4 == "object" && _0x1483d4.errorMessage && _0x1483d4.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0x1dc2f1) {
    console.log(_0x1275e2 + " " + _0x1dc2f1);
  }
}
function bdy_0x24000b(_0x2cbf9f, _0x4bbf9c) {
  let _0x1a333e = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    Cookie: bdy_0x3565ca,
    "User-Agent": $.UA
  };
  const _0x221a62 = {
    url: _0x2cbf9f,
    headers: _0x1a333e,
    timeout: 30000,
    ...(_0x4bbf9c ? {
      body: _0x4bbf9c
    } : {})
  };
  return _0x221a62;
}
async function bdy_0x3928e6() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0x3b00b0(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0x3b00b0(_0x4d9700) {
  _0x4d9700 = _0x4d9700 || 32;
  let _0x489fbf = "abcdef0123456789",
    _0x40c4cf = _0x489fbf.length,
    _0x14fe24 = "";
  for (i = 0; i < _0x4d9700; i++) {
    _0x14fe24 += _0x489fbf.charAt(Math.floor(Math.random() * _0x40c4cf));
  }
  return _0x14fe24;
}
function bdy_0x3d14f6(_0x2d5e3f) {
  if (typeof _0x2d5e3f == "string") {
    try {
      return JSON.parse(_0x2d5e3f);
    } catch (_0x4b2afc) {
      console.log(_0x4b2afc);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function bdy_0x3785ae() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x209ed2 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x823960 = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    $.shopactivityId == "" && delete _0x823960.activityId;
    let _0x105f2d = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x823960,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x823960 = await dyy.getbody(_0x105f2d);
    const _0x4ad69e = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x3565ca,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x13bc1d = {
      url: "https://api.m.jd.com/client.action?" + _0x823960 + "&uuid=88888",
      headers: _0x4ad69e,
      timeout: 30000
    };
    $.dget(_0x13bc1d, async (_0x35b847, _0x1ffc69, _0x5c8fdb) => {
      try {
        _0x5c8fdb = _0x5c8fdb && _0x5c8fdb.match(/jsonp_.*?\((.*?)\);/) && _0x5c8fdb.match(/jsonp_.*?\((.*?)\);/)[1] || _0x5c8fdb;
        let _0x9c573b = $.toObj(_0x5c8fdb, _0x5c8fdb);
        if (_0x9c573b && typeof _0x9c573b == "object") {
          if (_0x9c573b && _0x9c573b.success === true) {
            console.log("    " + _0x9c573b.message);
            $.errorJoinShop = _0x9c573b.message;
            if (_0x9c573b.result && _0x9c573b.result.giftInfo) {
              for (let _0x2104a3 of _0x9c573b.result.giftInfo.giftList) {
                console.log("入会获得:" + _0x2104a3.discountString + _0x2104a3.prizeName + _0x2104a3.secondLineDesc);
              }
            }
          } else {
            _0x9c573b && typeof _0x9c573b == "object" && _0x9c573b.message ? ($.errorJoinShop = _0x9c573b.message, console.log("" + (_0x9c573b.message || ""))) : console.log(_0x5c8fdb);
          }
        } else {
          console.log(_0x5c8fdb);
        }
      } catch (_0x31a135) {
        $.logErr(_0x31a135, _0x1ffc69);
      } finally {
        _0x209ed2();
      }
    });
  });
}
async function bdy_0x2bc846() {
  return new Promise(async _0x5c0ade => {
    let _0x41ef27 = {
      venderId: $.joinVenderId,
      payUpShop: true,
      queryVersion: "10.5.2",
      appid: "ef79a",
      needSecurity: true,
      bizId: "shop_view_app",
      channel: 406
    };
    let _0x2a7e10 = {
      appId: "ef79a",
      fn: "getShopOpenCardInfo",
      body: _0x41ef27,
      apid: "jd_shop_member",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x41ef27 = await dyy.getbody(_0x2a7e10);
    const _0x593181 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x3565ca,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    const _0x5b2ba9 = {
      url: "https://api.m.jd.com/client.action?" + _0x41ef27 + "&uuid=88888",
      headers: _0x593181,
      timeout: 60000
    };
    $.get(_0x5b2ba9, async (_0x285d3e, _0x559e77, _0x13b85c) => {
      try {
        _0x13b85c = _0x13b85c && _0x13b85c.match(/jsonp_.*?\((.*?)\);/) && _0x13b85c.match(/jsonp_.*?\((.*?)\);/)[1] || _0x13b85c;
        let _0x480318 = $.toObj(_0x13b85c, _0x13b85c);
        _0x480318 && typeof _0x480318 == "object" ? _0x480318 && _0x480318.success == true && (console.log("去加入 -> " + (_0x480318.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x480318.result[0].interestsRuleList && _0x480318.result[0].interestsRuleList[0] && _0x480318.result[0].interestsRuleList[0].interestsInfo && _0x480318.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x13b85c);
      } catch (_0x2c7c63) {
        $.logErr(_0x2c7c63, _0x559e77);
      } finally {
        _0x5c0ade();
      }
    });
  });
}
function bdy_0x4f0605(_0x3029e4, _0x2d50c5) {
  return Math.floor(Math.random() * (_0x2d50c5 - _0x3029e4)) + _0x3029e4;
}
function bdy_0x346a3d(_0x4e1e6e = +new Date()) {
  var _0x12f3dd = new Date(_0x4e1e6e + 28800000);
  return _0x12f3dd.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function bdy_0x54b880() {
  return new Promise(_0x2f8c6a => {
    const _0x3333e9 = {
      Cookie: bdy_0x3565ca,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x750a42 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x3333e9,
      timeout: 10000
    };
    $.get(_0x750a42, (_0x563e7d, _0x176be2, _0xb9355a) => {
      try {
        if (_0xb9355a) {
          _0xb9355a = JSON.parse(_0xb9355a);
          if (!(_0xb9355a.islogin === "1")) {
            _0xb9355a.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x7d51a5) {
        console.log(_0x7d51a5);
      } finally {
        _0x2f8c6a();
      }
    });
  });
}
function Env(o, t) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((r, i) => { s.call(this, t, (t, e, s) => { t ? i(t) : r(e) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.logLevels = { debug: 0, info: 1, warn: 2, error: 3 }, this.logLevelPrefixs = { debug: "[DEBUG] ", info: "[INFO] ", warn: "[WARN] ", error: "[ERROR] " }, this.logLevel = "info", this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } getEnv() { return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0 } isNode() { return "Node.js" === this.getEnv() } isQuanX() { return "Quantumult X" === this.getEnv() } isSurge() { return "Surge" === this.getEnv() } isLoon() { return "Loon" === this.getEnv() } isShadowrocket() { return "Shadowrocket" === this.getEnv() } isStash() { return "Stash" === this.getEnv() } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null, ...s) { try { return JSON.stringify(t, ...s) } catch { return e } } getjson(t, e) { let s = e; if (this.getdata(t)) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(r => { this.get({ url: t }, (t, e, s) => r(s)) }) } runScript(a, o) { return new Promise(r => { let t = this.getdata("@chavy_boxjs_userCfgs.httpapi"); t = t && t.replace(/\n/g, "").trim(); var e = (e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout")) ? +e : 20, [s, i] = (e = o && o.timeout ? o.timeout : e, t.split("@")); this.post({ url: `http://${i}/v1/scripting/evaluate`, body: { script_text: a, mock_type: "cron", timeout: e }, headers: { "X-Key": s, Accept: "*/*" }, timeout: e }, (t, e, s) => r(s)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; this.fs = this.fs || require("fs"), this.path = this.path || require("path"); var t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), r = !s && this.fs.existsSync(e); if (!s && !r) return {}; r = s ? t : e; try { return JSON.parse(this.fs.readFileSync(r)) } catch (t) { return {} } } writedata() { var t, e, s, r, i; this.isNode() && (this.fs = this.fs || require("fs"), this.path = this.path || require("path"), t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), r = !(s = this.fs.existsSync(t)) && this.fs.existsSync(e), i = JSON.stringify(this.data), !s && r ? this.fs.writeFileSync(e, i) : this.fs.writeFileSync(t, i)) } lodash_get(t, e, s) { let r = t; for (const t of e.replace(/\[(\d+)\]/g, ".$1").split(".")) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, r, e) { return Object(t) === t && ((r = Array.isArray(r) ? r : r.toString().match(/[^.[\]]+/g) || []).slice(0, -1).reduce((t, e, s) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(r[s + 1]) >> 0 == +r[s + 1] ? [] : {}, t)[r[r.length - 1]] = e), t } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { var [, s, r] = /^@(.*?)\.(.*?)$/.exec(t); if (s = s ? this.getval(s) : "") try { const t = JSON.parse(s); e = t ? this.lodash_get(t, r, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { var [, r, i] = /^@(.*?)\.(.*?)$/.exec(e), a = this.getval(r), a = r ? "null" === a ? null : a || "{}" : "{}"; try { const e = JSON.parse(a); this.lodash_set(e, i, t), s = this.setval(JSON.stringify(e), r) } catch (e) { this.lodash_set(a = {}, i, t), s = this.setval(JSON.stringify(a), r) } } else s = this.setval(t, e); return s } getval(t) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.read(t); case "Quantumult X": return $prefs.valueForKey(t); case "Node.js": return this.data = this.loaddata(), this.data[t]; default: return this.data && this.data[t] || null } } setval(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.write(t, e); case "Quantumult X": return $prefs.setValueForKey(t, e); case "Node.js": return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0; default: return this.data && this.data[e] || null } } initGotEnv(t) { this.got = this.got || require("got"), this.cktough = this.cktough || require("tough-cookie"), this.ckjar = this.ckjar || new this.cktough.CookieJar, t && (t.headers = t.headers || {}, t) && (t.headers = t.headers || {}, void 0 === t.headers.cookie) && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar) } tmout() { return new Promise((t, e) => { this.tmoutId = setTimeout(() => { this.prms.cancel(), e({ message: "timemout", response: "" }) }, 5e4) }) } get(t, a = () => { }) { switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t), this.prms = this.got(t).on("redirect", (t, e) => { try { var s; t.headers["set-cookie"] && ((s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString()) && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar) } catch (t) { this.logErr(t) } }), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } post(t, a = () => { }) { var e = t.method ? t.method.toLocaleLowerCase() : "post"; switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[e](t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": t.method = e, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t); var { url: s, ...r } = t; this.prms = this.got[e](s, r), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } time(t, e = null) { var s, r = { "M+": (e = e ? new Date(e) : new Date).getMonth() + 1, "d+": e.getDate(), "H+": e.getHours(), "m+": e.getMinutes(), "s+": e.getSeconds(), "q+": Math.floor((e.getMonth() + 3) / 3), S: e.getMilliseconds() }; for (s in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), r) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[s] : ("00" + r[s]).substr(("" + r[s]).length))); return t } queryStr(e) { let s = ""; for (const r in e) { let t = e[r]; null != t && "" !== t && ("object" == typeof t && (t = JSON.stringify(t)), s += `${r}=${t}&`) } return s = s.substring(0, s.length - 1) } msg(t = o, e = "", s = "", r = {}) { var i, a = r => { const { $open: t, $copy: e, $media: i, $mediaMime: a } = r; switch (typeof r) { case void 0: return r; case "string": switch (this.getEnv()) { case "Surge": case "Stash": default: return { url: r }; case "Loon": case "Shadowrocket": return r; case "Quantumult X": return { "open-url": r }; case "Node.js": return }case "object": switch (this.getEnv()) { case "Surge": case "Stash": case "Shadowrocket": default: var o = {}, s = r.openUrl || r.url || r["open-url"] || t; if (s && Object.assign(o, { action: "open-url", url: s }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(o, { action: "clipboard", text: s }), i) { let t, e, s; if (i.startsWith("http")) t = i; else if (i.startsWith("data:")) { const [r] = i.split(";"), [, a] = i.split(","); e = a, s = r.replace("data:", "") } else e = i, s = (t => { var e, s = { JVBERi0: "application/pdf", R0lGODdh: "image/gif", R0lGODlh: "image/gif", iVBORw0KGgo: "image/png", "/9j/": "image/jpg" }; for (e in s) if (0 === t.indexOf(e)) return s[e]; return null })(i); Object.assign(o, { "media-url": t, "media-base64": e, "media-base64-mime": a ?? s }) } return Object.assign(o, { "auto-dismiss": r["auto-dismiss"], sound: r.sound }), o; case "Loon": { const e = {}; (s = r.openUrl || r.url || r["open-url"] || t) && Object.assign(e, { openUrl: s }); var n = r.mediaUrl || r["media-url"]; return (n = i?.startsWith("http") ? i : n) && Object.assign(e, { mediaUrl: n }), console.log(JSON.stringify(e)), e } case "Quantumult X": { const a = {}; (o = r["open-url"] || r.url || r.openUrl || t) && Object.assign(a, { "open-url": o }); n = r["media-url"] || r.mediaUrl; return (n = i?.startsWith("http") ? i : n) && Object.assign(a, { "media-url": n }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(a, { "update-pasteboard": s }), console.log(JSON.stringify(a)), a } case "Node.js": return }default: return } }; if (!this.isMute) switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: $notification.post(t, e, s, a(r)); break; case "Quantumult X": $notify(t, e, s, a(r)); break; case "Node.js": }this.isMuteLog || ((i = ["", "==============📣系统通知📣=============="]).push(t), e && i.push(e), s && i.push(s), console.log(i.join("\n")), this.logs = this.logs.concat(i)) } debug(...t) { this.logLevels[this.logLevel] <= this.logLevels.debug && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.debug + t.map(t => t ?? String(t)).join(this.logSeparator))) } info(...t) { this.logLevels[this.logLevel] <= this.logLevels.info && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.info + t.map(t => t ?? String(t)).join(this.logSeparator))) } warn(...t) { this.logLevels[this.logLevel] <= this.logLevels.warn && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.warn + t.map(t => t ?? String(t)).join(this.logSeparator))) } error(...t) { this.logLevels[this.logLevel] <= this.logLevels.error && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.error + t.map(t => t ?? String(t)).join(this.logSeparator))) } log(...t) { 0 < t.length && (this.logs = [...this.logs, ...t]), console.log(t.map(t => t ?? String(t)).join(this.logSeparator)) } logErr(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: this.log("", `❗️${this.name}, 错误!`, t); break; case "Node.js": this.log("", `❗️${this.name}, 错误!`, void 0 !== t.message ? t.message : t) } } wait(e) { return new Promise(t => setTimeout(t, e)) } done(t = {}) { var e = ((new Date).getTime() - this.startTime) / 1e3; switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: $done(t); break; case "Node.js": process.exit(1) } } }(o, t) }