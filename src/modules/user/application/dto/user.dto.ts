import {
  IsString,
  IsEmail,
  IsOptional,
  IsDate,
  IsInt,
  MaxLength,
} from 'class-validator';

export class UserDto {
  @IsInt({ message: 'O ID deve ser um número inteiro válido.' })
  id: number;

  @IsOptional()
  @IsString({ message: 'O primeiro nome deve ser uma string.' })
  @MaxLength(50, { message: 'O primeiro nome não pode exceder 50 caracteres.' })
  firstName: string | null;

  @IsOptional()
  @IsString({ message: 'O sobrenome deve ser uma string.' })
  @MaxLength(50, { message: 'O sobrenome não pode exceder 50 caracteres.' })
  lastName: string | null;

  @IsOptional()
  @IsString({ message: 'O nome completo deve ser uma string.' })
  @MaxLength(100, {
    message: 'O nome completo não pode exceder 100 caracteres.',
  })
  fullName: string | null;

  @IsEmail({}, { message: 'Por favor, forneça um e-mail válido.' })
  email: string;

  @IsString({ message: 'O papel deve ser uma string.' })
  role: string;

  @IsDate({ message: 'A data de criação deve ser uma data válida.' })
  createdAt: Date;

  @IsDate({ message: 'A data de atualização deve ser uma data válida.' })
  updatedAt: Date;
}
