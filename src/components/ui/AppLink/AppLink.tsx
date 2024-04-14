import { NavLink, type NavLinkProps } from 'react-router-dom';
import cn from 'classnames';
import * as cls from './AppLink.module.scss';

interface AppLinkProps extends NavLinkProps {
  underlined?: boolean;
  variant?: 'black' | 'white';
}

export const AppLink = (props: AppLinkProps) => {
  const {
    className,
    children,
    underlined,
    variant = 'white',
    ...restProps
  } = props;

  return (
    <NavLink
      className={(isActive) =>
        cn(
          cls.appLink,
          { [cls.underlined]: isActive && underlined },
          cls[variant],
          className,
        )
      }
      {...restProps}
    >
      {children}
    </NavLink>
  );
};
