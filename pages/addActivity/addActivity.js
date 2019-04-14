// pages/addActivity/addActivity.js
let dateObj = new Date();
let year = dateObj.getFullYear();
let monthNum = dateObj.getMonth() + 1;
let month = ("0" + monthNum).slice(-2);
let date = ("0" + dateObj.getDate()).slice(-2);
let today = year + "-" + month + "-" + date;
const app = getApp()
const { post, get, upload} = require('../../utils/util')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title:"网络科技文化节",
    address:"五羊广场",
    organizer:"信息与安全工程学院分团委",
    contractor:"信息与安全工程学院分团委学生会网宣部",
    beganDate: today,
    endDate:today,
    timeLineDatas:[{
      date: today,
     content:"活动开幕式"
    }],
    detailText:true,
    detailTextDatas:[{
      title:"活动背景",
      content:"计算机教育改革已是当代潮流，结合计算机教学的质量也在逐渐上升。在学习工作和生活中，计算机的应用占了很大了比例，因此熟练地掌握计算机知识与技巧已成为当代学生必不可少的能力，运用信息技术解决实际问题的综合能力也尤为重要。我们将结合信息与安全工程学院专业特色，开展第十五届网络科技文化节"
    },
    {
      title: "活动形式",
      content: "采用科技与艺术相结合、线上线下同时开展的活动形式，举行一系列与网络科技相关的活动，活动包括外场宣传、线上答题、交流讲座、APP设计比赛、表情包制作大赛，并且最终以答辩会结合闭幕式的形式进行APP设计的展示的现场决赛与优秀作品展示。"
    }
    ],
    detailPic:"",
    slidePics: []
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
  //输入活动信息
  titleInput(e){
    this.setData({ title: e.detail.value })
  },
  addressInput(e) {
    this.setData({ address: e.detail.value })
  },
  contractorInput(e) {
    this.setData({ contractor: e.detail.value })
  },
  organizerInput(e) {
    this.setData({ organizer: e.detail.value })
  },
//时间起止
  bindBeganDateChange(e) {
    this.setData({ beganDate: e.detail.value })
  },
  bindEndDateChange(e){
    this.setData({ endDate: e.detail.value })
  },
//时间线输入
  handleTimeLineInput(e){
    let index=e.currentTarget.dataset.index;
    let newData = this.data.timeLineDatas;
    newData[index].content = e.detail.value;
    this.setData({ timeLineDatas: newData });
  },
  handleTimeLinePicker(e){
    let index = e.currentTarget.dataset.index;
    let newData = this.data.timeLineDatas;
    newData[index].date = e.detail.value;
    this.setData({ timeLineDatas: newData });
  },
  //添加或删除时间节点
  handleTimeLineAction(e){
    let newData = this.data.timeLineDatas;
    if (e.currentTarget.dataset.isadd) {
      let newItem = {
        date: today,
        content: ""
      };
      newData.push(newItem);
    } else {
      let index = e.currentTarget.dataset.index;
      newData.splice(index, 1); 
    }
    this.setData({ timeLineDatas: newData });
  },
  //活动详情输入样式
  handleDetailType(e){
    if (e.detail.value ==="text") {
      this.setData({ detailText: true });
    } else if (e.detail.value === "pic") {
      this.setData({ detailText: false });
    }
  },
