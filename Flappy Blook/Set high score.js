FlappyBirdBlookMiniGame = () => {
  let b = Object.values(document.querySelector("#phaser-bouncy"))[0].stateNode;
  return b[Object.keys(b).filter(a => a.includes("reactInternalInstance"))].return
}, (() => {
  let a = document.createElement("iframe");
  document.body.append(a), window.prompt = a.contentWindow.prompt.bind(window), a.remove()
})(), FlappyBirdBlookMiniGame().stateNode.setState({
  score: parseInt(prompt("What Do You Want To Be Your High Score??"))
})
