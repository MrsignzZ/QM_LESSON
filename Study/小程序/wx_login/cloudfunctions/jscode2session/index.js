// 云函数入口文件
const cloud = require('wx-server-sdk');
const queryString = require('querystring')
const request = require('request')

cloud.init();

// 云函数入口函数
exports.main = async (event, context) => {
  let { code } = event;
  let id = 'wx0b489bf949d49aa8';
  let secretKey = 'b90151eab70b491ffc51893812d60fc5';
  const data = {
    appid: id,
    secret: secretKey,
    grant_type: 'authorization_code'
  }
  let url = `https://api.weixin.qq.com/sns/jscode2session?${queryString.stringify(data)}`
  console.log(url)
  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        reject(error)
      } else {
        try {
          console.log(body)
          const r = JSON.parse(body)
          resolve(r)
        } catch(e) {
          reject(e)
        }
      }
    })
  })
  // 在session前，后端，操作小程序登录，当然要小程序同意
};
