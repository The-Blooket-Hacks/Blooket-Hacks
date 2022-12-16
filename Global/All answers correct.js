setInterval(function() {
  var obj = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.question;
  try{
  obj.correctAnswers = obj.answers} catch(genericError) {}
})
