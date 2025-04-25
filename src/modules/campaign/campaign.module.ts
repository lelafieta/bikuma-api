import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { CampaignController } from './presentation/campaign.controller';
import { CampaignMapper } from './infraestrutura/mappers/campaign.mapper';
import { PrismaCampaignRepository } from './infraestrutura/prisma/prisma-campaign.repository';
import { CreateCampaignUseCase } from './application/use-cases/create-campaign.use-case';
import { GetCampaignsUseCase } from './application/use-cases/get-campaigns.use-case';

@Module({
  imports: [PrismaModule],
  controllers: [CampaignController],
  providers: [
    // Mapper
    CampaignMapper,

    // Repository
    {
      provide: 'CampaignRepository',
      useClass: PrismaCampaignRepository,
    },

    // Use Cases
    CreateCampaignUseCase,
    GetCampaignsUseCase,
  ],
})
export class CampaignModule {}
