import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import {
  Customer,
  CustomerCreateDto,
  CustomerDto,
  getDummyCustomer,
} from './customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor() {}

  getDefaultCustomer(): Observable<Customer> {
    return of(getDummyCustomer()).pipe(delay(2000));
  }

  createCustomer(customer: CustomerCreateDto): Observable<CustomerDto> {
    return of(customer).pipe(delay(2000));
  }
}
