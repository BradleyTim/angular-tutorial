import { Component } from "@angular/core";

import { Human } from "./human";

@Component({
  selector: "human",
  templateUrl: "./human.component.html",
  styleUrls: ["./human.component.css"]
})
export class HumanComponent {
  public humans: Human[] = [
    new Human("Euler", 1),
    new Human("Stein", 4),
    new Human("Gift", 24),
    new Human("Loren", 25)
  ];
}
