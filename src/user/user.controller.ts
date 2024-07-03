import { Body, Controller, Post } from '@nestjs/common';
import { userdto } from './user.dto';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {
    constructor(private readonly userservice:UserService){}
    @Post()
    async createUser(@Body() userDto:userdto){
        const saltOrRounds = 10;

const hashedpasssword = await bcrypt.hash(userDto.password, saltOrRounds)
const userwithashedpassword={
    ...userDto,
    password:hashedpasssword
}
        return this.userservice.createUser(userwithashedpassword)

    }
    

}
