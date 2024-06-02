/*
活动名称：京豆红包雨
环境变量：jd_redRain2021_threads // 控制并发线程数（正整数），默认1，最大10，尽量使用默认值，否则请开启代理运行
        jd_redRain2021_interval // 自定义运行间隔时长（整数，单位毫秒），默认500
        jd_redRain2021_notify // 是否推送通知（true/false），默认不推送
        jd_redRain2021_pinFilter // 账号pin过滤，多个用@进行分割

高并发脚本，谨慎使用并发
活动限制IP严重，建议使用代理
定时请自行修改

cron:1 1 1 1 *

*/

const $ = new Env('京豆红包雨')
const jdCookie = require("./jdCookie"),
  common = require("./utils/Rebels_jdCommon"),
  notify = require("./utils/Rebels_sendJDNotify");
console.log("");
console.log("==========" + $.name + "变量说明==========");
console.log("jd_redRain2021_threads // 控制并发线程数，默认1，最大10");
console.log("jd_redRain2021_interval // 自定义运行间隔时长，默认500");
console.log("jd_redRain2021_notify // 是否通知(true/false)，默认不推送");
console.log("jd_redRain2021_pinFilter // 账号pin过滤，多个用@进行分割");
console.log("==========" + $.name + "提示结束==========");
console.log("");
let taskThreads = process.env.jd_redRain2021_threads || "1";
const runInterval = process.env.jd_redRain2021_interval || "500",
  isNotify = (process.env.jd_redRain2021_notify || process.env.jd_redRain2021_Notify) === "true",
  pinFilter = (process.env.jd_redRain2021_pinFilter || "").split("@");
