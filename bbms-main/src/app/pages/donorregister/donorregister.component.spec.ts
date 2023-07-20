import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorregisterComponent } from './donorregister.component';

describe('DonorregisterComponent', () => {
  let component: DonorregisterComponent;
  let fixture: ComponentFixture<DonorregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
