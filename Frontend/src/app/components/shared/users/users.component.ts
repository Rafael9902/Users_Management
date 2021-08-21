import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  allUsers: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this.users();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  users():void{
    this._userService.list().subscribe(
      response => {
        console.log(response);
        this.allUsers = response;
        this.dtTrigger.next();
      },
      error => {
        console.error("Error");
      }
    )
  }

  edit(user_id:number){
    alert(user_id);
  }

}
