// src/movies/movies.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Film } from './entities/film.entity';
import { Actor } from '../actors/entities/actor.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Film, 'moviesConnection')
    private filmRepository: Repository<Film>,

    @InjectRepository(Actor, 'moviesConnection')
    private actorRepository: Repository<Actor>,
  ) {}

  async findAll(): Promise<Film[]> {
    return this.filmRepository.find({ relations: ['actors'] });
  }

  async findById(id: number): Promise<Film | null> {
    return this.filmRepository.findOne({
      where: { id },
      relations: ['actors'],
    });
  }

  async findByActor(actorId: number): Promise<Film[]> {
    const actor = await this.actorRepository.findOne({
      where: { id: actorId },
      relations: ['films'],
    });
    return actor ? actor.films : [];
  }
}
