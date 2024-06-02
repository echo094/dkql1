
/*
转赚红包,只抽奖提现
14 15 * * * https://raw.githubusercontent.com/6dylan6/jdpro/main/jd_zzhb_draw_new.js
 */

const $ = new Env('Jd转赚红包_抽奖提现2');
const bdy_0x349241 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x4ccf70 = require("./function/dylans"),
  bdy_0x3dac7e = require("./USER_AGENTS"),
  bdy_0x10e3d2 = require("./function/dylib");
let bdy_0x1639d9 = true,
  bdy_0x5f3315 = [],
  bdy_0x4c92fe = [],
  bdy_0x370d16 = [],
  bdy_0x2b797c = [],
  bdy_0x16660a = {},
  bdy_0x396bd3 = [],
  bdy_0x33b10d = "",
  bdy_0x44e1ff = "";
const bdy_0x4f52bf = process.env.JDZHB2LTNUM || "-1",
  bdy_0x211529 = process.env.JDZHB2DELAY || "1",
  bdy_0x900ebb = process.env.TXDELAY || "5",
  bdy_0x1b2db7 = process.env.TXIVAL || "1",
  bdy_0x244bd1 = process.env.JDZHB2TORED || false,
  bdy_0x3f4509 = process.env.TXSILENT || false,
  bdy_0x1fd1dc = process.env.CXJLJQ_COUNT || "10",
  bdy_0xf89c9e = process.env.TX_MODE || "0",
  bdy_0x7d23fe = process.env.NOTX ? process.env.NOTX : false;
