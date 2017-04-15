import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyPublishedComponent } from './recently-published.component';

describe('RecentlyPublishedComponent', () => {
  let component: RecentlyPublishedComponent;
  let fixture: ComponentFixture<RecentlyPublishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyPublishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyPublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
