import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerDashboardComponent } from './volunteer-dashboard.component';

describe('VolunteerDashboardComponent', () => {
  let component: VolunteerDashboardComponent;
  let fixture: ComponentFixture<VolunteerDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerDashboardComponent]
    });
    fixture = TestBed.createComponent(VolunteerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
