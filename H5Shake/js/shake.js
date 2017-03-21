/*
 * Created by kanghaiwei.
 */
getbg();//背景图宽度高度适应当前屏幕
//许愿福图片对应之前拖拽
var list_one = 'images/list' + localStorage.list_a + '.png',
    list_two = 'images/list' + localStorage.list_b + '.png';
$('.list img').eq(0).attr('src', list_one);
$('.list img').eq(1).attr('src', list_two);
var countDown = 3;//剩余可摇签次数
var listAry = [localStorage.list_a, localStorage.list_b];//本地存储数据
console.log(listAry);
//shake方法
var isplay = true;//开关，限制2.4秒内不能重复执行动画
function shake() {
    var signN = listAry[getNum(0, 1)];//许愿福二选一变量
    var signP = getNum(0, 4);//随机抛出签文
    console.log(signAry[signN].name[signP]);
    console.log(signAry[signN].paper[signP]);
    $('#signNum').text(signAry[signN].name[signP]);//把签名添加到页面
    $('#signPaper').text(signAry[signN].paper[signP]);//把签文添加到页面
    if (isplay) {
        $('.signOut').css('display','block');
        $('.sign img').addClass('signShake');//执行摇一摇动画
        getMusic();
        countDown > 0 ? countDown-- : void 0;
        $('#countDown').text(countDown);//剩余次数刷新
        $('.signOut img').addClass('fadeUp');//出签动画
        isplay = false;
        //签文对应
        clearTimeout(timer);
        var timer = setTimeout(function () {
            isplay = true;//2.4秒后，初始值为true可再执行动画
            $('.tips-box-c').show();//弹出框
            $('.signOut img').removeClass('fadeUp');//出签动画类移除
            $('.sign img').removeClass('signShake');//摇一摇动画移除
        }, 2400);
    }
}
//touch事件
var btn = document.querySelector('#sBtn');
clearTimeout(shakeTime);
var shakeTime = setTimeout(function () {
    $('.sign img').removeClass('signShake');//开始摇一摇动画移除
}, 1000);
btn.addEventListener('touchstart', function () {
    $(this).addClass('btn-active').removeClass('btn-bg');//点击按钮变色
    shake();//执行摇事件
    $('#shakeBtnImg').attr('src','http://s.cr-nielsen.com/hat?_t=r&_htsinfo=QyYyJjgwMDAwNTQzJjEwMDA5NjIyJjMwMTg4NDU4JsQU&_z=_&rnd=96346673');
}, false);
btn.addEventListener('touchend', function () {
    $(this).removeClass('btn-active').addClass('btn-bg');//按钮恢复原色
}, false);
//摇一摇事件
if (window.DeviceMotionEvent) {
    var speed = 25;
    var x = y = z = lastX = lastY = lastZ = 0;
    var timer = null;
    window.addEventListener('devicemotion', function () {
        var acceleration = event.accelerationIncludingGravity;
        //---------accelerationIncludingGravity属性含重力的加速度
        x = acceleration.x;
        y = acceleration.y;
        if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed) {
            shake();//执行摇事件
        }
        lastX = x;
        lastY = y;
    }, false);
}
//弹出框按钮点击事件
(function () {
    $('.btn-shake').eq(0).tap(function () {
        if (countDown > 0) {
            $('.tips-box-c').hide();
            $('#singBtnImg').attr('src','');
        } else {
            void 0;
        }
    });
    $('.btn-shake').eq(1).tap(function () {
        $('.tips-box-c').hide();//弹出框隐藏
        var hours = getHours();//当前时间
        //warmTips('话费券已领完，感谢您的参加。',numThree,imgurlThree);
        if (localStorage.stock == 0) {//判断如果券为0的时候
            warmTips('对不起，话费券已领完，感谢您的参加。',numThree,imgurlThree);
        } else if (hours < 12 && localStorage.count > 25000) {//判断如果上午发券数量超额'
            warmTips('对不起，上午的话费券已经赠完，下午精彩继续，12点过后再来抢话费券吧！',numOne,imgurlOne);
        } else if (localStorage.count >= 50000) {//判断如果日发券数量超额
            warmTips('对不起，今天的话费券已经赠完，明天早点来抢话费券吧！',numTwo,imgurlTwo);
        } else {
            window.location.href = 'coupons.html';
        }
    });
})();