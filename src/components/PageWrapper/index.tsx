import { FC, ReactNode } from 'react';
import { PageWrapper as StyledWrapper } from './styled';

interface PageWrapperProps {
  children?: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }: PageWrapperProps) => (
  <StyledWrapper>{children}</StyledWrapper>
);

export default PageWrapper;
