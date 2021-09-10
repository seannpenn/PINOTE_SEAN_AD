import { Controller, Get, Param } from '@nestjs/common';
import { Exercise3Service } from './exercise3.service';

@Controller('exercise3')
export class Exercise3Controller {
    constructor(private readonly e3:Exercise3Service){}

    @Get("/HelloWorld")
  HelloWorld(): string {
    return this.e3.HelloWorld();
  }

  @Get("/loopsTriangle/:height")
  loopsTriangle(@Param('height')height:number) {
      //var parsedHeight = parseInt(height);
      return this.e3.loopsTriangle(height);
      
        //return `type of height/parsedHeight ${parsedHeight} is ${typeof parsedHeight}`;
  }

  @Get("/hello/:name")
  hello(@Param('name')name:string){
    return this.e3.hello(name);
  }

  @Get("/prime/:number")
  prime(@Param('number')number:number){
    return this.e3.prime(number);
  }
} 