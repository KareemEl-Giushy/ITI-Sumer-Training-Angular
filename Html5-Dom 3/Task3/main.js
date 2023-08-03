
window.addEventListener('load', function () {
    // select video element : global
    myvideo = this.document.getElementById('myvideo');
    playpausebtn = this.document.getElementById('playpausebtn');
});//end of load
function playpausefun() {
    if (myvideo.paused) {
        myvideo.play();
        playpausebtn.value = "Pause";
    } else {
        myvideo.pause();
        playpausebtn.value = "Play";
    }
}
function changemediasize(e) {
    
    switch(e.value) {
        case "small":
            console.log("small");
            myvideo.width = 500;
            myvideo.height = 500;
            break;
        case "medium":
            myvideo.width = 600;
            myvideo.height = 600;
            break;
        case "large":
            myvideo.width = 700;
            myvideo.height = 700;
            break;
        case "fullscreen":
            myvideo.requestFullscreen();
            break;
        default:
    }
}
function mutefun() {
    if (myvideo.muted) {
        myvideo.muted = false;
    } else {
        myvideo.muted = true;
    }
}
function loopfun() {
    if (myvideo.loop) {
        myvideo.loop = false;
    } else {
        myvideo.loop = true;
    }
}
function changevolume(e) {
    myvideo.volume = e.target.value;
}
function changeseekbar(e) {
    // currentTime 
    myvideo.currentTime = myvideo.duration * e.target.value / 100;
}
function forwardfun() {
    // increae playbackrate
    myvideo.playbackRate++;
}
function backwardfun() {
    //decrease playbackrate
    myvideo.playbackRate--;
    if (myvideo.playbackRate <= 0)
        myvideo.playbackRate = 1;
}