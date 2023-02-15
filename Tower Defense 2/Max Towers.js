Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.towers.forEach(tower => {
                tower.stats.dmg = 1e6;
                tower.stats.fireRate = 50;
                tower.stats.ghostDetect = true;
                tower.stats.maxTargets = 1e6;
                tower.stats.numProjectiles = 100;
                tower.stats.range = 100;
            });
