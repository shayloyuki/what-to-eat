// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('onLoad - 页面加载')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('onReady - 页面就绪')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('onShow - 页面显示')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log('onHide - 页面隐藏')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('onUnload - 页面卸载')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  goIndex() {
    wx.reLaunch({
      url: "/pages/index/index"
    })
  },

})