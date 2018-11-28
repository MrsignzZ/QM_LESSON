wx.cloud.init({});
const AdsInfo = wx.cloud.database();
const CollageInfo = wx.cloud.database();
Page({
  data: {
    collageInfo: [],
    ads: [],

  },
  onLoad: function() {
    AdsInfo.collection('ads').get({
      success: res => {
        console.log(res);
        
        this.setData({
          ads: res.data
        });

      }
    });
  CollageInfo.collection('collageInfo').get({
    success: res => {
      this.setData({
        collageInfo: res.data
      })
    }
  })
  },
  toCartItem: (e) => {
    wx.navigateTo({
      url: "../items/item_test1"
    })
  }
}
);