if (process.env.DY_PROXY) {
  try {
    bdy_0x16660a = require("./function/proxy.js");
    $.dget = bdy_0x16660a.intoRequest($.get.bind($));
    $.dpost = bdy_0x16660a.intoRequest($.post.bind($));
  } catch {
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
if ($.isNode()) {
  Object.keys(bdy_0x349241).forEach(_0x10e611 => {
    bdy_0x396bd3.push(bdy_0x349241[_0x10e611]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x396bd3 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...bdy_0x33e1c9($.getdata("CookiesJD") || "[]").map(_0x6c648 => _0x6c648.cookie)].filter(_0x5119bf => !!_0x5119bf);
}
!(async () => {
  if (!bdy_0x396bd3[0]) {
    const _0x643371 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x643371);
    return;
  }
  $.log("\n❗❗❗注意此活动24小时一轮，抽奖次数过期清零❗❗❗");
  $.log("\n当前版本：20240528 ");
  console.log("执行流程，抽奖--提现");
  console.log("TG频道：https://t.me/dylan_jdpro");
  $.log("\n环境变量清单（可选项）：");
  $.log("  抽奖次数：默认抽完  JDZHB2LTNUM='200'\n  抽奖间隔：默认1秒  JDZHB2DELAY='3'\n  提现间隔：默认5秒  TXDELAY='3'\n  提现范围：默认1天内，太大会403  TXIVAL='3'\n  开启提现到上限转红包：JDZHB2TORED='true'\n  开启代理：API DY_PROXY='apiurl'\n  垃圾券数量：默认10次，CXJLJQ_COUNT='20'\n  提现模式：默认提当前所得，设置1开启查列表提现，TX_MODE='1'\n  关闭提现：NOTX='true'\n");
  console.log("\n开始抽奖和提现(间隔" + bdy_0x211529 + "秒 连续" + bdy_0x1fd1dc + "次垃圾券停止)...");
  bdy_0x4f52bf > -1 && console.log("\n已设置本次运行抽奖次数 " + bdy_0x4f52bf);
  let _0x28f821 = new Date();
  _0x28f821.setDate(_0x28f821.getDate() - bdy_0x1b2db7);
  for (let _0x1355d4 = 0; _0x1355d4 < bdy_0x396bd3.length; _0x1355d4++) {
    if (bdy_0x396bd3[_0x1355d4]) {
      bdy_0x33b10d = bdy_0x396bd3[_0x1355d4];
      $.UserName = decodeURIComponent(bdy_0x33b10d.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x33b10d.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x1355d4 + 1;
      $.isLogin = true;
      $.nickName = "";
      $.fail = 0;
      bdy_0x4c92fe = [];
      bdy_0x370d16 = [];
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
      $.UA = bdy_0x3dac7e.UARAM ? bdy_0x3dac7e.UARAM() : bdy_0x3dac7e.USER_AGENT;
      $.uuid = bdy_0x10e3d2.UUID();
      console.log("\n\n--------开始【账号" + $.index + "】 " + ($.nickName || $.UserName) + "----------\n");
      let _0x2b7cc9 = await bdy_0x577e19(1);
      await $.wait(1000);
      if (_0x2b7cc9.code != "0") {
        continue;
      }
      $.log("本轮已抽奖次数：" + _0x2b7cc9.data.drawPrizeNum);
      $.log("本轮剩余抽奖次数：" + $.times);
      if (_0x2b7cc9.data.cashVo) {
        if (_0x2b7cc9.data?.["cashVo"]?.["state"] === 1) {
          $.log("本轮提现金进度：" + _0x2b7cc9.data.cashVo.amount + "/" + _0x2b7cc9.data.cashVo.totalAmount + "(-" + _0x2b7cc9.data.cashVo.leftAmount + ")");
        } else {
          _0x2b7cc9.data?.["cashVo"]?.["state"] === 3 && ($.log("本轮提现金达成：" + _0x2b7cc9.data.cashVo.amount + "/" + _0x2b7cc9.data.cashVo.totalAmount), $.txj = false, $.txjsuc = true);
        }
      } else {
        $.txj = false;
      }
      $.log("本轮结束时间： " + bdy_0x206ccd(new Date(Date.now() + _0x2b7cc9.data.countDownTime)));
      for (let _0x18a9a6 = 0; _0x18a9a6 < (bdy_0x4f52bf > -1 && bdy_0x4f52bf < $.times ? bdy_0x4f52bf : $.times); _0x18a9a6++) {
        process.stdout.write("\n第" + (_0x18a9a6 + 1) + "次抽奖结果：");
        for (let _0x1e69a1 of Array(1)) {
          await bdy_0x596186(_0x1e69a1 + 1);
          if (!$.hotflag) {
            break;
          }
          await $.wait(Math.random() * 500 + bdy_0x211529 * 1000);
        }
        if ($.banip || !$.isLogin) {
          break;
        }
        if ($.end) {
          console.log("\n本轮结束了，开启新一轮");
          let _0x3214d3 = await bdy_0x577e19(0);
          _0x3214d3.code == 0 && $.log("开启成功，结束时间： " + bdy_0x206ccd(new Date(Date.now() + _0x3214d3.data.countDownTime)));
        }
        $.txj && (await bdy_0x59358e());
        await $.wait(Math.random() * 500 + bdy_0x211529 * 1000);
        if ($.fail >= bdy_0x1fd1dc) {
          $.log("连续垃圾券，不继续抽了");
          break;
        }
      }
      bdy_0x370d16.length !== 0 && $.log("\n\n本次抽奖获得红包总计：" + bdy_0x370d16.reduce((_0x43f3f3, _0x30fe9b) => _0x43f3f3 + _0x30fe9b * 100, 0) / 100 + "元");
      bdy_0x4c92fe.length !== 0 && $.log("\n\n本次抽奖获得现金总计：" + bdy_0x4c92fe.reduce((_0x3ca317, _0xa68c71) => _0x3ca317 + _0xa68c71 * 100, 0) / 100 + "元");
      if (txjscore.length !== 0) {
        let _0x33dcec = txjscore.reduce((_0x370687, _0x3ec7d9) => _0x370687 + _0x3ec7d9 * 100, 0) / 100;
        $.log("\n\n本次抽奖获得提现金：" + _0x33dcec + "个, 平均" + (_0x33dcec / (bdy_0x4f52bf > -1 ? Math.min.apply(null, [bdy_0x4f52bf, $.times]) : $.times)).toFixed(4) + "个/抽");
      }
      if (bdy_0x7d23fe != "true") {
        if (new Date().getHours() < 6 && bdy_0x3f4509) {
          continue;
        }
        $.log("\n——————————————开始提现（间隔" + bdy_0x900ebb + "秒）————————————————");
        $.log("\n当前提现模式：" + (bdy_0xf89c9e == "1" ? bdy_0x1b2db7 + "天内历史" : "本次所抽现金"));
        $.log("上限转红包：" + (bdy_0x244bd1 ? "开启" : "关闭(续期♻️)"));
        $.txsuc = [];
        $.toredsuc = [];
        $.failtxlist = [];
        $.banip = false;
        if (bdy_0xf89c9e == "1") {
          for (let _0xf55401 = 0; _0xf55401 < 500; _0xf55401++) {
            if ($.nocashnum > 2 || $.toredfailnum > 4 || $.banip) {
              break;
            }
            process.stdout.write("\n" + (_0xf55401 + 1) + "页：");
            let _0x3c096d = await bdy_0x4eafd0(_0xf55401 + 1);
            _0x3c096d == "" && (await $.wait(5000), await bdy_0x4eafd0(_0xf55401 + 1));
            if (!$.baglist || $.baglist.length === 0) {
              break;
            }
            for (let _0x590952 of $.baglist) {
              if (Math.max.apply(null, [new Date(_0x590952.createTime), new Date(_0x590952.startTime)]) < _0x28f821 || $.toredfailnum > 4) {
                $.nocashnum = 5;
                break;
              }
              if (_0x590952.prizeType == 4) {
                $.txfail = false;
                if (_0x590952.state == 0 || _0x590952.state == 2) {
                  process.stdout.write("" + Number(_0x590952.amount));
                  let _0x2b0bca = await bdy_0x1f97ea(_0x590952, Number(_0x590952.amount));
                  $.txfail && (await $.wait(5000), _0x2b0bca = await bdy_0x1f97ea(_0x590952, Number(_0x590952.amount)));
                  if ($.txfail) {
                    $.failtxlist.push(_0x590952);
                  }
                  if (_0x2b0bca.data?.["message"]?.["includes"]("上限") && bdy_0x244bd1 == "true" && $.toredfailnum < 5) {
                    await bdy_0x2764f3(_0x590952, Number(_0x590952.amount));
                  }
                  await $.wait(bdy_0x900ebb * 1000);
                } else {
                  _0x590952.state == 8;
                }
              }
            }
            await $.wait(3000);
          }
          $.banip = false;
          while ($.failtxlist.length > 0 && $.toredfailnum < 5) {
            console.log("\n" + $.failtxlist.length);
            for (let _0xf1d07a = 0; _0xf1d07a < $.failtxlist.length;) {
              let _0x56a885 = $.failtxlist[_0xf1d07a];
              if (_0x56a885.prizeType == 4) {
                $.txfail = false;
                process.stdout.write("" + Number(_0x56a885.amount));
                let _0x2e1dc3 = await bdy_0x1f97ea(_0x56a885, Number(_0x56a885.amount));
                $.txfail && (await $.wait(5000), _0x2e1dc3 = await bdy_0x1f97ea(_0x56a885, Number(_0x56a885.amount)));
                $.txfail ? _0xf1d07a++ : $.failtxlist.splice(_0xf1d07a, 1);
                if (_0x2e1dc3.data?.["message"]?.["includes"]("上限") && bdy_0x244bd1 == "true") {
                  await bdy_0x2764f3(_0x56a885, Number(_0x56a885.amount));
                }
                await $.wait(bdy_0x900ebb * 1000);
              }
            }
          }
        } else {
          for (let _0x23c6c7 = 0; _0x23c6c7 < 1; _0x23c6c7++) {
            if ($.nocashnum > 2 || $.toredfailnum > 4) {
              break;
            }
            while (bdy_0x2b797c.length > 0) {
              console.log("\n" + bdy_0x2b797c.length);
              for (let _0xc708b = 0; _0xc708b < bdy_0x2b797c.length;) {
                let _0x2c0728 = bdy_0x2b797c[_0xc708b];
                if (_0x2c0728.prizeType == 4) {
                  $.txfail = false;
                  process.stdout.write("" + Number(_0x2c0728.amount));
                  let _0x54a807 = await bdy_0x1f97ea(_0x2c0728, Number(_0x2c0728.amount));
                  $.txfail && (await $.wait(5000), _0x54a807 = await bdy_0x1f97ea(_0x2c0728, Number(_0x2c0728.amount)));
                  $.txfail ? _0xc708b++ : bdy_0x2b797c.splice(_0xc708b, 1);
                  if (_0x54a807.data?.["message"]?.["includes"]("上限") && bdy_0x244bd1 == "true" && $.toredfailnum < 5) {
                    await bdy_0x2764f3(_0x2c0728, Number(_0x2c0728.amount));
                  }
                  await $.wait(bdy_0x900ebb * 1000);
                }
              }
              await $.wait(2000);
            }
          }
        }
        $.txsuc.length !== 0 && $.log("\n\n本次成功提现总计：" + $.txsuc.reduce((_0x230d0a, _0x13dea7) => _0x230d0a + _0x13dea7 * 100, 0) / 100 + "元");
        $.toredsuc.length !== 0 && $.log("\n\n本次成功转红包总计：" + $.toredsuc.reduce((_0x188397, _0x1022e7) => _0x188397 + _0x1022e7 * 100, 0) / 100 + "元");
      } else {
        $.log("\n\n⚠已设置不提现！");
      }
      bdy_0x2b797c = [];
      await $.wait(2000);
    }
  }
})().catch(_0x53d46d => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x53d46d + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0x577e19(_0x5a9ceb) {
  let _0x17be47 = {
      linkId: "wDNvX5t2N52cWEM8cLOa0g",
      inviter: ""
    },
    _0x594451 = {
      appId: "eb67b",
      functionId: "inviteFissionHome",
      fn: "inviteFissionHome",
      body: _0x17be47,
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
  _0x17be47 = await bdy_0x4ccf70.getbody(_0x594451);
  if (!_0x17be47) {
    return;
  }
  return new Promise(async _0x495f8b => {
    $.dpost(bdy_0x44e569(_0x17be47), async (_0x5c2b7c, _0x559716, _0x35e1eb) => {
      try {
        if (_0x5c2b7c) {
          console.log("" + JSON.stringify(_0x5c2b7c));
          console.log("homeinfo请求失败，请检查网路重试");
        } else {
          _0x35e1eb = JSON.parse(_0x35e1eb);
          if (_0x35e1eb.code == 0) {
            $.times = _0x35e1eb.data.prizeNum;
            if (_0x5a9ceb) {
              console.log("我的助力码：" + _0x35e1eb.data.inviter);
            }
            bdy_0x5f3315.push(_0x35e1eb.data.inviter);
          } else {
            console.log(_0x35e1eb.errMsg);
          }
        }
      } catch (_0x2d9026) {
        $.logErr(_0x2d9026, _0x559716);
      } finally {
        _0x495f8b(_0x35e1eb);
      }
    });
  });
}
async function bdy_0x59358e() {
  let _0x1cb6bf = {
      linkId: "wDNvX5t2N52cWEM8cLOa0g"
    },
    _0x30612d = {
      appId: "b8469",
      functionId: "inviteFissionReceive",
      fn: "inviteFissionReceive",
      body: _0x1cb6bf,
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
  _0x1cb6bf = await bdy_0x4ccf70.getbody(_0x30612d);
  if (!_0x1cb6bf) {
    return;
  }
  return new Promise(async _0x18b35a => {
    $.dpost(bdy_0x44e569(_0x1cb6bf), async (_0x2e9b8f, _0x308916, _0x508988) => {
      try {
        if (_0x2e9b8f) {
          console.log("" + JSON.stringify(_0x2e9b8f));
          console.log("receive请求失败，请检查网路重试");
          _0x2e9b8f.includes("403") && ($.banip = true);
        } else {
          _0x508988 = JSON.parse(_0x508988);
          if (_0x508988.code == 0) {
            process.stdout.write("----提现金" + _0x508988.data.amount + "(+" + _0x508988.data.receiveList[0].amount + ")");
            txjscore.push(_0x508988.data.receiveList[0].amount);
            _0x508988.data?.["state"] == 3 && (process.stdout.write("----恭喜达成"), $.txj = false, $.txjsuc = true);
          } else {
            if (_0x508988.code == 80208) {
              process.stdout.write("----送的抽奖次数没有提现金");
            } else {
              if (_0x508988.code == 80209) {
                process.stdout.write("----完成标识");
                $.txj = false;
              } else {
                console.log(JSON.stringify(_0x508988));
              }
            }
          }
        }
      } catch (_0x236d2b) {
        $.logErr(_0x236d2b, _0x308916);
      } finally {
        _0x18b35a(_0x508988);
      }
    });
  });
}
async function bdy_0x596186(_0x5e4616) {
  let _0x5b01c7 = {
      linkId: "wDNvX5t2N52cWEM8cLOa0g"
    },
    _0x3aa4db = {
      appId: "c02c6",
      functionId: "inviteFissionDrawPrize",
      fn: "inviteFissionDrawPrize",
      body: _0x5b01c7,
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
  _0x5b01c7 = await bdy_0x4ccf70.getbody(_0x3aa4db);
  if (!_0x5b01c7) {
    return;
  }
  return new Promise(async _0x403ce0 => {
    $.dpost(bdy_0x44e569(_0x5b01c7), async (_0x312597, _0x2c4171, _0x427a81) => {
      try {
        if (_0x312597) {
          console.log("" + JSON.stringify(_0x312597));
          console.log("lottery请求失败，请检查网路重试");
          _0x312597.includes("403") && ($.banip = true);
        } else {
          _0x427a81 = JSON.parse(_0x427a81);
          if (_0x427a81.code == 0) {
            const _0x2e81d9 = _0x427a81.data.prizeType;
            if (!_0x2e81d9) {
              fail++;
            }
            switch (_0x2e81d9) {
              case 1:
                process.stdout.write("垃.圾.券⚫");
                $.txjsuc && $.fail++;
                $.fail++;
                $.hotflag = false;
                break;
              case 4:
                let _0x4eb4a6 = parseFloat(_0x427a81.data.prizeValue).toFixed(2);
                process.stdout.write(_0x4eb4a6 + "现金💰️");
                bdy_0x4c92fe.push(_0x4eb4a6);
                const _0x4ec449 = {
                  prizeValue: _0x427a81.data.prizeValue,
                  id: _0x427a81.data.id,
                  poolBaseId: _0x427a81.data.poolBaseId,
                  prizeGroupId: _0x427a81.data.prizeGroupId,
                  prizeBaseId: _0x427a81.data.prizeBaseId,
                  prizeType: _0x427a81.data.prizeType,
                  amount: _0x427a81.data.amount
                };
                bdy_0x2b797c.push(_0x4ec449);
                $.fail = 0;
                $.hotflag = false;
                break;
              case 2:
                let _0x1b0f67 = parseFloat(_0x427a81.data.prizeValue).toFixed(2);
                process.stdout.write(_0x1b0f67 + "红包🧧");
                bdy_0x370d16.push(_0x1b0f67);
                $.fail = 0;
                $.hotflag = false;
                break;
              default:
                $.hotflag = false;
                console.log(JSON.stringify(_0x427a81.data));
            }
          } else {
            if (_0x427a81.errMsg.includes("火爆")) {
              process.stdout.write("未中奖 ");
              $.hotflag = true;
            } else {
              if (_0x427a81.errMsg.includes("结束")) {
                $.end = true;
                $.hotflag = false;
                console.log(_0x427a81.errMsg);
              } else {
                _0x427a81.errMsg.includes("未登录") ? ($.isLogin = false, $.hotflag = false, console.log(_0x427a81.errMsg)) : ($.hotflag = false, console.log(_0x427a81.errMsg));
              }
            }
          }
        }
      } catch (_0x1cf893) {
        $.logErr(_0x1cf893, _0x2c4171);
      } finally {
        _0x403ce0(_0x427a81);
      }
    });
  });
}
async function bdy_0x4eafd0(_0x28a9e5) {
  let _0x5f2368 = {
      pageNum: _0x28a9e5,
      pageSize: 100,
      linkId: "wDNvX5t2N52cWEM8cLOa0g",
      business: "fission"
    },
    _0x5e9bec = {
      appId: "f2b1d",
      functionId: "superRedBagList",
      fn: "superRedBagList",
      body: _0x5f2368,
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
  _0x5f2368 = await bdy_0x4ccf70.getbody(_0x5e9bec);
  if (!_0x5f2368) {
    return;
  }
  const _0x4b28e9 = {
    url: "https://api.m.jd.com/api",
    body: _0x5f2368 + "&loginType=2&loginWQBiz=wegame&uuid=" + $.uuid + "&build=169088&screen=414*736&networkType=wifi&d_brand=iPhone&d_model=iPhone10,2&lang=zh_CN&osVersion=&partner=-1&cthr=1",
    headers: {},
    ciphers: bdy_0x10e3d2.cpstr
  };
  _0x4b28e9.headers.Accept = "application/json, text/plain, */*";
  _0x4b28e9.headers["x-rp-client"] = "h5_1.0.0";
  _0x4b28e9.headers["Accept-Language"] = "zh-cn";
  _0x4b28e9.headers["Accept-Encoding"] = "gzip, deflate, br";
  _0x4b28e9.headers["Content-Type"] = "application/x-www-form-urlencoded";
  _0x4b28e9.headers.Origin = "https://pro.m.jd.com";
  _0x4b28e9.headers["User-Agent"] = $.UA;
  _0x4b28e9.headers.Referer = "https://pro.m.jd.com/";
  _0x4b28e9.headers["x-referer-page"] = "https://pro.m.jd.com/";
  _0x4b28e9.headers["request-from"] = "native";
  _0x4b28e9.headers.Cookie = bdy_0x33b10d;
  let _0x1be860 = _0x4b28e9;
  return new Promise(async _0x525d85 => {
    $.dpost(_0x1be860, async (_0x1faf0b, _0x5e2345, _0x3f7d01) => {
      try {
        _0x1faf0b ? (console.log("" + JSON.stringify(_0x1faf0b)), console.log(" API请求失败，请检查网路重试"), _0x1faf0b.includes("403") && ($.banip = true), _0x3f7d01 = "") : (_0x3f7d01 = JSON.parse(_0x3f7d01), _0x3f7d01.code == 0 ? $.baglist = _0x3f7d01.data.items : console.log(_0x3f7d01.errMsg));
      } catch (_0x1bf763) {
        $.logErr(_0x1bf763, _0x5e2345);
      } finally {
        _0x525d85(_0x3f7d01);
      }
    });
  });
}
async function bdy_0x1f97ea(_0x2a1ca0, _0x12d59b) {
  let _0x52dcbf = "functionId=apCashWithDraw&body={\"linkId\":\"wDNvX5t2N52cWEM8cLOa0g\",\"businessSource\":\"NONE\",\"base\":{\"id\":" + _0x2a1ca0.id + ",\"business\":\"fission\",\"poolBaseId\":" + _0x2a1ca0.poolBaseId + ",\"prizeGroupId\":" + _0x2a1ca0.prizeGroupId + ",\"prizeBaseId\":" + _0x2a1ca0.prizeBaseId + ",\"prizeType\":4}}&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=" + $.UA.split(";")[2];
  return new Promise(async _0x5d3f2b => {
    $.dpost(bdy_0x44e569(_0x52dcbf), async (_0x5dcf4a, _0x908a6e, _0x4ad5e7) => {
      try {
        if (_0x5dcf4a) {
          console.log("" + JSON.stringify(_0x5dcf4a));
          console.log("apCashWithDraw请求失败，请检查网路重试");
          _0x5dcf4a.includes("403") && ($.banip = true);
        } else {
          _0x4ad5e7 = JSON.parse(_0x4ad5e7);
          if (_0x4ad5e7.code == 0) {
            if (_0x4ad5e7.data.message.indexOf("待发放") > -1) {
              process.stdout.write("" + (!$.txfail ? "❌" : "❌ "));
              $.txfail = true;
            } else {
              if (_0x4ad5e7.data.message.includes("上限")) {
                !bdy_0x244bd1 && process.stdout.write("♻️ ");
                $.txfull = true;
                $.txfail = false;
              } else {
                _0x4ad5e7.data.message.includes("提现") ? (process.stdout.write("✔️ "), $.txsuc.push(_0x12d59b), $.txfail = false) : console.log(_0x4ad5e7.data.message);
              }
            }
          } else {
            console.log(_0x4ad5e7.errMsg);
          }
        }
      } catch (_0x45b416) {
        $.logErr(_0x45b416, _0x908a6e);
      } finally {
        _0x5d3f2b(_0x4ad5e7 || "");
      }
    });
  });
}
async function bdy_0x2764f3(_0x431a3e, _0x176164) {
  let _0x3f6cad = "functionId=apRecompenseDrawPrize&body={\"drawRecordId\":" + _0x431a3e.id + ",\"business\":\"fission\",\"poolId\":" + _0x431a3e.poolBaseId + ",\"prizeGroupId\":" + _0x431a3e.prizeGroupId + ",\"prizeId\":" + _0x431a3e.prizeBaseId + ",\"linkId\":\"wDNvX5t2N52cWEM8cLOa0g\"}&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=" + $.UA.split(";")[2];
  const _0x3c1be6 = {
    Host: "api.m.jd.com",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": $.UA,
    Cookie: bdy_0x33b10d
  };
  let _0x1054bc = {
    url: "https://api.m.jd.com/api",
    body: _0x3f6cad,
    headers: _0x3c1be6
  };
  return new Promise(async _0x40f592 => {
    $.dpost(_0x1054bc, async (_0x976c0a, _0x30cf0e, _0x85dd0c) => {
      try {
        if (_0x976c0a) {
          console.log("" + JSON.stringify(_0x976c0a));
          console.log("apRecompenseDrawPrize 请求失败，请检查网路重试");
          _0x976c0a.includes("403") && ($.banip = true);
        } else {
          _0x85dd0c = JSON.parse(_0x85dd0c);
          if (_0x85dd0c.code == 0) {
            _0x85dd0c.data.resCode === "0" ? (process.stdout.write("🧧 "), $.toredsuc.push(_0x176164)) : (process.stdout.write("❎ "), $.toredfailnum++);
          } else {
            _0x85dd0c.errMsg === "失败" ? (process.stdout.write("❎ "), $.toredfailnum++) : console.log(_0x85dd0c.errMsg);
          }
        }
      } catch (_0x3651b0) {
        $.logErr(_0x3651b0, _0x30cf0e);
      } finally {
        _0x40f592(_0x85dd0c);
      }
    });
  });
}
function bdy_0x44e569(_0x2a23cf) {
  const _0x2786b7 = {
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
    Cookie: bdy_0x33b10d
  };
  const _0x2726f0 = {
    url: "https://api.m.jd.com/api?" + _0x2a23cf,
    headers: _0x2786b7
  };
  return _0x2726f0;
}
function bdy_0x51aabc() {
  return new Promise(_0x590228 => {
    const _0x590b42 = {
      Cookie: bdy_0x33b10d,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x572b4a = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x590b42,
      timeout: 10000
    };
    $.get(_0x572b4a, (_0x4b4093, _0x16e0cd, _0x3d616f) => {
      try {
        if (_0x3d616f) {
          _0x3d616f = JSON.parse(_0x3d616f);
          if (!(_0x3d616f.islogin === "1")) {
            _0x3d616f.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x2f81d2) {
        console.log(_0x2f81d2);
      } finally {
        _0x590228();
      }
    });
  });
}
function bdy_0x28b520() {
  return new Promise(_0x1eb75f => {
    !bdy_0x1639d9 ? $.msg($.name, "", "" + bdy_0x44e1ff) : $.log("京东账号" + $.index + $.nickName + "\n" + bdy_0x44e1ff);
    _0x1eb75f();
  });
}
function bdy_0x999729(_0x551d67) {
  try {
    if (typeof JSON.parse(_0x551d67) == "object") {
      return true;
    }
  } catch (_0x9d48d8) {
    console.log(_0x9d48d8);
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function bdy_0x206ccd(_0x456d02) {
  const _0x598dc4 = _0x456d02.getFullYear(),
    _0x304a8c = ("0" + (_0x456d02.getMonth() + 1)).slice(-2),
    _0x363ba3 = ("0" + _0x456d02.getDate()).slice(-2),
    _0x3139c8 = ("0" + _0x456d02.getHours()).slice(-2),
    _0x5c6649 = ("0" + _0x456d02.getMinutes()).slice(-2),
    _0x19654e = ("0" + _0x456d02.getSeconds()).slice(-2);
  return _0x598dc4 + "/" + _0x304a8c + "/" + _0x363ba3 + " " + _0x3139c8 + ":" + _0x5c6649 + ":" + _0x19654e;
}
function bdy_0x33e1c9(_0x3913cf) {
  if (typeof _0x3913cf == "string") {
    try {
      return JSON.parse(_0x3913cf);
    } catch (_0x1cc3c4) {
      console.log(_0x1cc3c4);
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
