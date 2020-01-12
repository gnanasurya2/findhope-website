function openMenu() {
    document.getElementById("menuButton").classList.add("menu__btn1");
}

function onclik() {
    if (document.getElementById("menu").style.visibility == "hidden") {
        document.getElementById("menu1").style.top = "-120vw";
        setTimeout(function () {
            document.getElementById("menu2").style.top = "-120vw";
        }, 200);
        setTimeout(function () {
            document.getElementById("menu").style.visibility = "visible";
        }, 200);
    } else {
        document.getElementById("menu1").style.top = "-250vw";
        setTimeout(function () {
            document.getElementById("menu2").style.top = "-250vw";
        }, 200);
        setTimeout(function () {
            document.getElementById("menu").style.visibility = "hidden";
        }, 200);
    }
}