import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContestComponent } from "./contest.component";
import { ContestRoutingModule } from "./contest-routing.module";
import { SubHeaderComponent } from "src/app/shared/components/sub-header/sub-header.component";

@NgModule({
  declarations: [ContestComponent],
  imports: [CommonModule, ContestRoutingModule, SubHeaderComponent]
})
export class ContestModule {}
