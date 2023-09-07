import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Canva2Component } from './canva2.component';

describe('Canva2Component', () => {
  let component: Canva2Component;
  let fixture: ComponentFixture<Canva2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Canva2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Canva2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
