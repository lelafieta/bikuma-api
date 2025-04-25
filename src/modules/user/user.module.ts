import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/prisma/prisma.module'; // Supondo que você tenha um módulo Prisma
import { UserService } from './application/use-cases/create-user.use-case';
import { UserController } from './presentation/user.controller';
import { PrismaUserRepository } from './Infrastructure/prisma/prisma-user.repository';

@Module({
  imports: [PrismaModule],
  providers: [
    UserService,
    { provide: 'PrismaCampaignRepository', useClass: PrismaUserRepository },
  ],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
