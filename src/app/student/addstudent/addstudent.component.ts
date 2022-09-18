import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private service:StudentService,private toster:ToastrService,private route:Router) { }

  studentGroup = new FormGroup({
    sName: new FormControl(''),
    sAge: new FormControl(''),
    sPhone: new FormControl(''),
    sEmail: new FormControl(''),
    sPassoerd: new FormControl('')
  })

  
  addStudent(){
    //call api from service... and send object to api
    this.service.addStudent(this.studentGroup.value).subscribe(res=>{
      
      this.toster.success("Student added successfully..");
      this.route.navigateByUrl("liststudent")
    })
  }

  
  

  ngOnInit(): void {
  }

}
