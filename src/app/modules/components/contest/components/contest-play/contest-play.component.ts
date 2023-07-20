import { Component, Input, OnInit } from "@angular/core";

import {
  ContestBody,
  ContestType,
  ILotteryContest
} from "src/app/core/models/LotteryContest.interface";
import { ContestData } from "src/app/core/utils/data";

@Component({
  selector: "loto-contest-play",
  templateUrl: "./contest-play.component.html",
  styleUrls: ["./contest-play.component.scss"]
})
export class ContestPlayComponent implements OnInit {
  _contest!: ILotteryContest;

  @Input() get contest(): ILotteryContest {
    return this._contest;
  }

  set contest(value: ILotteryContest) {
    this._contest = value;
    let type = value.loteria.replace("-", "") as ContestType;
    this.contestDataActive = { ...ContestData[type] };
  }

  contestDataActive!: ContestBody;

  constructor() {}

  ngOnInit(): void {}
}
