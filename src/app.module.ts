import { Module } from '@nestjs/common';
import { CampaignModule } from './modules/campaign/campaign.module';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './core/prisma/prisma.module';

@Module({
  imports: [CampaignModule, UserModule, PrismaModule],
  controllers: [],
  providers: [PrismaModule],
})
export class AppModule {}
