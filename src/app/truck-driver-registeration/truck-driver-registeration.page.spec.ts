import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckDriverRegisterationPage } from './truck-driver-registeration.page';

describe('TruckDriverRegisterationPage', () => {
  let component: TruckDriverRegisterationPage;
  let fixture: ComponentFixture<TruckDriverRegisterationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckDriverRegisterationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckDriverRegisterationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
