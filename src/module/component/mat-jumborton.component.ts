import {Component, Input} from '@angular/core';

@Component({
  selector: 'mat-jumborton',
  templateUrl: './mat-jumborton.component.html',
  styleUrls: ['./mat-jumborton.component.scss']
})
export class MatJumbortonComponent {

  @Input()
  title: string;

  @Input()
  description2: string;

  @Input()
  image: string;

  description = 'Angular UI open source library built with material design in order ' +
    'to illustrate a highlighted/important information for the user';
}
