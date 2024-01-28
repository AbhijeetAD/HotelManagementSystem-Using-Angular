import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: any[] = [];
  newCustomer: any = {}; // Declare newCustomer property

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    });
  }

  // Add missing methods for managing customer information (e.g., create, update, delete)

  updateCustomer(customerId: number): void {
    // Implement the update logic here
    console.log(`Updating customer with ID: ${customerId}`);
  }

  deleteCustomer(customerId: number): void {
    // Implement delete logic
    console.log(`Deleting customer with ID: ${customerId}`);
  }

  createCustomer(): void {
    // Implement create logic
    this.customerService.createCustomer(this.newCustomer).subscribe(response => {
      console.log('Customer added successfully:', response);
      // Optionally, you can reset the form or perform other actions
      this.newCustomer = {};
    }, error => {
      console.error('Error adding customer:', error);
    });
    
  }
}
