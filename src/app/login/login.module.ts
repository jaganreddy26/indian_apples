import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { SharedModule} from './../shared/shared.module';
import { LoginComponent } from './login.component'
import { PageNotFoundComponent } from './pageNotFound';

const routes: Route[] = [
  { path: '', component:  LoginComponent},
];

@NgModule({
  declarations: [LoginComponent, PageNotFoundComponent],
  exports: [LoginComponent, PageNotFoundComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule.forRoot()
  ],
  providers:[]
})
export class LoginModule { }