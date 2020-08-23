import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTrucksPage } from './find-trucks.page';

describe('FindTrucksPage', () => {
  let component: FindTrucksPage;
  let fixture: ComponentFixture<FindTrucksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTrucksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTrucksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
