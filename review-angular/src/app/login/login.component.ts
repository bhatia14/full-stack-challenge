import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';
import { DataService } from '../services/data-access.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  url = "http://localhost:3000/api/employee";
  

  constructor(private dataService:DataService, 
    private router:Router,
    private http: Http) { 


    
  }

  ngOnInit() {
  }


  form =new FormGroup( {
    account: new FormGroup({
      username: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.connotContainSpace
      ]),
      password: new FormControl('', Validators.required)
    })
  });

  login(){
    console.log(this.form);
    console.log(this.username.value);
    //let resp = this.dataService.getData(this.username.value);
    this.http.get(this.url+'/'+this.username.value)
        .subscribe(response=> {
          if(this.password.value===response.json().password){
            response.json().role=='admin'? this.router.navigate(['admin']) : this.router.navigate(['employee'], { queryParams: { id: this.username.value }});
          }
        },
        (err: Response)=>{
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

  get username(){
    return this.form.get('account.username');
  }

  get password(){
    return this.form.get('account.password');
  }

}
