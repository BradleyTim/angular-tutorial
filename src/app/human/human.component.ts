import { Component } from "@angular/core";

import { Human } from "./human";

@Component({
  selector: "human",
  templateUrl: "./human.component.html"
})
export class HumanComponent {
  public humans: string[] = [new Human("Gift", 24), new Human("Loren", 25)];
}
