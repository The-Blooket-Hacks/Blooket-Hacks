// Creating MorePack Object
window.morepacks = {};


// Load MorePacks Function
function loadMorePacks() {


// Checking If MorePacks Has Already Been Loaded
if (document.getElementById("morepacks-main") == null) {


// When Open Btn Clicked
function morepacksOpenBtnClicked() {
    morepacks.unlockJS();
    morepacks.showUi();

    // Make button look selected
    var btn = document.getElementsByClassName("morepacks-btn-open")[0];
    btn.classList.add("styles__pageSelected___MugaH-camelCase");
};window.morepacks.morepacksOpenBtnClicked = morepacksOpenBtnClicked;


// When Closed Btn Clicked
function morepacksCloseBtnClicked() {
    morepacks.unlockJS();
    morepacks.hideUi();

    // Make button look selected
    var btn = document.getElementsByClassName("morepacks-btn-open")[0];
    btn.classList.remove("styles__pageSelected___MugaH-camelCase");
};window.morepacks.morepacksCloseBtnClicked = morepacksCloseBtnClicked;


// Add Ui Element
function addUi() {
    var ui_html = `
<div id="morepacks-main" class="morepacks morepacks-main morepacks_hide">

<div class="morepacks morepacks-model-bg" style="pointer-events: none; z-index: 999; display: block; height: 100%; width: 100%; background-color: rgba(0,0,0,.6); position: fixed; left: 0; top: 0;" id="morepacks-ui-model-bg"></div>

<div id="morepacks-ui" class="morepacks-ui morepacks" style="z-index: 1000; width: 1000px; height: 500px; margin: 0; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); box-sizing: border-box; border-style: solid; border-color: rgba(0,0,0,.2); border-width: 10px; box-shadow: 10px 10px 15px #61296c; background-color: #9a49aa;">

<div class="morepacks-header" style="background-color: rgba(0,0,0,.3); background: linear-gradient(-500deg, rgba(255,0,0,0.8) 0%, rgba(255,154,0,0.8) 10%, rgba(208,222,33,0.8) 20%, rgba(79,220,74,0.8) 30%, rgba(63,218,216,0.8) 40%, rgba(47,201,226,0.8) 50%, rgba(28,127,238,0.8) 60%, rgba(95,21,242,0.8) 70%, rgba(186,12,248,0.8) 80%, rgba(251,7,217,0.8) 90%, rgba(255,0,0,0.8) 100%);"><i class="far fa-cubes" aria-hidden="true"></i><div class="morepacks-header-text" style="padding-left: 5px;">MorePacks</div><i class="fas fa-times morepacks-btn-close" role="button" tabindex="0" aria-hidden="true"></i></div>

</div>

<style>
.morepacks-header {
position: absolute;
top: 0;
left: 0;
z-index: 10;
display: flex;
flex-direction: row;
align-items: center;
box-sizing: border-box;
width: 100%;
height: 65px;
-webkit-user-select: none;
-moz-user-select: none;
user-select: none;
font-size: 30px;
color: #fff;
background-color: #0bc2cf;
text-shadow: 0 2.5px rgba(0,0,0,.2);
padding: 5px 20px 12px;
box-shadow: inset 0 -7px rgba(0,0,0,.2);
}

.morepacks-header-text {
font-family: Titan One,sans-serif;
font-size: 34px;
padding-bottom: 4px;
}

.morepacks-btn-close:hover {
transform: scale(.9);
}

.morepacks-btn-close {
font-size: 24px;
margin-left: auto;
outline: none;
cursor: pointer;
-webkit-user-select: none;
-moz-user-select: none;
user-select: none;
transition: .2s;
}

.morepacks_hide {
display: none !important;
}

.morepacks_hide_in {
animation-name: morepacks_fade_in;
animation-duration: 0.6s;
}

.morepacks_hide_out {
animation-name: morepacks_fade_out;
animation-duration: 0.6s;
}

@keyframes morepacks_fade_in {
from { opacity: 0; }
to   { opacity: 1; }
}

@keyframes morepacks_fade_out {
from { opacity: 1; }
to   { opacity: 0; }
}
</style>

</div>`;
    document.body.innerHTML += ui_html;
};window.morepacks.addUi = addUi;


// Add the button
function addOpenBtn() {
    var btn_html = `<a class="morepacks morepacks-btn-open styles__pageButton___1wFuu-camelCase" href="#morepacks"><i class="styles__pageIcon___3OSy9-camelCase fas fa-cubes" aria-hidden="true"></i><div class="styles__pageText___1eo7q-camelCase">MorePacks</div></a>`;

    var sidebar_html = document.getElementsByClassName("styles__sidebar___1XqWi-camelCase")[0].innerHTML.split(`<div class="styles__bottomRow___3OozA-camelCase">`)
    document.getElementsByClassName("styles__sidebar___1XqWi-camelCase")[0].innerHTML = sidebar_html[0] + btn_html + `<div class="styles__bottomRow___3OozA-camelCase">` + sidebar_html[1];
};window.morepacks.addOpenBtn = addOpenBtn;


// Add the button clicked event for open
function addOpenBtnClicked() {
    var btn = document.getElementsByClassName("morepacks-btn-open")[0];
    window.morepacks.morepacksOpenBtnClicked = morepacksOpenBtnClicked;
    btn.addEventListener("click", morepacksOpenBtnClicked);
};window.morepacks.addOpenBtnClicked = addOpenBtnClicked;


// Add the button clicked event for close
function addCloseBtnClicked() {
    var btn = document.getElementsByClassName("morepacks-btn-close")[0];
    window.morepacks.morepacksCloseBtnClicked = morepacksCloseBtnClicked;
    btn.addEventListener("click", morepacksCloseBtnClicked);
};window.morepacks.addCloseBtnClicked = addCloseBtnClicked;


// Show Ui
function showUi() {
    var ui = document.getElementById("morepacks-main");
    ui.classList.add("morepacks_hide_in");
    ui.classList.remove("morepacks_hide");
    setTimeout(function(){ui.classList.remove("morepacks_hide_in");}, 600);
};window.morepacks.showUi = showUi;


// Hide Ui
function hideUi() {
    var ui = document.getElementById("morepacks-main");
    ui.classList.add("morepacks_hide_out");
    setTimeout(function(){ui.classList.add("morepacks_hide");}, 600);
    setTimeout(function(){ui.classList.remove("morepacks_hide_out");}, 600);
};window.morepacks.hideUi = hideUi;


// Making Alert, Prompt, Input Useable
function unlockJS() {
    (() => {
        let n = document.createElement('iframe');
        document.body.append(n);
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
    })();
};window.morepacks.unlockJS = unlockJS;


// Code
unlockJS();

addUi();

addOpenBtn();
addOpenBtnClicked();
addCloseBtnClicked()

alert("Setup Done, You Can Now Use MorePacks!");


} else {


// If Already Loaded
alert("You Have Already Loaded MorePacks!");


};


};window.morepacks.loadMorePacks = loadMorePacks;


// Unload MorePacks Function
function unloadMorePacks() {


// Code
document.getElementById("morepacks-main").remove();
alert("MorePacks Successfully Unloaded And Removed!");


};window.morepacks.unloadMorePacks = unloadMorePacks;


// Code
loadMorePacks()
