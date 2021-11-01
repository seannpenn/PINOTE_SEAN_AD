import { Component, Input, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/model/user.model';
import { ApiService } from 'src/app/shared/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: Array<User> = [];

  //icons
  faTrash = faTrash;
  faEdit = faEdit;

  clickedName = false;
  clickedAge = false;
  clickedEmail = false;
  clickedPassword = false;

  constructor(private api: ApiService) {}


  error = '';

 

  patchForm: FormGroup = new FormGroup({
    fcName: new FormControl(''),
    fcAge: new FormControl(0, Validators.min(1)),
    fcEmail: new FormControl(''),
    // fcPassword: new FormControl('')
  });
  
  userKeys:Array<any> =[
    {name: "Name", value: false},
    {name: "Age", value: false},
    {name: "Email", value: false},
    // {name: "Password", value: false},
  ]

  ngOnInit(): void {
    this.getData();
  }

  clicked(i:number){

    if(i == 0){
      this.clickedName = !this.clickedName;
    }
    if(i == 1){
      this.clickedAge = !this.clickedAge;
    }
    if(i == 2){
      this.clickedEmail = !this.clickedEmail;
    }
    if(i == 3){
      this.clickedPassword = !this.clickedPassword;
    }
  }

  async deleteUser(i: number) {
    var decision = confirm('Delete user ' + this.users[i].name);
    if(decision)
    {
      var result = await this.api.delete(`/user/${this.users[i].id}`);
      if(result.success){
        this.getData();
      }
    }
    return i;
  }

  ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
  userId = 0;
  active = false;

  async exit(){
    this.active = false;
    this.clickedName = false;
    this.clickedAge = false;
    this.clickedEmail = false;
    this.clickedPassword = false;
    this.patchForm.reset();
  }
  async pop(i:number){
    
    this.userId = i;
    this.active = true;
  }
  async patchUser(i:number){
    this.active = true;
  
    var decision = confirm('Confirm patch request for user ' + this.users[i].name + '?');
    if(decision){
        var result = await this.api.patch(`/user/${this.users[i].id}`,{
          name: this.patchForm.value["fcName"] || undefined,
          age: parseInt(this.patchForm.value["fcAge"]) || undefined,
          email: this.patchForm.value["fcEmail"]|| undefined,
          
          // password: this.patchForm.value["fcPassword"]|| undefined,
        }); 
    }
    if(result.success){
      this.resetDB();
      this.exit();
    }else{
      this.error = result.data;
      console.log(result.error);
    }
    
  }
  
  


  async resetDB(){
    var result = await this.api.patch('/user/reset');
    this.getData();
  }
  async getData(term?: string) {
    if (term == undefined || term == null) {
      this.users = await this.getAll();
      console.log(this.users);
    }
  }
  async getAll(): Promise<Array<User>> {
    var result = await this.api.get('/user/all');
    var temp: Array<User> = [];
    if (result.success) {
      result.data.forEach((json: any) => {
        var tempU = User.fromJson(json.id, json);
        if (tempU != null) temp.push(tempU);
      });
    }
    return temp;
  }

  
}