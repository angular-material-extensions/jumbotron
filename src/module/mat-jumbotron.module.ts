import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {MatCardModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatJumbotronComponent} from './component/mat-jumbotron/mat-jumbotron.component';
import {MatJumbotronContentComponent} from './component/mat-jumbotron/content/mat-jumbotron-content.component';

// Export module's public API
export {MatJumbotronComponent} from './component/mat-jumbotron/mat-jumbotron.component';
export {MatJumbotronContentComponent} from './component/mat-jumbotron/content/mat-jumbotron-content.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
  ],
  exports: [MatJumbotronComponent, MatJumbotronContentComponent],
  declarations: [MatJumbotronComponent, MatJumbotronContentComponent]
})
export class MatJumbotronModule {
}
