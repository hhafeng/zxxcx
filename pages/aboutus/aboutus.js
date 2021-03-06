// pages/aboutus/aboutus.js
var request = require('../../utils/request');
var api = require('../../utils/api');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request.GET(api.profile, {}, (res) => {
      this.setData({ data: res.data });
    }, () => { }, true)
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
  callPhone(){
    wx.makePhoneCall({
      phoneNumber: this.data.data.user_telphone,
    })
  },
  preImg(e){
    var photosUrl=[];
    this.data.data.more.photos.forEach((item,index)=>{
      if(index<9){
        photosUrl.push(item.url);
      }
    })
    wx.previewImage({
      current:e.target.dataset.url,
      urls: photosUrl,
    })
  }
})