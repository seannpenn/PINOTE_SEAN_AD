import { Controller, Get, Param } from '@nestjs/common';
import { Exercise3Service } from './exercise3.service';

@Controller('exercise3')
export class Exercise3Controller {
    constructor(private readonly e3:Exercise3Service){}

    @Get("/HelloWorld")
  getHello(): string {
    return this.e3.HelloWorld();
  }

  @Get("/loopsTriangle/:height")
  LoopsTriangle(@Param('height')height:string) {
      var parsedHeight = parseInt(height);
      this.e3.loopsTriangle(5);
        return `type of height/parsedHeight ${parsedHeight} is ${typeof parsedHeight}`;
  }
} 