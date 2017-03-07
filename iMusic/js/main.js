/*
 * Created by kanghaiwei.
 */
var data=[
    {
        song:"我要你",
        singer:"任素汐",
        src:"music/任素汐 - 我要你.mp3",
        img:'img/cover/任素汐.jpg'
    },
    {
        song:"独家记忆",
        singer:"陈小春",
        src:"music/陈小春 - 独家记忆.mp3",
        img:'img/cover/陈小春.jpg'
    },
    {
        song:"相依为命",
        singer:"陈小春",
        src:"music/陈小春 - 相依为命.mp3",
        img:'img/cover/陈小春.jpg'
    },
    {
        song:"风吹麦浪",
        singer:"李健",
        src:"music/李健 - 风吹麦浪.mp3",
        img:'img/cover/李健.jpg'
    },
    {
        song:"默",
        singer:"那英",
        src:"music/那英 - 默.mp3",
        img:'img/cover/那英.jpg'
    },
    {
        song:"有个爱你的人不容易",
        singer:"那英",
        src:"music/那英 - 有个爱你的人不容易.mp3",
        img:'img/cover/那英.jpg'
    },
    {
        song:"夜空中最亮的星",
        singer:"逃跑计划",
        src:"music/逃跑计划 - 夜空中最亮的星.mp3",
        img:'img/cover/逃跑计划.jpg'
    }
    ,
    {
        song:"一万次悲伤",
        singer:"逃跑计划",
        src:"music/逃跑计划 - 一万次悲伤.mp3",
        img:'img/cover/逃跑计划.jpg'
    },
    {
        song:"再见,再见",
        singer:"逃跑计划",
        src:"music/逃跑计划 - 再见,再见.mp3",
        img:'img/cover/逃跑计划.jpg'
    },
    {
        song:"风吹麦浪",
        singer:"李健",
        src:"music/李健 - 风吹麦浪.mp3",
        img:'img/cover/李健.jpg'
    },
    {
        song:"红豆",
        singer:"王菲",
        src:"music/王菲 - 红豆.mp3",
        img:'img/cover/王菲.jpg'
    },
    {
        song:"旋木",
        singer:"王菲",
        src:"music/王菲 - 旋木.mp3",
        img:'img/cover/王菲.jpg'
    },
    {
        song:"一次就好",
        singer:"杨宗纬",
        src:"music/杨宗纬 - 一次就好.mp3",
        img:'img/cover/杨宗纬.jpg'
    }
];
var myAudio=document.getElementById('audio');
var oDisk=document.querySelector('.disk');
var oMusicImg=document.querySelector('.music-img');
var oSong=document.querySelector('.song');
var oSinger=document.querySelector('.singer');
var oProcessAll=document.querySelector('.process-all');
var oProcessCur=document.querySelector('.process-cur');
var oCur1Btn=document.querySelector('.cur1-btn');
var oCycleBtn=document.querySelector('.cycle-btn');
var oPrevBtn=document.querySelector('.prev-btn');
var oPlayBtn=document.querySelector('.play-btn');
var oNextBtn=document.querySelector('.next-btn');
var oRandomBtn=document.querySelector('.random-btn');
var oVoiceMin=document.querySelector('.voice-min');
var oVoiceMax=document.querySelector('.voice-max');
var oVoiceAll=document.querySelector('.voice-all');
var oVoiceCur=document.querySelector('.voice-cur');
var oCur2Btn=document.querySelector('.cur2-btn');
var ifPlaying=false;
var ifLoop=true;
var ifEnd=false;
var n=0;
var disX1=0;
var disX2=0;
var timer=null;
// 初始化界面
init(0);
initVolume(0.5);
// 播放按钮点击事件
oPlayBtn.addEventListener('touchend',function(){
    if(!ifPlaying){
        isPlaying();
        timer=setInterval(curPosition,1000);
    }else{
        isPaused();  
        clearInterval(timer); 
    }  
    ifPlaying=!ifPlaying;
});
// 上一曲按钮
oPrevBtn.addEventListener('touchend',function(){
    n--;
    if(n<0){
        n=data.length-1;
    }
    init(n);
    if(!ifPlaying){
        myAudio.pause();
    }else{
        isPlaying();
    }  
});
// 下一曲按钮
oNextBtn.addEventListener('touchend',function(){ 
    nextSong();
});
function nextSong(){
    n++;
    if(n>data.length-1){
        n=0;
    }
    init(n);
    if(!ifPlaying){
        myAudio.pause();
    }else{
        isPlaying();
    }
}
// 循环/单曲按钮
oCycleBtn.addEventListener('touchend',function(){
    if(ifLoop){   
        this.style.backgroundImage='url(./img/11.png)';
    }else{
        this.style.backgroundImage='url(./img/1.png)';
    }
    ifLoop=!ifLoop;
});
// 静音按钮
oVoiceMin.addEventListener('touchend',function(){
    myAudio.muted=true;
    initVolume(0);
});
// 最大音量按钮
oVoiceMax.addEventListener('touchend',function(){
    myAudio.muted=false;
    initVolume(1);
});
// 歌曲播放状态
function isPlaying(){
    myAudio.play();
    oPlayBtn.style.backgroundImage='url(./img/p2.png)';
    animateRunning();
    // timer=setInterval(curPosition,1000);
}
// 歌曲暂停状态
function isPaused(){
    myAudio.pause();
    oPlayBtn.style.backgroundImage='url(./img/p1.png)';
    animatePaused();
    // clearInterval(timer);
}
// 初始化界面
function init(n){
    oSong.innerHTML=data[n].song;
    oSinger.innerHTML=data[n].singer;
    myAudio.src=data[n].src;
    oMusicImg.style.backgroundImage='url('+data[n].img+')';
}
// 唱片静止
function animatePaused(){
    oDisk.style.animationPlayState='paused';
    oDisk.style.webkitAnimationPlayState='paused';
}
// 唱片转动
function animateRunning(){
    oDisk.style.animationPlayState='running';
    oDisk.style.webkitAnimationPlayState='running';
}
// 进度条的拖拽
oCur1Btn.addEventListener('touchstart',function(e){
    var e=e||window.evevt;
    var touch = e.changedTouches[0];
    disX1=touch.clientX-oCur1Btn.offsetLeft;
    
    document.addEventListener('touchmove',touchMove);
    document.addEventListener('touchend',function(e){
        document.removeEventListener('touchmove',touchMove,false);
    });
});
// 进度条拖拽的touchmove函数
function touchMove(e){
    var e=e||window.evevt;
    var touch = e.changedTouches[0];
    var L=touch.clientX-disX1;
    if(L<0){
        L=0;
    }else if(L>oProcessAll.offsetWidth-oCur1Btn.offsetWidth){
        L=oProcessAll.offsetWidth-oCur1Btn.offsetWidth;
    }
    oCur1Btn.style.left=L+'px';
    var scale=L/(oProcessAll.offsetWidth-oCur1Btn.offsetWidth);
    oCur1Btn.style.left=scale*(oProcessAll.offsetWidth-oCur1Btn.offsetWidth)+'px';
    oProcessCur.style.width=scale*oProcessAll.offsetWidth+'px';
    myAudio.currentTime=scale*myAudio.duration;  
}
// 进度条按钮的位置
function curPosition(){
    var scale=myAudio.currentTime/myAudio.duration;
    oCur1Btn.style.left=scale*(oProcessAll.offsetWidth-oCur1Btn.offsetWidth)+'px';
    oProcessCur.style.width=scale*oProcessAll.offsetWidth+'px';
    ifEnd=myAudio.ended;
    ifEnding();    
}
// 音量的拖拽
oCur2Btn.addEventListener('touchstart',function(e){
    var e=e||window.evevt;
    var touch = e.changedTouches[0];
    disX2=touch.clientX-oCur2Btn.offsetLeft;
    myAudio.muted=false;
    document.addEventListener('touchmove',touchMoveVolume);
    document.addEventListener('touchend',function(e){
        document.removeEventListener('touchmove',touchMoveVolume,false);
    });
});
// 音量拖拽的touchmove函数
function touchMoveVolume(e){
    var e=e||window.evevt;
    var touch = e.changedTouches[0];
    var L=touch.clientX-disX2;
    if(L<0){
        L=0;
    }else if(L>oVoiceAll.offsetWidth-oCur2Btn.offsetWidth){
        L=oVoiceAll.offsetWidth-oCur2Btn.offsetWidth;
    }
    oCur2Btn.style.left=L+'px';
    var scale=L/(oVoiceAll.offsetWidth-oCur2Btn.offsetWidth);
    initVolume(scale);
}
// 声音初始化函数
function initVolume(scale){
    myAudio.volume=scale;
    oCur2Btn.style.left=scale*(oVoiceAll.offsetWidth-oCur2Btn.offsetWidth)+'px';
    oVoiceCur.style.width=scale*oVoiceAll.offsetWidth+'px';
}
// 判断歌曲结束后执行动作函数
function ifEnding(){
    if(ifEnd){
        prevN=n;
        if(ifLoop){
            init(n);
            nextSong();
        }else {
            init(prevN);
            myAudio.play();
        }
    }
}