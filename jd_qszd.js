/*
11 6,17 * * * jd_qszd.js
*/

const $ = new Env('轻松赚豆');
const bdy_0x5f35fa = $.isNode() ? require("./sendNotify") : "",
  bdy_0x30b383 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x4c48cc = require("./function/dylanw");
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
let bdy_0x5a3fb6 = [],
  bdy_0x3864a8 = "",
  bdy_0x660772 = 0;
if ($.isNode()) {
  Object.keys(bdy_0x30b383).forEach(_0x15f425 => {
    bdy_0x5a3fb6.push(bdy_0x30b383[_0x15f425]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x5a3fb6 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x1a065c => _0x1a065c.cookie)].filter(_0x3cbdf0 => !!_0x3cbdf0);
}
!(async () => {
  if (!bdy_0x5a3fb6[0]) {
    const _0x1375cf = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x1375cf);
    return;
  }
  console.log("\n403严重，支持DY_PROXY");
  console.log("TG频道：https://t.me/dylan_jdpro");
  for (let _0x53e447 = 0; _0x53e447 < bdy_0x5a3fb6.length; _0x53e447++) {
    bdy_0x3864a8 = bdy_0x5a3fb6[_0x53e447];
    originCookie = bdy_0x5a3fb6[_0x53e447];
    if (bdy_0x3864a8) {
      $.UserName = decodeURIComponent(bdy_0x3864a8.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x3864a8.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x53e447 + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      $.bannum = 0;
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      bdy_0x5ba60f();
      await bdy_0x2cb539();
      if (!$.isLogin) {
        const _0x26c5a9 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x26c5a9);
        $.isNode() && (await bdy_0x5f35fa.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      await bdy_0x268868();
      if ($.outFlag) {
        return;
      }
    }
  }
})().catch(_0x42be5d => {
  return $.logErr(_0x42be5d);
}).finally(() => {
  return $.done();
});
async function bdy_0x268868() {
  try {
    await bdy_0x1ea8dc("pg_channel_page_data");
    await $.wait(1000);
    for (let _0x56ba5b of $.taskList) {
      switch (_0x56ba5b.code) {
        case "USER_BASE_INFO":
        case "TASK_RULE":
        case "ORDER_TASK_LIST":
        case "AD_COL_1":
          break;
        case "SIGN_ACT_INFO":
          console.log("\n去签到...");
          await bdy_0x1ea8dc("sign", _0x56ba5b.token, _0x56ba5b.id, _0x56ba5b.floorData.signActInfo.currSignCursor);
          await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
          break;
        case "LIMIT_TASK_LIST":
          _0x56ba5b.floorData.getHomeTaskInfo && _0x56ba5b.floorData.getHomeTaskInfo.beanShortTasks[0].taskStatus == 0 && (await bdy_0x1ea8dc("xianshi", _0x56ba5b.token, _0x56ba5b.floorData.getHomeTaskInfo.beanShortTasks[0].taskEncId), await $.wait(parseInt(Math.random() * 1000 + 2000, 10)));
          break;
        case "TASK":
          for (let _0x202a52 of _0x56ba5b.floorData.pgTaskListVO.taskInfoList) {
            $.runflag = false;
            if (_0x202a52.taskStatus == 3) {
              console.log(_0x202a52.name + "---已完成并领取奖励");
              continue;
            }
            $.taskEncId = _0x202a52.taskEncId;
            $.browseTrxId = _0x202a52.browseInfoVO?.["browsePageVOS"] ? _0x202a52.browseInfoVO.browsePageVOS[0].id : 0;
            if (_0x202a52.name.includes("信用卡")) {
              console.log("去做 " + _0x202a52.name);
              for (let _0xd3e856 of Array(10)) {
                await bdy_0x1ea8dc("taskReceive");
                if ($.runflag) {
                  break;
                }
                await $.wait(1000);
                await bdy_0x1ea8dc("taskFinish");
                await $.wait(1000);
                await bdy_0x1ea8dc("taskReward");
                await $.wait(2000);
              }
            } else {
              if (_0x202a52.taskStatus == 0) {
                console.log("去做 " + _0x202a52.name);
                await bdy_0x1ea8dc("taskReceive");
                await $.wait(1000);
                await bdy_0x1ea8dc("taskFinish");
                await $.wait(1000);
                await bdy_0x1ea8dc("taskReward");
              } else {
                _0x202a52.taskStatus == 2 && (console.log("去做 " + _0x202a52.name), await $.wait(1000), await bdy_0x1ea8dc("taskReward"));
              }
            }
            await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
          }
          break;
      }
    }
  } catch (_0x325d42) {
    console.log(_0x325d42);
  }
}
async function bdy_0x1ea8dc(_0x524671, _0x41f227, _0x2c0194, _0x3d1303) {
  if ($.outFlag) {
    return;
  }
  let _0x47c8b4 = "",
    _0x30f3f8,
    _0x72af87,
    _0x405360 = "POST";
  switch (_0x524671) {
    case "pg_channel_page_data":
      const _0x2ed436 = {
        token: "2752f370-f499-44cd-b024-7c8e881cf7fe",
        channel: "",
        upstreamChannel: "",
        launchChannel: "APP"
      };
      const _0x55d9b2 = {
        source: "hypdFloat",
        ubb_loc: "app.hy-page.float-ad.yz-float-ad",
        ubb_info: "eyJwIjoiYnRwIn0%3D"
      };
      const _0x9b474c = {
        paramData: _0x2ed436,
        argMap: _0x55d9b2,
        riskInformation: {}
      };
      _0x47c8b4 = _0x9b474c;
      _0x30f3f8 = "4646c";
      _0x72af87 = "pg_channel_page_data";
      break;
    case "pg_load_floor_data":
      const _0x386745 = {
        launchChannel: "APP",
        channel: ""
      };
      const _0x185d4e = {
        floorToken: "9d61d39e-5ced-490d-b9d0-86a4f652008d",
        argMap: _0x386745
      };
      _0x47c8b4 = _0x185d4e;
      _0x30f3f8 = "faef7";
      _0x72af87 = "pg_load_floor_data";
      break;
    case "taskReceive":
      const _0x3b1c29 = {
        launchChannel: "APP",
        channel: "",
        taskEncId: $.taskEncId
      };
      const _0xfb0712 = {
        floorToken: "9d61d39e-5ced-490d-b9d0-86a4f652008d",
        dataSourceCode: "taskReceive",
        argMap: _0x3b1c29
      };
      _0x47c8b4 = _0xfb0712;
      _0x30f3f8 = "a7c04";
      _0x72af87 = "pg_interact_interface_invoke";
      break;
    case "taskFinish":
      const _0x271080 = {
        floorToken: "9d61d39e-5ced-490d-b9d0-86a4f652008d",
        dataSourceCode: "taskFinish",
        argMap: {}
      };
      _0x271080.argMap.launchChannel = "APP";
      _0x271080.argMap.channel = "";
      _0x271080.argMap.taskEncId = $.taskEncId;
      _0x271080.argMap.extParamsStr = {};
      _0x271080.argMap.extParamsStr.browseTrxId = $.browseTrxId;
      _0x47c8b4 = _0x271080;
      _0x30f3f8 = "a7c04";
      _0x72af87 = "pg_interact_interface_invoke";
      break;
    case "taskReward":
      const _0x3ab729 = {
        launchChannel: "APP",
        channel: "",
        taskEncId: $.taskEncId
      };
      const _0x236334 = {
        floorToken: "9d61d39e-5ced-490d-b9d0-86a4f652008d",
        dataSourceCode: "taskReward",
        argMap: _0x3ab729
      };
      _0x47c8b4 = _0x236334;
      _0x30f3f8 = "a7c04";
      _0x72af87 = "pg_interact_interface_invoke";
      break;
    case "sign":
      const _0x2cc778 = {
        currSignCursor: _0x3d1303
      };
      const _0x425d7a = {
        floorToken: _0x41f227,
        dataSourceCode: "signIn",
        argMap: _0x2cc778,
        signActId: _0x2c0194,
        riskInformation: {}
      };
      _0x47c8b4 = _0x425d7a;
      _0x30f3f8 = "a7c04";
      _0x72af87 = "pg_interact_interface_invoke";
      break;
    case "xianshi":
      const _0xc748bc = {
        channel: "",
        launchChannel: "APP",
        taskEncId: _0x2c0194
      };
      const _0x49eed6 = {
        floorToken: _0x41f227,
        dataSourceCode: "taskReceive",
        argMap: _0xc748bc
      };
      _0x47c8b4 = _0x49eed6;
      _0x30f3f8 = "a7c04";
      _0x72af87 = "pg_interact_interface_invoke";
      break;
    default:
      console.log("错误" + _0x524671);
  }
  if (_0x30f3f8) {
    let _0x18d460 = {
      appId: _0x30f3f8,
      fn: _0x72af87,
      body: _0x47c8b4,
      apid: "jd-bean-task",
      ver: $.UA.split(";")[2],
      cl: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
    _0x47c8b4 = await bdy_0x4c48cc.getbody(_0x18d460);
    if (!_0x47c8b4) {
      return;
    }
  }
  let _0x3e0685 = bdy_0x2da7ab(_0x47c8b4, _0x405360);
  return new Promise(async _0x574015 => {
    $.dpost(_0x3e0685, async (_0x344a57, _0x4a1920, _0x542ebc) => {
      try {
        if (_0x344a57) {
          if (_0x4a1920 && typeof _0x4a1920.statusCode != "undefined") {
            if (_0x4a1920.statusCode == 403) {
              $.bannum++;
              if ($.bannum > 4) {
                console.log("ip被限制，过10分钟后再执行脚本\n");
                $.outFlag = true;
              }
            }
          }
          console.log("" + $.toStr(_0x344a57, _0x344a57));
        } else {
          if (_0x542ebc.includes("doctype") && bdy_0x660772 < 6) {
            bdy_0x660772++;
            await bdy_0x1ea8dc(_0x524671);
            return;
          }
          bdy_0x660772 = 0;
          bdy_0x520032(_0x524671, _0x542ebc);
        }
      } catch (_0x35720b) {
        console.log(_0x35720b, _0x4a1920);
      } finally {
        _0x574015();
      }
    });
  });
}
async function bdy_0x520032(_0x1e28ed, _0x5536f8) {
  let _0x4b4986 = "";
  try {
    _0x4b4986 = JSON.parse(_0x5536f8);
  } catch (_0x446c92) {
    console.log(_0x1e28ed + " 执行任务异常");
  }
  try {
    switch (_0x1e28ed) {
      case "pg_channel_page_data":
        if (_0x4b4986.success) {
          $.taskList = _0x4b4986.data?.["floorInfoList"] || [];
        }
        break;
      case "taskReward":
        if (_0x4b4986.success) {
          _0x4b4986.data.beanInfo && console.log("京豆 +" + _0x4b4986.data.beanInfo.beanNum + " 🥔");
        }
        break;
      case "taskReceive":
        if (!_0x4b4986.success) {
          if (_0x5536f8.includes("不足")) {
            $.runflag = true;
          }
        }
        break;
      case "sign":
        if (_0x4b4986.success) {
          console.log("签到成功!");
          if (_0x4b4986.data.rewardVos.length > 0) {
            for (let _0x507daf of _0x4b4986.data.rewardVos) {
              _0x507daf.jingBeanVo && console.log("京豆 +" + _0x507daf.jingBeanVo.beanNum + "🥔");
            }
          }
        } else {
          console.log("失败: " + _0x4b4986.message);
        }
        break;
      case "taskFinish":
      case "xianshi":
        break;
      default:
        console.log(_0x1e28ed + " -> " + _0x5536f8);
    }
    typeof _0x4b4986 == "object" && _0x4b4986.errorMessage && _0x4b4986.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0x197537) {
    console.log(_0x1e28ed + " " + _0x197537);
  }
}
function bdy_0x2da7ab(_0x347790, _0x5538d9 = "POST") {
  let _0x4c9493 = "http://api.m.jd.com/";
  const _0x1a03b3 = {
    Accept: "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/x-www-form-urlencoded",
    Origin: "https://jdbeantask-pro.pf.jd.com",
    Referer: "https://jdbeantask-pro.pf.jd.com/",
    Cookie: bdy_0x3864a8,
    "User-Agent": $.UA
  };
  const _0x363ba0 = {
    url: _0x4c9493,
    method: _0x5538d9,
    headers: _0x1a03b3,
    body: _0x347790,
    timeout: 30000
  };
  return _0x363ba0;
}
async function bdy_0x5ba60f() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0x31b48d(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0x31b48d(_0x3a2355) {
  _0x3a2355 = _0x3a2355 || 32;
  let _0x30d759 = "abcdef0123456789",
    _0x4901dd = _0x30d759.length,
    _0xbcb445 = "";
  for (i = 0; i < _0x3a2355; i++) {
    _0xbcb445 += _0x30d759.charAt(Math.floor(Math.random() * _0x4901dd));
  }
  return _0xbcb445;
}
function bdy_0x333799(_0x144703) {
  if (typeof _0x144703 == "string") {
    try {
      return JSON.parse(_0x144703);
    } catch (_0x33bdd8) {
      console.log(_0x33bdd8);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function bdy_0x260488() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x1f7740 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    const _0x109f11 = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    let _0x2f85a6 = _0x109f11;
    $.shopactivityId == "" && delete _0x2f85a6.activityId;
    const _0x12277b = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x2f85a6,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x2f85a6 = await dyy.getbody(_0x12277b);
    const _0x3ac605 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x3864a8,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x150ecf = {
      url: "https://api.m.jd.com/client.action?" + _0x2f85a6 + "&uuid=88888",
      headers: _0x3ac605,
      timeout: 30000
    };
    $.dget(_0x150ecf, async (_0x3fd6a1, _0x2d78a1, _0x4d936e) => {
      try {
        _0x4d936e = _0x4d936e && _0x4d936e.match(/jsonp_.*?\((.*?)\);/) && _0x4d936e.match(/jsonp_.*?\((.*?)\);/)[1] || _0x4d936e;
        let _0x51d60f = $.toObj(_0x4d936e, _0x4d936e);
        if (_0x51d60f && typeof _0x51d60f == "object") {
          if (_0x51d60f && _0x51d60f.success === true) {
            console.log("    " + _0x51d60f.message);
            $.errorJoinShop = _0x51d60f.message;
            if (_0x51d60f.result && _0x51d60f.result.giftInfo) {
              for (let _0x396de3 of _0x51d60f.result.giftInfo.giftList) {
                console.log("入会获得:" + _0x396de3.discountString + _0x396de3.prizeName + _0x396de3.secondLineDesc);
              }
            }
          } else {
            _0x51d60f && typeof _0x51d60f == "object" && _0x51d60f.message ? ($.errorJoinShop = _0x51d60f.message, console.log("" + (_0x51d60f.message || ""))) : console.log(_0x4d936e);
          }
        } else {
          console.log(_0x4d936e);
        }
      } catch (_0x1c9804) {
        $.logErr(_0x1c9804, _0x2d78a1);
      } finally {
        _0x1f7740();
      }
    });
  });
}
async function bdy_0x817762() {
  return new Promise(async _0x2171a3 => {
    const _0x3e9c28 = {
      venderId: $.joinVenderId,
      payUpShop: true,
      queryVersion: "10.5.2",
      appid: "ef79a",
      needSecurity: true,
      bizId: "shop_view_app",
      channel: 406
    };
    let _0x2ab2da = _0x3e9c28;
    const _0x4f2f2b = {
      appId: "ef79a",
      fn: "getShopOpenCardInfo",
      body: _0x2ab2da,
      apid: "jd_shop_member",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x2ab2da = await dyy.getbody(_0x4f2f2b);
    const _0x374eee = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x3864a8,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    const _0x3eef93 = {
      url: "https://api.m.jd.com/client.action?" + _0x2ab2da + "&uuid=88888",
      headers: _0x374eee,
      timeout: 60000
    };
    $.get(_0x3eef93, async (_0x4519a5, _0x3097f7, _0x482487) => {
      try {
        _0x482487 = _0x482487 && _0x482487.match(/jsonp_.*?\((.*?)\);/) && _0x482487.match(/jsonp_.*?\((.*?)\);/)[1] || _0x482487;
        let _0x20292d = $.toObj(_0x482487, _0x482487);
        _0x20292d && typeof _0x20292d == "object" ? _0x20292d && _0x20292d.success == true && (console.log("去加入 -> " + (_0x20292d.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x20292d.result[0].interestsRuleList && _0x20292d.result[0].interestsRuleList[0] && _0x20292d.result[0].interestsRuleList[0].interestsInfo && _0x20292d.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x482487);
      } catch (_0xca18b2) {
        $.logErr(_0xca18b2, _0x3097f7);
      } finally {
        _0x2171a3();
      }
    });
  });
}
function bdy_0x56fcd7(_0x356489, _0x353c1d) {
  return Math.floor(Math.random() * (_0x353c1d - _0x356489)) + _0x356489;
}
function bdy_0x46f166(_0x3a665b = +new Date()) {
  var _0x12a3be = new Date(_0x3a665b + 28800000);
  return _0x12a3be.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function bdy_0x2cb539() {
  return new Promise(_0x34cb3a => {
    const _0x596435 = {
      Cookie: bdy_0x3864a8,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x38809e = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x596435,
      timeout: 10000
    };
    $.get(_0x38809e, (_0x23910b, _0x4d0cc3, _0x4a0fec) => {
      try {
        if (_0x4a0fec) {
          _0x4a0fec = JSON.parse(_0x4a0fec);
          if (!(_0x4a0fec.islogin === "1")) {
            _0x4a0fec.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x5df6eb) {
        console.log(_0x5df6eb);
      } finally {
        _0x34cb3a();
      }
    });
  });
}
function Env(o,t){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((r,i)=>{s.call(this,t,(t,e,s)=>{t?i(t):r(e)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.logLevels={debug:0,info:1,warn:2,error:3},this.logLevelPrefixs={debug:"[DEBUG] ",info:"[INFO] ",warn:"[WARN] ",error:"[ERROR] "},this.logLevel="info",this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null,...s){try{return JSON.stringify(t,...s)}catch{return e}}getjson(t,e){let s=e;if(this.getdata(t))try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(r=>{this.get({url:t},(t,e,s)=>r(s))})}runScript(a,o){return new Promise(r=>{let t=this.getdata("@chavy_boxjs_userCfgs.httpapi");t=t&&t.replace(/\n/g,"").trim();var e=(e=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"))?+e:20,[s,i]=(e=o&&o.timeout?o.timeout:e,t.split("@"));this.post({url:`http://${i}/v1/scripting/evaluate`,body:{script_text:a,mock_type:"cron",timeout:e},headers:{"X-Key":s,Accept:"*/*"},timeout:e},(t,e,s)=>r(s))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};this.fs=this.fs||require("fs"),this.path=this.path||require("path");var t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),r=!s&&this.fs.existsSync(e);if(!s&&!r)return{};r=s?t:e;try{return JSON.parse(this.fs.readFileSync(r))}catch(t){return{}}}writedata(){var t,e,s,r,i;this.isNode()&&(this.fs=this.fs||require("fs"),this.path=this.path||require("path"),t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),r=!(s=this.fs.existsSync(t))&&this.fs.existsSync(e),i=JSON.stringify(this.data),!s&&r?this.fs.writeFileSync(e,i):this.fs.writeFileSync(t,i))}lodash_get(t,e,s){let r=t;for(const t of e.replace(/\[(\d+)\]/g,".$1").split("."))if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,r,e){return Object(t)===t&&((r=Array.isArray(r)?r:r.toString().match(/[^.[\]]+/g)||[]).slice(0,-1).reduce((t,e,s)=>Object(t[e])===t[e]?t[e]:t[e]=Math.abs(r[s+1])>>0==+r[s+1]?[]:{},t)[r[r.length-1]]=e),t}getdata(t){let e=this.getval(t);if(/^@/.test(t)){var[,s,r]=/^@(.*?)\.(.*?)$/.exec(t);if(s=s?this.getval(s):"")try{const t=JSON.parse(s);e=t?this.lodash_get(t,r,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){var[,r,i]=/^@(.*?)\.(.*?)$/.exec(e),a=this.getval(r),a=r?"null"===a?null:a||"{}":"{}";try{const e=JSON.parse(a);this.lodash_set(e,i,t),s=this.setval(JSON.stringify(e),r)}catch(e){this.lodash_set(a={},i,t),s=this.setval(JSON.stringify(a),r)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got||require("got"),this.cktough=this.cktough||require("tough-cookie"),this.ckjar=this.ckjar||new this.cktough.CookieJar,t&&(t.headers=t.headers||{},t)&&(t.headers=t.headers||{},void 0===t.headers.cookie)&&void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar)}tmout(){return new Promise((t,e)=>{this.tmoutId=setTimeout(()=>{this.prms.cancel(),e({message:"timemout",response:""})},5e4)})}get(t,a=()=>{}){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),t.params&&(t.url+="?"+this.queryStr(t.params)),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,e,s)=>{!t&&e&&(e.body=s,e.statusCode=e.status||e.statusCode,e.status=e.statusCode),a(t,e,s)});break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{var{statusCode:t,statusCode:e,headers:s,body:r,bodyBytes:i}=t;a(null,{status:t,statusCode:e,headers:s,body:r,bodyBytes:i},r,i)},t=>a(t&&t.error||"UndefinedError"));break;case"Node.js":this.initGotEnv(t),this.prms=this.got(t).on("redirect",(t,e)=>{try{var s;t.headers["set-cookie"]&&((s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString())&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar)}catch(t){this.logErr(t)}}),Promise.race([this.prms,this.tmout()]).then(t=>{var{statusCode:t,statusCode:e,headers:s,rawBody:r,body:i}=t;a(null,{status:t,statusCode:e,headers:s,rawBody:r,body:i},i),clearTimeout(this.tmoutId)},t=>{var{message:t,response:e}=t;clearTimeout(this.tmoutId),a(t,e,e&&e.body)})}}post(t,a=()=>{}){var e=t.method?t.method.toLocaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[e](t,(t,e,s)=>{!t&&e&&(e.body=s,e.statusCode=e.status||e.statusCode,e.status=e.statusCode),a(t,e,s)});break;case"Quantumult X":t.method=e,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{var{statusCode:t,statusCode:e,headers:s,body:r,bodyBytes:i}=t;a(null,{status:t,statusCode:e,headers:s,body:r,bodyBytes:i},r,i)},t=>a(t&&t.error||"UndefinedError"));break;case"Node.js":this.initGotEnv(t);var{url:s,...r}=t;this.prms=this.got[e](s,r),Promise.race([this.prms,this.tmout()]).then(t=>{var{statusCode:t,statusCode:e,headers:s,rawBody:r,body:i}=t;a(null,{status:t,statusCode:e,headers:s,rawBody:r,body:i},i),clearTimeout(this.tmoutId)},t=>{var{message:t,response:e}=t;clearTimeout(this.tmoutId),a(t,e,e&&e.body)})}}time(t,e=null){var s,r={"M+":(e=e?new Date(e):new Date).getMonth()+1,"d+":e.getDate(),"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(s in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[s]:("00"+r[s]).substr((""+r[s]).length)));return t}queryStr(e){let s="";for(const r in e){let t=e[r];null!=t&&""!==t&&("object"==typeof t&&(t=JSON.stringify(t)),s+=`${r}=${t}&`)}return s=s.substring(0,s.length-1)}msg(t=o,e="",s="",r={}){var i,a=r=>{const{$open:t,$copy:e,$media:i,$mediaMime:a}=r;switch(typeof r){case void 0:return r;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:r};case"Loon":case"Shadowrocket":return r;case"Quantumult X":return{"open-url":r};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:var o={},s=r.openUrl||r.url||r["open-url"]||t;if(s&&Object.assign(o,{action:"open-url",url:s}),(s=r["update-pasteboard"]||r.updatePasteboard||e)&&Object.assign(o,{action:"clipboard",text:s}),i){let t,e,s;if(i.startsWith("http"))t=i;else if(i.startsWith("data:")){const[r]=i.split(";"),[,a]=i.split(",");e=a,s=r.replace("data:","")}else e=i,s=(t=>{var e,s={JVBERi0:"application/pdf",R0lGODdh:"image/gif",R0lGODlh:"image/gif",iVBORw0KGgo:"image/png","/9j/":"image/jpg"};for(e in s)if(0===t.indexOf(e))return s[e];return null})(i);Object.assign(o,{"media-url":t,"media-base64":e,"media-base64-mime":a??s})}return Object.assign(o,{"auto-dismiss":r["auto-dismiss"],sound:r.sound}),o;case"Loon":{const e={};(s=r.openUrl||r.url||r["open-url"]||t)&&Object.assign(e,{openUrl:s});var n=r.mediaUrl||r["media-url"];return(n=i?.startsWith("http")?i:n)&&Object.assign(e,{mediaUrl:n}),console.log(JSON.stringify(e)),e}case"Quantumult X":{const a={};(o=r["open-url"]||r.url||r.openUrl||t)&&Object.assign(a,{"open-url":o});n=r["media-url"]||r.mediaUrl;return(n=i?.startsWith("http")?i:n)&&Object.assign(a,{"media-url":n}),(s=r["update-pasteboard"]||r.updatePasteboard||e)&&Object.assign(a,{"update-pasteboard":s}),console.log(JSON.stringify(a)),a}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(t,e,s,a(r));break;case"Quantumult X":$notify(t,e,s,a(r));break;case"Node.js":}this.isMuteLog||((i=["","==============📣系统通知📣=============="]).push(t),e&&i.push(e),s&&i.push(s),console.log(i.join("\n")),this.logs=this.logs.concat(i))}debug(...t){this.logLevels[this.logLevel]<=this.logLevels.debug&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.debug+t.map(t=>t??String(t)).join(this.logSeparator)))}info(...t){this.logLevels[this.logLevel]<=this.logLevels.info&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.info+t.map(t=>t??String(t)).join(this.logSeparator)))}warn(...t){this.logLevels[this.logLevel]<=this.logLevels.warn&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.warn+t.map(t=>t??String(t)).join(this.logSeparator)))}error(...t){this.logLevels[this.logLevel]<=this.logLevels.error&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.error+t.map(t=>t??String(t)).join(this.logSeparator)))}log(...t){0<t.length&&(this.logs=[...this.logs,...t]),console.log(t.map(t=>t??String(t)).join(this.logSeparator))}logErr(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️${this.name}, 错误!`,t);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,void 0!==t.message?t.message:t)}}wait(e){return new Promise(t=>setTimeout(t,e))}done(t={}){var e=((new Date).getTime()-this.startTime)/1e3;switch(this.log("",`🔔${this.name}, 结束! 🕛 ${e} 秒`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(o,t)}