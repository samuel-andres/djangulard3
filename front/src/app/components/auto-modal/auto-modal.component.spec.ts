import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoModalComponent } from './auto-modal.component';

describe('AutoModalComponent', () => {
  let component: AutoModalComponent;
  let fixture: ComponentFixture<AutoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AutoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
