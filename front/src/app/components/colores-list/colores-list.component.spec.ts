import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoresListComponent } from './colores-list.component';

describe('ColoresListComponent', () => {
  let component: ColoresListComponent;
  let fixture: ComponentFixture<ColoresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColoresListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
