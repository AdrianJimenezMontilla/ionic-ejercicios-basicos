import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej1Page } from './ej1.page';

describe('Ej1Page', () => {
  let component: Ej1Page;
  let fixture: ComponentFixture<Ej1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ej1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ej1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
