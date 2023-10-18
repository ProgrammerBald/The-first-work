
var mainimg = document.getElementById("mainimg");//主页图片
var imgcode = 1;
var isrotate = false;

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
    window.location.href="character.html";
}
function gocontent(){
    window.location.href="sum.html";
}
