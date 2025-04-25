import { CampaignRepository } from '../../domain/repositories/campaign.repository';
import { CreateCampaignDto } from '../dto/create-campaign.dto';
import { Campaign } from '../../domain/entities/campaign.entity';

export class CreateCampaignUseCase {
  constructor(private readonly repository: CampaignRepository) {}

  async execute(dto: CreateCampaignDto): Promise<Campaign> {
    const campaign = new Campaign(
      crypto.randomUUID(),
      dto.title,
      dto.description,
      dto.ongId,
      dto.categoryId,
      'ACTIVE',
      new Date(),
    );
    return this.repository.create(campaign);
  }
}
