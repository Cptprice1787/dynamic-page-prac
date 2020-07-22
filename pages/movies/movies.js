// pages/movies/movies.js
const MOVIE_URL = 'https://apikey.douban.com/v2/movie/top250';
let movie = require('../../utils/movie_data');
let appDatas = getApp();
// console.log(movie)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moviedata:{},
    index:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取mock数据
    this.setData({
      moviedata: movie.data.data,
    })
    console.log(this.data.moviedata)
    appDatas.data.movies = movie.data.data;
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