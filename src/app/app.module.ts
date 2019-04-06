import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppBlockComponent} from './components/appBlock/appBlock.component';
import {RouterModule} from '@angular/router';
import {ResolversModule} from './resolvers/resolvers.module';
import {GuardsModule} from './guards/guards.module';
import {AppLoginComponent} from './components/appLogin/appLogin.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {NpmService} from './services/npm.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRepositoriesComponent} from './components/appRepositories/appRepositories.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    AppRepositoriesComponent,
    AppBlockComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    GuardsModule,
    BrowserModule,
    ResolversModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthService, NpmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
