// pages/favorite/favorite.js
var request = require('../../utils/request');
var api = require('../../utils/api');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    favorite: [],
    loadMore: true,
    postData: {
      page: 1,
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore(this.data.postData);
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
    this.data.postData.page++;
    this.loadMore(this.data.postData);
  },
  /**
     * 上拉加载
     */
  loadMore(postData) {
    if (this.data.loadMore) {
      request.GET(api.favorite, postData, (res) => {
        if (res.data.length > 0) {
          res.data.forEach((item, index) => {
            this.data.favorite.push(item);
          })
          this.setData({
            favorite: this.data.favorite,
          })
        } else {
          this.setData({ loadMore: false })
        }

      });
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})