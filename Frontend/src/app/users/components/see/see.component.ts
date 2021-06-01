import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-see',
  templateUrl: './see.component.html',
  styleUrls: ['./see.component.scss']
})
export class SeeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


    ngOnInit(): void {
    
    }

}
