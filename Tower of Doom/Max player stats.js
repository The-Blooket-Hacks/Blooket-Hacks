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
        
            if (window.location.pathname == '/tower/battle' || window.location.pathname == '/tower/start') {
                let data = reactHandler().stateNode.state;
                if (data.phase != 'select') return alert('You must use this hack while you are starting a match or in one!');
                reactHandler().stateNode.setState({ myCard: { ...data.myCard, strength: 100, charisma: 100, wisdom: 100 } })
        
                alert('Done!')
            } else {
                alert('You must be in a Tower of Doom game!');
            };
})();
