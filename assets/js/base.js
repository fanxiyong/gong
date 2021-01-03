$(function(){
    $.ajaxPrefilter(function(opction){
         opction.url='http://ajax.frontend.itheima.net'+opction.url
               
    })
})