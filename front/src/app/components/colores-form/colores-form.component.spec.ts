import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoresFormComponent } from './colores-form.component';

describe('ColoresFormComponent', () => {
  let component: ColoresFormComponent;
  let fixture: ComponentFixture<ColoresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColoresFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
