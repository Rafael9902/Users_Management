import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService, RoleService]
})
export class UsersComponent implements OnInit {

  public allUsers: any = [];
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();
  public nombre: string = "";
  public roles: any;

  constructor(private _userService:UserService, private _roleService:RoleService, private _activatedRoute: ActivatedRoute, private _route:ActivatedRoute, private _router:Router) {
    this._activatedRoute.queryParams.subscribe(
      params =>{
        this.nombre = params['name'];
      }
    )
   }

  ngOnInit(): void {
    this.users();
    this.getRoles();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  users():void{
    this._userService.list(this.nombre).subscribe(
      response => {
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

  createUser(){
    this._router.navigate(['/save/']);
  }

  SearchUser(){
    this._router.navigate(['/']);
  }

  getRole(id_rol:number){
    let name = "";

    for(let role of this.roles){
      if(id_rol == role.id){
        name = role.nombre;
      }
    }
    return name;
  }

  getRoles(){
    this._roleService.getRoles().subscribe(
      response =>{
        this.roles = response;
      },
      error =>{
        console.error(error);
      }
    );
  }

}
