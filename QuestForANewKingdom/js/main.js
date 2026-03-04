import { player } from "./player.js";
import { Quest } from "./quests.js";
import { Building } from "./buildings.js";

const $ = id => document.getElementById(id);

//Toggle Quest and Building Panels
let characterPanelButton = $("characterPanelButton");
let buildingPanelButton = $("buildingPanelButton");
let questPanel = $("questPanel");
let buildingPanel = $("buildingPanel");

questPanelButton.onclick = function(e){
  buildingPanel.style.display = "none";
  questPanel.style.display = "block";
}
buildingPanelButton.onclick = function(e){
  questPanel.style.display = "none";
  buildingPanel.style.display = "block";
}

//Initalize Game Values
let playerNameP = $("playerName");
let playerLevelP = $("playerLevel");
let playerExperienceP = $("playerExperience");
let playerGoldP = $("playerGold");
let playerHealthP = $("playerHealth");
let playerStaminaP = $("playerStamina");

if(player.name == ""){
  let submittedText = prompt("What is your name?");
  player.name = submittedText;
}
player.updatePanel();


//Quests
let activeQuests = [];
// beg for gold
let begForGoldQuest = new Quest("Beg for gold", 1, 1, 0);
createQuestPanel(begForGoldQuest);
activeQuests.push(begForGoldQuest);
//goblin hunt
let goblinHuntQuest = new Quest("Goblin Hunt", 100, 5, 100)
createQuestPanel(goblinHuntQuest);
activeQuests.push(goblinHuntQuest);
//orc hunt
let orcHuntQuest = new Quest("Orc Hunt", 500, 7, 1000)
createQuestPanel(orcHuntQuest);
activeQuests.push(orcHuntQuest);

//Buildings
let activeBuildings = [];
// barracks
let barracksBuilding = new Building("Barracks", 50, 1);
barracksBuilding.panel = createBuildingPanel(barracksBuilding);
activeBuildings.push(barracksBuilding);


setInterval(function(){
  if(player.stamina < player.maxStamina){
    player.stamina++;
  }
  activeBuildings.forEach(building => {
    player.soldierCount += building.soldiers * building.owned;
  });

  if(player.soldierCount >= 1000 && player.level < 2){
    player.level = 2;
    player.maxStamina = 10;

    let dragonHuntQuest = new Quest("Dragon Hunt", 700, 10, 2000)
    createQuestPanel(dragonHuntQuest);
    activeQuests.push(dragonHuntQuest);
  }

  player.updatePanel();
}, 1000);










function createQuestPanel(newQuest){
  let template = `<div>
            <img>
            <p>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${newQuest.name}</p>
            <p>Gold Reward : ${newQuest.goldReward}</p>
            <p>Stamina Cost: ${newQuest.staminaCost}</p>
            <p>Soldier Cost: ${newQuest.soldierCost}</p>
        </div>`;

  let newListing = document.createElement("div");
  newListing.className = "listing";
  newListing.innerHTML = template;

  let newDiv = document.createElement("div");

  let newButton = document.createElement("button");
  newButton.type = "button";
  newButton.innerText = "Pursue Quest";
  newButton.onclick = function(){
    newQuest.pursue();
  };

  questPanel.appendChild(newListing);
  newListing.appendChild(newDiv);
  newDiv.appendChild(newButton);

}


function createBuildingPanel(newBuilding){
  let template = `<div>
          <img>
          <p>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${newBuilding.name}</p>
          <p>Gold Cost : ${newBuilding.goldCost}</p>
          <p>Soldiers/s: ${newBuilding.soldiers}</p>
          <p class="owned">Owned&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 0</p>
      </div>`;

  let newListing = document.createElement("div");
  newListing.className = "listing";
  newListing.innerHTML = template;

  let newDiv = document.createElement("div");

  let newButton = document.createElement("button");
  newButton.type = "button";
  newButton.innerText = "Purchase Building";
  newButton.onclick = function(){
    newBuilding.purchase();
  };

  buildingPanel.appendChild(newListing);
  newListing.appendChild(newDiv);
  newDiv.appendChild(newButton);

  return newListing;
}
