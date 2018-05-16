import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../login/username.validators';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  url = "http://localhost:3000/api/employee";
  constructor(private router:Router,
    private http: Http) { }

  ngOnInit() {
  }


  form =new FormGroup( {
    account: new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.connotContainSpace
      ]),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      empid: new FormControl('', Validators.required)
      
    })    
  });

  get name(){
    return this.form.get('account.name');
  }

  get password(){
    return this.form.get('account.password');
  }
  get email(){
    return this.form.get('account.email');
  }
  get status(){
    return this.form.get('account.status');
  }
  get role(){
    return this.form.get('account.role');
  }
  get empid(){
    return this.form.get('account.empid');
  }


  register(){
    
    //let resp = this.dataService.getData(this.username.value);
    let employeeObj = {
      emp_id: +this.empid.value,
      name: ""+this.name.value,
      email: ""+this.email.value,
      status: ""+this.status.value,
      role: ""+this.role.value,
      password: ""+this.password.value,
      id: +this.empid.value
    };
    let x = JSON.stringify(employeeObj);
    this.http.post(this.url, x)
        .subscribe(response=> {          
             this.router.navigate(['']);
        },
        (err: Response)=>{
          console.log(err.json());
          this.router.navigate(['error']);
        });
   

    // this.http.get(this.url+'/'+this.username.value)
    // .subscribe(response=> {
    //   console.log(response)
    // });

    //console.log(this.dataService.getData({this.form.}));
    

    this.form.setErrors({
      invalidLogin : true
    });
  }

}
