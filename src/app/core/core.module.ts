import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AboutComponent,
  PathNotFoundComponent,
  MessagesComponent,
  LoginComponent,
  CanDeactivateGuard,
  DialogService,
  MessagesService,
  SpinnerService,
  CustomPreloadingStrategyService
} from '.';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AboutComponent,
    PathNotFoundComponent,
    MessagesComponent,
    LoginComponent
  ],
  providers: [
    CanDeactivateGuard,
    MessagesService,
    DialogService,
    SpinnerService,
    CustomPreloadingStrategyService
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule is already loaded. Import it in the AppModule only.`);
    }
  }
 }
