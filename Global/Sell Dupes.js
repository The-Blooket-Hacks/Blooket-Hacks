// Blooket-Hacks  -  @ 2022 CrazyH & cph101

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
      var baseElement = document.createElement("div");
      for (var [blook, amount] of blooks) await axios.put("/api/users/sellblook", { name, blook, numSold: amount - 1 });
      var modal = `<form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase">Results:</div><div class="styles__holder___3CEfN-camelCase"><div class="styles__numRow___xh98F-camelCase" style="text-align:center;" font-size="25px"><strong>${Object.entries(blooks).map(([blook, amount]) => `${blook}    x${amount - 1}`).join(`<br />`)}</strong></div><div class="styles__buttonContainer___2EaVD-camelCase"><div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" id="cnclBtn" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: rgb(11, 194, 207);"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: rgb(11, 194, 207);">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;"></form>`;

      document.querySelector("#app > div > div").appendChild(baseElement);
      document.querySelector("#app > div > div").lastChild.classList.add("arts__modal___VpEAD-camelCase");
      document.querySelector("#app > div > div").lastChild.innerHTML = modal;
      document.getElementById("cnclBtn").addEventListener("click", function(){document.querySelector(`#app > div > div`).lastChild.remove()})
});
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
const original_open = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function () {
    if (!arguments[1].includes("suspend")) original_open.apply(this, arguments)
};
