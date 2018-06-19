import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  html = `<mat-jumbotron imgURL="assets/logo.svg">
  <mat-jumbotron-content>
    <h1 class="display-1" ngClass.xs="display-3 text-center" ngClass.sm="display-3">jumbotron</h1>
    <p class="headline" ngClass.xs="text-center">Angular UI open source library built
      with material design in order to illustrate a highlighted/important information for the user
    </p>

    <p class="text-center"> Scroll down to see it in action!</p>

    <div fxLayout="row" fxLayout.xs="column"
         fxLayoutGap.xs="1rem"
         fxLayoutAlign="center center">
      <a mat-stroked-button
         color="primary"
         target="_blank"
         href="https://github.com/angular-material-extensions/jumbotron">
        <mat-icon>code</mat-icon>
        Code on Github
      </a>
      <a mat-stroked-button
         color="primary"
         target="_blank"
         href="doc/index.html">
        <mat-icon>note</mat-icon>
        Documentation
      </a>
    </div>

  </mat-jumbotron-content>
</mat-jumbotron>`;

  ts = `import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {
  }

}
`;

  scss = `.text-center {
  text-align: center !important;
}`;

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Home | jumbotron');
  }

}
