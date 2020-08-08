//share module is a common module of the all moduless
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
} from "@angular/forms";
import { ApexService } from "./service/apex.service";
import { AuthGaurdService } from './service/auth.gaurd.service';

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppInterceptor } from "./service/app.interceptor";
import { AppService } from "./service/app.service";
import { MaterialModule } from '../material.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { BooleanToStringValue } from './pipes/booleanToString.pipe';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  //to import the modules
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatSelectModule,
    TranslateModule
  ],
  //to declare the components,pipes,directives
  declarations: [
    BooleanToStringValue
  ],
  // to export all we have to use in another component
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule,
    BooleanToStringValue,
    MaterialModule
  ],
  // to declare the services in providers
  providers: [AppService, ApexService, FormBuilder, AuthGaurdService]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AppInterceptor,
          multi: true
        }
      ]
    };
  }
}
