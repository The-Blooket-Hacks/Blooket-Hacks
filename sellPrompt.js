const node = document.createElement("div");
node.classList.add("arts__modal___VpEAD-camelCase")
var body = document.getElementById("body");
node.innerHTML = "<form class='styles__container___1BPm9-camelCase'><div class='styles__text___KSL4--camelCase'>Sell Pumpkin Blooks for 5 tokens each:</div><div class='styles__holder___3CEfN-camelCase'><div class='styles__numRow___xh98F-camelCase'><div class='styles__inputContainer___2Fn7J-camelCase styles__inputFilled___3AmpF-camelCase' style='width: 80px; margin: 0px;'><input class='styles__input___2vJSW-camelCase' placeholder='' type='tel' value='1' style='width: 60px;'></div><div class='styles__numTotal___3LQaw-camelCase'>/ 1</div></div><div class='styles__buttonContainer___2EaVD-camelCase'><div id='noButton' class='styles__button___22rMT-camelCase styles__hoverRed___243tA-camelCase' role='button' tabindex='0'>Yes</div><div id='yesButton' class='styles__button___22rMT-camelCase styles__hoverBlue___2zYb_-camelCase' role='button' tabindex='0'>No</div></div></div><input type='submit' style='opacity: 0; display: none;'></form>"
body.appendChild(node);
var newBody = document.getElementById("body");
var modal = newBody.getElementsByClassName("arts__modal___VpEAD-camelCase")[0];
document.getElementById("yesButton").addEventListener("click", closeModal);
document.getElementById("noButton").addEventListener("click", closeModal);

function closeModal() {
    modal.remove()
}
