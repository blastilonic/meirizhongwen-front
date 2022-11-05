import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HanziPinyinComponent } from './hanzi-pinyin.component';

describe('HanziPinyinComponent', () => {
  let component: HanziPinyinComponent;
  let fixture: ComponentFixture<HanziPinyinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HanziPinyinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HanziPinyinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
