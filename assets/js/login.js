$(function () {


    // 点击“去注册账号”的链接
    $('#link_reg').on('click', function () {

        $('.login-box').hide()
        $('.reg-box').show()
    })

    // 点击“去登录”的链接
    $('#link_login').on('click', function () {
        $('.login-box').show()
        $('.reg-box').hide()
    })
    var form = layui.form
    var layer = layui.layer
    form.verify({
        // 自定义了一个叫做 pwd 校验规则
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        // 校验两次密码是否一致的规则
        repwd: function (value) {
            // 通过形参拿到的是确认密码框中的内容
            // 还需要拿到密码框中的内容
            // 然后进行一次等于的判断
            // 如果判断失败,则return一个提示消息即可
            var pwd = $('.reg-box [name=password]').val()
            if (pwd !== value) {
                return '两次密码不一致！'
            }
        }
    })
    // 注册
    $("#regs").on('submit', function (e) {
        e.preventDefault()
        $.ajax({
            url: '/api/reguser',
            data: {
                username: $('#regs [name=username]').val(),
                password: $('#regs [name=password]').val()
            },
            type: 'post',
            success: function (res) {
                console.log(res,'............................................');
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                layer.msg('注册成功，请登录！')
                // $('#link_login').click
                $('#link_login').click()
            }
        })

    })

    // 登录请求
    // 快速请求表单内容
    $("#logins").on('submit',function(e){
        e.preventDefault()
        var logins = $("#logins").serialize()
        console.log(logins);
        $.ajax({
            url: '/api/login',
            data: logins,
            type: 'post',
            success: function (res) {
                console.log(res,'....kkk..');
                if(res.status!==0){
                    return layer.msg(res.message)
                }
                layer.msg('登录成功')
                localStorage.setItem('token',res.token)
                location.href='/index.html'
            }
        })
    
    })
    






})