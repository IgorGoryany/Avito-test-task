import { lazy } from 'react';

export const FilmLazy = lazy(async () => await import('./Film'));
