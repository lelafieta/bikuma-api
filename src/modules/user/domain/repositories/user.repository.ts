import { User } from '../entities/user.entity';

export abstract class UserRepository {
  abstract create(campaign: User): Promise<User>;
  abstract findAll(): Promise<User[]>;
  abstract findById(id: number): Promise<User | null>;
}
