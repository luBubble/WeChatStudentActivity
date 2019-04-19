// pages/activityCenter/activityCenter.js
const app = getApp()
let {get}=require('../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgAddress: app.globalData.imgAddress,
    slides:[
      {img:'ac1.jpg',acid:39},
      {img:'ac2.jpg',acid:42}
    ],
    autoplay: true,
    circular:true,
    interval: 3000,
    duration: 1000,
    newActivities:[],
    hotActivities:[]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    get(app.globalData.serverAddress +'/getActivity/allActivity').then(
      res => {
        let allActivity=res.data.allActivity
        let newActivity = res.data.newActivity
        this.setData({ 
          newActivities: newActivity,
          hotActivities:allActivity
           })
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
  gotoMoreActivity(e){
    wx.navigateTo({
      url: '../activityList/activityList'
    })
  },
  gotoActivityDetail(e){
    let ac_id=e.currentTarget.dataset.acid
    wx.navigateTo({
      url: '../activityDetail/activityDetail?ac_id='+ac_id
    })
  }
})