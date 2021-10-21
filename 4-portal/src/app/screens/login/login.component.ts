import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private api: HttpClient) {}

  ngOnInit(): void {}

  fCEmail = new FormControl();
  fCPassword = new FormControl();
  requestResult = '';
  userCredentials: string = 'null';

  async login() {
    var result: any = await this.api
      .post(environment.API_URL + '/user/login', {
        email: this.fCEmail.value,
        password: this.fCPassword.value,
      })
      .toPromise();
    this.requestResult = result.data;
    console.log(result);

    if (result.success) {
      this.nav('home');
    }
    
  }

  nav(destination: string) {
    this.router.navigate([destination]);
  }
}
