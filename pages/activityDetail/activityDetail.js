// pages/activityDetail/activityDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabItems:[
      '详情', 
      '时间线', 
      '评论' 
    ],
    currentTab:0,
    comments:[
      {
        userName:"噜噜噜",
        time:"03-16 19:00",
        anotherUser:"海洋",
        text:"哈哈哈哈哈"
      },
      {
        userName: "来吃葱",
        time: "03-16 19:00",
        anotherUser: "",
        text: "哈哈哈哈哈"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.setData({
      currentTab: e.currentTarget.dataset.tabindex
    })
  }

})