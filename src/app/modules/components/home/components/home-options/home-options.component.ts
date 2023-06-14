import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, map } from "rxjs";

import { ICardOption } from "src/app/core/models/CardOption.interface";
import { ILotteryContest } from "src/app/core/models/LotteryContest.interface";
import { CardOptions } from "src/app/core/utils/data";

@Component({
  selector: "loto-home-options",
  templateUrl: "./home-options.component.html",
  styleUrls: ["./home-options.component.scss"]
})
export class HomeOptionsComponent implements OnInit {
  cardOptions: ICardOption[] = CardOptions;
  games: ILotteryContest[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.pipe(map(({ games }) => games)).subscribe({
      next: (response) => {
        this.games = [...response];
      }
    });
  }
}
