import { Status } from 'generated/prisma/client';
import { CampaignEntity } from 'src/campaigns/entities/campaign.entity';
import { UserEntity } from 'src/users/entities/user.entity';

export class OngEntity {
  id: number;
  about?: string;
  bio?: string;
  coverImageUrl?: string;
  isVerified?: boolean;
  mission?: string;
  name?: string;
  phoneNumber?: string;
  profileImageUrl?: string;
  servicesNumber?: bigint;
  supportsNumber?: bigint;
  vision?: string;
  status: Status;
  email?: string;
  website?: string;
  location?: string;
  latitude?: number;
  longitude?: number;
  createdAt: Date;
  updatedAt?: Date;
  userId: number;

  user?: UserEntity;
  Campaign?: CampaignEntity[];

  constructor(partial: Partial<OngEntity>) {
    Object.assign(this, partial);
  }
}
