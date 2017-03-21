/*
 * Created by kanghaiwei.
 */
getbg();//背景图自适应
var oDivs = document.querySelectorAll('#top div');
var ols = document.querySelectorAll('#btm div');
//拖动事件执行的操作
for (var i = 0; i < ols.length; i++) {
    ols[i].addEventListener('touchend', function () {
        localStorage.list_a = $('#top div').eq(0).attr('val');//存储在本地
        localStorage.list_b = $('#top div').eq(1).attr('val');//存储在本地
        oDivs = document.querySelectorAll('#top div');
        console.log(localStorage.list_a);
        console.log(localStorage.list_b);
        if ($('#top div').eq(0).attr('val')) {
            $('.top-bg').eq(1).hide();
        } else {
            $('.top-bg').eq(1).show();
        }
        if ($('#top div').eq(1).attr('val')) {
            $('.top-bg').eq(0).hide();
        } else {
            $('.top-bg').eq(0).show();
        }
    }, false)
}
//按钮点击事件
$('#wish-btn').tap(function () {
    if (oDivs.length == 2) {
        window.location.href = 'shake.html';
    } else {
        warmTips('需要您在许愿树上，悬挂两个许愿符才能进行下一步操作哦');
    }
});