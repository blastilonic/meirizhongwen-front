import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XinesSpeechComponent } from './xines-speech.component';

describe('XinesSpeechComponent', () => {
  let component: XinesSpeechComponent;
  let fixture: ComponentFixture<XinesSpeechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XinesSpeechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XinesSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
