import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";

const routes: Routes = [];

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class SignModule {}
