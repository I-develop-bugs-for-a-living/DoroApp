import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketcardComponent } from './marketcard.component';

describe('MarketcardComponent', () => {
  let component: MarketcardComponent;
  let fixture: ComponentFixture<MarketcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
