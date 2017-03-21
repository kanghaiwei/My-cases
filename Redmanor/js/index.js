/*
 * Created by kanghaiwei.
 */
if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {//ÎªÒÆ¶¯¶ËÊ±Ìø×ªÒ³Ãæµ½index-t.html
    window.location.href="index2.html"
}
var INDEX=0;
var runPage;
runPage = new
    FullPage({
    id: 'pageContain',
    slideTime:800,
    effect: {
        transform : {
            translate : 'Y',				   // 'X'|'Y'|'XY'|'none'
            scale : [.8, 1]				   // [scalefrom, scaleto]
        },
        opacity : [0, 1]
    },
    mode: 'wheel, touch, nav:navBar',
    easing: 'ease',
    callback:function(){
        if(runPage.thisPage()==0){
            $(".up-btn").hide()
        }else{
            $(".up-btn").show();
        }
        if(runPage.thisPage()==7){
            $(".apply-btn").hide();
            $(".down-btn").hide();
        }else{
            $(".apply-btn").show();
            $(".down-btn").show();
        }
    }
});
var navSpan=document.querySelectorAll('#navBar li span');
console.log(navSpan);
$("#navBar li").click(function(){
    var _index=$(this).index();
    $(this).children().find("span").hide();
    INDEX=_index;
    console.log(INDEX);
    runPage.go(_index);
});
$("#navBar li").mouseover(function(){
    $(this).addClass("pass");
    $(this).find("span").show();
});
$("#navBar li").mouseout(function(){
    $(this).removeClass("pass");
    $(this).find("span").hide();
});
$(".down-btn").click(function(){
    runPage.next();
});
$(".up-btn").click(function(){
    INDEX=0;
    runPage.go(INDEX);
});
/*申请入驻按钮*/
$(".apply-btn").click(function(){
    INDEX=7;
    runPage.go(INDEX);
});





