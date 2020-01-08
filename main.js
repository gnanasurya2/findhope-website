var i = 0;
var txt = "Improving student wellbeing";
var speed = 100;

function addSymbols() {
    document.getElementById('title').innerHTML = document.getElementById('title').innerHTML.substr(0, document.getElementById('title').innerHTML.length - 38);
}

function typeWriter() {
    var symbols = ['*', '-', '$', '%', '?', '@'];
    if (i < txt.length) {

        var sym = symbols[Math.floor(Math.random() * 5)];
        if (txt.charAt(i) == 'o' || txt.charAt(i) == 'b') {
            document.getElementById('title').innerHTML += '<span style="color: #95FFD3;">' + txt.charAt(i) + "</span>" + sym;
        } else {
            document.getElementById('title').innerHTML += txt.charAt(i) + sym;
        }

        document.getElementById('title').innerHTML = document.getElementById('title').innerHTML.replace(sym, '<span style="color: #95FFD3;">' + sym + '</span>');
        i++;
        setTimeout(addSymbols, speed);
        setTimeout(typeWriter, speed);

    }
}
$(document).ready(function () {
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
        triggerElement: '#t1'
    }).on('start', function () {
        typeWriter();
    }).addTo(controller);
    var scene1 = new ScrollMagic.Scene({
        triggerElement: '#t1'
    }).setClassToggle('#box', 'boxani').addTo(controller);
});

function openMenu() {
    document.getElementById('menuButton').classList.add('menu__btn1');
}

function onclik() {
    if (document.getElementById('menu').style.visibility == 'hidden') {
        document.getElementById('menu1').style.top = '-120vw';
        setTimeout(function () {
            document.getElementById('menu2').style.top = '-120vw';
        }, 200);
        setTimeout(function () {
            document.getElementById('menu').style.visibility = 'visible';
        }, 200);

    } else {
        document.getElementById('menu1').style.top = '-250vw';
        setTimeout(function () {
            document.getElementById('menu2').style.top = '-250vw';
        }, 200);
        setTimeout(function () {
            document.getElementById('menu').style.visibility = 'hidden';
        }, 200);
    }
}