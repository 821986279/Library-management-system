// pages/dome/dome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pindex:'0',
    cindex:'0',
    list: [
      {
        listName: '山上图书馆一楼',
        item: [{
          itemName: '201室',
          id:'1'
        }, {
          itemName: '205室',
            id: '2'
        }, {
          itemName: '209室',
        }]
      },
      {
        listName: '山上图书馆二楼',
        item: [{
          itemName: '301室',
        }, {
          itemName: '305室',
        }, {
          itemName: '309室',
        },{
          itemName:'走廊',
        },{
          itemName:'自习教室',
        }]
      }, {
        listName: '山上图书馆三楼',
        item: [{
          itemName: '401室',
        }, {
          itemName: '405室',
        }, {
          itemName: '409室',
        }, {
          itemName: '走廊',
        }, {
          itemName: '自习教室',
          }]
      }
    ]
  },
  //点击最外层列表展开收起
  listTap(e) {
    var lists = e.currentTarget.dataset.parentindex
    this.setData({
      pindex:lists
    })
    let Index = e.currentTarget.dataset.parentindex,//获取点击的下标值
    
      list = this.data.list;
    list[Index].show = !list[Index].show || false;//变换其打开、关闭的状态
    if (list[Index].show) {//如果点击后是展开状态，则让其他已经展开的列表变为收起状态
      this.packUp(list, Index);
    }

    this.setData({
      list
    });
  },
  //点击里面的子列表展开收起
  listItemTap(e) {
    // let parentindex = e.currentTarget.dataset.parentindex,//点击的内层所在的最外层列表下标
    //   Index = e.currentTarget.dataset.index,//点击的内层下标
    //   list = this.data.list;
    // console.log(list[parentindex].item, Index);
    // list[parentindex].item[Index].show = !list[parentindex].item[Index].show || false;//变换其打开、关闭的状态
    // if (list[parentindex].item[Index].show) {//如果是操作的打开状态，那么就让同级的其他列表变为关闭状态，保持始终只有一个打开
    //   for (let i = 0, len = list[parentindex].item.length; i < len; i++) {
    //     if (i != Index) {
    //       list[parentindex].item[i].show = false;
    //     }

    //   }
    // }
    // this.setData({ list });
    var pindex=this.data.pindex
    var lists = e.currentTarget.dataset.index
    this.setData({
      cindex: lists
    })
    var cindex = this.data.cindex
    switch(pindex){
      case 0:
      switch(cindex){
        case 0:
        wx.navigateTo({
          url: '../choosearea/areaA/areaA',
        })
        break;
        case 1:
          wx.navigateTo({
            url: '../choosearea/areaB/areaB',
          })
          break;
        case 2:
        wx.navigateTo({
          url: '../choosearea/areaC/areaC',
        })
        break;
      }break;
      case 1:
      switch(cindex){
        case 0:
        wx.navigateTo({
          url: '../choosearea/areaD/areaD',
        })
        break;
        case 1:
          wx.navigateTo({
            url: '../choosearea/areaE/areaE',
          })
          break;
        case 2:
          wx.navigateTo({
            url: '',
          })
          break;
        case 3:
          wx.navigateTo({
            url: '',
          })
          break;
        case 4:
          wx.navigateTo({
            url: '',
          })
          break;
      }break;
    }
  },
  //让所有的展开项，都变为收起
  packUp(data, index) {
    for (let i = 0, len = data.length; i < len; i++) {//其他最外层列表变为关闭状态
      if (index != i) {
        data[i].show = false;
        for (let j = 0; j < data[i].item.length; j++) {//其他所有内层也为关闭状态
          data[i].item[j].show = false;
        }
      }
    }
  },
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

