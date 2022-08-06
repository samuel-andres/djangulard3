import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosModalComponent } from './modelos-modal.component';

describe('ModelosModalComponent', () => {
  let component: ModelosModalComponent;
  let fixture: ComponentFixture<ModelosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelosModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModelosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
