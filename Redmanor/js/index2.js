var AppSwiper;
$(function(){
    // App的滑动
    AppSwiper = $('#swiperApp').swiper({
        mode:'vertical',
        cssWidthAndHeight:true,
        followFinger: false,
        longSwipesRatio: 0.1,
        onSlideChangeStart: function(swiper){
            pageNum = AppSwiper.activeIndex;//监测当前页面页数
            switch (pageNum) {
                case  0:
                    $("#sy").addClass("on").siblings().removeClass("on");//tab选中第一页
                    break;
                case  1:
                    $("#ty").addClass("on").siblings().removeClass("on");//tab选中第二页
                    break;
                case  2:
                    $("#bs").addClass("on").siblings().removeClass("on");//tab选中第三页
                    break;
                case  3:
                    $("#ds").addClass("on").siblings().removeClass("on");//tab选中第四页
                    break;
                case  4:
                    $("#jl").addClass("on").siblings().removeClass("on");//tab选中第五页
                    break;
                case  5:
                    $("#fw").addClass("on").siblings().removeClass("on");//tab选中第六页
                    break;
                case  6:
                    $("#wz").addClass("on").siblings().removeClass("on");//tab选中第七页
                    break;
                case  7:
                    $("#rz").addClass("on").siblings().removeClass("on");//tab选中第八页
                    break;
            }
        }
    });
}); 
//点击菜单和灰色区域隐藏菜单列表
$(function(){ 
    $("#tabList").bind("click",function(e){ 
        var target = $(e.target); 
        if(target.closest(".tabList").length == 0){ 
            $("#tabList").hide(); 
        } 
    }) 
})
var up=document.querySelector('#up'),
    menu=document.getElementById("menu"),
    tabList=document.getElementById("tabList"),
    titleLi = document.querySelectorAll('li');
//返回顶部    
up.addEventListener('touchend',function(e){
    AppSwiper.swipeTo(0,300);
},false);
//菜单点击显示/隐藏
menu.addEventListener('touchend',function(e){
    if(tabList.style.display !='block'){
        tabList.style.display='block'; //显示列表
    }else{
        tabList.style.display='none'; //隐藏列表
    }
},false);
//点击列表跳转到当前页
for(var i=0;i<titleLi.length;i++){
    titleLi[i].index = i
    titleLi[i].addEventListener('touchend',function(e){
        AppSwiper.swipeTo(this.index,300);
    });
}