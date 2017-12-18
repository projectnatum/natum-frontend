import { Component, OnInit } from '@angular/core';
import { CustomersListService } from './customers-list.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  temp=[];
  customerNames:any[]=[];
  customerEmails:any[]=[];

  constructor(private customerService:CustomersListService) { }

  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers(){
    this.customerService.getAllCustomers().subscribe(
      (res)=>{
        console.log(res);
        this.temp=res;
       for(var i=0;i<this.temp.length;i++){
         this.customerNames.push(res[i]['custFirstName']);
         this.customerEmails.push(res[i]['custEmail']);
       }
       console.log(this.customerNames); 
       console.log(this.customerEmails);
        
      }
    )
  }

}
