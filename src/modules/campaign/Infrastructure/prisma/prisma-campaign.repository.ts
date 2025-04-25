import { Injectable } from '@nestjs/common';
import { CampaignRepository } from '../../domain/repositories/campaign.repository';
import { Campaign } from '../../domain/entities/campaign.entity';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class PrismaCampaignRepository implements CampaignRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(c: Campaign): Promise<Campaign> {
    const created = await this.prisma.campaign.create({
      data: {
        title: c.title,
        description: c.description,
        beneficiaryName: c.beneficiaryName,
        fundraisingGoal: c.fundraisingGoal,
        fundsRaised: c.fundsRaised,
        imageCoverUrl: c.imageCoverUrl,
        institution: c.institution,
        location: c.location,
        latitude: c.latitude,
        longitude: c.longitude,
        numberOfContributions: c.numberOfContributions,
        phoneNumber: c.phoneNumber,
        priority: c.priority,
        endDate: c.endDate,
        startDate: c.startDate,
        isUrgent: c.isUrgent,
        isActivate: c.isActivate,
        campaignType: c.campaignType,
        currency: c.currency,
        birth: c.birth,
        categoryId: c.categoryId,
        ongId: c.ongId,
        userId: c.userId,
      },
    });

    return new Campaign(
      created.id,
      created.title,
      created.description,
      created.beneficiaryName,
      created.fundraisingGoal,
      created.fundsRaised,
      created.imageCoverUrl,
      created.institution,
      created.location,
      created.latitude,
      created.longitude,
      created.numberOfContributions,
      created.phoneNumber,
      created.priority ?? 0,
      created.endDate,
      created.startDate,
      created.isUrgent ?? false,
      created.isActivate ?? true,
      created.campaignType,
      created.currency,
      created.birth,
      created.categoryId,
      created.ongId,
      created.userId,
      created.createdAt,
      created.updatedAt,
    );
  }

  async findAll(): Promise<Campaign[]> {
    const campaigns = await this.prisma.campaign.findMany();
    return campaigns.map(
      (c) =>
        new Campaign(
          c.id,
          c.title,
          c.description,
          c.beneficiaryName,
          c.fundraisingGoal,
          c.fundsRaised,
          c.imageCoverUrl,
          c.institution,
          c.location,
          c.latitude,
          c.longitude,
          c.numberOfContributions,
          c.phoneNumber,
          c.priority ?? 0,
          c.endDate,
          c.startDate,
          c.isUrgent ?? false,
          c.isActivate ?? true,
          c.campaignType,
          c.currency,
          c.birth,
          c.categoryId,
          c.ongId,
          c.userId,
          c.createdAt,
          c.updatedAt,
        ),
    );
  }

  async findById(id: number): Promise<Campaign | null> {
    const c = await this.prisma.campaign.findUnique({ where: { id } });
    if (!c) return null;
    return new Campaign(
      c.id,
      c.title,
      c.description,
      c.beneficiaryName,
      c.fundraisingGoal,
      c.fundsRaised,
      c.imageCoverUrl,
      c.institution,
      c.location,
      c.latitude,
      c.longitude,
      c.numberOfContributions,
      c.phoneNumber,
      c.priority ?? 0,
      c.endDate,
      c.startDate,
      c.isUrgent ?? false,
      c.isActivate ?? true,
      c.campaignType,
      c.currency,
      c.birth,
      c.categoryId,
      c.ongId,
      c.userId,
      c.createdAt,
      c.updatedAt,
    );
  }
}
