// pages/caseShow/caseShow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //窗口的宽高
    windowHeight:0,
    note: [
      {
        id: 1,
        title: '案例名称',
        url: 'http://zq.jhcms.cn/attachs/photo/201711/20171130_176CFE51B6710715B1BBBEF2F86ACB0C.jpg',
      },
      {
        id: 2,
        title: '你所不知道的红酒知识',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg',
      },
      {
        id: 3,
        title: '红酒知识',
        url: 'http://f10.baidu.com/it/u=121654667,1482133440&fm=72',
      },
      {
        id: 5,
        title: '案例名称',
        url: 'http://zq.jhcms.cn/attachs/photo/201711/20171130_9E39DA252E3946BE36218D85876C4AB4.jpg',
      },
      {
        id: 6,
        title: '案例名称',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg'
      },

      {
        id: 7,
        title: '案例名称',
        url: 'http://f10.baidu.com/it/u=121654667,1482133440&fm=72'
      },
      {
        id: 8,
        title: '案例名称',
        url: 'http://img4.imgtn.bdimg.com/it/u=2748975304,2710656664&fm=26&gp=0.jpg'
      },
      {
        id: 9,
        title: '案例名称',
        url: 'http://img2.imgtn.bdimg.com/it/u=1561660534,130168102&fm=26&gp=0.jpg'
      },
      {
        id: 11,
        title: '案例名称',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg'
      }

    ]
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
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
})