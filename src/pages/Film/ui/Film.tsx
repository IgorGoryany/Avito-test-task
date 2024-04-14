import { PageWrapper } from '@/components/layout';
import { Container } from '@/components/ui';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as cls from './Film.module.scss';
import { type Film as IFilm } from '@/components/Filmslist';
import { fetchOptions } from '@/consts';

interface FilmDetails extends IFilm {
  alternativeName: string;
  ageRating: number;
  shortDescription: string;
  countries: Array<{ name: string }>;
  slogan: string;
  rating: {
    kp: number;
    imdb: number;
  };
  budget: {
    currency: string;
    value: number;
  };
}

const Film = () => {
  const { id } = useParams();
  const [film, setFilm] = useState<FilmDetails>();

  useEffect(() => {
    if (id) {
      fetch(`https://api.kinopoisk.dev/v1.4/movie/${id}`, fetchOptions)
        .then(async (response) => await response.json())
        .then((response) => {
          console.log(response);
          setFilm(response);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  if (!id) return null;
  if (!film) return null;

  return (
    <PageWrapper>
      <Container className={cls.filmContainer}>
        <div className={cls.filmContainer__image}>
          <img src={film.poster.url} alt="" />
        </div>
        <div className={cls.filmContainer__info}>
          <h1>{film.name}</h1>
          <h2>
            {film.alternativeName} {film?.ageRating}+
          </h2>
          <p>{film.shortDescription}</p>

          <p className={cls.about}>О фильме</p>
          <div>
            <div className={cls.about__item}>
              <span className={cls.key}>год производства</span>
              <span>{film.year}</span>
            </div>
            <div className={cls.about__item}>
              <span className={cls.key}>страна</span>
              <span>{film.countries.map(({ name }) => name).join(', ')}</span>
            </div>
            <div className={cls.about__item}>
              <span className={cls.key}>жанр</span>
              <span>{film.genres.map(({ name }) => name).join(', ')}</span>
            </div>
            <div className={cls.about__item}>
              <span className={cls.key}>слоган</span>
              <span>{film.slogan || '__'}</span>
            </div>
            <div className={cls.about__item}>
              <span className={cls.key}>рейтинг</span>
              <span>
                кинопоиск: {film.rating.kp}, imdb: {film.rating.imdb}
              </span>
            </div>
            {film.budget.currency && (
              <div className={cls.about__item}>
                <span className={cls.key}>бюджет</span>
                <span>{film.budget.currency + film.budget.value}</span>
              </div>
            )}
            <div className={cls.about__item}>
              <span className={cls.key}></span>
              <span></span>
            </div>
          </div>
        </div>
      </Container>
    </PageWrapper>
  );
};

export default Film;
