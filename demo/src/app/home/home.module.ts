import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatJumbotronModule} from '@angular-material-extensions/jumbotron';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatTabsModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HighlightModule} from 'ngx-highlightjs';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatJumbotronModule.forRoot(),
    HighlightModule.forRoot({theme: 'vs2015'}),
    HomeRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
