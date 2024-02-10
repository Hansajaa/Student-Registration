import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css'],
})
export class ViewStudentsComponent implements OnInit {
  private http: HttpClient;

  studentlist: any;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.http.get('http://localhost:8080/student').subscribe((data) => {
      console.log(data);
      this.studentlist=data
    });
  }

  selectedStudent:any;

  deleteStudent(){
    this.http.delete(`http://localhost:8080/student/${this.selectedStudent.id}`).subscribe(data=>{
      console.log(data);
      this.getStudents();
      this.deleteSuccessfullMessage();
    })
  }

  deleteSuccessfullMessage(){
    Swal.fire({
      title: "Remove Successfully!",
      text: "Removed!",
      icon: "success"
    });
  }
}
