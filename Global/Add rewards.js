if (0 == document.location.pathname.indexOf("/play")) {
  var obj = Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.state;
  const axios = Object.values(webpackJsonp.push([
    [], {
      ['']: (_, a, b) => {
        a.cache = b.c
      },
    },
    [
      ['']
    ],
  ]).cache).find((x) => x.exports ?.a?.put).exports.a;
  axios.get("https://dashboard.blooket.com/api/users/verify-session").then(a => {
    axios.put("https://play.blooket.com/api/users/add-rewards", {
      name: a.data.name,
      addedTokens: 500,
      addedXp: 300
    })
  });
  let a = document.createElement("iframe");
  document.body.append(a);
  window.alert = a.contentWindow.alert.bind(window);
  a.remove();
  if (obj.xpAvailable === undefined) {
    obj.xpAvailable = 0
  }
  if (obj.tokensAvailable === undefined) {
    obj.tokensAvailable = 0
  }
  alert("Tokens Remaining: " + obj.tokensAvailable + "\nXp Remaining: " + obj.xpAvailable + "\nMade By VirescentOverlord")
} else {
  let n = document.createElement('iframe');
  document.body.append(n);
  window.alert = n.contentWindow.alert.bind(window);
  n.remove();
  alert('You are being redirected to the correct page, once you are there, re-run this script');
  setTimeout(window.location = '/play', 1000)
}
