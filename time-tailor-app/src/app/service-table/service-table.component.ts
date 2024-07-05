import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SalonService } from '../services/salon.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddOnDialogComponent } from './add-on-dialog/add-on-dialog.component';


interface Addon {
  id: number;
  name: string;
  duration: number;
  price: number;
  selected?: boolean;
}

interface Service {
  id: number;
  name: string;
  description: string;
  duration: number;
  price: number;
  addons: Addon[];
  selectedAddons?: Addon[];
}

@Component({
  selector: 'app-service-table',
  templateUrl: './service-table.component.html',
  styleUrl: './service-table.component.scss'
})
export class ServiceTableComponent {
  

  displayedColumns: string[] = ['select', 'name', 'description', 'duration', 'price', 'addons', 'action'];
  dataSource!: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dataService: SalonService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openAddonDialog(service: any): void {
    const dialogRef = this.dialog.open(AddOnDialogComponent, {
      data: service.addons
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        service.selectedAddons = result;
        this.dataSource = new MatTableDataSource(this.dataSource.data); // Refresh the table
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** Checks if at least one service is selected. */
  hasSelectedServices(): boolean {
    return this.selection.selected.length > 0;
  }

  /** Book selected services and redirect to contact-info page. */
  bookSelectedServices(): void {
    if (this.hasSelectedServices()) {
      // Perform any necessary actions before redirecting
      this.router.navigate(['/contact-info']);
    } else {
      alert('No services were selected for booking.');
    }
  }

    navigateToContactInfo() {
    this.router.navigate(['/contact-info']);
  }

}
