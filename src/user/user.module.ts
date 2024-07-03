import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './user.entities';

@Module({
  imports:[TypeOrmModule.forFeature([user])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
