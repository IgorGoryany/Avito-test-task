import { type ComponentPropsWithoutRef } from 'react';
import cn from 'classnames';
import * as cls from './Card.module.scss';

export const Card = (props: ComponentPropsWithoutRef<'div'>) => {
  const { className, children, ...restProps } = props;
  return (
    <div className={cn(cls.card, className)} {...restProps}>
      {children}
    </div>
  );
};
