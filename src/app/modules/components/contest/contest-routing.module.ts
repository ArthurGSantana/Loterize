import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LotteryResolver } from "src/app/core/resolvers/lottery.resolver";
import { ContestComponent } from "./contest.component";

const routes: Routes = [
  {
    path: "",
    component: ContestComponent,
    resolve: { contests: LotteryResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestRoutingModule {}
