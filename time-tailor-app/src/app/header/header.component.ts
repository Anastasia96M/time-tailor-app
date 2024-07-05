import { Component, OnInit } from '@angular/core';
import { SalonService } from '../services/salon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] 
})
export class HeaderComponent implements OnInit {
  salonName: string = '';

  constructor(private salonService: SalonService) { }

  ngOnInit(): void {

  }
}