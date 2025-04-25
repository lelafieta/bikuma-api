import { Campaign } from '../entities/campaign.entity';

export abstract class CampaignRepository {
  abstract create(campaign: Campaign): Promise<Campaign>;
  abstract findAll(): Promise<Campaign[]>;
  abstract findById(id: string): Promise<Campaign | null>;
}
