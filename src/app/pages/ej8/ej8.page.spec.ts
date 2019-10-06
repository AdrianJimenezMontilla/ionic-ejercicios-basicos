import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej8Page } from './ej8.page';

describe('Ej8Page', () => {
  let component: Ej8Page;
  let fixture: ComponentFixture<Ej8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ej8Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ej8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
