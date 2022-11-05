import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TingliCatalaComponent } from './tingli-catala.component';

describe('TingliCatalaComponent', () => {
  let component: TingliCatalaComponent;
  let fixture: ComponentFixture<TingliCatalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TingliCatalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TingliCatalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
