// Blooket-Hacks  -  @ 2022 CrazyH & cph101

var path = "Global/Get All Blooks.js";
var isBookmarklet = false;
var version = 4;

fetch(`https://dashboard.blooket.com/api/games?gameId=63cd4b98920462549dc27971`)
	.then((response) => response.json())
	.then((data) => {
		for (let questionIndex = 0; questionIndex < data.questions.length; questionIndex++) {
			if (data.questions[questionIndex].question == path) {
				if (parseInt(data.questions[questionIndex].correctAnswers[0]) > version) {
					var baseElement = document.createElement("div");
					var modal = `<form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase"><div><div class="__react_component_tooltip t297e99a3-e9f3-4212-af96-a9496d33840e place-left type-dark allow_click" id="t297e99a3-e9f3-4212-af96-a9496d33840e" data-id="tooltip"><style aria-hidden="true">
  	.t297e99a3-e9f3-4212-af96-a9496d33840e {
	    color: #fff;
	    background: #222;
	    border: 1px solid transparent;
	    border-radius: undefinedpx;
	    padding: 8px 21px;
  	}

  	.t297e99a3-e9f3-4212-af96-a9496d33840e.place-top {
        margin-top: -10px;
    }
    .t297e99a3-e9f3-4212-af96-a9496d33840e.place-top::before {
        content: "";
        background-color: inherit;
        position: absolute;
        z-index: 2;
        width: 20px;
        height: 12px;
    }
    .t297e99a3-e9f3-4212-af96-a9496d33840e.place-top::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-top-right-radius: undefinedpx;
        border: 1px solid transparent;
        background-color: #222;
        z-index: -2;
        bottom: -6px;
        left: 50%;
        margin-left: -6px;
        transform: rotate(135deg);
    }

    .t297e99a3-e9f3-4212-af96-a9496d33840e.place-bottom {
        margin-top: 10px;
    }
    .t297e99a3-e9f3-4212-af96-a9496d33840e.place-bottom::before {
        content: "";
        background-color: inherit;
        position: absolute;
        z-index: -1;
        width: 18px;
        height: 10px;
    }
    .t297e99a3-e9f3-4212-af96-a9496d33840e.place-bottom::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-top-right-radius: undefinedpx;
        border: 1px solid transparent;
        background-color: #222;
        z-index: -2;
        top: -6px;
        left: 50%;
        margin-left: -6px;
        transform: rotate(45deg);
    }

    .t297e99a3-e9f3-4212-af96-a9496d33840e.place-left {
        margin-left: -10px;
    }
    .t297e99a3-e9f3-4212-af96-a9496d33840e.place-left::before {
        content: "";
        background-color: inherit;
        position: absolute;
        z-index: -1;
        width: 10px;
        height: 18px;
    }
    .t297e99a3-e9f3-4212-af96-a9496d33840e.place-left::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-top-right-radius: undefinedpx;
        border: 1px solid transparent;
        background-color: #222;
        z-index: -2;
        right: -6px;
        top: 50%;
        margin-top: -6px;
        transform: rotate(45deg);
    }

    .t297e99a3-e9f3-4212-af96-a9496d33840e.place-right {
        margin-left: 10px;
    }
    .t297e99a3-e9f3-4212-af96-a9496d33840e.place-right::before {
        content: "";
        background-color: inherit;
        position: absolute;
        z-index: -1;
        width: 10px;
        height: 18px;
    }
    .t297e99a3-e9f3-4212-af96-a9496d33840e.place-right::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-top-right-radius: undefinedpx;
        border: 1px solid transparent;
        background-color: #222;
        z-index: -2;
        left: -6px;
        top: 50%;
        margin-top: -6px;
        transform: rotate(-135deg);
    }
  </style></div>This hack is outdated or bugged: Please use the updated version.</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div id="confirmButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: rgb(11, 194, 207);"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: rgb(11, 194, 207);">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;"></form>`;

					document
						.querySelector("#app > div > div")
						.appendChild(baseElement);
					document
						.querySelector("#app > div > div")
						.lastChild.classList.add(
							"arts__modal___VpEAD-camelCase"
						);
					document.querySelector(
						"#app > div > div"
					).lastChild.innerHTML = modal;
					if (isBookmarklet == true) {
						var branch = "bookmarklets";
					} else {
						var branch = "main";
					}
					document
						.getElementById("confirmButton")
						.addEventListener("click", function () {
							document
								.querySelector("#app > div > div")
								.lastChild.remove();
							window.open(`https://github.com/Blooket-Cheats/Blooket-Hacks/blob/${branch}/${encodeURI(
								path
							)}`);
						});
				} else {
					if (console_msg("Get All Blooks")) {
						if (window.location.pathname == "/blooks") {
							const ALL_BLOOKS = Object.values(
								webpackJsonp.push([
									[],
									{
										[""]: (_, a, b) => {
											a.cache = b.c;
										},
									},
									[[""]],
								]).cache
							)
								.find((x) =>
									x.exports?.a
										?.toString()
										.includes('"Rainbow Astronaut":')
								)
								.exports.a.toString()
								.split('"')
								.filter((x, i) => i % 2 !== 0)
								.filter(
									(x) =>
										![
											"Common",
											"Uncommon",
											"Rare",
											"Epic",
											"Legendary",
											"Chroma",
											"Mystical",
										].includes(x)
								);
							const allBlooks = ALL_BLOOKS.reduce(
								(a, b) => ((a[b] = 1), a),
								{}
							);
							const stateNode = Object.values(
								document.querySelector("#app > div > div")
							)[1].children[0]._owner.stateNode;

							stateNode.setState({ blookData: allBlooks });
							var myDivs = document.getElementsByTagName("div");

							for (var i = 0; i < myDivs.length; i++) {
								if (myDivs[i].innerHTML == "Show Free Blooks") {
									myDivs[i].click();
									myDivs[i].click();
								}
							}
						} else {
							function getStateNode() {
								for (var i of Object.keys(
									document.querySelector("#app > div > div")
								)) {
									if (
										i
											.toString()
											.includes("__reactEventHandlers")
									) {
										for (var j of Object.values(
											document
												.querySelector(
													"#app > div > div"
												)
												[i].children.filter((n) => n)
										)) {
											if (
												j._owner &&
												j._owner.stateNode
											) {
												return j._owner.stateNode;
											}
										}
									}
								}
							}

							function findByProp(find) {
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
									if (
										x.exports &&
										x.exports.a &&
										x.exports.a[find]
									) {
										return x.exports.a;
									}
								}).exports.a;
							}
							getStateNode().state.unlocks = Object.keys(
								findByProp("UFO")
							);
							getStateNode().forceUpdate();
							window.setInterval(function () {
								Object.values(
									document.querySelector("#app > div > div")
								)[1].children[0]._owner.stateNode.state.takenBlooks =
									[];
							});
						}
					}

					// Console Message Code
					function console_msg(file, state) {
						if (!state) {
							if (
								window.location.href.indexOf("blooket.com") >
									-1 &&
								window.location.host !== "www.blooket.com" &&
								window.location.host !== "id.blooket.com"
							) {
								console_msg(file, true);
								return true;
							} else if (
								window.location.host === "www.blooket.com" ||
								window.location.host === "id.blooket.com"
							) {
								console_msg(
									file,
									"Please run this hack on the dashboard or in a game"
								);
								return;
							} else {
								console_msg(
									file,
									"Please run this hack on blooket"
								);
								return;
							}
						} else {
							console.log(
								"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
							); // Spacing: 60
							var style =
								"color: yellow; -webkit-text-stroke: 1px black; font-size:30px;";
							console.info(
								"%c📁 Loaded: " + file + ".js\n",
								style
							);
							console.group(
								"📣 Blooket Hacks By cph101 & CrazyH - Announcement 📣"
							); // Open Console Group
							var style =
								"color: tomato; -webkit-text-stroke: 1px black; font-size:30px;";
							console.info(
								"%c👋🏻 Hi, We are Happy to have you as one of our users",
								style
							);
							var style =
								"color: blue; -webkit-text-stroke: 1px black; font-size:30px;";
							console.info(
								"%c⭐️ Please star our Github repo",
								style
							);
							if (state === true) {
								var style =
									"color: green; -webkit-text-stroke: 1px black; font-size:30px;";
								console.info(
									"%c✅ Hack Successfully Enabled",
									style
								);
							} else {
								var style =
									"color: red; -webkit-text-stroke: 1px black; font-size:30px;";
								console.info(
									"%c❌ Failed To Enable Hack",
									style
								);
							}
							console.groupEnd(); // Close Console Group
							if (state != true) alert(state);
						}
					}
				}
			}
		}
	});
