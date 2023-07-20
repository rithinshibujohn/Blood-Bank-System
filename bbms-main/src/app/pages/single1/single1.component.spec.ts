import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Single1Component } from './single1.component';

describe('Single1Component', () => {
  let component: Single1Component;
  let fixture: ComponentFixture<Single1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Single1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Single1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
