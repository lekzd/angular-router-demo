import {Route} from '@angular/router';
import {AppBlockComponent} from './components/appBlock/appBlock.component';
import {AuthGuard} from './guards/auth.guard';
import {AppLoginComponent} from './components/appLogin/appLogin.component';
import {NpmResolver} from './resolvers/npm.resolver';
import {AppRepositoriesComponent} from './components/appRepositories/appRepositories.component';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/repositories/angular'
  },
  {
    path: '',
    canActivate: [AuthGuard],
    data: {
      shouldBeAuthenticated: true,
      redirectTo: '/login'
    },
    children: [
      {
        path: 'repositories',
        component: AppBlockComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'angular'
          },
          {
            path: ':id',
            component: AppRepositoriesComponent,
            resolve: {
              repositories: NpmResolver
            }
          }
        ]
      }
    ]
  },
  {
    path: 'login',
    component: AppLoginComponent,
    canActivate: [AuthGuard],
    data: {
      shouldBeAuthenticated: false,
      redirectTo: '/'
    },
  }
];
