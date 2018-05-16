import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  url = "http://localhost:3000/api/employee";
  employees:any[];
  open:boolean = false;
  oneEmp:any[];
  
  constructor(private router:Router,
    private http: Http) { }

  ngOnInit() {

    this.http.get(this.url)
        .subscribe(response=> {
          this.employees=response.json();
        },
        (err: Response)=>{
          this.router.navigate(['error']);
        });
  }

  deleteData(id){
    this.http.delete(this.url+'/'+id)
    .subscribe(response=> {
      //this.employees=response.json();
      let index = this.employees.indexOf(id);
      this.employees.splice(index, 1);
    },
    (err: Response)=>{
      this.router.navigate(['error']);
    });
  }

  assignReview(id){
    console.log(id)
  }

  openModal(employees, oneEmp){
    this.open=true;
    this.employees = employees;
    this.oneEmp =oneEmp;
  }
  closeModal(){
    this.open=false;
  }

  register(){
    this.router.navigate(['register']);
  }

  logout(){
    this.router.navigate(['logout']);
  }

}
