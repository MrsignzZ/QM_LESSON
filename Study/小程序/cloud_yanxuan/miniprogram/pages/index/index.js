wx.cloud.init({});
const db = wx.cloud.database();
Page({
  data: {
    ads: [],
    servicePolicy: [
      {
        text: "网易自营品牌"
      },
      {
        text: "30天无忧退货"
      },
      {
        text: "48小时快速退款"
      }
    ]
  },
  onLoad: function() {
    db.collection('ads').get({
      success: res => {
        this.setData({
          ads: res.data
        });
        wx.cloud.callFunction({
          name: 'getTravelInfo',
          data: {
            count: 5,
            startIndex: 0
          },
          success: res => {
            console.log(res);
          }
        });
      }
    });
  }
});
