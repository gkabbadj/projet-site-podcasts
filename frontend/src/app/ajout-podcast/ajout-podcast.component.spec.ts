import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPodcastComponent } from './ajout-podcast.component';

describe('AjoutPodcastComponent', () => {
  let component: AjoutPodcastComponent;
  let fixture: ComponentFixture<AjoutPodcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutPodcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
