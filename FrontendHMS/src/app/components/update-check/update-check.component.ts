import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-update-check',
  templateUrl: './update-check.component.html',
  styleUrls: ['./update-check.component.css']
})
export class UpdateCheckComponent {

  customerId!:number;
  roomNumber:string='';
  status: string='checkedin';

  constructor(private api:ApiService){}

  updateCheck(){
    const data={
      roomNumber:this.roomNumber,status:this.status
    };
    this.api.updateRoom(this.customerId,data).subscribe({
      next: ()=>alert('Check status Updated'),
      error :()=>alert('Failed to update')
    });
  }
}
