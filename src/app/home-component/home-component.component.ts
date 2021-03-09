import { Component, OnInit } from '@angular/core';
import {StudentApiService} from '../student-api.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  public studentDetails:any[] = [];

  constructor(public stuApi:StudentApiService,private router: Router) { }

  ngOnInit(): void {
   this.studentDetails= this.stuApi.onload();
    
    
  }
enter(student:any)
{
  console.log("Enter "+student.regno);
  this.router.navigate(['/viewStudent/'+student.regno])
}
delet(student:any)
{
  if(confirm("Are you sure to delete "+student.regno)) {
   this.studentDetails =  this.stuApi.delete(student.regno);
  }
  console.log("Delete  "+student.regno);
}
add()
{

}
}
