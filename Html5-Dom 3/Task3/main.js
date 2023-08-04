
let myvideo = document.getElementById('myvideo');
let btns = document.querySelectorAll('button.card');

myvideo.ondblclick = () => {
    // console.log("heelo");
    myvideo.requestFullscreen();
}

btns.forEach((b) => {
    b.addEventListener("click", () => {
        btns.forEach((b) => { b.classList.remove('clicked'); });
        b.classList.add("clicked");
    });
});

document.onkeydown = (e) => {
    let _exists = false;
    btns.forEach((b) => { 
        if(b.classList.contains('clicked')){
            _exists = true;
            return;
        }
    });

    if(!_exists) {
        return;
    }
    
    if(e.code == "ArrowUp") {

        for(let i = btns.length - 1; i > 0; i--) {
            if(btns[i].classList.contains("clicked")) {
                btns[i].classList.remove("clicked");
                btns[i-1].classList.add("clicked");
                btns[i].parentNode.scrollBy(0, -25);
                return ;
            }        
        }

    } else if (e.code == "ArrowDown") {

        for(let i = 0; i < btns.length - 1; i++) {
            if(btns[i].classList.contains("clicked")) {
                btns[i].classList.remove("clicked");
                btns[i+1].classList.add("clicked");
                btns[i].parentNode.scrollBy(0, 25);
                return ;
            }
        }

    }
}