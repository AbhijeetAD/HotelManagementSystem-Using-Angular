import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../room.service';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  rooms: any[] = [];
  newRoom: any = {}; // Declare newRoom property

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.roomService.getRooms().subscribe(data => {
      this.rooms = data;
    });
  }

  // Add methods for managing room information (e.g., create, update, delete)

  createRoom(): void {
    // Use this.newRoom to access the form data
    const roomData = { 
      roomNumber: this.newRoom.roomNumber,
      roomType: this.newRoom.roomType,
      // Add other properties as needed
    };

    this.roomService.createRoom(roomData).subscribe(response => {
      // Handle the response, update UI, etc.
      console.log('Room created successfully:', response);
    });
  }

  updateRoom(roomId: number): void {
    // Implement update logic
  }

  deleteRoom(roomId: number): void {
    // Implement delete logic
  }
}
