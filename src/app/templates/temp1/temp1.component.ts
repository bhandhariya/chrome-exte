import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-temp1',
  templateUrl: './temp1.component.html',
  styleUrls: ['./temp1.component.css']
})
export class Temp1Component implements OnInit {
  temp1={
    "title":"Hello sir",
    "body":"I thought you may be interested in The Pocket Writer’s Guide, a new book that may benefit your readers"+

    "Please let me know if you are interested in seeing a copy or would be interested in speaking with the author, Susan Barnes. I am including the text of our press release in an attachment."+
    
    "I look forward to hearing from you"
  }
  constructor(private dialogRef: MatDialogRef<Temp1Component>) { }

  ngOnInit() {
    
  }
  save() {
    var obj={
      name:"raja"
    }
    this.dialogRef.close(this.temp1);
}

close() {
    this.dialogRef.close();
}

}

