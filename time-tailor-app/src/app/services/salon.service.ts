import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



export interface Salon {
  name: string;
  address: string;
  currency: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  duration: number;
  price: number;
  addons: Addon[];
}

export interface Addon {
  id: number;
  name: string;
  duration: number;
  price: number;
}

export interface SalonData {
  salon: Salon;
  services: Service[];
}

@Injectable({
  providedIn: 'root'
})
export class SalonService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/data`);
  }

  getSalonData(): Observable<SalonData> {
    return this.http.get<SalonData>(`${this.apiUrl}/data`);
  }
}
