// $(function () {
//     $.ajaxPrefilter(function (opction) {
//         opction.url = 'http://api-breakingnews-web.itheima.net' + opction.url
//         // if (options.url.indexOf('/my/') !== -1) {
//         //     options.headers = {
//         //       Authorization: localStorage.getItem('token') || ''
//         //     }
//         //   }
//     })
// })
$(function () {
    // 封装函数
    $.ajaxPrefilter(function (opction) {
        opction.url = 'http://api-breakingnews-web.itheima.net' + opction.url
        if (opction.url.indexOf('/my/') !== -1) {
            opction.headers = {
                Authorization: localStorage.getItem('token') || ''
            }
        }
        opction.complete = function (res) {
            // 一般终端上的直接复制
            // if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！')
            if (res.responseJSON.status == 1 && res.responseJSON.message == "身份认证失败！") {
                console.log(res.responseJSON, '..........................');
                localStorage.removeItem('token')
                location.href = '../../index_login.html'
            }

        }
    })
})