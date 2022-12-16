function highlightAns() { function makeRed(answerText) {
    var allDivs = document.getElementsByTagName("div");

for(var i=0;i<allDivs.length;i++){

if(mySpans[i].innerHTML == answerText){

mySpans[i].parentNode.parentNode.style = "background-color: rgb(242, 57, 65);";
break;

}

}
}

function makeGreen(answerText) {
    var allDivs = document.getElementsByTagName("div");

for(var i=0;i<allDivs.length;i++){

if(mySpans[i].innerHTML == answerText){

mySpans[i].parentNode.parentNode.style = "background-color: rgb(12, 176, 74);";
break;

}

}
}

Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.question.answers.forEach(text => makeRed(text))

Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.question.correctAnswers.forEach(text => makeGreen(text))  }


window.setInterval(highlightAns)
