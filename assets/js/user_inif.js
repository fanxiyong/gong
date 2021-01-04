$(function () {
    // alert(99)
   
    
    var form = layui.form
  var layer = layui.layer
    // form.verify({
    //     psw: [
    //         /^[\S]{6,12}$/
    //         , '密码必须6到12位，且不能出现空格'
    //     ]
    // })
    //    $('#names').val()=
    user_info()

    // 渲染基本信息发起Ajax请求
    function user_info() {
        $.ajax({
            url: '/my/userinfo',
            type: 'get',
            // headers: {
            //     Authorization: localStorage.getItem('token') || ''
            //   },
            success: function(res) {
                if (res.status !== 0) {
                  return layer.msg('获取用户信息失败！')
                }
                // console.log(res)
                // 调用 form.val() 快速为表单赋值
                form.val('formUserInfo', res.data)
              }
            })
          }
        //   重置
        $('#btnReset').on('click',function(e){
            e.preventDefault()
            user_info()
        })
})