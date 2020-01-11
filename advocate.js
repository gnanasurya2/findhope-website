function advocatesLoader() {
    console.log("hello");
    for (var i = 0; i < 39; i++) {
        var container = document.createElement("div");
        var image = document.createElement('img');
        image.setAttribute('src', './8983.jpg');
        image.classList.add('advocate_image');
        container.classList.add('container');
        var advocate_text = document.createElement("p");
        advocate_text.classList.add('advocate_text');
        advocate_text.innerHTML = "Gnana surya" + "<br>" + "NIT Agartala";
        container.appendChild(image);
        container.appendChild(advocate_text);
        document.getElementById('container_box').appendChild(container);
    }
}