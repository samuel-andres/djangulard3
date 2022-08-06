import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaModalComponent } from './marca-modal.component';

describe('MarcaModalComponent', () => {
  let component: MarcaModalComponent;
  let fixture: ComponentFixture<MarcaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarcaModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MarcaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
