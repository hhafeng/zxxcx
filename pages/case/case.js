// pages/case/case.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    note: [
      {
        title: '案例名称',
        url: 'http://zq.jhcms.cn/attachs/photo/201711/20171130_176CFE51B6710715B1BBBEF2F86ACB0C.jpg',
      }, 
      {
        title: '你所不知道的红酒知识',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg',
      }, 
      {
        title: '红酒知识',
        url: 'http://f10.baidu.com/it/u=121654667,1482133440&fm=72',
      },
      {
        title: '案例名称',
        url: 'http://zq.jhcms.cn/attachs/photo/201711/20171130_9E39DA252E3946BE36218D85876C4AB4.jpg',
      },
      {
        title: '案例名称',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg'
      },
       
      {
        title: '案例名称',
        url: 'http://f10.baidu.com/it/u=121654667,1482133440&fm=72'
      },
      {
        title: '案例名称',
        url: 'http://img4.imgtn.bdimg.com/it/u=2748975304,2710656664&fm=26&gp=0.jpg'
      }, 
      {
        title: '案例名称',
        url: 'http://img2.imgtn.bdimg.com/it/u=1561660534,130168102&fm=26&gp=0.jpg'
      },
      {
        title: '案例名称',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg'
      }
      
    ],
    handleStyle:false,
    handleHuxing: false,
    handleClass: false,
    selectedCategory:{
      styleText:'风格',
      huxingText: '户型',
      classText: '类别',
    },
    postData:{
      page:1,
      styleId:0,
      huxingId:0,
      classId:0
    },
    styleList:[
      { id: 1, value: '简约' }, 
      { id: 2, value: '美式风格' }, 
      { id: 3, value: '现代' }, 
      { id: 4, value: '日式' },
      { id: 5, value: '东南来' },
      { id: 6, value: '宜家' },
      { id: 7, value: '混搭' },
    ],
    huxingList:[
      { id: 34, value: '小户型' },
      { id: 35, value: '三居室' }, 
      { id: 36, value: '四居' }, 
      { id: 37, value: '别墅' }, 
      { id: 38, value: '公寓楼' },  
    ],
    classList:[
      { id: 24, value: '餐厅' }, 
      { id: 14, value: '客厅' }, 
      { id: 44, value: '背景墙' }, 
      { id: 54, value: '商业案例' }, 
      { id: 64, value: '卫生间' }, 
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('refresh');
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.data.note.push(this.data.note[0]);
    this.data.note.push(this.data.note[1]);
    this.data.note.push(this.data.note[2]);
    this.data.note.push(this.data.note[3]);
    this.data.note.push(this.data.note[4]);

    this.setData({ note: this.data.note })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  handleItem(e){
    switch (e.currentTarget.dataset.item) {
      case "1":
        this.data.handleStyle ? this.setData({ handleStyle: false, handleHuxing: false, handleClass: false, }) : this.setData({ handleStyle: true, handleHuxing: false, handleClass: false, });
        break;
      case "2":
        this.data.handleHuxing ? this.setData({ handleStyle: false, handleHuxing: false, handleClass: false, }) : this.setData({ handleStyle: false, handleHuxing: true, handleClass: false, });
        break;
      case "3":
        this.data.handleClass ? this.setData({ handleStyle: false, handleHuxing: false, handleClass: false, }) : this.setData({ handleStyle: false, handleHuxing: false, handleClass: true, });
        break;
    }
  },
  handleStyle(e){
    this.setData({
      selectedCategory:{
        styleText: this.data.styleList[e.currentTarget.dataset.index].value,
        huxingText: this.data.selectedCategory.huxingText,
        classText: this.data.selectedCategory.classText,
      },
      postData:{
        page:this.data.postData.page,
        styleId: this.data.styleList[e.currentTarget.dataset.index].id,
        huxingId:this.data.postData.huxingId,
        classId:this.data.postData.classId,
      },
      handleStyle: false, handleHuxing: false, handleClass: false,
    })
    console.log(this.data.postData)
  },
  handleHuxing(e){
    this.setData({
      selectedCategory: {
        styleText: this.data.selectedCategory.styleText,
        huxingText: this.data.huxingList[e.currentTarget.dataset.index].value,
        classText: this.data.selectedCategory.classText,
      },
      postData: {
        page: this.data.postData.page,
        styleId: this.data.postData.styleId,
        huxingId: this.data.huxingList[e.currentTarget.dataset.index].id,
        classId: this.data.postData.classId,
      },
      handleStyle: false, handleHuxing: false, handleClass: false,
    })
    console.log(this.data.postData)
  },
  handleClass(e){
    this.setData({
      selectedCategory: {
        styleText: this.data.selectedCategory.styleText,
        huxingText: this.data.selectedCategory.huxingText,
        classText: this.data.classList[e.currentTarget.dataset.index].value,
      },
      postData: {
        page: this.data.postData.page,
        styleId: this.data.postData.styleId,
        huxingId: this.data.postData.huxingId,
        classId: this.data.classList[e.currentTarget.dataset.index].id,
      },
      handleStyle: false, handleHuxing: false, handleClass: false,
    })
    console.log(this.data.postData)
  }
})