import { Component } from '@angular/core';
import { UidaiValidationService } from './uidai-validation.service';

@Component({
  selector: 'sample-component',
  template: `<h1>Sample component</h1>`
})
export class SampleComponent {

  constructor(private uidaiValidationService:UidaiValidationService) {
  //   alert("hai");
  // alert(this.uidaiValidationService.isValidUidaiNumber('234123412346'));
  }
   
}
