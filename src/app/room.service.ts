import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = 'http://localhost/8080/api/rooms';

  constructor(private http: HttpClient) { }

  getRooms(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  createRoom(roomData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, roomData);
  }
  
  // Add methods for CRUD operations (e.g., createRoom, updateRoom, deleteRoom)
}
