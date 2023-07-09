import { Component, Input } from "@angular/core";

import { ILotteryContest } from "src/app/core/models/LotteryContest.interface";

@Component({
  selector: "loto-contest-info",
  templateUrl: "./contest-info.component.html",
  styleUrls: ["./contest-info.component.scss"]
})
export class ContestInfoComponent {
  @Input({ required: true }) contest!: ILotteryContest;
}
