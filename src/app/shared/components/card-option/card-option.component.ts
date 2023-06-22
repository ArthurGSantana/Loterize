import { Component, EventEmitter, Input, Output } from "@angular/core";

import { ICardConfig } from "src/app/core/models/CardOption.interface";
import { ILotteryContest } from "src/app/core/models/LotteryContest.interface";

@Component({
  standalone: true,
  selector: "loto-card-option",
  templateUrl: "./card-option.component.html",
  styleUrls: ["./card-option.component.scss"]
})
export class CardOptionComponent {
  @Input({ required: true }) cardConfig!: ICardConfig;
  @Input({ required: true }) contest!: ILotteryContest;

  @Output() onSubmit = new EventEmitter();
}
