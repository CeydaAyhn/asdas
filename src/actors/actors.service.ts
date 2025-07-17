// src/actors/actors.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Actor } from './entities/actor.entity';

@Injectable()
export class ActorsService {
  constructor(
    @InjectRepository(Actor, 'moviesConnection') // <-- connection adı eklendi
    private actorRepository: Repository<Actor>,
  ) {}

  async findAll(): Promise<Actor[]> {
    return this.actorRepository.find({ relations: ['films'] });
  }

  async findById(id: number): Promise<Actor | null> {
    return this.actorRepository.findOne({
      where: { id },
      relations: ['films'],
    });
  }
}
