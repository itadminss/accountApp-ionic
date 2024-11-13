import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddExpenseTypePage } from './add-expense-type.page';

describe('AddExpenseTypePage', () => {
  let component: AddExpenseTypePage;
  let fixture: ComponentFixture<AddExpenseTypePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddExpenseTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
