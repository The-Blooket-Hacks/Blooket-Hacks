(async () => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();
            function reactHandler() {
                return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
            };
        
            if (window.location.pathname != '/kingdom') {
                alert('You must be in a crazy kingdom game!');
            } else {
                let guestScore = Number(parseFloat(prompt('How many guests do you want?')));
                reactHandler().stateNode.setState({ guestScore });
        
                alert('Guests set!');
            };
})();
