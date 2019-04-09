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
    currentTab:2,
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
      },
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
      },
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
      },
      {
        userName: "噜噜噜",
        time: "03-16 19:00",
        anotherUser: "海洋",
        text: "哈哈哈哈哈"
      },
      {
        userName: "来吃葱",
        time: "03-16 19:00",
        anotherUser: "",
        text: "哈哈哈哈哈"
      }
    ],
    timeLines:[
      {
        date:"2019-03-20",
        content:"海选阶段"
      },
      {
        date: "2019-03-21",
        content: "初赛"
      }
    ],
    activityDetails:[
    {
      title:"活动简介",
      content:"都可以随便的，你说的，我都愿意去，小火车，摆动的旋律，都可以是真的，你说的，我都会相信，因为我完全信任你。"
    },
    {
      title: "活动流程",
      content: "都可以随便的，你说的，我都愿意去，小火车，摆动的旋律，都可以是真的，你说的，我都会相信，因为我完全信任你。"
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