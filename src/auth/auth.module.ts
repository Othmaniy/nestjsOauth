import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from 'src/user/user.entities';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.startegy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports:[
    PassportModule,
    JwtModule.register({
    secret:"guday",
    signOptions:{expiresIn:"2h"}
  }),TypeOrmModule.forFeature([user])],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy,JwtStrategy]
})
export class AuthModule {}
