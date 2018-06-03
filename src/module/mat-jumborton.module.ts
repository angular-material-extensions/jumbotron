import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { MatJumbortonComponent } from './component/mat-jumborton.component';
import { LibService } from './service/lib.service';
import {MatCardModule} from '@angular/material';

// Export module's public API
export { MatJumbortonComponent } from './component/mat-jumborton.component';
export { LibService } from './service/lib.service';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [MatJumbortonComponent],
  declarations: [MatJumbortonComponent]
})
export class MatJumbortonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatJumbortonModule,
      providers: [LibService]
    };
  }
}
