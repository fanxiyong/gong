// $(function () {
//     var form = layui.form
//     var layer = layui.layer
//     form.verify({
//         pws: [
//             /^[\S]{6,12}$/
//             , '密码必须6到12位，且不能出现空格'
//         ],
//         //   相等
//         rquery: function (value) {
//             if (value === $('#pwss').val()) {
//                 return '新旧密码相同'
//             }

//         },
//         requeryse: function (value) {
//             if (value !== $('[name="newpws"]').val()) {
//                 return '两次密码不一致'
//             }
//         }
//     })
//     // 绑定事件发起请求
//     $('#psw_box').on('submit', function (e) {
//         // 阻止默认行为
//         e.preventDefault()
//         $.ajax({
//             url: '/my/updatepwd',
//             type: 'POST',
//             // 获取表单三个值
//             // 但上传要两个值
//             data: $(this).serialize(),
//             success: function (res) {
//                 if (res.status!==0){
//                     return layer.msg('修改失败')
//                 }
//                 layer.msg('修改成功')
//                 // 表单值重置空
//                 $("#psw_box")[0].reset()
//             }

//         })
//     })
// })
$(function(){
    var form = layui.form
    form.verify({
        psw: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ],
        rquery: function (value) {
            if ($('#pwss').val() == value) {
                return '不能相等'
            }
        },
        requeryse: function (value) {
            if ($('[name="newPwd"]').val() !== value) {
                return '两次不等'
            }
        }
    
    
    })
    // 先绑定事件
    // $('#psw_box').on('submit', function (e) {
    //     console.log(1111111);
    //     e.preventDefault()
    //     $.ajax({
    //          url: '/my/updatepwd',
    //         type: 'post',
    //         data: $(this).serialize(),
    //         success: function (res) {
    //             console.log(res);
    //         }
    //     })
    // })
    
    $('.layui-form').on('submit', function(e) {
        console.log(999);
        e.preventDefault()
        $.ajax({
          method: 'POST',
          url: '/my/updatepwd',
          data: $(this).serialize(),
          success: function(res) {
              console.log(res);
            if (res.status !== 0) {
              return layui.layer.msg('更新密码失败！')
            }
            layui.layer.msg('更新密码成功！')
            // 重置表单
            $('.layui-form')[0].reset()
          }
        })
      })
})
