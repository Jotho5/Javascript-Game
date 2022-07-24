const ATTACK_VALUE = 8;
const STRONG_ATTACK_VALUE = 10;
const MONSTER_ATTACK = 14;
const HEAL_VALUE = 10;
let hasBonusLife = true;

let chosenMaxLife = prompt('Set the health for you and the monster', '');
const healthArguments = chosenMaxLife <= 0 || isNaN(chosenMaxLife)  ?  chosenMaxLife = 100 : null
healthArguments ? alert('Default health value are now set to 100') : null

let currentMonsterHealth = parseInt(chosenMaxLife);
let currentPlayerHealth = parseInt(chosenMaxLife);

adjustHealthBars(chosenMaxLife);

function playerAttacks(mode, type) {
  let dataEntry = [{
    EV: Event,
    attackMode: type,
    damageDealt: mode,
    damageTaken: MONSTER_ATTACK,
    monsterHealth: currentMonsterHealth,
    yourHealth: currentPlayerHealth,
    matchResults: 'In Progress'
  }];

  const damage = dealMonsterDamage(mode);
  currentMonsterHealth -= damage;
  const monsterDamage = dealPlayerDamage(MONSTER_ATTACK);
  currentPlayerHealth -= monsterDamage
  
    if (hasBonusLife) {
      if (currentPlayerHealth <= 0) {
      hasBonusLife = false;
      bonusLife = chosenMaxLife / 2;
      currentPlayerHealth += bonusLife;
      playerHealthBar.value += bonusLife;
      alert('Your bonus life has now be redeemed');
      removeBonusLife();
      }
    }


  if (currentPlayerHealth <= 0) {
    alert("You have lost! The game will now be restarted")
    resetGame(chosenMaxLife);
    dataEntry.matchResults = 'Loss'

  } else if (currentMonsterHealth <= 0) {
    alert("Victory is yours! The game will now be restarted")
    resetGame(chosenMaxLife);
    dataEntry.matchResults = 'Victory'

  } else if (currentMonsterHealth <=0 && currentPlayerHealth <=0) {
    alert("Its a draw! The game will now be restarted")
    resetGame(chosenMaxLife);
    dataEntry.matchResults = 'Draw'
  }

  console.log(dataEntry);
}

function attackHandler() {
 playerAttacks(ATTACK_VALUE, 'ATTACK'); 
}

function strongAttackHandler() {
 playerAttacks(STRONG_ATTACK_VALUE, 'STRONG ATTACK');
}

function onHeal() {
  let healSpell;

  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert('Your health is already full')
    healSpell = chosenMaxLife - currentPlayerHealth;
  } else {
    currentPlayerHealth += HEAL_VALUE;
    playerHealthBar.value += HEAL_VALUE;
  }

}

function showLogger() {
alert('Check logs in console!')
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', onHeal);
logBtn.addEventListener('click', showLogger);