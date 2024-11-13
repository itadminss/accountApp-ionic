import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncomeTypePage } from './income-type.page';

describe('IncomeTypePage', () => {
  let component: IncomeTypePage;
  let fixture: ComponentFixture<IncomeTypePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IncomeTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
