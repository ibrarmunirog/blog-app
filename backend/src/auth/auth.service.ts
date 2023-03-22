import {
  BadRequestException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { AuthLoginDto, AuthRegisterDto } from 'src/auth/dtos';
import { UserEntity } from 'src/user/entities';
import { applicationConfig } from 'src/config/application';
import { ConfigType } from '@nestjs/config';
import { JwtSignOptions, JwtService } from '@nestjs/jwt';
import { AuthTokensInterface } from 'src/auth/interfaces';

@Injectable()
export class AuthService {
  constructor(
    @Inject(applicationConfig.KEY)
    private appConfig: ConfigType<typeof applicationConfig>,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  public async register(
    payload: AuthRegisterDto,
  ): Promise<AuthTokensInterface> {
    const isEmailTaken = await this.userService.findByEmail(payload.email);

    if (isEmailTaken) {
      throw new BadRequestException(
        'the user with this email is already exist!',
      );
    }

    const user = await this.userService.create({
      ...payload,
      password: await this.hashData(payload.password),
    });
    const [accessToken, refreshToken] = await Promise.all([
      this.createAccessToken(user),
      this.createRefreshToken(user),
    ]);
    await this.saveRefreshToken(user.id, refreshToken);
    return { access_token: accessToken, refresh_token: refreshToken };
  }

  public async login(payload: AuthLoginDto): Promise<AuthTokensInterface> {
    const { email, password } = payload;

    if (!email || !password) {
      throw new BadRequestException('Please provide email and password!');
    }

    const user = await this.userService.findByEmail(email);

    if (!user || !(await this.compareData(password, user.password))) {
      throw new UnauthorizedException('Incorrect email or password');
    }
    const [accessToken, refreshToken] = await Promise.all([
      this.createAccessToken(user),
      this.createRefreshToken(user),
    ]);
    await this.saveRefreshToken(user.id, refreshToken);
    return { access_token: accessToken, refresh_token: refreshToken };
  }

  public async logout(userId: string) {
    await this.userService.update(userId, { refreshToken: null });
  }

  public async refreshToken(userId: string, refreshToken: string) {
    const user = await this.userService.findById(userId);

    if (!user || !(await this.compareData(refreshToken, user.refreshToken))) {
      throw new UnauthorizedException('Token is invalid!');
    }

    const accessToken = await this.createAccessToken(user);

    return {
      access_token: accessToken,
    };
  }

  public async saveRefreshToken(userId: string, refreshToken: string) {
    const hashedRefreshToken = await this.hashData(refreshToken);
    await this.userService.update(userId, { refreshToken: hashedRefreshToken });
  }

  public createAccessToken(user: UserEntity): Promise<string> {
    const { secret, expiresIn } = this.appConfig.jwt.access;
    const options: JwtSignOptions = { secret, expiresIn };
    return this.jwtService.signAsync(
      {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      options,
    );
  }
  public createRefreshToken(user: UserEntity): Promise<string> {
    const { secret, expiresIn } = this.appConfig.jwt.refresh;
    const options: JwtSignOptions = { secret, expiresIn };
    return this.jwtService.signAsync(
      {
        id: user.id,
        email: user.email,
      },
      options,
    );
  }

  public hashData(password: string) {
    return bcrypt.hash(password, 10);
  }

  public compareData(attempt: string, password) {
    return bcrypt.compare(attempt, password);
  }
}
