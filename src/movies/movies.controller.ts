// src/movies/movies.controller.ts
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Film } from './entities/film.entity';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  async findAll(): Promise<Film[]> {
    return this.moviesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Film | null> {
    return this.moviesService.findById(id);
  }

  @Get('actor/:actorId')
  async findByActor(@Param('actorId', ParseIntPipe) actorId: number): Promise<Film[]> {
    return this.moviesService.findByActor(actorId);
  }
}
