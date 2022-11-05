import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaulaComponent } from './paraula.component';

describe('ParaulaComponent', () => {
  let component: ParaulaComponent;
  let fixture: ComponentFixture<ParaulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParaulaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
