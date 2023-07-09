import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContestComponent } from "./contest.component";
import { ContestRoutingModule } from "./contest-routing.module";
import { SubHeaderComponent } from "src/app/shared/components/sub-header/sub-header.component";
import { SidebarComponent } from "src/app/shared/components/sidebar/sidebar.component";
import { ContestPlayComponent } from "./components/contest-play/contest-play.component";
import { ContestInfoComponent } from "./components/contest-info/contest-info.component";
import { ContestNumbersComponent } from "src/app/shared/components/contest-numbers/contest-numbers.component";

@NgModule({
  declarations: [ContestComponent, ContestPlayComponent, ContestInfoComponent],
  imports: [
    CommonModule,
    ContestRoutingModule,
    SubHeaderComponent,
    SidebarComponent,
    ContestNumbersComponent
  ]
})
export class ContestModule {}
