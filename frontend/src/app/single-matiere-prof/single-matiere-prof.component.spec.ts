import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMatiereProfComponent } from './single-matiere-prof.component';

describe('SingleMatiereProfComponent', () => {
  let component: SingleMatiereProfComponent;
  let fixture: ComponentFixture<SingleMatiereProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMatiereProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMatiereProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
