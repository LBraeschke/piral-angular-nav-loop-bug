import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmptyComponent } from "./empty.component";
import { BaseRoutingComponent } from "./base-routing/base-routing.component";
import { ChildRoutingComponent } from "./child-routing/child-routing.component";

const routes: Routes = [
  {
    path: "sharing",
    component: BaseRoutingComponent,
    children: [
      {
        path: ":id",
        component: ChildRoutingComponent
      },
    ],
  },
  {
    // this is a fallback route to allow routing to other sub routers
    path: "**",
    component: EmptyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
