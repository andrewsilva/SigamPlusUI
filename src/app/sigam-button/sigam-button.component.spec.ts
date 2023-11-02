import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigamButtonComponent } from './sigam-button.component';

describe('SigamButtonComponent', () => {
  let component: SigamButtonComponent;
  let fixture: ComponentFixture<SigamButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigamButtonComponent]
    });
    fixture = TestBed.createComponent(SigamButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
