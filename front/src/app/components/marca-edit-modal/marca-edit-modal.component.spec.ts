import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaEditModalComponent } from './marca-edit-modal.component';

describe('MarcaEditModalComponent', () => {
  let component: MarcaEditModalComponent;
  let fixture: ComponentFixture<MarcaEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarcaEditModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MarcaEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
