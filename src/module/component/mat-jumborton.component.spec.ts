import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MatJumbortonComponent } from './mat-jumborton.component';

describe('LibComponent', function () {
  let de: DebugElement;
  let comp: MatJumbortonComponent;
  let fixture: ComponentFixture<MatJumbortonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatJumbortonComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatJumbortonComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p.description'));
  });

  it('should create component', () => expect(comp).toBeDefined());

});
