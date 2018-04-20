// pages/caseShow/caseShow.js
var request = require('../../utils/request');
var api = require('../../utils/api');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //窗口的宽高
    windowHeight:0,
    case: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) =>{
        this.setData({
          windowHeight:res.windowHeight
          })
      },
    })
    request.GET(api.case+'/'+options.id,{},(res)=>{
      this.setData({case:res.data});
      wx.setNavigationBarTitle({
        title: res.data.title,
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
})