import { Injectable } from '@nestjs/common';
import { car } from './car.model';

@Injectable()
export class Exercise3Service {

private cars:Map<string,car> = new Map<string, car>();


  HelloWorld() {
    console.log('Hello Guys! welcome to my vlog!');
    return 'Hello Guys! welcome to my vlog!';
  }

  loopsTriangle(height: number) {
   
    var string = '';
    for (var x = 0; x <= height; x++) {
      for (var i = 0; i < x; i++) {
        string += '*';
      }
      string += '\n';
    }
    console.log(string);

    return string;
    
  }


  hello(name:string){
    return `Hi there, ${name}!`;
  }

  prime(number:number, bool:boolean){

    for (var x = 0; x < 2; x++) {
      if (number % 2 == 0) {

          console.log(`The number ${number} is not a prime number`);
          return `The number ${number} is not a prime number`;
  
      } else {
  
          console.log(`The number ${number} is a prime number`);
          return `The number ${number} is a prime number`;
      }
      
    }
  }

  addCar(Car:any){
    var newCar: car;
    newCar = new car(Car.model, Car.color,{name:Car.wheels.name, radius: Car.wheels.radius});
    this.cars.set(Car.ID,newCar); 
    //this.logAllCars(); 
  } 

  logAllCars(){
    for(const [key_word,Car] of this.cars.entries()){
      console.log(key_word,Car);
      Car.log();
    }
  }
}
