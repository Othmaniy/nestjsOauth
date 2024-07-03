import { HttpException, Injectable } from '@nestjs/common';
import { user } from './user.entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userdto } from './user.dto';

@Injectable()
export class UserService {
    constructor (@InjectRepository(user)  private  userRepository:Repository<user>){}

     async createUser(userDto:userdto){
     const finduser = await this.userRepository.findOne({where:{firstname:userDto.firstname}});
     console.log(finduser);
     if(finduser){
      throw new HttpException("user already exists ",409)
     }
       const cuser= this.userRepository.create(userDto);
       return this.userRepository.save(cuser)

    }
     
}

