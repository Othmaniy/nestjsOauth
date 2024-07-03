import { HttpException, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local';
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authservice:AuthService){
      super({
        usernameField: 'firstname',
      });
    } 
async validate(firstname:string,password:string){
    console.log("inside startegys");
   const user = await this.authservice.login({firstname,password});
   if(!user){
    throw new HttpException("unuthorized", 401);
   }
   return user

}

}