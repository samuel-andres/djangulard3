import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosListComponent } from './autos-list.component';

describe('AutosListComponent', () => {
  let component: AutosListComponent;
  let fixture: ComponentFixture<AutosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutosListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AutosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
