// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight:0,
    lat:0,
    lng:0,
    markers: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res)=> {
        this.setData({
          windowHeight: res.screenHeight
        })
      },
    })
    wx.setNavigationBarTitle({
      title: options.content,
    })
    this.setData({
      markers: [{
        iconPath: "/asset/images/icon/fox.png",
        id: 0,
        latitude: options.lat,
        longitude: options.lng,
        width: 32,
        height: 40,
        callout: {
          content: options.content,
          color: '#fff',
          fontSize: 12,
          borderRadius: 20,
          bgColor: '#555',
          padding: 8,
          display: 'ALWAYS'
        }
      }],
      lat:options.lat,
      lng:options.lng
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
  
  }
})