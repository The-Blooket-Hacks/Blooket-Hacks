window.setInterval(function(){
  Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ hack: "" });
})
