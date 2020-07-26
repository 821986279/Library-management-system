Page({
  data: {
    username: '',
    password: '',
  },
  onTapJumpcover: function () {
    wx.request({
      url: 'http://106.54.78.156:3000/login',
      method:"POST",
      data: {
        username:this.data.username,
        password: this.data.password,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(code){
           console.log(code.data);
            if (code.data == 1) {
              wx.navigateTo({
                url: "/pages/cover/cover",
              })
               } else {
                 wx.showToast({
                   title: '用户名密码错误',
                   image:'../login/111.PNG',
                   duration:2000
                 })
             }
      },
    })
  },
  usernameinput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  passwordinput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
})