import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedFoodsListComponent } from './ordered-foods-list.component';

describe('OrderedFoodsListComponent', () => {
  let component: OrderedFoodsListComponent;
  let fixture: ComponentFixture<OrderedFoodsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderedFoodsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderedFoodsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
