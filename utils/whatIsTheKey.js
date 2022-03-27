function whatIsTheKey (event){
    let key
    const isKeyboardEvent = event.type === "keydown"
    if(isKeyboardEvent){
        key = event.key
    }else {
        key = event.target.dataset.keyboard
    }
    return key
}