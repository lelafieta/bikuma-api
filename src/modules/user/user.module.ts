import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { UserService } from './application/use-cases/create-user.use-case';
import { UserController } from './presentation/user.controller';
import { PrismaUserRepository } from './Infrastructure/prisma/prisma-user.repository';

@Module({
  imports: [PrismaModule],
  providers: [
    UserService,
    PrismaUserRepository,
    { provide: 'UserRepository', useClass: PrismaUserRepository }, // ✅ Corrigido
  ],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
