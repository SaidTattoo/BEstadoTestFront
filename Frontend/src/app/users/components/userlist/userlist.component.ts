import { SeeComponent } from './../see/see.component';
import { UsersService } from './../../service/users.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  displayedColumns: string[] = ['status','name', 'lastName', 'email','actions'];
  user:any;
  dataSource = [];

  constructor(public _user: UsersService,public dialog: MatDialog) { }


  ngOnInit(): void {
    this.getAllUsers()
  }

  async getAllUsers(){
    await this._user.getAllUsers().subscribe((resp:any) =>{
      if(resp.codeResponse===200){
        this.dataSource = resp.data
      }
    })
  }
  getUser(user){
    let dialogRef = this.dialog.open(SeeComponent, {
      height: '400px',
      width: '600px',
      data:user
    });
  }
}
