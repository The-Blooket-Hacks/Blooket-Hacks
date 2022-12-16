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
                if (data.phase != 'select') return alert('You must be on the attribute selection page!');
                reactHandler().stateNode.setState({ enemyCard: { ...data.enemyCard, strength: 0, charisma: 0, wisdom: 0 } })
        
                alert('Enemy stats lowered!')
            } else {
                alert('You must be in a tower of doom game!');
            };
})();
