function stopGlitch() {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.joke = false
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.dance = false
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.lol = false
}

window.setInterval(stopGlitch);
