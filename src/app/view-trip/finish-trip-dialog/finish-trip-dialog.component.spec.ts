import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { MockDirectives } from 'ng-mocks';

import { FinishTripDialogComponent } from './finish-trip-dialog.component';

describe('FinishTripDialogComponent', () => {
  let component: FinishTripDialogComponent;
  let fixture: ComponentFixture<FinishTripDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinishTripDialogComponent, MockDirectives(MatDialogActions, MatDialogContent)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishTripDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
