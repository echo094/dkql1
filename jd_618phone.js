/*
活动名称：卡点618赢手机

cron:1 1 1 1 *
*/

const $ = new Env('卡点618赢手机')
const jdCookie = require("./jdCookie"),
  common = require("./utils/Rebels_jdCommon"),
  notify = require("./utils/Rebels_sendJDNotify"),
  getToken = require("./utils/Rebels_Token"),
  isNotify = false;
let domains = "https://xinrui-isv.isvjcloud.com",
  cookie = "",
  originCookie = "";
const cookiesArr = Object.keys(jdCookie).map(IIIl1i => jdCookie[IIIl1i]).filter(liiII1 => liiII1);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
!(async () => {
  $.activityUrl = "https://xinrui-isv.isvjcloud.com/phone-618-api/";
  $.act_type = "phone-618-api";
  $.appKey = "HGJl6oxR";
  notify.config({
    "title": $.name
  });
  for (let lllll = 0; lllll < cookiesArr.length; lllll++) {
    $.index = lllll + 1;
    cookie = cookiesArr[lllll];
    originCookie = cookiesArr[lllll];
    common.setCookie(originCookie);
    $.UserName = decodeURIComponent(common.getCookieValue(cookie, "pt_pin"));
    $.UA = common.genUA($.UserName);
    $.message = notify.create($.index, $.UserName);
    $.nickName = "";
    console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "******\n");
    await Main();
    common.unsetCookie();
    if ($.outFlag || $.runEnd) break;
    await $.wait(1000);
  }
  isNotify && notify.getMessage() && (notify.appendContent("\n【活动地址】" + $.activityUrl), await notify.push());
})().catch(iil1l1 => $.logErr(iil1l1)).finally(() => $.done());
async function Main() {
  try {
    $.skipRun = false;
    $.drawStop = false;
    $.mapsign = false;
    $.jdToken = "";
    if ($.runEnd || $.outFlag) return;
    $.jdToken = await getToken(originCookie, domains);
    if (!$.jdToken) {
      console.log("获取 Token 失败！");
      $.message.fix("获取[Token]失败");
      return;
    }
    await sendRequest("auth");
    if ($.runEnd || $.outFlag || $.skipRun) return;
    if (!$.token) {
      console.log("未能获取用户鉴权信息！");
      $.message.fix("未能获取用户鉴权信息");
      return;
    }
    $.get_user_info = "";
    await sendRequest("get_user_info");
    if ($.runEnd || $.outFlag || $.skipRun) return;
    await $.wait(1000);
    !$.hasPrintActInfo && ($.hasPrintActInfo = true, console.log("活动名称：卡点618赢手机\n"), notify.appendContent("活动名称：卡点618赢手机"));
    $.task_list = [];
    await sendRequest("task_list");
    for (let ii1ii1 of $.task_list || []) {
      if (ii1ii1.done_count >= ii1ii1.max_count) continue;
      for (let llllI of (ii1ii1?.["item_list"] || []).filter(lllil1 => lllil1.done == 0)) {
        $.task = ii1ii1;
        $.sub_task = llllI;
        if (ii1ii1.task_type == 5) {
          await sendRequest("catch_task");
          await $.wait(1000);
          if (ii1ii1.timer) await $.wait(ii1ii1.timer * 1000);
          await sendRequest("do_task");
          await $.wait(1000);
        }
        await sendRequest("do_task");
        await $.wait(1000);
      }
    }
    await sendRequest("get_user_info");
    if ($.runEnd || $.outFlag || $.skipRun) return;
    await $.wait(1000);
    $.num = $.get_user_info.coins;
    console.log("可以玩游戏" + $.num + "次");
    while ($.num-- > 0) {
      await sendRequest("start_game");
      await $.wait(1000);
      $.is_key && (await sendRequest("end_game"), await $.wait(1000));
    }
    await sendRequest("get_user_info");
    if ($.runEnd || $.outFlag || $.skipRun) return;
    await $.wait(1000);
    $.star = Math.floor($.get_user_info.star / 100);
    console.log("可以抽奖" + $.star + "次");
    while ($.star-- > 0 && !$.drawStop) {
      await sendRequest("lottery");
      await $.wait(1000);
    }
  } catch (IIIl11) {
    console.log("❌ 脚本运行遇到了错误\n" + IIIl11);
  }
}
async function handleResponse(liiIIi, lil11I) {
  try {
    switch (liiIIi) {
      case "get_user_info":
        if (lil11I) $.get_user_info = lil11I;else lil11I.msg ? console.log("" + lil11I.msg) : ($.skipRun = true, console.log("❓" + liiIIi + " " + JSON.stringify(lil11I)));
        break;
      case "auth":
        if (lil11I && lil11I.status === 0) $.token = lil11I.body.access_token, $.token_type = lil11I.body.token_type;else lil11I.msg ? console.log("" + lil11I.msg) : ($.skipRun = true, console.log("❓" + liiIIi + " " + JSON.stringify(lil11I)));
        break;
      case "task_list":
        if (lil11I) $.task_list = lil11I.task;else lil11I.msg ? console.log("" + lil11I.msg) : console.log("❓" + liiIIi + " " + JSON.stringify(lil11I));
        break;
      case "catch_task":
        if (lil11I) {} else lil11I.msg ? console.log("" + lil11I.msg) : console.log("❓" + liiIIi + " " + JSON.stringify(lil11I));
        break;
      case "do_task":
        if (lil11I) console.log("完成任务[" + $.task.title + "]成功");else lil11I.msg ? console.log("" + lil11I.msg) : console.log("❓" + liiIIi + " " + JSON.stringify(lil11I));
        break;
      case "start_game":
        if (lil11I) $.is_key = lil11I?.["replace"](/"/g, "");else lil11I.msg ? console.log("" + lil11I.msg) : console.log("❓" + liiIIi + " " + JSON.stringify(lil11I));
        break;
      case "end_game":
        if (lil11I) {
          let Ill1i = lil11I?.["add_star"] || 0;
          lil11I?.["prize"]["length"] !== 0 ? console.log("抽奖获得：" + lil11I?.["prize"]["prize_name"] + " x " + lil11I?.["prize"]["prize_info"]["quota"] + "，幸运值x" + Ill1i) : console.log("抽奖获得：💨 空气，幸运值x" + Ill1i);
        } else lil11I.msg ? console.log("" + lil11I.msg) : console.log("❓" + liiIIi + " " + JSON.stringify(lil11I));
        break;
      case "lottery":
        if (lil11I) lil11I?.["prize"]["length"] !== 0 ? console.log("抽奖获得：" + lil11I?.["prize"]["prize_name"] + " x " + lil11I?.["prize"]["prize_info"]["quota"]) : console.log("抽奖获得：💨 空气");else lil11I.msg ? console.log("" + lil11I.msg) : console.log("❓" + liiIIi + " " + JSON.stringify(lil11I));
        break;
    }
  } catch (II1i1) {
    console.log("❌ 未能正确处理 " + liiIIi + " 请求响应 " + (II1i1.message || II1i1));
  }
}
async function sendRequest(lI1lll) {
  if ($.runEnd || $.outFlag) return;
  let iil1lI = "https://xinrui-isv.isvjcloud.com",
    iiiliI = "",
    li1i1I = "POST";
  switch (lI1lll) {
    case "auth":
      iil1lI += "/auth/jos", iiiliI = "token=" + $.jdToken + "&jd_source=01";
      break;
    case "get_user_info":
      li1i1I = "GET", iil1lI += "/" + $.act_type + "/get_user_info";
      break;
    case "task_list":
      li1i1I = "GET", iil1lI += "/" + $.act_type + "/task_list";
      break;
    case "catch_task":
      iil1lI += "/" + $.act_type + "/catch_task", iiiliI = "token=" + $.sub_task.token;
      break;
    case "do_task":
      iil1lI += "/" + $.act_type + "/do_task", iiiliI = "token=" + $.sub_task.token + "&jd_source=01";
      break;
    case "start_game":
      iil1lI += "/" + $.act_type + "/start_game";
      break;
    case "end_game":
      iil1lI += "/" + $.act_type + "/end_game?value1=618", iiiliI = "value=618&sign=" + $.is_key;
      break;
    case "lottery":
      iil1lI += "/" + $.act_type + "/lottery";
      break;
    default:
      console.log("❌ 未知请求 " + lI1lll);
      return;
  }
  const illIii = {
    "url": iil1lI,
    "method": li1i1I,
    "headers": {
      "Host": "xinrui-isv.isvjcloud.com",
      "Accept": "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "App-Key": $.appKey,
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      "Origin": "https://xinrui-isv.isvjcloud.com",
      "Referer": "https://prodev.m.jd.com/mall/active/YmnvFMFScYFCuZMKJXiMz5EiDPR/index.html",
      "User-Agent": $.UA,
      "X-Requested-With": "com.jingdong.app.mall"
    },
    "body": iiiliI,
    "timeout": 30000
  };
  $.token && (illIii.headers.Authorization = $.token_type + $.token);
  li1i1I === "GET" && (delete illIii.body, delete illIii.headers["Content-Type"]);
  const ii1il1 = await common.request(illIii);
  if (ii1il1.status === 200) handleResponse(lI1lll, ii1il1.data);else {
    if (ii1il1.status === 422) {
      ["终点"].some(l1l111 => ii1il1.data.message.includes(l1l111)) && ($.drawStop = true, console.log("" + ii1il1.data.message));
    } else {
      if (ii1il1.status === 422) ["终点"].some(IlIlil => ii1il1.data.message.includes(IlIlil)) && ($.drawStop = true, console.log("" + ii1il1.data.message));else {
        if (ii1il1.status === 204) {} else {
          if (ii1il1.status === 403) console.log("黑号！！！"), $.skipRun = true;else ii1il1.status && console.log("🚫 " + lI1lll + " 请求失败 ➜ " + ii1il1.error);
        }
      }
    }
  }
}
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
