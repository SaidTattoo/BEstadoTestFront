import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { UserlistComponent } from './components/userlist/userlist.component';
import { SeeComponent } from './components/see/see.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [ UserlistComponent, SeeComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatChipsModule,
    
  ]
})
export class UsersModule { }
