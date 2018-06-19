import {Component, ContentChild, Input, ViewEncapsulation} from '@angular/core';
import {ObservableMedia} from '@angular/flex-layout';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs/internal/Observable';
import {MatJumbotronContentComponent} from './content/mat-jumbotron-content.component';

@Component({
  selector: 'mat-jumbotron',
  templateUrl: './mat-jumbotron.component.html',
  styleUrls: ['./mat-jumbotron.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MatJumbotronComponent {

  @ContentChild(MatJumbotronContentComponent)
  jumbotronContent: MatJumbotronContentComponent;

  @Input()
  title: string;

  @Input()
  description2: string;

  @Input()
  image: string;

  @Input()
  isFluid = true;

  displayIdentifier: Observable<number>;

  description = 'Angular UI open source library built with material design in order ' +
    'to illustrate a highlighted/important information for the user';

  constructor() {
  }

  // private initJumbotronObsMedia() {
  //   const matrix = new Map([
  //     ['xs', 1],
  //     ['sm', 1],
  //     ['md', 2],
  //     ['lg', 3],
  //     ['xl', 3]
  //   ]);
  //   let start = 0;
  //   matrix.forEach((cols, mqAlias) => {
  //     if (this.observableMedia.isActive(mqAlias)) {
  //       start = cols;
  //       console.log('start = ', start, ' cols = ', cols);
  //     }
  //   });
  //   this.displayIdentifier = this.observableMedia
  //     .asObservable()
  //     .pipe(
  //       map(change => {
  //         console.log(change);
  //         return matrix.get(change.mqAlias);
  //       })
  //       , startWith(start));
  // }
}
