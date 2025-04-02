import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductopcComponent } from './productopc.component';

describe('ProductopcComponent', () => {
  let component: ProductopcComponent;
  let fixture: ComponentFixture<ProductopcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductopcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductopcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
