import cn from 'classnames';
import * as cls from './Button.module.scss';
import { forwardRef, type ComponentProps } from 'react';

type ButtonVariant = 'clear' | 'contained' | 'outlined';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props: ButtonProps, ref) {
    const { className, children, variant = 'contained', ...restProps } = props;

    return (
      <button
        className={cn(cls.button, cls[variant], className)}
        {...restProps}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);
