// src/actors/entities/actor.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Film } from '../../movies/entities/film.entity';

@Entity({ name: 'actors' })
export class Actor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Çoktan çoğa ilişki Film ile
  @ManyToMany(() => Film, film => film.actors)
  films: Film[];
}
