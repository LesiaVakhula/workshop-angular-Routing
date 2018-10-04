import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';

import { UsersRoutingModule, usersRouterComponents } from './users-routing.module';
import { UserComponent, UserArrayService, UserResolveGuard } from '.';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    UsersRoutingModule,
  ],
  declarations: [
    ...usersRouterComponents,
    UserComponent
  ],
  providers: [UserArrayService, UserResolveGuard]
})
export class UsersModule { }
