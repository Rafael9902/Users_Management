import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { global } from "./global";

@Injectable()
export class UserService{
    public url:string;

    constructor(public _http: HttpClient){
        this.url = global.url;
    }

    list():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'list', {headers:headers});
    }

    save(user:User): Observable<any>{
        let json = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.url + 'save', json, {headers:headers});
    }
}