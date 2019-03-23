// pages/addActivity/addActivity.js
let dateObj = new Date();
let year = dateObj.getFullYear();
let month = ("0" + dateObj.getMonth()).slice(-2);
let date = ("0" + dateObj.getDate()).slice(-2);
let today = year + "-" + month + "-" + date;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    beganDate: today,
    endDate:today,
    timeLineDatas:[{
      date: today,
     content:""
    }],
    detailText:true,
    detailTextDatas:[{
      title:"",
      content:""
    }]
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
    console.log(111,index);
    console.log(222, newData);
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
    let newData = this.data.detailTextDatas;
    let newItem={
      title: "",
      content: ""
    };
    newData.push(newItem);
    this.setData({ detailTextDatas: newData});
  },
  deleteDetailModule(e){
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
  }

})