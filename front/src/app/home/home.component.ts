import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  totalAngularPackages;

  constructor(private http: HttpClient) {}

  ngOnInit()
  {
    console.log(this.http.get('http://localhost:3000/api/auth'));

    this.http.get<any>('http://localhost:3000/').subscribe(data =>
    {
      this.totalAngularPackages = data.total;
      console.log(this.totalAngularPackages);
    })
  }
}
