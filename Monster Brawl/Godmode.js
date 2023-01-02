function reactEventHandler() {
    let react = Object.values(document.querySelector("#body"))[0].stateNode;
    return react[Object.keys(react).filter(a => a.includes("reactInternalInstance"))].return.stateNode;
}

(() => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.alert = n.contentWindow.alert.bind(window);
    n.remove();
})();
damage = 1000000000000000000e10000000000;

dmgSetter = setInterval(() => {
    reactEventHandler().state.dmgArray.map(a => a.dmg = damage);
}, 1);

(function(){
function getStateNode(){
    for(let i of Object.keys(document.querySelector("#app>div>div"))){
        if(i.toString().includes("__reactEventHandlers")){
            for(let p of Object.values(document.querySelector("#app>div>div")[i].children.filter(n=>n))){
                if(p._owner&&p._owner.stateNode)return p._owner.stateNode
            }
        }
    }
}
function bypass(){
    let _bypass = document.createElement("iframe");
    _bypass.style.display = 'none';
    document.body.appendChild(_bypass);
    return {window: _bypass.contentWindow, document: _bypass.contentDocument}
}
function findByProp(prop,first=true){
const wp = Object.values(webpackJsonp.push([
        [], {
            ['']: (_, a, b) => {
                a.cache = b.c
            },
        },
        [
            ['']
        ],
    ]).cache);
if(first){
    return wp.find((x)=>x.exports&&x.exports.a&&x.exports.a[prop]).exports.a;
}else{
    return wp.filter(x=>x.exports?.a&&x.exports?.a[prop]).map(n=>n.exports.a)
}
}
window.setInterval(()=>getStateNode().state.game.scene.children.list.filter(x=>x.dmg&&x.hp).map(e=>e.dmg=0));
})();
