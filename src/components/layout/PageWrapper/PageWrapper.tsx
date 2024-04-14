import { memo, type ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

export const PageWrapper = memo(function PageWrapper(props: PageWrapperProps) {
  const { children } = props;

  return <main>{children}</main>;
});
