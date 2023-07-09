import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ContestComponent } from "./contest.component";
import { ContestResolver } from "src/app/core/resolvers/contest.resolver";

const routes: Routes = [
  {
    path: "",
    component: ContestComponent,
    resolve: { contest: ContestResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestRoutingModule {}
