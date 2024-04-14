import cn from 'classnames';
import * as cls from './Header.module.scss';
console.log(cls);

export const Header = () => {
  return (
    <header className={cn(cls.header)}>
      <h1 className={cls.title}>Avito Test Task</h1>
    </header>
  );
};
