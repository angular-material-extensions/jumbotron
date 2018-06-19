import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {MatJumbotronComponent} from './mat-jumbotron.component';
import {MatCardModule} from '@angular/material';

describe('LibComponent', function () {
  let de: DebugElement;
  let comp: MatJumbotronComponent;
  let fixture: ComponentFixture<MatJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [MatJumbotronComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatJumbotronComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p.description'));
  });

  it('should create component', () => expect(comp).toBeDefined());

});
