import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputModulToggleComponent } from './input-modul-toggle.component';

describe('InputModulToggleComponent', () => {
  let component: InputModulToggleComponent;
  let fixture: ComponentFixture<InputModulToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputModulToggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputModulToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
