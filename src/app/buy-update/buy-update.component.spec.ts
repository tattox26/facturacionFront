import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyUpdateComponent } from './buy-update.component';

describe('BuyUpdateComponent', () => {
  let component: BuyUpdateComponent;
  let fixture: ComponentFixture<BuyUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
