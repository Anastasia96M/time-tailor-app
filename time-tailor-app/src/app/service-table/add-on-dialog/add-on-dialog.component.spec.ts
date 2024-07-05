import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnDialogComponent } from './add-on-dialog.component';

describe('AddOnDialogComponent', () => {
  let component: AddOnDialogComponent;
  let fixture: ComponentFixture<AddOnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddOnDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
