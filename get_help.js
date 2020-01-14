$(document).ready(function () {
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
  $("html,body").animate({
      scrollTop: $("#book_now").offset().top
    },
    "slow"
  );
});

$("#btn2").click(function () {
  $("html,body").animate({
      scrollTop: $("#peer_support").offset().top
    },
    "slow"
  );
});

$(document).ready(function () {
  var controller = new ScrollMagic.Controller();
  var scene0 = new ScrollMagic.Scene({
      triggerElement: "container1"
    })
    .setClassToggle("#text1_1", "comeup")
    .addTo(controller);
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
  var scene9 = new ScrollMagic.Scene({
      triggerElement: "#peer_support"
    })
    .setClassToggle("#btn3_1", "comeup")
    .addTo(controller);
  var scene10 = new ScrollMagic.Scene({
      triggerElement: "#book_now"
    })
    .setClassToggle("#c", "comeup")
    .addTo(controller);
  var scene11 = new ScrollMagic.Scene({
      triggerElement: "#book_now"
    })
    .setClassToggle("#f", "comeup")
    .addTo(controller);
  var scene12 = new ScrollMagic.Scene({
      triggerElement: "#book_now"
    })
    .setClassToggle("#u", "comeup")
    .addTo(controller);
});

var symbols = ["*", "#", "%", "&", "?", "@"];
var speed = 2000;
setInterval(whole_c, speed);

function whole_c() {
  var i = 0;
  var timer_c = setInterval(type_c, 90);

  function type_c() {
    if (i < 5) {
      var sym = symbols[Math.floor(Math.random() * 6)];
      document.getElementById("c").textContent = sym;
      i++;
    } else {
      clearInterval(timer_c);
      timer_c = null;
      document.getElementById("c").textContent = "C";
    }
  }
}
setInterval(whole_u, speed);

function whole_u() {
  var j = 0;
  var timer_u = setInterval(type_u, 90);

  function type_u() {
    if (j < 5) {
      var sym = symbols[Math.floor(Math.random() * 6)];
      document.getElementById("u").textContent = sym;
      j++;
    } else {
      clearInterval(timer_u);
      timer_u = null;
      document.getElementById("u").textContent = "U";
    }
  }
}
setInterval(whole_f, speed);

function whole_f() {
  var k = 0;
  var timer_f = setInterval(type_f, 90);

  function type_f() {
    if (k < 5) {
      var sym = symbols[Math.floor(Math.random() * 6)];
      document.getElementById("f").innerHTML = sym;
      k++;
    } else {
      clearInterval(timer_f);
      timer_f = null;
      document.getElementById("f").textContent = "F";
    }
  }
}