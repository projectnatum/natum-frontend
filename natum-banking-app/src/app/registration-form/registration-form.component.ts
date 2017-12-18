import { RegistrationService } from './registration.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

 registrationForm:FormGroup;
 successMessage:string;
 

  constructor(private fb:FormBuilder, private registrationService:RegistrationService) { }

  ngOnInit() {

    this.registrationForm=this.fb.group({
      custFirstName:null,
      custLastName:null,
      custEmail:null,
      custSSN:null,
      custDOB:null,
      custZip:null 
    });
  }

  formReset(){
    this.registrationForm.reset(); 
  }
  

  saveCustomer(){

    // console.log(this.registrationForm.value);
    // console.log(this.registrationForm.value["dob"]._d);
    // var obj=new Date(this.registrationForm.value["dob"]._d);
    // console.log(obj,"--->converted date");
    let registrationData=Object.assign({},this.registrationForm.value);
    this.registrationService.saveCustomers(registrationData).subscribe(
      (res)=>{
        console.log(res._body,"from server")
        if(res){
          this.successMessage="Details saved!";
        }
      })   
      this.registrationForm.reset();
    

  }

}
