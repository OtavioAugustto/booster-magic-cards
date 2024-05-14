import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBtnComponent } from './dynamic-btn.component';

describe('DynamicBtnComponent', () => {
  let component: DynamicBtnComponent;
  let fixture: ComponentFixture<DynamicBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
