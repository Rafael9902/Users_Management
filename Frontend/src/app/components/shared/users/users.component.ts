import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  public allUsers: any = [];
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();
  public nombre: string = "";

  constructor(private _userService:UserService, private _activatedRoute: ActivatedRoute, private _route:ActivatedRoute, private _router:Router) {
    this._activatedRoute.queryParams.subscribe(
      params =>{
        this.nombre = params['name'];
      }
    )
   }

  ngOnInit(): void {
    this.users();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  users():void{
    this._userService.list(this.nombre).subscribe(
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
    this._router.navigate(['/edit/' + user_id]);
  }

}
