//提货单管理
var app = getApp(); //全局APP

Page({
    //页面参数
    data: {
        ladingList: []
    },

    //页面加载
    onLoad: function (options) {
        app.api.ladingList(function (res) {
            page.setData({
                ladingList: res.data
            });
        });
    }
})