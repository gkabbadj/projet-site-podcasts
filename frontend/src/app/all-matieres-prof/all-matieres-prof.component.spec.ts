import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMatieresProfComponent } from './all-matieres-prof.component';

describe('AllMatieresProfComponent', () => {
  let component: AllMatieresProfComponent;
  let fixture: ComponentFixture<AllMatieresProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMatieresProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMatieresProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
