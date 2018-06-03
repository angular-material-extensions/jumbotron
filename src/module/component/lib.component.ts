import { Component } from '@angular/core';

@Component({
  selector: 'mat--component',
  templateUrl: './lib.component.html',
  styleUrls: ['./lib.component.scss']
})
export class LibComponent {
  description = 'Angular UI open source library built with material design in order ' +
    'to illustrate a highlighted/important information for the user';
}
