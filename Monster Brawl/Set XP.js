var obj = Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.state;
let a = document.createElement("iframe");
document.body.append(a);
window.prompt = a.contentWindow.prompt.bind(window);
a.style.frameBorder="none"
a.remove();
var level = prompt("How much XP?")
Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ "xp":Number(level)})
