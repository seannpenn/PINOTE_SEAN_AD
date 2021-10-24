import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  idGetter: FormGroup = new FormGroup({
    fcId: new FormControl('', Validators.required)
  });

  enable = false;
  enable_1 = false;
  enable_2 = false;
  enable_3 = false;

  ngOnInit(): void { 
    
  }

  getAll(){
    return this.api.get(environment.API_URL + '/user/all')
    .subscribe(data => {this.userList = data});
  }
  toggleDisplay(){
    this.enable = !this.enable;
  }
  toggleDisplay1(){
    this.enable_1 = !this.enable_1;
  }
  toggleDisplay2(){
    this.enable_2 = !this.enable_2;
  }
  toggleDisplay3(){
    this.enable_3 = !this.enable_3;
  }

  patchValues(){
    alert('Patch not yet working!');
  }
  
  putValues(){
    alert('Put not yet working!');
  }

  async delValues(){
    alert('Delete not yet working!');

    // var result: any = await this.api.delete(environment.API_URL + `/user/${this.idGetter.value.fcId}`);
    //   alert(result.data);
    // return this.api.delete(environment.API_URL + '/user/')
  }
  
}
