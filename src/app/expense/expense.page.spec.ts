import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpensePage } from './expense.page';

describe('ExpensePage', () => {
  let component: ExpensePage;
  let fixture: ComponentFixture<ExpensePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExpensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

