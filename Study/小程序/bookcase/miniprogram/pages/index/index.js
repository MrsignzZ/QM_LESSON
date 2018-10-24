//index.js
// 云开发的时代，服务器没有实质，动态分配，动态扩容
// 数据库是mongodb database sdk get() where() update() database -> collection -> doc json
const db = wx.cloud.database()
const book = db.collection('mybook')
const _ = db.command
const app = getApp()

Page({
  data: {
    book: {
      book_list: []
    }
  },
  onLoad: function(options) {
    /* 数据库sql select * from mybook 关系型数据库
    mongodb no-sql db.find({}) */
    db.collection('mybook').get({
      success: res => {
        this.setData({
          book_list: res.data
        })
      }
    })
  }

})
