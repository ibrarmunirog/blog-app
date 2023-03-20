import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from 'src/user/user.module';
import { AuthModule } from 'src/auth/auth.module';
import { applicationConfig } from 'src/config/application';
import { AccessTokenStrategy, RefreshTokenStrategy } from 'src/auth/strategies';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [applicationConfig] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('application.database.host'),
        port: configService.get('application.database.port'),
        username: configService.get('application.database.username'),
        password: configService.get('application.database.password'),
        database: configService.get('application.database.databaseName'),
        autoLoadEntities: true,
        migrationsTableName: 'migration',
        migrations: ['dist/migrations/**/*.js'],
        logging: false,
        cli: {
          migrationsDir: 'src/migration',
        },
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [AccessTokenStrategy, RefreshTokenStrategy],
})
export class AppModule {}
