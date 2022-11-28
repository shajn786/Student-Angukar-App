import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {

  studentname=""
  rollno=""
  admissionno=""
  mobile=""
  college=""
  parentname=""
  parentmobno=""
  username=""
  password=""

  entry=()=>
  {
  
  let data:any={"studentname":this.studentname,"rollno":this.rollno,"admissionno":this.admissionno,
                "mobile":this.mobile,"college":this.college,"parentname":this.parentname,
              "parentmobno":this.parentmobno,"username":this.username,"password":this.password}

              console.log(data)
  }


}
