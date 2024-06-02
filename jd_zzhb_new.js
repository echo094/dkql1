/*
转赚红包2
1 0,12 * * *
 */

const $ = new Env('Jd转赚红包2');
const bdy_0x3380a9 = $.isNode() ? require("./sendNotify") : "",
  bdy_0xd9e580 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x4034c1 = require("./function/dylanw"),
  bdy_0x4e36a4 = require("./USER_AGENTS"),
  bdy_0xd4fef8 = require("./function/dylib");
let bdy_0x131a8e = true,
  bdy_0x27f123 = [],
  bdy_0x3d07cd = [],
  bdy_0x3351b9 = [],
  bdy_0x247461 = [],
  bdy_0x21b06c = {},
  bdy_0x597f39 = [],
  bdy_0x28f6f7 = "",
  bdy_0x4f7eb7 = "",
  bdy_0x7d687b = "",
  bdy_0x1796f7 = "",
  bdy_0x43c62d;
const bdy_0x5964f5 = process.env.JDZHB2NUM || "9999",
  bdy_0x403305 = process.env.JDZHB2LTNUM || "-1",
  bdy_0x2b0ea1 = process.env.JDZHB2DELAY || "1",
  bdy_0x4b797a = process.env.TXDELAY || "5",
  bdy_0x49f31e = process.env.HLDELAY || "1",
  bdy_0x515e99 = process.env.TXIVAL || "1",
  bdy_0x29670c = process.env.JDZHB2TORED || false,
  bdy_0x14df72 = process.env.JDZHB2TOPPIN || "",
  bdy_0x5f2182 = process.env.TXSILENT || false,
  bdy_0x558f78 = process.env.ZZHB2CODE || "",
  bdy_0x11f5f2 = process.env.CXJLJQ_COUNT || "10",
  bdy_0x5708b7 = process.env.TX_MODE || "0",
  bdy_0x30e8d6 = process.env.CXJHELP_NODRAW || false,
  bdy_0x5fe071 = process.env.NOTX ? process.env.NOTX : false;
