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

$("#btn1").click(function () {
    $('html,body').animate({
            scrollTop: $("#peer_support").offset().top
        },
        'slow');
});

$("#btn2").click(function () {
    $('html,body').animate({
            scrollTop: $("#book_now").offset().top
        },
        'slow');
});

$(document).ready(function () {
    var controller = new ScrollMagic.Controller();
    var scene1 = new ScrollMagic.Scene({
            triggerElement: "container1"
        })
        .setClassToggle("#btn2", "comeup")
        .addTo(controller);
    var scene2 = new ScrollMagic.Scene({
            triggerElement: "container1"
        })
        .setClassToggle("#btn1", "comeup")
        .addTo(controller);
    var scene3 = new ScrollMagic.Scene({
            triggerElement: "container1"
        })
        .setClassToggle("#text1", "comeup")
        .addTo(controller);
    var scene4 = new ScrollMagic.Scene({
            triggerElement: "container1"
        })
        .setClassToggle("#text2", "comeup")
        .addTo(controller);
    var scene5 = new ScrollMagic.Scene({
            triggerElement: "#book_now"
        })
        .setClassToggle("#btn3", "comeup")
        .addTo(controller);
    var scene6 = new ScrollMagic.Scene({
            triggerElement: "#book_now"
        })
        .setClassToggle("#text4", "comeup")
        .addTo(controller);
    var scene7 = new ScrollMagic.Scene({
            triggerElement: "#book_now"
        })
        .setClassToggle("#text5", "comeup")
        .addTo(controller);
    var scene8 = new ScrollMagic.Scene({
            triggerElement: "#book_now"
        })
        .setClassToggle("#text6", "comeup")
        .addTo(controller);
    var scene9 = new ScrollMagic.Scene({
            triggerElement: "#peer_support"
        })
        .setClassToggle("#text3", "comeup")
        .addTo(controller);
    var scene8 = new ScrollMagic.Scene({
            triggerElement: "#peer_support"
        })
        .setClassToggle("#text3_1", "comeup")
        .addTo(controller);
    var scene8 = new ScrollMagic.Scene({
            triggerElement: "#peer_support"
        })
        .setClassToggle("#btn3_1", "comeup")
        .addTo(controller);
});