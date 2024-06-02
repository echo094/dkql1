/*
活动名称：京豆红包雨
环境变量：jd_redRain2021_threads // 控制并发线程数（正整数），默认1，最大3，尽量使用默认值，否则请开启代理运行
        jd_redRain2021_interval // 自定义运行间隔时长（整数，单位毫秒），默认2000
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
console.log("jd_redRain2021_interval // 自定义运行间隔时长，默认2000");
console.log("jd_redRain2021_notify // 是否通知(true/false)，默认不推送");
console.log("jd_redRain2021_pinFilter // 账号pin过滤，多个用@进行分割");
console.log("==========" + $.name + "提示结束==========");
console.log("");
let taskThreads = process.env.jd_redRain2021_threads || "1";
const runInterval = process.env.jd_redRain2021_interval || "2000",
  isNotify = (process.env.jd_redRain2021_notify || process.env.jd_redRain2021_Notify) === "true",
  pinFilter = (process.env.jd_redRain2021_pinFilter || "").split("@");
interaction = [];
let hasGetBasicInfo = false,
  cookiesArr = Object.keys(jdCookie).map(Il1i11 => jdCookie[Il1i11]).filter(iii1li => iii1li);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
const prize_map = {
  1: "[积分]",
  3: "[京豆]",
  5: "[实物]",
  7: "[优惠券]",
  8: "[优惠券]"
};
!(async () => {
  notify.config({
    "title": $.name
  });
  await Main();
  isNotify && notify.getMessage() && (await notify.push());
})().catch(iliIl1 => $.logErr(iliIl1)).finally(() => $.done());
async function Main() {
  try {
    try {
      const Ilil1i = parseInt(taskThreads);
      Ilil1i > 0 && Ilil1i !== 1 && (taskThreads = Ilil1i);
    } catch {
      taskThreads = 1;
    }
    taskThreads = Math.min(taskThreads, 3);
    $.waitTime = null;
    if (runInterval) try {
      const II11ii = parseInt(runInterval);
      II11ii >= 0 && ($.waitTime = II11ii);
    } catch {
      console.log("⚠ 自定义运行间隔时长设置错误");
    }
    const iIIilI = "jd_" + common.genRandomString(13, "0123456789abcdefghijklmnopqrstuvwxyz");
    $.UA = common.genUA(iIIilI);
    $.JEC = common.getJEC(iIIilI);
    $.JEH = common.getJEH();
    $.xview2Config = "";
    let il1l1 = false;
    await sendRequest("xview2Config");
    if ($.xview2Config) for (let II11il of $.xview2Config.targets || []) {
      for (let iIIil1 of II11il.layers || []) {
        if (["红包雨", "京豆雨"].some(IlllII => iIIil1.name.includes(IlllII))) {
          let I1il1I = iIIil1.renderData.url,
            II111 = iIIil1.preDownLoadList[0].url,
            lI1l1I;
          for (let lill11 of [I1il1I, II111]) {
            if (lill11.includes("active")) {
              lI1l1I = lill11;
              break;
            }
          }
          if (!lI1l1I && I1il1I.includes("json")) {
            try {
              ss = await jsonurl(I1il1I);
              for (let I11i11 of ss.tpl.elementList) {
                if (I11i11.dataPath.url.includes("active")) {
                  lI1l1I = I11i11.dataPath.url;
                  break;
                }
              }
            } catch (I1llI1) {}
          }
          if (lI1l1I) {
            if (iIIil1.rule.beginTime) {
              il1l1 = true;
              let I11i1l = iIIil1.rule.beginTime,
                il1il = iIIil1.rule.endTime;
              const Il1i1i = $.time("yyyy-MM-dd HH:mm", I11i1l),
                iIIili = $.time("yyyy-MM-dd HH:mm", il1il);
              let Ii1iiI = new Date().getTime();
              if (Ii1iiI > il1il) console.log("🔚 京豆红包雨已经结束");else Ii1iiI > I11i1l ? (console.log("📢 发现京豆红包雨，即将开始运行\n"), await redRainurl(lI1l1I)) : console.log("📢 " + Il1i1i + "至" + iIIili + "有京豆红包雨");
            }
          }
        }
      }
    }
    if (!il1l1) {
      authorCodeList = await jsonurl("http://code.257999.xyz/jd_redRain2021.json");
      if (authorCodeList && authorCodeList.length > 0) for (let II11iI = 0; II11iI < authorCodeList.length; II11iI++) {
        $.authorCode = authorCodeList[II11iI];
        $.activityUrl = "https://pro.m.jd.com/mall/active/" + $.authorCode + "/index.html";
        await redRainurl($.activityUrl);
      }
    }
    if (interaction.length > 0) console.log("🏬 共计 " + interaction.length + " 个京豆红包雨活动\n");else return;
    for (let Il1i1l = 0; Il1i1l < interaction.length; Il1i1l++) {
      $.needRemoveCookieIndex = [];
      $.encryptProjectId = interaction[Il1i1l].encryptProjectId;
      $.encryptAssignmentId = interaction[Il1i1l].encryptAssignmentId;
      await common.concTask(taskThreads, cookiesArr, taskFnc);
      $.runEnd = false;
      Il1i1l !== interaction.length - 1 && console.log("");
      $.needRemoveCookieIndex.length > 0 && (cookiesArr = cookiesArr.filter((Ii1ii1, Ilil11) => !$.needRemoveCookieIndex.includes(Ilil11 + 1)), $.needRemoveCookieIndex = []);
    }
  } catch (i1ii1) {
    console.log("❌ 脚本运行遇到了错误\n" + i1ii1);
  }
}
async function taskFnc(llI111, i1iIiI) {
  if ($.runEnd) return {
    "runEnd": true
  };
  const I1il11 = decodeURIComponent(common.getCookieValue(llI111, "pt_pin")),
    lI1l11 = "【账号" + i1iIiI + "】" + I1il11 + "：",
    II11l = notify.create(i1iIiI, I1il11);
  if (pinFilter.length > 0 && (pinFilter.includes(I1il11) || pinFilter.includes(encodeURIComponent(I1il11)))) {
    II11l.fix("已设置跳过运行当前账号");
    console.log(II11l.getInlineContent());
    $.needRemoveCookieIndex.push(i1iIiI);
    return;
  }
  const II11i = await common.getLoginStatus(llI111);
  if (!II11i && typeof II11i === "boolean") {
    console.log(lI1l11 + "账号无效");
    II11l.fix("账号无效");
    $.needRemoveCookieIndex.push(i1iIiI);
    return;
  }
  let iI1Iii;
  const liI1ii = common.genUA(I1il11),
    lIIiIl = common.getJEC(I1il11),
    iI1Iil = common.getJEH();
  if ($.runEnd) return {
    "runEnd": true
  };
  if (!hasGetBasicInfo) {
    hasGetBasicInfo = true;
    await i1iIii("queryInteractiveInfo");
    await $.wait(parseInt($.waitTime * 1 + 500, 10));
    if (iI1Iii) {
      let li11i = iI1Iii?.["assignmentList"]?.["filter"](lliiIi => lliiIi.assignmentType == 0);
      prizeInfo = li11i[0];
      if (prizeInfo) {
        let iiIi1I = prizeInfo.rewards.map(ll1Ii => {
            let l1i1I1 = prize_map[ll1Ii.rewardType] || "[type=" + ll1Ii.rewardType + "]",
              llIIil = ll1Ii.leftStock !== undefined ? "(剩余" + ll1Ii.leftStock + "份)" : "";
            return "" + ll1Ii.rewardName + l1i1I1 + " " + llIIil;
          }),
          IllIl1 = iiIi1I.join("，");
        prizeInfo.assignmentTimesLimit > 0 && (IllIl1 += "\n活动限制: 最多抽奖: " + prizeInfo.assignmentTimesLimit + "次");
        for (let IIlIl of prizeInfo.rewards) {
          if (IIlIl.sendBeginTime && IIlIl.sendEndTime) {
            console.log("开始时间: " + IIlIl.sendBeginTime);
            console.log("结束时间: " + IIlIl.sendEndTime);
            const Iiilll = Date.now(),
              Iiilli = new Date(IIlIl.sendBeginTime),
              IIlIi = new Date(IIlIl.sendEndTime);
            if (Iiilli && Iiilll < Iiilli) {
              console.log("活动将在 " + IIlIl.sendBeginTime + " 开始，晚点再来吧~");
              $.runEnd = true;
              return;
            }
            if (IIlIi && Iiilll > IIlIi) {
              console.log("活动已于 " + IIlIl.sendEndTime + " 结束，下次早点来吧~");
              $.runEnd = true;
              return;
            }
          }
        }
        console.log("活动奖品：" + IllIl1 + "\n");
      }
    }
  }
  await i1iIii("doInteractiveAssignment");
  if ($.runEnd) return {
    "runEnd": true
  };
  if ($.waitTime) await $.wait($.waitTime);
  function il1iI(lliiII, iiIi1i) {
    try {
      switch (lliiII) {
        case "queryInteractiveInfo":
          if (iiIi1i.code == 0 && iiIi1i.subCode == 0) {
            iI1Iii = iiIi1i;
          } else {
            let l1i1Ii = iiIi1i?.["msg"] || "";
            console.log("" + lI1l11 + l1i1Ii);
            if (["项目"].some(l1iI1 => l1i1Ii.includes(l1iI1))) {
              $.runEnd = true;
            }
          }
          break;
        case "doInteractiveAssignment":
          if (iiIi1i && iiIi1i.subCode == 0) {
            let lilII = [],
              IIIiI = Object.keys(iiIi1i?.["rewardsInfo"]?.["successRewards"] || {});
            for (let iii1i1 of IIIiI) {
              let IllIll = iiIi1i.rewardsInfo.successRewards[iii1i1];
              lilII = lilII.concat(IllIll.map(i1lllI => i1lllI?.["quantity"] ? i1lllI.quantity + "京豆" : "优惠券"));
            }
            if (lilII.length > 0) {
              console.log(lI1l11 + "红包雨: " + lilII.join("+"));
            } else {
              if (iiIi1i?.["rewardsInfo"]?.["failRewards"]?.["length"] > 0) {
                let l1i1Il = iiIi1i?.["rewardsInfo"]?.["failRewards"]?.["map"](ill1I1 => ill1I1.msg)?.["join"](",") || "";
                console.log(lI1l11 + "领取失败: " + l1i1Il);
                l1i1Il?.["includes"]("当前奖品已达到发放上限") && ($.runEnd = true);
              }
            }
          } else iiIi1i.msg ? (console.log(lI1l11 + "失败：" + iiIi1i.msg), (iiIi1i.msg?.["includes"]("项目未上线") || iiIi1i.msg?.["includes"]("项目未开始")) && ($.runEnd = true)) : console.log("❓" + lliiII + " " + JSON.stringify(iiIi1i));
          break;
      }
    } catch (ii1Ii) {
      console.log("❌ 未能正确处理 " + lliiII + " 请求响应 " + (ii1Ii.message || ii1Ii));
    }
  }
  async function i1iIii(ii1Il) {
    if ($.runEnd) return;
    let iI1Ill = "",
      lilI1 = null,
      IIIi1 = null,
      i1llli = "GET";
    switch (ii1Il) {
      case "queryInteractiveInfo":
        i1llli = "POST", iI1Ill = "https://api.m.jd.com/client.action", IIIi1 = {
          "functionId": "queryInteractiveInfo"
        }, lilI1 = {
          "sign": "11",
          "appid": "babelh5",
          "t": Date.now(),
          "body": JSON.stringify({
            "projectId": 2309757,
            "encryptProjectId": $.encryptProjectId,
            "assignmentId": 2355268,
            "encryptAssignmentId": $.encryptAssignmentId
          })
        };
        break;
      case "doInteractiveAssignment":
        iI1Ill = "https://api.m.jd.com/client.action", IIIi1 = {
          "functionId": "doInteractiveAssignment",
          "appid": "redrain-2021",
          "client": "wh5",
          "clientVersion": "1.0.0",
          "body": JSON.stringify({
            "completionFlag": true,
            "sourceCode": "acehby20210924",
            "encryptProjectId": $.encryptProjectId,
            "encryptAssignmentId": $.encryptAssignmentId
          })
        };
        break;
      default:
        console.log("❌ 未知请求 " + ii1Il);
        return;
    }
    const i1llll = {
      "url": iI1Ill,
      "method": i1llli,
      "headers": {
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": llI111,
        "J-E-H": iI1Iil,
        "J-E-C": lIIiIl,
        "Origin": "https://pro.m.jd.com",
        "Referer": "https://pro.m.jd.com",
        "User-Agent": liI1ii
      },
      "params": IIIi1,
      "data": lilI1,
      "timeout": 30000
    };
    i1llli === "GET" && (delete i1llll.data, delete i1llll.headers["Content-Type"]);
    const iI1Ili = 1;
    let llIIiI = 0,
      iI1111 = null,
      IIIl1 = false;
    while (llIIiI < iI1Ili) {
      const Iii1 = await common.request(i1llll);
      if (!Iii1.success) {
        iI1111 = "🚫 " + ii1Il + " 请求失败 ➜ " + Iii1.error;
        llIIiI++;
        continue;
      }
      if (!Iii1.data) {
        iI1111 = "🚫 " + ii1Il + " 请求失败 ➜ 无响应数据";
        llIIiI++;
        continue;
      }
      il1iI(ii1Il, Iii1.data);
      IIIl1 = false;
      break;
    }
    llIIiI >= iI1Ili && (console.log(iI1111), IIIl1 && ($.outFlag = true));
  }
}
async function handleResponse(I1I1lI, ii1il) {
  try {
    switch (I1I1lI) {
      case "xview2Config":
        if (ii1il.code === 0 && ii1il.data) {
          $.xview2Config = ii1il.data;
        } else {
          if (ii1il.message) {
            console.log(ii1il.message);
          } else console.log(JSON.stringify(ii1il));
        }
        break;
    }
  } catch (l1iIl1) {
    console.log("❌ 未能正确处理 " + I1I1lI + " 请求响应 " + (l1iIl1.message || l1iIl1));
  }
}
async function sendRequest(ii1iI) {
  if ($.runEnd || $.outFlag) return;
  let IIIii = "",
    iI111i = null,
    I1I1l1 = null,
    iI111l = "POST",
    i1lIii = {};
  switch (ii1iI) {
    case "xview2Config":
      IIIii = "https://api.m.jd.com/client.action?functionId=xview2Config&clientVersion=11.3.2&build=98450&client=android&ef=1&ep=%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A1668133263098%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22area%22%3A%22CJvpCJYmCV81CNS4C182Ctq4Dm%3D%3D%22%2C%22d_model%22%3A%22Vu9RBUPCCNK%3D%22%2C%22wifiBssid%22%3A%22dW5hbw93bq%3D%3D%22%2C%22osVersion%22%3A%22CJK%3D%22%2C%22d_brand%22%3A%22IPVLV0VT%22%2C%22screen%22%3A%22CtS2DIenCNqm%22%2C%22uuid%22%3A%22DJruCNK5DtGmZNqmDQO2Zq%3D%3D%22%2C%22aid%22%3A%22DJruCNK5DtGmZNqmDQO2Zq%3D%3D%22%2C%22openudid%22%3A%22DJruCNK5DtGmZNqmDQO2Zq%3D%3D%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D&st=1668148535443&sign=7dd658a66305f1485c5f38d77e02f194&sv=121", i1lIii = {
        "body": {
          "api-version": "1.1.0"
        }
      }, I1I1l1 = {
        "functionId": "xview2Config"
      }, iI111i = "lmt=0&body={\"api-version\":\"1.1.0\"}";
      break;
    default:
      console.log("❌ 未知请求 " + ii1iI);
      return;
  }
  const III11i = {
    "url": IIIii,
    "method": iI111l,
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
    "params": I1I1l1,
    "data": iI111i,
    "timeout": 30000
  };
  iI111l === "GET" && (delete III11i.data, delete III11i.headers["Content-Type"]);
  const i1lIil = 1;
  let III11l = 0,
    llIl1i = null,
    llIl1l = false;
  while (III11l < i1lIil) {
    III11l > 0 && (await $.wait(1000));
    const liII1 = await common.request(III11i);
    if (!liII1.success) {
      llIl1i = "🚫 " + ii1iI + " 请求失败 ➜ " + liII1.error;
      III11l++;
      continue;
    }
    if (!liII1.data) {
      llIl1i = "🚫 " + ii1iI + " 请求失败 ➜ 无响应数据";
      III11l++;
      continue;
    }
    await handleResponse(ii1iI, liII1.data);
    llIl1l = false;
    break;
  }
  if (III11l >= i1lIil) {
    console.log(llIl1i);
    if (llIl1l) {
      $.outFlag = true;
      $.message && $.message.fix(llIl1i);
    }
  }
}
async function jsonurl(llIl1I) {
  const liIli1 = await common.request({
      "url": llIl1I,
      "method": "GET",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
      },
      "proxy": null,
      "debug": false,
      "timeout": 30000
    }),
    IIIlIl = liIli1.data;
  return IIIlIl;
}
function random(IIIlI, IiiI) {
  return Math.floor(Math.random() * (IiiI - IIIlI)) + IIIlI;
}
async function redRainurl(l1lliI) {
  const IIIlII = {
      "url": l1lliI,
      "method": "GET",
      "headers": {
        "Cookie": cookiesArr[1],
        "User-Agent": $.UA
      },
      "timeout": 30000
    },
    iiIiI1 = 5;
  let ili1Il = 0,
    ili1Ii = null,
    Iilll1 = false;
  while (ili1Il < iiIiI1) {
    ili1Il > 0 && (await $.wait(1000));
    const ll11ii = await common.request(IIIlII);
    if (!ll11ii.success) {
      ili1Ii = "" + ll11ii.error;
      ili1Il++;
      ll11ii.status && [403, 493].includes(ll11ii.status) && (Iilll1 = true);
      continue;
    }
    if (!ll11ii.data) {
      ili1Ii = "无响应数据";
      ili1Il++;
      continue;
    }
    if (ll11ii.data.match(/(活动已经结束)/) && ll11ii.data.match(/(活动已经结束)/)[1]) {
      $.runEnd = true;
      console.log("失败，活动已结束或不存在");
      return;
    }
    let liIlii = ll11ii.data?.["match"](/__api_data__ *= *(\{.*?\});/);
    if (!liIlii) {
      ili1Ii = "\n数据未获取成功，请检查网络是否正常，Cookie是否有效";
      ili1Il++;
      continue;
    }
    if (liIlii) {
      let llii1i = JSON.parse(liIlii[1]);
      for (let ll11il of llii1i?.["floorList"] || []) {
        if (ll11il?.["boardParams"]?.["interaction"]) {
          let iI1lIl = JSON.parse(ll11il.boardParams.interaction);
          if (iI1lIl?.["encryptProjectId"] && iI1lIl?.["encryptAssignmentId"]) {
            $.interaction = iI1lIl;
            interaction.push($.interaction);
            break;
          }
        }
      }
      if (!$.interaction) {
        let iiIiII = llii1i.shieldResult?.["evContent"] || "{}";
        var ll11I = JSON.parse(iiIiII);
        let Iili = "",
          iIi11 = "";
        ll11I && ll11I.bottomText && (Iili = ll11I.title || "", iIi11 = ll11I.bottomText || "");
        if (!Iili || !iIi11) {
          console.log("\n失败，原因：" + llii1i.returnMsg + "\n");
          break;
        } else {
          ili1Ii = "\n失败，原因：" + Iili + " || " + iIi11 + "\n";
          ili1Il++;
          continue;
        }
      }
    }
    break;
  }
  ili1Il >= iiIiI1 && (console.log(ili1Ii), Iilll1 && ($.outFlag = true));
}
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
