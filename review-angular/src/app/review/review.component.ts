import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../login/username.validators';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  url = "http://localhost:3000/api/reviews";
  open:boolean = false;
  emp_id:any;
  reviewer_id:any;
  id:any;
  constructor(private router:Router,
    private http: Http,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe();
    //let id =this.route.snapshot.paramMap.get();
    this.route.queryParamMap.subscribe();
    this.emp_id = this.route.snapshot.queryParamMap.get('emp_id');
    this.reviewer_id = this.route.snapshot.queryParamMap.get('review_id');
    this.id = this.route.snapshot.queryParamMap.get('id');
  }


  form =new FormGroup( {
    reviews: new FormGroup({
      review: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.connotContainSpace
      ]),
     
      
    })    
  });

  get review(){
    return this.form.get('reviews.review');
  }


  addReview(){
    let x = {
      "emp_id": this.emp_id,
      "review": this.review.value,
      "reviewer_id": this.reviewer_id
    }
    this.http.put(this.url+'/'+this.emp_id, x)
        .subscribe(response=> {          
             alert("success");
             this.router.navigate(['employee'], { queryParams: { id: this.emp_id }})
             //console.log("Assigned");
        },
        (err: Response)=>{
          console.log(err.json());
          this.router.navigate(['error']);
        });
   
  }

  

}
