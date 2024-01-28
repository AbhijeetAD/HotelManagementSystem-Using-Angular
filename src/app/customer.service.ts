import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost/8080/customers';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCustomerById(customerId: number): Observable<any> {
    const url = `${this.apiUrl}/${customerId}`;
    return this.http.get<any>(url);
  }

  createCustomer(customerData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, customerData);
  }

  updateCustomer(customerId: number, updatedData: any): Observable<any> {
    const url = `${this.apiUrl}/${customerId}`;
    return this.http.put<any>(url, updatedData);
  }

  deleteCustomer(customerId: number): Observable<any> {
    const url = `${this.apiUrl}/${customerId}`;
    return this.http.delete<any>(url);
  }
}
