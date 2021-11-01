import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment';
import { UsersComponent } from 'src/app/screens/users/users.component';

@Component({
  selector: 'app-patch-layout',
  templateUrl: './patch-layout.component.html',
  styleUrls: ['./patch-layout.component.scss']
})
export class PatchLayoutComponent implements OnInit {

  constructor(private router: Router, private api: HttpClient) { }

  patchForm: FormGroup = new FormGroup({
    fcName: new FormControl(''),
    fcAge: new FormControl(0, Validators.min(1)),
    fcEmail: new FormControl('')
  });

  error: string = '';

  ngOnInit(): void {
  }
  onSubmit() {
    alert('gwapo ko!');
    this.api.patch(environment.API_URL + `/user/all`, name,this.patchForm.value)

  }

}
