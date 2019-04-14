// pages/userCenter/userCenter.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    nickName:"",
    avatarUrl:"",
    myItems:[
      {
        icon: "icon-student",
        text: "学生认证",
        action:"gotoStudentIdentify"
      }, 
      {
        icon: "icon-student-work",
        text: "学生组织者认证",
        action:"gotoOrganizerIdentify"
      },
      {
        icon:"icon-manager",
        text:"管理员认证"
      },
      {
        icon: "icon-msg",
        text: "我的消息"
      },
      {
        icon: "icon-service",
        text: "联系我们"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.userInfo);
    this.setData({ nickName: app.globalData.userInfo.nickName ,
      avatarUrl: app.globalData.userInfo.avatarUrl})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("222");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("333");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("444");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("555");
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
  //页面跳转
  gotoStudentIdentify(e){
    wx.navigateTo({
      url: '../studentIdentify/studentIdentify'
    })
  },
  gotoOrganizerIdentify(e){
    wx.navigateTo({
      url: '../organizerIdentify/organizerIdentify'
    })
  }
})