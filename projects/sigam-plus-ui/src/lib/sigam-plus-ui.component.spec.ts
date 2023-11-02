import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigamPlusUIComponent } from './sigam-plus-ui.component';

describe('SigamPlusUIComponent', () => {
  let component: SigamPlusUIComponent;
  let fixture: ComponentFixture<SigamPlusUIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigamPlusUIComponent]
    });
    fixture = TestBed.createComponent(SigamPlusUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
