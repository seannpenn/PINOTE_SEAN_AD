import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Post("/register")
    register(@Body()body:any){
        return this.userService.register(body);
    }

    @Get("/all")
    getAll(){
        return this.userService.getAll();
    }

    @Get("/:id")
    getID(@Param('id')consID:string){
        const Parse = parseInt(consID);
        return this.userService.getID(Parse);
    }

    @Put("/:id")
    replaceAllValue(@Param('id') id:number, @Body()body :any){
        return this.userService.replaceAllValue(id,body);
    }

    @Patch("/:id")
    replaceValue(@Param('id') id:string, @Body()body :any){
        const Parse = parseInt(id);
        return this.userService.replaceValue(Parse,body);
    }

    @Delete('/:id')
    deleteUser(@Param('id')id:string){
        const Parse = parseInt(id);
        return this.userService.deleteUser(Parse);
    }

    @Post('/login')
    loginUser(@Body()body:string){
        return this.userService.loginUser(body);
    }

    @Get('/search/:term')
    searchTerm(@Param('term') term:string){
        return this.userService.searchTerm(term);

    }


}
