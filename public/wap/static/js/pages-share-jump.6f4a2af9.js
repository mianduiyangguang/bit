(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-share-jump"],{"0ae4":function(t,e,a){"use strict";var o=a("26f0"),i=a.n(o);i.a},"26f0":function(t,e,a){var o=a("5a0d7");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=a("4f06").default;i("a7b6c4d8",o,!0,{sourceMap:!1,shadowMode:!1})},"3c78":function(t,e,a){"use strict";a.r(e);var o=a("7681"),i=a.n(o);for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);e["default"]=i.a},"5a0d7":function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-0f87e283]{width:100%;height:100%}uni-page-body .container[data-v-0f87e283]{position:relative;width:100%;height:100%}uni-page-body .container .bg[data-v-0f87e283]{width:100%;height:100%}uni-page-body .container .bg uni-image[data-v-0f87e283]{width:100%;height:100%}uni-page-body .container .red[data-v-0f87e283]{position:absolute;top:45%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:100%;height:70%}uni-page-body .container .red .red_bgi[data-v-0f87e283]{width:100%;height:100%}uni-page-body .container .red .red_bgi .img[data-v-0f87e283]{width:100%;height:100%}uni-page-body .container .red .del[data-v-0f87e283]{position:absolute;top:%?144?%;right:%?82?%}uni-page-body .container .red .del .del_icon[data-v-0f87e283]{width:%?60?%;height:%?60?%}uni-page-body .container .red .logo[data-v-0f87e283]{position:absolute;top:25%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:%?180?%;height:%?180?%;-webkit-border-radius:50%;border-radius:50%;background-color:#fff}uni-page-body .container .red .logo uni-image[data-v-0f87e283]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:80%;height:80%;-webkit-border-radius:50%;border-radius:50%}uni-page-body .container .red .word[data-v-0f87e283]{position:absolute;left:50%;top:47%;-webkit-transform:translateX(-50%);transform:translateX(-50%);color:#ffe3d6}uni-page-body .container .red .word .title[data-v-0f87e283]{font-size:%?38?%;text-align:center}uni-page-body .container .red .word .content[data-v-0f87e283]{font-size:%?50?%;margin-top:%?30?%}uni-page-body .container .red .btn[data-v-0f87e283]{position:absolute;top:95%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:65%;height:%?100?%;line-height:%?100?%;text-align:center;-webkit-border-radius:%?10?%;border-radius:%?10?%;font-size:%?40?%;color:#fff;background-color:#eb573e;letter-spacing:%?5?%}',""]),t.exports=e},7681:function(t,e,a){"use strict";a("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a("94b4"),i={data:function(){return{hasHb:!1,hasCoupon:!1,data:{},welfarepro:["hb","coupon"],url:""}},computed:{logoImg:function(){return this.$store.state.config.shop_logo}},onLoad:function(t){this.url=o.apiBaseUrl,t.scene?this.deshare(t.scene):this.gotoIndex()},methods:{deshare:function(t){var e=this;this.$api.deshare({code:t},(function(t){t.status?(e.saveInviteCode(t.data.userShareCode),e.data=t.data,t.data.welfarepro&&0!=t.data.welfarepro.length?t.data.welfarepro.indexOf("hb")>-1?e.hasHb=!0:t.data.welfarepro.indexOf("coupon")>-1&&(e.hasCoupon=!0):e.goPage()):e.$common.errorToShow("失败",(function(){e.gotoIndex()}))}))},receive:function(t){var e=this,a={userShareCode:this.data.userShareCode};1==t?this.$api.getShareHb(a,(function(t){t.status?e.$common.successToShow(t.msg,(function(){e.hasHb=!1,e.data.welfarepro.indexOf("coupon")>-1?e.hasCoupon=!0:e.goPage()})):e.$common.errorToShow(t.msg,(function(){e.hasHb=!1,e.data.welfarepro.indexOf("coupon")>-1?e.hasCoupon=!0:e.goPage()}))})):2==t&&this.$api.getShareCoupon(a,(function(t){t.status?e.$common.successToShow(t.msg,(function(){e.hasCoupon=!1,e.goPage()})):e.$common.errorToShow(t.msg,(function(){e.hasCoupon=!1,e.goPage()}))}))},goPage:function(t){if(1==t)this.data.welfarepro.indexOf("coupon")>-1&&(this.hasCoupon=!0);else switch(console.log(this.data),this.data.page){case"1":this.gotoIndex();break;case"2":this.gotoGoods(this.data.params.goods_id);break;case"3":this.gotoPinTuan(this.data.params.goods_id);break;case"4":this.gotoStore(this.data.params.store);break;case"5":this.gotoArticle(this.data.params.article_id,this.data.params.article_type);break;case"6":this.gotoInvitationGroup(this.data.params.goods_id,this.data.params.group_id,this.data.params.team_id);break;case"7":this.gotoCustom(this.data.params.page_code);break;case"8":this.gotoForm(this.data.params.id);break;case"9":this.gotoGroup(this.data.params.goods_id,this.data.params.group_id);break;case"10":this.gotoBargain(this.data.params.id,this.data.params.type,this.data.params.record_id);break;default:this.gotoIndex();break}},saveInviteCode:function(t){t&&""!=t&&this.$db.set("invitecode",t)},gotoIndex:function(){uni.switchTab({url:"/pages/index/index"})},gotoGoods:function(t){if(t&&""!=t){var e="/pages/goods/index/index?id="+t;this.$common.redirectTo(e)}else this.gotoIndex()},gotoArticle:function(t,e){if(t&&""!=t){var a="/pages/article/index?id="+t+"&id_type="+e;this.$common.redirectTo(a)}else this.gotoIndex()},gotoPinTuan:function(t){if(t&&""!=t){var e="/pages/goods/index/pintuan?id="+t;this.$common.redirectTo(e)}else this.gotoIndex()},gotoGroup:function(t,e){if(t&&""!=t){var a="/pages/goods/index/group?id="+t+"&group_id="+e;this.$common.redirectTo(a)}else this.gotoIndex()},gotoInvitationGroup:function(t,e,a){if(t&&""!=t&&e&&""!=e&&a&&""!=a){var o="/pages/goods/index/pintuan?id="+t+"&team_id="+a;this.$common.redirectTo(o)}else this.gotoIndex()},gotoCustom:function(t){if(t&&""!=t){var e="/pages/index/custom?page_code="+t;this.$common.redirectTo(e)}else this.gotoIndex()},gotoStore:function(t){if(t&&""!=t){var e="/pages/member/distribution/my_store?store="+t;this.$common.redirectTo(e)}else this.gotoIndex()},gotoForm:function(t){if(t&&""!=t){var e="/pages/form/detail/form?id="+t;this.$common.redirectTo(e)}else this.gotoIndex()},gotoBargain:function(t,e,a){if(t&&""!=t&&e&&a&&0!=a){var o="/pages/bargain/index?id="+t+"&type="+e+"&record_id="+a;this.$common.redirectTo(o)}else this.gotoIndex()}}};e.default=i},"98c8":function(t,e,a){"use strict";a.r(e);var o=a("b299"),i=a("3c78");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("0ae4");var s,r=a("f0c5"),d=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"0f87e283",null,!1,o["a"],s);e["default"]=d.exports},b299:function(t,e,a){"use strict";var o;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[t.hasHb||t.hasCoupon?a("v-uni-view",{staticClass:"bg"},[a("v-uni-image",{staticClass:"img",attrs:{src:t.url+"static/images/welfarepro/bgi.png",mode:""}})],1):t._e(),t.hasHb?a("v-uni-view",{staticClass:"red"},[a("v-uni-view",{staticClass:"red_bgi"},[a("v-uni-image",{staticClass:"img",attrs:{src:t.url+"static/images/welfarepro/center.png",mode:""}})],1),a("v-uni-view",{staticClass:"del",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPage(1)}}},[a("v-uni-image",{staticClass:"del_icon",attrs:{src:t.url+"static/images/welfarepro/del-jump.png",mode:""}})],1),a("v-uni-view",{staticClass:"logo"},[a("v-uni-image",{attrs:{src:t.logoImg}})],1),a("v-uni-view",{staticClass:"word"},[a("v-uni-view",{staticClass:"title"},[t._v("Jshop商城")]),a("v-uni-view",{staticClass:"content"},[t._v("送您一个红包")])],1),a("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.receive(1)}}},[t._v("领取红包")])],1):t._e(),t.hasCoupon?a("v-uni-view",{staticClass:"red"},[a("v-uni-view",{staticClass:"red_bgi"},[a("v-uni-image",{staticClass:"img",attrs:{src:t.url+"static/images/welfarepro/center.png",mode:""}})],1),a("v-uni-view",{staticClass:"del",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPage(2)}}},[a("v-uni-image",{staticClass:"del_icon",attrs:{src:t.url+"static/images/welfarepro/del-jump.png",mode:""}})],1),a("v-uni-view",{staticClass:"logo"},[a("v-uni-image",{attrs:{src:t.logoImg}})],1),a("v-uni-view",{staticClass:"word"},[a("v-uni-view",{staticClass:"title"},[t._v("Jshop商城")]),a("v-uni-view",{staticClass:"content"},[t._v("送您一张优惠券")])],1),a("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.receive(2)}}},[t._v("领取优惠券")])],1):t._e()],1)},n=[]}}]);