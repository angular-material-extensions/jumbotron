import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {MatJumbotronComponent} from './mat-jumbotron.component';
import {MatCardModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

describe('MatJumbotronComponent', function () {
  let de: DebugElement;
  let comp: MatJumbotronComponent;
  let fixture: ComponentFixture<MatJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FlexLayoutModule, MatCardModule],
      declarations: [MatJumbotronComponent]
    })
      .compileComponents();

    window.matchMedia = window.matchMedia || function () {
      return {
        matches: false,
        addListener: function () {
        },
        removeListener: function () {
        }
      };
    };
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatJumbotronComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p.description'));
  });

  it('should create component', () => expect(comp).toBeDefined());

});
