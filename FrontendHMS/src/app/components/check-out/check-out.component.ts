import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {

  customerId!:number;

  constructor(private api:ApiService){}
  checkOut()
  {
    this.api.checkOut(this.customerId).subscribe({
      next :() =>alert('Checked out Successfully'),
      error: () =>alert('Check Out Failed')
    });
  }
}
