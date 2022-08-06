import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosEditModalComponent } from './modelos-edit-modal.component';

describe('ModelosEditModalComponent', () => {
  let component: ModelosEditModalComponent;
  let fixture: ComponentFixture<ModelosEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelosEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelosEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
