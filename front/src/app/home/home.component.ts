import { Component, OnInit } from '@angular/core';

import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  providers: [HomeService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  api_response: any;

  constructor(private homeService: HomeService) {}

  ngOnInit()
  {
    this.homeService.call_api().subscribe((res) =>
    {
      console.log('-------------------');
      console.log(res);
      console.log('-------------------');
    });

    console.log(this.api_response);

  }
}
