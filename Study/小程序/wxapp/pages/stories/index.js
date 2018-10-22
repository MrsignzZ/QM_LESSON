const app = getApp()

Page({
  data: {
    stories: [],
    currentVid: null,
    currentVideo: null
  },
  //生命周期
  onLoad(options) {
    this.setData({
      stories: app.globalData.stories
    })
  },
  play(event) {
    if(this.data.currentVideo !== null) {
      this.data.currentVideo.pause();
    }
    const vid = event.currentTarget.dataset.vid;
    const currentVideo = wx.createVideoContext(`${vid}`);
    currentVideo.play();
    this.setData({
      currentVideo,
      currentVid: vid
    })
  }
});