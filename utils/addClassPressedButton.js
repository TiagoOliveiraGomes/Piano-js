function addClassPressedButton (key) {
    key.classList.add("pianoKeyPressed")
    setTimeout(function () { 
        key.classList.remove('pianoKeyPressed');
    }, 250);
}