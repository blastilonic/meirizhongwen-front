import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchiplistComponent } from './matchiplist.component';

describe('MatchiplistComponent', () => {
  let component: MatchiplistComponent;
  let fixture: ComponentFixture<MatchiplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchiplistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchiplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
