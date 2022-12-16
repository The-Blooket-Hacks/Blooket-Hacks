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

            if (window.location.pathname != '/play/rush') {
                alert('You must be in a blook rush game mode to use this hack!');
            } else {
                let e = reactHandler();
                e.stateNode.props.firebase.setVal({
                    id: e.stateNode.props.client.hostId,
                    path: 'c/' + e.stateNode.props.client.name + '/bs',
                    val: Number(parseFloat(prompt('How many blooks do you want?')))
                });

                alert('Blooks set!');
            };
})();
