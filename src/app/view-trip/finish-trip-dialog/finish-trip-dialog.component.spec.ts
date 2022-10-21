import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogActions, MatDialogContent, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatRowDef } from '@angular/material/table';
import { MockDirectives } from 'ng-mocks';

import { FinishTripDialogComponent } from './finish-trip-dialog.component';

describe('FinishTripDialogComponent', () => {
  let component: FinishTripDialogComponent;
  let fixture: ComponentFixture<FinishTripDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinishTripDialogComponent, MockDirectives(MatDialogActions, MatDialogContent, MatRowDef)],
      providers: [
        {
          provide: MatDialog,
          useValue: jasmine.createSpyObj('MatDialog', ['open'])
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        }
      ]
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
