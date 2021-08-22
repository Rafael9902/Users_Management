import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  public user: User;

  constructor(private _userService:UserService, private _activatedRoute: ActivatedRoute, private _route:ActivatedRoute, private _router:Router) {
    this.user = new User(1, 1, "", "");
    this._activatedRoute.params.subscribe(
      params =>{
        this.user.id_usuario = params.id;
      }
    )
  }

  ngOnInit(): void {
    this.getUser(this.user.id_usuario);
  }

  getUser(id:number){
    this._userService.getUser(id).subscribe(
      response =>{
        this.user.nombre = response.nombre;
      },
      error =>{
        console.error(error);
      }
    );
  }

  onSubmit(form: any){
    alert('hola');
  }

}