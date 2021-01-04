$(function () {
    var form = layui.form
    var layer = layui.layer
    form.verify({
        pws: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ],
        //   相等
        rquery: function (value) {
            if (value === $('#pwss').val()) {
                return '新旧密码相同'
            }

        },
        requeryse: function (value) {
            if (value !== $('[name="newpws"]').val()) {
                return '两次密码不一致'
            }
        }
    })
    // 绑定事件发起请求
    $('#psw_box').on('submit', function (e) {
        // 阻止默认行为
        e.preventDefault()
        $.ajax({
            url: '/my/updatepwd',
            type: 'POST',
            // 获取表单三个值
            // 但上传要两个值
            data: $(this).serialize(),
            success: function (res) {
                if (res.status!==0){
                    return layer.msg('修改失败')
                }
                layer.msg('修改成功')
                // 表单值重置空
                $("#psw_box")[0].reset()
            }

        })
    })
})