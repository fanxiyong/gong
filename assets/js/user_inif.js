// $(function () {



//     var form = layui.form
//   var layer = layui.layer
//     // form.verify({
//     //     psw: [
//     //         /^[\S]{6,12}$/
//     //         , '密码必须6到12位，且不能出现空格'
//     //     ]
//     // })
//     //    $('#names').val()=
//     user_info()

//     // 渲染基本信息发起Ajax请求
//     function user_info() {
//         $.ajax({
//             url: '/my/userinfo',
//             type: 'get',
//             // headers: {
//             //     Authorization: localStorage.getItem('token') || ''
//             //   },
//             success: function(res) {
//                 if (res.status !== 0) {
//                   return layer.msg('获取用户信息失败！')
//                 }
//                 // console.log(res)
//                 // 调用 form.val() 快速为表单赋值
//                 form.val('formUserInfo', res.data)
//               }
//             })
//           }
//         //   重置
//         $('#btnReset').on('click',function(e){
//             e.preventDefault()
//             user_info()
//         })
// })
$(function () {
  // alert(99)
  var form = layui.form
  // var layer = layui.layer
  var layer = layui.layer
  $.ajax({
    url: '/my/userinfo',
    type: 'get',
    success: function (res) {
      // console.log(res, '.............................kk');
      if (res.status !== 0) {
        return alert('获取用户信息失败！')
      }
      var data = res.data
      //给表单赋值
      form.val('filter', data)


    }
  })
  // 绑定事件
  $('.layui-form').on('submit', function (e) {
    // $('.layui-form').on('submit', function(e) 
    e.preventDefault()

    $.ajax({
      url: '/my/userinfo',
      type: 'post',
      data: $(this).serialize(),
      success: function (res) {
        if (res.status !== 0) {
          return layer.msg('获取用户信息失败！')
        }
        layer.msg('修改成功')
        // window.location.reload()
        window.parent.fun()
      }
    })



  })
  // 重置内容
  // 打开页面先获取服务端数据渲染
  // 在发送修改
  $('#btnReset').on('click', function (e) {
    e.preventDefault()
    // window.parent.fun()
    // window.location.reload()
    $.ajax({
      url: '/my/userinfo',
      type: 'get',
      success: function (res) {
        // console.log(res, '.............................kk');
        if (res.status !== 0) {
          return alert('获取用户信息失败！')
        }
        var data = res.data
        //给表单赋值
        form.val('filter', data)
  
  
      }
    })
  })



})