import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeIndComponent } from './employee-ind.component';

describe('EmployeeIndComponent', () => {
  let component: EmployeeIndComponent;
  let fixture: ComponentFixture<EmployeeIndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeIndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeIndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
