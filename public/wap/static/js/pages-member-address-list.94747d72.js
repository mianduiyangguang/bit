(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-address-list"],{"109b":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".cell-tip[data-v-c59375d2]{background-color:#ff7159;color:#fff;font-size:%?24?%;display:inline-block;float:left;padding:%?4?% %?10?%;margin-right:%?10?%;-webkit-transform:scale(.9);transform:scale(.9)}.min-cell-group .cell-ft-text[data-v-c59375d2]{font-size:%?24?%;margin-right:%?10?%}.min-cell-group .cell-item-bd[data-v-c59375d2]{color:#666;padding-right:0}.min-cell-group .default[data-v-c59375d2]{color:#666}.min-cell-group uni-radio .uni-radio-input[data-v-c59375d2]{width:%?36?%;height:%?36?%}.min-cell-group .default .checked-radio[data-v-c59375d2]{display:inline-block;float:left;position:relative;bottom:%?2?%}.green[data-v-c59375d2]{background-color:#999}.cell-hd-title[data-v-c59375d2]{font-size:%?28?%}.phone-num[data-v-c59375d2]{margin-left:%?20?%;color:#999;font-size:%?24?%}.address-none[data-v-c59375d2]{text-align:center;padding:%?200?% 0}.address-none-img[data-v-c59375d2]{width:%?274?%;height:%?274?%}",""]),t.exports=i},"29c6":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[t.list.length?e("v-uni-view",{staticClass:"content-top"},t._l(t.list,(function(i,n){return e("v-uni-view",{key:n,staticClass:"uni-list-cell uni-list-cell-pd"},[e("v-uni-view",{staticClass:"cell-group min-cell-group"},[e("v-uni-view",{staticClass:"cell-item"},[e("v-uni-view",{staticClass:"cell-item-hd",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isSelect(i)}}},[e("v-uni-view",{staticClass:"cell-hd-title"},[t._v(t._s(i.name)),e("v-uni-text",{staticClass:"phone-num"},[t._v(t._s(i.mobile))])],1)],1),e("v-uni-view",{staticClass:"cell-item-ft"},[e("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/compile.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toEdit(i.id)}}}),e("v-uni-text",{staticClass:"cell-ft-text"})],1)],1),e("v-uni-view",{staticClass:"cell-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isSelect(i)}}},[e("v-uni-view",{staticClass:"cell-item-hd"},[e("v-uni-view",{staticClass:"cell-bd-view"},[e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===i.is_def,expression:"item.is_def === 1"}],staticClass:"cell-tip"},[t._v("默认")]),e("v-uni-text",{staticClass:"cell-bd-text"},[t._v(t._s(i.area_name+i.address))])],1)],1)],1)],1)],1)})),1):e("v-uni-view",{staticClass:"address-none"},[e("v-uni-image",{staticClass:"address-none-img",attrs:{src:"/static/image/order.png",mode:""}})],1),e("v-uni-view",{staticClass:"button-bottom"},[e("v-uni-button",{staticClass:"btn btn-square btn-w",attrs:{"hover-class":"btn-hover2"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toAdd()}}},[t._v("新增收货地址")])],1)],1)},a=[]},"631b":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{list:[],type:""}},onLoad:function(t){t.type&&(this.type=t.type)},onShow:function(){this.userShipList()},methods:{userShipList:function(){var t=this;this.$api.userShip({},(function(i){i.status&&(t.list=i.data)}))},delShip:function(t){var i=this;this.$common.modelShow("提示","确认删除此收货地址?",(function(){var e={id:t};i.$api.removeShip(e,(function(t){t.status?i.$common.successToShow(t.msg,(function(){i.userShipList()})):i.$common.errorToShow(t.msg)}))}))},toEdit:function(t){this.$common.navigateTo("./index?ship_id="+t)},toAdd:function(){this.$common.navigateTo("./index")},isSelect:function(t){"order"==this.type&&(this.$db.set("address_user_ship",t,!0),uni.navigateBack({delta:1}))}}};i.default=n},"85df":function(t,i,e){"use strict";e.r(i);var n=e("29c6"),s=e("de2f");for(var a in s)"default"!==a&&function(t){e.d(i,t,(function(){return s[t]}))}(a);e("c3c5");var c,o=e("f0c5"),l=Object(o["a"])(s["default"],n["b"],n["c"],!1,null,"c59375d2",null,!1,n["a"],c);i["default"]=l.exports},c3c5:function(t,i,e){"use strict";var n=e("de19"),s=e.n(n);s.a},de19:function(t,i,e){var n=e("109b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=e("4f06").default;s("1bfb553d",n,!0,{sourceMap:!1,shadowMode:!1})},de2f:function(t,i,e){"use strict";e.r(i);var n=e("631b"),s=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=s.a}}]);