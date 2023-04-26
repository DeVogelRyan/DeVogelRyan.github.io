window.onload = () => {

    var i = 0;
    var txt = "Hi there!";
    var speed = 200;

    function typeWriter(element, text) {
        if (i < text.length) {
            document.getElementById(`${element}`).innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed, element, text);
        }

    }
    setTimeout(typeWriter, speed, "typewriter-placeholder", txt);

}