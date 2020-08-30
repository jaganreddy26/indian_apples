import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page/home-page.component";
import { Route, RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { HomeOneComponent } from "./home-one/home-one.component";

const routes: Route[] = [
  { path: "home", component: HomePageComponent },
  { path: "homeone", component: HomeOneComponent },
];

@NgModule({
  declarations: [HomePageComponent, HomeOneComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
