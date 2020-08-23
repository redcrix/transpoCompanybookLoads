import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEstimatesPage } from './get-estimates.page';

describe('GetEstimatesPage', () => {
  let component: GetEstimatesPage;
  let fixture: ComponentFixture<GetEstimatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEstimatesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEstimatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
