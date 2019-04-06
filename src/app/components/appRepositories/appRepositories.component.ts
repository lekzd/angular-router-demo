import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/internal/operators';

@Component({
  selector: 'app-repositories',
  templateUrl: './appRepositories.component.html',
})
export class AppRepositoriesComponent implements OnInit {
  get name(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

  get data(): string {
    return this.activatedRoute.snapshot.data['repositories'];
  }

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    // const {snapshot} = this.activatedRoute;
    //
    // this.name = snapshot.params['id'];
    // this.data = snapshot.data['repositories'];

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(event => {
        console.log('NavigationEnd', event);

        // const {snapshot} = this.activatedRoute;
        //
        // this.name = snapshot.params['id'];
        // this.data = snapshot.data['repositories'];
      });
  }

}


// export class AppRepositoriesComponent implements OnInit {
//
//   get name(): string {
//     return this.activatedRoute.snapshot.params['id'];
//   }
//
//   get data(): string {
//     return this.activatedRoute.snapshot.data['repositories'];
//   }
//
//   constructor(private activatedRoute: ActivatedRoute,
//               private router: Router) {}
//
//   ngOnInit() {
//     this.router.events
//       .pipe(
//         filter(event => event instanceof NavigationEnd)
//       )
//       .subscribe(event => {
//         console.log('NavigationEnd', event);
//       });
//   }
//
// }
