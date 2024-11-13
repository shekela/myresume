import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencepageComponent } from './experiencepage.component';

describe('ExperiencepageComponent', () => {
  let component: ExperiencepageComponent;
  let fixture: ComponentFixture<ExperiencepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperiencepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
