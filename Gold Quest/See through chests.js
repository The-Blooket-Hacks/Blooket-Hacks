// Blooket-Hacks  -  @ 2022 CrazyH & cph101

if (console_msg("See Through Chests")) {
(async () => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();
            if (window.location.pathname != '/play/gold') {
                alert('You must be in a gold quest game!');
            } else {
                alert('Chest ESP enabled');

                interval = setInterval(() => {
                    if (window.location.pathname != '/play/gold') return clearInterval(interval);

                    data = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner.stateNode.state;

                    if (data?.stage == 'prize') {
                        boxes = data.choices;
                        choiceDiv = document.querySelector("div[class*='arts__regularBody']")?.children[1];
                        if (!choiceDiv) return clearInterval(interval)
                        if (!document.querySelector("p[class*='chest-esp']")) boxes.forEach((box, i) => {
                            textElement = document.createElement('p');
                            textElement.className = "chest-esp";
                            textElement.innerText = box.text;
                            textElement.style = `text-align: center;
                                font-size: 30px;
                                color: white;
                                font-family:Titan One;
                                sans-serif;
                                -webkit-user-select:none;
                                -moz-user-select:none;
                                -ms-user-select:none;
                                user-select:none;
                                border-color: black;
                                margin-top: 200px;`
                            try { choiceDiv.children[i].appendChild(textElement); } catch (e) {
                                if (confirm('An error occured, would you like to report this in the support discord server?')) {
                                    window.open('https://glizzers.xyz/discord');
                                };
                            };
                        });

                        else boxes.forEach((box, i) => {
                            if (choiceDiv.children.length == 3 && choiceDiv.children[i].children[1].innerText != box.text) choiceDiv.children[i].children[1].innerText = box.text;
                        });
                    };

                    if (window.location.pathname != '/play/gold') clearInterval(interval)

                }, 0);
            };
})();
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
