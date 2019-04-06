import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'npm search';

  constructor(private router: Router,
              private authService: AuthService) {}

  get isAuth(): Observable<boolean> {
    return this.authService.isAuth;
  }

  logout() {
    this.authService.logout()
      .subscribe(() => {
        this.router.navigateByUrl('/login');
      });
  }
}
