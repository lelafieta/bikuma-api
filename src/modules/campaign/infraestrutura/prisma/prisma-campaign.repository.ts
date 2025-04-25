import { Injectable } from '@nestjs/common';
import { CampaignRepository } from '../../domain/repositories/campaign.repository';
import { Campaign } from '../../domain/entities/campaign.entity';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class PrismaCampaignRepository implements CampaignRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(c: Campaign): Promise<Campaign> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const created = await this.({
      data: {
        id: c.id,
        title: c.title,
        description: c.description,
        categoryId: c.categoryId,
        ongId: c.ongId,
        status: c.status,
        createdAt: c.createdAt,
      },
    });
    return new Campaign(
      created.id,
      created.title,
      created.description,
      created.ongId,
      created.categoryId,
      created.status,
      created.createdAt,
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
          c.ongId,
          c.categoryId,
          c.status,
          c.createdAt,
        ),
    );
  }

  async findById(id: string): Promise<Campaign | null> {
    const c = await this.prisma.campaign.findUnique({ where: { id } });
    if (!c) return null;
    return new Campaign(
      c.id,
      c.title,
      c.description,
      c.ongId,
      c.categoryId,
      c.status,
      c.createdAt,
    );
  }
}
