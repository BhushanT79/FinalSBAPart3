import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new Headers({ "Content-Type": "application/json","Access-Control-Allow-Origin":"*" })
};

@Injectable({ providedIn: 'root' })
export class UserService {


    public static BaseUrl = "http://localhost:8080/e-dating/api/v1/";
	userid: number;
    constructor(private http: Http) { }
    getInterestsdata() {
      return this.http.get(UserService.BaseUrl+'interests/get/all',httpOptions).pipe(map((response: Response) => response.json()));
    }

    getUserdata() {
      return this.http.get(UserService.BaseUrl+'users/get/'+ this.userid,httpOptions).pipe(map((response: Response) => response.json()));
    }
}