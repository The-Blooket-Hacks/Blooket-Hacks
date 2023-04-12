// Blooket-Hacks  -  @ 2022 CrazyH & cph101

if (console_msg("Add rewards")) {
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
  axios.post("https://play.blooket.com/api/playersessions/solo", { gameMode: "Factory" }).then(session => {
    axios.get("https://play.blooket.com/api/users/me").then(blooket => {
      axios.put("https://play.blooket.com/api/users/add-rewards", {
        t: session.data.t,
        name: blooket.data.name,
        addedTokens: 500,
        addedXp: 300
      })
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
  alert("Tokens Remaining: " + obj.tokensAvailable + "\nXp Remaining: " + obj.xpAvailable + "")
} else {
  let n = document.createElement('iframe');
  document.body.append(n);
  window.alert = n.contentWindow.alert.bind(window);
  n.remove();
  setTimeout(alert('You are being redirected to the correct page, once you are there, re-run this script'), window.location = 'https://play.blooket.com/play', 1000)
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
