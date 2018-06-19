import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatJumbotronContentComponent } from './mat-jumbotron-content.component';

describe('MatJumbotronContentComponent', () => {
  let component: MatJumbotronContentComponent;
  let fixture: ComponentFixture<MatJumbotronContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatJumbotronContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatJumbotronContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
