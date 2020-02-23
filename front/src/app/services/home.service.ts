import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable()
export class HomeService
{
   constructor(private http: HttpClient) { }

   call_api()
   {
     return this.http.get('http://localhost:3000/');
   }
}
