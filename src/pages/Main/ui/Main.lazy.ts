import { lazy } from 'react';

export const MainLazy = lazy(async () => await import('./Main'));
