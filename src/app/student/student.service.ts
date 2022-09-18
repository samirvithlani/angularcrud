import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  public addStudent(student:any):Observable<any>{

    return this.http.post("http://localhost:8080/student",student);
  }

  public listStudents():Observable<any>{
    return this.http.get("http://localhost:8080/student");
  }

  public getStudentById(id:number):Observable<any>{
    return this.http.get("http://localhost:8080/student/"+id);
  }
  public deleteStudentbyId(id:number):Observable<any>{
    return this.http.delete("http://localhost:8080/student/"+id);
  }
  public udpateStudent(student:any,id:number):Observable<any>{
    return this.http.put("http://localhost:8080/student/"+id,student);
  }
  
}
