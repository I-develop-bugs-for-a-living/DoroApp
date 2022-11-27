import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedcardComponent } from './sharedcard.component';

describe('SharedcardComponent', () => {
  let component: SharedcardComponent;
  let fixture: ComponentFixture<SharedcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
