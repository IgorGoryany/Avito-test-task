import cn from 'classnames';
import * as cls from './Button.module.scss';
import { forwardRef, type ComponentProps } from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
  size?: 's' | 'm' | 'l';
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props: ButtonProps, ref) {
    const { className, children, ...restProps } = props;
    return (
      <button className={cn(cls.button)} {...restProps} ref={ref}>
        {children}
      </button>
    );
  },
);
