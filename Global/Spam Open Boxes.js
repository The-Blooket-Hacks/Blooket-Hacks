// Blooket-Hacks  -  @ 2022 CrazyH & cph101

if (console_msg("Spam Open Boxes")) {
var axios = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find((x) => x.exports?.a?.get).exports.a;
let prices = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find(x => x?.exports?.a?.Safari).exports.a || {
        Medieval: 15,
        Breakfast: 15,
        Wonderland: 15,
        Space: 20,
        Bot: 20,
        Aquatic: 20,
        Safari: 20,
        Dino: 25,
        "Ice Monster": 25
    };;
var packPrice;
var baseElement = document.createElement("div");
var modal = `<form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase">Which pack do you want to open?</div><div class="styles__holder___3CEfN-camelCase"><div class="styles__numRow___xh98F-camelCase"><div class="styles__inputContainer___2Fn7J-camelCase styles__inputFilled___3AmpF-camelCase" style="width: 220px; margin: 0px;"><input id="packName" class="styles__input___2vJSW-camelCase" placeholder="e.g. Aquatic" value="" style="width: 200px; height: 30px; transform:translate(0, 2px); text-align:center;"></div></div><div class="styles__buttonContainer___2EaVD-camelCase"><div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" id="cnclBtn" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: rgb(11, 194, 207);"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: rgb(11, 194, 207);">Cancel</div></div><div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" id="confirmBtn" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: rgb(11, 194, 207);"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: rgb(11, 194, 207);">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;"></form>`;

async function stepThree(amount, axios, box, name) {
let blooks = {};
    let now = Date.now();
    let error = false;
	console.log(amount)
    for (let i = 1; i <= amount; i++) { await axios.put("https://dashboard.blooket.com/api/users/unlockblook", { name, box }).then(({ data: { unlockedBlook, tokens, isNewBlook } }) => {
            blooks[unlockedBlook] ||= 0;
            blooks[unlockedBlook]++;

            let before = Date.now();

            if (alertBlooks) alert(`${unlockedBlook} (${i + 1}/${amount}) ${isNewBlook ? "NEW! " : ''}${tokens} tokens left`);

            now += Date.now() - before;
        }).catch(e => error = true);
        if (error) break;
    }
var modal = `<form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase">Results:</div><div class="styles__holder___3CEfN-camelCase"><div class="styles__numRow___xh98F-camelCase" style="text-align:center;">${Object.entries(blooks).map(([blook, amount]) => `    ${blook} ${amount}`).join(`\n`)}</div><div class="styles__buttonContainer___2EaVD-camelCase"><div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" id="cnclBtn" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: rgb(11, 194, 207);"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: rgb(11, 194, 207);">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;"></form>`;

document.querySelector("#app > div > div").appendChild(baseElement);
document.querySelector("#app > div > div").lastChild.classList.add("arts__modal___VpEAD-camelCase");
document.querySelector("#app > div > div").lastChild.innerHTML = modal;
document.getElementById("cnclBtn").addEventListener("click", function(){document.querySelector(`#app > div > div`).lastChild.remove()})
}


// var baseElement = document.createElement("div");
function stepTwo(pPrice, pName, axios) {
	axios.get("https://dashboard.blooket.com/api/users").then(async ({ data: { name, tokens } }) => {
var modal = `<form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase">How many packs do you want to open?</div><div class="styles__holder___3CEfN-camelCase"><div class="styles__numRow___xh98F-camelCase"><div class="styles__inputContainer___2Fn7J-camelCase styles__inputFilled___3AmpF-camelCase" style="width: 80px; margin: 0px;"><input id="boxAmount" class="styles__input___2vJSW-camelCase" placeholder="0" type="tel" value="${parseInt(String(tokens / pPrice).split(".")[0])}" max="${parseInt(String(1287 / pPrice).split(".")[0])}" min="1" style="width: 60px; height: 30px; transform:translate(0, 2px);"></div><div class="styles__numTotal___3LQaw-camelCase">/ ${String(tokens / pPrice).split(".")[0]}</div></div><div class="styles__buttonContainer___2EaVD-camelCase"><div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" id="cnclBtn" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: rgb(11, 194, 207);"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: rgb(11, 194, 207);">Cancel</div></div><div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" id="confirmBtn" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: rgb(11, 194, 207);"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: rgb(11, 194, 207);">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;"></form>`;


if (pPrice === null || pPrice === undefined) {
	modal = `<form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase">A \"${pName}\" pack does not exist</div><div class="styles__holder___3CEfN-camelCase"></div><div class="styles__buttonContainer___2EaVD-camelCase"><div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" id="cnclBtn" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: rgb(11, 194, 207);"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: rgb(11, 194, 207);">Okay :(</div></div></div></div></div><input type="submit" style="opacity: 0; display: none;"></form>`;
}

document.querySelector("#app > div > div").appendChild(baseElement);
document.querySelector("#app > div > div").lastChild.classList.add("arts__modal___VpEAD-camelCase");
document.querySelector("#app > div > div").lastChild.innerHTML = modal;
document.getElementById("cnclBtn").addEventListener("click", function(){document.querySelector(`#app > div > div`).lastChild.remove()})
document.getElementById("confirmBtn").addEventListener("click", function(){
	let packPrice = console.log(document.getElementById("boxAmount").value);
	stepThree(document.getElementById("boxAmount").value, axios, pName, name)
	})
})}
// Part 2
document.querySelector("#app > div > div").appendChild(baseElement);
document.querySelector("#app > div > div").lastChild.classList.add("arts__modal___VpEAD-camelCase");
document.querySelector("#app > div > div").lastChild.innerHTML = modal;
document.getElementById("cnclBtn").addEventListener("click", function(){document.querySelector(`#app > div > div`).lastChild.remove()})
document.getElementById("confirmBtn").addEventListener("click", function(){
	var packPrice = console.log(prices[document.getElementById("packName").value]);
	stepTwo(prices[document.getElementById("packName").value.replace("Ice Monsters", "Ice Monster")], document.getElementById("packName").value.replace("Ice Monsters", "Ice Monster"), axios)
})
XMLHttpRequest.prototype.open = function () {
    if (!arguments[1].includes("suspend")) original_open.apply(this, arguments)
};
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
