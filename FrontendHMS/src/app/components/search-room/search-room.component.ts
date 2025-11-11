import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-search-room',
  templateUrl: './search-room.component.html',
  styleUrls: ['./search-room.component.css']
})
export class SearchRoomComponent {

  rooms:any[]=[];
  constructor(private api:ApiService){}

  loadRooms()
  {
    this.api.getRooms().subscribe(res => this.rooms=res);
  }
}
