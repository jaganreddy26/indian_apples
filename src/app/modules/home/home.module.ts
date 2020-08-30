import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page/home-page.component";
import { Route, RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";

const routes: Route[] = [{ path: "home", component: HomePageComponent }];

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
