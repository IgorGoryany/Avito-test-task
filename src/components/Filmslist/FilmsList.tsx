import * as cls from './FilmsList.module.scss';
import cn from 'classnames';
import { FilmCard } from '../FilmCard';
import { memo } from 'react';

export interface Film {
  id: string;
  name: string;
  year: string;
  poster: {
    url: string;
  };
  genres: Array<{ name: string }>;
  rating: {
    kp: number;
  };
}
interface FilmsListProps {
  films: Film[];
}

export const FilmsList = memo(function FilmsList(props: FilmsListProps) {
  const { films } = props;
  return (
    <div className={cn(cls.filmsList)}>
      {films.map((film) => (
        <FilmCard
          key={film.id}
          src={film.poster.url}
          title={film.name}
          year={film.year}
          mainGenre={film.genres[0].name}
          rate={film.rating.kp}
          id={film.id}
        />
      ))}
    </div>
  );
});
