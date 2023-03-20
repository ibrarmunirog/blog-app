import {IsString, MaxLength, IsEmail, MinLength} from 'class-validator';

export class AuthRegisterDto {
    @IsString()
    @MaxLength(255)
    firstName: string;

    @IsString()
    @MaxLength(255)
    lastName: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    password: string;
}