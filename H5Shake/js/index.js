/*
 * Created by kanghaiwei.
 */
localStorage.list_a = '';//清除本地存储
localStorage.list_b = '';//清除本地存储
localStorage.stock = '';//清除话费券剩余数量
localStorage.count='';//清除每日发券数量
judge();//先执行判断
var pageviews = '123456';
var date = getDate();//当前日期
localStorage.stock = '123330';//话费券剩余数量
localStorage.count = '1000';//每日发券数量
$('#pageviews').text(getZero(pageviews));
(function () {
    $('#btn-index').tap(function () {
        $(this).addClass('btn-active').removeClass('btn-bg')
    });
    $('.rule').tap(function () {
        $('.tips-box-a').show();
    });
    $('.tips-btn').tap(function () {
        $('.tips-box-a').hide();
    });
    $('#index-btn').tap(function(){
        // var indexNum='http://s.cr-nielsen.com/hat?_t=r&_htsinfo=QyYyJjgwMDAwNTQzJjEwMDA5NjIwJjMwMTg4NDU2Js5Z&l=aHR0cDovL3dpZmkubmF2aWN0LmNvbS9sb3R0ZXJ5TG90dG8vd2lzaC5odG1s&_z=_&rnd=72291775';
        window.location.href='wish.html';
        $('#indexBtnImg').attr('src',indexNum);
    })
})();