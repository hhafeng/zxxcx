// pages/calc/calc.js
var request = require('../../utils/request');
var api = require('../../utils/api');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    calcValue: { area: '', telphone: '' },
    calcStyle:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request.GET(api.tool, {}, (res) => {
      this.setData({ calcStyle: res.data.calc })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  _doCalc(e) {
    request.POST(api.baojia, e.detail, (res) => {
      if (res.code == 1) {
        this.setData({ calcValue: { area: '', telphone: '' } })
        var parmas = Object.keys(res.data).map((key) => {
          return encodeURIComponent(key) + "=" + encodeURIComponent(res.data[key]);
        }).join('&');
        wx.navigateTo({
          url: '/pages/baojiaResult/baojiaResult?' + parmas,
        })
      }
    })
  },
})