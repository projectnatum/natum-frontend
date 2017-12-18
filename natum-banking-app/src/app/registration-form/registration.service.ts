import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions,Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RegistrationService {

  constructor(private http:Http) { }

  private baseUrl="http://localhost:8080/api/customers";

  saveCustomers(registrationData:any):Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl,registrationData,options);
  }

}
