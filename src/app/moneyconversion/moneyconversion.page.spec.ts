import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoneyconversionPage } from './moneyconversion.page';

describe('MoneyconversionPage', () => {
  let component: MoneyconversionPage;
  let fixture: ComponentFixture<MoneyconversionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MoneyconversionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
