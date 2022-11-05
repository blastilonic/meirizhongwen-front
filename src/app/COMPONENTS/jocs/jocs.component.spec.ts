import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JocsComponent } from './jocs.component';

describe('JocsComponent', () => {
  let component: JocsComponent;
  let fixture: ComponentFixture<JocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
