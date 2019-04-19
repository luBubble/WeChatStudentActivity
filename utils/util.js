const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//添加finally：因为还有一个参数里面还有一个complete方法。
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};

//封装异步api
const wxPromisify = fn => {
  return function (obj = {}) {
    return new Promise((resolve, reject) => {
      obj.success = function (res) {
        resolve(res)
      }

      obj.fail = function (res) {
        reject(res)
      }

      fn(obj)
    })
  }
}

// 封装post请求
const post = (url, data) => {
  var promise = new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: data,
      method: 'POST',
      header: {'content-type': 'application/x-www-form-urlencoded'},
      success: function (res) {
        if (res.statusCode == 200) {
          resolve(res);
        } else {
          reject(res.data);
        }
      },
      fail: function (e) {
        reject('网络出错');
      }
    })
  });
  return promise;
}
// 封装get请求
const get = (url, data) => {
  var promise = new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: data,
      header: {'content-type': 'application/json'},
      success: function (res) {
        if (res.statusCode == 200) {
          resolve(res);
        } else {
          reject(res.data);
        }
      },
      fail: function (e) {
        reject('网络出错');
      }
    })
  });
  return promise;
}

// 封装文件上传
const upload=option => {
  var promise = new Promise((resolve, reject) => {
    wx.uploadFile({
      url: option.url,
      filePath: option.filePath,
      name: option.name,
      formData: option.formData,
      success: (resp) => {
        let data = JSON.parse(resp.data)
        if (resp.statusCode == 200 && data.result == 'success') {
          resolve(resp)
        } else {//返回错误提示信息
          reject(resp);
        }
      },
      fail: (res) => {
        reject(res)
      }
    });
  })
  return promise
}

module.exports = {
  post,
  get,
  upload,
  formatTime
}
