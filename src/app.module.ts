import { Module } from '@nestjs/common';
import { CampaignModule } from './modules/campaign/campaign.module';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './core/prisma/prisma.module';
import { PrismaService } from './core/prisma/prisma.service';

@Module({
  imports: [CampaignModule, UserModule, PrismaModule],
  controllers: [],
  exports: [PrismaService],
  providers: [PrismaModule, PrismaService],
})
export class AppModule {}
