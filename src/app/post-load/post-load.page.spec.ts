import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLoadPage } from './post-load.page';

describe('PostLoadPage', () => {
  let component: PostLoadPage;
  let fixture: ComponentFixture<PostLoadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostLoadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLoadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
