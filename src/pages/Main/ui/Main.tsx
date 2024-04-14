import { FilmsList } from '@/components/Filmslist';
import { type Film } from '@/components/Filmslist/FilmsList';
import { PageWrapper } from '@/components/layout';
import { Button, Container, Input } from '@/components/ui';
import { fetchOptions } from '@/consts';
import { useDebounce } from '@/hooks';
import { useCallback, useEffect, useState } from 'react';
import * as cls from './Main.module.scss';

const Main = () => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');
  const [films, setFilms] = useState<Film[]>([]);

  const debouncedSetSearch = useDebounce((search: string) => {
    setSearch(search);
    setPage(1);
  }, 500);

  const handleChange = (value: string) => {
    setValue(value);
    debouncedSetSearch(value);
  };

  const onClickNextPage = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  const onClickPrevPage = useCallback(() => {
    setPage((prevPage) => prevPage - 1);
  }, []);

  useEffect(() => {
    if (search) {
      const fixedSearch = search.replace(/\+/g, '%2B').replace(/ /g, '+');

      fetch(
        `https://api.kinopoisk.dev/v1.4/movie/search?page=${page}&limit=20&query=${fixedSearch}`,
        fetchOptions,
      )
        .then(async (response) => await response.json())
        .then((data) => {
          setFilms([...data.docs]);
        });
    } else {
      fetch(
        `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=20`,
        fetchOptions,
      )
        .then(async (response) => await response.json())
        .then((data) => {
          setFilms([...data.docs]);
        });
    }
  }, [page, search]);

  return (
    <PageWrapper>
      <Container>
        <Input
          value={value}
          onChange={handleChange}
          className={cls.searchInput}
        />
        <FilmsList films={films} />
        <div className={cls.buttonContainer}>
          {page > 1 && (
            <Button onClick={onClickPrevPage}>предыдущая страница</Button>
          )}
          <Button onClick={onClickNextPage}>следующая страница</Button>
        </div>
      </Container>
    </PageWrapper>
  );
};

export default Main;
