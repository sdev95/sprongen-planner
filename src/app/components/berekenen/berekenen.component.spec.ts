import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerekenenComponent } from './berekenen.component';

describe('BerekenenComponent', () => {
  let component: BerekenenComponent;
  let fixture: ComponentFixture<BerekenenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BerekenenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BerekenenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
