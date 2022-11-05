import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchXinesCatalaComponent } from './match-xines-catala.component';

describe('MatchXinesCatalaComponent', () => {
  let component: MatchXinesCatalaComponent;
  let fixture: ComponentFixture<MatchXinesCatalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchXinesCatalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchXinesCatalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
