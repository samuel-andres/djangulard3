import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosListComponent } from './modelos-list.component';

describe('ModelosListComponent', () => {
  let component: ModelosListComponent;
  let fixture: ComponentFixture<ModelosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelosListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModelosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
