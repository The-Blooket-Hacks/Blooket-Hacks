// Blooket-Hacks  -  @ 2022 CrazyH & cph101

if (console_msg("Custom Blooks")) {
var iframe = document.createElement('iframe');
iframe.style.display = 'none';
document.body.appendChild(iframe);
window.alert = iframe.contentWindow.alert;
window.prompt = iframe.contentWindow.prompt;

var blook1 = prompt("Enter blook code 1. (Nothing for blank):", "0#46#13#16#14$0#39#32#4#8#3#4$0");
var blook2 = prompt("Enter blook code 2. (Nothing for blank):", "0#46#13#16#14$0#39#32#4#8#3#4$0");
var blook3 = prompt("Enter blook code 3. (Nothing for blank):", "0#46#13#16#14$0#39#32#4#8#3#4$0");
var blook4 = prompt("Enter blook code 4. (Nothing for blank):", "0#46#13#16#14$0#39#32#4#8#3#4$0");
var blook5 = prompt("Enter blook code 5. (Nothing for blank):", "0#46#13#16#14$0#39#32#4#8#3#4$0");

Object.values(document.querySelector('#app > div > div'))[1].children[1]['_owner'].stateNode.state.customBlooks = [
	blook1,
	blook2,
	blook3,
	blook4,
	blook5
];
Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.forceUpdate();

alert("Set custom blooks!");
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
