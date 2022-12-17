function checkPlayer(player) {
    var players = document.getElementsByTagName("div");
    if (player.isCheating == true) {
        for(var i=0;i<players.length;i++){

if(players[i].innerHTML == player.name){

players[i].parentNode.parentNode.style = "color:red;";
break;

}
    }
} else {
        for(var i=0;i<players.length;i++){

if(players[i].innerHTML == player.name){

players[i].parentNode.parentNode.style = "color:lightgreen;";
break;

}
    }
        
    }
}
function checkPlayers() {
Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.players.forEach(player => checkPlayer(player))
}

window.setInterval(checkPlayers)
