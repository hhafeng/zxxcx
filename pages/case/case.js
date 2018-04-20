// pages/case/case.js
var request=require('../../utils/request');
var api=require('../../utils/api');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cases: [],
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
    loadMore:true,
    styleList:[],
    huxingList:[],
    classList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    request.GET(api.case_category, {},  (res)=> {
      this.setData({
        styleList: res.data['styleList'],
        huxingList: res.data['huxingList'],
        classList: res.data['classList']
      })
    });
    this.loadMore(this.data.postData);
    
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
    this.data.postData.page++;
    this.loadMore(this.data.postData);
  },
  /**
   * 上拉加载
   */
  loadMore(postData){
    if(this.data.loadMore){
      request.GET(api.case, postData, (res) => {
        if (res.data.length > 0) {
          res.data.forEach((item, index) => {
            this.data.cases.push(item);
          })
          this.setData({
            cases: this.data.cases,
          })
        } else {
          this.setData({ loadMore: false })
        }

      });
    }
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
        styleText: this.data.styleList[e.currentTarget.dataset.index].name,
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
    this.setData({ cases: [] });
    this.data.postData.page = 1;
    this.setData({ loadMore: true });
    this.loadMore(this.data.postData);
  },
  handleHuxing(e){
    this.setData({
      selectedCategory: {
        styleText: this.data.selectedCategory.styleText,
        huxingText: this.data.huxingList[e.currentTarget.dataset.index].name,
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
    this.setData({ cases: [] });
    this.data.postData.page = 1;
    this.setData({ loadMore: true });
    this.loadMore(this.data.postData)
  },
  handleClass(e){
    this.setData({
      selectedCategory: {
        styleText: this.data.selectedCategory.styleText,
        huxingText: this.data.selectedCategory.huxingText,
        classText: this.data.classList[e.currentTarget.dataset.index].name,
      },
      postData: {
        page: this.data.postData.page,
        styleId: this.data.postData.styleId,
        huxingId: this.data.postData.huxingId,
        classId: this.data.classList[e.currentTarget.dataset.index].id,
      },
      handleStyle: false, handleHuxing: false, handleClass: false,
    })
    this.setData({ cases: [] });
    this.data.postData.page = 1;
    this.setData({ loadMore: true });
    this.loadMore(this.data.postData)
  }
})