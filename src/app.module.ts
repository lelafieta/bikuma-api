import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { OngsModule } from './ongs/ongs.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [UsersModule, ProfilesModule, CampaignsModule, OngsModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
