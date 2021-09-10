import { Injectable } from '@nestjs/common';

@Injectable()
export class Exercise3Service {
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

  prime(number:number){

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
}
