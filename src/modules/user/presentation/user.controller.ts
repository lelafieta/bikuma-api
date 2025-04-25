import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  NotFoundException,
  Put,
  Delete,
} from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { UserDto } from '../application/dto/user.dto';
import { PrismaUserRepository } from '../Infrastructure/prisma/prisma-user.repository';

@Controller('users')
export class UserController {
  constructor(private readonly userRepository: PrismaUserRepository) {}

  // Criar um novo usuário
  @Post()
  async create(@Body() userDto: UserDto): Promise<User> {
    const data: Prisma.UserCreateInput = {
      firstName: userDto.firstName,
      lastName: userDto.lastName,
      fullName: userDto.fullName,
      email: userDto.email,
      role: userDto.role,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return this.userRepository.create(data);
  }

  // Buscar todos os usuários
  @Get()
  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  // Buscar usuário pelo ID
  @Get(':id')
  async findById(@Param('id') id: number): Promise<User> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  // Atualizar um usuário
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() userDto: UserDto,
  ): Promise<User> {
    const existingUser = await this.userRepository.findById(id);
    if (!existingUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    const data: Prisma.UserUpdateInput = {
      firstName: userDto.firstName,
      lastName: userDto.lastName,
      fullName: userDto.fullName,
      email: userDto.email,
      role: userDto.role,
      updatedAt: new Date(),
    };

    return this.userRepository.update(id, data);
  }

  // Deletar um usuário
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<User> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return this.userRepository.delete(id);
  }
}
