import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {finalize} from 'rxjs/internal/operators';

@Component({
  selector: 'app-login',
  templateUrl: './appLogin.component.html',
  styleUrls: ['./appLogin.component.less']
})
export class AppLoginComponent {
  login: string;
  password: string;
  error: string = null;
  pending = false;

  constructor(private router: Router,
              private authService: AuthService) {}

  sendLoginForm() {
    this.error = null;
    this.pending = true;

    this.authService
      .login(this.login, this.password)
      .pipe(finalize(() => {
        this.pending = false;
      }))
      .subscribe(isAuth => {
        if (isAuth) {
          this.router.navigateByUrl('/');
        } else {
          this.error = 'Авторизация не удалась';
        }
      });
  }
}
