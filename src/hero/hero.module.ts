import { Module } from '@nestjs/common';
import { HeroesController } from './hero.controller';
import { HeroService } from './hero.service';

@Module({
  providers: [HeroService],
  controllers: [HeroesController],
})
export class HeroModule {}
