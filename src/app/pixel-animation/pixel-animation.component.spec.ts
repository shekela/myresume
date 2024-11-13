import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelAnimationComponent } from './pixel-animation.component';

describe('PixelAnimationComponent', () => {
  let component: PixelAnimationComponent;
  let fixture: ComponentFixture<PixelAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PixelAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PixelAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
