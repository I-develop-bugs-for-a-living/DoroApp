import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSharedItemComponent } from './new-shared-item.component';

describe('NewSharedItemComponent', () => {
  let component: NewSharedItemComponent;
  let fixture: ComponentFixture<NewSharedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSharedItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSharedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
