import { CampaignRepository } from '../../domain/repositories/campaign.repository';
import { Campaign } from '../../domain/entities/campaign.entity';

export class GetCampaignsUseCase {
  constructor(private readonly repository: CampaignRepository) {}

  async execute(): Promise<Campaign[]> {
    return this.repository.findAll();
  }
}
