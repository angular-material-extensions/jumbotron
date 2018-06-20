import {Component, ContentChild, Input, ViewEncapsulation} from '@angular/core';
import {MatJumbotronContentComponent} from './content/mat-jumbotron-content.component';

@Component({
  selector: 'mat-jumbotron',
  templateUrl: './mat-jumbotron.component.html',
  styleUrls: ['./mat-jumbotron.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MatJumbotronComponent {

  @ContentChild(MatJumbotronContentComponent)
  jumbotronContent: MatJumbotronContentComponent;

  @Input()
  imgURL: string;

  constructor() {
  }

}
