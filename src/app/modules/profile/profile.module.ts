import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { Route, RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";

const routes: Route[] = [{ path: "profile", component: MyProfileComponent }];

@NgModule({
  declarations: [MyProfileComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ProfileModule {}
