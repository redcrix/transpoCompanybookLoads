import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsListingPage } from './vendors-listing.page';

describe('VendorsListingPage', () => {
  let component: VendorsListingPage;
  let fixture: ComponentFixture<VendorsListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorsListingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
