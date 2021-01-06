$(function () {
  var layer = layui.layer
  $('#quit').on('click', function () {

    layer.confirm('确定退出', function (index) {
      //do something
      // 清空本地存储
      localStorage.removeItem('token')
      // 跳转页面
      location.href = '../../index_login.html'

      layer.close(index);
    });

  })


  // 获取用户的基本信息
  fun()



})


function fun() {

  // console.log(headers)
  $.ajax({
    method: 'GET',
    url: '/my/userinfo',
    // headers 就是请求头配置对象
    // headers: {
    //   Authorization: localStorage.getItem('token') || ''
    // },
    success: function (res) {
      console.log(res, '..........bbbbb................');
      if (res.status == 1) {
        return layui.layer.msg('获取用户信息失败！')
      }
      // 在直接打开页面请求失败是调用函数complete
      // if (res.status == 1) {
      //   localStorage.removeItem('token')
      //   location.href = '../../index_login.html'
      // }
      // 调用 renderAvatar 渲染用户的头像
      render(res.data)
    }
    // complete: function (res) {
    //   // 一般终端上的直接复制
    //   // if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！')
    //   if (res.responseJSON.status==1&&res.responseJSON.message=="身份认证失败！"){
    //     console.log(res.responseJSON, '..........................');
    //            localStorage.removeItem('token')
    //            location.href = '../../index_login.html'
    //   }
    // }
  })
}
function render(suer) {
  var tent = suer.nickname || suer.username
  // var pic=suer.user_pic||
  console.log(tent,'/////////////');
  var tents = tent[0].toUpperCase()
  
  $('.text-avatar').html(tents)
  $('.user_h').html('欢迎&nbsp;&nbsp;' + tent)

  if (suer.user_pic == null) {
    $('.layui-nav-img').attr('src', suer.user_pic).hide()
    $('.text-avatar').show()
  } else{
    $('.layui-nav-img').attr('src', suer.user_pic).show()
    $('.text-avatar').hide()
  }
}