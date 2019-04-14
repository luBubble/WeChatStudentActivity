//多张图片上传,递归方式
/*
data的格式
{ 
  url:'https://........',//这里是你图片上传的接口
  path:pics//这里是选取的图片的地址数组
  name:'',
  ac_id:''
}
 */
function uploadImgs(data){
  let i = data.i ? data.i : 0,//当前上传的哪张图片
    success = data.success ? data.success : 0,//上传成功的个数
    fail = data.fail ? data.fail : 0;//上传失败的个数
  wx.uploadFile({
    url: data.url,
    filePath: data.path[i],
    name: data.name,//这里根据自己的实际情况改
    formData: {
      ac_id: data.ac_id,
      index: i + 1
    },//这里是上传图片时一起上传的数据
    success: (resp) => {
      let data = JSON.parse(resp.data)
      if (resp.statusCode == 200 && data.result == 'success') {
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
        return true
      } else if (fail > 0) {
        console.log('===当前图片上传失败===');
        console.log('===终止多图上传===');
        return false
      } else {//若图片还没有传完，则继续调用函数
        console.log('===当前图片上传完成===');
        data.i = i;
        data.success = success;
        data.fail = fail;
        uploadImgs(data);
      }
    }
  });
}

function upload(option){
  var promise = new Promise((resolve, reject) => {
    wx.uploadFile({
      url: option.url,
      filePath: option.filePath,
      name: option.name,//这里根据自己的实际情况改
      formData: option.formData,//这里是上传图片时一起上传的数据
      success: (resp) => {
        let data = JSON.parse(resp.data)
        console.log(11, data.result)
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

module.exports = { uploadImgs, upload}