var i = 0;
var txt = "Improving student wellbeing";
var speed = 100;

function addSymbols() {
  document.getElementById("title").innerHTML = document
    .getElementById("title")
    .innerHTML.substr(
      0,
      document.getElementById("title").innerHTML.length - 38
    );
}

function typeWriter() {
  var symbols = ["*", "-", "$", "%", "?", "@"];
  if (i < txt.length) {
    var sym = symbols[Math.floor(Math.random() * 5)];
    if (txt.charAt(i) == "o" || txt.charAt(i) == "b") {
      document.getElementById("title").innerHTML +=
        '<span style="color: #95FFD3;">' + txt.charAt(i) + "</span>" + sym;
    } else {
      document.getElementById("title").innerHTML += txt.charAt(i) + sym;
    }

    document.getElementById("title").innerHTML = document
      .getElementById("title")
      .innerHTML.replace(
        sym,
        '<span style="color: #95FFD3;">' + sym + "</span>"
      );
    i++;
    setTimeout(addSymbols, speed);
    setTimeout(typeWriter, speed);
  }
}
var txt2 = "Awareness + Stigma";
var j = 0;

function addSymbols2() {
  document.getElementById("title2").innerHTML = document
    .getElementById("title2")
    .innerHTML.substr(
      0,
      document.getElementById("title2").innerHTML.length - 38
    );
}

function typeWriter2() {
  var symbols = ["*", "-", "$", "%", "?", "@"];
  if (j < txt2.length) {
    var sym = symbols[Math.floor(Math.random() * 5)];
    if (txt2.charAt(j) == "g" || txt2.charAt(j) == "+") {
      document.getElementById("title2").innerHTML +=
        '<span style="color: #a0c0ff;">' + txt2.charAt(j) + "</span>" + sym;
    } else {
      document.getElementById("title2").innerHTML += txt2.charAt(j) + sym;
    }

    document.getElementById("title2").innerHTML = document
      .getElementById("title2")
      .innerHTML.replace(
        sym,
        '<span style="color: #a0c0ff;">' + sym + "</span>"
      );
    j++;
    setTimeout(addSymbols2, speed);
    setTimeout(typeWriter2, speed);
  }
}

var txt3 = "Youth Advocates";
var k = 0;

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
    if (txt3.charAt(k) == "u" || txt3.charAt(k) == "e") {
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
$(document).ready(function () {
  var controller = new ScrollMagic.Controller();
  var scene1 = new ScrollMagic.Scene({
      triggerElement: "#t1"
    })
    .setClassToggle("#box", "boxani")
    .addTo(controller);
  var scene2 = new ScrollMagic.Scene({
      triggerElement: "#sec1"
    })
    .setClassToggle("#wave1", "wave21")
    .addTo(controller);
  var scene3 = new ScrollMagic.Scene({
      triggerElement: "#sec1"
    })
    .setClassToggle("#wave2", "wave21")
    .addTo(controller);
  var scene4 = new ScrollMagic.Scene({
      triggerElement: "#sec1"
    })
    .setClassToggle("#wave3", "wave21")
    .addTo(controller);
  var scene5 = new ScrollMagic.Scene({
      triggerElement: "#sec1"
    })
    .on("start", function () {
      typeWriter2();
    })
    .addTo(controller);
  var scene6 = new ScrollMagic.Scene({
      triggerElement: "#sec1"
    })
    .setClassToggle("#menu1", "bg1")
    .addTo(controller);
  var scene7 = new ScrollMagic.Scene({
      triggerElement: "#sec1"
    })
    .setClassToggle("#menu2", "bg1")
    .addTo(controller);
  var scene8 = new ScrollMagic.Scene({
      triggerElement: "#sec1"
    })
    .setClassToggle("#box2", "boxani")
    .addTo(controller);
  var scene9 = new ScrollMagic.Scene({
      triggerElement: "#sec1"
    })
    .setClassToggle("#head1", "head")
    .addTo(controller);
  var scene10 = new ScrollMagic.Scene({
      triggerElement: "#sec1"
    })
    .setClassToggle("#head2", "head")
    .addTo(controller);
  var scene11 = new ScrollMagic.Scene({
      triggerElement: "#sec2"
    })
    .setClassToggle("#wave1", "wave31")
    .addTo(controller);
  var scene12 = new ScrollMagic.Scene({
      triggerElement: "#sec2"
    })
    .setClassToggle("#wave2", "wave31")
    .addTo(controller);
  var scene13 = new ScrollMagic.Scene({
      triggerElement: "#sec2"
    })
    .setClassToggle("#wave3", "wave31")
    .addTo(controller);
  var scene14 = new ScrollMagic.Scene({
      triggerElement: "#sec2"
    })
    .setClassToggle("#menu1", "bg2")
    .addTo(controller);
  var scene15 = new ScrollMagic.Scene({
      triggerElement: "#sec2"
    })
    .setClassToggle("#menu2", "bg2")
    .addTo(controller);
  var scene16 = new ScrollMagic.Scene({
      triggerElement: "#sec2"
    })
    .on("start", function () {
      typeWriter3();
    })
    .addTo(controller);
  var scene17 = new ScrollMagic.Scene({
      triggerElement: "#sec2",
      reverse: false
    })
    .setClassToggle("#box3", "boxani")
    .addTo(controller);
  var scene18 = new ScrollMagic.Scene({
      triggerElement: "#but1",
      offset: 50,
      reverse: false
    })
    .setClassToggle("#img2", "img_ani")
    .addTo(controller);
  var scene19 = new ScrollMagic.Scene({
      triggerElement: "#but1",
      offset: 50,
      reverse: false
    })
    .setClassToggle("#img3", "img_ani")
    .addTo(controller);
  var scene20 = new ScrollMagic.Scene({
      triggerElement: "#but1",
      offset: 50,
      reverse: false
    })
    .setClassToggle("#img1", "img_ani")
    .addTo(controller);
  var scene21 = new ScrollMagic.Scene({
      triggerElement: "#img1"
    })
    .setClassToggle("#back", "backani")
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

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loader_div").style.display = "none";
  document.getElementById('heading').style.display = "flex";
  typeWriter();
}