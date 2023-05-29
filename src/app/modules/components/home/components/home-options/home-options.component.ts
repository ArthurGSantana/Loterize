import { Component } from "@angular/core";

import { ICardOption } from "src/app/core/models/CardOption.interface";
import { CardOptions } from "src/app/core/utils/data";

@Component({
  selector: "loto-home-options",
  templateUrl: "./home-options.component.html",
  styleUrls: ["./home-options.component.scss"]
})
export class HomeOptionsComponent {
  cardOptions: ICardOption[] = CardOptions;

  constructor() {}
}
