// pages/topic/topic.js
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
    request.GET(api.topic + '/' + options.id, {}, (res) => {
      if(res.data.status==0){
        wx.showModal({
          title: '提示',
          content: '活动已经结束，看看其他的吧',
          showCancel:false,
          success:function(res){
            if(res.confirm){
              wx.navigateBack({
                delta: 1
              })
            }
          }
        })
        
      }else{
        this.setData({ data: res.data });
        wx.setNavigationBarTitle({
          title: res.data.title,
        })
      }
      
    },()=>{},true)
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
  doBm(e) {
    console.log(e)
    var postData = e.detail;
    postData['result_type'] = 0;
    postData['object_id'] = e.currentTarget.dataset.id;
    request.POST(api.topic, postData, (res) => {
      if (res.code == 1) {
        wx.showModal({
          title: '提示',
          content: res.msg,
          showCancel:false
        })
      }
    })
  }

})