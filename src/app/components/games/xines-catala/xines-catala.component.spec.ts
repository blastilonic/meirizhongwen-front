import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XinesCatalaComponent } from './xines-catala.component';

describe('XinesCatalaComponent', () => {
  let component: XinesCatalaComponent;
  let fixture: ComponentFixture<XinesCatalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XinesCatalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XinesCatalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
