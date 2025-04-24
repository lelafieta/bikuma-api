import { CategoryEntity } from 'src/categories/entities/category.entity';
import { OngEntity } from 'src/ongs/entities/ong.entity';
import { UserEntity } from 'src/users/entities/user.entity';

export class CampaignEntity {
  id: number;
  title?: string;
  description?: string;
  beneficiaryName?: string;
  fundraisingGoal?: number;
  fundsRaised?: number;
  imageCoverUrl?: string;
  institution?: string;
  location?: string;
  latitude?: number;
  longitude?: number;
  numberOfContributions?: number;
  phoneNumber?: string;
  priority?: number;
  endDate?: Date;
  startDate?: Date;
  isUrgent?: boolean;
  isActivate?: boolean;
  campaignType?: string;
  currency: string;
  birth?: Date;
  categoryId?: number;
  ongId?: number;
  userId?: number;
  createdAt: Date;
  updatedAt: Date;

  Category?: CategoryEntity;
  User?: UserEntity;
  Ong?: OngEntity;

  constructor(partial: Partial<CampaignEntity>) {
    Object.assign(this, partial);
  }
}
