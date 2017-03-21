/*
 * Created by kanghaiwei.
 */
/*背景宽度高度控制*/
function getbg() {
    var cw = document.body.clientWidth;
    var ch = document.body.clientHeight;
    var bg = document.querySelector('.bg img');
    bg.style.width = cw + "px";
    bg.style.height = ch + "px";
}
/*补00方法*/
function getZero(n) {
    var num = '';
    if (n < 10) {
        num = '00' + n;
    } else if (n < 100) {
        num = '0' + n;
    } else {
        num = n;
    }
    return num;
}
/*补0方法*/
function getZero_two(n) {
    var num = '';
    if (n < 10) {
        num = '0' + n;
    } else {
        num = n;
    }
    return num;
}
//获取当前日期
function getDate() {
    var nowDate = new Date();
    var date = nowDate.getFullYear() + "-" + (getZero_two(nowDate.getMonth() + 1)) + "-" + getZero_two(nowDate.getDate());
    return date;
}
//获取当前小时数
function getHours() {
    var myDate = new Date();
    var hours = myDate.getHours();      //获取当前小时数(0-23)
    return hours;
}
//错误弹出框
function createTips(con) {
    var tips = '<div class="tipscon">' + con;
    tips += '<div class="tipbtn" id="tipbtn">确定</div>';
    tips += '</div>';
    var tipsBox = $('<div class="tipsTwo"></div>');
    tipsBox.html(tips);
    $("body").append(tipsBox);
    var tipbtn = document.getElementById("tipbtn");
    tipbtn.onclick = function () {
        tipsBox.remove();
    };
    clearTimeout();
    setTimeout(function () {
        tipsBox.remove();
    }, 5000);
}
//分享提示框
function shareTips() {
    var tips = '<img src="images/coupons/jiantou.png">';
    tips += '<p>点击右上角，分享给好友</p>';
    var tipsBox = $('<div class="tipsTwo"></div>');
    tipsBox.html(tips);
    $("body").append(tipsBox);
    setTimeout(function () {
        tipsBox.remove();
    }, 10000);
}
//温馨提示框
function warmTips(con, num, img) {
    var tips = '<div class="tips fc">';
    tips += '<h2>温馨提示</h2>';
    tips += '<div class="line-two"></div>';
    tips += '<div class="title-bg"></div>';
    tips += '<section>';
    tips += '<p>' + con + '</p>';
    tips += '</section>';
    tips += '<div class="tips-btn fc">确定</div>';
    tips += '<img class="btn-img" src="' + img + '">';
    tips += '<div class="tips-icon"><img src="images/tips-icon.png" alt=""></div>';
    tips += '<img class="btn-img btn-active" src="">';
    tips += '</div>';
    var tipsBox = $('<div class="tips-box-b"></div>');
    tipsBox.html(tips);
    $("body").append(tipsBox);
    $('.tips-box-b').css('display', 'block');
    $('.tips-btn').tap(function () {
        $('.btn-active').attr('src',num);
        console.log($('.btn-active')[0].src);
        tipsBox.remove();
    });
}
//获取n,m两个数之间的随机整数
function getNum(n, m) {//
    var num = Math.round(Math.random() * (m - n) + n);
    return num;
}
//签文
var signAry = [
    {//平安健康
        name: ['第零一签', '第零二签', '第零三签', '第零四签', '第零五签'],
        paper: [
            '越活越年轻， 越长越俊俏。',
            '今年三十，明年二十八，永远都是一朵花。',
            '体壮如牛，貌美如花，能玩能睡，吃嘛嘛香。',
            '身体倍好，敢跟姚明单挑，爱和刘翔赛跑。',
            '身体天天都健康，心情时时都舒畅。'
        ]
    },
    {//爱情美满
        name: ['第零六签', '第零七签', '第零八签', '第零九签', '第十签'],
        paper: [
            '桃花朵朵开，好事快来到。',
            '老情人不老，新情人不跑，小情人不少。',
            '美女帅哥挤成团，人人都为你疯狂。',
            '甜甜蜜蜜小两口，恩恩爱爱共白头。',
            '茫茫人海无觅处，神仙眷侣在眼前。'
        ]
    },
    {//家人幸福
        name: ['第十一签 ', '第十二签', '第十三签', '第十四签', '第十五签'],
        paper: [
            '天天笑一笑，烦恼溜烟跑；家人抱一抱，生活有情调。',
            '幸福背后熊抱，快乐亲你嘴角，微笑代替烦恼。',
            '家人和和睦睦，朋友开开心心，人人喜气洋洋。',
            '父母长寿体康健，夫妻恩爱比蜜甜。',
            '老的小的身体壮，媳妇越长越漂亮。'
        ]
    },
    {//事业有成
        name: ['第十六签', '第十七签', '第十八签', '第十九签', '第二十签'],
        paper: [
            '开奥迪，穿迪奥，没事就吃奥利奥。',
            '钱多事少离家近，位高权重责任轻。',
            '老板看见你就笑，乌纱帽往你头上掉。',
            '事业正当午，工资不胜数，干活不辛苦。',
            '致富踏上万宝路，事业登上红塔山。'
        ]
    },
    {//财源滚滚
        name: ['第二十一签', '第二十二签', '第二十三签', '第二十四签', '第二十五签'],
        paper: [
            '家里出黄金，出门撞财神，上班就加薪。',
            '家有两朵姐妹花，一朵有钱花，一朵随便花。',
            '金银滚滚入家门，数钱数到手抽筋。',
            '富豪榜上排第一，风头赛过李嘉诚。',
            '新年财运旺，敢扶摔倒大妈，敢点青岛大虾。'
        ]
    },
    {//吉祥如意
        name: ['第二十六签', '第二十七签', '第二十八签', '二第十九签', '第三十签'],
        paper: [
            '办事处处顺，生活步步高，彩票期期中，好运天天交。',
            '百事可乐，万事芬达，天天娃哈哈。',
            '好运伴着你，财神跟着你，名车美女属于你。',
            '走上发财高速路，进入升迁快车道，到达幸福终点站。',
            '新年到，鸿运照，烦心事儿往边靠。'
        ]
    }
];
// 背景音乐
$('.music').on('touchstart', function () {
    var $musicControl = $(this),
        DOMbgMusic = document.getElementById('bgMusic');

    if ($musicControl.hasClass('music-off')) {
        DOMbgMusic.play();
        $musicControl.removeClass('music-off').addClass('music-on');
    } else {
        DOMbgMusic.pause();
        $musicControl.removeClass('music-on').addClass('music-off');
    }
});
//摇一摇音乐
function getMusic() {
    document.getElementById('audio').pause();
    document.getElementById('audio').play();
}
//判断方法
function judge() {
    //进入页面判断是否是第一次登陆
    if (localStorage.first) {
        localStorage.first = 1
    } else {
        localStorage.first = 0
    }
}
