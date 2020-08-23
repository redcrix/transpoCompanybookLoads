import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisterationPage } from './user-registeration.page';

describe('UserRegisterationPage', () => {
  let component: UserRegisterationPage;
  let fixture: ComponentFixture<UserRegisterationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegisterationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisterationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
