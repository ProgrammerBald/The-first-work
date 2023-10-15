var musicplayer = document.getElementById("musicplayer");//音乐播放块
var bgm = document.getElementById("bgm");//背景音乐
var bgmname = document.getElementById("bgmname");//音乐名
var mainimg = document.getElementById("mainimg");//主页图片
var imgcode = 1;
var isrotate = false;
var musicinterval;
var a = 0;

//实现音乐切换
var musics = new Array("first kiss", "淡水海边", "父与子", "脚踏车", "路小雨", "小雨写立可白I", "早操", "小雨写立可白II");
var bgmcode = 0;

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
function gomusic(){
    window.location.href="https://www.kugou.com/mixsong/nziou3f.html?fromsearch=%E6%B7%A1%E6%B0%B4%E6%B5%B7%E8%BE%B9";
}
function gobaidu(){
    window.location.href="https://baike.baidu.com/item/%E4%B8%8D%E8%83%BD%E8%AF%B4%E7%9A%84%E7%A7%98%E5%AF%86/39267?fromModule=lemma_sense-layer#viewPageContent";
}
function godouban(){
    window.location.href="https://movie.douban.com/subject/2124724/";
}
function gomovie(){
    window.location.href="https://www.bhseed.com/vodplay/37230-1-1.html";
}
function gonext(){
    imgcode+=1;
    imgcode%=5;
    if(imgcode==0)imgcode=1;
    mainimg.src="image/"+imgcode+".jpg";
}
function gocharacter(){
    window.location.href="https://baike.baidu.com/lemmagraph/graphview?lemmaId=39267&featureId=65ce8531529c26d32f3eeb2b&classify=teleplay&fromModule=lemma_graph-tree";
}
function gobilibili(){
    window.location.href="https://www.bilibili.com/video/BV1ot411T7Rs/?spm_id_from=333.337.search-card.all.click&vd_source=36f346c12364d2c74bf365bfa2663331";
}