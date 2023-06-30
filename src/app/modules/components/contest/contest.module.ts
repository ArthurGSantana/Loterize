import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContestComponent } from "./contest.component";
import { ContestRoutingModule } from "./contest-routing.module";
import { SubHeaderComponent } from "src/app/shared/components/sub-header/sub-header.component";
import { SidebarComponent } from "src/app/shared/components/sidebar/sidebar.component";

@NgModule({
  declarations: [ContestComponent],
  imports: [
    CommonModule,
    ContestRoutingModule,
    SubHeaderComponent,
    SidebarComponent
  ]
})
export class ContestModule {}
