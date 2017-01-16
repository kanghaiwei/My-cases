var data=[
	{title:'赞',img:'img01.png'},
	{title:'霸',img:'img02.png'},
	{title:'捡',img:'img03.png'},
	{title:'遇',img:'img04.png'},
	{title:'等',img:'img05.png'},
	{title:'勤',img:'img06.png'},
	{title:'度',img:'img07.png'},
	{title:'守',img:'img08.png'},
	{title:'顺',img:'img09.png'},
	{title:'升',img:'img10.png'},
	{title:'涨',img:'img11.png'},
	{title:'变',img:'img12.png'},
	{title:'平',img:'img13.png'},
	{title:'舍',img:'img14.png'},
	{title:'展',img:'img15.png'}
];

var lastTime=0;
var x=y=z=lastX=lastY=lastZ=0;
var shakeSpeed=3000;
var isShaking=true;
var Audio=document.getElementsByTagName('audio');

/*判断手机是否支持摇一摇*/
if(window.DeviceMotionEvent){
	window.addEventListener('devicemotion', shake, false);
}else{
	alert('您的设备不支持摇一摇');
}

/*再摇一次按钮的点击事件*/
$('.btn1').bind('click',function(){
	$('#page1').show();
	$('#page2').hide();
	$('.luck').css('backgroundImage','none');
	window.addEventListener('devicemotion',shake,false);
	isShaking=true;
});
/*分享财富按钮的点击事件*/
$('.btn2').bind('click',function(){
	$('#page3').show();
});
/*-------摇一摇函数-------*/
function shake(e){
	if(!isShaking){
		return false;
	}
	//获取设备加速度信息 
	var acceleration = e.accelerationIncludingGravity;
	var nowTime = new Date().getTime();
	//这次摇的时间距离上次摇的时间有一定间隔才执行
	if(nowTime - lastTime > 100){
		var durition = nowTime - lastTime;
		lastTime = nowTime;
		x = acceleration.x;
		y = acceleration.y;
		z = acceleration.z;
		var speed = Math.abs(x + y + z - lastX - lastY - lastZ) / durition * 10000;
		if(speed > shakeSpeed){
			showResult();
		}
		lastX = x;
		lastY = y;
		lastZ = z;
	}
}

/*-------显示结果函数-------*/
function showResult(){
	window.removeEventListener('devicemotion',shake,false);
	isShaking=false;
	Audio[0].play();
	$('#page1').hide();
	$('#page2').show();
	$('.p2-man1').addClass('animated slideInLeft');
	$('.p2-man2').addClass('animated slideInRight');
	setTimeout(function(){
		var m=Math.round( Math.random()*data.length );
		$('.luck').css('backgroundImage','url(./img/'+data[m].img+')');
		Audio[1].play();
		$('.luck').addClass('animated slideInDown');
	},1000);
}




	
