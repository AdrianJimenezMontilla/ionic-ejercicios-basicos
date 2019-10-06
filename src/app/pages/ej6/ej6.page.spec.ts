import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej6Page } from './ej6.page';

describe('Ej6Page', () => {
  let component: Ej6Page;
  let fixture: ComponentFixture<Ej6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ej6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ej6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
