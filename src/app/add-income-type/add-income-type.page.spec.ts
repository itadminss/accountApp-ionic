import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddIncomeTypePage } from './add-income-type.page';

describe('AddIncomeTypePage', () => {
  let component: AddIncomeTypePage;
  let fixture: ComponentFixture<AddIncomeTypePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddIncomeTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
