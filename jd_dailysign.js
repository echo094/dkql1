/*
0 1 0 * * * jd_dailysign.js
*/

const $ = new Env('每日签到得豆');
const bdy_0x2e955c = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x1b96c0 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x5d6012 = require("./function/dylans");
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
let bdy_0x46ac0b = [],
  bdy_0x38b2c5 = "",
  bdy_0x1e869a = 0;
if ($.isNode()) {
  Object.keys(bdy_0x2e955c).forEach(_0x437e2e => {
    bdy_0x46ac0b.push(bdy_0x2e955c[_0x437e2e]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x46ac0b = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x39d404 => _0x39d404.cookie)].filter(_0x1bc333 => !!_0x1bc333);
}
const bdy_0x14088d = {
  encryptProjectId: "237YgcQ2GCm64t7vfP528Run4P4q",
  encryptAssignmentId: "3WRvrfo6qq8BTRQzLJSRgyBGaRr3"
};
const bdy_0x50ddc6 = {
  encryptProjectId: "Yw2VALxCy4TAP3HHR774oWxc35T",
  encryptAssignmentId: "28PunYRnW3s9CBvJSUUcvdUzkf9r"
};
const bdy_0x33b40b = {
  encryptProjectId: "S2PFi6Npq9yRgDHRjegZpGRCrVu",
  encryptAssignmentId: "4DRn3vqrhUxF6cH1qtotLWHM9sLM"
};
const bdy_0x3877d0 = {
  encryptProjectId: "3xxdfoHPKSyuwryhhEX8en1ZAT6A",
  encryptAssignmentId: "csYHwSFWAjtcuxyYXpZYSecsH6P"
};
const bdy_0x54ec49 = {
  encryptProjectId: "48mbNna587mvUybMYiVacWbLV2kY",
  encryptAssignmentId: "3MbhW1z98MGVgxKCxMwCtgXXCcTz"
};
$.tokenList = [bdy_0x14088d, bdy_0x50ddc6, bdy_0x33b40b, bdy_0x3877d0, bdy_0x54ec49];
!(async () => {
  if (!bdy_0x46ac0b[0]) {
    const _0x21d2e6 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x21d2e6);
    return;
  }
  console.log("当前版本：20240621");
  console.log("问题建议：https://t.me/dylan_jdpro");
  for (let _0x5da245 = 0; _0x5da245 < bdy_0x46ac0b.length; _0x5da245++) {
    bdy_0x38b2c5 = bdy_0x46ac0b[_0x5da245];
    originCookie = bdy_0x46ac0b[_0x5da245];
    if (bdy_0x38b2c5) {
      $.UserName = decodeURIComponent(bdy_0x38b2c5.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x38b2c5.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x5da245 + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      $.isban = false;
      $.hasRisk = false;
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      bdy_0x1b5374();
      await bdy_0x363bd7();
      if (!$.isLogin) {
        const _0x5174a7 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x5174a7);
        if ($.isNode()) {
          await bdy_0x1b96c0.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie");
        }
        continue;
      }
      await bdy_0x9d8145();
      if ($.outFlag) {
        break;
      }
    }
  }
})().catch(_0x47659e => {
  return $.logErr(_0x47659e);
}).finally(() => {
  return $.done();
});
async function bdy_0x9d8145() {
  try {
    await bdy_0xb60bf1("yysign");
    await $.wait(parseInt(Math.random() * 1000 + 3000, 10));
  } catch (_0x48d497) {
    console.log(_0x48d497);
  }
}
async function bdy_0xb60bf1(_0x1db2eb) {
  if ($.outFlag || $.isban) {
    return;
  }
  let _0x431a8c = "",
    _0x23dd2d,
    _0x4a5334,
    _0x1d9a93 = "post",
    _0x1b972c = "https://api.m.jd.com/api";
  switch (_0x1db2eb) {
    case "sign":
      _0x1b972c = "https://api.m.jd.com/client.action?functionId=doInteractiveAssignment";
      _0x431a8c = "appid=babelh5&body={\"sourceCode\":\"acetttsign\",\"encryptProjectId\":\"" + $.encryptProjectId + "\",\"encryptAssignmentId\":\"" + $.encryptAssignmentId + "\",\"completionFlag\":true,\"itemId\":\"1\",\"extParam\":{\"forceBot\":\"1\",\"businessData\":{},\"signStr\":\"-1\",\"sceneid\":\"babel_4RYbb8NtVAegmT35SuM2N3KKYLWt\"},\"activity_id\":\"4RYbb8NtVAegmT35SuM2N3KKYLWt\",\"template_id\":\"00035605\",\"floor_id\":\"101674850\",\"enc\":\"082F6E6EB76A8CBEE15FCF7E92519D4A0C14A052EDB9C9248A0F4121699403D36C35C158EFB65C32311DCE62FF076E717D80B5322FC0FC3B1D3CA22644BC685E\"}&sign=11&t=" + Date.now();
      _0x4a5334 = "doInteractiveAssignment";
      break;
    case "yysign":
      _0x431a8c = "appid=laputa&body={\"methodName\":\"handleBeanInfo2595\",\"functionId\":\"sign\",\"osName\":\"feedProduct\",\"appId\":\"807635028594484682708c54f69b1217\",\"version\":\"1\",\"deviceNo\":\"\",\"handleType\":\"sign\",\"encryptProjectId\":\"3vRVP84ukngNhNYVDQTXuQQzJjit\",\"encryptAssignmentIds\":[\"3LbDQhTDsr5n7wL4XPyubMvEuUR3\"],\"deviceType\":1,\"lng\":0,\"lat\":0,\"itemId\":\"1\"}";
      _0x4a5334 = "jdh_laputa_handleSoaRequest";
      break;
    default:
      console.log("错误" + _0x1db2eb);
  }
  if (_0x23dd2d) {
    let _0x1c60c8 = {
      appId: _0x23dd2d,
      functionId: _0x4a5334,
      body: _0x431a8c,
      appid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      t: Date.now(),
      ua: $.UA
    };
    _0x431a8c = await bdy_0x5d6012.getbody(_0x1c60c8);
    if (!_0x431a8c) {
      return;
    }
  } else {
    _0x431a8c && (_0x431a8c = "functionId=" + _0x4a5334 + "&" + _0x431a8c);
  }
  let _0x29ae2b = bdy_0x51d5e4(_0x1b972c, _0x431a8c);
  return new Promise(async _0x5cb506 => {
    $["d" + _0x1d9a93](_0x29ae2b, async (_0x2c35fd, _0x222a29, _0x356fc2) => {
      try {
        if (_0x2c35fd) {
          if (_0x222a29 && typeof _0x222a29.statusCode != "undefined") {
            if (_0x222a29.statusCode == 493) {
              if (bdy_0x1e869a < 6) {
                bdy_0x1e869a++;
                await bdy_0xb60bf1(_0x1db2eb);
                return;
              }
              console.log("ip可能被限制，过10分钟后再执行脚本\n");
              $.outFlag = true;
            }
          }
          console.log("" + $.toStr(_0x2c35fd, _0x2c35fd));
        } else {
          if (_0x356fc2.includes("doctype") && bdy_0x1e869a < 6) {
            bdy_0x1e869a++;
            await bdy_0xb60bf1(_0x1db2eb);
            return;
          }
          bdy_0x1e869a = 0;
          bdy_0x103185(_0x1db2eb, _0x356fc2);
        }
      } catch (_0x54b2fd) {
        console.log(_0x54b2fd, _0x222a29);
      } finally {
        _0x5cb506();
      }
    });
  });
}
async function bdy_0x103185(_0x3f27aa, _0x5193d7) {
  let _0x47f12a = "";
  try {
    _0x47f12a = JSON.parse(_0x5193d7);
  } catch (_0x397f2a) {
    console.log(_0x3f27aa + " 执行任务异常");
  }
  try {
    switch (_0x3f27aa) {
      case "apTaskList":
        if (_0x47f12a.code == 0) {
          $.taskList = _0x47f12a.data || [];
        } else {
          $.taskList = [];
          console.log("获取任务失败！");
        }
        break;
      case "sign":
        if (_0x47f12a.subCode == 0) {
          for (let _0x20d624 in _0x47f12a.rewardsInfo) {
            switch (_0x20d624) {
              case "successRewards":
                for (let _0x5af26d in _0x47f12a.rewardsInfo.successRewards) {
                  for (let _0x48da14 of _0x47f12a.rewardsInfo.successRewards[_0x5af26d]) {
                    console.log(_0x48da14.rewardName + ": " + _0x48da14.quantity + " 🥔");
                  }
                }
                break;
              case "failRewards":
                for (let _0x311de0 of _0x47f12a.rewardsInfo.failRewards) {
                  console.log("" + _0x311de0.msg);
                }
                break;
            }
          }
        } else {
          console.log(_0x47f12a.msg);
        }
        break;
      case "yysign":
        if (_0x47f12a.success) {
          const _0x5425e3 = _0x47f12a?.["data"]?.["signResultDTO"];
          _0x5425e3?.["signStatus"] ? console.log(_0x5425e3?.["rewardMsg"]) : "";
        } else {
          console.log(_0x47f12a.msg);
        }
        break;
      case "apStartTaskTime":
      case "apDoLimitTimeTask":
        break;
      default:
        console.log(_0x3f27aa + " -> " + _0x5193d7);
    }
    typeof _0x47f12a == "object" && _0x47f12a.errorMessage && _0x47f12a.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0x2cf270) {
    console.log(_0x3f27aa + " " + _0x2cf270);
  }
}
function bdy_0x51d5e4(_0x1e453c, _0x505a74) {
  typeof _0x505a74 == "object";
  let _0x5d6674 = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    Origin: "https://pro.jd.com",
    Referer: "https://pro.jd.com/",
    Cookie: bdy_0x38b2c5,
    "User-Agent": $.UA
  };
  const _0x2e0669 = {
    url: _0x1e453c,
    headers: _0x5d6674,
    timeout: 30000,
    ...(_0x505a74 ? {
      body: _0x505a74
    } : {})
  };
  return _0x2e0669;
}
async function bdy_0x1b5374() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0x5133d0(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0x5133d0(_0x326918) {
  _0x326918 = _0x326918 || 32;
  let _0x1a2f62 = "abcdef0123456789",
    _0x43e7a7 = _0x1a2f62.length,
    _0x4f9576 = "";
  for (i = 0; i < _0x326918; i++) {
    _0x4f9576 += _0x1a2f62.charAt(Math.floor(Math.random() * _0x43e7a7));
  }
  return _0x4f9576;
}
function bdy_0x5539b3(_0xd948d8) {
  if (typeof _0xd948d8 == "string") {
    try {
      return JSON.parse(_0xd948d8);
    } catch (_0x2540c4) {
      console.log(_0x2540c4);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function bdy_0x1d19b0() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x2129f3 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x218764 = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    $.shopactivityId == "" && delete _0x218764.activityId;
    let _0x2b6881 = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x218764,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x218764 = await dyy.getbody(_0x2b6881);
    const _0xe6b9bf = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x38b2c5,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x4ad179 = {
      url: "https://api.m.jd.com/client.action?" + _0x218764 + "&uuid=88888",
      headers: _0xe6b9bf,
      timeout: 30000
    };
    $.dget(_0x4ad179, async (_0x1d32c2, _0x1afa9a, _0x313038) => {
      try {
        _0x313038 = _0x313038 && _0x313038.match(/jsonp_.*?\((.*?)\);/) && _0x313038.match(/jsonp_.*?\((.*?)\);/)[1] || _0x313038;
        let _0x4c291e = $.toObj(_0x313038, _0x313038);
        if (_0x4c291e && typeof _0x4c291e == "object") {
          if (_0x4c291e && _0x4c291e.success === true) {
            console.log("    " + _0x4c291e.message);
            $.errorJoinShop = _0x4c291e.message;
            if (_0x4c291e.result && _0x4c291e.result.giftInfo) {
              for (let _0x3c815f of _0x4c291e.result.giftInfo.giftList) {
                console.log("入会获得:" + _0x3c815f.discountString + _0x3c815f.prizeName + _0x3c815f.secondLineDesc);
              }
            }
          } else {
            _0x4c291e && typeof _0x4c291e == "object" && _0x4c291e.message ? ($.errorJoinShop = _0x4c291e.message, console.log("" + (_0x4c291e.message || ""))) : console.log(_0x313038);
          }
        } else {
          console.log(_0x313038);
        }
      } catch (_0x3aeba0) {
        $.logErr(_0x3aeba0, _0x1afa9a);
      } finally {
        _0x2129f3();
      }
    });
  });
}
switch ($.type) {
  case "nb":
    const bdy_0x5d04e7 = {
      nb: nb
    };
    _0xf1f6le = bdy_0x5d04e7;
    break;
}
async function bdy_0x5b6fd4() {
  return new Promise(async _0x25c644 => {
    let _0x4e8875 = {
      venderId: $.joinVenderId,
      payUpShop: true,
      queryVersion: "10.5.2",
      appid: "ef79a",
      needSecurity: true,
      bizId: "shop_view_app",
      channel: 406
    };
    let _0x2b2ef4 = {
      appId: "ef79a",
      fn: "getShopOpenCardInfo",
      body: _0x4e8875,
      apid: "jd_shop_member",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x4e8875 = await dyy.getbody(_0x2b2ef4);
    const _0x32b6d1 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x38b2c5,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    const _0x3f92e0 = {
      url: "https://api.m.jd.com/client.action?" + _0x4e8875 + "&uuid=88888",
      headers: _0x32b6d1,
      timeout: 60000
    };
    $.get(_0x3f92e0, async (_0xde58de, _0x474eb7, _0x345e99) => {
      try {
        _0x345e99 = _0x345e99 && _0x345e99.match(/jsonp_.*?\((.*?)\);/) && _0x345e99.match(/jsonp_.*?\((.*?)\);/)[1] || _0x345e99;
        let _0x49e2cb = $.toObj(_0x345e99, _0x345e99);
        _0x49e2cb && typeof _0x49e2cb == "object" ? _0x49e2cb && _0x49e2cb.success == true && (console.log("去加入 -> " + (_0x49e2cb.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x49e2cb.result[0].interestsRuleList && _0x49e2cb.result[0].interestsRuleList[0] && _0x49e2cb.result[0].interestsRuleList[0].interestsInfo && _0x49e2cb.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x345e99);
      } catch (_0x5fee6) {
        $.logErr(_0x5fee6, _0x474eb7);
      } finally {
        _0x25c644();
      }
    });
  });
}
function bdy_0x1843c9(_0x5e528e, _0x3b25ff) {
  return Math.floor(Math.random() * (_0x3b25ff - _0x5e528e)) + _0x5e528e;
}
function bdy_0x3ffbdd(_0x5307c8 = +new Date()) {
  var _0x4d3a10 = new Date(_0x5307c8 + 28800000);
  return _0x4d3a10.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function bdy_0x363bd7() {
  return new Promise(_0x14f9a4 => {
    const _0x5114a8 = {
      Cookie: bdy_0x38b2c5,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x40adab = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x5114a8,
      timeout: 10000
    };
    $.get(_0x40adab, (_0x15d9b6, _0x2a301e, _0x55a921) => {
      try {
        if (_0x55a921) {
          _0x55a921 = JSON.parse(_0x55a921);
          if (!(_0x55a921.islogin === "1")) {
            _0x55a921.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x5ab73a) {
        console.log(_0x5ab73a);
      } finally {
        _0x14f9a4();
      }
    });
  });
}
function Env(o,t){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((r,i)=>{s.call(this,t,(t,e,s)=>{t?i(t):r(e)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.logLevels={debug:0,info:1,warn:2,error:3},this.logLevelPrefixs={debug:"[DEBUG] ",info:"[INFO] ",warn:"[WARN] ",error:"[ERROR] "},this.logLevel="info",this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null,...s){try{return JSON.stringify(t,...s)}catch{return e}}getjson(t,e){let s=e;if(this.getdata(t))try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(r=>{this.get({url:t},(t,e,s)=>r(s))})}runScript(a,o){return new Promise(r=>{let t=this.getdata("@chavy_boxjs_userCfgs.httpapi");t=t&&t.replace(/\n/g,"").trim();var e=(e=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"))?+e:20,[s,i]=(e=o&&o.timeout?o.timeout:e,t.split("@"));this.post({url:`http://${i}/v1/scripting/evaluate`,body:{script_text:a,mock_type:"cron",timeout:e},headers:{"X-Key":s,Accept:"*/*"},timeout:e},(t,e,s)=>r(s))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};this.fs=this.fs||require("fs"),this.path=this.path||require("path");var t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),r=!s&&this.fs.existsSync(e);if(!s&&!r)return{};r=s?t:e;try{return JSON.parse(this.fs.readFileSync(r))}catch(t){return{}}}writedata(){var t,e,s,r,i;this.isNode()&&(this.fs=this.fs||require("fs"),this.path=this.path||require("path"),t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),r=!(s=this.fs.existsSync(t))&&this.fs.existsSync(e),i=JSON.stringify(this.data),!s&&r?this.fs.writeFileSync(e,i):this.fs.writeFileSync(t,i))}lodash_get(t,e,s){let r=t;for(const t of e.replace(/\[(\d+)\]/g,".$1").split("."))if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,r,e){return Object(t)===t&&((r=Array.isArray(r)?r:r.toString().match(/[^.[\]]+/g)||[]).slice(0,-1).reduce((t,e,s)=>Object(t[e])===t[e]?t[e]:t[e]=Math.abs(r[s+1])>>0==+r[s+1]?[]:{},t)[r[r.length-1]]=e),t}getdata(t){let e=this.getval(t);if(/^@/.test(t)){var[,s,r]=/^@(.*?)\.(.*?)$/.exec(t);if(s=s?this.getval(s):"")try{const t=JSON.parse(s);e=t?this.lodash_get(t,r,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){var[,r,i]=/^@(.*?)\.(.*?)$/.exec(e),a=this.getval(r),a=r?"null"===a?null:a||"{}":"{}";try{const e=JSON.parse(a);this.lodash_set(e,i,t),s=this.setval(JSON.stringify(e),r)}catch(e){this.lodash_set(a={},i,t),s=this.setval(JSON.stringify(a),r)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got||require("got"),this.cktough=this.cktough||require("tough-cookie"),this.ckjar=this.ckjar||new this.cktough.CookieJar,t&&(t.headers=t.headers||{},t)&&(t.headers=t.headers||{},void 0===t.headers.cookie)&&void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar)}tmout(){return new Promise((t,e)=>{this.tmoutId=setTimeout(()=>{this.prms.cancel(),e({message:"timemout",response:""})},5e4)})}get(t,a=()=>{}){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),t.params&&(t.url+="?"+this.queryStr(t.params)),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,e,s)=>{!t&&e&&(e.body=s,e.statusCode=e.status||e.statusCode,e.status=e.statusCode),a(t,e,s)});break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{var{statusCode:t,statusCode:e,headers:s,body:r,bodyBytes:i}=t;a(null,{status:t,statusCode:e,headers:s,body:r,bodyBytes:i},r,i)},t=>a(t&&t.error||"UndefinedError"));break;case"Node.js":this.initGotEnv(t),this.prms=this.got(t).on("redirect",(t,e)=>{try{var s;t.headers["set-cookie"]&&((s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString())&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar)}catch(t){this.logErr(t)}}),Promise.race([this.prms,this.tmout()]).then(t=>{var{statusCode:t,statusCode:e,headers:s,rawBody:r,body:i}=t;a(null,{status:t,statusCode:e,headers:s,rawBody:r,body:i},i),clearTimeout(this.tmoutId)},t=>{var{message:t,response:e}=t;clearTimeout(this.tmoutId),a(t,e,e&&e.body)})}}post(t,a=()=>{}){var e=t.method?t.method.toLocaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[e](t,(t,e,s)=>{!t&&e&&(e.body=s,e.statusCode=e.status||e.statusCode,e.status=e.statusCode),a(t,e,s)});break;case"Quantumult X":t.method=e,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{var{statusCode:t,statusCode:e,headers:s,body:r,bodyBytes:i}=t;a(null,{status:t,statusCode:e,headers:s,body:r,bodyBytes:i},r,i)},t=>a(t&&t.error||"UndefinedError"));break;case"Node.js":this.initGotEnv(t);var{url:s,...r}=t;this.prms=this.got[e](s,r),Promise.race([this.prms,this.tmout()]).then(t=>{var{statusCode:t,statusCode:e,headers:s,rawBody:r,body:i}=t;a(null,{status:t,statusCode:e,headers:s,rawBody:r,body:i},i),clearTimeout(this.tmoutId)},t=>{var{message:t,response:e}=t;clearTimeout(this.tmoutId),a(t,e,e&&e.body)})}}time(t,e=null){var s,r={"M+":(e=e?new Date(e):new Date).getMonth()+1,"d+":e.getDate(),"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(s in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[s]:("00"+r[s]).substr((""+r[s]).length)));return t}queryStr(e){let s="";for(const r in e){let t=e[r];null!=t&&""!==t&&("object"==typeof t&&(t=JSON.stringify(t)),s+=`${r}=${t}&`)}return s=s.substring(0,s.length-1)}msg(t=o,e="",s="",r={}){var i,a=r=>{const{$open:t,$copy:e,$media:i,$mediaMime:a}=r;switch(typeof r){case void 0:return r;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:r};case"Loon":case"Shadowrocket":return r;case"Quantumult X":return{"open-url":r};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:var o={},s=r.openUrl||r.url||r["open-url"]||t;if(s&&Object.assign(o,{action:"open-url",url:s}),(s=r["update-pasteboard"]||r.updatePasteboard||e)&&Object.assign(o,{action:"clipboard",text:s}),i){let t,e,s;if(i.startsWith("http"))t=i;else if(i.startsWith("data:")){const[r]=i.split(";"),[,a]=i.split(",");e=a,s=r.replace("data:","")}else e=i,s=(t=>{var e,s={JVBERi0:"application/pdf",R0lGODdh:"image/gif",R0lGODlh:"image/gif",iVBORw0KGgo:"image/png","/9j/":"image/jpg"};for(e in s)if(0===t.indexOf(e))return s[e];return null})(i);Object.assign(o,{"media-url":t,"media-base64":e,"media-base64-mime":a??s})}return Object.assign(o,{"auto-dismiss":r["auto-dismiss"],sound:r.sound}),o;case"Loon":{const e={};(s=r.openUrl||r.url||r["open-url"]||t)&&Object.assign(e,{openUrl:s});var n=r.mediaUrl||r["media-url"];return(n=i?.startsWith("http")?i:n)&&Object.assign(e,{mediaUrl:n}),console.log(JSON.stringify(e)),e}case"Quantumult X":{const a={};(o=r["open-url"]||r.url||r.openUrl||t)&&Object.assign(a,{"open-url":o});n=r["media-url"]||r.mediaUrl;return(n=i?.startsWith("http")?i:n)&&Object.assign(a,{"media-url":n}),(s=r["update-pasteboard"]||r.updatePasteboard||e)&&Object.assign(a,{"update-pasteboard":s}),console.log(JSON.stringify(a)),a}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(t,e,s,a(r));break;case"Quantumult X":$notify(t,e,s,a(r));break;case"Node.js":}this.isMuteLog||((i=["","==============📣系统通知📣=============="]).push(t),e&&i.push(e),s&&i.push(s),console.log(i.join("\n")),this.logs=this.logs.concat(i))}debug(...t){this.logLevels[this.logLevel]<=this.logLevels.debug&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.debug+t.map(t=>t??String(t)).join(this.logSeparator)))}info(...t){this.logLevels[this.logLevel]<=this.logLevels.info&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.info+t.map(t=>t??String(t)).join(this.logSeparator)))}warn(...t){this.logLevels[this.logLevel]<=this.logLevels.warn&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.warn+t.map(t=>t??String(t)).join(this.logSeparator)))}error(...t){this.logLevels[this.logLevel]<=this.logLevels.error&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.error+t.map(t=>t??String(t)).join(this.logSeparator)))}log(...t){0<t.length&&(this.logs=[...this.logs,...t]),console.log(t.map(t=>t??String(t)).join(this.logSeparator))}logErr(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️${this.name}, 错误!`,t);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,void 0!==t.message?t.message:t)}}wait(e){return new Promise(t=>setTimeout(t,e))}done(t={}){var e=((new Date).getTime()-this.startTime)/1e3;switch(this.log("",`🔔${this.name}, 结束! 🕛 ${e} 秒`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(o,t)}