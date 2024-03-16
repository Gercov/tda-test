import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateDto } from './dto/user-create-dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/create')
  create(@Body() dto: UserCreateDto) {
    return this.userService.createUserByEmail(dto.email);
  }
}
