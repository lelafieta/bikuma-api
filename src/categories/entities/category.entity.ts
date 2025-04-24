import { CampaignEntity } from 'src/campaigns/entities/campaign.entity';

export class CategoryEntity {
  id: number;
  name: string;
  description?: string;
  createdAt: Date;
  Campaign?: CampaignEntity[];

  constructor(partial: Partial<CategoryEntity>) {
    Object.assign(this, partial);
  }
}
