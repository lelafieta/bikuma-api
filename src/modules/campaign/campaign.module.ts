import { Module } from '@nestjs/common';
import { CampaignController } from './presentation/campaign.controller';
import { CampaignMapper } from './Infrastructure/mappers/campaign.mapper';
import { PrismaCampaignRepository } from './Infrastructure/prisma/prisma-campaign.repository';
import { CreateCampaignUseCase } from './application/use-cases/create-campaign.use-case';
import { GetCampaignsUseCase } from './application/use-cases/get-campaigns.use-case';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [PrismaModule], // 👈 IMPORTANTE
  controllers: [CampaignController],
  providers: [
    CampaignMapper,
    PrismaCampaignRepository,

    {
      provide: 'CampaignRepository',
      useClass: PrismaCampaignRepository,
    },

    CreateCampaignUseCase,
    GetCampaignsUseCase,
  ],
})
export class CampaignModule {}
