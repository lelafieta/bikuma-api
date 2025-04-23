import { IsEmail, IsEnum, IsOptional, IsString, Length } from 'class-validator';

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export class CreateUserDto {
  @IsOptional()
  @IsString()
  @Length(1, 50)
  firstName?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  lastName?: string;

  @IsOptional()
  @IsString()
  fullName?: string;

  @IsEmail()
  email: string;

  @IsEnum(Role)
  role: Role;
}
