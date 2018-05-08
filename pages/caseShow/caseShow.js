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
    case: {},
    favorited: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var favorited = wx.getStorageSync('favorited');
    this.setData({ favorited: favorited })
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
  favorite(e) {
    var favorited = wx.getStorageSync('favorited');
    if (!favorited) {
      favorited = {};
    }
    if (e.currentTarget.dataset.id in favorited) {
      /*取消收藏*/
      request.POST(api.favorite, { id: e.currentTarget.dataset.id }, (res) => {
        if (res.code == 1) {
          delete favorited[e.currentTarget.dataset.id];
          wx.setStorageSync('favorited', favorited)
          this.data.case.favorites--;
          this.setData({ case: this.data.case, favorited: favorited })
          wx.showToast({
            title: res.msg,
            icon: 'success'
          })
        }
      });

    } else {
      /*添加收藏*/

      request.POST(api.favorite, { id: e.currentTarget.dataset.id }, (res) => {
        if (res.code == 1) {
          favorited[e.currentTarget.dataset.id] = e.currentTarget.dataset.id;
          wx.setStorageSync('favorited', favorited)
          this.data.case.favorites++;
          this.setData({ case: this.data.case, favorited: favorited })
          wx.showToast({
            title: res.msg,
            icon: 'success'
          })
        }
      });

    }
  }
})