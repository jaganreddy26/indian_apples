import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AuthGaurdService } from "./shared/service/auth.gaurd.service";
import { PageNotFoundComponent } from "./login/pageNotFound";
import { SignModule } from "./modules/sign/sign.module";
import { SignInComponent } from "./modules/sign/sign-in/sign-in.component";
const routes: Route[] = [
  {
    path: "",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "pageNotFound",
    component: PageNotFoundComponent,
  },
  {
    path: "**",
    redirectTo: "/pageNotFound",
  },
  {
    path: "sign",
    loadChildren: () =>
      import("./modules/sign/sign.module").then((m) => m.SignModule),
  },
  { path: "sign_in", component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), SignModule],
  exports: [RouterModule, SignModule],
  declarations: [SignInComponent],
})
export class AppRoutingModule {}
