import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { UidaiValidationService } from './uidai-validation.service';

export * from './sample.component';
export * from './uidai-validation.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleComponent,
  ],
  providers:[UidaiValidationService],
  exports: [
    SampleComponent
  ]
})
export class UidaiValidationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UidaiValidationModule,
      providers: [UidaiValidationService]
    };
  }
}
