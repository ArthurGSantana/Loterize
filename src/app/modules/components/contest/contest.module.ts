import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContestComponent } from "./contest.component";
import { ContestRoutingModule } from "./contest-routing.module";

@NgModule({
  declarations: [ContestComponent],
  imports: [CommonModule, ContestRoutingModule]
})
export class ContestModule {}
