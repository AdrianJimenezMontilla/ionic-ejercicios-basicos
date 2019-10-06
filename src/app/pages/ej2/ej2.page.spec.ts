import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej2Page } from './ej2.page';

describe('Ej2Page', () => {
  let component: Ej2Page;
  let fixture: ComponentFixture<Ej2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ej2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ej2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
