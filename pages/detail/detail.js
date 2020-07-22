// pages/detail/detail.js
let datas = require('../../datas/list-data')
let appDatas = getApp();

// @ts-ignore
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    index: null,
    isCollected: false,
    musicPlay: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let index = options.index;
    this.setData({
      detail: datas.list_data[index],
      index
    });

    let detailst = wx.getStorageSync('isCollected')
    //初始化
    if (!detailst) {
      wx.setStorageSync('isCollected', {})
    };

    //判断本地缓存中是否收藏
    if (detailst[index]) {
      //收藏了
      this.setData({
        isCollected: true,
      })
    };

    //监听音乐播放
    wx.onBackgroundAudioPlay((res) => {
      this.setData({
        musicPlay: true
      });
    });
    //监听音乐暂停
    wx.onBackgroundAudioPause((res) => {
      this.setData({
        musicPlay: false
      });
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  //收藏处理
  collect () {
    //收藏响应
    let isCollected = !this.data.isCollected;
    this.setData({
      isCollected
    });
    let title = isCollected ? '收藏成功' : '取消收藏';
    wx.showToast({
      title,
      icon: 'success',
    })

    //数据处理
    let { index } = this.data
    // let obj = {}; 会覆盖原来的状态
    wx.getStorage({
      key: 'isCollected',
      success: (datas) => {
        let obj = datas.data;
        obj[index] = isCollected;
        wx.setStorage({
          data: obj,
          key: 'isCollected',
          success: () => {
            console.log('缓存成功')
          }
        })
      }
    })
  },

  //音乐播放
  playMusic () {
    //点击事件
    let musicPlay = !this.data.musicPlay;
    this.setData({
      musicPlay
    });

    //控制播放
    if (musicPlay) {
      //播放
      let { dataUrl, title } = this.data.detail.music;
      // console.log(dataUrl, title)
      wx.playBackgroundAudio({
        dataUrl,
        title
      })
    }
    else {
      //暂停
      // console.log('pause')
      wx.pauseBackgroundAudio({
        // complete: (res) => { },
      })
    }
  },

  //分享功能
  share () {
    wx.showActionSheet({
      itemList: ['分享到朋友圈', '分享到qq空间', '分享到微博'],
    })
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