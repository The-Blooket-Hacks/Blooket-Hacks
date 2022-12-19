function makeQuestionSus() {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.question.answers = ["An Impostor", "An Impostor", "An Impostor", "An Impostor"];
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.question.correctAnswers = ["An Impostor", "An Impostor", "An Impostor", "An Impostor"];
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.question.text = "What is this?";
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.question.image = "https://media.blooket.com/image/upload/v1671304785/enqwowk4ubpdgyztjbmt.png";
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.forceUpdate()
}

window.setInterval(makeQuestionSus)
