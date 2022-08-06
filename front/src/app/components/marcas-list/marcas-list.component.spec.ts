import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasListComponent } from './marcas-list.component';

describe('MarcasListComponent', () => {
  let component: MarcasListComponent;
  let fixture: ComponentFixture<MarcasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarcasListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MarcasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
