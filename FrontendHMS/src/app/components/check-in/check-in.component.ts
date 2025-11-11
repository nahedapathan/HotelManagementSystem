import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent {

  form:any={name:'',roomNumber:'',deposit:0};

  constructor(private api:ApiService){}

  checkIn()
  {
     this.api.checkIn(this.form).subscribe({
      next: ()=>alert('Customer Checked In!'),
      error: ()=>alert('Error during check-in')
     });
  }
}
