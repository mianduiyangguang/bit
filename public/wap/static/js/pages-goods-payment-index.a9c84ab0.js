(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-payment-index"],{"03d9":function(e,t,a){var i=a("c5cf");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("5d4f5ca8",i,!0,{sourceMap:!1,shadowMode:!1})},"3c4b":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"cell-group margin-cell-group"},[a("v-uni-view",{staticClass:"cell-item"},[a("v-uni-view",{staticClass:"cell-item-hd"},[a("v-uni-view",{staticClass:"cell-hd-title"},[e._v("订单类型")])],1),a("v-uni-view",{staticClass:"cell-item-ft"},[1==e.type?a("v-uni-text",{staticClass:"cell-ft-p"},[e._v("商品订单")]):e._e(),2==e.type?a("v-uni-text",{staticClass:"cell-ft-p",on:{click:function(t){t=e.$handleEvent(t),e.toRecharge()}}},[e._v("充值订单")]):e._e(),5==e.type?a("v-uni-text",{staticClass:"cell-ft-p"},[e._v("快捷下单")]):e._e(),6==e.type?a("v-uni-text",{staticClass:"cell-ft-p"},[e._v("付款码")]):e._e()],1)],1),1==e.type?a("v-uni-view",[a("v-uni-view",{staticClass:"cell-item flex-item"},[a("v-uni-view",{staticClass:"cell-item-hd"},[a("v-uni-view",{staticClass:"cell-hd-title"},[e._v("订单编号")])],1),e._l(e.orderInfo.rel,function(t,i){return a("v-uni-view",{key:i,staticClass:"cell-item-ft"},[a("v-uni-view",{staticClass:"cell-ft-p",on:{click:function(a){a=e.$handleEvent(a),e.orderDetail(t.source_id)}}},[e._v(e._s(t.source_id))])],1)})],2),a("v-uni-view",{staticClass:"cell-item"},[a("v-uni-view",{staticClass:"cell-item-hd"},[a("v-uni-view",{staticClass:"cell-hd-title"},[e._v("支付金额")])],1),a("v-uni-view",{staticClass:"cell-item-ft"},[a("v-uni-text",{staticClass:"cell-ft-p red-price"},[e._v("￥"+e._s(e.orderInfo.money))])],1)],1)],1):2==e.type?a("v-uni-view",[a("v-uni-view",{staticClass:"cell-item"},[a("v-uni-view",{staticClass:"cell-item-hd"},[a("v-uni-view",{staticClass:"cell-hd-title"},[e._v("充值金额")])],1),a("v-uni-view",{staticClass:"cell-item-ft"},[a("v-uni-text",{staticClass:"cell-ft-p red-price"},[e._v("￥ "+e._s(e.recharge))])],1)],1)],1):a("v-uni-view",[a("v-uni-view",{staticClass:"cell-item"},[a("v-uni-view",{staticClass:"cell-item-hd"},[a("v-uni-view",{staticClass:"cell-hd-title"},[e._v("支付金额")])],1),a("v-uni-view",{staticClass:"cell-item-ft"},[a("v-uni-text",{staticClass:"cell-ft-p red-price"},[e._v("￥ "+e._s(e.recharge))])],1)],1)],1)],1),a("payments-by-h5",{attrs:{orderId:e.orderId,recharge:e.recharge,type:e.type,uid:e.userInfo.id}})],1)},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},"49e6":function(e,t,a){"use strict";var i=a("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("c5f6");var n=i(a("8a08")),s=a("9afa"),o={mixins:[s.orders],data:function(){return{orderId:0,recharge:0,type:1,orderInfo:{},userInfo:{},form_id:0}},components:{paymentsByH5:n.default},onLoad:function(e){this.orderId=e.order_id,this.recharge=Number(e.recharge),this.type=Number(e.type),this.form_id=Number(e.form_id),this.getOrderInfo()},methods:{getOrderInfo:function(){var e=this,t={ids:this.orderId,payment_type:this.type};this.$api.paymentsCheckpay(t,function(t){t.status&&(e.orderInfo=t.data,console.log(e.orderInfo))})},getUserInfo:function(){var e=this;this.$api.userInfo({},function(t){t.status?e.userInfo=t.data:e.$common.errorToShow(t.msg)})},toRecharge:function(){this.$common.navigateTo("/pages/member/balance/index")}}};t.default=o},"68d0":function(e,t,a){"use strict";a.r(t);var i=a("3c4b"),n=a("c718");for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);a("eeda");var o=a("2877"),r=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"8e46dfba",null);t["default"]=r.exports},"6b85":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"cell-group payment-method"},[e._l(e.payments,function(t){return 2!=e.type||"balancepay"!=t.code?a("v-uni-view",{key:t.code,staticClass:"cell-item add-title-item",on:{click:function(a){a=e.$handleEvent(a),e.toPayHandler(t.code)}}},[a("v-uni-view",{staticClass:"cell-item-hd"},[a("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:t.icon}})],1),a("v-uni-view",{staticClass:"cell-item-bd"},[a("v-uni-view",{staticClass:"cell-bd-view"},[a("v-uni-text",{staticClass:"cell-bd-text"},[e._v(e._s(t.name))])],1),a("v-uni-view",{staticClass:"cell-bd-view"},[a("v-uni-text",{staticClass:"cell-bd-text address"},[e._v(e._s(t.memo))])],1)],1),a("v-uni-view",{staticClass:"cell-item-ft"},[a("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1):e._e()}),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.popShow,expression:"popShow"}],staticClass:"payment-pop"},[a("v-uni-view",{staticClass:"payment-pop-c"},[a("v-uni-image",{staticStyle:{width:"30px",height:"30px"},attrs:{src:"/static/image/wait-pay.png"}}),a("v-uni-view",{staticClass:"text"},[e._v("支付中，请稍后...")])],1),a("v-uni-view",{staticClass:"payment-pop-b"},[a("v-uni-button",{staticClass:"btn btn-c",on:{click:function(t){t=e.$handleEvent(t),e.popBtn(t)}}},[e._v("支付失败")]),a("v-uni-button",{staticClass:"btn btn-o",on:{click:function(t){t=e.$handleEvent(t),e.popBtn(t)}}},[e._v("支付成功")])],1)],1)],2)},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},"8a08":function(e,t,a){"use strict";a.r(t);var i=a("6b85"),n=a("dd47");for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);a("c18a");var o=a("2877"),r=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"6a38106a",null);t["default"]=r.exports},"8ffc":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".payment-method .cell-item-hd[data-v-6a38106a]{min-width:%?70?%}.payment-method .cell-hd-icon[data-v-6a38106a]{width:%?70?%;height:%?70?%}.payment-method .cell-item-bd[data-v-6a38106a]{border-left:%?2?% solid #f0f0f0;padding-left:%?30?%}.payment-method .cell-bd-text[data-v-6a38106a]{font-size:%?28?%;color:#666}.payment-method .address[data-v-6a38106a]{font-size:%?24?%;color:#999}.payment-pop[data-v-6a38106a]{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:%?400?%;height:%?272?%;background-color:#fff;text-align:center;-webkit-box-shadow:0 0 %?20?% #ccc;box-shadow:0 0 %?20?% #ccc\n\t/* border-radius: 10rpx; */}.payment-pop-c[data-v-6a38106a]{padding:%?50?% %?30?%;\n\t/* line-height: 300rpx; */font-size:%?32?%;color:#999}.payment-pop-b[data-v-6a38106a]{position:absolute;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.payment-pop-b .btn[data-v-6a38106a]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.payment-pop .text[data-v-6a38106a]{font-size:%?24?%}",""])},"919a":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("ac6a"),a("c5f6");var i=a("52b4"),n={props:{orderId:{type:String,default:function(){return""}},recharge:{type:Number,default:function(){return 0}},uid:{type:Number,default:function(){return 0}},type:{type:Number,default:function(){return 1}}},data:function(){return{payments:[],openid:"",popShow:!1}},mounted:function(){this.getPayments()},methods:{getPayments:function(){var e=this;this.$api.paymentList({},function(t){t.status&&(e.payments=e.formatPayments(t.data))})},formatPayments:function(e){var t=this;return this.$common.isWeiXinBrowser()&&(e=e.filter(function(e){return"alipay"!==e.code})),2===this.type&&(e=e.filter(function(e){return"balancepay"!==e.code||1===e.is_online})),e.forEach(function(e){t.$set(e,"icon","/static/image/"+e.code+".png")}),e},checkWXJSBridge:function(e){var t=this,a=setInterval(function(){"undefined"!=typeof window.WeixinJSBridge&&(clearTimeout(a),t.onBridgeReady(e))},200)},onBridgeReady:function(e){var t=this;window.WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:e.appid,timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,signType:e.signType,paySign:e.paySign},function(a){"get_brand_wcpay_request:ok"===a.err_msg?t.$common.successToShow("支付成功"):"get_brand_wcpay_request:cancel"===a.err_msg?t.$common.errorToShow("取消支付"):t.$common.errorToShow("支付失败"),setTimeout(function(){t.$common.redirectTo("/pages/goods/payment/result?id="+e.payment_id)},1e3)})},toPayHandler:function(e){var t=this;this.popShow=!0;var a={payment_code:e,payment_type:this.type};switch(a["ids"]=1==this.type||5==this.type||6==this.type?this.orderId:this.uid,e){case"alipay":1==this.type&&this.orderId?a["params"]={trade_type:"WAP",return_url:i.baseUrl+"wap/pages/goods/payment/result"}:2==this.type&&this.recharge?a["params"]={money:this.recharge,return_url:i.baseUrl+"wap/pages/goods/payment/result"}:5!=this.type&&6!=this.type||!this.recharge||(a["params"]={formid:this.orderId}),this.$api.pay(a,function(e){if(e.status){var t=e.data.url,a=e.data.data,i=document.createElement("form");i.id="aliPay",i.methods="post",i.action=t,i.target="_self";var n=[];for(var s in a)n[s]=document.createElement("input"),n[s].type="hidden",n[s].name=s,n[s].value=a[s],i.appendChild(n[s]);i.addEventListener("submit",function(){},!1),document.body.appendChild(i),i.dispatchEvent(new Event("submit")),i.submit(),document.body.removeChild(i)}});break;case"wechatpay":var n=this.$common.isWeiXinBrowser();if(n){var s=i.baseUrl+"wap/pages/goods/payment/auth?order_id="+this.orderId+"&type="+this.type;1==this.type&&this.orderId?a["params"]={trade_type:"JSAPI_OFFICIAL",url:s}:2==this.type&&this.recharge?a["params"]={trade_type:"JSAPI_OFFICIAL",money:this.recharge,url:s+"&uid="+this.uid+"&money="+this.recharge}:5!=this.type&&6!=this.type||!this.recharge||(a["params"]={formid:this.orderId}),this.$api.pay(a,function(e){if(e.status||"10066"!=e.data){var a=e.data;t.checkWXJSBridge(a)}else window.location.href=e.msg})}else 1==this.type&&this.orderId?a["params"]={trade_type:"MWEB",return_url:i.baseUrl+"wap/pages/goods/payment/result"}:2==this.type&&this.recharge?a["params"]={trade_type:"MWEB",money:this.recharge,return_url:i.baseUrl+"wap/pages/goods/payment/result"}:5!=this.type&&6!=this.type||!this.recharge||(a["params"]={formid:this.orderId}),this.$api.pay(a,function(e){e.status?location.href=e.data.mweb_url:t.$common.errorToShow(e.msg)});break;case"balancepay":5!=this.type&&6!=this.type||!this.recharge||(a["params"]={formid:this.orderId}),this.$api.pay(a,function(e){e.status?t.$common.redirectTo("/pages/goods/payment/result?id="+e.data.payment_id):t.$common.errorToShow(e.msg)});break;case"offline":this.$common.modelShow("线下支付说明","请联系客服进行线下支付",function(){},!1,"取消","确定");break}},popBtn:function(){this.popShow=!1}}};t.default=n},"9afa":function(e,t,a){"use strict";var i=a("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.tools=t.checkLogin=t.jumpBackPage=t.goBack=t.goods=t.orders=void 0;var n=i(a("a4bb")),s={mounted:function(){},methods:{orderDetail:function(e){this.$common.navigateTo("/pages/member/order/orderdetail?order_id="+e)},toPay:function(e){this.$common.navigateTo("/pages/goods/payment/index?order_id="+e+"&type=1")},toEvaluate:function(e){this.$common.navigateTo("/pages/member/order/evaluate?order_id="+e)},showExpress:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=encodeURIComponent("code="+e+"&no="+t+"&add="+a);this.$common.navigateTo("/pages/member/order/express_delivery?params="+i)}}};t.orders=s;var o={mounted:function(){},methods:{goodsDetail:function(e){this.$common.navigateTo("/pages/goods/index/index?id="+e)},goodsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="/pages/classify/index";(0,n.default)(e).length&&(t=this.$common.builderUrlParams(t,e)),this.$common.navigateTo(t)},groupDetail:function(e,t){this.$common.navigateTo("/pages/goods/index/group?id="+e+"&group_id="+t)},pintuanDetail:function(e,t){t?this.$common.navigateTo("/pages/goods/index/pintuan?id="+e+"&team_id="+t):this.$common.navigateTo("/pages/goods/index/pintuan?id="+e)}}};t.goods=o;var r={onBackPress:function(e){if("navigateBack"===e.from)return!1;var t=["/pages/cart/index/index","/pages/member/index/index"],a=this.$store.state.redirectPage;return t.indexOf(a)>-1?(this.$store.commit({type:"redirect",page:""}),uni.switchTab({url:"/pages/index/index"}),!0):void 0}};t.goBack=r;var c={methods:{handleBack:function(){var e=this.$store.state.redirectPage;this.$store.commit({type:"redirect",page:""});var t=["/pages/index/index","/pages/member/index/index"];t.indexOf(e)>-1?uni.switchTab({url:e}):e?uni.redirectTo({url:e}):uni.switchTab({url:"/pages/index/index"})}}};t.jumpBackPage=c;var d={methods:{checkIsLogin:function(){uni.showToast({title:"请先登录！",icon:"none",duration:800,success:function(e){setTimeout(function(){uni.hideToast(),uni.navigateTo({url:"/pages/login/login/index1"})},800)}})}}};t.checkLogin=d;var l={methods:{copyData:function(e){var t=this;uni.setClipboardData({data:e,success:function(){t.$common.errorToShow("复制成功")}})}}};t.tools=l},b02a:function(e,t,a){var i=a("8ffc");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("3268a7ee",i,!0,{sourceMap:!1,shadowMode:!1})},c18a:function(e,t,a){"use strict";var i=a("b02a"),n=a.n(i);n.a},c5cf:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".margin-cell-group[data-v-8e46dfba]{margin-bottom:%?20?%}.cell-hd-title[data-v-8e46dfba]{color:#999}.payment-method .cell-item-hd[data-v-8e46dfba]{min-width:%?70?%}.payment-method .cell-hd-icon[data-v-8e46dfba]{width:%?70?%;height:%?70?%}.payment-method .cell-item-bd[data-v-8e46dfba]{border-left:%?2?% solid #f0f0f0;padding-left:%?30?%}.payment-method .cell-bd-text[data-v-8e46dfba]{font-size:%?28?%;color:#666}.payment-method .address[data-v-8e46dfba]{font-size:%?24?%;color:#999}.flex-item[data-v-8e46dfba]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.flex-item .cell-item-ft[data-v-8e46dfba]{position:relative;top:0;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);right:0}",""])},c718:function(e,t,a){"use strict";a.r(t);var i=a("49e6"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);t["default"]=n.a},dd47:function(e,t,a){"use strict";a.r(t);var i=a("919a"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);t["default"]=n.a},eeda:function(e,t,a){"use strict";var i=a("03d9"),n=a.n(i);n.a}}]);