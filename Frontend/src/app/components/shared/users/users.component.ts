import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  allUsers: any = [];

  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this.users();
  }

  users(){
    this._userService.list().subscribe(
      response => {
        console.log(response);
        this.allUsers = response;
      },
      error => {
        console.error("Error");

      }
    )
  }

}
