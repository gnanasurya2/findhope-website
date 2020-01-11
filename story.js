$(document).ready(function () {
    console.log("hello")
    var controller = new ScrollMagic.Controller();
    var scene1 = new ScrollMagic.Scene({
            triggerElement: "#t1"
        })
        .setClassToggle("#content_box1", "content_box_ani")
        .addTo(controller);
    var scene2 = new ScrollMagic.Scene({
            triggerElement: "#t1"
        })
        .setClassToggle("#content_box2", "content_box_ani")
        .addTo(controller);
    var scene3 = new ScrollMagic.Scene({
            triggerElement: "#t1"
        })
        .setClassToggle("#content_box3", "content_box_ani")
        .addTo(controller);
});

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
var txt3 = "Stories , Symptoms & Tips";
var k = 0;
var speed = 50;

function addSymbols3() {
    document.getElementById("title3").innerHTML = document
        .getElementById("title3")
        .innerHTML.substr(
            0,
            document.getElementById("title3").innerHTML.length - 38
        );
}

function typeWriter3() {
    var symbols = ["*", "-", "$", "%", "?", "@"];
    if (k < txt3.length) {
        var sym = symbols[Math.floor(Math.random() * 5)];
        if (txt3.charAt(k) == "&" || (txt3.charAt(k) == "t" && k > 3)) {
            document.getElementById("title3").innerHTML +=
                '<span style="color: #eb4034;">' + txt3.charAt(k) + "</span>" + sym;
        } else {
            document.getElementById("title3").innerHTML += txt3.charAt(k) + sym;
        }

        document.getElementById("title3").innerHTML = document
            .getElementById("title3")
            .innerHTML.replace(
                sym,
                '<span style="color: #eb4034;">' + sym + "</span>"
            );
        k++;
        setTimeout(addSymbols3, speed);
        setTimeout(typeWriter3, speed);
    }
}