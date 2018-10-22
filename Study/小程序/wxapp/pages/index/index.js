const app = getApp();

Page({
  // 数据
  data: {
    slides: [],
    entities: []
  },
  onLoad () {
    this.setData({
      slides: app.globalData.slides,
      entities: app.globalData.vehicles
    })
    // console.log(app.globalData.motto);
  },
  testDrive () {
    console.log('text drive');
  },
  readMore(event) {
    // 小程序的JS API
    wx.navigateTo({
      url:`/pages/vehicles/show?id=${event.target.dataset.id}`/* 事件对象事件源的id属性 */
    })
  }
})