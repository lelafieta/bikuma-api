import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { User } from '@prisma/client';
import { Prisma } from '@prisma/client'; // Importando o Prisma para trabalhar com tipos

@Injectable()
export class PrismaUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  // Criar um novo usuário
  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  // Encontrar um usuário por ID
  async findById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  // Encontrar um usuário por email
  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  // Atualizar um usuário
  async update(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  // Deletar um usuário
  async delete(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  // Listar todos os usuários
  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
