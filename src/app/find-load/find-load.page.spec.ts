import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLoadPage } from './find-load.page';

describe('FindLoadPage', () => {
  let component: FindLoadPage;
  let fixture: ComponentFixture<FindLoadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindLoadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindLoadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
