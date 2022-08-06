import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosFormComponent } from './modelos-form.component';

describe('ModelosFormComponent', () => {
  let component: ModelosFormComponent;
  let fixture: ComponentFixture<ModelosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
