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
  }
  return;
}
