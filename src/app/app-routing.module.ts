import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeModule } from "./modules/components/home/home.module";
import { ContestModule } from "./modules/components/contest/contest.module";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren: () => HomeModule
  },
  {
    path: "contest",
    pathMatch: "full",
    loadChildren: () => ContestModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
