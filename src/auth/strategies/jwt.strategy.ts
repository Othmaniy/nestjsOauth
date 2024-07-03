import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtfromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:true,
            secretOrkey:"guday"
        })
    }

    validate(payload:any){
      console.log(payload);
      console.log("inside jwt strategy");
    }
}