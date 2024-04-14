import { AppLink, Card } from '@/components/ui';
import * as cls from './FilmCard.module.scss';
import cn from 'classnames';
import { memo } from 'react';

interface FilmCardProps {
  src: string;
  title: string;
  year: string;
  mainGenre: string;
  rate: string | number;
  id: string;
}
export const FilmCard = memo(function FilmCard(props: FilmCardProps) {
  const { src, title, year, mainGenre, id } = props;
  return (
    <AppLink to={`/${id}`}>
      <Card className={cn(cls.filmCard)}>
        <img src={src} alt="image" />
        <h3>{title}</h3>
        <p>
          {year}, {mainGenre}
        </p>
      </Card>
    </AppLink>
  );
});
