const {
    update
} = require('../../api/index.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        defaultSel: '',
        list: [{
            name: "weixin",
            value: "1",
            label: "微信支付"
        }, {
            name: "zhifubao",
            value: "2",
            label: "支付宝支付"
        }, {
            name: "jianshe",
            value: "3",
            label: "建设银行"
        }, {
            name: "nongye",
            value: "4",
            label: "农业银行"
        }, {
            name: "zhongguo",
            value: "5",
            label: "中国银行"
        }, {
            name: "jiaotong",
            value: "6",
            label: "交通银行"
        }

        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },
    payTap(e) {
        this.setData({
            defaultSel: e.detail.value
        })

    },
    onPageTap(e) {
        let url = e.currentTarget.dataset.url
        if (this.data.defaultSel == "") {
            wx.showToast({
                title: '请选择支付类型',
                icon: 'none'
            })
            return;
        }
        wx.navigateTo({
            url: "./recharge"
        })

    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})