import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej5Page } from './ej5.page';

describe('Ej5Page', () => {
  let component: Ej5Page;
  let fixture: ComponentFixture<Ej5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ej5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ej5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
