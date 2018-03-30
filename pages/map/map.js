// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight:0,
    markers: [{
      iconPath: "/asset/images/icon/fox.png",
      id: 0,
      latitude: 29.726397,
      longitude: 118.343585,
      width: 32,
      height: 40,
      callout:{
        content:'总部：黄山中博装饰工程有限公司',
        color:'#fff',
        fontSize:12,
        borderRadius:20,
        bgColor:'#555',
        padding:8,
        display:'ALWAYS'
      }
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res)=> {
        this.setData({
          windowHeight:res.windowHeight
        })
      },
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