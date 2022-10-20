import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTripContainerComponent } from './view-trip-container.component';

describe('ViewTripContainerComponent', () => {
  let component: ViewTripContainerComponent;
  let fixture: ComponentFixture<ViewTripContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTripContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTripContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
