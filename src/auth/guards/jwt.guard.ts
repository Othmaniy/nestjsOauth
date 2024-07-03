import { ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

export class jwtguard extends AuthGuard("jwt"){
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log("inside jwt guard");
        return super.canActivate(context)

    }
}