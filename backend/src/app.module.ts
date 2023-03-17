import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import applicationConfig from 'src/config/application';

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
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        logging: true,
        cli: {
          migrationsDir: 'src/migration',
        },
        synchronize: false
      }),
      inject: [ConfigService]
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
