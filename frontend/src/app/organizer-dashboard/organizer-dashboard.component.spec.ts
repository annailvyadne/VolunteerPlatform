import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerDashboardComponent } from './organizer-dashboard.component';

describe('OrganizerDashboardComponent', () => {
  let component: OrganizerDashboardComponent;
  let fixture: ComponentFixture<OrganizerDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizerDashboardComponent]
    });
    fixture = TestBed.createComponent(OrganizerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
