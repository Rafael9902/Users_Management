import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Role } from "../models/role";
import { global } from "./global";
import { stringify } from "@angular/compiler/src/util";

@Injectable()
export class RoleService{
    public url: string;

    constructor(public _http: HttpClient){
        this.url = global.url;
    }

    getRoles(){
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'role/list', {headers:headers});
    }
}