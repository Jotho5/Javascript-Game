const monsterHealthBar = document.getElementById('monster-health'); //Monster Healh
const playerHealthBar = document.getElementById('player-health'); // Player Health
const bonusLifeEl = document.getElementById('bonus-life'); //Bonus Life

const attackBtn = document.getElementById('attack-btn'); //ATTACK_BTN
const strongAttackBtn = document.getElementById('strong-attack-btn'); //STRONG_ATTACK_BTN
const healBtn = document.getElementById('heal-btn'); //HEAL_BTN
const logBtn = document.getElementById('log-btn'); //LOG_BTN
 
function adjustHealthBars(maxLife) {
monsterHealthBar.max = maxLife; //Sets Max Life
monsterHealthBar.value = maxLife; //Sets Value
playerHealthBar.max = maxLife; //Sets Max Life
playerHealthBar.value = maxLife; //Sets
}

function dealMonsterDamage(damage) {
  const dealtDamage = Math.random() * damage;
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  return dealtDamage;
}

function dealPlayerDamage(damage) {
  const dealtDamage = Math.random() * damage;
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  return dealtDamage;
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

function resetGame(value) {
  currentMonsterHealth = value;55
  currentPlayerHealth = value;
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}

function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

function setPlayerHealth(health) {
  playerHealthBar.value = health;
}

function monsterHealer() {
  healValue = 10;
  monsterHealthBar.value = +monsterHealthBar.value + healValue;
}

