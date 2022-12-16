 setInterval(function() {for (let i = 0; i < 20; i++) {
   var obj = Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.state.blooks[i];
   obj.level = 4;
   obj.bonus = 9999999999999999999999999999999999;
   obj.time = [
     1,
     1,
     1,
     1,
     1
   ];
   obj.cash = [
     800000000000000,
     800000000000000,
     800000000000000,
     800000000000000,
     800000000000000
   ];
   obj.price = [10,
     10,
     10,
     10
   ]
   obj.class = "🖕";
   obj.rarity = "chroma";
   }
 })
