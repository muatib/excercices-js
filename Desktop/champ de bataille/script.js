
const characters = [
    { name: "Paul", hp: 50, level: 5, weaponPower: 8, shieldPower: 6 },
    { name: "Jacques", hp: 50, level: 3, weaponPower: 9, shieldPower: 7 },
    { name: "Marie", hp: 50, level: 7, weaponPower: 6, shieldPower: 5 },
    { name: "Lucie", hp: 50, level: 8, weaponPower: 7, shieldPower: 8 }
  ];
  
 
  function getRandomLivingCharacter() {
    const livingCharacters = characters.filter(character => character.hp > 0);
    return livingCharacters[Math.floor(Math.random() * livingCharacters.length)];
  }
  
  
  function fight() {
    const attacker = getRandomLivingCharacter();
    const defender = getRandomLivingCharacter();
  
    
    if (attacker === defender) {
      return fight();
    }
  
    const attackScore = attacker.level + Math.floor(Math.random() * attacker.weaponPower);
    const defenseScore = defender.level + Math.floor(Math.random() * defender.shieldPower);
  
    if (attackScore > defenseScore) {
      defender.hp -= attackScore;
      console.log(`${attacker.name} attacks ${defender.name} and deals ${attackScore} damage points.`);
  
      if (defender.hp <= 0) {
        console.log(`${defender.name} is dead and leaves the battlefield.`);
        const index = characters.indexOf(defender);
        characters.splice(index, 1);
      }
    } else {
      console.log(`${attacker.name} attacks ${defender.name} but deals no damage.`);
    }
  }
  
 
  while (characters.length > 1) {
    fight();
  }
  
  
  console.log(`The winner of the battle is ${characters[0].name}!`);


  