import { forwardRef, type ComponentProps } from 'react';
import * as cls from './Container.module.scss';
import cn from 'classnames';

interface ContainerProps extends ComponentProps<'div'> {}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  function Container(props, ref) {
    const { className, children, ...restProps } = props;
    return (
      <div className={cn(cls.container, className)} ref={ref} {...restProps}>
        {children}
      </div>
    );
  },
);
