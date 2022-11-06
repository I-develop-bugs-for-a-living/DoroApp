import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplecardComponent } from './peoplecard.component';

describe('PeoplecardComponent', () => {
  let component: PeoplecardComponent;
  let fixture: ComponentFixture<PeoplecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeoplecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
