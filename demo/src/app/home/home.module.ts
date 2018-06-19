import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatJumbotronModule} from '@angular-material-extensions/jumbotron';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatJumbotronModule.forRoot(),
    HomeRoutingModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
