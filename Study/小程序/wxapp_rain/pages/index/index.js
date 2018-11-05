import drawEffect from '../../lib/effect';

Page({
  data: {
    width: 0,
    scale: 1
  },

  onLoad() {
    wx.getSystemInfo({
      success: res => {
        // res.windowWidth 得到px
        let width = res.windowWidth;
        this.setData({
          width,
          scale: width / 375
        });
      }
    });

    // 初始化canvas
    const canvasId = 'effect';

    // context上下文环境
    const ctx = wx.createCanvasContext(canvasId);

    let { width, scale } = this.data;
    let height = (768 / 2) * scale;
    let rain = drawEffect(ctx, width, height, {
      amount: 100,
      speedFactor: 0.03
    });
    rain.run();
  }
});
