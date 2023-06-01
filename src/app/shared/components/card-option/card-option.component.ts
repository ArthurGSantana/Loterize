import { Component, Input } from "@angular/core";

import { ICardOption } from "src/app/core/models/CardOption.interface";

@Component({
  standalone: true,
  selector: "loto-card-option",
  templateUrl: "./card-option.component.html",
  styleUrls: ["./card-option.component.scss"]
})
export class CardOptionComponent {
  @Input({ required: true }) card!: ICardOption;
}
