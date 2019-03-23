// pages/activityCenter/activityCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      '../../images/slide1.jpg',
      '../../images/slide2.jpg',
      '../../images/slide3.jpeg'
    ],
    autoplay: true,
    interval: 3000,
    duration: 1000,
    newActivities:[
      {
        img:"../../images/slide2.jpg",
        title:"送毕业生晚会",
        organization:"信息与安全工程学院"
      },
      {
        img: "../../images/slide1.jpg",
        title: "影像中南",
        organization: "新闻与传播学院"
      }
    ],
    hotActivities:[
      {
        img: "../../images/slide1.jpg",
        title: "影像中南",
        organization: "新闻与传播学院",
        viewNum:2333
      },
      {
        img: "../../images/slide2.jpg",
        title: "影像中南",
        organization: "新闻与传播学院",
        viewNum: 666
      },
      {
        img: "../../images/slide3.jpeg",
        title: "影像中南",
        organization: "新闻与传播学院",
        viewNum: 11
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
  gotoMoreActivity(e){
    wx.navigateTo({
      url: '../activityList/activityList'
    })
  },
  gotoActivityDetail(e){
    wx.navigateTo({
      url: '../activityDetail/activityDetail'
    })
  }
})