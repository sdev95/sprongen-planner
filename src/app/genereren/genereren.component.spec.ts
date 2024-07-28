import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenererenComponent } from './genereren.component';

describe('genereren', () => {
  let component: GenererenComponent;
  let fixture: ComponentFixture<GenererenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenererenComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GenererenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
