const app = getApp();
const globalData = app.globalData;
// 放在根上 globalData
// 小程序内没有cookie

Page({
  data: {
    auth: -1,
    userInfo: []
  },
  onLoad(options) {
    console.log(options);

    // 用户的授权有很多方面 scope.userInfo
    this.getScope(this.getUserInfo, () => {
      this.setData({
        auth: 0
      });
    });
  },
  // 高阶函数， success 参数也是一个函数，
  getScope(success, fail, name = 'scope.userInfo') {
    // 函数体
    wx.getSetting({
      success: res => {
        // console.log(res);
        if (res.authSetting[name]) {
          success();
        } else {
          fail();
        }
      }
    });
  },
  getUserInfo() {
    if (!globalData.nickname || !globalData.avatarUrl) {
      // 1. wx.getUserInfo(nickname, avatar) 函数 success
      // 2. 放到全局 函数
      this._getUserInfo(res => {
        let nickname = res.nickName;
        let avatarUrl = res.avatarUrl;
        let userInfo = [nickname, avatarUrl];
        // console.log(res);
        this.setData({
          userInfo
        });
      });
    }

    setTimeout(() => {
      wx.switchTab({
        url: '../my/my'
      });
    }, 1000);
  },
  _getUserInfo(cb = () => {}) {
    wx.getUserInfo({
      success: res => {
        cb(res.userInfo);
      }
    });
  }
});
