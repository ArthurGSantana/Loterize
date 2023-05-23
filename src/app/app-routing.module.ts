import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeModule } from "./modules/components/home/home.module";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren: () => HomeModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
