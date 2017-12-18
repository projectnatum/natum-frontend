import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CustomersListService {

  private baseUrl="http://localhost:8080/api/customers"

  constructor(private http:Http) { }

  getAllCustomers():Observable<any>{
   return this.http.get(this.baseUrl).map(res=>res.json());
  }

}
