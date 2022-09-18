import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent implements OnInit {

  constructor(private service:StudentService,private toster:ToastrService) { }
  students:any;

  deleteStudent(id:number){

    this.service.deleteStudentbyId(id).subscribe(res=>{
      
      
        this.toster.error("Student deleted successfully..");
        //to fetch updated list...
        this.ngOnInit();
      
    })
  }

  ngOnInit(): void {
    this.service.listStudents().subscribe(data=>{
      //data.object because from api we are getting array inside object named variable...
      //if array stored in xyz vc then data.xyz
      this.students = data.object
    })

  }

}
