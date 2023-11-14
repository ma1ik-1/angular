import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistFilterComponent } from './wishlist-filter.component';

describe('WishlistFilterComponent', () => {
  let component: WishlistFilterComponent;
  let fixture: ComponentFixture<WishlistFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WishlistFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
