wx.cloud.init({
})
const db = wx.cloud.database();
Page({
  data: {
    ads: [],
    item: {
      user: {
        avatar: '',
        nickname: '小榕同学',
        summary: '玩的开心就好'
      }
    }
  },
  onLoad: function () {
    db.collection("ads").get({
      success: res => {
        this.setData({
          ads: res.data
        })
        // 云函数? 小程序的前端搞不定的时候，openid 需要复杂计算
        // async await 三个数据库的综合查询
        // 查询 select mongodb no-sql find()
        // where 条件 orderby 排序 limit 限制条数
        // skip 忽略
        // 2页 skip(10).limit(10)
        // 3   get().skip(20).limit(10)
        wx.cloud.callFunction({
          name: 'getTravelInfo',
          data: {
            count: 5,
            startIndex: 0
          },
          success: res => {
            console.log(res)
          }
        })
      }
    })
  }
})
