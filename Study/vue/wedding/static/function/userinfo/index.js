const cloud = require('wx-server-sdk');
cloud.init();
exports.main = async (e, context) => {
  const wxContext = cloud.getWXContext()
  return {
    openid: wxContext.OPENID,
  }
}
