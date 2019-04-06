import {NgModule} from '@angular/core';
import {NpmResolver} from './npm.resolver';
import {AuthResolver} from './auth.resolver';

@NgModule({
  providers: [
    AuthResolver,
    NpmResolver
  ]
})
export class ResolversModule {}
