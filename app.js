//app.js
require('./utils/v-request.js');
App({
  onLaunch: function () {
    // if (!wx.cloud) {
    //   console.error("请使用2.2.3或以上版本");
    // } else {
    //   wx.cloud.init();
    // }
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          wx.request({
            url: this.globalData.serverAddress+'/login',
            data: {
              code: res.code
            },
            method: "GET",
            success: function (res) {
              console.log("======",res)
              var session_data = res.data.session_data;
              var session_id = session_data.session_id;
              var expires = session_data.expires;
              var data = session_data.data;
              var openid = res.data.openid;
              //将session_id保存到本地数据库
              wx.setStorageSync('session_id', session_id)
              wx.setStorageSync('openid', openid)
            }
          })
        } else {
          console.log("获取用户登录状态失败" + res.errMsg);
        }
      },
      complete: function (e) {
        console.log("获取用户登录成功" + e.toString());
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    serverAddress:"http://localhost:3000",
  }
})