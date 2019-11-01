import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-templates',
  templateUrl: './create-templates.component.html',
  styleUrls: ['./create-templates.component.css']
})
export class CreateTemplatesComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
   this.http.get('https://chrome-ext-back.herokuapp.com/users/all').subscribe(r=>{
     console.log(r)
   })
  }

  templateForm=new FormGroup({
    name:new FormControl(''),
    template:new FormControl('')
  })
  templateFormSubmit(r){
   
    this.http.post('https://chrome-ext-back.herokuapp.com/users/create',r).subscribe(r=>{
     console.log(r)
   })

  }


}
