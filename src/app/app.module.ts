import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoaderComponent } from "./shared/components/loader/loader.component";
import { HeaderComponent } from "./shared/components/header/header.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, LoaderComponent, HeaderComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
