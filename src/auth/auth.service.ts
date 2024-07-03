import { HttpException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { authDto } from './auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { user } from 'src/user/user.entities';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private jwtservice:JwtService,
        @InjectRepository(user)  private  userRepository:Repository<user>
    ){
    }
   
    async login({firstname,password}:authDto){
        
        console.log("in6side service");
        const user= await this.userRepository.findOne({ where: { firstname: firstname } })
        if(!user){
            
            // throw new HttpException("from service",404);
            return null
        }
        const isMatch = await bcrypt.compare(password,user.password)
        console.log(isMatch);
        if(isMatch){
            const {password,...userdata}=user
           return  this.jwtservice.sign(userdata)
        }
        // throw new HttpException("invalid credentials",403)


    }
}
