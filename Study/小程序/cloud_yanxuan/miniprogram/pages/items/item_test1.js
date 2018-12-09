// miniprogram/pages/items/item_test1.js
wx.cloud.init({});
const itemInfo = wx.cloud.database();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    itemInfo: [],
    showSpecifications: false,
    showService: false,
    actions: [
      {
        name: '选项'
      },
      {
        name: '分享',
        subname: '描述信息',
        openType: 'share'
      },
      {
        loading: true
      },
      {
        name: '禁用选项',
        disabled: true
      }
    ]
  },
  onTapItemSpecifications() {
    this.setData({
      showSpecifications: true
    });
  },
  onTapItemService() {
    this.setData({
      showService: true
    });
  },
  onCloseService() {
    this.setData({ showService: false });
  },
  onCloseSpecifications() {
    this.setData({
      showSpecifications: false
    })
  },

  onSelect(event) {
    console.log(event.detail);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    itemInfo.collection('itemInfo').get({
      success: res => {
        console.log(res);

        this.setData({
          itemInfo: res.data
        });
      }
    });
  },
  onClickIcon() {
    Toast('点击图标');
  },

  onClickButton() {
    Toast('点击按钮');
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
