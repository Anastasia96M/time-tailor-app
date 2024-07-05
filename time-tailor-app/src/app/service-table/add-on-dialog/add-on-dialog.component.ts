import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


interface Addon {
  id: number;
  name: string;
  duration: number;
  price: number;
  selected: boolean;
}


@Component({
  selector: 'app-add-on-dialog',
  templateUrl: './add-on-dialog.component.html',
  styleUrl: './add-on-dialog.component.scss'
})
export class AddOnDialogComponent {
  selectedAddons: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddOnDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close(this.selectedAddons);
  }

  toggleAddon(addon: any): void {
    const index = this.selectedAddons.findIndex(a => a.id === addon.id);
    if (index > -1) {
      this.selectedAddons.splice(index, 1);
    } else {
      this.selectedAddons.push(addon);
    }
  }
}
