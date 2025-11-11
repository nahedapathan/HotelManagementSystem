import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent {
   customers:any[]=[];

   constructor(private api:ApiService){}

   loadCustomers()
   {
    this.api.getCustomers().subscribe(res =>this.customers=res);
   }

}
