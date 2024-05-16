import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBoosterComponent } from './card-booster.component';

describe('CardBoosterComponent', () => {
  let component: CardBoosterComponent;
  let fixture: ComponentFixture<CardBoosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBoosterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardBoosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
