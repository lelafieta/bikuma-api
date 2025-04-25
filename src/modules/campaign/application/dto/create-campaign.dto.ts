export class CreateCampaignDto {
  id?: number;
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
  currency?: string;
  birth?: Date;
  categoryId?: number;
  ongId?: number;
  userId?: number;
}
