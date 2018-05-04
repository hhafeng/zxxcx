//index.js
var request = require('../../utils/request');
var api = require('../../utils/api');
//获取应用实例
const app = getApp()

Page({
  data: {
    calcValue:{area:'',telphone:''},
    postData:{ page: 1, isIndex: true},
    loadMore:true,
    topAdv:[],
    centerAdv: [],
    appNav:[],
    calcStyle:{},
    indexCase:[],

    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad () {
    request.GET(api.adv,{'pid':1},(res)=>{
      this.setData({ topAdv: res.data })
    })
    request.GET(api.nav,{},(res)=>{
      this.setData({appNav:res.data})
    });
    request.GET(api.adv, { 'pid': 2 }, (res) => {
      this.setData({ centerAdv: res.data })
    })
    request.GET(api.tool, {}, (res) => {
      this.setData({ calcStyle: res.data.calc })
    })
    this.loadMore(this.postData);
    
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  /*
  * 页面加载完成
  */
  onReady(){
    this.dialog = this.selectComponent("#dialog");
    this.dialog.showDialog();
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom () {
    this.data.postData.page++;
    this.loadMore(this.data.postData);
  },
  loadMore(postData){
    if(this.data.loadMore){
      request.GET(api.case, postData, (res) => {
        if(res.data.length>0){
          res.data.forEach((item, index) => {
            this.data.indexCase.push(item)
            this.setData({ indexCase: this.data.indexCase })
          })
        }else{
          this.setData({ loadMore: false })
        }
        
        
      })
    }
    
  },
  _doCalc(e) {
    request.POST(api.baojia,e.detail,(res)=>{
      
      if(res.code==1){
        this.setData({ calcValue:{area:'',telphone:''}})
        var parmas=Object.keys(res.data).map((key)=>{
          return encodeURIComponent(key) + "=" + encodeURIComponent(res.data[key]);
        }).join('&');
        wx.navigateTo({
          url: '/pages/baojiaResult/baojiaResult?'+parmas,
        })
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
