import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs";

import { ICardConfig } from "src/app/core/models/CardOption.interface";
import { ILotteryContest } from "src/app/core/models/LotteryContest.interface";
import { CardConfig } from "src/app/core/utils/data";

@Component({
  selector: "loto-home-options",
  templateUrl: "./home-options.component.html",
  styleUrls: ["./home-options.component.scss"]
})
export class HomeOptionsComponent implements OnInit {
  cardConfig: ICardConfig = CardConfig;
  contests: ILotteryContest[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.data.pipe(map(({ contests }) => contests)).subscribe({
      next: (response: ILotteryContest[]) => {
        this.contests = [...response];
      }
    });
  }

  openSelectedContest(contest: ILotteryContest): void {
    this.router.navigate(['contest', contest.loteria])
  }
}
