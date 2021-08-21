import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this._userService.list().subscribe(
      response => {
        document.write(JSON.stringify(response));
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
