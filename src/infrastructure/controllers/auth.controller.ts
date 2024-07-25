import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../../domain/services/auth.service';
import { LocalAuthGuard } from '../guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() req) {
    return this.authService.login(req);
  }
}
