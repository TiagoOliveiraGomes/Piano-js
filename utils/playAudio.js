function playAudio (audioKey) {
    let audio = document.querySelector(`audio[data-keyboard="${audioKey}"]`)
    audio.currentTime = 0
    audio.play()
}