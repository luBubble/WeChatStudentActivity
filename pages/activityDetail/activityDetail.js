// pages/activityDetail/activityDetail.js
const app = getApp()
const { post, get } = require('../../utils/util')
let ac_id=0
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgAddress: app.globalData.imgAddress,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 1000,
    tabItems:[
      '基本信息', 
      '详情', 
      '时间线', 
      '评论' 
    ],
    currentTab:0,
    basic: null,
    comments:[],
    timeLines:[],
    activityDetails:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    ac_id=options.ac_id || 39
    get(app.globalData.serverAddress + '/getActivity/basic',
      {
        ac_id: ac_id
      }).then( res =>{
        this.setData({ basic: res.data.basic})
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

  },

  handleTabClick: function (e) {
    let tabindex = e.currentTarget.dataset.tabindex
    this.setData({
      currentTab: tabindex
    })
    //详情
    if (tabindex===1) {
      get(app.globalData.serverAddress + '/getActivity/detail',
        {
          ac_id: ac_id
        }).then(res => {
          this.setData({ activityDetails: res.data.detail })
        })
    }
    //时间线
    if(tabindex===2){
      get(app.globalData.serverAddress + '/getActivity/timeLine',
        {
          ac_id: ac_id
        }).then(res => {
          this.setData({ timeLines: res.data.timeLine })
        })
    }
    //评论
    if(tabindex===3){
      get(app.globalData.serverAddress + '/getActivity/comment',
        {
          ac_id: ac_id
        }).then(res => {
          this.setData({ comments: res.data.comment })
        })
    }
  }

})