//标题+文本的活动详情处理
  addDetailModule(e){
    console.log("==add==")
    let newData = this.data.detailTextDatas;
    let newItem={
      title: "",
      content: ""
    };
    newData.push(newItem);
    this.setData({ detailTextDatas: newData});
  },
  deleteDetailModule(e){
    console.log("==delete==")
    let index = e.currentTarget.dataset.index;
    let newData = this.data.detailTextDatas;
    newData.splice(index, 1);
    this.setData({ detailTextDatas: newData });
  },
  inputDetailTitle(e){
    let index = e.currentTarget.dataset.index;
    let newData = this.data.detailTextDatas;
    newData[index].title = e.detail.value;
    this.setData({ detailTextDatas: newData });
  },
  inputDetailContent(e){
    let index = e.currentTarget.dataset.index;
    let newData = this.data.detailTextDatas;
    newData[index].content = e.detail.value;
    this.setData({ detailTextDatas: newData });
  },
  //选择详情图片
  uploadDetailPic(e){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        const detailPic =res.tempFilePaths[0]
        if (res.tempFiles[0].size > 1024*1024*5 ) {
          wx.showToast({
            title: '图片尺寸过大！',
            icon:'none'
          })
        } else {
          this.setData({ detailPic })
        }
      }
    });
   
  },
  //选择轮播图照片
  uploadSlidePic(e) {
    wx.chooseImage({
      count: 3,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        const tempFiles=res.tempFiles
        let flag=true
        //判断图片大小
        for (let i = 0; i < tempFiles.length; i++){
          if (res.tempFiles[i].size > 1024 * 1024 * 2) {
            flag=false
            break;
          }
        }
        if(flag){
          const slidePics = this.data.slidePics.concat(res.tempFilePaths)
          // 限制最多只能留下3张照片
          this.setData({ slidePics: (slidePics.length > 3 ? slidePics.slice(0, 3) : slidePics )})
        } else {
          wx.showToast({
            title: '图片尺寸过大！',
            icon: 'none'
          })
        }
        
      }
    })
  },
  //删除轮播图
  deleteSlidePic(e){
    let index = e.currentTarget.dataset.index;
    let newData = this.data.slidePics;
    newData.splice(index, 1);
    this.setData({ slidePics: newData });
  },
//删除详情长图
  deleteDetailPic(e){
    this.setData({ detailPic: "" });
  },
//创建、保存活动
  saveActivity(e){
    let { title, address, organizer, contractor, beganDate, endDate, slidePics, timeLineDatas, detailText, detailTextDatas, detailPic} = this.data
    if (title==""||address==""||organizer==""||contractor==""){
      wx.showToast({
        title: '请内容填写完整！',
        icon: 'none'
      })
      return
    }
    if(slidePics.length==0){
      wx.showToast({
        title: '请上传轮播图！',
        icon: 'none'
      })
      return
    }
    //是否为草稿
    let draft = parseInt(e.currentTarget.dataset.draft)
    let detailType = detailText ? 0 : 1
    //新增或修改活动基本信息
    wx.showLoading({
      title: '正在创建活动',
      mask: true
    })
    wx.request({
      url: app.globalData.serverAddress + '/addActivity',
      data: {
        openid:app.globalData.openid,
        draft:draft,
        verify: ( app.globalData.userMsg.type===3 ? 1 : 0 ),
        title: title,
        address: address,
        organizer: organizer,
        contractor: contractor,
        beganDate: beganDate,
        endDate: endDate,
        detailType: detailType,
        timeLineDatas: timeLineDatas
      },
      method: "GET",
      fail: res => {
        wx.hideLoading()
        wx.showToast({
          title: "活动创建失败！",
          icon: "none"
        })
      },
      success: res => {
        if (res.data.result !=="success"){
          wx.showToast({
            title: res.data.result,
            icon: "none"
          })
          return
        }
        var ac_id = res.data.ac_id;
          //上传轮播图
        wx.hideLoading()
        wx.showLoading({
          title: '上传轮播图图片',
          mask: true
        })

//上传多张图片
        const slidePromise = slidePics.map(function(item,index){
          return upload({
            url: app.globalData.serverAddress + '/addActivity/addSlidePic',
            filePath:item,
            name: 'slidePic',
            formData: {
                ac_id: ac_id,
                index: index+1
              }
          })
        })

        Promise.all(slidePromise).then(
          function(res){
            console.log(res)
            //完善活动详情信息
            if (detailType === 0) {
              wx.hideLoading()
              wx.showLoading({
                title: '上传详情模块',
                mask: true
              })
              //文本详情模式
              return get(app.globalData.serverAddress + '/addActivity/addDetailText',
               {
                  ac_id: ac_id,
                  detailTextDatas: detailTextDatas
                })
            } else {
              wx.hideLoading()
              wx.showLoading({
                title: '上传详情图片',
                mask: true
              })
              return upload({
                url: app.globalData.serverAddress + '/addActivity/addDetailPic',
                filePath: detailPic,
                name: 'detailPic',
                formData: {
                  ac_id: ac_id,
                }
              })
            }
          }).then(function(res){
              wx.hideLoading()
              wx.showToast({
                title: "活动保存成功！"
              })
        }).catch(function (err) {
            wx.hideLoading()
            wx.showToast({
              title: "活动创建失败！",
              icon: "none"
            })
          console.log("==活动创建失败:"+err)
        })
        }
    })
  }
})