import { player } from "./player.js";

export class Building {

  name;
  goldCost;
  soldiers;
  panel;
  owned;

  constructor(name, goldCost, soldiers){
    this.name = name;
    this.goldCost = goldCost;
    this.soldiers = soldiers;
    this.owned = 0;
  }

  purchase(){
    if(player.gold >= this.goldCost){
      this.owned++;
      player.gold -= this.goldCost;
      player.updatePanel();
      let ownedP = this.panel.getElementsByClassName("owned")[0];
      ownedP.innerHTML = "Owned&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: " + this.owned;
    }
  }

  produce(){
    player.soldierCount += this.soldiers;
  }
}
