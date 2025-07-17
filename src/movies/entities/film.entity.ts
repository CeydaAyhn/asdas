// src/movies/entities/film.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Actor } from '../../actors/entities/actor.entity';

@Entity({ name: 'films' })
export class Film {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  genre: string;

  @Column({ name: 'release_year' })
  releaseYear: number;

  @Column()
  director: string;

  @Column({ name: 'imdb_rating', type: 'float' })
  imdbRating: number;

  @Column({ type: 'text' })
  description: string;

  @Column()
  duration: number; // dakika olarak düşünüyorum

  @Column()
  language: string;

  @Column()
  country: string;

  @Column({ name: 'poster_url' })
  posterUrl: string;

  // Çoktan çoğa ilişki Actor ile
  @ManyToMany(() => Actor, actor => actor.films, { cascade: true })
  @JoinTable({
    name: 'film_actors', // join tablosu adı
    joinColumn: { name: 'film_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'actor_id', referencedColumnName: 'id' },
  })
  actors: Actor[];
}
