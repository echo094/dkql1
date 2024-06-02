/*
东东健康社区收集能量收集能量(不做任务，任务脚本请使用jd_health.js)
cron "5-45/20 1-5 * * *" script-path=jd_health_collect.js, tag=东东健康社区收集能量
 */
const $ = new Env("东东健康社区收集能量收集");
const bdy_0x42bbc8 = $.isNode() ? require("./jdCookie.js") : "";
let bdy_0x2d8a17 = [],
  bdy_0x1bba87 = "",
  bdy_0xc6c07e;
if (process.env.DY_PROXY) {
  try {
    ccc = require("./function/proxy.js");
    $.dget = ccc.intoRequest($.get.bind($));
    $.dpost = ccc.intoRequest($.post.bind($));
  } catch {
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
if ($.isNode()) {
  Object.keys(bdy_0x42bbc8).forEach(_0x362b39 => {
    bdy_0x2d8a17.push(bdy_0x42bbc8[_0x362b39]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x2d8a17 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...$.toObj($.getdata("CookiesJD") || "[]").map(_0x2ab73c => _0x2ab73c.cookie)].filter(_0x3bcb96 => !!_0x3bcb96);
}
const bdy_0x540660 = "http://api.m.jd.com/";
!(async () => {
  if (!bdy_0x2d8a17[0]) {
    const _0x4f3b7f = {
      "open-url": "https://bean.m.jd.com/"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/", _0x4f3b7f);
    return;
  }
  console.log("支持API");
  for (let _0xdb9744 = 0; _0xdb9744 < bdy_0x2d8a17.length; _0xdb9744++) {
    bdy_0x2d8a17[_0xdb9744] && (bdy_0x1bba87 = bdy_0x2d8a17[_0xdb9744], $.UserName = decodeURIComponent(bdy_0x1bba87.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x1bba87.match(/pt_pin=([^; ]+)(?=;?)/)[1]), $.index = _0xdb9744 + 1, bdy_0xc6c07e = "", bdy_0x1294b9(), console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n"), await bdy_0x17f958(), await $.wait(2000));
  }
})().catch(_0x2edba4 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x2edba4 + "!", "");
}).finally(() => {
  $.done();
});
function bdy_0x17f958() {
  return new Promise(_0x3a0417 => {
    $.dget(bdy_0x18a3f0("jdhealth_collectProduceScore", {}), (_0x52a7d0, _0x1cdd9a, _0x5d23f3) => {
      try {
        if (_0x52a7d0) {
          console.log(_0x52a7d0);
        } else {
          if (bdy_0x38bb3f(_0x5d23f3)) {
            _0x5d23f3 = $.toObj(_0x5d23f3);
            if (_0x5d23f3?.["data"]?.["bizCode"] === 0) {
              if (_0x5d23f3?.["data"]?.["result"]?.["produceScore"]) {
                console.log("收集完成，获得：" + (_0x5d23f3?.["data"]?.["result"]?.["produceScore"] ?? "未知") + "能量");
              } else {
                console.log("任务结果：" + (_0x5d23f3?.["data"]?.["bizMsg"] ?? JSON.stringify(_0x5d23f3)));
              }
            } else {
              console.log("任务完成失败：" + (_0x5d23f3?.["data"]?.["bizMsg"] ?? JSON.stringify(_0x5d23f3)));
            }
          }
        }
      } catch (_0x14fb11) {
        console.log(_0x14fb11);
      } finally {
        _0x3a0417();
      }
    });
  });
}
function bdy_0x20f7b6() {
  return new Promise(async _0x1e24cb => {
    const _0x2863dd = {
      url: "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion",
      headers: {
        Host: "me-api.jd.com",
        Accept: "*/*",
        Connection: "keep-alive",
        Cookie: bdy_0x1bba87,
        "User-Agent": $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require("./USER_AGENTS").USER_AGENT : $.getdata("JDUA") ? $.getdata("JDUA") : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
        "Accept-Language": "zh-cn",
        Referer: "https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&",
        "Accept-Encoding": "gzip, deflate, br"
      }
    };
    $.get(_0x2863dd, (_0x202905, _0x15df7b, _0x15ba06) => {
      try {
        if (_0x202905) {
          $.logErr(_0x202905);
        } else {
          if (_0x15ba06) {
            _0x15ba06 = JSON.parse(_0x15ba06);
            if (_0x15ba06.retcode === "1001") {
              $.isLogin = false;
              return;
            }
            _0x15ba06.retcode === "0" && _0x15ba06.data && _0x15ba06.data.hasOwnProperty("userInfo") && ($.nickName = _0x15ba06.data.userInfo.baseInfo.nickname);
            _0x15ba06.retcode === "0" && _0x15ba06.data && _0x15ba06.data.assetInfo && ($.beanCount = _0x15ba06.data && _0x15ba06.data.assetInfo.beanNum);
          } else {
            $.log("京东服务器返回空数据");
          }
        }
      } catch (_0x13d870) {
        $.logErr(_0x13d870);
      } finally {
        _0x1e24cb();
      }
    });
  });
}
async function bdy_0x1294b9() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0x4f30d4(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0x4f30d4(_0x410813) {
  _0x410813 = _0x410813 || 32;
  let _0x447808 = "abcdef0123456789",
    _0x3105b1 = _0x447808.length,
    _0xc0c053 = "";
  for (i = 0; i < _0x410813; i++) {
    _0xc0c053 += _0x447808.charAt(Math.floor(Math.random() * _0x3105b1));
  }
  return _0xc0c053;
}
function bdy_0x18a3f0(_0x1b7138, _0x27e9ff = {}) {
  const _0x248d02 = {
    Cookie: bdy_0x1bba87,
    origin: "https://h5.m.jd.com",
    referer: "https://h5.m.jd.com/",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": $.UA
  };
  return {
    url: bdy_0x540660 + "/client.action?functionId=" + _0x1b7138 + "&body=" + escape(JSON.stringify(_0x27e9ff)) + "&client=wh5&clientVersion=1.0.0",
    headers: _0x248d02
  };
}
function bdy_0x38bb3f(_0x418363) {
  try {
    if (typeof JSON.parse(_0x418363) == "object") {
      return true;
    }
  } catch (_0x5166a3) {
    console.log(_0x5166a3);
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

