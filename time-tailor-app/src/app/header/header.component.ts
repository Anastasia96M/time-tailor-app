import { Component, Input } from '@angular/core';
import { SalonService, SalonData } from '../services/salon.service';


interface Salon {
  name: string;
  address: string;
  currency: string;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor() { }

}
