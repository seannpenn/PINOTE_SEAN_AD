import { ConsoleLogger, Injectable, Param } from '@nestjs/common';
import { Helper } from './user.resource/helper';
import { User } from './user.resource/user.model';
// import { User } from './user.model';
import { CRUDReturn } from './user.resource/crud_return.interface';
import { debug } from 'console';

@Injectable()
export class UserService {
  private users: Map<string, User> = new Map<string, User>();

  constructor() {
    
    this.users = Helper.populate();
  }

  register(user: any):CRUDReturn{
    try{
      var validBodyPut: {valid:boolean;data:string} = Helper.validBodyPut(user);

      if(validBodyPut.valid){
        if(!this.emailExists(user.email)){
          var newUser: User;
          newUser = new User(user?.name, user?.age, user?.email, user?.password);
          
          if(this.pushToDB(newUser)){
            if (debug) 
              this.getAll();
              return {
                success: true,
                data: newUser.toJson()
              };
          }else{
            throw new Error('generic database error olok');
          }
        }else{
          throw new Error(`${user.email} is already used by another user. Please input another email!`);
        }
        
      }else{
        throw new Error(validBodyPut.data);
      }
    }
    catch(error){
      return {success: false, data: `${error.message}`};
    }

   //dont touch this//
    // var newUser: User;
    // newUser = new User(user.name,user.age,user.email,user.password);
    // this.users.set(user.id,newUser);
    
  }
  getAll(): CRUDReturn {

    var populatedData = [];
    
    for (const user of this.users.values()) {
      populatedData.push(user.toJson());
    }
    
    if(populatedData.length > 0){
      return {success:true, data: populatedData};
    }
    else{
      return {success:false, data: "There are no users in the database!" };
    }
  }

  getID(ConsID: string): CRUDReturn {
    for (const userVar of this.users.values()) {
      if(ConsID == userVar.toJson().id) {
          return{success: true, data:userVar.toJson()};
      } 
    }
    return {success: false, data: `ID '${ConsID}' does not match any users in the database`};
  }

  putValues(ConsID: string, user: any):CRUDReturn {
    try{
      var validBodyPut: {valid:boolean;data:string} = Helper.validBodyPut(user);

      if(validBodyPut.valid){
        
        for(const userData of this.users.values()){
          if(ConsID == userData.toJson().id){
            if(!this.emailExists(user.email) || user.email == userData.toJson().email){
                // if(validBodyPut.valid){
                  if(userData?.replaceValues(user)){
                    return{success: true,data: userData.toJson()};
                  }
                  return{success: false, data: 'Replacing data unsucessful!'};
                // }
                // throw new Error(validBodyPut.data);
            }else{
              return {success:false, data: `${user.email} exists in database that is not of the current user.`};
            }
          }
        }return{success:false, data: 'User not found'};
      }else{
        throw new Error(validBodyPut.data);
      }
    }catch(error){
      return {success: false, data: `${error.message}`};
    }
  }

