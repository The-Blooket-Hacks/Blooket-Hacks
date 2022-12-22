function getStateNode(){
    for(let i of Object.keys(document.querySelector("#app>div>div"))){
        if(i.toString().includes("__reactEventHandlers")){
            for(let p of Object.values(document.querySelector("#app>div>div")[i].children.filter(n=>n))){
                if(p._owner&&p._owner.stateNode)return p._owner.stateNode
            }
        }
    }
}
window.setInterval(()=>{
    try{
        getStateNode().onAnswer(getStateNode().props.client.question.correctAnswers[0].toString());
    }catch {
        
    }
});
