import { jwtguard } from './guards/jwt.guard';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { authDto } from './auth.dto';
import { Localguard } from './guards/local.guards';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    

    @Post('login')
    @UseGuards(Localguard)
 login(@Body() authdto: authDto) {
        console.log("in6side con6troller");
        return this.authService.login(authdto);
    }

    @Get("status")
    @UseGuards(jwtguard)
    profile(@Req() req:Request){
        console.log(req);

    }
    
}
