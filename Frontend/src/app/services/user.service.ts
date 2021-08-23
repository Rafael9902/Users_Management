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

    list(name?:string):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        let uri = name ? 'user/list/' + name : 'user/list';
        
        return this._http.get(this.url + uri, {headers:headers});
    }

    getUser(id: number):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'user/' + id, {headers: headers});
    }

    save(user:User): Observable<any>{
        let json = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'user/save', json, {headers:headers});
    }

    update(user:any): Observable<any>{
        user['id'] = user.id_usuario;

        let json = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url + 'user/update', json, {headers:headers});
    }

    delete(id: number): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.delete(this.url + 'user/delete/' + id, {headers:headers});
    }
}