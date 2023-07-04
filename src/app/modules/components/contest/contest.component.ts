import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { take } from "rxjs";

import { ContestsToRoute } from "src/app/core/models/LotteryContest.interface";
import { SidebarOptionsContest } from "src/app/core/utils/data";

@Component({
  selector: "loto-contest",
  templateUrl: "./contest.component.html",
  styleUrls: ["./contest.component.scss"]
})
export class ContestComponent implements OnInit {
  controlSidebar: "open" | "closed" = "open";
  sidebarOptionsContest = SidebarOptionsContest;
  contestType!: string;

  contestsToRoute: { [key: string]: string } = {
    [ContestsToRoute.Mega]: "contest/mega-sena",
    [ContestsToRoute.Quina]: "contest/quina",
    [ContestsToRoute.Lotofacil]: "contest/lotofacil"
  };

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe().subscribe({
      next: (params) => {
        this.contestType = params["contestType"];
      }
    });
  }

  handleSidebar(): void {
    this.controlSidebar = this.controlSidebar === "open" ? "closed" : "open";
  }

  routeToContest(contestId: number): void {
    this.router.navigate([`${this.contestsToRoute[contestId]}`]);
  }

  backToHomePage(): void {
    this.router.navigate([".."]);
  }
}
