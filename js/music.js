var musicplayer = document.getElementById("musicplayer");//音乐播放块
var bgm = document.getElementById("bgm");//背景音乐
var bgmname = document.getElementById("bgmname");//音乐名
var isrotate = false;
var a = 0;

function backtomain(){
    window.location.href="index.html";
}
//实现音乐切换
var musics = new Array("first kiss", "淡水海边", "父与子", "脚踏车", "路小雨", "小雨写立可白I", "早操", "小雨写立可白II");
var bgmcode = 7;

function gonext(){
    imgcode+=1;
    imgcode%=5;
    if(imgcode==0)imgcode=1;
    mainimg.src="image/"+imgcode+".jpg";
}
setInterval(circlerotate,1);
setInterval(gonext,4000);
function circlerotate(){
    a+=0.1;
    musicplayer.style.transform="rotate("+a+"deg)";
}
function changebgm(){
    bgmcode+=1;
    bgmcode%=8;
    bgm.src="music/"+musics[bgmcode]+".mp3";
    bgmname.innerText=musics[bgmcode];
}
