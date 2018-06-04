import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatJumbotronModule} from '@angular-material-extensions/jumbotron';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

@NgModule({
  imports: [
    CommonModule,
    MatJumbotronModule.forRoot(),
    HomeRoutingModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