  patchValues(ConsID: string, user: any): CRUDReturn {
          var count:number = this.countBody(user,count);
          var validBody: {valid:boolean;data:string} = Helper.validBody(user);
          var prevUser:User = this.users.get(ConsID);
          var newUser:User;
    try{
          

          
          if(validBody.valid)
          {
            for(const iter of this.users.values())
            {
              if(ConsID == iter.toJson().id)
              {
                  console.log('Success');
                  if(!this.emailExists(user?.email)){
                    
                      if(count == 1){
                        if(user.name != undefined){
                          newUser = new User(user.name,prevUser.toJson().age,prevUser.toJson().email,prevUser.toJsonPass().password);
                          this.users.set(ConsID, newUser);
                          this.users.get(ConsID).overWriteID(ConsID);
                          //   console.log(iter.toJson().name);
                          //   prevUser.toJson().name = user?.name;
                          //   console.log(prevUser.toJson().name);
                          
                          
                          // prevUser.toJson().age = prevUser.toJson().age
                          // prevUser.toJson().email = prevUser.toJson().email
                          // prevUser.toJsonPass().password = prevUser.toJsonPass().password;
                          prevUser = newUser;
                          
                        }

                        if(user.age != undefined){

                          newUser = new User(prevUser.toJson().name,user.age,prevUser.toJson().email,prevUser.toJsonPass().password);
                          this.users.set(ConsID, newUser);
                          this.users.get(ConsID).overWriteID(ConsID);
                          prevUser = newUser;
                          
                          
                        }
                        if(user.email != undefined){

                          newUser = new User(prevUser.toJson().name, prevUser.toJson().age, user.email, prevUser.toJsonPass().password);
                          this.users.set(ConsID, newUser);
                          this.users.get(ConsID).overWriteID(ConsID);
                          prevUser = newUser;
                          
                          
                        }
                        if(user.password != undefined){

                          newUser = new User(prevUser.toJson().name, prevUser.toJson().age, prevUser.toJson().email, user.password);
                          this.users.set(ConsID, newUser);
                          this.users.get(ConsID).overWriteID(ConsID);
                          prevUser = newUser;

                          
                          
                        }
                        return {success: true, data: prevUser.toJson()}
                      
                      }
                      else if(count==2){
                      
                        if(user.name != undefined && user.age != undefined){
                            
                          newUser = new User(user.name,user.age,prevUser.toJson().email,prevUser.toJsonPass().password);
                          this.users.set(ConsID, newUser);
                          this.users.get(ConsID).overWriteID(ConsID);
                          prevUser = newUser;
                        }
                        if(user.name != undefined && user.email != undefined){

                          newUser = new User(user.name,prevUser.toJson().age,user.email,prevUser.toJsonPass().password);
                          this.users.set(ConsID, newUser);
                          this.users.get(ConsID).overWriteID(ConsID);
                          prevUser = newUser;
                        }
                        if(user.name != undefined && user.password){

                          newUser = new User(user.name,prevUser.toJson().age,prevUser.toJson().email,user.password);
                          this.users.set(ConsID, newUser);
                          this.users.get(ConsID).overWriteID(ConsID);
                          prevUser = newUser;
                        }
                        if(user.age != undefined && user.email != undefined){

                          newUser = new User(user.name,prevUser.toJson().age,user.email,prevUser.toJsonPass().password);
                          this.users.set(ConsID, newUser);
                          this.users.get(ConsID).overWriteID(ConsID);
                          prevUser = newUser;
                        }
                        if(user.age != undefined && user.password != undefined){

                          newUser = new User(prevUser.toJson().name,user.age,prevUser.toJson().email,user.password);
                          this.users.set(ConsID, newUser);
                          this.users.get(ConsID).overWriteID(ConsID);
                          prevUser = newUser;

                        }
                        if(user.email != undefined && user.password != undefined){
                          
                          newUser = new User(prevUser.toJson().name,prevUser.toJson().age,user.email,user.password);
                          this.users.set(ConsID, newUser);
                          this.users.get(ConsID).overWriteID(ConsID);
                          prevUser = newUser;
                        }
                        
                        return {success: true, data: prevUser.toJson()}
                      }
                      else if(count == 3){
                        if(user.name != undefined && user.age != undefined && user.email != undefined){

                          newUser = new User(user.name,user.age,user.email,prevUser.toJsonPass().password);
                          this.users.set(ConsID, newUser);
                          this.users.get(ConsID).overWriteID(ConsID);
                          prevUser = newUser;
                        }

                        if(user.name != undefined && user.age != undefined && user.password != undefined){

                          newUser = new User(user.name,user.age,user.email,prevUser.toJsonPass().password);
                          this.users.set(ConsID, newUser);
                          this.users.get(ConsID).overWriteID(ConsID);
                          prevUser = newUser;
                        }

                        if(user.name != undefined && user.email != undefined && user.password != undefined){

                          newUser = new User(user.name,prevUser.toJson().age,user.email,user.password);
                          this.users.set(ConsID, newUser);
                          this.users.get(ConsID).overWriteID(ConsID);
                          prevUser = newUser;
                        }
                        if(user.age != undefined && user.email != undefined && user.password != undefined){

                          newUser = new User(prevUser.toJson().name,user.age,user.email,user.password);
                          this.users.set(ConsID, newUser);
                          this.users.get(ConsID).overWriteID(ConsID);
                          prevUser = newUser;
                        }
                      
                        return {success: true, data: prevUser.toJson()}
                      }
                }else
                throw new Error (`${user.email} exists in database that is not of the current user.`);
                  
              }
            }throw new Error('User not found!');
        }else{
          throw new Error(validBody.data);
      }
    }catch(error){
      return {success: false, data: `${error.message}`};
    }
}
  


  deleteUser(id: string): CRUDReturn {
    // console.log(body.id);
    try{
      
          for(const loginDetails of this.users.values()){
            if(id == loginDetails.toJson().id){
                this.users.delete(id);
                console.log('Success!');
                return{
                  success: true,
                  data: loginDetails.toJson()
                } 
              } 
          }throw new Error('User not found.')
    }catch(error){
      return {success: false, data: `${error.message}`};
    }
  }

  loginUser(login: any):CRUDReturn {
    try{
      for (const user of this.users.values()) {
        if(user.toJson().email == login.email)
          return user.login(login?.password);
        
      }throw new Error('Email does not match.')
      
    }
    catch (error) {
      console.log({success:false, data:error.message});
      return {success:false, data: error.message}
      
    }
  }

  searchTerm(term: string): CRUDReturn {
    var matchedData =[];
    for (const userTerm of this.users.values()){
      if(userTerm.matches(term)){
          matchedData.push(userTerm.toJson());
      }
    }
    if(matchedData.length > 0){
      return{success: true,data:matchedData};
    }
    else{
      return {success: false, data: `${term} does not match any users in database!`};
    }
  }
  
  verify() {
    for (const [ID, User] of this.users.entries()) {
      console.log(ID, User);
    }
  }
  emailExists(email:string):boolean{
      for (const useremail of this.users.values()) {
        if (useremail.toJson().email == email) {
          console.log('success');
          return true;
        }
      }
    
    return false;
  }


    pushToDB(newUser:User):boolean{
      try{
        this.users.set(newUser.id,newUser);
        return this.users.has(newUser.id);
      } catch(error){
        console.log(error);
        return false;
      }
      // var userID: string = Helper.generateUID();
      //   if(newUser){
      //     this.users.set(userID,newUser);
      //     return 'User added to the database.';
      //   }
      
    }

    countBody(body:any, count:number){
      count=0;
      for (const key of Object.keys(body)) {
        if (key.includes(`${key}`)) {
          count++;
        }
      }
      return count;
    }
    


    
  }