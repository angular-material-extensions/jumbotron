import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'mat-jumbotron-content',
  templateUrl: './mat-jumbotron-content.component.html',
  styleUrls: ['./mat-jumbotron-content.component.scss']
})
export class MatJumbotronContentComponent implements OnInit {

  /** Template for page outlook content. */
  @ViewChild(TemplateRef)
  content: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }

}
