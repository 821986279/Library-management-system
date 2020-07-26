var information = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 100,
    y: 100,
    scalemax: 7, //可放缩选区最大放大倍数
    userinfo: [], //用户信息
    deskinfo: [], //座位信息表
  },

  choose:function(event){
    var evinfo = event.target.dataset;
    console.log(event)
    if (information.userCondition.condition == 0 || information.userCondition.condition == 1){
      if (evinfo.class == "B c01") {
        information.userCondition.reserve = ["305", parseInt(evinfo.pos.split('k')[1]), evinfo.id];
        information.userCondition.condition = 1;
      }
    }
    this.setData({
      deskinfo: information.A
    })
    var x = information.userCondition.reserve[1] - 1;
    var y = "c" + information.userCondition.reserve[2];
    console.log(x)
    console.log(y)
    this.data.deskinfo[x][y] = 'B c03';
    this.setData({
      userinfo: information.userCondition, //重新渲染，使下部分提示框和确定按钮出现
      deskinfo: this.data.deskinfo
    })
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
    
  }
})