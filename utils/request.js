var config=require('./config');
function request(method, url, data, success, fail, showLoading) {
  var token=wx.getStorageSync('token');
  if (showLoading) {
    wx.showLoading({
      title: '加载中...',
    })
  }
  wx.request({
    url: url,
    data: data,
    method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
    header: { 'ACCESS-APP-ID': config.APP_ID,'TOKEN':token }, // 设置请求的 header  
    success: function (res) {
      if (res.data.code != 1) {
        wx.showModal({
          title: '提示',
          content: res.data.msg,
        })
        return;
      } 
      wx.hideLoading();
      success(res.data);
    },
    fail: function () {
      fail();
    },
    complete: function () {
      
    }
  })
}
module.exports = {
  //GET请求
  GET: function GET(url, data, success, fail, showLoading = false) {
    request('GET', url, data, success, fail, showLoading)
  },
  //POST请求 
  POST: function POST(url, data, success, fail, showLoading = false) {
    request('POST', url, data, success, fail, showLoading)
  }
}