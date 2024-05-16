import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPackageComponent } from './cards-package.component';

describe('CardsPackageComponent', () => {
  let component: CardsPackageComponent;
  let fixture: ComponentFixture<CardsPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsPackageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
