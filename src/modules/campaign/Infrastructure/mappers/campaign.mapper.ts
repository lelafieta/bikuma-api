import { Campaign as PrismaCampaign } from '@prisma/client';
import { Campaign } from '../../domain/entities/campaign.entity';

export class CampaignMapper {
  static toDomain(raw: PrismaCampaign): Campaign {
    return new Campaign(
      raw.id,
      raw.title,
      raw.description,
      raw.beneficiaryName,
      raw.fundraisingGoal,
      raw.fundsRaised,
      raw.imageCoverUrl,
      raw.institution,
      raw.location,
      raw.latitude,
      raw.longitude,
      raw.numberOfContributions,
      raw.phoneNumber,
      raw.priority ?? 0,
      raw.endDate,
      raw.startDate,
      raw.isUrgent ?? false,
      raw.isActivate ?? false,
      raw.campaignType,
      raw.currency,
      raw.birth,
      raw.categoryId,
      raw.ongId,
      raw.userId,
      raw.createdAt,
      raw.updatedAt,
    );
  }

  static toPersistence(campaign: Campaign): PrismaCampaign {
    return {
      id: campaign.id ?? 0,
      title: campaign.title,
      description: campaign.description,
      beneficiaryName: campaign.beneficiaryName,
      fundraisingGoal: campaign.fundraisingGoal,
      fundsRaised: campaign.fundsRaised,
      imageCoverUrl: campaign.imageCoverUrl,
      institution: campaign.institution,
      location: campaign.location,
      latitude: campaign.latitude,
      longitude: campaign.longitude,
      numberOfContributions: campaign.numberOfContributions,
      phoneNumber: campaign.phoneNumber,
      priority: campaign.priority,
      endDate: campaign.endDate,
      startDate: campaign.startDate,
      isUrgent: campaign.isUrgent,
      isActivate: campaign.isActivate,
      campaignType: campaign.campaignType,
      currency: campaign.currency,
      birth: campaign.birth,
      categoryId: campaign.categoryId,
      ongId: campaign.ongId,
      userId: campaign.userId,
      createdAt: campaign.createdAt,
      updatedAt: campaign.updatedAt,
    };
  }
}
