// pages/designer/designer.js
var request = require('../../utils/request');
var api = require('../../utils/api');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    designers:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request.GET(api.designer,{},(res)=>{
      this.setData({
        designers:res.data
      })
    },()=>{

    },true)
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
  
  }
})