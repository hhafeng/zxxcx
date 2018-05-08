// components/bm/bm.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'活动报名'
    },
    btn_title:{
      type:String,
      value:'立即报名'
    },
    btn_color:{
      type:String,
      value:'#fc6a48'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    name:'',
    telphone:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputName(e){
      this.setData({ name: e.detail.value })
    },
    inputTelphone(e){
      this.setData({ telphone: e.detail.value })
    },
    _dobm(){
      var detail={name:this.data.name,telphone:this.data.telphone};
      this.triggerEvent('doBm',detail);
    }
  }
})
