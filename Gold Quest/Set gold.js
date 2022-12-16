var obj = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state;
let a = document.createElement("iframe");
document.body.append(a);
window.prompt = a.contentWindow.prompt.bind(window);
a.remove();
amount = prompt("How much gold?");
obj.gold = amount;
obj.gold2 = amount;
