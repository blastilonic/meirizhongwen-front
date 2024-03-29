import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentencesComponent } from './sentences.component';

describe('FrasesComponent', () => {
  let component: SentencesComponent;
  let fixture: ComponentFixture<SentencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
