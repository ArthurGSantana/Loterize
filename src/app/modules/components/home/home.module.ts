import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { HomeOptionsComponent } from "./components/home-options/home-options.component";
import { CardOptionComponent } from "src/app/shared/components/card-option/card-option.component";

@NgModule({
  declarations: [HomeComponent, HomeOptionsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderComponent,
    CardOptionComponent
  ]
})
export class HomeModule {}
