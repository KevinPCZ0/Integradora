import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UserService } from '../../domain/services/user.service';
import { User } from '../../domain/entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<User | null> {
    return this.userService.getUserById(id);
  }

  @Post()
  async createUser(@Body() createUserDto: { name: string, email: string, password: string }): Promise<User> {
    const { name, email, password } = createUserDto;
    return this.userService.createUser(name, email, password);
  }
}
