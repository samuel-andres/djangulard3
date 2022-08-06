import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoEditModalComponent } from './auto-edit-modal.component';

describe('AutoEditModalComponent', () => {
  let component: AutoEditModalComponent;
  let fixture: ComponentFixture<AutoEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoEditModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AutoEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
