import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

// rxjs
import { Observable, of } from 'rxjs';
import { map, delay, finalize, catchError, take } from 'rxjs/operators';

import { User } from './../models/user.model';
import { UserArrayService } from './../services/user-array.service';
import { SpinnerService } from './../../core';

@Injectable()
export class UserResolveGuard implements Resolve<User> {

  constructor(
    private userArrayService: UserArrayService,
    private router: Router,
    private spinner: SpinnerService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<User | null> {
    console.log('UserResolve Guard is called');

    if (!route.paramMap.has('userID')) {
      return of(new User(null, '', ''));
    }
    this.spinner.show();
    const id = +route.paramMap.get('userID');

    return this.userArrayService.getUser(id)
      .pipe(
        delay(2000),
        map(user => {
          if (user) {
            return user;
          } else {
            this.router.navigate(['/users']);
            return null;
          }
        }),
        take(1),
        catchError(() => {
          this.router.navigate(['/users']);
          return of(null);
        }),
        finalize(() => this.spinner.hide())
      );
  }
}
