import { CampaignRepository } from '../../domain/repositories/campaign.repository';
import { CreateCampaignDto } from '../dto/create-campaign.dto';
import { Campaign } from '../../domain/entities/campaign.entity';

export class CreateCampaignUseCase {
  constructor(private readonly repository: CampaignRepository) {}

  async execute(dto: CreateCampaignDto): Promise<Campaign> {
    const now = new Date();

    const campaign = new Campaign(
      dto.id ?? 0,
      dto.title ?? null,
      dto.description ?? null,
      dto.beneficiaryName ?? null,
      dto.fundraisingGoal ?? 0,
      dto.fundsRaised ?? 0,
      dto.imageCoverUrl ?? null,
      dto.institution ?? null,
      dto.location ?? null,
      dto.latitude ?? null,
      dto.longitude ?? null,
      dto.numberOfContributions ?? 0,
      dto.phoneNumber ?? null,
      dto.priority ?? 0,
      dto.endDate ?? null,
      dto.startDate ?? null,
      dto.isUrgent ?? false,
      dto.isActivate ?? true,
      dto.campaignType ?? null,
      dto.currency ?? 'AOA',
      dto.birth ?? null,
      dto.categoryId ?? null,
      dto.ongId ?? null,
      dto.userId ?? null,
      now,
      now,
    );

    return this.repository.create(campaign);
  }
}
