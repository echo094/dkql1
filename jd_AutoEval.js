/**
带图评价
3 12 3 12 * jd_AutoEval.js
*/
const $ = new Env('带图评价晒单');
const bdy_0x378749 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x250ffa = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x5ec134 = require("./function/dylanx"),
  bdy_0x50d3e6 = require("./USER_AGENTS");
let bdy_0x59e9de = [],
  bdy_0x3ef73c = "";
if ($.isNode()) {
  var bdy_0x5413ab = new Buffer.from("64796C616E", "Hex").toString("utf8");
  Object.keys(bdy_0x250ffa).forEach(_0x5e4e3e => {
    bdy_0x59e9de.push(bdy_0x250ffa[_0x5e4e3e]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  let bdy_0x2da64b = $.getdata("CookiesJD") || "[]";
  bdy_0x2da64b = jsonParse(bdy_0x2da64b);
  bdy_0x59e9de = bdy_0x2da64b.map(_0x21b4fc => _0x21b4fc.cookie);
  bdy_0x59e9de.reverse();
  bdy_0x59e9de.push(...[$.getdata("CookieJD2"), $.getdata("CookieJD")]);
  bdy_0x59e9de.reverse();
  bdy_0x59e9de = bdy_0x59e9de.filter(_0x2975d8 => _0x2975d8 !== "" && _0x2975d8 !== null && _0x2975d8 !== undefined);
}
if (process.env.DY_PROXY) {
  const bdy_0x38a9ee = require("./function/proxy.js");
  $.get = bdy_0x38a9ee.intoRequest($.get.bind($));
  $.post = bdy_0x38a9ee.intoRequest($.post.bind($));
}
const bdy_0x1b226b = process.env.EVALNUM ? process.env.EVALNUM : undefined;
let bdy_0x2942d0 = process.env.EVAL_WORD_COUNT ?? 10,
  bdy_0x1be49d = process.env.ONEVAL ?? false,
  bdy_0x3721f6 = ["垃圾", "质量差", "评价内容", "差评", "好差"],
  bdy_0x151ef5 = ["非常满意的购物体验！商品质量很好，价格实惠。物流迅速，包装严密。非常感谢商家的耐心解答和及时发货，给予8分好评。", "商品质量非常好，价格实惠，物流速度很快。包装完好，没有损坏。非常感谢商家的耐心解答和热情服务，下次还会再来购买。", "这是一次愉快的购物体验，商品质量非常好，价格也很实惠。物流速度快，包装严密。非常感谢商家的耐心服务和及时回复，给予8分好评。", "商品收到了，非常满意！质量可以，价格也还合理。感谢商家客服的热情服务和及时发货，好的话会推荐给朋友们。", "这次购物真是太棒了！商品质量很好，与描述一致。包装仔细，没有损坏。非常感谢商家的认真态度和及时发货，下次还会再来购买。", "质量非常好,与卖家描述的完全一致,真的很喜欢,完全超出期望值,发货速度非常快,物流公司服务态度很好,运送速度很快,店主态度特好,很好很好!质量好而价低廉，很热情的客服，下次还来祝你生意兴隆质量非常好，出乎我的意料包装非常仔细。", "我为什么喜欢在京东买东西，因为今天买明天就可以送到。我为什么每个商品的评价都一样，因为在京东买的东西太多太多了，导致积累了很多未评价的订单，所以我统一用段话作为评价内容。京东购物这么久，有买到很好的产品，也有买到比较坑的产品，如果我用这段话来评价，说明这款产品没问题，至少85分以上，而比较垃圾的产品，我绝对不会偷懒到复制粘贴评价，我绝对会用心的差评，这样其他消费者在购买的时候会作为参考，会影响该商品销量，而商家也会因此改进商品质量。", "感觉物超所值 服务态度还是可以的，没什么太多可挑剔的，再接再厉，祝老板生意兴隆", "这是一条好评段子，花钱的评价，麻烦你们认真点!先说商品质量：产品总体不错，包装严实。再说商家服务：点赞啦。最后点评快递：发货很快。其他就是感谢店家打折送券活动，毕竟便宜好货更实在。希望店家多多优惠，及时通知老客户，促成回购。祝生意兴隆。", "滴滴滴，我来汇报了，东西还行，客服节能有待提高哈，一贯好评啦，快递是真的快，后面再来追评吧，就这样"],
  bdy_0x52b2b3 = ["赠品", "权益", "非实物", "非卖品", "增值服务", "服务", "券包", "只换不修"],
  bdy_0x3778a1 = ["送的没花钱哈哈", "东西还还不错", "现在的购物体验越来越好", "以前还没有这么多贴心的赠品、增值服务、权益等服务", "给赞", "算不算白嫖"],
  bdy_0x43e47e = ["以上是我购物感受和体验，仅供参考，也不要只看好评，适合我的不一定适合你。。。。", "总的来说，还可以，我的评价供大家参考借鉴，根据自己情况。。。。", "总之还行，买不了吃亏，买的了上当，嘿嘿！！！！", "就这样，一惯好评啦，不是非常烂一般不会差评", "最后，希望京东越来越好，感恩"],
  bdy_0x556e9d = [],
  bdy_0x110fdb = "",
  bdy_0x480871 = true;
!__filename.includes(bdy_0x5413ab) && (bdy_0x480871 = false);
!(async () => {
  if (!bdy_0x59e9de[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  console.log("当前版本：20240508 优化");
  console.log("每次运行最多20个账号，每个账号最多评价10个商品");
  console.log("问题建议：https://t.me/dylan_jdpro");
  if (bdy_0x1be49d === false) {
    console.log("\n\n默认不执行, 请设置变量 ONEVAL='true'");
    return;
  }
  let _0x38bc47 = 0;
  bdy_0x59e9de.length > 20 ? _0x38bc47 = bdy_0x1b226b ?? 20 : _0x38bc47 = bdy_0x59e9de.length;
  await bdy_0x2170b5();
  for (let _0x394b0f = 0; _0x394b0f < _0x38bc47; _0x394b0f++) {
    if (bdy_0x59e9de[_0x394b0f]) {
      bdy_0x3ef73c = bdy_0x59e9de[_0x394b0f];
      $.UserName = decodeURIComponent(bdy_0x3ef73c.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x3ef73c.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x394b0f + 1;
      $.isLogin = true;
      $.nickName = "";
      $.commentWareList = "";
      $.commentInfoList = "";
      $.UA = bdy_0x50d3e6.UARAM ? bdy_0x50d3e6.UARAM(1) : bdy_0x50d3e6.USER_AGENT;
      $.UA = "okhttp/3.12.16;jdmall;android;version/12.4.2;build/99108;";
      await bdy_0x2aa0b7();
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      if (!$.isLogin) {
        const _0x56ba71 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x56ba71);
        $.isNode() && (await bdy_0x378749.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      await bdy_0x3ec5dc();
      console.log("\n等待10秒...");
      await $.wait(10000);
    }
  }
})().catch(_0x34e665 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x34e665 + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0x3ec5dc() {
  try {
    await bdy_0x39fb1c();
    if (!$.maxPage) {
      console.log("获取待评价数据失败");
      return;
    }
    if ($.maxPage > 1) {
      await $.wait(2000);
      await bdy_0x39fb1c($.maxPage);
      $.commentWareList.length == 0 && (await $.wait(2000), await bdy_0x39fb1c($.maxPage - 1));
    }
    console.log("当前有" + Number($.sdnum) + "个待评价晒单，开始评价最后一页的" + $.commentWareList.length + "个商品...");
    for (let _0x4edef0 of $.commentWareList.reverse()) {
      let _0x383322 = [],
        _0x5d9e90 = [],
        _0xd90876 = "",
        _0x43516a = [];
      bdy_0x556e9d = [];
      $.log("\n去评价 👉 " + _0x4edef0.wname);
      if (_0x4edef0.commentRewardStatus == "1") {
        await bdy_0x4eaffb(_0x4edef0.orderId, _0x4edef0.wareId);
        console.log($.rewardInfo);
        console.log("要求至少" + $.wnezi + "字," + $.saitu + "图");
      } else {
        _0x4edef0.estJingBean > 0 && $.log("评价完成最多可得 " + _0x4edef0.estJingBean + " 豆 🥔");
      }
      if (bdy_0x52b2b3.filter(_0x3ef6dc => _0x4edef0.wname.includes(_0x3ef6dc)).length == 0) {
        console.log("\n开始获取商品好评和图片...");
        await $.wait(5000);
        await bdy_0xbfdb4(_0x4edef0.wareId);
        if ($.maxPage > 1) {
          await $.wait(1000);
          await bdy_0xbfdb4(_0x4edef0.wareId, Math.floor(Math.random() * Math.min.apply(null, [$.maxPage, 10]) + 2));
        }
        await $.wait(2000);
        for (const _0x2587f5 of bdy_0x556e9d) {
          if (_0x2587f5.commentInfo.pictureInfoList) {
            for (const _0x5afdf1 of _0x2587f5.commentInfo.pictureInfoList || {}) {
              if (_0x5afdf1.mediaType != "2") {
                let _0x52c793 = "";
                if (_0x5afdf1.picURL.indexOf("dpg") !== -1) {
                  _0x52c793 = _0x5afdf1.picURL.replace(/s[0-9]{3}x[0-9]{3}_(.*).dpg/g, "$1");
                } else {
                  if (_0x5afdf1.picURL.indexOf("webp") !== -1) {
                    _0x52c793 = _0x5afdf1.picURL.replace(/s[0-9]{3}x[0-9]{3}_(.*).webp/g, "$1");
                  } else {
                    _0x5afdf1.picURL.indexOf("avif") !== -1 && (_0x52c793 = _0x5afdf1.picURL.replace(/s[0-9]{3}x[0-9]{3}_(.*).avif/g, "$1"));
                  }
                }
                _0x52c793 != "" && _0x383322.push(_0x52c793);
              }
            }
          }
          _0x2587f5.commentInfo.commentScore === "5" && _0x2587f5.commentInfo.commentData.length > bdy_0x2942d0 && _0x5d9e90.push(_0x2587f5.commentInfo.commentData);
        }
        for (let _0x47b359 of bdy_0x3721f6) {
          _0x5d9e90 = _0x5d9e90.filter(_0x5a950c => !_0x5a950c.includes(_0x47b359));
        }
        _0x5d9e90.length > 2 ? _0xd90876 = bdy_0x50e0d0(_0x5d9e90) : _0xd90876 = bdy_0x50e0d0(bdy_0x151ef5);
        if (_0x383322.length >= 2) {
          let _0x3fd632 = bdy_0x11a8aa(_0x383322, 2);
          _0x43516a = _0x3fd632.slice(0, _0x3fd632.length).map(_0x340eb7 => ({
            picUrl: _0x340eb7
          }));
        }
      } else {
        console.log("赠品权益，只发布文字评价");
        _0xd90876 += bdy_0x3af68e(bdy_0x3778a1);
      }
      _0xd90876 = _0xd90876.replace(/\*/gi, "");
      _0x4edef0.estJingBean > 0 && _0xd90876.length < 60 && bdy_0x480871 && ($.log("评价有豆，字数不够，我在凑点..."), _0xd90876 += " " + bdy_0x50e0d0(bdy_0x43e47e));
      if (_0x4edef0.commentRewardStatus == "1" && bdy_0x480871) {
        if (_0xd90876.length < Number($.wnezi)) {
          _0xd90876 += " " + bdy_0x50e0d0(bdy_0x43e47e);
        }
        let _0x44f41a = bdy_0x11a8aa(_0x383322, Math.max(2, Number($.saitu)));
        _0x43516a = _0x44f41a.slice(0, _0x44f41a.length).map(_0x4976b5 => ({
          picUrl: _0x4976b5
        }));
      }
      if (_0x43516a.length != 0 && _0x5d9e90.length > 2) {
        console.log("成功获取到图片和评价，去发布✍️✍️✍️...\n");
        await bdy_0xa55b9a("pubComment", {
          productId: _0x4edef0.wareId,
          kocSynFlag: "0",
          categoryList: _0x4edef0.categoryList,
          voucherStatus: "0",
          extInfo: {
            mediasExt: "[{\"VideoIsEditCover\":\"0\",\"ImagePropId\":\"0\",\"ImageTakePhotoFilterId\":\"0\",\"ImageIsCrop\":\"0\",\"VideoIsEditCrop\":\"0\",\"VideoEditFilterId\":\"0\",\"VideoMusicId\":\"0\",\"ImageEditFilterId\":\"0\",\"VideoPropId\":\"0\",\"TakeRate\":\"0\",\"VideoRecordIsMakup\":\"0\",\"ImageTakePhotoIsMakup\":\"0\",\"VideoRecordFilterId\":\"0\",\"ImageFontId\":\"0\",\"FromType\":\"1\",\"ImageStrickId\":\"0\"},{\"VideoIsEditCover\":\"0\",\"ImagePropId\":\"0\",\"ImageTakePhotoFilterId\":\"0\",\"ImageIsCrop\":\"0\",\"VideoIsEditCrop\":\"0\",\"VideoEditFilterId\":\"0\",\"VideoMusicId\":\"0\",\"ImageEditFilterId\":\"0\",\"VideoPropId\":\"0\",\"TakeRate\":\"0\",\"VideoRecordIsMakup\":\"0\",\"ImageTakePhotoIsMakup\":\"0\",\"VideoRecordFilterId\":\"0\",\"ImageFontId\":\"0\",\"FromType\":\"1\",\"ImageStrickId\":\"0\"}]"
          },
          officerScore: "1699",
          anonymousFlag: "1",
          commentScore: "5",
          shopType: "0",
          orderId: _0x4edef0.orderId,
          shopId: _0x4edef0.shopId,
          addPictureFlag: "0",
          commentData: _0xd90876,
          pictureInfoList: _0x43516a,
          officerLevel: "3",
          isCommentTagContent: "0"
        });
      } else {
        if (_0x43516a.length != 0 && _0x5d9e90.length <= 2) {
          console.log("成功获取到图片，但没有获取到评价内容，使用内置评价，去发布✍️✍️✍️...\n");
          await bdy_0xa55b9a("pubComment", {
            productId: _0x4edef0.wareId,
            kocSynFlag: "0",
            categoryList: _0x4edef0.categoryList,
            voucherStatus: "0",
            extInfo: {
              mediasExt: "[{\"VideoIsEditCover\":\"0\",\"ImagePropId\":\"0\",\"ImageTakePhotoFilterId\":\"0\",\"ImageIsCrop\":\"0\",\"VideoIsEditCrop\":\"0\",\"VideoEditFilterId\":\"0\",\"VideoMusicId\":\"0\",\"ImageEditFilterId\":\"0\",\"VideoPropId\":\"0\",\"TakeRate\":\"0\",\"VideoRecordIsMakup\":\"0\",\"ImageTakePhotoIsMakup\":\"0\",\"VideoRecordFilterId\":\"0\",\"ImageFontId\":\"0\",\"FromType\":\"1\",\"ImageStrickId\":\"0\"},{\"VideoIsEditCover\":\"0\",\"ImagePropId\":\"0\",\"ImageTakePhotoFilterId\":\"0\",\"ImageIsCrop\":\"0\",\"VideoIsEditCrop\":\"0\",\"VideoEditFilterId\":\"0\",\"VideoMusicId\":\"0\",\"ImageEditFilterId\":\"0\",\"VideoPropId\":\"0\",\"TakeRate\":\"0\",\"VideoRecordIsMakup\":\"0\",\"ImageTakePhotoIsMakup\":\"0\",\"VideoRecordFilterId\":\"0\",\"ImageFontId\":\"0\",\"FromType\":\"1\",\"ImageStrickId\":\"0\"}]"
            },
            officerScore: "1699",
            anonymousFlag: "1",
            commentScore: "5",
            shopType: "0",
            orderId: _0x4edef0.orderId,
            shopId: _0x4edef0.shopId,
            addPictureFlag: "0",
            commentData: _0xd90876,
            pictureInfoList: _0x43516a,
            officerLevel: "3",
            isCommentTagContent: "0"
          });
        } else {
          if (_0x43516a.length == 0 && _0x5d9e90.length > 2) {
            console.log("没有获取到图片，但获取到评价，去发布✍️✍️✍️...\n");
            const _0x451de9 = {
              productId: _0x4edef0.wareId,
              kocSynFlag: "0",
              categoryList: _0x4edef0.ategoryList,
              voucherStatus: "0",
              officerScore: "1699",
              anonymousFlag: "1",
              commentScore: "5",
              shopType: "0",
              orderId: _0x4edef0.orderId,
              shopId: _0x4edef0.shopId,
              addPictureFlag: "0",
              commentData: _0xd90876,
              pictureInfoList: "",
              officerLevel: "3",
              isCommentTagContent: "0"
            };
            await bdy_0xa55b9a("pubComment", _0x451de9);
          } else {
            if (bdy_0x556e9d.length <= 1) {
              console.log("没有获取到评价和图片,使用内置文字评价，去发布✍️✍️✍️...\n");
              const _0x2e9da0 = {
                productId: _0x4edef0.wareId,
                kocSynFlag: "0",
                categoryList: _0x4edef0.ategoryList,
                voucherStatus: "0",
                officerScore: "1699",
                anonymousFlag: "1",
                commentScore: "5",
                shopType: "0",
                orderId: _0x4edef0.orderId,
                shopId: _0x4edef0.shopId,
                addPictureFlag: "0",
                commentData: _0xd90876,
                pictureInfoList: "",
                officerLevel: "3",
                isCommentTagContent: "0"
              };
              await bdy_0xa55b9a("pubComment", _0x2e9da0);
            }
          }
        }
      }
      console.log("评价内容(" + _0xd90876.length + "字) ：" + _0xd90876);
      if (_0x43516a.length != 0) {
        console.log("晒图详情：");
        _0x43516a.forEach(_0x33afe1 => console.log(_0x33afe1.picUrl));
      }
      await $.wait(1000);
    }
  } catch (_0x9f3a7) {}
}
switch ($.type) {
  case "nb":
    const bdy_0x428762 = {
      nb: nb
    };
    _0xf1f6le = bdy_0x428762;
    break;
}
async function bdy_0xbfdb4(_0x253cd0, _0x5a91ee = 1) {
  const _0x16441a = {
    sortType: "5",
    isCurrentSku: false,
    sku: "" + _0x253cd0,
    pictureCommentType: "A",
    shieldCurrentComment: "1",
    shopType: "0",
    type: "4",
    shadowMainSku: "0",
    num: "10",
    offset: "" + _0x5a91ee,
    pageNum: "" + _0x5a91ee,
    pageSize: "10"
  };
  s = await bdy_0xa55b9a("getCommentListWithCard", _0x16441a);
  bdy_0x556e9d = bdy_0x556e9d.concat(s.commentInfoList);
  $.maxPage = s.maxPage;
}
async function bdy_0x2e9e85(_0x921381, _0x4eb105 = 1) {
  const _0x17c6e6 = {
    bbtf: ""
  };
  const _0x230a93 = {
    category: "",
    extInfo: _0x17c6e6,
    isCurrentSku: true,
    num: "21",
    offset: "" + _0x4eb105,
    shadowMainSku: "0",
    shopType: "0",
    sku: "" + _0x921381
  };
  s = await bdy_0xa55b9a("getShowPictures", _0x230a93);
  $.commentInfoList = s.commentShowPicInfoList;
  $.maxPage = s.maxPage;
}
async function bdy_0x5c984a(_0x299e08, _0x30bafd = 1) {
  const _0x4e1b83 = {
    bbtf: ""
  };
  const _0x5e1081 = {
    category: "",
    extInfo: _0x4e1b83,
    isCurrentSku: false,
    num: "10",
    offset: "" + _0x30bafd,
    shopType: "0",
    sku: "" + _0x299e08,
    type: "4"
  };
  s = await bdy_0xa55b9a("getFoldCommentList", _0x5e1081);
  bdy_0x556e9d = bdy_0x556e9d.concat(s.commentInfoList);
  $.maxPage = s.maxPage;
}
async function bdy_0x4eaffb(_0x515d69, _0x36e27a) {
  s = await bdy_0xa55b9a("commentEditInfo", {
    allFloorsFlag: null,
    business: "1",
    evaAuraVersion: "120602",
    lowSaleQuantity: null,
    orderId: _0x515d69,
    qrType: "1",
    sku: _0x36e27a
  });
  $.rewardInfo = s.commentFloorList[0].productCommentFloor.newCommentRewardMap.bannerInfo;
  $.wnezi = JSON.stringify(s).match(new RegExp("(\\d+)字")) ? JSON.stringify(s).match(new RegExp("(\\d+)字"))[1] : 60;
  $.saitu = JSON.stringify(s).match(new RegExp("(\\d+)晒图")) ? JSON.stringify(s).match(new RegExp("(\\d+)晒图"))[1] : 2;
}
async function bdy_0x39fb1c(_0x23ea6c = "1") {
  const _0x5e32c1 = {
    pageIndex: _0x23ea6c,
    pageSize: "10",
    planType: "1",
    status: "1"
  };
  s = await bdy_0xa55b9a("getCommentWareList", _0x5e32c1);
  $.maxPage = s.commentWareListInfo?.["maxPage"];
  $.sdnum = s.commentWareListInfo?.["wait4CommentCount"];
  $.commentWareList = s.commentWareListInfo?.["commentWareList"];
}
async function bdy_0xa55b9a(_0x101a29, _0x4c276a) {
  let _0x30f4cb = await bdy_0x5ec134[bdy_0x110fdb](_0x101a29, _0x4c276a, "11.0.2", "1"),
    _0x5d46db = {
      url: "https://api.m.jd.com/client.action?functionId=" + _0x101a29,
      body: "fuctionId=" + _0x101a29 + "&" + _0x30f4cb,
      headers: {
        Host: "api.m.jd.com",
        accept: "*/*",
        "user-agent": $.UA,
        "accept-language": "zh-Hans-JP;q=1, en-JP;q=0.9, zh-Hant-TW;q=0.8, ja-JP;q=0.7, en-US;q=0.6",
        Cookie: bdy_0x3ef73c
      }
    };
  return new Promise(_0x4d5539 => {
    $.post(_0x5d46db, (_0x421dc3, _0x3cbfa5, _0x471124) => {
      try {
        _0x421dc3 ? console.log(_0x421dc3) : _0x471124 = JSON.parse(_0x471124);
        switch (_0x101a29) {
          case "pubComment":
            _0x471124.message && console.log(_0x471124.message);
            break;
          default:
            break;
        }
      } catch (_0x39fbb6) {
        console.log(_0x39fbb6);
      } finally {
        _0x4d5539(_0x471124);
      }
    });
  });
}
function bdy_0x212733() {
  return Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10);
}
function bdy_0x50e0d0(_0x112dfe) {
  return _0x112dfe[Math.floor(Math.random() * _0x112dfe.length)] || "";
}
function bdy_0x11a8aa(_0x5584d6, _0x110929) {
  const _0x439258 = _0x5584d6.slice();
  let _0x57f475 = _0x5584d6.length,
    _0x1fa703,
    _0x26a5ba;
  while (_0x57f475--) {
    _0x26a5ba = Math.floor((_0x57f475 + 1) * Math.random());
    _0x1fa703 = _0x439258[_0x26a5ba];
    _0x439258[_0x26a5ba] = _0x439258[_0x57f475];
    _0x439258[_0x57f475] = _0x1fa703;
  }
  return _0x439258.slice(0, _0x110929);
}
function bdy_0x2170b5() {
  const _0x3aaa6b = {
    url: "https://verify-dy-server-hchdzuwrsu.cn-hangzhou.fcapp.run/pingjia",
    timeout: 30000
  };
  return new Promise(_0x551e8b => {
    $.post(_0x3aaa6b, async (_0x1ad3a9, _0x58f7d3, _0x582aba) => {
      try {
        if (!_0x1ad3a9) {
          if (_0x582aba) {
            _0x582aba = JSON.parse(_0x582aba);
            if (_0x582aba.status === 200) {
              bdy_0x110fdb = _0x582aba.method;
            }
          }
        }
      } catch (_0x12e8f7) {
        $.logErr(_0x12e8f7, _0x58f7d3);
      } finally {
        _0x551e8b(_0x582aba);
      }
    });
  });
}
function bdy_0x87dfc4(_0x5454c9) {
  const _0x1f70b9 = [],
    _0x187f3e = /[\u4e00-\u9fa5]/;
  for (let _0x7a16f3 = 0; _0x7a16f3 < _0x5454c9.length; _0x7a16f3++) {
    const _0x8b222b = _0x5454c9[_0x7a16f3];
    _0x187f3e.test(_0x8b222b) && !_0x1f70b9.includes(_0x8b222b) && _0x1f70b9.push(_0x8b222b);
  }
  return _0x1f70b9.length;
}
function bdy_0x3af68e(_0x3264e7) {
  for (let _0x45308f = _0x3264e7.length - 1; _0x45308f > 0; _0x45308f--) {
    const _0x5a9064 = Math.floor(Math.random() * (_0x45308f + 1));
    [_0x3264e7[_0x45308f], _0x3264e7[_0x5a9064]] = [_0x3264e7[_0x5a9064], _0x3264e7[_0x45308f]];
  }
  return _0x3264e7.join(",");
}
function bdy_0x2aa0b7() {
  return new Promise(_0x6b54e4 => {
    const _0x580d0b = {
      Cookie: bdy_0x3ef73c,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x1803aa = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x580d0b,
      timeout: 10000
    };
    $.get(_0x1803aa, (_0x523c56, _0x37f6b8, _0x541438) => {
      try {
        if (_0x541438) {
          _0x541438 = JSON.parse(_0x541438);
          if (!(_0x541438.islogin === "1")) {
            _0x541438.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0xac5fbc) {
        console.log(_0xac5fbc);
      } finally {
        _0x6b54e4();
      }
    });
  });
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
