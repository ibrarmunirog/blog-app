import { Inject, UnauthorizedException, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { applicationConfig } from 'src/config/application';
import { Request } from 'express';
import { UserService } from 'src/user/user.service';

type JwtPayload = {
  id: string;
  email: string;
};

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(
    @Inject(applicationConfig.KEY)
    appConfig: ConfigType<typeof applicationConfig>,
    private userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: appConfig.jwt.refresh.secret,
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: JwtPayload) {
    const refreshToken = req.get('authorization').replace('Bearer', '').trim();
    const user = await this.userService.findById(payload.id);

    if (!user || !user.active) {
      throw new UnauthorizedException();
    }
    return {
      ...user,
      hashedRefreshToken: refreshToken,
    };
  }
}
