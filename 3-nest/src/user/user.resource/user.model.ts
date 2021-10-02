
import { count } from 'console';
import { CRUDReturn } from './crud_return.interface';
import { Helper } from './helper';
export class User {


  public id: string;
  private name: string;
  private age: number;
  private email: string;
  private password: string;


  constructor(name: string, age: number, email: string, password: string) {
    this.id = Helper.generateUID();
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
  }

  login(password: string): CRUDReturn {
    try {
      if (this.password === password) {
        return { success: true, data: this.toJson() };
      } else {
        throw new Error(`${this.email} login fail, password does not match`);
      }
    } catch (error) {
      return { success: false, data: error.message };
    }
  }

   matches(term: string): boolean {
      var keys: Array <string> = Helper.describeClass(User);
      keys = Helper.removeItemOnce(keys,'password');
      for(const key of keys){
        if(`${this[key]}` === term)
        return true;
      }
      return false;
  }

  replaceValues(body: any): boolean {
      if(this.id != body.id){
        
        this.name=body?.name;
        this.age=body?.age;
        this.email=body?.email;
        this.password=body?.password;
        return true;
      }else{
        return false;
      }
  }

  replaceOneValue(body: any):boolean{
    return true;
  }

  // modifyUser(user:any){
  //     this.id = 
  // }

  log() {
    console.log(this.toJson());
  }

  toJson() {    
    return {
        id: this.id,
        name:this.name,
        age: this.age,
        email: this.email,
    }
  }
  toJsonPass(){
    return{
      password: this.password
    }
  }
  overWriteID(prevID: string){
    this.id = prevID;
  }
}