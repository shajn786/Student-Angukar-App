import { Component } from '@angular/core';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent {

  admno=""

  search=()=>
  {
    let data:any={"admno":this.admno}

    console.log(data)
  }

}
