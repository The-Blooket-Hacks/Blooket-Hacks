// Blooket-Hacks  -  @ 2022 CrazyH & cph101

if (console_msg("Get All Blooks")) {
if (window.location.pathname == "/blooks") {
    const ALL_BLOOKS = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find(x=>x.exports?.a?.toString().includes('"Rainbow Astronaut":')).exports.a.toString().split('"').filter((x, i) => i % 2 !== 0).filter(x=>!["Common", "Uncommon", "Rare", "Epic", "Legendary", "Chroma", "Mystical"].includes(x));
const allBlooks = ALL_BLOOKS.reduce((a,b)=> (a[b]=1,a),{});
const stateNode = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode

stateNode.setState({ blookData: allBlooks });
} else {
    function getStateNode() {
	for (var i of Object.keys(document.querySelector('#app > div > div'))) {
		if (i.toString().includes('__reactEventHandlers')) {
			for (var j of Object.values(document.querySelector("#app > div > div")[i].children.filter(n => n))) {
				if (j._owner && j._owner.stateNode) {
					return j._owner.stateNode;
				}
			}
		}
	}
    }

function findByProp(find) {
	return Object.values(webpackJsonp.push([
			[],
			{
				['']: (_, a, b) => {
					a.cache = b.c;
				}
			},
			[
				['']
			],
		]).cache)
		.find((x) => {
			if (x.exports && x.exports.a && x.exports.a[find]) {
				return x.exports.a;
			}
		})
		.exports.a;
}
getStateNode().state.unlocks = Object.keys(findByProp("UFO"));
getStateNode().forceUpdate();
window.setInterval(function(){
    Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.takenBlooks = []
})
}
}

// Console Message Code
function console_msg(file, state) {
   if (!state) {
       if (window.location.host === "play.blooket.com" || window.location.host === "dashboard.blooket.com") {
           console_msg(file, true);
           return true;
       } else if (window.location.host === "www.blooket.com" || window.location.host === "id.blooket.com") {
           console_msg(file, "Please run this hack on the dashboard or in a game");
           return;
       } else {
           console_msg(file, "Please run this hack on blooket");
           return;
       }
   } else {
       console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"); // Spacing: 60
       var style = 'color: yellow; -webkit-text-stroke: 1px black; font-size:30px;';
       console.info('%c📁 Loaded: '+file+'.js\n', style );
       console.group("📣 Blooket Hacks By cph101 & CrazyH - Announcement 📣"); // Open Console Group
       var style = 'color: tomato; -webkit-text-stroke: 1px black; font-size:30px;';
       console.info('%c👋🏻 Hi, We are Happy to have you as one of our users', style );
       var style = 'color: blue; -webkit-text-stroke: 1px black; font-size:30px;';
       console.info('%c⭐️ Please star our Github repo', style );
       if (state === true) {
           var style = 'color: green; -webkit-text-stroke: 1px black; font-size:30px;';
           console.info('%c✅ Hack Successfully Enabled', style );
       } else {
           var style = 'color: red; -webkit-text-stroke: 1px black; font-size:30px;';
           console.info('%c❌ Failed To Enable Hack', style );
       }
       console.groupEnd(); // Close Console Group
       if (state != true) alert(state);
}};
