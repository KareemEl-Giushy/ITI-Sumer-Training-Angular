let btns = document.getElementsByClassName("location-btn");

for(b of btns) {
    let id = b.getAttribute("kloc");
    b.onmouseover = () => {
        // console.log(id);
        document.getElementById(id).classList.add('checked');
    }

    b.onmouseout = () => {
        // console.log(id);
        document.getElementById(id).classList.remove("checked");
    }
}