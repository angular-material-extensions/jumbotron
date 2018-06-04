import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { MatJumbotronComponent } from './component/mat-jumbotron.component';
import { LibService } from './service/lib.service';
import {MatCardModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

// Export module's public API
export { MatJumbotronComponent } from './component/mat-jumbotron.component';
export { LibService } from './service/lib.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
  ],
  exports: [MatJumbotronComponent],
  declarations: [MatJumbotronComponent]
})
export class MatJumbotronModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatJumbotronModule,
      providers: [LibService]
    };
  }
}
