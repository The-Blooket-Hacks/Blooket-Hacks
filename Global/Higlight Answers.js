function highlightAns(answer) {
    document.getElementById(`answer${Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.question.answers.indexOf(answer)}`).children[0].style = "background-color: rgb(12, 176, 74);";
}
document.getElementById("answer0").children[0].style = "color: rgb(255, 255, 255);";
document.getElementById("answer1").children[0].style = "color: rgb(255, 255, 255);";
document.getElementById("answer2").children[0].style = "color: rgb(255, 255, 255);";
document.getElementById("answer3").children[0].style = "color: rgb(255, 255, 255);";
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.question.correctAnswers.forEach(answer => highlightAns(answer))
