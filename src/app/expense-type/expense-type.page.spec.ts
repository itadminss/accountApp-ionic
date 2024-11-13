import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ExpenseTypePage } from './expense-type.page';

describe('ExpenseTypePage', () => {
  let component: ExpenseTypePage;
  let fixture: ComponentFixture<ExpenseTypePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExpenseTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
