import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTripContainerComponent } from './create-trip-container.component';

describe('CreateTripContainerComponent', () => {
  let component: CreateTripContainerComponent;
  let fixture: ComponentFixture<CreateTripContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTripContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTripContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
