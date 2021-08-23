import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { RoleService } from 'src/app/services/role.service';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [UserService, RoleService]
})
export class CreateComponent implements OnInit {

  public user: User;
  public roles: any;

  constructor(private _userService:UserService, private _roleService:RoleService, private _activatedRoute: ActivatedRoute, private _route:ActivatedRoute, private _router:Router) { 
    this.user = new User(1,1,"","");
  }

  ngOnInit(): void {
    this.getRoles();
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

  onSubmit(form: any){
    this._userService.save(this.user).subscribe(
      response =>{
        this._router.navigate(['/users']);
      },
      error =>{
        console.error(error);
        
      }
    )
    console.log(this.user);
  }

  return(){
    this._router.navigate(['/users']);
  }

}
