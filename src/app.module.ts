import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { user } from './user/user.entities';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useFactory:(ConfigService:ConfigService)=>({
        type: 'mysql',
        host: ConfigService.get("HOST"),
        username:ConfigService.get("USER"),
        port: ConfigService.get("PORT"),
        password: ConfigService.get("PASSWORD"),
        database: ConfigService.get("DB"),
        entities: [user],
        synchronize: true,
      }),
      inject:[ConfigService]
   
    }),
    UserModule,
    AuthModule,
  //MODULES SHOULD BE  IMPORTED HERE
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
