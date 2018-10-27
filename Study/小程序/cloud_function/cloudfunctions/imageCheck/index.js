// 云函数入口文件
const AppId = '1257714549';
const SecretId = 'AKIDMYXKtDYBn8D2busjGXXHl59xYu0qqlqg';
const SecretKey = 'jCQP8cr1yg9SXQ5YmmY6PUKyPbYGiuqW';
const cloud = require('wx-server-sdk');
const fs = require('fs'); //module.exports
const path = require('path');
const { ImageClient } = require('image-node-sdk');

cloud.init();

let imageClient = new ImageClient({ AppId, SecretId, SecretKey });

// 云函数入口函数
exports.main = async (event, context) => {
  return await imageClient.imgPornDetect({
    formData: {
      // node的文件系统由fs rwd+, path 提供路径对象
      image: fs.createReadStream(path.join(__dirname, './test.JPG'))
    },
    headers: {
      'content-type': 'multipart/form-data'
    }
  });
};
