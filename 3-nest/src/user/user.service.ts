import { Injectable, Param } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  private users: Map<number, User> = new Map<number, User>();

  constructor() {
    this.populate();
  }

  register(user: any) {
    // var newUser: User;
    // newUser = new User(user.id,user.name,user.age,user.email,user.password);
    // this.users.set(1,newUser);
    this.users.set(
      user.id,
      new User(user.id, user.name, user.age, user.email, user.password),
    );

    //this.verify();
  }
  getAll() {
    var populatedData = [];
    for (const user of this.users.values()) {
      populatedData.push(user.toJson());
    }
    console.log(populatedData);
    return populatedData;
  }

  getID(id: number) {
    for (const userVar of this.users.values()) {
      if (userVar.toJson().id == id) {
        return [
          'id:' + userVar.toJson().id,
          'name:' + userVar.toJson().name,
          'email:' + userVar.toJson().email,
          'age:' + userVar.toJson().age,
        ];
        //return [userIter.toJson().name];
      }
      else{
          return "user not found."
      }
    }
  }

  replaceAllValue(id: number, user: any) {

    var userData:User;
    userData = new User(id,user?.name,user?.age,user?.email,user?.password);

    for (const userVar of this.users.values()) {
      if (userVar.toJson().id == id && user.age != undefined, user.email != undefined, user.id != undefined, user.name != undefined) {
        this.users.set(id,userData);
        console.log(userData);
        return true;
      } 
      else {
        return "You have inputted wrong data or empty data! Please fill in all the data to be changed! ";
      }
    }
  }

  replaceValue(consID: number, user: any) {

    // var userData:User;
    // userData = new User(consID,user?.name,user?.age,user?.email,user?.password);
    // for(const userVar of this.users.values()){
    //     if(userVar.toJson().id == consID && userVar.toJson().age != undefined , userVar.toJson().email != undefined, userVar.toJson().id != undefined , userVar.toJson().name != undefined){
    //         this.users.set(consID, new User(consID, user.name, user.age, user.email, user.password));
    //         console.log(userData);
    //         return true;
    //     }
    //     else{
    //         return "You have inputted wrong data or empty data!";
    //     }
    // }
    for(const userVar of this.users.values()){
        if(this.users.has(consID)){
            this.users.set(consID, new User(consID,user?.name,user?.age,user?.email,user?.password));
            console.log(this.users);
            return true;
            
        }
        else {
            return false;
        }
    }
  }

  deleteUser(id: number) {
    if (this.users.has(id)) {
      this.users.delete(id);
      console.log('Success!');
      return 'Success!';
    } else {
      console.log('User does not exist.');
      return 'User does not exist.';
    }
  }

  loginUser(login: any) {
    for (const user of this.users.values()) {
        for(const authIter of this.users.values()){
            if(authIter.login(login?.email, login?.password)){
                return{
                success: true,
                message: "LOGIN SUCCESS"
            }
            }
            else{
                return {
                 success: false,
                 message: "LOGIN FAILURE"
                }
            }
        }
    }
  }

  searchTerm(term: string) {

    for(const searchVar of this.users.values()){

        if(parseInt(term) == searchVar.toJson().id){
            `Item ${parseInt(term)} found in the system!`;
            return ["name:" + searchVar.toJson().name,"id:" + searchVar.toJson().id,
            "email:" + searchVar.toJson().email, "age:" + searchVar.toJson().age];
            
            
        }
        else if(parseInt(term) == searchVar.toJson().age){
            `Item ${parseInt(term)} found in the system!`;
            return ["name:" + searchVar.toJson().name,"id:" + searchVar.toJson().id,
            "email:" + searchVar.toJson().email, "age:" + searchVar.toJson().age];
        }
        else if(term == searchVar.toJson().name){
            console.log(`Item ${(term)} found in the system!`);
            return ["name:" + searchVar.toJson().name,"id:" + searchVar.toJson().id,
            "email:" + searchVar.toJson().email, "age:" + searchVar.toJson().age];
        }
        else if(term.toUpperCase() == searchVar.toJson().email.toUpperCase()){
            console.log(`Item ${(term)} found in the system!`);
            return ["name:" + searchVar.toJson().name,"id:" + searchVar.toJson().id,
            "email:" + searchVar.toJson().email, "age:" + searchVar.toJson().age];
        }
        else{
            return "Searched item is not found in the system!"
        }

    }
  }

  populate() {
    this.users.set(1, new User(1, 'James', 18, 'sean@gmail.com', '1234'));
    this.users.set(2, new User(2, 'John', 18, 'krystel@gmail.com', '4321'));
    this.users.set(3, new User(3, 'Luke', 18, 'luke@email.com', '654321'));
    this.users.set(4, new User(4, 'Judas', 13, 'judas@email.com', '696969'));

    this.verify();
  }
  verify() {
    for (const [ID, User] of this.users.entries()) {
      console.log(ID, User);
      // console.log(this.users.entries);
    }
  }
}
