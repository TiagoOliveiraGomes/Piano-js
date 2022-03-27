const keys = document.querySelectorAll(".pianoKey")

//Play notes
function playNote (event) {
    const audioKey = whatIsTheKey(event)
    let key = document.querySelector(`li[data-keyboard="${audioKey}"]`)
    if(canNotFoundKey(key))return 
    addClassPressedButton(key)
    playAudio(audioKey)
}

//Click with Mouse
keys.forEach(function(key){
    let button = key.querySelector("button")
    button.addEventListener("click", playNote)
})

//Keyboard type

window.addEventListener("keydown", playNote)
