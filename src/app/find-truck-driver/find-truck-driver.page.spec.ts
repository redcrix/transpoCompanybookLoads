import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTruckDriverPage } from './find-truck-driver.page';

describe('FindTruckDriverPage', () => {
  let component: FindTruckDriverPage;
  let fixture: ComponentFixture<FindTruckDriverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTruckDriverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTruckDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
