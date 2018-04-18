import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from '../app.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns = ['id', 'username', 'role', 'email'];
  // dataSource = new MatTableDataSource<User>();
  dataSource = new MatTableDataSource();

  constructor(private router: Router, private userService: UserService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => {
        this.dataSource.data = data;

      },
      err => {
        this.snackBar.open('Error Message: ' + err.message + ', Status Text: ' + err.statusText, 'Ok Charlie');
        // console.log(err);
      },
      () => {
        console.log('finish');
      }
    );
  }
}
