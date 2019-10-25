import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Temp1Component } from "./templates/temp1/temp1.component";
import { Temp2Component } from "./templates/temp2/temp2.component";
import { Temp3Component } from "./templates/temp3/temp3.component";
import { Temp4Component } from "./templates/temp4/temp4.component";

declare const chrome;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chromeext1';
  constructor(public dialog: MatDialog) {}
  template1(){
    this.dialog.open(Temp1Component).afterClosed().subscribe(result=>{
      console.log(result);
    })
  }
  template2(){
    this.dialog.open(Temp2Component)
  }
  template3(){
    this.dialog.open(Temp3Component)
  }
  template4(){
    // chrome.browser.openTab;
    alert('raja saini')
    this.dialog.open(Temp4Component)
  }

  testmessage(){
    
  }
}
