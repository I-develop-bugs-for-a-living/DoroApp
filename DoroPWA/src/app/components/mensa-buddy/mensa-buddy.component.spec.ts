import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensaBuddyComponent } from './mensa-buddy.component';

describe('MensaBuddyComponent', () => {
  let component: MensaBuddyComponent;
  let fixture: ComponentFixture<MensaBuddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensaBuddyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensaBuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
