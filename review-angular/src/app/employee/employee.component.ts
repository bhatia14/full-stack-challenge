import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  url = "http://localhost:3000/api/employee";
  url2 = "http://localhost:3000/api/reviews";
  employee:any[];
  employees:any[];
  open:boolean = false;
  oneEmp:any[];
  reviewerDetails:any[];
  sub:any;
  emp_id:any;
  constructor(private router:Router,
    private http: Http,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.emp_id = +params['id'] || 0;


        this.http.get(this.url+'/'+this.emp_id)
        .subscribe(response=> {
          this.employee=response.json();
        },
        (err: Response)=>{
          this.router.navigate(['error']);
        });

        this.http.get(this.url2)
        .subscribe(response=> {
          if(response.status==200)
            this.employees=response.json();
        },
        (err: Response)=>{
          this.router.navigate(['error']);
        });


      });
    
  }

}
