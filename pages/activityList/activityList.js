// pages/activityList/activityList.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgAddress: app.globalData.imgAddress,
    activities: [
      {
        img: "ac1.jpg",
        title: "网络科技文化节",
        organization: "信息与安全工程学院",
        viewNum: 2,
        checked:false
      },
      {
        img: "ac2.jpg",
        title: "影像中南",
        organization: "新闻与传播学院",
        viewNum: 1,
        checked: false
      },
      {
        img: "ac3.jpg",
        title: "辩论赛",
        organization: "经济学院",
        viewNum: 1,
        checked: false
      },
      {
        img: "ac4.jpg",
        title: "春日游园活动",
        organization: "中南财经政法大学校团委",
        viewNum: 1,
        checked: false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let navigationBartitle="活动收藏夹";
    wx.setNavigationBarTitle({
      title: navigationBartitle
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
  delete(e){
    wx.showModal({
      title: '提示',
      content: '是否确认删除？',
      confirmColor:'#E66039',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})