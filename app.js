//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey
        if (res.code) {
          wx.request({
            url: this.globalData.serverAddress+'/login',
            data: {
              code: res.code
            },
            method: "GET",
            success: res => {
              //将session_id保存到本地数据库
              wx.setStorageSync('session_id', res.data.session_data.session_id)
              // 保存关键信息
              this.globalData.openid = res.data.openid
              this.globalData.userMsg = res.data.userMsg
            },
            fail: err=>{

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
  uploadImgs : data => {
    let i = data.i ? data.i : 0,//当前上传的哪张图片
      success = data.success ? data.success : 0,//上传成功的个数
      fail = data.fail ? data.fail : 0;//上传失败的个数
    wx.uploadFile({
      url: data.url,
      filePath: data.path[i],
      name: data.name,//这里根据自己的实际情况改
      formData: {
        ac_id: data.ac_id,
        index: i+1
      },//这里是上传图片时一起上传的数据
      success: (resp) => {
        console.log(111, resp.statusCode)
        console.log(222, resp.data.result)
        if (resp.statusCode == 200 && resp.data.result == 'success') {
          success++;//图片上传成功，图片上传成功的变量+1
          console.log("图片上传成功==" + i)
        }
      },
      fail: (res) => {
        fail++;//图片上传失败，图片上传失败的变量+1
        console.log('===上传失败===index:' + i + "count:" + fail);
      },
      complete: () => {
        i++;//这个图片执行完上传后，开始上传下一张
        if (i == data.path.length) {   //当图片传完时，停止调用          
          console.log('多图上传执行完毕');
          console.log('成功：' + success + " 失败：" + fail);
        } else if(fail > 0){
          console.log('===当前图片上传失败===');
          console.log('===终止多图上传===');
        } else {//若图片还没有传完，则继续调用函数
          console.log('===当前图片上传完成===');
          data.i = i;
          data.success = success;
          data.fail = fail;
          this.uploadImgs(data);
        }
      }
    });
    return success
  },
  globalData: {
    openid:null,
    userInfo: null,
    userMsg:null,
    serverAddress:"http://localhost:3000",
  }
})