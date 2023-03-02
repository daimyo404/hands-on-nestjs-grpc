import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HeroById, Hero } from './hero';

@Controller()
export class HeroesController {
  @GrpcMethod('HeroesService', 'FindOne')
  findOne(data: HeroById): Hero {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
