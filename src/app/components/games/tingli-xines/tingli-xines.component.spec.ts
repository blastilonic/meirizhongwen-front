import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TingliXinesComponent } from './tingli-xines.component';

describe('TingliXinesComponent', () => {
  let component: TingliXinesComponent;
  let fixture: ComponentFixture<TingliXinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TingliXinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TingliXinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
