import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseAuthenticationComponent } from './firebase-authentication.component';

describe('FirebaseAuthenticationComponent', () => {
  let component: FirebaseAuthenticationComponent;
  let fixture: ComponentFixture<FirebaseAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseAuthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
