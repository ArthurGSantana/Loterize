import { Component, Input, OnInit } from "@angular/core";

import { ILotteryContest } from "src/app/core/models/LotteryContest.interface";

@Component({
  selector: "loto-contest-play",
  templateUrl: "./contest-play.component.html",
  styleUrls: ["./contest-play.component.scss"]
})
export class ContestPlayComponent implements OnInit {
  @Input() contest!: ILotteryContest;

  constructor() {}

  ngOnInit(): void {

  }
}
