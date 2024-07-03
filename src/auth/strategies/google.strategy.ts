import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

@Injectable()

export class GoogleStartegy extends PassportStrategy(Strategy,"google"){
    constructor(){
        super({
            clientId:"",
            clientSecret:"",
            callbackUrl:"",
            scope:""
        })
    }
    async validate(accesstoken:string,refreshtoken:string,profile:any,done:verify){
        
    }
}