import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChildRoutingComponent } from "./child-routing/child-routing.component";
import { BaseRoutingComponent } from "./base-routing/base-routing.component";
import { NavEntryComponent } from "./nav-entry/nav-entry.component";

@NgModule({
  declarations: [
    AppComponent,
    ChildRoutingComponent,
    BaseRoutingComponent,
    NavEntryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  exports: [AppComponent, NavEntryComponent],
})
export class AppModule {}
