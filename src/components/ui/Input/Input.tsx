import { memo, type ComponentProps } from 'react';
import cn from 'classnames';
import * as cls from './Input.module.scss';

type InputAttributes = Omit<ComponentProps<'input'>, 'onChange'>;
export interface InputProps extends InputAttributes {
  onChange?: (value: string) => void;
  value?: string;
}
export const Input = memo(function Input(props: InputProps) {
  const { onChange, value, className, ...restProps } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <input
      onChange={handleChange}
      value={value}
      className={cn(cls.input, className)}
      {...restProps}
    />
  );
});
