// miniprogram/pages/my/my.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    nickname: '未登录',
    avatarUrl: './user-unlogin.png',
    list: [
      {
        pic: '../../icons/dingdan.png',
        txt: '我的订单'
      },
      {
        pic: '../../icons/tuangou.png',
        txt: '我的团购'
      },
      {
        pic: '../../icons/jifen.png',
        txt: '我的积分'
      },
      {
        pic: '../../icons/tuihuan.png',
        txt: '退换/售后'
      },
      {
        pic: '../../icons/coupon.png',
        txt: '优惠券'
      },
      {
        pic: '../../icons/hongbao.png',
        txt: '红包'
      },
      {
        pic: '../../icons/dizhi.png',
        txt: '地址'
      },
      {
        pic: '../../icons/lianxikefu.png',
        txt: '联系客服'
      },
      {
        pic: '../../icons/fankui.png',
        txt: '反馈'
      },
      {
        pic: '../../icons/help.png',
        txt: '帮助中心'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
