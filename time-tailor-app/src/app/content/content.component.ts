import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SalonService } from '../services/salon.service';
import { AddOnComponent } from './add-on/add-on.component';
import { MatDialog } from '@angular/material/dialog';
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
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  displayedColumns: string[] = ['name', 'description', 'duration', 'price', 'selectedAddons', 'action', 'booking'];
  dataSource!: MatTableDataSource<Service>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private salonService: SalonService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.salonService.getData().subscribe(data => {
      this.dataSource = new MatTableDataSource(data.services);
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

  seeDetails(service: Service) {
    const dialogRef = this.dialog.open(AddOnComponent, {
      data: { name: service.name, addons: service.addons }
    });

    dialogRef.afterClosed().subscribe(selectedAddons => {
      if (selectedAddons) {
        service.selectedAddons = selectedAddons;
        this.updateServiceDetails(service);
      }
    });
  }

  updateServiceDetails(service: Service) {
    // Trigger table update
    this.dataSource.data = [...this.dataSource.data];
  }

  bookService(service: Service) {
    alert(`Booking service: ${service.name} with addons: ${service.selectedAddons!.map(addon => addon.name).join(', ')}`);
  }
}
