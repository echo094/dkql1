/*
0 1 0 * * * jd_dailysign.js
*/

const $ = new Env('每日签到得豆');
const bdy_0x3e166d = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x406419 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x405ab9 = require("./function/dylans");
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
let bdy_0x4cc48c = [],
  bdy_0x2322a9 = "",
  bdy_0x40e836 = 0;
if ($.isNode()) {
  Object.keys(bdy_0x3e166d).forEach(_0x26394c => {
    bdy_0x4cc48c.push(bdy_0x3e166d[_0x26394c]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x4cc48c = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x3dcca9 => _0x3dcca9.cookie)].filter(_0xb3dc75 => !!_0xb3dc75);
}
const bdy_0x41dfbb = {
  encryptProjectId: "237YgcQ2GCm64t7vfP528Run4P4q",
  encryptAssignmentId: "3WRvrfo6qq8BTRQzLJSRgyBGaRr3"
};
const bdy_0x23fcdb = {
  encryptProjectId: "Yw2VALxCy4TAP3HHR774oWxc35T",
  encryptAssignmentId: "28PunYRnW3s9CBvJSUUcvdUzkf9r"
};
const bdy_0x57bb46 = {
  encryptProjectId: "S2PFi6Npq9yRgDHRjegZpGRCrVu",
  encryptAssignmentId: "4DRn3vqrhUxF6cH1qtotLWHM9sLM"
};
const bdy_0xbbaf52 = {
  encryptProjectId: "3xxdfoHPKSyuwryhhEX8en1ZAT6A",
  encryptAssignmentId: "csYHwSFWAjtcuxyYXpZYSecsH6P"
};
const bdy_0xb043f4 = {
  encryptProjectId: "48mbNna587mvUybMYiVacWbLV2kY",
  encryptAssignmentId: "3MbhW1z98MGVgxKCxMwCtgXXCcTz"
};
$.tokenList = [bdy_0x41dfbb, bdy_0x23fcdb, bdy_0x57bb46, bdy_0xbbaf52, bdy_0xb043f4];
!(async () => {
  if (!bdy_0x4cc48c[0]) {
    const _0x3f35a5 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x3f35a5);
    return;
  }
  console.log("当前版本：20240510");
  console.log("问题建议：https://t.me/dylan_jdpro");
  for (let _0x22facf = 0; _0x22facf < bdy_0x4cc48c.length; _0x22facf++) {
    bdy_0x2322a9 = bdy_0x4cc48c[_0x22facf];
    originCookie = bdy_0x4cc48c[_0x22facf];
    if (bdy_0x2322a9) {
      $.UserName = decodeURIComponent(bdy_0x2322a9.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x2322a9.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x22facf + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      $.isban = false;
      $.hasRisk = false;
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      bdy_0x16e659();
      await bdy_0x32c542();
      if (!$.isLogin) {
        const _0x13d39e = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x13d39e);
        $.isNode() && (await bdy_0x406419.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      await bdy_0x1f79f9();
      if ($.outFlag) {
        break;
      }
    }
  }
})().catch(_0x56716d => {
  return $.logErr(_0x56716d);
}).finally(() => {
  return $.done();
});
async function bdy_0x1f79f9() {
  try {
    await bdy_0xfa8a0a("yysign");
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    for (let _0x3c56ae of $.tokenList) {
      $.encryptAssignmentId = _0x3c56ae.encryptAssignmentId;
      $.encryptProjectId = _0x3c56ae.encryptProjectId;
      await bdy_0xfa8a0a("sign");
      await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    }
    await $.wait(parseInt(Math.random() * 1000 + 3000, 10));
  } catch (_0x3225aa) {
    console.log(_0x3225aa);
  }
}
async function bdy_0xfa8a0a(_0x2ec82e) {
  if ($.outFlag || $.isban) {
    return;
  }
  let _0x2ebb04 = "",
    _0x5bf271,
    _0x2711e5,
    _0x2d7abc = "post",
    _0x5079ba = "https://api.m.jd.com/api";
  switch (_0x2ec82e) {
    case "sign":
      _0x5079ba = "https://api.m.jd.com/client.action?functionId=doInteractiveAssignment";
      _0x2ebb04 = "appid=babelh5&body={\"sourceCode\":\"acetttsign\",\"encryptProjectId\":\"" + $.encryptProjectId + "\",\"encryptAssignmentId\":\"" + $.encryptAssignmentId + "\",\"completionFlag\":true,\"itemId\":\"1\",\"extParam\":{\"forceBot\":\"1\",\"businessData\":{},\"signStr\":\"-1\",\"sceneid\":\"babel_4RYbb8NtVAegmT35SuM2N3KKYLWt\"},\"activity_id\":\"4RYbb8NtVAegmT35SuM2N3KKYLWt\",\"template_id\":\"00035605\",\"floor_id\":\"101674850\",\"enc\":\"082F6E6EB76A8CBEE15FCF7E92519D4A0C14A052EDB9C9248A0F4121699403D36C35C158EFB65C32311DCE62FF076E717D80B5322FC0FC3B1D3CA22644BC685E\"}&sign=11&t=" + Date.now();
      _0x2711e5 = "doInteractiveAssignment";
      break;
    case "yysign":
      _0x2ebb04 = "appid=laputa&body={\"methodName\":\"handleBeanInfo2595\",\"functionId\":\"sign\",\"osName\":\"feedProduct\",\"appId\":\"807635028594484682708c54f69b1217\",\"version\":\"1\",\"deviceNo\":\"\",\"handleType\":\"sign\",\"encryptProjectId\":\"3vRVP84ukngNhNYVDQTXuQQzJjit\",\"encryptAssignmentIds\":[\"3LbDQhTDsr5n7wL4XPyubMvEuUR3\"],\"deviceType\":1,\"lng\":0,\"lat\":0,\"itemId\":\"1\"}";
      _0x2711e5 = "jdh_laputa_handleSoaRequest";
      break;
    default:
      console.log("错误" + _0x2ec82e);
  }
  if (_0x5bf271) {
    let _0x3d71bf = {
      appId: _0x5bf271,
      functionId: _0x2711e5,
      body: _0x2ebb04,
      appid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      t: Date.now(),
      ua: $.UA
    };
    _0x2ebb04 = await bdy_0x405ab9.getbody(_0x3d71bf);
    if (!_0x2ebb04) {
      return;
    }
  } else {
    _0x2ebb04 && (_0x2ebb04 = "functionId=" + _0x2711e5 + "&" + _0x2ebb04);
  }
  let _0x5ca798 = bdy_0x4a56fc(_0x5079ba, _0x2ebb04);
  return new Promise(async _0x5988b7 => {
    $["d" + _0x2d7abc](_0x5ca798, async (_0x5cb76b, _0x45e2dd, _0x3786a2) => {
      try {
        if (_0x5cb76b) {
          if (_0x45e2dd && typeof _0x45e2dd.statusCode != "undefined") {
            if (_0x45e2dd.statusCode == 493) {
              if (bdy_0x40e836 < 6) {
                bdy_0x40e836++;
                await bdy_0xfa8a0a(_0x2ec82e);
                return;
              }
              console.log("ip可能被限制，过10分钟后再执行脚本\n");
              $.outFlag = true;
            }
          }
          console.log("" + $.toStr(_0x5cb76b, _0x5cb76b));
        } else {
          if (_0x3786a2.includes("doctype") && bdy_0x40e836 < 6) {
            bdy_0x40e836++;
            await bdy_0xfa8a0a(_0x2ec82e);
            return;
          }
          bdy_0x40e836 = 0;
          bdy_0x2cbcea(_0x2ec82e, _0x3786a2);
        }
      } catch (_0x14343d) {
        console.log(_0x14343d, _0x45e2dd);
      } finally {
        _0x5988b7();
      }
    });
  });
}
async function bdy_0x2cbcea(_0x58f700, _0x26b09a) {
  let _0x455630 = "";
  try {
    _0x455630 = JSON.parse(_0x26b09a);
  } catch (_0x48fb4f) {
    console.log(_0x58f700 + " 执行任务异常");
  }
  try {
    switch (_0x58f700) {
      case "apTaskList":
        _0x455630.code == 0 ? $.taskList = _0x455630.data || [] : ($.taskList = [], console.log("获取任务失败！"));
        break;
      case "sign":
        if (_0x455630.subCode == 0) {
          for (let _0x2d9fc3 in _0x455630.rewardsInfo) {
            switch (_0x2d9fc3) {
              case "successRewards":
                for (let _0x317d40 in _0x455630.rewardsInfo.successRewards) {
                  for (let _0x500881 of _0x455630.rewardsInfo.successRewards[_0x317d40]) {
                    console.log(_0x500881.rewardName + ": " + _0x500881.quantity + " 🥔");
                  }
                }
                break;
              case "failRewards":
                for (let _0x2d7bb2 of _0x455630.rewardsInfo.failRewards) {
                  console.log("" + _0x2d7bb2.msg);
                }
                break;
            }
          }
        } else {
          console.log(_0x455630.msg);
        }
        break;
      case "yysign":
        if (_0x455630.success) {
          const _0xae2a18 = _0x455630?.["data"]?.["signResultDTO"];
          _0xae2a18?.["signStatus"] ? console.log(_0xae2a18?.["rewardMsg"]) : "";
        } else {
          console.log(_0x455630.msg);
        }
        break;
      case "apStartTaskTime":
      case "apDoLimitTimeTask":
        break;
      default:
        console.log(_0x58f700 + " -> " + _0x26b09a);
    }
    typeof _0x455630 == "object" && _0x455630.errorMessage && _0x455630.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0x2a1627) {
    console.log(_0x58f700 + " " + _0x2a1627);
  }
}
function bdy_0x4a56fc(_0x58309d, _0x1637b0) {
  typeof _0x1637b0 == "object";
  const _0x54b44b = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    Origin: "https://pro.jd.com",
    Referer: "https://pro.jd.com/",
    Cookie: bdy_0x2322a9,
    "User-Agent": $.UA
  };
  const _0x3c1994 = {
    url: _0x58309d,
    headers: _0x54b44b,
    timeout: 30000,
    ...(_0x1637b0 ? {
      body: _0x1637b0
    } : {})
  };
  return _0x3c1994;
}
async function bdy_0x16e659() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0x29e823(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0x29e823(_0x3590b2) {
  _0x3590b2 = _0x3590b2 || 32;
  let _0x2b9e9e = "abcdef0123456789",
    _0xd7c301 = _0x2b9e9e.length,
    _0x4773e3 = "";
  for (i = 0; i < _0x3590b2; i++) {
    _0x4773e3 += _0x2b9e9e.charAt(Math.floor(Math.random() * _0xd7c301));
  }
  return _0x4773e3;
}
function bdy_0x4b8bf8(_0x41c3ea) {
  if (typeof _0x41c3ea == "string") {
    try {
      return JSON.parse(_0x41c3ea);
    } catch (_0x527e4d) {
      console.log(_0x527e4d);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function bdy_0x51099c() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x2b4b0c => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    const _0x5bbc97 = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    let _0x48c55a = _0x5bbc97;
    $.shopactivityId == "" && delete _0x48c55a.activityId;
    const _0x408a1a = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x48c55a,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x48c55a = await dyy.getbody(_0x408a1a);
    const _0x26c435 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x2322a9,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x9a487 = {
      url: "https://api.m.jd.com/client.action?" + _0x48c55a + "&uuid=88888",
      headers: _0x26c435,
      timeout: 30000
    };
    $.dget(_0x9a487, async (_0x24c777, _0x1f040f, _0xba3bfb) => {
      try {
        _0xba3bfb = _0xba3bfb && _0xba3bfb.match(/jsonp_.*?\((.*?)\);/) && _0xba3bfb.match(/jsonp_.*?\((.*?)\);/)[1] || _0xba3bfb;
        let _0x54f216 = $.toObj(_0xba3bfb, _0xba3bfb);
        if (_0x54f216 && typeof _0x54f216 == "object") {
          if (_0x54f216 && _0x54f216.success === true) {
            console.log("    " + _0x54f216.message);
            $.errorJoinShop = _0x54f216.message;
            if (_0x54f216.result && _0x54f216.result.giftInfo) {
              for (let _0x5b6479 of _0x54f216.result.giftInfo.giftList) {
                console.log("入会获得:" + _0x5b6479.discountString + _0x5b6479.prizeName + _0x5b6479.secondLineDesc);
              }
            }
          } else {
            _0x54f216 && typeof _0x54f216 == "object" && _0x54f216.message ? ($.errorJoinShop = _0x54f216.message, console.log("" + (_0x54f216.message || ""))) : console.log(_0xba3bfb);
          }
        } else {
          console.log(_0xba3bfb);
        }
      } catch (_0x364d07) {
        $.logErr(_0x364d07, _0x1f040f);
      } finally {
        _0x2b4b0c();
      }
    });
  });
}
switch ($.type) {
  case "nb":
    const bdy_0x4f2660 = {
      nb: nb
    };
    _0xf1f6le = bdy_0x4f2660;
    break;
}
async function bdy_0xe9fecc() {
  return new Promise(async _0x5d1476 => {
    const _0x13198f = {
      venderId: $.joinVenderId,
      payUpShop: true,
      queryVersion: "10.5.2",
      appid: "ef79a",
      needSecurity: true,
      bizId: "shop_view_app",
      channel: 406
    };
    let _0x3aa0b9 = _0x13198f;
    const _0x2d1032 = {
      appId: "ef79a",
      fn: "getShopOpenCardInfo",
      body: _0x3aa0b9,
      apid: "jd_shop_member",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x3aa0b9 = await dyy.getbody(_0x2d1032);
    const _0x53e7c4 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x2322a9,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    const _0x1a3225 = {
      url: "https://api.m.jd.com/client.action?" + _0x3aa0b9 + "&uuid=88888",
      headers: _0x53e7c4,
      timeout: 60000
    };
    $.get(_0x1a3225, async (_0x4721ec, _0x5d68c1, _0x5d4cab) => {
      try {
        _0x5d4cab = _0x5d4cab && _0x5d4cab.match(/jsonp_.*?\((.*?)\);/) && _0x5d4cab.match(/jsonp_.*?\((.*?)\);/)[1] || _0x5d4cab;
        let _0x1a05fe = $.toObj(_0x5d4cab, _0x5d4cab);
        _0x1a05fe && typeof _0x1a05fe == "object" ? _0x1a05fe && _0x1a05fe.success == true && (console.log("去加入 -> " + (_0x1a05fe.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x1a05fe.result[0].interestsRuleList && _0x1a05fe.result[0].interestsRuleList[0] && _0x1a05fe.result[0].interestsRuleList[0].interestsInfo && _0x1a05fe.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x5d4cab);
      } catch (_0x4a8335) {
        $.logErr(_0x4a8335, _0x5d68c1);
      } finally {
        _0x5d1476();
      }
    });
  });
}
function bdy_0x1056e0(_0x35aa3a, _0x5615cd) {
  return Math.floor(Math.random() * (_0x5615cd - _0x35aa3a)) + _0x35aa3a;
}
function bdy_0x14d8ff(_0x446164 = +new Date()) {
  var _0xca4f2d = new Date(_0x446164 + 28800000);
  return _0xca4f2d.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function bdy_0x32c542() {
  return new Promise(_0x280e40 => {
    const _0x5d08aa = {
      Cookie: bdy_0x2322a9,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x4ff104 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x5d08aa,
      timeout: 10000
    };
    $.get(_0x4ff104, (_0x515936, _0x3e3385, _0x402905) => {
      try {
        if (_0x402905) {
          _0x402905 = JSON.parse(_0x402905);
          if (!(_0x402905.islogin === "1")) {
            _0x402905.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x2d6d43) {
        console.log(_0x2d6d43);
      } finally {
        _0x280e40();
      }
    });
  });
}
function Env(o,t){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((r,i)=>{s.call(this,t,(t,e,s)=>{t?i(t):r(e)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.logLevels={debug:0,info:1,warn:2,error:3},this.logLevelPrefixs={debug:"[DEBUG] ",info:"[INFO] ",warn:"[WARN] ",error:"[ERROR] "},this.logLevel="info",this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null,...s){try{return JSON.stringify(t,...s)}catch{return e}}getjson(t,e){let s=e;if(this.getdata(t))try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(r=>{this.get({url:t},(t,e,s)=>r(s))})}runScript(a,o){return new Promise(r=>{let t=this.getdata("@chavy_boxjs_userCfgs.httpapi");t=t&&t.replace(/\n/g,"").trim();var e=(e=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"))?+e:20,[s,i]=(e=o&&o.timeout?o.timeout:e,t.split("@"));this.post({url:`http://${i}/v1/scripting/evaluate`,body:{script_text:a,mock_type:"cron",timeout:e},headers:{"X-Key":s,Accept:"*/*"},timeout:e},(t,e,s)=>r(s))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};this.fs=this.fs||require("fs"),this.path=this.path||require("path");var t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),r=!s&&this.fs.existsSync(e);if(!s&&!r)return{};r=s?t:e;try{return JSON.parse(this.fs.readFileSync(r))}catch(t){return{}}}writedata(){var t,e,s,r,i;this.isNode()&&(this.fs=this.fs||require("fs"),this.path=this.path||require("path"),t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),r=!(s=this.fs.existsSync(t))&&this.fs.existsSync(e),i=JSON.stringify(this.data),!s&&r?this.fs.writeFileSync(e,i):this.fs.writeFileSync(t,i))}lodash_get(t,e,s){let r=t;for(const t of e.replace(/\[(\d+)\]/g,".$1").split("."))if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,r,e){return Object(t)===t&&((r=Array.isArray(r)?r:r.toString().match(/[^.[\]]+/g)||[]).slice(0,-1).reduce((t,e,s)=>Object(t[e])===t[e]?t[e]:t[e]=Math.abs(r[s+1])>>0==+r[s+1]?[]:{},t)[r[r.length-1]]=e),t}getdata(t){let e=this.getval(t);if(/^@/.test(t)){var[,s,r]=/^@(.*?)\.(.*?)$/.exec(t);if(s=s?this.getval(s):"")try{const t=JSON.parse(s);e=t?this.lodash_get(t,r,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){var[,r,i]=/^@(.*?)\.(.*?)$/.exec(e),a=this.getval(r),a=r?"null"===a?null:a||"{}":"{}";try{const e=JSON.parse(a);this.lodash_set(e,i,t),s=this.setval(JSON.stringify(e),r)}catch(e){this.lodash_set(a={},i,t),s=this.setval(JSON.stringify(a),r)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got||require("got"),this.cktough=this.cktough||require("tough-cookie"),this.ckjar=this.ckjar||new this.cktough.CookieJar,t&&(t.headers=t.headers||{},t)&&(t.headers=t.headers||{},void 0===t.headers.cookie)&&void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar)}tmout(){return new Promise((t,e)=>{this.tmoutId=setTimeout(()=>{this.prms.cancel(),e({message:"timemout",response:""})},5e4)})}get(t,a=()=>{}){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),t.params&&(t.url+="?"+this.queryStr(t.params)),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,e,s)=>{!t&&e&&(e.body=s,e.statusCode=e.status||e.statusCode,e.status=e.statusCode),a(t,e,s)});break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{var{statusCode:t,statusCode:e,headers:s,body:r,bodyBytes:i}=t;a(null,{status:t,statusCode:e,headers:s,body:r,bodyBytes:i},r,i)},t=>a(t&&t.error||"UndefinedError"));break;case"Node.js":this.initGotEnv(t),this.prms=this.got(t).on("redirect",(t,e)=>{try{var s;t.headers["set-cookie"]&&((s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString())&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar)}catch(t){this.logErr(t)}}),Promise.race([this.prms,this.tmout()]).then(t=>{var{statusCode:t,statusCode:e,headers:s,rawBody:r,body:i}=t;a(null,{status:t,statusCode:e,headers:s,rawBody:r,body:i},i),clearTimeout(this.tmoutId)},t=>{var{message:t,response:e}=t;clearTimeout(this.tmoutId),a(t,e,e&&e.body)})}}post(t,a=()=>{}){var e=t.method?t.method.toLocaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[e](t,(t,e,s)=>{!t&&e&&(e.body=s,e.statusCode=e.status||e.statusCode,e.status=e.statusCode),a(t,e,s)});break;case"Quantumult X":t.method=e,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{var{statusCode:t,statusCode:e,headers:s,body:r,bodyBytes:i}=t;a(null,{status:t,statusCode:e,headers:s,body:r,bodyBytes:i},r,i)},t=>a(t&&t.error||"UndefinedError"));break;case"Node.js":this.initGotEnv(t);var{url:s,...r}=t;this.prms=this.got[e](s,r),Promise.race([this.prms,this.tmout()]).then(t=>{var{statusCode:t,statusCode:e,headers:s,rawBody:r,body:i}=t;a(null,{status:t,statusCode:e,headers:s,rawBody:r,body:i},i),clearTimeout(this.tmoutId)},t=>{var{message:t,response:e}=t;clearTimeout(this.tmoutId),a(t,e,e&&e.body)})}}time(t,e=null){var s,r={"M+":(e=e?new Date(e):new Date).getMonth()+1,"d+":e.getDate(),"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(s in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[s]:("00"+r[s]).substr((""+r[s]).length)));return t}queryStr(e){let s="";for(const r in e){let t=e[r];null!=t&&""!==t&&("object"==typeof t&&(t=JSON.stringify(t)),s+=`${r}=${t}&`)}return s=s.substring(0,s.length-1)}msg(t=o,e="",s="",r={}){var i,a=r=>{const{$open:t,$copy:e,$media:i,$mediaMime:a}=r;switch(typeof r){case void 0:return r;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:r};case"Loon":case"Shadowrocket":return r;case"Quantumult X":return{"open-url":r};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:var o={},s=r.openUrl||r.url||r["open-url"]||t;if(s&&Object.assign(o,{action:"open-url",url:s}),(s=r["update-pasteboard"]||r.updatePasteboard||e)&&Object.assign(o,{action:"clipboard",text:s}),i){let t,e,s;if(i.startsWith("http"))t=i;else if(i.startsWith("data:")){const[r]=i.split(";"),[,a]=i.split(",");e=a,s=r.replace("data:","")}else e=i,s=(t=>{var e,s={JVBERi0:"application/pdf",R0lGODdh:"image/gif",R0lGODlh:"image/gif",iVBORw0KGgo:"image/png","/9j/":"image/jpg"};for(e in s)if(0===t.indexOf(e))return s[e];return null})(i);Object.assign(o,{"media-url":t,"media-base64":e,"media-base64-mime":a??s})}return Object.assign(o,{"auto-dismiss":r["auto-dismiss"],sound:r.sound}),o;case"Loon":{const e={};(s=r.openUrl||r.url||r["open-url"]||t)&&Object.assign(e,{openUrl:s});var n=r.mediaUrl||r["media-url"];return(n=i?.startsWith("http")?i:n)&&Object.assign(e,{mediaUrl:n}),console.log(JSON.stringify(e)),e}case"Quantumult X":{const a={};(o=r["open-url"]||r.url||r.openUrl||t)&&Object.assign(a,{"open-url":o});n=r["media-url"]||r.mediaUrl;return(n=i?.startsWith("http")?i:n)&&Object.assign(a,{"media-url":n}),(s=r["update-pasteboard"]||r.updatePasteboard||e)&&Object.assign(a,{"update-pasteboard":s}),console.log(JSON.stringify(a)),a}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(t,e,s,a(r));break;case"Quantumult X":$notify(t,e,s,a(r));break;case"Node.js":}this.isMuteLog||((i=["","==============📣系统通知📣=============="]).push(t),e&&i.push(e),s&&i.push(s),console.log(i.join("\n")),this.logs=this.logs.concat(i))}debug(...t){this.logLevels[this.logLevel]<=this.logLevels.debug&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.debug+t.map(t=>t??String(t)).join(this.logSeparator)))}info(...t){this.logLevels[this.logLevel]<=this.logLevels.info&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.info+t.map(t=>t??String(t)).join(this.logSeparator)))}warn(...t){this.logLevels[this.logLevel]<=this.logLevels.warn&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.warn+t.map(t=>t??String(t)).join(this.logSeparator)))}error(...t){this.logLevels[this.logLevel]<=this.logLevels.error&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.error+t.map(t=>t??String(t)).join(this.logSeparator)))}log(...t){0<t.length&&(this.logs=[...this.logs,...t]),console.log(t.map(t=>t??String(t)).join(this.logSeparator))}logErr(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️${this.name}, 错误!`,t);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,void 0!==t.message?t.message:t)}}wait(e){return new Promise(t=>setTimeout(t,e))}done(t={}){var e=((new Date).getTime()-this.startTime)/1e3;switch(this.log("",`🔔${this.name}, 结束! 🕛 ${e} 秒`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(o,t)}