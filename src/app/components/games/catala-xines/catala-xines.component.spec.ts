import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalaXinesComponent } from './catala-xines.component';

describe('CatalaXinesComponent', () => {
  let component: CatalaXinesComponent;
  let fixture: ComponentFixture<CatalaXinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalaXinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalaXinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
