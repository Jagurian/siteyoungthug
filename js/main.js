var aud = document.getElementById("aud");
var back_img =document.getElementById("back_img");

back_img.onclick = function(){
    if(aud.paused){
        aud.play();
        back_img.src ="../images/logoyt.png";
    }else{
        aud.pause();
        back_img.src ="../images/logoyt.png"; 
    }
}


function videoUrl(xddd){
    document.getElementById("slider").src = xddd;
}


