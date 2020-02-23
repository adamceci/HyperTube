import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HomeService
{
   constructor(private http: Http) { }

   call_api()
   {
       return this.http.get('http://localhost:3000/')
           .map(res => res.json());
   }
}
