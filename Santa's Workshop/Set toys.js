let a = document.createElement("iframe");
document.body.append(a);
window.prompt = a.contentWindow.prompt.bind(window);
a.remove();
amount = prompt("How many toys?");
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({toys: amount});
