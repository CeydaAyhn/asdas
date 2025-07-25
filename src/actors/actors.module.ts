import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actor } from './entities/actor.entity';
import { ActorsService } from './actors.service';
import { ActorsController } from './actors.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Actor], 'moviesConnection')],
  providers: [ActorsService],
  controllers: [ActorsController],
})
export class ActorsModule {}
