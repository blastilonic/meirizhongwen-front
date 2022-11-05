import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsTagComponent } from './words-tag.component';

describe('WordsTagComponent', () => {
  let component: WordsTagComponent;
  let fixture: ComponentFixture<WordsTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordsTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
