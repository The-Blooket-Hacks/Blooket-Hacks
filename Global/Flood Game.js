// Blooket-Hacks  -  @ 2022 CrazyH & cph101

if (console_msg("Flood Game")) {

//new blooket api has rate limit so it's hard to make a flood thing.
function getStateNode() {
	for (let i of Object.keys(document.querySelector("#app>div>div"))) {
		if (i.toString().includes("__reactEventHandlers")) {
			for (let p of Object.values(
				document
					.querySelector("#app>div>div")
					[i].children.filter((n) => n)
			)) {
				if (p._owner && p._owner.stateNode) return p._owner.stateNode;
			}
		}
	}
}
function bypass() {
	let _bypass = document.createElement("iframe");
	_bypass.style.display = "none";
	document.body.appendChild(_bypass);
	return {
		window: _bypass.contentWindow,
		document: _bypass.contentDocument,
	};
}
function findByProp(p) {
	return Object.values(
		webpackJsonp.push([
			[],
			{
				[""]: (_, a, b) => {
					a.cache = b.c;
				},
			},
			[[""]],
		]).cache
	).find((x) => {
		if (x.exports && x.exports.a && x.exports.a[p]) return x.exports.a;
	}).exports.a;
}
let gameId = bypass().window.prompt("Game Id / Enter nothing for this game");
let playerName = bypass().window.prompt("Player Name?");

for (let i = 0; i < 420; i++) {
	getStateNode().props.liveGameController.joinGame(
		gameId || getStateNode().props.liveGameController._liveGameCode,
		playerName
	);
}
}

// Console Message Code
function console_msg(file, state) {
   if (!state) {
       if (window.location.href.indexOf("blooket.com") > -1 && window.location.host !== "www.blooket.com" && window.location.host !== "id.blooket.com") {
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
