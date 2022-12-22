if (console_msg("Sell Dupes")) {
let iframe = document.createElement('iframe');
document.body.append(iframe);
window.alert = iframe.contentWindow.alert.bind(window);
window.confirm = iframe.contentWindow.confirm.bind(window);
iframe.remove();
var axios = Object.values(webpackJsonp.push([
    [], {
        ['']: (_, a, b) => {
            a.cache = b.c
        },
    },
    [
        ['']
    ],
]).cache).find((x) => x.exports?.a?.get).exports.a;
axios.get("/api/users").then(async ({ data: { name, unlocks } }) => {
    let blooks = Object.entries(unlocks).filter(x => x[1] > 1);
      for (var [blook, amount] of blooks) await axios.put("/api/users/sellblook", { name, blook, numSold: amount - 1 });
      alert(`Sold Blooks: \n${blooks.map(([blook, amount]) => `- ${blook} ${amount - 1}`).join(`\n`)}`);
});
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
const original_open = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function () {
    if (!arguments[1].includes("suspend")) original_open.apply(this, arguments)
};
