import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Route, RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Route[] = [
  { path: '', component:  SignInComponent},
];

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  
})
export class SignModule {}
