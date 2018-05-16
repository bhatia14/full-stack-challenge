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
  url2 = "http://localhost:3000/api/reviews";
  employees:any[];
  open:boolean = false;
  oneEmp:any[];
  reviewerDetails:any[];
  
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

  assignReview(){
    console.log(this.reviewerDetails);
    this.open=false;
  }

  reviewName(reviewerDetails, emp_id){
   // this.reviewerDetails = reviewerDetails;
    let x = {
      "emp_id": +emp_id,
      "review": "",
      "reviewer_id": +reviewerDetails
    }
    this.http.post(this.url2, x)
        .subscribe(response=> {          
             //this.router.navigate(['admin']);
             console.log("Assigned");
        },
        (err: Response)=>{
          console.log(err.json());
          this.router.navigate(['error']);
        });
   
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
