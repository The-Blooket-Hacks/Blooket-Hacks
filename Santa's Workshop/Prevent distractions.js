function disableDistractions() { Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({wind: false, plow: false, phaseTwo: false, gift: false, force: false, dusk: false, canada: false, blizzard: false}); }

window.setInterval(disableDistractions)
