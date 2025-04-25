import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(dto: UserDto): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        firstName: dto.firstName,
        lastName: dto.lastName,
        fullName: dto.fullName,
        email: dto.email,
        role: dto.role,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return user;
  }
}
