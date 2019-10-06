import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej7Page } from './ej7.page';

describe('Ej7Page', () => {
  let component: Ej7Page;
  let fixture: ComponentFixture<Ej7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ej7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ej7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
