import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent {

  roomNumber:string='';
  availability:string='';
  cleanStatus:string='';
  price:number=0;
  bedType:string='';

  constructor(private api:ApiService){}

  updateRoom()
  {
    const data={availability:this.availability,cleanStatus:this.cleanStatus,price:this.price,bedType:this.bedType};
    this.api.updateRoom(Number(this.roomNumber),data).subscribe({
      next: ()=>alert('Room updated Successfully'),
      error: ()=>alert('Update Failed')
    })
  }
}
