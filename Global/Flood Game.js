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
