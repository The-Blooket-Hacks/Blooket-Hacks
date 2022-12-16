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
}
