import { IsString, IsEmail, IsOptional, MaxLength, IsBoolean, IsEnum } from "class-validator";
import { UserRoleEnum } from "src/user/enums";

export class UserCreateDto {
    @IsString()
    @IsEmail()
    @MaxLength(255)
    email: string;

    @IsString()
    password: string;

    @IsString()
    avatar?: string

    @IsString()
    @IsOptional()
    linkedInHandler?: string

    @IsString()
    @IsOptional()
    twitterHandler?: string

    @IsString()
    @MaxLength(255)
    firstName: string;

    @IsString()
    @MaxLength(255)
    lastName: string;

    @IsString()
    @IsOptional()
    locale?: string;

    @IsBoolean()
    @IsOptional()
    active?: boolean;

    @IsEnum(UserRoleEnum)
    role?: UserRoleEnum
}