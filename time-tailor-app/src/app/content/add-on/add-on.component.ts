import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface Addon {
  id: number;
  name: string;
  duration: number;
  price: number;
  selected: boolean;
}


@Component({
  selector: 'app-add-on',
  templateUrl: './add-on.component.html',
  styleUrl: './add-on.component.scss'
})
export class AddOnComponent {
  constructor(
    public dialogRef: MatDialogRef<AddOnComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string, addons: Addon[] }
  ) {}

  onSave(): void {
    const selectedAddons = this.data.addons.filter(addon => addon.selected);
    this.dialogRef.close(selectedAddons);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
