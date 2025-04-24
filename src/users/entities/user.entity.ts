import { Role } from 'generated/prisma/client';
import { CampaignEntity } from 'src/campaigns/entities/campaign.entity';
import { OngEntity } from 'src/ongs/entities/ong.entity';
import { ProfileEntity } from 'src/profiles/entities/profile.entity';

export class UserEntity {
  id: number;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  email: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
  profile?: ProfileEntity;
  campaign?: CampaignEntity[];
  ong?: OngEntity[];

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
