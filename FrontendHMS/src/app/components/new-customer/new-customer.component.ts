import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent {
  customer: any = {
  idType: '',
  number: '',
  name: '',
  gender: '',
  country: '',
  room: { roomNumber: 0 },
  checkinStatus:'',
  deposit: 0,
};


  constructor(private api:ApiService, private router: Router) {}

  saveCustomer() {
    this.api.addCustomer(this.customer).subscribe({
      next: (res) => {
        alert('Customer added successfully ✅');
        this.router.navigate(['/reception']);
      },
      error: (err) => {
        console.error(err);
        alert('Something went wrong ❌');
      }
    });
  }

}
