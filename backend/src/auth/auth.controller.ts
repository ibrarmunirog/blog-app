import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { AuthLoginDto, AuthRegisterDto } from 'src/auth/dtos';
import { AuthTokensInterface } from 'src/auth/interfaces';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  register(@Body() body: AuthRegisterDto): Promise<AuthTokensInterface> {
    return this.authService.register(body);
  }

  @Post('/login')
  login(@Body() body: AuthLoginDto): Promise<AuthTokensInterface> {
    return this.authService.login(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/logout')
  @HttpCode(HttpStatus.OK)
  logout(@Req() req: Request) {
    const user = req.user;
    console.log(user, 'ssss');
    return this.authService.logout(user['id']);
  }

  @UseGuards(AuthGuard('jwt-refresh'))
  @Post('/refresh')
  refreshToken(@Req() req: Request) {
    const user = req.user;
    return this.authService.refreshToken(
      user['id'],
      user['hashedRefreshToken'],
    );
  }
}
