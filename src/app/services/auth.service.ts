import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/internal/operators';

@Injectable()
export class AuthService {

  constructor() { }

  isAuth = new BehaviorSubject(!!localStorage.getItem('isAuth'));

  login(login: string, password: string): Observable<boolean> {
    return of(login === 'test' && password === 'test')
      .pipe(
        delay(1000),
        tap(isCorrect => {
          if (isCorrect) {
            localStorage.setItem('isAuth', 'true');
            this.isAuth.next(true);
          }
        })
      );
  }

  logout(): Observable<boolean> {
    return of(true)
      .pipe(tap(() => {
        localStorage.removeItem('isAuth');
        this.isAuth.next(false);
      }));
  }
}
