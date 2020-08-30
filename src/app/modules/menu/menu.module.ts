import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { Route, RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";

const routes: Route[] = [{ path: "", component: NavBarComponent }];

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class MenuModule {}
