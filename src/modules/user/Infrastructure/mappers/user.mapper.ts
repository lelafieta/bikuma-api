import { User as PrismaUser } from '@prisma/client';
import { User } from '../../domain/entities/user.entity'; // Supondo que o User seja uma entidade de domínio

export class UserMapper {
  // Converte o objeto Prisma User para a entidade de domínio User
  static toDomain(raw: PrismaUser): User {
    return new User(
      raw.id,
      raw.firstName,
      raw.lastName,
      raw.fullName,
      raw.email,
      raw.role,
      raw.createdAt,
      raw.updatedAt,
    );
  }

  // Converte a entidade de domínio User para um formato de dados que pode ser persistido no banco (Prisma User)
  static toPersistence(user: User): PrismaUser {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