interaction = [];
let cookiesArr = Object.keys(jdCookie).map(iiilil => jdCookie[iiilil]).filter(iil1li => iil1li);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
!(async () => {
  notify.config({
    "title": $.name
  });
  await Main();
  isNotify && notify.getMessage() && (await notify.push());
})().catch(iIiIl => $.logErr(iIiIl)).finally(() => $.done());
async function Main() {
  try {
    try {
      const IlIlii = parseInt(taskThreads);
      IlIlii > 0 && IlIlii !== 1 && (taskThreads = IlIlii);
    } catch {
      taskThreads = 1;
    }
    taskThreads = Math.min(taskThreads, 10);
    $.waitTime = null;
    if (runInterval) try {
      const l1l111 = parseInt(runInterval);
      l1l111 >= 0 && ($.waitTime = l1l111);
    } catch {
      console.log("⚠ 自定义运行间隔时长设置错误");
    }
    const lllI1I = "jd_" + common.genRandomString(13, "0123456789abcdefghijklmnopqrstuvwxyz");
    $.UA = common.genUA(lllI1I);
    $.JEC = common.getJEC(lllI1I);
    $.JEH = common.getJEH();
    $.xview2Config = "";
    let lillI1 = false;
    await sendRequest("xview2Config");
    if ($.xview2Config) for (let llI1I1 of $.xview2Config.targets || []) {
      for (let IlIlil of llI1I1.layers || []) {
        if (["红包雨", "京豆雨"].some(I1lIll => IlIlil.name.includes(I1lIll))) {
          let I1lIli = IlIlil.renderData.url,
            II1ii = IlIlil.preDownLoadList[0].url,
            IIIIII;
          for (let lillII of [I1lIli, II1ii]) {
            if (lillII.includes("active")) {
              IIIIII = lillII;
              break;
            }
          }
          if (!IIIIII && I1lIli.includes("json")) {
            try {
              ss = await jsonurl(I1lIli);
              for (let iIiI1 of ss.tpl.elementList) {
                if (iIiI1.dataPath.url.includes("active")) {
                  IIIIII = iIiI1.dataPath.url;
                  break;
                }
              }
            } catch (i11ii1) {}
          }
          if (IIIIII) {
            if (IlIlil.rule.beginTime) {
              lillI1 = true;
              let iiill1 = IlIlil.rule.beginTime,
                lIli1i = IlIlil.rule.endTime;
              const IIIII1 = $.time("yyyy-MM-dd HH:mm", iiill1),
                I1lIlI = $.time("yyyy-MM-dd HH:mm", lIli1i);
              let ii1ill = new Date().getTime();
              if (ii1ill > lIli1i) console.log("🔚 京豆红包雨已经结束");else ii1ill > iiill1 ? (console.log("📢 发现京豆红包雨，即将开始运行\n"), await redRainurl(IIIIII)) : console.log("📢 " + IIIII1 + "至" + I1lIlI + "有京豆红包雨");
            }
          }
        }
      }
    }
    if (!lillI1) {
      authorCodeList = await jsonurl("http://code.257999.xyz/jd_redRain2021.json");
      if (authorCodeList && authorCodeList.length > 0) for (let lIli1l = 0; lIli1l < authorCodeList.length; lIli1l++) {
        $.authorCode = authorCodeList[lIli1l];
        $.activityUrl = "https://pro.m.jd.com/mall/active/" + $.authorCode + "/index.html";
        await redRainurl($.activityUrl);
      }
    }
    if (interaction.length > 0) console.log("🏬 共计 " + interaction.length + " 个京豆红包雨活动\n");else return;
    for (let lillIi = 0; lillIi < interaction.length; lillIi++) {
      $.needRemoveCookieIndex = [];
      $.encryptProjectId = interaction[lillIi].encryptProjectId;
      $.encryptAssignmentId = interaction[lillIi].encryptAssignmentId;
      await common.concTask(taskThreads, cookiesArr, taskFnc);
      $.runEnd = false;
      lillIi !== interaction.length - 1 && console.log("");
      $.needRemoveCookieIndex.length > 0 && (cookiesArr = cookiesArr.filter((liil1i, lI1lil) => !$.needRemoveCookieIndex.includes(lI1lil + 1)), $.needRemoveCookieIndex = []);
    }
  } catch (liil1l) {
    console.log("❌ 脚本运行遇到了错误\n" + liil1l);
  }
}
async function taskFnc(Iiili1, Iil1l1) {
  if ($.runEnd) return {
    "runEnd": true
  };
  const il1iIl = decodeURIComponent(common.getCookieValue(Iiili1, "pt_pin")),
    iii1ii = "【账号" + Iil1l1 + "】" + il1iIl + "：",
    il1iIi = notify.create(Iil1l1, il1iIl);
  if (pinFilter.length > 0 && (pinFilter.includes(il1iIl) || pinFilter.includes(encodeURIComponent(il1iIl)))) {
    il1iIi.fix("已设置跳过运行当前账号");
    console.log(il1iIi.getInlineContent());
    $.needRemoveCookieIndex.push(Iil1l1);
    return;
  }
  const iii1il = await common.getLoginStatus(Iiili1);
  if (!iii1il && typeof iii1il === "boolean") {
    console.log(iii1ii + "账号无效");
    il1iIi.fix("账号无效");
    $.needRemoveCookieIndex.push(Iil1l1);
    return;
  }
  const II11li = common.genUA(il1iIl),
    I1l11i = common.getJEC(il1iIl),
    iIIiiI = common.getJEH();
  if ($.runEnd) return {
    "runEnd": true
  };
  await ililIi("dotask");
  if ($.runEnd) return {
    "runEnd": true
  };
  if ($.waitTime) await $.wait($.waitTime);
  function liiI1i(IiiliI, iii1iI) {
    try {
      switch (IiiliI) {
        case "dotask":
          if (iii1iI && iii1iI.subCode == 0) {
            let llIll = [],
              il1iII = Object.keys(iii1iI?.["rewardsInfo"]?.["successRewards"] || {});
            for (let iilli of il1iII) {
              let II11lI = iii1iI.rewardsInfo.successRewards[iilli];
              llIll = llIll.concat(II11lI.map(lI1IIi => lI1IIi?.["quantity"] ? lI1IIi.quantity + "京豆" : "优惠券"));
            }
            if (llIll.length > 0) console.log(iii1ii + "红包雨: " + llIll.join("+"));else {
              if (iii1iI?.["rewardsInfo"]?.["failRewards"]?.["length"] > 0) {
                let Ilil1l = iii1iI?.["rewardsInfo"]?.["failRewards"]?.["map"](iIIiii => iIIiii.msg)?.["join"](",") || "";
                console.log(iii1ii + "领取失败: " + Ilil1l);
                Ilil1l?.["includes"]("当前奖品已达到发放上限") && ($.runEnd = true);
              }
            }
          } else iii1iI.msg ? (console.log(iii1ii + "失败：" + iii1iI.msg), (iii1iI.msg?.["includes"]("项目未上线") || iii1iI.msg?.["includes"]("项目未开始")) && ($.runEnd = true)) : console.log("❓" + IiiliI + " " + JSON.stringify(iii1iI));
          break;
      }
    } catch (il1iI1) {
      console.log("❌ 未能正确处理 " + IiiliI + " 请求响应 " + (il1iI1.message || il1iI1));
    }
  }
  async function ililIi(iIIiil) {
    if ($.runEnd) return;
    let i1l1Ii = "",
      I1iIIi = null,
      I1iIIl = null,
      lI1IIl = "GET";
    switch (iIIiil) {
      case "dotask":
        I1iIIi = {
          "completionFlag": true,
          "sourceCode": "acehby20210924",
          "encryptProjectId": $.encryptProjectId,
          "encryptAssignmentId": $.encryptAssignmentId
        }, i1l1Ii = "https://api.m.jd.com/client.action?client=wh5&clientVersion=1.0.0&appid=redrain-2021&functionId=doInteractiveAssignment&body=" + encodeURIComponent(JSON.stringify(I1iIIi));
        break;
      default:
        console.log("❌ 未知请求 " + iIIiil);
        return;
    }
    const i1ilI = {
      "url": i1l1Ii,
      "method": lI1IIl,
      "headers": {
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": Iiili1,
        "J-E-H": iIIiiI,
        "J-E-C": I1l11i,
        "Origin": "https://pro.m.jd.com",
        "Referer": "https://pro.m.jd.com",
        "x-rp-client": "h5_1.0.0",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": II11li
      },
      "params": I1iIIl,
      "data": I1iIIi,
      "timeout": 30000
    };
    lI1IIl === "GET" && (delete i1ilI.data, delete i1ilI.headers["Content-Type"]);
    const iii1lI = 1;
    let i1ilI1 = 0,
      Iiilii = null,
      Iil1li = false;
    while (i1ilI1 < iii1lI) {
      const Iil1ll = await common.request(i1ilI);
      if (!Iil1ll.success) {
        Iiilii = "🚫 " + iIIiil + " 请求失败 ➜ " + Iil1ll.error;
        i1ilI1++;
        continue;
      }
      if (!Iil1ll.data) {
        Iiilii = "🚫 " + iIIiil + " 请求失败 ➜ 无响应数据";
        i1ilI1++;
        continue;
      }
      liiI1i(iIIiil, Iil1ll.data);
      Iil1li = false;
      break;
    }
    i1ilI1 >= iii1lI && (console.log(Iiilii), Iil1li && ($.outFlag = true));
  }
}
async function handleResponse(IllIiI, i1il1) {
  try {
    switch (IllIiI) {
      case "xview2Config":
        if (i1il1.code === 0 && i1il1.data) {
          $.xview2Config = i1il1.data;
        } else i1il1.message ? console.log(i1il1.message) : console.log(JSON.stringify(i1il1));
        break;
    }
  } catch (iii1l1) {
    console.log("❌ 未能正确处理 " + IllIiI + " 请求响应 " + (iii1l1.message || iii1l1));
  }
}
async function sendRequest(II11ll) {
  if ($.runEnd || $.outFlag) return;
  let ililII = "",
    lI1II1 = null,
    i1ilII = null,
    iIIii1 = "POST",
    IllIi1 = {};
  switch (II11ll) {
    case "xview2Config":
      ililII = "https://api.m.jd.com/client.action?functionId=xview2Config&clientVersion=11.3.2&build=98450&client=android&ef=1&ep=%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A1668133263098%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22area%22%3A%22CJvpCJYmCV81CNS4C182Ctq4Dm%3D%3D%22%2C%22d_model%22%3A%22Vu9RBUPCCNK%3D%22%2C%22wifiBssid%22%3A%22dW5hbw93bq%3D%3D%22%2C%22osVersion%22%3A%22CJK%3D%22%2C%22d_brand%22%3A%22IPVLV0VT%22%2C%22screen%22%3A%22CtS2DIenCNqm%22%2C%22uuid%22%3A%22DJruCNK5DtGmZNqmDQO2Zq%3D%3D%22%2C%22aid%22%3A%22DJruCNK5DtGmZNqmDQO2Zq%3D%3D%22%2C%22openudid%22%3A%22DJruCNK5DtGmZNqmDQO2Zq%3D%3D%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D&st=1668148535443&sign=7dd658a66305f1485c5f38d77e02f194&sv=121", IllIi1 = {
        "body": {
          "api-version": "1.1.0"
        }
      }, i1ilII = {
        "functionId": "xview2Config"
      }, lI1II1 = "lmt=0&body={\"api-version\":\"1.1.0\"}";
      break;
    default:
      console.log("❌ 未知请求 " + II11ll);
      return;
  }
  const lilIII = {
    "url": ililII,
    "method": iIIii1,
    "headers": {
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8",
      "Connection": "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      "J-E-H": $.JEH,
      "J-E-C": $.JEC,
      "Host": "api.m.jd.com",
      "Origin": "https://api.m.jd.com",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent": $.UA
    },
    "params": i1ilII,
    "data": lI1II1,
    "timeout": 30000
  };
  iIIii1 === "GET" && (delete lilIII.data, delete lilIII.headers["Content-Type"]);
  const Ii1ilI = 1;
  let II11i1 = 0,
    iliIil = null,
    iliIii = false;
  while (II11i1 < Ii1ilI) {
    II11i1 > 0 && (await $.wait(1000));
    const lill1l = await common.request(lilIII);
    if (!lill1l.success) {
      iliIil = "🚫 " + II11ll + " 请求失败 ➜ " + lill1l.error;
      II11i1++;
      continue;
    }
    if (!lill1l.data) {
      iliIil = "🚫 " + II11ll + " 请求失败 ➜ 无响应数据";
      II11i1++;
      continue;
    }
    await handleResponse(II11ll, lill1l.data);
    iliIii = false;
    break;
  }
  II11i1 >= Ii1ilI && (console.log(iliIil), iliIii && ($.outFlag = true, $.message && $.message.fix(iliIil)));
}
async function jsonurl(i1iiI) {
  const llI11I = await common.request({
      "url": i1iiI,
      "method": "GET",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
      },
      "proxy": null,
      "debug": false,
      "timeout": 30000
    }),
    Il1i11 = llI11I.data;
  return Il1i11;
}
function random(iii1li, Iil1i1) {
  return Math.floor(Math.random() * (Iil1i1 - iii1li)) + iii1li;
}
async function redRainurl(iii1ll) {
  const il1lI = {
      "url": iii1ll,
      "method": "GET",
      "headers": {
        "Cookie": cookiesArr[1],
        "User-Agent": $.UA
      },
      "timeout": 30000
    },
    IliIIl = 5;
  let I1il1l = 0,
    lI1l1l = null,
    IIliII = false;
  while (I1il1l < IliIIl) {
    I1il1l > 0 && (await $.wait(1000));
    const Ill11I = await common.request(il1lI);
    if (!Ill11I.success) {
      lI1l1l = "" + Ill11I.error;
      I1il1l++;
      Ill11I.status && [403, 493].includes(Ill11I.status) && (IIliII = true);
      continue;
    }
    if (!Ill11I.data) {
      lI1l1l = "无响应数据";
      I1il1l++;
      continue;
    }
    if (Ill11I.data.match(/(活动已经结束)/) && Ill11I.data.match(/(活动已经结束)/)[1]) {
      $.runEnd = true;
      console.log("失败，活动已结束或不存在");
      return;
    }
    let I1il1i = Ill11I.data?.["match"](/__api_data__ *= *(\{.*?\});/);
    if (!I1il1i) {
      lI1l1l = "\n数据未获取成功，请检查网络是否正常，Cookie是否有效";
      I1il1l++;
      continue;
    }
    if (I1il1i) {
      let llI11l = JSON.parse(I1il1i[1]);
      for (let I1llIl of llI11l?.["floorList"] || []) {
        if (I1llIl?.["boardParams"]?.["interaction"]) {
          let i1iIi1 = JSON.parse(I1llIl.boardParams.interaction);
          if (i1iIi1?.["encryptProjectId"] && i1iIi1?.["encryptAssignmentId"]) {
            $.interaction = i1iIi1;
            interaction.push($.interaction);
            break;
          }
        }
      }
      if (!$.interaction) {
        let I11i1I = llI11l.shieldResult?.["evContent"] || "{}";
        var iiliI = JSON.parse(I11i1I);
        let iliIi1 = "",
          l1l1ii = "";
        iiliI && iiliI.bottomText && (iliIi1 = iiliI.title || "", l1l1ii = iiliI.bottomText || "");
        lI1l1l = "\n失败，原因：" + iliIi1 + " || " + l1l1ii + "\n";
        I1il1l++;
        continue;
      }
    }
    break;
  }
  I1il1l >= IliIIl && (console.log(lI1l1l), IIliII && ($.outFlag = true));
}
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
