import { player } from "./player.js";

export class Quest {

  name;
  goldReward;
  staminaCost;
  soldierCost;

  constructor(name, goldReward, staminaCost, soldierCost){
    this.name = name;
    this.goldReward = goldReward;
    this.staminaCost = staminaCost;
    this.soldierCost = soldierCost;
  }

  pursue(){
    if(player.stamina >= this.staminaCost
      && player.soldierCount >= this.soldierCost){

      player.stamina -= this.staminaCost;
      player.soldierCount -= this.soldierCost;
      player.gold += this.goldReward;
      player.updatePanel();

    }
  }
}
