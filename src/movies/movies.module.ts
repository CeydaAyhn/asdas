// src/movies/movies.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from './entities/film.entity';
import { Actor } from '../actors/entities/actor.entity';
import { ActorsModule } from '../actors/actors.module'; // Bu satırı ekleyin
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Film, Actor], 'moviesConnection'),
    ActorsModule, // Bu satırı ekleyin
  ],
  providers: [MoviesService],
  controllers: [MoviesController],
})
export class MoviesModule {}