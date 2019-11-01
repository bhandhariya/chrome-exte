import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-templates',
  templateUrl: './all-templates.component.html',
  styleUrls: ['./all-templates.component.css']
})
export class AllTemplatesComponent implements OnInit {
  Data;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.get();
  }
  get(){
    this.http.get('https://chrome-ext-back.herokuapp.com/users/all').subscribe(this.cb)
  }
cb=(dt)=>{
  this.Data=(dt);
  console.log(this.Data)
}
}
