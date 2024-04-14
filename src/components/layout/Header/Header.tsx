import cn from 'classnames';
import * as cls from './Header.module.scss';
import { AppLink, Container } from '@/components/ui';

const LINKS = [
  {
    to: '/',
    title: 'главная',
  },
  {
    to: '/',
    title: 'рандомный фильм',
  },
  {
    to: '/',
    title: 'конкретный фильм',
  },
];

export const Header = () => {
  return (
    <header className={cn(cls.header)}>
      <Container className={cls.container}>
        {LINKS.map((link, i) => (
          <AppLink key={i} to={link.to} underlined>
            {link.title}
          </AppLink>
        ))}
      </Container>
    </header>
  );
};
