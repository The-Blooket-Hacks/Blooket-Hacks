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
