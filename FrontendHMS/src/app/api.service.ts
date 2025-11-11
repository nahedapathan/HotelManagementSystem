import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl='http://localhost:8080/api'
  constructor(private http:HttpClient) { }

  //customer
  getCustomers():Observable<any[]>
  {
    return this.http.get<any>(`${this.baseUrl}/customers`);
  }

  addCustomer(data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/customers`,data);
  }


  //rooms
  getRooms():Observable<any[]>
  {
    return this.http.get<any[]>(`${this.baseUrl}/rooms`);
  }

  updateRoom(id:number,data:any):Observable<any>
  {
    return this.http.put(`${this.baseUrl}/rooms/${id}`,data);
  }

  //drivers
  getDrivers():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/drivers`);
  }

  //employee//manager
  getManagers():Observable<any[]>
  {
    return this.http.get<any[]>(`${this.baseUrl}/managers`);
  }

  //checkinout
  checkIn(data:any):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/customers/checkin`,data);
  }


  checkOut(id:number):Observable<any>{
    return this.http.put(`${this.baseUrl}/customers/checkout/${id}`,{});
  }

}
