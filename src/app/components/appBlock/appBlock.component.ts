import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-block',
  templateUrl: './appBlock.component.html',
})
export class AppBlockComponent {

  constructor(private router: Router) {}

  goTo(companyId: string) {
    this.router.navigate(['repositories', companyId]);
  }
}
