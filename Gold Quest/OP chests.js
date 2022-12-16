setInterval(function(){var obj = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state;
 obj.choices = [{
      "type": "multiply",
      "val": 100,
      "text": "Multiply Gold!",
      "blook": "Ice Crab"
    },
    {
      "type": "swap",
      "text": "SWAP!",
      "blook": "Spooky Ghost"
    },
    {
      "type": "gold",
      "val": 1000000,
      "text": "+1M Gold",
      "blook": "Tim the Alien"
      
    }
  ]
})
