import { UserEntity } from 'src/users/entities/user.entity';

export class ProfileEntity {
  id: number;
  avatarUrl?: string;
  bio?: string;
  location?: string;
  isVerified?: boolean;
  phoneNumber?: string;
  donationQtd: bigint;
  campaignQtd: bigint;
  userId: number;
  createdAt: Date;
  updatedAt: Date;

  user?: UserEntity;

  constructor(partial: Partial<ProfileEntity>) {
    Object.assign(this, partial);
  }
}
