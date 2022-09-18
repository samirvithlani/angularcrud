import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {


  constructor(private router:ActivatedRoute,private service:StudentService,private route:Router,
    private toster:ToastrService) { }

  student:any;
  id:number=0;

  studentGroup = new FormGroup({
    sName: new FormControl(''),
    sAge: new FormControl(''),
    sPhone: new FormControl(''),
    sEmail: new FormControl(''),
    sPassowrd: new FormControl('')
  })
  updateStudent(){
    this.service.udpateStudent(this.studentGroup.value,this.id).subscribe(res=>{
      this.toster.success("Student updated successfully..");
      //navigate to list component again..
      this.route.navigateByUrl("liststudent")
    })

  }

  ngOnInit(): void {

    this.id = this.router.snapshot.params['id'];
    this.service.getStudentById(this.id).subscribe(res=>{
      this.student = res.object;
    })

  }

}
