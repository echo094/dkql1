/*
45 10 * * * jd_gghb_draw.js
*/

const $ = new Env('刮刮红包—刮奖');
const bdy_0x349791 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x5f0e61 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x3e575e = require("./function/dylans");
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
let bdy_0x2afea6 = [],
  bdy_0x2954a4 = "",
  bdy_0x338f47 = 0;
if ($.isNode()) {
  Object.keys(bdy_0x349791).forEach(_0x439166 => {
    bdy_0x2afea6.push(bdy_0x349791[_0x439166]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x2afea6 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x3cc33b => _0x3cc33b.cookie)].filter(_0x52a7f2 => !!_0x52a7f2);
}
!(async () => {
  if (!bdy_0x2afea6[0]) {
    const _0x5c981f = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x5c981f);
    return;
  }
  console.log("当前版本：20240528");
  console.log("问题建议：https://t.me/dylan_jdpro");
  for (let _0x3b41da = 0; _0x3b41da < bdy_0x2afea6.length; _0x3b41da++) {
    bdy_0x2954a4 = bdy_0x2afea6[_0x3b41da];
    originCookie = bdy_0x2afea6[_0x3b41da];
    if (bdy_0x2954a4) {
      $.UserName = decodeURIComponent(bdy_0x2954a4.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x2954a4.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x3b41da + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      $.isban = false;
      $.hasRisk = false;
      $.jkflag = false;
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      bdy_0x59c203();
      await bdy_0x2798f9();
      if (!$.isLogin) {
        const _0x44b412 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x44b412);
        $.isNode() && (await bdy_0x5f0e61.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      await bdy_0x3175a3();
      if ($.outFlag) {
        break;
      }
    }
  }
})().catch(_0x25fd1f => {
  return $.logErr(_0x25fd1f);
}).finally(() => {
  return $.done();
});
async function bdy_0x3175a3() {
  try {
    await bdy_0xe2de87("jx_party_home");
    $.ktx && (console.log("\n进度100%，去领红包啦..."), await bdy_0xe2de87("jx_party_receive"));
    await bdy_0xe2de87("jx_party_mapalbum");
    $.jkflag && (console.log("\n集卡完成，去领18.8红包..."), await bdy_0xe2de87("jx_party_mapalbum_receive"));
    await bdy_0xe2de87("jx_party_task_list");
    $.taskList.length != 0 && console.log("\n去做任务...");
    for (let _0x33e956 of $.taskList.taskList) {
      if (_0x33e956.completionFlag) {
        console.log(_0x33e956.assignmentName + "---已完成");
        continue;
      }
      if (_0x33e956.assignmentName.includes("购买") || _0x33e956.assignmentName.includes("会员")) {
        continue;
      }
      console.log("去做  " + _0x33e956.assignmentName);
      let _0x200daa = _0x33e956.ext;
      $.assignmentType = _0x33e956.assignmentType;
      $.assignmentId = _0x33e956.encryptAssignmentId;
      $.waitDuration = _0x200daa.waitDuration || 0;
      $.extraType = _0x200daa.extraType || "";
      if ($.extraType != "") {
        for (let _0x9f9439 of _0x200daa[$.extraType]) {
          if (_0x9f9439.status == 2) {
            continue;
          }
          $.itemId = _0x9f9439.itemId;
          await bdy_0xe2de87("startTask");
          await $.wait(parseInt(Math.random() * 500 + $.waitDuration * 1000, 10));
          await bdy_0xe2de87("endTask");
        }
      } else {
        await bdy_0xe2de87("endTask");
      }
      await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    }
    console.log("\n去刮奖...");
    await bdy_0xe2de87("jx_party_lottery");
    if ($.lottyTimes > 0) {
      console.log("还有" + $.lottyTimes + "次刮奖机会，继续刮...");
      let _0x2df09d = $.lottyTimes;
      for (let _0x223ea4 = 0; _0x223ea4 < _0x2df09d; _0x223ea4++) {
        console.log("开始 " + (_0x223ea4 + 2) + "次刮...");
        await bdy_0xe2de87("jx_party_lottery");
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
      }
    }
    await bdy_0xe2de87("jx_party_mapalbum");
    $.jkflag && (console.log("\n集卡完成，去领18.8红包..."), await bdy_0xe2de87("jx_party_mapalbum_receive"));
    await $.wait(parseInt(Math.random() * 1000 + 3000, 10));
  } catch (_0x456a7d) {
    console.log(_0x456a7d);
  }
}
async function bdy_0xe2de87(_0x5eca90) {
  if ($.outFlag || $.isban) {
    return;
  }
  let _0x5c411d = "",
    _0x326c71,
    _0xd4aa68,
    _0x3d01d9 = "post",
    _0x138479 = "https://api.m.jd.com/",
    _0xcc9430 = "signed_wh5";
  switch (_0x5eca90) {
    case "jx_party_mapalbum_receive":
      _0x5c411d = {};
      _0xd4aa68 = "jx_party_mapalbum_receive";
      break;
    case "jx_party_home":
      const _0x2c14b8 = {
        areaInfo: "0_0_0_0",
        unpl: "",
        refresh: null,
        tUuid: "",
        skuId: null
      };
      _0x5c411d = _0x2c14b8;
      _0xd4aa68 = "jx_party_home";
      _0x326c71 = "a525b";
      break;
    case "jx_party_receive":
      const _0x4e79d0 = {
        deviceInfo: "{\"sdkToken\":\"\",\"jsToken\":\"\"}",
        unpl: "",
        qdPageId: "MO-J2011-1",
        mdClickId: "Babel_dev_other_11lotterystart"
      };
      _0x5c411d = _0x4e79d0;
      _0xd4aa68 = "jx_party_receive";
      break;
    case "jx_party_task_list":
      const _0x325637 = {
        lbsHide: "0",
        remindHide: "0"
      };
      _0x5c411d = _0x325637;
      _0xd4aa68 = "jx_party_task_list";
      break;
    case "apTaskList":
      _0x138479 = "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22%3A%22Fl1LmxG_f0poD7w1ycZqnw%22%7D&t=1715170975269&appid=activities_platform&client=android&clientVersion=6.24.0&loginType=2&loginWQBiz=wegame&h5st=null&build=22779&screen=393*873&networkType=wifi&eufv=1&cthr=1";
      _0x3d01d9 = "get";
      break;
    case "jx_party_mapalbum":
      _0x5c411d = {};
      _0xd4aa68 = "jx_party_mapalbum";
      break;
    case "jx_party_lottery":
      const _0x48f72c = {
        uemps: "0-0-999",
        areaInfo: "0_0_0_0",
        latitude: 0,
        longitude: 0,
        deviceInfo: "{\"sdkToken\":\"\",\"jsToken\":\"\"}",
        unpl: "",
        qdPageId: "MO-J2011-1",
        mdClickId: "Babel_dev_other_11lotterystart"
      };
      _0x5c411d = _0x48f72c;
      _0x326c71 = "a525b";
      _0xd4aa68 = "jx_party_lottery";
      break;
    case "startTask":
      const _0x12e0a5 = {
        itemId: $.itemId,
        actionType: 1,
        taskType: $.assignmentType,
        assignmentId: $.assignmentId,
        extraType: $.extraType
      };
      _0x5c411d = _0x12e0a5;
      _0x326c71 = "a525b";
      _0xd4aa68 = "jx_party_do_task";
      break;
    case "endTask":
      const _0x373bd9 = {
        itemId: $.itemId,
        actionType: 0,
        taskType: $.assignmentType,
        assignmentId: $.assignmentId,
        extraType: $.extraType
      };
      _0x5c411d = _0x373bd9;
      if ($.extraType == "") {
        delete _0x5c411d.extraType;
      }
      _0x326c71 = "a525b";
      _0xd4aa68 = "jx_party_do_task";
      break;
    default:
      console.log("错误" + _0x5eca90);
  }
  if (_0x326c71) {
    let _0x4b94ba = {
      appId: _0x326c71,
      functionId: _0xd4aa68,
      body: _0x5c411d,
      appid: _0xcc9430,
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      t: Date.now(),
      code: 1,
      xcr: $.fg,
      ua: $.UA
    };
    $.fg == 1 && ($.fg = 0);
    _0x5c411d = await bdy_0x3e575e.getbody(_0x4b94ba);
    if (!_0x5c411d) {
      return;
    }
  } else {
    _0x5c411d && (_0x5c411d = "functionId=" + _0xd4aa68 + "&body=" + encodeURIComponent(JSON.stringify(_0x5c411d)) + "&appid=" + _0xcc9430);
  }
  let _0x25164c = bdy_0x475921(_0x138479, _0x5c411d);
  return new Promise(async _0x9bc29a => {
    $["d" + _0x3d01d9](_0x25164c, async (_0x559a7a, _0x230364, _0x5ce6b8) => {
      try {
        if (_0x559a7a) {
          if (_0x230364 && typeof _0x230364.statusCode != "undefined") {
            if (_0x230364.statusCode == 493) {
              if (bdy_0x338f47 < 6) {
                bdy_0x338f47++;
                await bdy_0xe2de87(_0x5eca90);
                return;
              }
              console.log("ip可能被限制，过10分钟后再执行脚本\n");
              $.outFlag = true;
            }
          }
          console.log("" + $.toStr(_0x559a7a, _0x559a7a));
        } else {
          if (_0x5ce6b8.includes("doctype") && bdy_0x338f47 < 6) {
            bdy_0x338f47++;
            await bdy_0xe2de87(_0x5eca90);
            return;
          }
          bdy_0x338f47 = 0;
          bdy_0x1aa449(_0x5eca90, _0x5ce6b8);
        }
      } catch (_0x168101) {
        console.log(_0x168101, _0x230364);
      } finally {
        _0x9bc29a();
      }
    });
  });
}
switch ($.type) {
  case "nb":
    const bdy_0xc29e4b = {
      nb: nb
    };
    _0xf1f6le = bdy_0xc29e4b;
    break;
}
async function bdy_0x1aa449(_0x4bc4d5, _0x87da1f) {
  let _0x159625 = "";
  try {
    _0x159625 = JSON.parse(_0x87da1f);
  } catch (_0x3d3eca) {
    console.log(_0x4bc4d5 + " 执行任务异常");
  }
  try {
    switch (_0x4bc4d5) {
      case "apTaskList":
        _0x159625.code == 0 ? $.taskList = _0x159625.data || [] : ($.taskList = [], console.log("获取任务失败！"));
        break;
      case "jx_party_task_list":
        _0x159625.code == 0 ? $.taskList = _0x159625.data.result || [] : console.log(_0x159625.message);
        break;
      case "endTask":
        if (_0x159625.code == 0) {
          _0x159625.data.bizCode == 0 ? (console.log("完成，获得刮奖 +1"), $.lottyTimes = _0x159625.data?.["result"]?.["remainTimes"] || 0) : console.log(_0x159625.data.bizMsg);
        }
        break;
      case "jx_party_mapalbum_receive":
        if (_0x159625.code == 0) {
          if (_0x159625.data.bizCode == 0) {
            console.log("领取成功," + _0x159625.data.result.endTime);
          } else {
            console.log(_0x159625.data.bizMsg);
          }
        }
        break;
      case "jx_party_home":
        if (_0x159625.code == 0) {
          if (_0x159625.data.bizCode == 0) {
            !_0x159625.data.result.stageHongbao.got && console.log("无进度跳，黑了？");
            _0x159625.data.result.popUp.joinPop && _0x159625.data.result.popUp.joinPop.value && console.log("获得兑换金 " + _0x159625.data.result.popUp.joinPop.value);
            console.log("进度：" + _0x159625.data.result.stageHongbao.got + "/" + _0x159625.data.result.stageHongbao.all);
            console.log("本轮结束时间：" + $.time("yyyy/MM/dd HH:mm:ss", Date.now() + _0x159625.data.result.round.roundEndTime));
            _0x159625.data.result.stageHongbao.stage.status == 0 && ($.ktx = true);
          } else {
            console.log(_0x159625.data.bizMsg);
          }
        }
        break;
      case "jx_party_mapalbum":
        if (_0x159625.code == 0) {
          _0x159625.data.bizCode == 0 ? $.jkflag = _0x159625.data.result.lightNum === 18 : console.log(_0x159625.data.bizMsg);
        }
        break;
      case "jx_party_receive":
        if (_0x159625.code == 0) {
          _0x159625.data.bizCode == 0 ? console.log("领取 " + _0x159625.data.result.discount + " 红包成功，" + _0x159625.data.result.endTime) : (console.log(""), console.log(_0x159625.data.bizMsg));
        }
        break;
      case "jx_party_lottery":
        if (_0x159625.code == 0) {
          if (_0x159625.data.bizCode == 0) {
            $.lottyTimes = _0x159625.data.result.round.remainTimes;
            for (let _0x123474 of _0x159625.data.result.awardList) {
              if (_0x123474.name && _0x123474.name.includes("红包")) {
                console.log("获得： " + _0x123474.value + _0x123474.name);
              } else {
                if (_0x123474.name) {
                  console.log("获得： " + _0x123474.name);
                } else {
                  if (_0x123474.blessingsStr) {
                    console.log("获得祝福： " + _0x123474.blessingsStr);
                  } else {
                    console.log(JSON.stringify(_0x159625.data.result.awardList));
                  }
                }
              }
            }
          } else {
            console.log(_0x159625.data.bizMsg);
          }
        } else {
          console.log(_0x159625.errMsg);
        }
        break;
      case "apStartTaskTime":
      case "apDoLimitTimeTask":
      case "startTask":
      case "jx_party_mapalbum":
        break;
      default:
        console.log(_0x4bc4d5 + " -> " + _0x87da1f);
    }
    if (typeof _0x159625 == "object") {
      if (_0x159625.errorMessage) {
        _0x159625.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
      }
    }
  } catch (_0x2924cc) {
    console.log(_0x4bc4d5 + " " + _0x2924cc);
  }
}
function bdy_0x475921(_0x5f2a1f, _0x344652) {
  const _0x1cfccf = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    Origin: "https://h5platform.jd.com",
    Referer: "https://h5platform.jd.com/",
    Cookie: bdy_0x2954a4,
    "User-Agent": $.UA
  };
  const _0x5e5a64 = {
    url: _0x5f2a1f,
    headers: _0x1cfccf,
    timeout: 30000,
    ...(_0x344652 ? {
      body: _0x344652
    } : {})
  };
  return _0x5e5a64;
}
async function bdy_0x59c203() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0xda6368(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0xda6368(_0x18a0db) {
  _0x18a0db = _0x18a0db || 32;
  let _0x4df68b = "abcdef0123456789",
    _0x2c241c = _0x4df68b.length,
    _0x573f39 = "";
  for (i = 0; i < _0x18a0db; i++) {
    _0x573f39 += _0x4df68b.charAt(Math.floor(Math.random() * _0x2c241c));
  }
  return _0x573f39;
}
function bdy_0x536fcd(_0x3574e5) {
  if (typeof _0x3574e5 == "string") {
    try {
      return JSON.parse(_0x3574e5);
    } catch (_0x255226) {
      console.log(_0x255226);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function bdy_0x1be1a8() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x55165b => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    const _0x373979 = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    let _0x5bb2b1 = _0x373979;
    $.shopactivityId == "" && delete _0x5bb2b1.activityId;
    const _0xf02435 = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x5bb2b1,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x5bb2b1 = await dyy.getbody(_0xf02435);
    const _0x323a28 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x2954a4,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x17de51 = {
      url: "https://api.m.jd.com/client.action?" + _0x5bb2b1 + "&uuid=88888",
      headers: _0x323a28,
      timeout: 30000
    };
    $.dget(_0x17de51, async (_0x249e98, _0x2e851e, _0x522839) => {
      try {
        _0x522839 = _0x522839 && _0x522839.match(/jsonp_.*?\((.*?)\);/) && _0x522839.match(/jsonp_.*?\((.*?)\);/)[1] || _0x522839;
        let _0x3e0602 = $.toObj(_0x522839, _0x522839);
        if (_0x3e0602 && typeof _0x3e0602 == "object") {
          if (_0x3e0602 && _0x3e0602.success === true) {
            console.log("    " + _0x3e0602.message);
            $.errorJoinShop = _0x3e0602.message;
            if (_0x3e0602.result && _0x3e0602.result.giftInfo) {
              for (let _0x71b4e9 of _0x3e0602.result.giftInfo.giftList) {
                console.log("入会获得:" + _0x71b4e9.discountString + _0x71b4e9.prizeName + _0x71b4e9.secondLineDesc);
              }
            }
          } else {
            _0x3e0602 && typeof _0x3e0602 == "object" && _0x3e0602.message ? ($.errorJoinShop = _0x3e0602.message, console.log("" + (_0x3e0602.message || ""))) : console.log(_0x522839);
          }
        } else {
          console.log(_0x522839);
        }
      } catch (_0x163056) {
        $.logErr(_0x163056, _0x2e851e);
      } finally {
        _0x55165b();
      }
    });
  });
}
async function bdy_0x5dfce4() {
  return new Promise(async _0x2409c1 => {
    const _0xe11935 = {
      venderId: $.joinVenderId,
      payUpShop: true,
      queryVersion: "10.5.2",
      appid: "ef79a",
      needSecurity: true,
      bizId: "shop_view_app",
      channel: 406
    };
    let _0x40d94b = _0xe11935;
    const _0x1871e7 = {
      appId: "ef79a",
      fn: "getShopOpenCardInfo",
      body: _0x40d94b,
      apid: "jd_shop_member",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x40d94b = await dyy.getbody(_0x1871e7);
    const _0x51f163 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x2954a4,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    const _0x15ac2d = {
      url: "https://api.m.jd.com/client.action?" + _0x40d94b + "&uuid=88888",
      headers: _0x51f163,
      timeout: 60000
    };
    $.get(_0x15ac2d, async (_0x58ab01, _0xffb23b, _0x58da51) => {
      try {
        _0x58da51 = _0x58da51 && _0x58da51.match(/jsonp_.*?\((.*?)\);/) && _0x58da51.match(/jsonp_.*?\((.*?)\);/)[1] || _0x58da51;
        let _0x2639f1 = $.toObj(_0x58da51, _0x58da51);
        _0x2639f1 && typeof _0x2639f1 == "object" ? _0x2639f1 && _0x2639f1.success == true && (console.log("去加入 -> " + (_0x2639f1.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x2639f1.result[0].interestsRuleList && _0x2639f1.result[0].interestsRuleList[0] && _0x2639f1.result[0].interestsRuleList[0].interestsInfo && _0x2639f1.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x58da51);
      } catch (_0x11c564) {
        $.logErr(_0x11c564, _0xffb23b);
      } finally {
        _0x2409c1();
      }
    });
  });
}
function bdy_0x5678cd(_0x14f803, _0x74da80) {
  return Math.floor(Math.random() * (_0x74da80 - _0x14f803)) + _0x14f803;
}
function bdy_0x2ab25e(_0x48b725 = +new Date()) {
  var _0x4f2aaf = new Date(_0x48b725 + 28800000);
  return _0x4f2aaf.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function bdy_0x2798f9() {
  return new Promise(_0x3bfafa => {
    const _0x348f0b = {
      Cookie: bdy_0x2954a4,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x56b31b = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x348f0b,
      timeout: 10000
    };
    $.get(_0x56b31b, (_0x2eea8d, _0x209e1c, _0x55fac3) => {
      try {
        if (_0x55fac3) {
          _0x55fac3 = JSON.parse(_0x55fac3);
          if (!(_0x55fac3.islogin === "1")) {
            _0x55fac3.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x165a81) {
        console.log(_0x165a81);
      } finally {
        _0x3bfafa();
      }
    });
  });
}
function Env(o, t) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((r, i) => { s.call(this, t, (t, e, s) => { t ? i(t) : r(e) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.logLevels = { debug: 0, info: 1, warn: 2, error: 3 }, this.logLevelPrefixs = { debug: "[DEBUG] ", info: "[INFO] ", warn: "[WARN] ", error: "[ERROR] " }, this.logLevel = "info", this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } getEnv() { return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0 } isNode() { return "Node.js" === this.getEnv() } isQuanX() { return "Quantumult X" === this.getEnv() } isSurge() { return "Surge" === this.getEnv() } isLoon() { return "Loon" === this.getEnv() } isShadowrocket() { return "Shadowrocket" === this.getEnv() } isStash() { return "Stash" === this.getEnv() } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null, ...s) { try { return JSON.stringify(t, ...s) } catch { return e } } getjson(t, e) { let s = e; if (this.getdata(t)) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(r => { this.get({ url: t }, (t, e, s) => r(s)) }) } runScript(a, o) { return new Promise(r => { let t = this.getdata("@chavy_boxjs_userCfgs.httpapi"); t = t && t.replace(/\n/g, "").trim(); var e = (e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout")) ? +e : 20, [s, i] = (e = o && o.timeout ? o.timeout : e, t.split("@")); this.post({ url: `http://${i}/v1/scripting/evaluate`, body: { script_text: a, mock_type: "cron", timeout: e }, headers: { "X-Key": s, Accept: "*/*" }, timeout: e }, (t, e, s) => r(s)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; this.fs = this.fs || require("fs"), this.path = this.path || require("path"); var t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), r = !s && this.fs.existsSync(e); if (!s && !r) return {}; r = s ? t : e; try { return JSON.parse(this.fs.readFileSync(r)) } catch (t) { return {} } } writedata() { var t, e, s, r, i; this.isNode() && (this.fs = this.fs || require("fs"), this.path = this.path || require("path"), t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), r = !(s = this.fs.existsSync(t)) && this.fs.existsSync(e), i = JSON.stringify(this.data), !s && r ? this.fs.writeFileSync(e, i) : this.fs.writeFileSync(t, i)) } lodash_get(t, e, s) { let r = t; for (const t of e.replace(/\[(\d+)\]/g, ".$1").split(".")) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, r, e) { return Object(t) === t && ((r = Array.isArray(r) ? r : r.toString().match(/[^.[\]]+/g) || []).slice(0, -1).reduce((t, e, s) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(r[s + 1]) >> 0 == +r[s + 1] ? [] : {}, t)[r[r.length - 1]] = e), t } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { var [, s, r] = /^@(.*?)\.(.*?)$/.exec(t); if (s = s ? this.getval(s) : "") try { const t = JSON.parse(s); e = t ? this.lodash_get(t, r, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { var [, r, i] = /^@(.*?)\.(.*?)$/.exec(e), a = this.getval(r), a = r ? "null" === a ? null : a || "{}" : "{}"; try { const e = JSON.parse(a); this.lodash_set(e, i, t), s = this.setval(JSON.stringify(e), r) } catch (e) { this.lodash_set(a = {}, i, t), s = this.setval(JSON.stringify(a), r) } } else s = this.setval(t, e); return s } getval(t) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.read(t); case "Quantumult X": return $prefs.valueForKey(t); case "Node.js": return this.data = this.loaddata(), this.data[t]; default: return this.data && this.data[t] || null } } setval(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.write(t, e); case "Quantumult X": return $prefs.setValueForKey(t, e); case "Node.js": return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0; default: return this.data && this.data[e] || null } } initGotEnv(t) { this.got = this.got || require("got"), this.cktough = this.cktough || require("tough-cookie"), this.ckjar = this.ckjar || new this.cktough.CookieJar, t && (t.headers = t.headers || {}, t) && (t.headers = t.headers || {}, void 0 === t.headers.cookie) && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar) } tmout() { return new Promise((t, e) => { this.tmoutId = setTimeout(() => { this.prms.cancel(), e({ message: "timemout", response: "" }) }, 5e4) }) } get(t, a = () => { }) { switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t), this.prms = this.got(t).on("redirect", (t, e) => { try { var s; t.headers["set-cookie"] && ((s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString()) && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar) } catch (t) { this.logErr(t) } }), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } post(t, a = () => { }) { var e = t.method ? t.method.toLocaleLowerCase() : "post"; switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[e](t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": t.method = e, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t); var { url: s, ...r } = t; this.prms = this.got[e](s, r), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } time(t, e = null) { var s, r = { "M+": (e = e ? new Date(e) : new Date).getMonth() + 1, "d+": e.getDate(), "H+": e.getHours(), "m+": e.getMinutes(), "s+": e.getSeconds(), "q+": Math.floor((e.getMonth() + 3) / 3), S: e.getMilliseconds() }; for (s in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), r) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[s] : ("00" + r[s]).substr(("" + r[s]).length))); return t } queryStr(e) { let s = ""; for (const r in e) { let t = e[r]; null != t && "" !== t && ("object" == typeof t && (t = JSON.stringify(t)), s += `${r}=${t}&`) } return s = s.substring(0, s.length - 1) } msg(t = o, e = "", s = "", r = {}) { var i, a = r => { const { $open: t, $copy: e, $media: i, $mediaMime: a } = r; switch (typeof r) { case void 0: return r; case "string": switch (this.getEnv()) { case "Surge": case "Stash": default: return { url: r }; case "Loon": case "Shadowrocket": return r; case "Quantumult X": return { "open-url": r }; case "Node.js": return }case "object": switch (this.getEnv()) { case "Surge": case "Stash": case "Shadowrocket": default: var o = {}, s = r.openUrl || r.url || r["open-url"] || t; if (s && Object.assign(o, { action: "open-url", url: s }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(o, { action: "clipboard", text: s }), i) { let t, e, s; if (i.startsWith("http")) t = i; else if (i.startsWith("data:")) { const [r] = i.split(";"), [, a] = i.split(","); e = a, s = r.replace("data:", "") } else e = i, s = (t => { var e, s = { JVBERi0: "application/pdf", R0lGODdh: "image/gif", R0lGODlh: "image/gif", iVBORw0KGgo: "image/png", "/9j/": "image/jpg" }; for (e in s) if (0 === t.indexOf(e)) return s[e]; return null })(i); Object.assign(o, { "media-url": t, "media-base64": e, "media-base64-mime": a ?? s }) } return Object.assign(o, { "auto-dismiss": r["auto-dismiss"], sound: r.sound }), o; case "Loon": { const e = {}; (s = r.openUrl || r.url || r["open-url"] || t) && Object.assign(e, { openUrl: s }); var n = r.mediaUrl || r["media-url"]; return (n = i?.startsWith("http") ? i : n) && Object.assign(e, { mediaUrl: n }), console.log(JSON.stringify(e)), e } case "Quantumult X": { const a = {}; (o = r["open-url"] || r.url || r.openUrl || t) && Object.assign(a, { "open-url": o }); n = r["media-url"] || r.mediaUrl; return (n = i?.startsWith("http") ? i : n) && Object.assign(a, { "media-url": n }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(a, { "update-pasteboard": s }), console.log(JSON.stringify(a)), a } case "Node.js": return }default: return } }; if (!this.isMute) switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: $notification.post(t, e, s, a(r)); break; case "Quantumult X": $notify(t, e, s, a(r)); break; case "Node.js": }this.isMuteLog || ((i = ["", "==============📣系统通知📣=============="]).push(t), e && i.push(e), s && i.push(s), console.log(i.join("\n")), this.logs = this.logs.concat(i)) } debug(...t) { this.logLevels[this.logLevel] <= this.logLevels.debug && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.debug + t.map(t => t ?? String(t)).join(this.logSeparator))) } info(...t) { this.logLevels[this.logLevel] <= this.logLevels.info && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.info + t.map(t => t ?? String(t)).join(this.logSeparator))) } warn(...t) { this.logLevels[this.logLevel] <= this.logLevels.warn && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.warn + t.map(t => t ?? String(t)).join(this.logSeparator))) } error(...t) { this.logLevels[this.logLevel] <= this.logLevels.error && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.error + t.map(t => t ?? String(t)).join(this.logSeparator))) } log(...t) { 0 < t.length && (this.logs = [...this.logs, ...t]), console.log(t.map(t => t ?? String(t)).join(this.logSeparator)) } logErr(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: this.log("", `❗️${this.name}, 错误!`, t); break; case "Node.js": this.log("", `❗️${this.name}, 错误!`, void 0 !== t.message ? t.message : t) } } wait(e) { return new Promise(t => setTimeout(t, e)) } done(t = {}) { var e = ((new Date).getTime() - this.startTime) / 1e3; switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: $done(t); break; case "Node.js": process.exit(1) } } }(o, t) }