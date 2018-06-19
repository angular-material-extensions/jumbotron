import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatJumbotronModule} from '@angular-material-extensions/jumbotron';
import {GettingStartedComponent} from './getting-started.component';
import {GettingStartedRoutingModule} from './getting-started-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatJumbotronModule,
    GettingStartedRoutingModule
  ],
  declarations: [GettingStartedComponent],
})
export class GettingStartedModule {
}
