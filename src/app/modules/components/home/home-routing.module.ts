import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { LotteryResolver } from "src/app/core/resolvers/lottery.resolver";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    resolve: { games: LotteryResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
