import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Canva1Component } from './canva1.component';

describe('Canva1Component', () => {
  let component: Canva1Component;
  let fixture: ComponentFixture<Canva1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Canva1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Canva1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
