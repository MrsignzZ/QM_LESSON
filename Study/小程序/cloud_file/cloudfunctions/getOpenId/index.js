// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // event 里可以拿到openId  用户
  console.log(event);
  return event.userInfo
}