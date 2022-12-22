// Blooket-Hacks  -  @ 2022 CrazyH & cph101

const original_open = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function () {
    if (!arguments[1].includes("suspend")) original_open.apply(this, arguments)
};
