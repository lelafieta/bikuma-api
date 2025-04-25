import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCampaignDto } from '../application/dto/create-campaign.dto';
import { CreateCampaignUseCase } from '../application/use-cases/create-campaign.use-case';
import { PrismaCampaignRepository } from '../infraestrutura/prisma/prisma-campaign.repository';

@Controller('campaigns')
export class CampaignController {
  private readonly createCampaign: CreateCampaignUseCase;

  constructor(private readonly repo: PrismaCampaignRepository) {
    this.createCampaign = new CreateCampaignUseCase(this.repo);
  }

  @Post()
  async create(@Body() dto: CreateCampaignDto) {
    return this.createCampaign.execute(dto);
  }

  @Get()
  async getAll() {
    return this.repo.findAll();
  }
}
