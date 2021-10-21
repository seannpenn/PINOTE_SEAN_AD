import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Axios, AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


import {Users} from './user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private api: HttpClient) {}
  userList:any;

  enable = false;
  
  ngOnInit(): void { 
    
  }

  getAll(){
    return this.api.get(environment.API_URL + '/user/all')
    .subscribe(data => {this.userList = data});
  }
  toggleDisplay(){
    this.enable = !this.enable;
  }
  
}