if (process.env.DY_PROXY) {
  try {
    bdy_0x21b06c = require("./function/proxy.js");
    $.dget = bdy_0x21b06c.intoRequest($.get.bind($));
    $.dpost = bdy_0x21b06c.intoRequest($.post.bind($));
  } catch {
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
if ($.isNode()) {
  Object.keys(bdy_0xd9e580).forEach(_0xad4d2d => {
    bdy_0x597f39.push(bdy_0xd9e580[_0xad4d2d]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x597f39 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...bdy_0x26f469($.getdata("CookiesJD") || "[]").map(_0x28bca8 => _0x28bca8.cookie)].filter(_0x2b8700 => !!_0x2b8700);
}
!(async () => {
  if (!bdy_0x597f39[0]) {
    const _0x323318 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x323318);
    return;
  }
  $.log("\n❗❗❗每天1次助力次数，0点刷新❗❗❗");
  $.log("\n当前版本：20240528");
  console.log("执行流程，车头开团--助力車頭--車頭抽獎--車頭提現");
  console.log("TG频道：https://t.me/dylan_jdpro");
  $.log("\n环境变量清单（可选项）：");
  $.log("  指定PIN车头：不指定默认CK1  JDZHB2TOPPIN='jdpin'\n  指定助力CODE：都去助力TA  ZZHB2CODE='xxx'\n  多少助力停止：默认9999个  JDZHB2NUM='100'\n  抽奖次数：默认抽完  JDZHB2LTNUM='200'\n  抽奖间隔：默认1秒  JDZHB2DELAY='3'\n  提现间隔：默认5秒  TXDELAY='3'\n  助力间隔：默认1秒  HLDELAY='3'\n  提现模式：默认提当前，设置1查列表提现，TX_MODE='1'\n  提现范围：默认1天内，太大会403  TXIVAL='3'\n  开启提现到上限转红包：JDZHB2TORED='true'\n  支持代理API： DY_PROXY='apiurl'\n  垃圾券数量：默认10次，CXJLJQ_COUNT='20'\n  关闭抽奖：默认助力完车头自动抽奖，CXJHELP_NODRAW='true'\n  关闭提现：NOTX='true'\n");
  let _0x7d4497 = await bdy_0x777c2e();
  if (bdy_0x14df72) {
    console.log("\n已指定PIN：" + bdy_0x14df72);
    let _0x5d32db = bdy_0x597f39.findIndex(_0x29fcad => _0x29fcad.includes(bdy_0x14df72));
    if (_0x5d32db == -1) {
      console.log("运行的CK中没找到指定的PIN，停止执行");
      return;
    }
    bdy_0x4f7eb7 = bdy_0x597f39[_0x5d32db];
  } else {
    console.log("\n未指定PIN默认CK1车头");
    bdy_0x4f7eb7 = bdy_0x597f39[0];
  }
  bdy_0x28f6f7 = bdy_0x4f7eb7;
  $.UserName = decodeURIComponent(bdy_0x28f6f7.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x28f6f7.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
  $.isLogin = true;
  $.nickName = "";
  $.UA = bdy_0x4e36a4.UARAM ? bdy_0x4e36a4.UARAM() : bdy_0x4e36a4.USER_AGENT;
  console.log("\n————————————————————车头开团——————————————————————————");
  console.log("账号：" + ($.nickName || $.UserName));
  await bdy_0x25c4e0();
  if (!$.isLogin) {
    const _0xc3883f = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】cookie已失效", "账号" + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0xc3883f);
    $.isNode() && (await bdy_0x3380a9.sendNotify($.name + "cookie已失效 - " + $.UserName, "账号 " + $.UserName + "\n请重新登录获取cookie"));
    return;
  }
  await bdy_0x8d5b30(1);
  await $.wait(1000);
  if (_0x7d4497.length != 0) {
    let _0x204b0c = _0x7d4497[Math.floor(Math.random() * _0x7d4497.length)];
    console.log("车头去助力 -> 作者");
    $.UserName = decodeURIComponent(bdy_0x28f6f7.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x28f6f7.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
    $.UA = bdy_0x4e36a4.UARAM ? bdy_0x4e36a4.UARAM() : bdy_0x4e36a4.USER_AGENT;
    await bdy_0x3fbd1a(_0x204b0c);
    await $.wait(2000);
  }
  console.log("——————————————————————————————————————————————————————");
  console.log("\n\n———————————开始助力车头(助力间隔" + bdy_0x49f31e + "秒)—————————————");
  bdy_0x558f78 && (console.log("\n已指定助力CODE,那抛弃车头去助力TA"), bdy_0x27f123 = [], bdy_0x27f123.push(bdy_0x558f78));
  bdy_0x43c62d = 0;
  for (let _0x378b11 of bdy_0x27f123) {
    if (bdy_0x597f39.length === 1) {
      console.log("");
      break;
    }
    console.log("\n去助力-> " + _0x378b11);
    $.suc = 0;
    for (let _0x5390c3 = bdy_0x43c62d; _0x5390c3 < bdy_0x597f39.length; _0x5390c3++) {
      if (bdy_0x597f39[_0x5390c3]) {
        bdy_0x28f6f7 = bdy_0x597f39[_0x5390c3];
        $.UserName = decodeURIComponent(bdy_0x28f6f7.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x28f6f7.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = _0x5390c3 + 1;
        $.isLogin = true;
        $.nickName = "";
        $.UA = bdy_0x4e36a4.UARAM ? bdy_0x4e36a4.UARAM() : bdy_0x4e36a4.USER_AGENT;
        console.log("\n开始【账号" + $.index + "】 " + ($.nickName || $.UserName) + "\n");
        await bdy_0x3fbd1a(_0x378b11);
        bdy_0x21b06c.swip && (await bdy_0x21b06c.swip());
        if ($.suc >= Number(bdy_0x5964f5)) {
          $.log("已达目标助力数，跳出！");
          bdy_0x43c62d = _0x5390c3 + 1;
          break;
        }
        await $.wait(bdy_0x49f31e * 1000);
      }
    }
    if ($.index === bdy_0x597f39.length) {
      console.log("\n没有可用于助力的ck，跳出！");
      break;
    }
  }
  if (bdy_0x30e8d6 == "true") {
    console.log("\n已设置不自动抽奖提现");
    return;
  }
  console.log("\n\n—————————————————开始车头抽奖和提现—————————————————");
  bdy_0x403305 > -1 && console.log("\n已设置本次运行抽奖次数：" + bdy_0x403305);
  let _0x473634 = new Date();
  _0x473634.setDate(_0x473634.getDate() - bdy_0x515e99);
  bdy_0x28f6f7 = bdy_0x4f7eb7;
  $.UserName = decodeURIComponent(bdy_0x28f6f7.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x28f6f7.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
  $.isLogin = true;
  $.nickName = "";
  $.fail = 0;
  bdy_0x3d07cd = [];
  bdy_0x3351b9 = [];
  txjscore = [];
  $.txj = true;
  $.fg = 1;
  $.txfull = false;
  $.nocashnum = 0;
  $.end = false;
  $.hotflag = false;
  $.toredfailnum = 0;
  $.txjsuc = false;
  $.banip = false;
  $.xcrflag = 1;
  $.UA = bdy_0x4e36a4.UARAM ? bdy_0x4e36a4.UARAM() : bdy_0x4e36a4.USER_AGENT;
  let _0x15b119 = await bdy_0x8d5b30(0);
  await $.wait(1000);
  if (_0x15b119.code != "0") {
    return;
  }
  $.log("本轮已抽奖次数：" + _0x15b119.data.drawPrizeNum);
  $.log("本轮剩余抽奖次数：" + $.times);
  if (_0x15b119.data.cashVo) {
    if (_0x15b119.data?.["cashVo"]?.["state"] === 1) {
      $.log("本轮提现金进度：" + _0x15b119.data.cashVo.amount + "/" + _0x15b119.data.cashVo.totalAmount + "(-" + _0x15b119.data.cashVo.leftAmount + ")");
    } else {
      _0x15b119.data?.["cashVo"]?.["state"] === 3 && ($.log("本轮提现金达成：" + _0x15b119.data.cashVo.amount + "/" + _0x15b119.data.cashVo.totalAmount), $.txj = false, $.txjsuc = true);
    }
  } else {
    $.txj = false;
  }
  $.log("本轮结束时间： " + bdy_0x29111d(new Date(Date.now() + _0x15b119.data.countDownTime)));
  for (let _0x54879a = 0; _0x54879a < (bdy_0x403305 > -1 && bdy_0x403305 < $.times ? bdy_0x403305 : $.times); _0x54879a++) {
    process.stdout.write("\n第" + (_0x54879a + 1) + "次抽奖结果：");
    for (let _0x2b9abf of Array(1)) {
      await bdy_0x54d3bb(_0x2b9abf + 1);
      if (!$.hotflag) {
        break;
      }
      await $.wait(Math.random() * 500 + bdy_0x2b0ea1 * 1000);
    }
    if ($.banip || !$.isLogin) {
      break;
    }
    if ($.end) {
      console.log("\n本轮结束了，开启新一轮");
      let _0x478798 = await bdy_0x8d5b30(0);
      _0x478798.code == 0 && $.log("开启成功，结束时间： " + bdy_0x29111d(new Date(Date.now() + _0x478798.data.countDownTime)));
    }
    $.txj && (await bdy_0x53fb2a());
    await $.wait(Math.random() * 500 + bdy_0x2b0ea1 * 1000);
    if ($.fail > bdy_0x11f5f2) {
      $.log("连续垃圾券，不继续抽了");
      break;
    }
  }
  bdy_0x3351b9.length !== 0 && $.log("\n\n本次抽奖获得红包总计：" + bdy_0x3351b9.reduce((_0x147c15, _0x10abbf) => _0x147c15 + _0x10abbf * 100, 0) / 100 + "元");
  bdy_0x3d07cd.length !== 0 && $.log("\n\n本次抽奖获得现金总计：" + bdy_0x3d07cd.reduce((_0x4392ca, _0x5673cb) => _0x4392ca + _0x5673cb * 100, 0) / 100 + "元");
  if (txjscore.length !== 0) {
    let _0x98e32 = txjscore.reduce((_0x12b5a1, _0x206219) => _0x12b5a1 + _0x206219 * 100, 0) / 100;
    $.log("\n\n本次抽奖获得提现金：" + _0x98e32 + "个, 平均" + (_0x98e32 / (bdy_0x403305 > -1 ? Math.min.apply(null, [bdy_0x403305, $.times]) : $.times)).toFixed(4) + "个/抽");
  }
  if (bdy_0x5fe071 != "true") {
    if (new Date().getHours() < 6 && bdy_0x5f2182) {
      return;
    }
    $.log("\n——————————————开始提现（间隔" + bdy_0x4b797a + "秒）————————————————");
    $.log("\n当前提现模式：" + (bdy_0x5708b7 == "1" ? bdy_0x515e99 + "天内历史" : "本次所抽现金"));
    $.log("上限转红包：" + (bdy_0x29670c ? "开启" : "关闭(续期♻️)"));
    $.txsuc = [];
    $.toredsuc = [];
    $.failtxlist = [];
    $.banip = false;
    if (bdy_0x5708b7 == "1") {
      for (let _0x2e161d = 0; _0x2e161d < 500; _0x2e161d++) {
        if ($.nocashnum > 2 || $.toredfailnum > 4 || $.banip) {
          break;
        }
        process.stdout.write("\n" + (_0x2e161d + 1) + "页：");
        let _0x16f40d = await bdy_0x3d84d5(_0x2e161d + 1);
        _0x16f40d == "" && (await $.wait(5000), await bdy_0x3d84d5(_0x2e161d + 1));
        if (!$.baglist || $.baglist.length === 0) {
          break;
        }
        for (let _0x4fdfa0 of $.baglist) {
          if (Math.max.apply(null, [new Date(_0x4fdfa0.createTime), new Date(_0x4fdfa0.startTime)]) < _0x473634 || $.toredfailnum > 4) {
            $.nocashnum = 5;
            break;
          }
          if (_0x4fdfa0.prizeType == 4) {
            $.txfail = false;
            if (_0x4fdfa0.state == 0 || _0x4fdfa0.state == 2) {
              process.stdout.write("" + Number(_0x4fdfa0.amount));
              let _0x85ef9f = await bdy_0x3cf1fe(_0x4fdfa0, Number(_0x4fdfa0.amount));
              $.txfail && (await $.wait(5000), _0x85ef9f = await bdy_0x3cf1fe(_0x4fdfa0, Number(_0x4fdfa0.amount)));
              $.txfail && $.failtxlist.push(_0x4fdfa0);
              if (_0x85ef9f.data.message.includes("上限") && bdy_0x29670c == "true" && $.toredfailnum < 5) {
                await bdy_0x2bbac6(_0x4fdfa0, Number(_0x4fdfa0.amount));
              }
              await $.wait(bdy_0x4b797a * 1000);
            } else {
              _0x4fdfa0.state == 8;
            }
          }
        }
        await $.wait(3000);
      }
      $.banip = false;
      while ($.failtxlist.length > 0) {
        console.log("\n" + $.failtxlist.length);
        for (let _0x271431 = 0; _0x271431 < $.failtxlist.length;) {
          let _0x160184 = $.failtxlist[_0x271431];
          if (_0x160184.prizeType == 4) {
            $.txfail = false;
            process.stdout.write("" + Number(_0x160184.amount));
            let _0x154ed9 = await bdy_0x3cf1fe(_0x160184, Number(_0x160184.amount));
            $.txfail && (await $.wait(5000), _0x154ed9 = await bdy_0x3cf1fe(_0x160184, Number(_0x160184.amount)));
            $.txfail ? _0x271431++ : $.failtxlist.splice(_0x271431, 1);
            if (_0x154ed9.data.message.includes("上限") && bdy_0x29670c == "true" && $.toredfailnum < 5) {
              await bdy_0x2bbac6(_0x160184, Number(_0x160184.amount));
            }
            await $.wait(bdy_0x4b797a * 1000);
          }
        }
      }
    } else {
      for (let _0x477839 = 0; _0x477839 < 1; _0x477839++) {
        if ($.nocashnum > 2 || $.toredfailnum > 4) {
          break;
        }
        while (bdy_0x247461.length > 0) {
          console.log("\n" + bdy_0x247461.length);
          for (let _0x2c9c = 0; _0x2c9c < bdy_0x247461.length;) {
            let _0x276c63 = bdy_0x247461[_0x2c9c];
            if (_0x276c63.prizeType == 4) {
              $.txfail = false;
              process.stdout.write("" + Number(_0x276c63.amount));
              let _0x5628a5 = await bdy_0x3cf1fe(_0x276c63, Number(_0x276c63.amount));
              $.txfail && (await $.wait(5000), _0x5628a5 = await bdy_0x3cf1fe(_0x276c63, Number(_0x276c63.amount)));
              if ($.txfail) {
                _0x2c9c++;
              } else {
                bdy_0x247461.splice(_0x2c9c, 1);
              }
              if (_0x5628a5.data.message.includes("上限") && bdy_0x29670c == "true" && $.toredfailnum < 5) {
                await bdy_0x2bbac6(_0x276c63, Number(_0x276c63.amount));
              }
              await $.wait(bdy_0x4b797a * 1000);
            }
          }
          await $.wait(2000);
        }
      }
    }
    $.txsuc.length !== 0 && $.log("\n\n本次成功提现总计：" + $.txsuc.reduce((_0x1f02e8, _0x1daf19) => _0x1f02e8 + _0x1daf19 * 100, 0) / 100 + "元");
    $.toredsuc.length !== 0 && $.log("\n\n本次成功转红包总计：" + $.toredsuc.reduce((_0xeae0dd, _0x2d87c1) => _0xeae0dd + _0x2d87c1 * 100, 0) / 100 + "元");
  } else {
    $.log("\n\n⚠已设置不提现！");
  }
  bdy_0x247461 = [];
  await $.wait(2000);
})().catch(_0x4cfa13 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x4cfa13 + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0x8d5b30(_0x503cd8) {
  const _0x709398 = {
    linkId: "wDNvX5t2N52cWEM8cLOa0g",
    inviter: ""
  };
  let _0x36a609 = _0x709398,
    _0x15111b = {
      appId: "eb67b",
      functionId: "inviteFissionHome",
      fn: "inviteFissionHome",
      body: _0x36a609,
      appid: "activities_platform",
      apid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      ver: $.UA.split(";")[2],
      client: "ios",
      cl: "ios",
      user: $.UserName,
      t: Date.now(),
      code: 1,
      xcr: $.xcrflag,
      ua: $.UA
    };
  _0x36a609 = await bdy_0x4034c1.getbody(_0x15111b);
  if (!_0x36a609) {
    return;
  }
  return new Promise(async _0x5ab3ad => {
    $.dpost(bdy_0x5a8453(_0x36a609), async (_0x57d5f1, _0xa6a4aa, _0x19bc6b) => {
      try {
        if (_0x57d5f1) {
          console.log("" + JSON.stringify(_0x57d5f1));
          console.log("homeinfo请求失败，请检查网路重试");
        } else {
          _0x19bc6b = JSON.parse(_0x19bc6b);
          if (_0x19bc6b.code == 0) {
            $.times = _0x19bc6b.data.prizeNum;
            if (_0x503cd8) {
              console.log("我的助力码：" + _0x19bc6b.data.inviter);
            }
            bdy_0x27f123.push(_0x19bc6b.data.inviter);
          } else {
            console.log(_0x19bc6b.errMsg);
          }
        }
      } catch (_0x1a2ccf) {
        $.logErr(_0x1a2ccf, _0xa6a4aa);
      } finally {
        _0x5ab3ad(_0x19bc6b);
      }
    });
  });
}
async function bdy_0x53fb2a() {
  const _0x2e8a93 = {
    linkId: "wDNvX5t2N52cWEM8cLOa0g"
  };
  let _0x379ad7 = _0x2e8a93,
    _0x4f176f = {
      appId: "b8469",
      functionId: "inviteFissionReceive",
      fn: "inviteFissionReceive",
      body: _0x379ad7,
      appid: "activities_platform",
      apid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      ver: $.UA.split(";")[2],
      client: "ios",
      cl: "ios",
      user: $.UserName,
      t: Date.now(),
      code: 1,
      xcr: $.xcrflag,
      ua: $.UA
    };
  $.xcrflag == 1 && ($.xcrflag = 0);
  _0x379ad7 = await bdy_0x4034c1.getbody(_0x4f176f);
  if (!_0x379ad7) {
    return;
  }
  return new Promise(async _0x3b3df2 => {
    $.dpost(bdy_0x5a8453(_0x379ad7), async (_0x3df4fb, _0x4da83a, _0x4745dd) => {
      try {
        if (_0x3df4fb) {
          console.log("" + JSON.stringify(_0x3df4fb));
          console.log("receive请求失败，请检查网路重试");
          _0x3df4fb.includes("403") && ($.banip = true);
        } else {
          _0x4745dd = JSON.parse(_0x4745dd);
          if (_0x4745dd.code == 0) {
            process.stdout.write("----提现金" + _0x4745dd.data.amount + "(+" + _0x4745dd.data.receiveList[0].amount + ")");
            txjscore.push(_0x4745dd.data.receiveList[0].amount);
            if (_0x4745dd.data?.["state"] == 3) {
              process.stdout.write("----恭喜达成");
              $.txj = false;
              $.txjsuc = true;
            }
          } else {
            if (_0x4745dd.code == 80208) {
              process.stdout.write("----送的抽奖次数没有提现金");
            } else {
              _0x4745dd.code == 80209 ? (process.stdout.write("----完成标识"), $.txj = false) : console.log(JSON.stringify(_0x4745dd));
            }
          }
        }
      } catch (_0x4a327d) {
        $.logErr(_0x4a327d, _0x4da83a);
      } finally {
        _0x3b3df2(_0x4745dd);
      }
    });
  });
}
async function bdy_0x54d3bb(_0x2bb564) {
  const _0x2d70c5 = {
    linkId: "wDNvX5t2N52cWEM8cLOa0g"
  };
  let _0x31ecf1 = _0x2d70c5,
    _0x44910f = {
      appId: "c02c6",
      functionId: "inviteFissionDrawPrize",
      fn: "inviteFissionDrawPrize",
      body: _0x31ecf1,
      appid: "activities_platform",
      apid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      ver: $.UA.split(";")[2],
      client: "ios",
      cl: "ios",
      user: $.UserName,
      t: Date.now(),
      code: 1,
      xcr: $.xcrflag,
      ua: $.UA
    };
  $.xcrflag == 1 && ($.xcrflag = 0);
  _0x31ecf1 = await bdy_0x4034c1.getbody(_0x44910f);
  if (!_0x31ecf1) {
    return;
  }
  return new Promise(async _0xe4d8d4 => {
    $.dpost(bdy_0x5a8453(_0x31ecf1), async (_0x5ab14b, _0x361951, _0x15962b) => {
      try {
        if (_0x5ab14b) {
          console.log("" + JSON.stringify(_0x5ab14b));
          console.log("lottery请求失败，请检查网路重试");
          _0x5ab14b.includes("403") && ($.banip = true);
        } else {
          _0x15962b = JSON.parse(_0x15962b);
          if (_0x15962b.code == 0) {
            const _0x4f9c0f = _0x15962b.data.prizeType;
            if (!_0x4f9c0f) {
              fail++;
            }
            switch (_0x4f9c0f) {
              case 1:
                process.stdout.write("垃.圾.券⚫");
                $.txjsuc && $.fail++;
                $.fail++;
                $.hotflag = false;
                break;
              case 4:
                let _0x3323e5 = parseFloat(_0x15962b.data.prizeValue).toFixed(2);
                process.stdout.write(_0x3323e5 + "现金💰️");
                bdy_0x3d07cd.push(_0x3323e5);
                const _0x32fe0b = {
                  prizeValue: _0x15962b.data.prizeValue,
                  id: _0x15962b.data.id,
                  poolBaseId: _0x15962b.data.poolBaseId,
                  prizeGroupId: _0x15962b.data.prizeGroupId,
                  prizeBaseId: _0x15962b.data.prizeBaseId,
                  prizeType: _0x15962b.data.prizeType,
                  amount: _0x15962b.data.amount
                };
                bdy_0x247461.push(_0x32fe0b);
                $.fail = 0;
                $.hotflag = false;
                break;
              case 2:
                let _0x585071 = parseFloat(_0x15962b.data.prizeValue).toFixed(2);
                process.stdout.write(_0x585071 + "红包🧧");
                bdy_0x3351b9.push(_0x585071);
                $.fail = 0;
                $.hotflag = false;
                break;
              default:
                $.hotflag = false;
                console.log(JSON.stringify(_0x15962b.data));
            }
          } else {
            if (_0x15962b.errMsg.includes("火爆")) {
              process.stdout.write("未中奖 ");
              $.hotflag = true;
            } else {
              if (_0x15962b.errMsg.includes("结束")) {
                $.end = true;
                $.hotflag = false;
                console.log(_0x15962b.errMsg);
              } else {
                _0x15962b.errMsg.includes("未登录") ? ($.isLogin = false, $.hotflag = false, console.log(_0x15962b.errMsg)) : ($.hotflag = false, console.log(_0x15962b.errMsg));
              }
            }
          }
        }
      } catch (_0x39f230) {
        $.logErr(_0x39f230, _0x361951);
      } finally {
        _0xe4d8d4(_0x15962b);
      }
    });
  });
}
async function bdy_0x3d84d5(_0x421535) {
  const _0x1f8ba0 = {
    pageNum: _0x421535,
    pageSize: 100,
    linkId: "wDNvX5t2N52cWEM8cLOa0g",
    business: "fission"
  };
  let _0x3fd053 = _0x1f8ba0,
    _0x19590e = {
      appId: "f2b1d",
      functionId: "superRedBagList",
      fn: "superRedBagList",
      body: _0x3fd053,
      appid: "activities_platform",
      apid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      ver: $.UA.split(";")[2],
      client: "ios",
      cl: "ios",
      user: $.UserName,
      t: Date.now(),
      code: 1,
      xcr: $.xcrflag,
      ua: $.UA
    };
  $.xcrflag == 1 && ($.xcrflag = 0);
  _0x3fd053 = await bdy_0x4034c1.getbody(_0x19590e);
  if (!_0x3fd053) {
    return;
  }
  const _0x18fe69 = {
    url: "https://api.m.jd.com/api",
    body: _0x3fd053 + "&loginType=2&loginWQBiz=wegame&uuid=" + $.uuid + "&build=169088&screen=414*736&networkType=wifi&d_brand=iPhone&d_model=iPhone10,2&lang=zh_CN&osVersion=&partner=-1&cthr=1",
    headers: {},
    ciphers: bdy_0xd4fef8.cpstr
  };
  _0x18fe69.headers.Accept = "application/json, text/plain, */*";
  _0x18fe69.headers["x-rp-client"] = "h5_1.0.0";
  _0x18fe69.headers["Accept-Language"] = "zh-cn";
  _0x18fe69.headers["Accept-Encoding"] = "gzip, deflate, br";
  _0x18fe69.headers["Content-Type"] = "application/x-www-form-urlencoded";
  _0x18fe69.headers.Origin = "https://pro.m.jd.com";
  _0x18fe69.headers["User-Agent"] = $.UA;
  _0x18fe69.headers.Referer = "https://pro.m.jd.com/";
  _0x18fe69.headers["x-referer-page"] = "https://pro.m.jd.com/";
  _0x18fe69.headers["request-from"] = "native";
  _0x18fe69.headers.Cookie = bdy_0x28f6f7;
  return new Promise(async _0x27095b => {
    $.dpost(_0x18fe69, async (_0x53912c, _0x4da476, _0x37ed9c) => {
      try {
        if (_0x53912c) {
          console.log("" + JSON.stringify(_0x53912c));
          console.log(" API请求失败，请检查网路重试");
          _0x53912c.includes("403") && ($.banip = true);
          _0x37ed9c = "";
        } else {
          _0x37ed9c = JSON.parse(_0x37ed9c);
          if (_0x37ed9c.code == 0) {
            $.baglist = _0x37ed9c.data.items;
          } else {
            console.log(_0x37ed9c.errMsg);
          }
        }
      } catch (_0xf66b89) {
        $.logErr(_0xf66b89, _0x4da476);
      } finally {
        _0x27095b(_0x37ed9c);
      }
    });
  });
}
async function bdy_0x3fbd1a(_0x3d8c6f) {
  const _0x33f5a7 = {
    linkId: "wDNvX5t2N52cWEM8cLOa0g",
    isJdApp: true,
    inviter: _0x3d8c6f
  };
  let _0x338c93 = _0x33f5a7,
    _0x2a6398 = {
      appId: "c5389",
      functionId: "inviteFissionhelp",
      fn: "inviteFissionhelp",
      body: _0x338c93,
      appid: "activities_platform",
      apid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      ver: $.UA.split(";")[2],
      client: "ios",
      cl: "ios",
      user: $.UserName,
      t: Date.now(),
      code: 1,
      xcr: 1,
      ua: $.UA
    };
  _0x338c93 = await bdy_0x4034c1.getbody(_0x2a6398);
  if (!_0x338c93) {
    return;
  }
  return new Promise(async _0x41df57 => {
    $.dpost(bdy_0x5a8453(_0x338c93), async (_0x5d3249, _0x2ae6db, _0x57c1f6) => {
      try {
        if (_0x5d3249) {
          console.log("" + JSON.stringify(_0x5d3249));
          console.log("help请求失败，请检查网路重试");
          if (_0x5d3249.includes("403")) {
            $.banip = true;
          }
        } else {
          _0x57c1f6 = JSON.parse(_0x57c1f6);
          if (_0x57c1f6.code == 0) {
            if (!_0x57c1f6.data.helpFlg) {
              $.log("结果：不能助力自己！");
              return;
            }
            if (_0x57c1f6.data.helpResult == 1) {
              $.suc++;
              console.log("结果：助力成功 ✅ " + ($.suc || ""));
            } else {
              if (_0x57c1f6.data.helpResult == 6) {
                console.log("结果：已经助力过TA！");
              } else {
                if (_0x57c1f6.data.helpResult == 3) {
                  console.log("结果：没有次数！");
                } else {
                  if (_0x57c1f6.data.helpResult == 2) {
                    $.log("结果：太火爆了 💣");
                    $.hot = true;
                  } else {
                    if (_0x57c1f6.data.helpResult == 4) {
                      $.log("结果：没有助力次数！");
                    } else {
                      _0x57c1f6.data.helpResult == 8 ? $.log("结果：TA未开启新的一轮 💤") : console.log("结果：" + _0x57c1f6.data?.["helpResult"]);
                    }
                  }
                }
              }
            }
          } else {
            console.log(_0x57c1f6.errMsg);
          }
        }
      } catch (_0x425e88) {
        $.logErr(_0x425e88, _0x2ae6db);
      } finally {
        _0x41df57(_0x57c1f6);
      }
    });
  });
}
async function bdy_0x3cf1fe(_0x128f95, _0x5e871d) {
  let _0x13beef = "functionId=apCashWithDraw&body={\"linkId\":\"wDNvX5t2N52cWEM8cLOa0g\",\"businessSource\":\"NONE\",\"base\":{\"id\":" + _0x128f95.id + ",\"business\":\"fission\",\"poolBaseId\":" + _0x128f95.poolBaseId + ",\"prizeGroupId\":" + _0x128f95.prizeGroupId + ",\"prizeBaseId\":" + _0x128f95.prizeBaseId + ",\"prizeType\":4}}&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=" + $.UA.split(";")[2];
  const _0x36563a = {
    Host: "api.m.jd.com",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": $.UA,
    Cookie: bdy_0x28f6f7
  };
  const _0x265680 = {
    url: "https://api.m.jd.com/api",
    body: _0x13beef,
    headers: _0x36563a
  };
  return new Promise(async _0x1bcb08 => {
    $.dpost(_0x265680, async (_0x3cfdf8, _0x433e7a, _0x16cdb0) => {
      try {
        if (_0x3cfdf8) {
          console.log("" + JSON.stringify(_0x3cfdf8));
          console.log("apCashWithDraw请求失败，请检查网路重试");
          _0x3cfdf8.includes("403") && ($.banip = true);
        } else {
          _0x16cdb0 = JSON.parse(_0x16cdb0);
          if (_0x16cdb0.code == 0) {
            if (_0x16cdb0.data.message.indexOf("待发放") > -1) {
              process.stdout.write("" + (!$.txfail ? "❌" : "❌ "));
              $.txfail = true;
            } else {
              if (_0x16cdb0.data.message.includes("上限")) {
                !bdy_0x29670c && process.stdout.write("♻️ ");
                $.txfull = true;
                $.txfail = false;
              } else {
                _0x16cdb0.data.message.includes("提现") ? (process.stdout.write("✔️ "), $.txsuc.push(_0x5e871d), $.txfail = false) : console.log(_0x16cdb0.data.message);
              }
            }
          } else {
            console.log(_0x16cdb0.errMsg);
          }
        }
      } catch (_0xe79485) {
        $.logErr(_0xe79485, _0x433e7a);
      } finally {
        _0x1bcb08(_0x16cdb0 || "");
      }
    });
  });
}
async function bdy_0x2bbac6(_0x3a53ee, _0x4cbea6) {
  let _0x3f3d14 = "functionId=apRecompenseDrawPrize&body={\"drawRecordId\":" + _0x3a53ee.id + ",\"business\":\"fission\",\"poolId\":" + _0x3a53ee.poolBaseId + ",\"prizeGroupId\":" + _0x3a53ee.prizeGroupId + ",\"prizeId\":" + _0x3a53ee.prizeBaseId + ",\"linkId\":\"wDNvX5t2N52cWEM8cLOa0g\"}&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=" + $.UA.split(";")[2];
  const _0x4f894a = {
    Host: "api.m.jd.com",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": $.UA,
    Cookie: bdy_0x28f6f7
  };
  const _0x4d1552 = {
    url: "https://api.m.jd.com/api",
    body: _0x3f3d14,
    headers: _0x4f894a
  };
  return new Promise(async _0x214f2d => {
    $.dpost(_0x4d1552, async (_0x101379, _0x2c9b61, _0x1921e9) => {
      try {
        if (_0x101379) {
          console.log("" + JSON.stringify(_0x101379));
          console.log("apRecompenseDrawPrize 请求失败，请检查网路重试");
          _0x101379.includes("403") && ($.banip = true);
        } else {
          _0x1921e9 = JSON.parse(_0x1921e9);
          if (_0x1921e9.code == 0) {
            _0x1921e9.data.resCode === "0" ? (process.stdout.write("🧧 "), $.toredsuc.push(_0x4cbea6)) : (process.stdout.write("❎ "), $.toredfailnum++);
          } else {
            _0x1921e9.errMsg === "失败" ? (process.stdout.write("❎ "), $.toredfailnum++) : console.log(_0x1921e9.errMsg);
          }
        }
      } catch (_0x41c9da) {
        $.logErr(_0x41c9da, _0x2c9b61);
      } finally {
        _0x214f2d(_0x1921e9);
      }
    });
  });
}
function bdy_0x5a8453(_0x454f14) {
  const _0x9e3d53 = {
    Accept: "application/json, text/plain, */*",
    "x-rp-client": "h5_1.0.0",
    "Content-type": "application/x-www-form-urlencoded",
    "User-Agent": $.UA,
    "x-referer-page": "https://pro.m.jd.com/",
    Origin: "https://pro.m.jd.com",
    "X-Requested-With": "com.jingdong.app.mall",
    Referer: "https://pro.m.jd.com/",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    Cookie: bdy_0x28f6f7
  };
  const _0x446983 = {
    url: "https://api.m.jd.com/api?" + _0x454f14,
    headers: _0x9e3d53
  };
  return _0x446983;
}
function bdy_0x25c4e0() {
  return new Promise(_0x3e446a => {
    const _0x47b6d4 = {
      Cookie: bdy_0x28f6f7,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x51ea29 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x47b6d4,
      timeout: 10000
    };
    $.get(_0x51ea29, (_0xfc951d, _0x308689, _0x24909e) => {
      try {
        if (_0x24909e) {
          _0x24909e = JSON.parse(_0x24909e);
          if (!(_0x24909e.islogin === "1")) {
            _0x24909e.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x4f2c76) {
        console.log(_0x4f2c76);
      } finally {
        _0x3e446a();
      }
    });
  });
}
function bdy_0x2b0041() {
  return new Promise(_0x4ce240 => {
    !bdy_0x131a8e ? $.msg($.name, "", "" + bdy_0x7d687b) : $.log("京东账号" + $.index + $.nickName + "\n" + bdy_0x7d687b);
    _0x4ce240();
  });
}
function bdy_0x2abf73(_0x38decb) {
  try {
    if (typeof JSON.parse(_0x38decb) == "object") {
      return true;
    }
  } catch (_0x58e7d7) {
    console.log(_0x58e7d7);
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function bdy_0x777c2e() {
  const _0x203d35 = {
    url: "https://src-dy-server-dmujhfwxmu.cn-hangzhou.fcapp.run/zzhb2",
    timeout: 30000
  };
  return new Promise(_0x1ca649 => {
    $.get(_0x203d35, async (_0xc2ef5b, _0x309da7, _0x1f23f7) => {
      try {
        if (_0xc2ef5b) {
          console.log("\n服务连接失败，终止执行！");
          process.exit(111);
        } else {
          if (_0x1f23f7) {
            _0x1f23f7 = JSON.parse(_0x1f23f7);
            if (_0x1f23f7.code === 200) {
              bdy_0x1796f7 = _0x1f23f7.data;
            }
          }
        }
      } catch (_0x19a83f) {
        $.logErr(_0x19a83f, _0x309da7);
      } finally {
        _0x1ca649(bdy_0x1796f7);
      }
    });
  });
}
function bdy_0x29111d(_0x3ff609) {
  const _0x2787f0 = _0x3ff609.getFullYear(),
    _0x289b09 = ("0" + (_0x3ff609.getMonth() + 1)).slice(-2),
    _0x22a803 = ("0" + _0x3ff609.getDate()).slice(-2),
    _0x1b0236 = ("0" + _0x3ff609.getHours()).slice(-2),
    _0xada310 = ("0" + _0x3ff609.getMinutes()).slice(-2),
    _0x60066a = ("0" + _0x3ff609.getSeconds()).slice(-2);
  return _0x2787f0 + "/" + _0x289b09 + "/" + _0x22a803 + " " + _0x1b0236 + ":" + _0xada310 + ":" + _0x60066a;
}
function bdy_0x26f469(_0x358e63) {
  if (typeof _0x358e63 == "string") {
    try {
      return JSON.parse(_0x358e63);
    } catch (_0x105432) {
      console.log(_0x105432);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `\n🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}
