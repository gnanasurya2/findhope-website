var i = 0;
var txt = "Improving student wellbeing";
var speed = 100;

function addSymbols() {
    document.getElementById('title').innerHTML = document.getElementById('title').innerHTML.substr(0, document.getElementById('title').innerHTML.length - 38);
}

function typeWriter() {
    var symbols = ['*', '-', '$', '%', '?', '@'];
    console.log(txt);
    if (i < txt.length) {

        var sym = symbols[Math.floor(Math.random() * 5)];
        if (txt.charAt(i) == 'o' || txt.charAt(i) == 'b') {
            document.getElementById('title').innerHTML += '<span style="color: #95FFD3;">' + txt.charAt(i) + "</span>" + sym;
        } else {
            document.getElementById('title').innerHTML += txt.charAt(i) + sym;
        }

        document.getElementById('title').innerHTML = document.getElementById('title').innerHTML.replace(sym, '<span style="color: #95FFD3;">' + sym + '</span>');
        console.log(document.getElementById('title').innerHTML, i);
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
});