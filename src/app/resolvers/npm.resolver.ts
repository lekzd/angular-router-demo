import {Resolve} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router/src/router_state';
import {NpmService} from '../services/npm.service';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class NpmResolver implements Resolve<string[]> {

  constructor(private npmService: NpmService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<string[]> {
    if (route.params.id === 'error') {
      return throwError('');
    }

    return this.npmService.search(route.params.id)
      .pipe(map(items => items.map(item => item.package.name)));
  }
}
