import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent {

  private http:HttpClient;

  constructor(private httpClient:HttpClient){
      this.http=httpClient;
  }

  student={
      firstName:null,
      lastName:null,
      contactNumber:null,
      address:null
  }

  addStudent(){
    if(this.student.firstName!=null && this.student.lastName!=null && this.student.contactNumber!=null && this.student.address!=null){
      this.http.post("http://localhost:8080/student",this.student)
      .subscribe(data=>{
          console.log(data);
      })
  
      this.student.firstName=null;
      this.student.lastName=null;
      this.student.contactNumber=null;
      this.student.address=null;
      this.successAlert();
    }else{
      this.warningAlert();
    }
  }

  successAlert(){
    Swal.fire({
      title: "Successfully Student Regitered !",
      text: "Registered!",
      icon: "success"
    });
  }

  warningAlert(){
    Swal.fire({
      title: "Something went wrong!",
      text: "Enter All Details!",
      icon: "warning"
    });
  }
  
}
