$(function () {
    var layer = layui.layer
    // 1.1 获取裁剪区域的 DOM 元素
    var $image = $('#image')
    // 1.2 配置选项
    const options = {
        // 纵横比
        aspectRatio: 1,
        // 指定预览区域
        preview: '.img-preview'
    }

    // 1.3 创建裁剪区域
    $image.cropper(options)
    // 在选取图片时隐藏上传文件按钮
    $('#uplond').on('click', function () {
        $("#sele").click()
        //   console.log(e.files);
    })
    // 绑定事件file改变就触发---------------------------------------

    $('#sele').on('change', function (e) {
        console.log(e);
        var files = e.target.files//数组
        // console.log(files);
        // 判断是否有中图片
        if (files.lenth == 0) {
            return layer.msg('请选择图片');
        }
        /// 1. 拿到用户选择的文件
        var file = files[0]
        // 2. 将文件，转化为路径
        var imgURL = URL.createObjectURL(file)
        // 3. 重新初始化裁剪区域
        $image
            .cropper('destroy') // 销毁旧的裁剪区域
            .attr('src', imgURL) // 重新设置图片路径
            .cropper(options) // 重新初始化裁剪区域
    })
    //  给确定按钮绑定事件
    $('#queryse').on('click', function () {
        // 拿到用户裁剪之后的头像
        // 创建一个 Canvas 画布，将 Canvas 画布上的内容，转化为`base64` 格式的字符串
        // 把图片转换64文字格式
        var dataURL = $image
            .cropper('getCroppedCanvas', {
                // 创建一个 Canvas 画布
                width: 100,
                height: 100
            })
            .toDataURL('image/png')
            // 发送Ajax请求
            $.ajax({
                url:'/my/update/avatar',
                type:'post',
                data:{
                    avatar:dataURL
                },
                success:function(res){
                    if(res.status!==0){
                     return layer.msg('更新失败')
                    }
                    layer.msg('替换成功')
                    window.location.onload()
                    window.parent.user_info()
                }
            })
    })
})
