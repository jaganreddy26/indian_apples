import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AuthGaurdService } from "./shared/service/auth.gaurd.service";
import { PageNotFoundComponent } from "./login/pageNotFound";

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
    path: "*",
    redirectTo: "/pageNotFound",
  },
  {
    path: "sign",
    loadChildren: () =>
      import("./modules/sign/sign.module").then((m) => m.SignModule),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./modules/profile/profile.module").then((m) => m.ProfileModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./modules/home/home.module").then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
