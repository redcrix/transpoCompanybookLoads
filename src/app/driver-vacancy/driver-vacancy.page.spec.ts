import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverVacancyPage } from './driver-vacancy.page';

describe('DriverVacancyPage', () => {
  let component: DriverVacancyPage;
  let fixture: ComponentFixture<DriverVacancyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverVacancyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverVacancyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
