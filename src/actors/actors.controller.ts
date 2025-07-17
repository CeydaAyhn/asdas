// src/actors/actors.controller.ts
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { Actor } from './entities/actor.entity';

@Controller('actors')
export class ActorsController {
  constructor(private actorsService: ActorsService) {}

  @Get()
  async findAll(): Promise<Actor[]> {
    return this.actorsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Actor | null> {
    return this.actorsService.findById(id);
  }
}
