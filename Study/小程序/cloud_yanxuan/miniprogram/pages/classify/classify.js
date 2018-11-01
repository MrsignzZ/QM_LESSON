wx.cloud.init({});
const ProInfo = wx.cloud.database();
Page({
  data: {
    proInfo: [],
    category: [
      {
        name: '11.11专区',
        id: 'shuang11'
      },
      {
        name: '秋季专区',
        id: 'qiujizhuanqu'
      },
      {
        name: '爆品专区',
        id: 'baopinzhaunqu'
      },
      {
        name: '居家',
        id: 'jvjia'
      },
      {
        name: '鞋包配饰',
        id: 'xiebaopeishi'
      },
      {
        name: '服装',
        id: 'fuzhuang'
      },
      {
        name: '电器',
        id: 'dianqi'
      },
      {
        name: '洗护',
        id: 'xihu'
      },
      {
        name: '饮食',
        id: 'yinshi'
      },
      {
        name: '餐厨',
        id: 'canchu'
      },
      {
        name: '婴童',
        id: 'yingtong'
      },
      {
        name: '文体',
        id: 'wenti'
      }
    ],
    curIndex: 0,
    isScroll: false,
    toView: 'shuang11' //srcollview toView功能，自动跳到某个子页面去
  },
  onLoad: function() {
    ProInfo.collection('proInfo').get({
      success: res => {
        this.setData({
          proInfo: res.data
        })
      }
    })
  },
  switchTab(e) {
    this.setData({
      curIndex: e.target.dataset.index,
      toView: e.target.dataset.id
    });
  }
});
