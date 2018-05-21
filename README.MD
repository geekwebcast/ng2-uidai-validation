# ng2-uidai-validation

## Installation

To install this library, run:

```bash
$ npm install ng2-uidai-validation --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ng2-uidai-validation
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { UidaiValidationModule } from 'ng2-uidai-validation';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    UidaiValidationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```

import { Component } from '@angular/core';
import { UidaiValidationService } from './uidai-validation.service';

@Component({
  selector: 'sample-component',
  template: `<h1>Sample component</h1>`
})
export class SampleComponent {
 public uidaiNo='234123412346';//Number should be string format
  constructor(private uidaiValidationService:UidaiValidationService) {

 let isValidUidaiNo=this.uidaiValidationService.isValidUidaiNumber(this.uidaiNo);//true or false
 
  }
   
}

```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [nandakumar-r](mailto:nandangalaxies@gmail.com)
