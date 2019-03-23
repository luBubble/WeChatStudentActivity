// pages/activityManage/activityManage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    options:[
      {
        text:"全部活动",
        icon:"icon-all",
        action:"gotoAllActivity"
      },
      {
        text:"我的收藏",
        icon:"icon-collection"
      },
      {
        text:"浏览记录",
        icon:"icon-history"
      },
      {
        text:"我的报名",
        icon:"icon-sign-up"
      },
      {
        text:"我创建的活动",
        icon:"icon-my-create"
      },
      {
        text:"活动审核",
        icon:"icon-check"
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

  gotoAllActivity:function() {
    wx.showToast({
      title: 'hhhh'
    })
  },

//创建新活动
  createActivity:function () {
    // wx.showToast({
    //   title:"请先进行活动组织者认证",
    //   icon:"none"
    // })
  wx.navigateTo({
    url: '../addActivity/addActivity'
  })
  }

})