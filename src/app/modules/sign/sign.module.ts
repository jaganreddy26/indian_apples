import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Route, RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { SignInComponent } from "./sign-in/sign-in.component";
import { ForgotComponent } from "./forgot/forgot.component";
import { OtpComponent } from "./otp/otp.component";
import { PasswordComponent } from "./password/password.component";

const routes: Route[] = [
  { path: "sign_in", component: SignInComponent },
  { path: "forgot", component: ForgotComponent },
  { path: "otp", component: OtpComponent },
  { path: "password", component: PasswordComponent },
];

@NgModule({
  declarations: [
    SignInComponent,
    ForgotComponent,
    OtpComponent,
    PasswordComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class SignModule {}
