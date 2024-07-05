import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface Salon {
  name: string;
  address: string;
  currency: string;
}

interface Service {
  id: number;
  name: string;
  description: string;
  duration: number;
  price: number;
  addons: Addon[];
}

interface Addon {
  id: number;
  name: string;
  duration: number;
  price: number;
}

interface SalonData {
  salon: Salon;
  services: Service[];
}

@Injectable({
  providedIn: 'root'
})
export class SalonService {
  private apiUrl = 'http://localhost:3000/data';

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
