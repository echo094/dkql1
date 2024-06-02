
/*
转赚红包,只抽奖提现
14 15 * * * https://raw.githubusercontent.com/6dylan6/jdpro/main/jd_zzhb_draw_new.js
 */

const $ = new Env('Jd转赚红包_抽奖提现2');
const bdy_0x996f93 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x33d29e = require("./function/dylanw"),
  bdy_0x5f4349 = require("./USER_AGENTS"),
  bdy_0xc51515 = require("./function/dylib");
let bdy_0x577c6a = [],
  bdy_0x5e4dfc = [],
  bdy_0x4e1203 = [],
  bdy_0xbb7ae0 = [],
  bdy_0x1c343c = {},
  bdy_0x5c1be7 = [],
  bdy_0x53ad54 = "",
  bdy_0x10cacc = "";
const bdy_0x5ef662 = process.env.JDZHB2LTNUM || "-1",
  bdy_0x91c8ee = process.env.JDZHB2DELAY || "1",
  bdy_0x1344da = process.env.TXDELAY || "5",
  bdy_0x1a09fd = process.env.TXIVAL || "1",
  bdy_0x1445bd = process.env.JDZHB2TORED || false,
  bdy_0x14f1f1 = process.env.TXSILENT || false,
  bdy_0x4e9960 = process.env.CXJLJQ_COUNT || "10",
  bdy_0x2250c1 = process.env.TX_MODE || "0",
  bdy_0x2a746c = process.env.NOTX ? process.env.NOTX : false;
