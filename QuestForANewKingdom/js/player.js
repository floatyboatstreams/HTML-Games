export let player = {
  name: "",
  level: 1,
  experience: 0,
  maxExperience: 5,
  gold: 0,
  soldierCount: 0,
  stamina: 1,
  maxStamina: 5,

  updatePanel: function(){
    let playerNameP = document.getElementById("playerName");
    let playerLevelP = document.getElementById("playerLevel");
    let playerExperienceP = document.getElementById("playerExperience");
    let playerGoldP = document.getElementById("playerGold");
    let playerSoldierCountP = document.getElementById("playerSoldierCount");
    let playerStaminaP = document.getElementById("playerStamina");

    playerNameP.innerHTML = "Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: " + this.name;
    playerLevelP.innerHTML = "Level&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: " + this.level;
    playerExperienceP.innerHTML = "Experience: " + this.experience + "/" + this.maxExperience;
    playerGoldP.innerHTML = "Gold&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: " + this.gold;
    playerSoldierCountP.innerHTML = "Soldiers&nbsp;&nbsp;: " + this.soldierCount;
    playerStaminaP.innerHTML = "Stamina&nbsp;&nbsp;&nbsp;: " + this.stamina + "/" + this.maxStamina;
  }
};