if (process.env.DY_PROXY) {
  try {
    bdy_0x1c343c = require("./function/proxy.js");
    $.dget = bdy_0x1c343c.intoRequest($.get.bind($));
    $.dpost = bdy_0x1c343c.intoRequest($.post.bind($));
  } catch {
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
if ($.isNode()) {
  Object.keys(bdy_0x996f93).forEach(_0x519700 => {
    bdy_0x5c1be7.push(bdy_0x996f93[_0x519700]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x5c1be7 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...bdy_0x4faab5($.getdata("CookiesJD") || "[]").map(_0x429d43 => _0x429d43.cookie)].filter(_0x3ba3b4 => !!_0x3ba3b4);
}
!(async () => {
  if (!bdy_0x5c1be7[0]) {
    const _0x2aa51e = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x2aa51e);
    return;
  }
  $.log("\n❗❗❗注意此活动24小时一轮，抽奖次数过期清零❗❗❗");
  $.log("\n当前版本：20240528 ");
  console.log("执行流程，抽奖--提现");
  console.log("TG频道：https://t.me/dylan_jdpro");
  $.log("\n环境变量清单（可选项）：");
  $.log("  抽奖次数：默认抽完  JDZHB2LTNUM='200'\n  抽奖间隔：默认1秒  JDZHB2DELAY='3'\n  提现间隔：默认5秒  TXDELAY='3'\n  提现范围：默认1天内，太大会403  TXIVAL='3'\n  开启提现到上限转红包：JDZHB2TORED='true'\n  开启代理：API DY_PROXY='apiurl'\n  垃圾券数量：默认10次，CXJLJQ_COUNT='20'\n  提现模式：默认提当前所得，设置1开启查列表提现，TX_MODE='1'\n  关闭提现：NOTX='true'\n");
  console.log("\n开始抽奖和提现(间隔" + bdy_0x91c8ee + "秒 连续" + bdy_0x4e9960 + "次垃圾券停止)...");
  bdy_0x5ef662 > -1 && console.log("\n已设置本次运行抽奖次数 " + bdy_0x5ef662);
  let _0x4638fd = new Date();
  _0x4638fd.setDate(_0x4638fd.getDate() - bdy_0x1a09fd);
  for (let _0x417e98 = 0; _0x417e98 < bdy_0x5c1be7.length; _0x417e98++) {
    if (bdy_0x5c1be7[_0x417e98]) {
      bdy_0x53ad54 = bdy_0x5c1be7[_0x417e98];
      $.UserName = decodeURIComponent(bdy_0x53ad54.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x53ad54.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x417e98 + 1;
      $.isLogin = true;
      $.nickName = "";
      $.fail = 0;
      bdy_0x5e4dfc = [];
      bdy_0x4e1203 = [];
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
      $.UA = bdy_0x5f4349.UARAM ? bdy_0x5f4349.UARAM() : bdy_0x5f4349.USER_AGENT;
      $.uuid = bdy_0xc51515.UUID();
      console.log("\n\n--------开始【账号" + $.index + "】 " + ($.nickName || $.UserName) + "----------\n");
      let _0x4820e5 = await bdy_0x138320(1);
      await $.wait(1000);
      if (_0x4820e5.code != "0") {
        continue;
      }
      $.log("本轮已抽奖次数：" + _0x4820e5.data.drawPrizeNum);
      $.log("本轮剩余抽奖次数：" + $.times);
      if (_0x4820e5.data.cashVo) {
        if (_0x4820e5.data?.["cashVo"]?.["state"] === 1) {
          $.log("本轮提现金进度：" + _0x4820e5.data.cashVo.amount + "/" + _0x4820e5.data.cashVo.totalAmount + "(-" + _0x4820e5.data.cashVo.leftAmount + ")");
        } else {
          _0x4820e5.data?.["cashVo"]?.["state"] === 3 && ($.log("本轮提现金达成：" + _0x4820e5.data.cashVo.amount + "/" + _0x4820e5.data.cashVo.totalAmount), $.txj = false, $.txjsuc = true);
        }
      } else {
        $.txj = false;
      }
      $.log("本轮结束时间： " + bdy_0x18f748(new Date(Date.now() + _0x4820e5.data.countDownTime)));
      for (let _0x2cd15c = 0; _0x2cd15c < (bdy_0x5ef662 > -1 && bdy_0x5ef662 < $.times ? bdy_0x5ef662 : $.times); _0x2cd15c++) {
        process.stdout.write("\n第" + (_0x2cd15c + 1) + "次抽奖结果：");
        for (let _0xbab327 of Array(1)) {
          await bdy_0xc01005(_0xbab327 + 1);
          if (!$.hotflag) {
            break;
          }
          await $.wait(Math.random() * 500 + bdy_0x91c8ee * 1000);
        }
        if ($.banip || !$.isLogin) {
          break;
        }
        if ($.end) {
          console.log("\n本轮结束了，开启新一轮");
          let _0x4d5b74 = await bdy_0x138320(0);
          _0x4d5b74.code == 0 && $.log("开启成功，结束时间： " + bdy_0x18f748(new Date(Date.now() + _0x4d5b74.data.countDownTime)));
        }
        $.txj && (await bdy_0x34049b());
        await $.wait(Math.random() * 500 + bdy_0x91c8ee * 1000);
        if ($.fail >= bdy_0x4e9960) {
          $.log("连续垃圾券，不继续抽了");
          break;
        }
      }
      bdy_0x4e1203.length !== 0 && $.log("\n\n本次抽奖获得红包总计：" + bdy_0x4e1203.reduce((_0x153d11, _0x19e1d7) => _0x153d11 + _0x19e1d7 * 100, 0) / 100 + "元");
      bdy_0x5e4dfc.length !== 0 && $.log("\n\n本次抽奖获得现金总计：" + bdy_0x5e4dfc.reduce((_0x1ba061, _0x3b8730) => _0x1ba061 + _0x3b8730 * 100, 0) / 100 + "元");
      if (txjscore.length !== 0) {
        let _0x3b6b7b = txjscore.reduce((_0x2aeb52, _0x1cd5f0) => _0x2aeb52 + _0x1cd5f0 * 100, 0) / 100;
        $.log("\n\n本次抽奖获得提现金：" + _0x3b6b7b + "个, 平均" + (_0x3b6b7b / (bdy_0x5ef662 > -1 ? Math.min.apply(null, [bdy_0x5ef662, $.times]) : $.times)).toFixed(4) + "个/抽");
      }
      if (bdy_0x2a746c != "true") {
        if (new Date().getHours() < 6 && bdy_0x14f1f1) {
          continue;
        }
        $.log("\n——————————————开始提现（间隔" + bdy_0x1344da + "秒）————————————————");
        $.log("\n当前提现模式：" + (bdy_0x2250c1 == "1" ? bdy_0x1a09fd + "天内历史" : "本次所抽现金"));
        $.log("上限转红包：" + (bdy_0x1445bd ? "开启" : "关闭(续期♻️)"));
        $.txsuc = [];
        $.toredsuc = [];
        $.failtxlist = [];
        $.banip = false;
        if (bdy_0x2250c1 == "1") {
          for (let _0x39c189 = 0; _0x39c189 < 500; _0x39c189++) {
            if ($.nocashnum > 2 || $.toredfailnum > 4 || $.banip) {
              break;
            }
            process.stdout.write("\n" + (_0x39c189 + 1) + "页：");
            let _0x4133ca = await bdy_0x298b64(_0x39c189 + 1);
            _0x4133ca == "" && (await $.wait(5000), await bdy_0x298b64(_0x39c189 + 1));
            if (!$.baglist || $.baglist.length === 0) {
              break;
            }
            for (let _0x2b3ea7 of $.baglist) {
              if (Math.max.apply(null, [new Date(_0x2b3ea7.createTime), new Date(_0x2b3ea7.startTime)]) < _0x4638fd || $.toredfailnum > 4) {
                $.nocashnum = 5;
                break;
              }
              if (_0x2b3ea7.prizeType == 4) {
                $.txfail = false;
                if (_0x2b3ea7.state == 0 || _0x2b3ea7.state == 2) {
                  process.stdout.write("" + Number(_0x2b3ea7.amount));
                  let _0x41b306 = await bdy_0x1d23aa(_0x2b3ea7, Number(_0x2b3ea7.amount));
                  $.txfail && (await $.wait(5000), _0x41b306 = await bdy_0x1d23aa(_0x2b3ea7, Number(_0x2b3ea7.amount)));
                  if ($.txfail) {
                    $.failtxlist.push(_0x2b3ea7);
                  }
                  if (_0x41b306.data?.["message"]?.["includes"]("上限") && bdy_0x1445bd == "true" && $.toredfailnum < 5) {
                    await bdy_0x210c97(_0x2b3ea7, Number(_0x2b3ea7.amount));
                  }
                  await $.wait(bdy_0x1344da * 1000);
                } else {
                  _0x2b3ea7.state == 8;
                }
              }
            }
            await $.wait(3000);
          }
          $.banip = false;
          while ($.failtxlist.length > 0 && $.toredfailnum < 5) {
            console.log("\n" + $.failtxlist.length);
            for (let _0x2ff00b = 0; _0x2ff00b < $.failtxlist.length;) {
              let _0xc52f91 = $.failtxlist[_0x2ff00b];
              if (_0xc52f91.prizeType == 4) {
                $.txfail = false;
                process.stdout.write("" + Number(_0xc52f91.amount));
                let _0x1495de = await bdy_0x1d23aa(_0xc52f91, Number(_0xc52f91.amount));
                $.txfail && (await $.wait(5000), _0x1495de = await bdy_0x1d23aa(_0xc52f91, Number(_0xc52f91.amount)));
                $.txfail ? _0x2ff00b++ : $.failtxlist.splice(_0x2ff00b, 1);
                if (_0x1495de.data?.["message"]?.["includes"]("上限") && bdy_0x1445bd == "true") {
                  await bdy_0x210c97(_0xc52f91, Number(_0xc52f91.amount));
                }
                await $.wait(bdy_0x1344da * 1000);
              }
            }
          }
        } else {
          for (let _0x34ebcb = 0; _0x34ebcb < 1; _0x34ebcb++) {
            if ($.nocashnum > 2 || $.toredfailnum > 4) {
              break;
            }
            while (bdy_0xbb7ae0.length > 0) {
              console.log("\n" + bdy_0xbb7ae0.length);
              for (let _0x16688c = 0; _0x16688c < bdy_0xbb7ae0.length;) {
                let _0x26fe5d = bdy_0xbb7ae0[_0x16688c];
                if (_0x26fe5d.prizeType == 4) {
                  $.txfail = false;
                  process.stdout.write("" + Number(_0x26fe5d.amount));
                  let _0x58666a = await bdy_0x1d23aa(_0x26fe5d, Number(_0x26fe5d.amount));
                  $.txfail && (await $.wait(5000), _0x58666a = await bdy_0x1d23aa(_0x26fe5d, Number(_0x26fe5d.amount)));
                  $.txfail ? _0x16688c++ : bdy_0xbb7ae0.splice(_0x16688c, 1);
                  if (_0x58666a.data?.["message"]?.["includes"]("上限") && bdy_0x1445bd == "true" && $.toredfailnum < 5) {
                    await bdy_0x210c97(_0x26fe5d, Number(_0x26fe5d.amount));
                  }
                  await $.wait(bdy_0x1344da * 1000);
                }
              }
              await $.wait(2000);
            }
          }
        }
        $.txsuc.length !== 0 && $.log("\n\n本次成功提现总计：" + $.txsuc.reduce((_0x5d3aeb, _0x1bbf1d) => _0x5d3aeb + _0x1bbf1d * 100, 0) / 100 + "元");
        $.toredsuc.length !== 0 && $.log("\n\n本次成功转红包总计：" + $.toredsuc.reduce((_0x5d6a51, _0x27aa67) => _0x5d6a51 + _0x27aa67 * 100, 0) / 100 + "元");
      } else {
        $.log("\n\n⚠已设置不提现！");
      }
      bdy_0xbb7ae0 = [];
      await $.wait(2000);
    }
  }
})().catch(_0x59924b => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x59924b + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0x138320(_0x40eb11) {
  const _0x1b7658 = {
    linkId: "wDNvX5t2N52cWEM8cLOa0g",
    inviter: ""
  };
  let _0x954d80 = _0x1b7658,
    _0x37753a = {
      appId: "eb67b",
      functionId: "inviteFissionHome",
      fn: "inviteFissionHome",
      body: _0x954d80,
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
  _0x954d80 = await bdy_0x33d29e.getbody(_0x37753a);
  if (!_0x954d80) {
    return;
  }
  return new Promise(async _0x210af4 => {
    $.dpost(bdy_0x16e524(_0x954d80), async (_0x1a60f6, _0x4a6f5e, _0x211079) => {
      try {
        if (_0x1a60f6) {
          console.log("" + JSON.stringify(_0x1a60f6));
          console.log("homeinfo请求失败，请检查网路重试");
        } else {
          _0x211079 = JSON.parse(_0x211079);
          if (_0x211079.code == 0) {
            $.times = _0x211079.data.prizeNum;
            if (_0x40eb11) {
              console.log("我的助力码：" + _0x211079.data.inviter);
            }
            bdy_0x577c6a.push(_0x211079.data.inviter);
          } else {
            console.log(_0x211079.errMsg);
          }
        }
      } catch (_0x4924b3) {
        $.logErr(_0x4924b3, _0x4a6f5e);
      } finally {
        _0x210af4(_0x211079);
      }
    });
  });
}
async function bdy_0x34049b() {
  const _0x114185 = {
    linkId: "wDNvX5t2N52cWEM8cLOa0g"
  };
  let _0x5db52f = _0x114185,
    _0x5acd5c = {
      appId: "b8469",
      functionId: "inviteFissionReceive",
      fn: "inviteFissionReceive",
      body: _0x5db52f,
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
  _0x5db52f = await bdy_0x33d29e.getbody(_0x5acd5c);
  if (!_0x5db52f) {
    return;
  }
  return new Promise(async _0x37cbcb => {
    $.dpost(bdy_0x16e524(_0x5db52f), async (_0x305fee, _0xd3874, _0x56bd3d) => {
      try {
        if (_0x305fee) {
          console.log("" + JSON.stringify(_0x305fee));
          console.log("receive请求失败，请检查网路重试");
          _0x305fee.includes("403") && ($.banip = true);
        } else {
          _0x56bd3d = JSON.parse(_0x56bd3d);
          if (_0x56bd3d.code == 0) {
            process.stdout.write("----提现金" + _0x56bd3d.data.amount + "(+" + _0x56bd3d.data.receiveList[0].amount + ")");
            txjscore.push(_0x56bd3d.data.receiveList[0].amount);
            _0x56bd3d.data?.["state"] == 3 && (process.stdout.write("----恭喜达成"), $.txj = false, $.txjsuc = true);
          } else {
            if (_0x56bd3d.code == 80208) {
              process.stdout.write("----送的抽奖次数没有提现金");
            } else {
              _0x56bd3d.code == 80209 ? (process.stdout.write("----完成标识"), $.txj = false) : console.log(JSON.stringify(_0x56bd3d));
            }
          }
        }
      } catch (_0x450c9c) {
        $.logErr(_0x450c9c, _0xd3874);
      } finally {
        _0x37cbcb(_0x56bd3d);
      }
    });
  });
}
async function bdy_0xc01005(_0x20bc9e) {
  const _0x584a80 = {
    linkId: "wDNvX5t2N52cWEM8cLOa0g"
  };
  let _0x4771df = _0x584a80,
    _0x2e1fcc = {
      appId: "c02c6",
      functionId: "inviteFissionDrawPrize",
      fn: "inviteFissionDrawPrize",
      body: _0x4771df,
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
  _0x4771df = await bdy_0x33d29e.getbody(_0x2e1fcc);
  if (!_0x4771df) {
    return;
  }
  return new Promise(async _0x1b7ddc => {
    $.dpost(bdy_0x16e524(_0x4771df), async (_0x4f3d55, _0x2a3721, _0x44c7ba) => {
      try {
        if (_0x4f3d55) {
          console.log("" + JSON.stringify(_0x4f3d55));
          console.log("lottery请求失败，请检查网路重试");
          _0x4f3d55.includes("403") && ($.banip = true);
        } else {
          _0x44c7ba = JSON.parse(_0x44c7ba);
          if (_0x44c7ba.code == 0) {
            const _0x2e5e50 = _0x44c7ba.data.prizeType;
            if (!_0x2e5e50) {
              fail++;
            }
            switch (_0x2e5e50) {
              case 1:
                process.stdout.write("垃.圾.券⚫");
                $.txjsuc && $.fail++;
                $.fail++;
                $.hotflag = false;
                break;
              case 4:
                let _0x382857 = parseFloat(_0x44c7ba.data.prizeValue).toFixed(2);
                process.stdout.write(_0x382857 + "现金💰️");
                bdy_0x5e4dfc.push(_0x382857);
                const _0x4b4862 = {
                  prizeValue: _0x44c7ba.data.prizeValue,
                  id: _0x44c7ba.data.id,
                  poolBaseId: _0x44c7ba.data.poolBaseId,
                  prizeGroupId: _0x44c7ba.data.prizeGroupId,
                  prizeBaseId: _0x44c7ba.data.prizeBaseId,
                  prizeType: _0x44c7ba.data.prizeType,
                  amount: _0x44c7ba.data.amount
                };
                bdy_0xbb7ae0.push(_0x4b4862);
                $.fail = 0;
                $.hotflag = false;
                break;
              case 2:
                let _0x9e0a82 = parseFloat(_0x44c7ba.data.prizeValue).toFixed(2);
                process.stdout.write(_0x9e0a82 + "红包🧧");
                bdy_0x4e1203.push(_0x9e0a82);
                $.fail = 0;
                $.hotflag = false;
                break;
              default:
                $.hotflag = false;
                console.log(JSON.stringify(_0x44c7ba.data));
            }
          } else {
            if (_0x44c7ba.errMsg.includes("火爆")) {
              process.stdout.write("未中奖 ");
              $.hotflag = true;
            } else {
              if (_0x44c7ba.errMsg.includes("结束")) {
                $.end = true;
                $.hotflag = false;
                console.log(_0x44c7ba.errMsg);
              } else {
                if (_0x44c7ba.errMsg.includes("未登录")) {
                  $.isLogin = false;
                  $.hotflag = false;
                  console.log(_0x44c7ba.errMsg);
                } else {
                  $.hotflag = false;
                  console.log(_0x44c7ba.errMsg);
                }
              }
            }
          }
        }
      } catch (_0x3cac4d) {
        $.logErr(_0x3cac4d, _0x2a3721);
      } finally {
        _0x1b7ddc(_0x44c7ba);
      }
    });
  });
}
async function bdy_0x298b64(_0x25611f) {
  const _0x5485e0 = {
    pageNum: _0x25611f,
    pageSize: 100,
    linkId: "wDNvX5t2N52cWEM8cLOa0g",
    business: "fission"
  };
  let _0x482901 = _0x5485e0,
    _0x5e11fc = {
      appId: "f2b1d",
      functionId: "superRedBagList",
      fn: "superRedBagList",
      body: _0x482901,
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
  _0x482901 = await bdy_0x33d29e.getbody(_0x5e11fc);
  if (!_0x482901) {
    return;
  }
  const _0x1fd295 = {
    url: "https://api.m.jd.com/api",
    body: _0x482901 + "&loginType=2&loginWQBiz=wegame&uuid=" + $.uuid + "&build=169088&screen=414*736&networkType=wifi&d_brand=iPhone&d_model=iPhone10,2&lang=zh_CN&osVersion=&partner=-1&cthr=1",
    headers: {},
    ciphers: bdy_0xc51515.cpstr
  };
  _0x1fd295.headers.Accept = "application/json, text/plain, */*";
  _0x1fd295.headers["x-rp-client"] = "h5_1.0.0";
  _0x1fd295.headers["Accept-Language"] = "zh-cn";
  _0x1fd295.headers["Accept-Encoding"] = "gzip, deflate, br";
  _0x1fd295.headers["Content-Type"] = "application/x-www-form-urlencoded";
  _0x1fd295.headers.Origin = "https://pro.m.jd.com";
  _0x1fd295.headers["User-Agent"] = $.UA;
  _0x1fd295.headers.Referer = "https://pro.m.jd.com/";
  _0x1fd295.headers["x-referer-page"] = "https://pro.m.jd.com/";
  _0x1fd295.headers["request-from"] = "native";
  _0x1fd295.headers.Cookie = bdy_0x53ad54;
  return new Promise(async _0x18147b => {
    $.dpost(_0x1fd295, async (_0x313016, _0x291d05, _0x513787) => {
      try {
        if (_0x313016) {
          console.log("" + JSON.stringify(_0x313016));
          console.log(" API请求失败，请检查网路重试");
          if (_0x313016.includes("403")) {
            $.banip = true;
          }
          _0x513787 = "";
        } else {
          _0x513787 = JSON.parse(_0x513787);
          if (_0x513787.code == 0) {
            $.baglist = _0x513787.data.items;
          } else {
            console.log(_0x513787.errMsg);
          }
        }
      } catch (_0x88e6c7) {
        $.logErr(_0x88e6c7, _0x291d05);
      } finally {
        _0x18147b(_0x513787);
      }
    });
  });
}
async function bdy_0x1d23aa(_0x46e969, _0x117380) {
  let _0x46bdac = "functionId=apCashWithDraw&body={\"linkId\":\"wDNvX5t2N52cWEM8cLOa0g\",\"businessSource\":\"NONE\",\"base\":{\"id\":" + _0x46e969.id + ",\"business\":\"fission\",\"poolBaseId\":" + _0x46e969.poolBaseId + ",\"prizeGroupId\":" + _0x46e969.prizeGroupId + ",\"prizeBaseId\":" + _0x46e969.prizeBaseId + ",\"prizeType\":4}}&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=" + $.UA.split(";")[2];
  return new Promise(async _0x29838f => {
    $.dpost(bdy_0x16e524(_0x46bdac), async (_0xa02526, _0xef802, _0x4b8b46) => {
      try {
        if (_0xa02526) {
          console.log("" + JSON.stringify(_0xa02526));
          console.log("apCashWithDraw请求失败，请检查网路重试");
          _0xa02526.includes("403") && ($.banip = true);
        } else {
          _0x4b8b46 = JSON.parse(_0x4b8b46);
          if (_0x4b8b46.code == 0) {
            if (_0x4b8b46.data.message.indexOf("待发放") > -1) {
              process.stdout.write("" + (!$.txfail ? "❌" : "❌ "));
              $.txfail = true;
            } else {
              if (_0x4b8b46.data.message.includes("上限")) {
                !bdy_0x1445bd && process.stdout.write("♻️ ");
                $.txfull = true;
                $.txfail = false;
              } else {
                _0x4b8b46.data.message.includes("提现") ? (process.stdout.write("✔️ "), $.txsuc.push(_0x117380), $.txfail = false) : console.log(_0x4b8b46.data.message);
              }
            }
          } else {
            console.log(_0x4b8b46.errMsg);
          }
        }
      } catch (_0x10880b) {
        $.logErr(_0x10880b, _0xef802);
      } finally {
        _0x29838f(_0x4b8b46 || "");
      }
    });
  });
}
async function bdy_0x210c97(_0x543bfe, _0x156148) {
  let _0x5e34fd = "functionId=apRecompenseDrawPrize&body={\"drawRecordId\":" + _0x543bfe.id + ",\"business\":\"fission\",\"poolId\":" + _0x543bfe.poolBaseId + ",\"prizeGroupId\":" + _0x543bfe.prizeGroupId + ",\"prizeId\":" + _0x543bfe.prizeBaseId + ",\"linkId\":\"wDNvX5t2N52cWEM8cLOa0g\"}&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=" + $.UA.split(";")[2];
  const _0x2cb0d9 = {
    Host: "api.m.jd.com",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": $.UA,
    Cookie: bdy_0x53ad54
  };
  const _0x285272 = {
    url: "https://api.m.jd.com/api",
    body: _0x5e34fd,
    headers: _0x2cb0d9
  };
  return new Promise(async _0x2424ed => {
    $.dpost(_0x285272, async (_0x27afa6, _0x4f45f0, _0x406586) => {
      try {
        if (_0x27afa6) {
          console.log("" + JSON.stringify(_0x27afa6));
          console.log("apRecompenseDrawPrize 请求失败，请检查网路重试");
          _0x27afa6.includes("403") && ($.banip = true);
        } else {
          _0x406586 = JSON.parse(_0x406586);
          if (_0x406586.code == 0) {
            _0x406586.data.resCode === "0" ? (process.stdout.write("🧧 "), $.toredsuc.push(_0x156148)) : (process.stdout.write("❎ "), $.toredfailnum++);
          } else {
            if (_0x406586.errMsg === "失败") {
              process.stdout.write("❎ ");
              $.toredfailnum++;
            } else {
              console.log(_0x406586.errMsg);
            }
          }
        }
      } catch (_0x4a19d7) {
        $.logErr(_0x4a19d7, _0x4f45f0);
      } finally {
        _0x2424ed(_0x406586);
      }
    });
  });
}
function bdy_0x16e524(_0x4da3a6) {
  const _0x3e53c6 = {
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
    Cookie: bdy_0x53ad54
  };
  const _0x27e5bc = {
    url: "https://api.m.jd.com/api?" + _0x4da3a6,
    headers: _0x3e53c6
  };
  return _0x27e5bc;
}
function bdy_0x1fa180() {
  return new Promise(_0x45303b => {
    const _0x42639d = {
      Cookie: bdy_0x53ad54,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x2196f8 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x42639d,
      timeout: 10000
    };
    $.get(_0x2196f8, (_0x1b838c, _0x207362, _0x4c9b9c) => {
      try {
        if (_0x4c9b9c) {
          _0x4c9b9c = JSON.parse(_0x4c9b9c);
          if (!(_0x4c9b9c.islogin === "1")) {
            if (_0x4c9b9c.islogin === "0") {
              $.isLogin = false;
            }
          }
        }
      } catch (_0x4271a8) {
        console.log(_0x4271a8);
      } finally {
        _0x45303b();
      }
    });
  });
}
function bdy_0x4c1317() {
  return new Promise(_0x1f62c0 => {
    $.log("京东账号" + $.index + $.nickName + "\n" + bdy_0x10cacc);
    _0x1f62c0();
  });
}
function bdy_0x5cbb69(_0x4aadb5) {
  try {
    if (typeof JSON.parse(_0x4aadb5) == "object") {
      return true;
    }
  } catch (_0x2c5907) {
    console.log(_0x2c5907);
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function bdy_0x18f748(_0x24e002) {
  const _0x1208c9 = _0x24e002.getFullYear(),
    _0x39fa4f = ("0" + (_0x24e002.getMonth() + 1)).slice(-2),
    _0x559007 = ("0" + _0x24e002.getDate()).slice(-2),
    _0x58d438 = ("0" + _0x24e002.getHours()).slice(-2),
    _0x28156e = ("0" + _0x24e002.getMinutes()).slice(-2),
    _0x2e15dd = ("0" + _0x24e002.getSeconds()).slice(-2);
  return _0x1208c9 + "/" + _0x39fa4f + "/" + _0x559007 + " " + _0x58d438 + ":" + _0x28156e + ":" + _0x2e15dd;
}
function bdy_0x4faab5(_0x363fee) {
  if (typeof _0x363fee == "string") {
    try {
      return JSON.parse(_0x363fee);
    } catch (_0x2b40dd) {
      console.log(_0x2b40dd);
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
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}
