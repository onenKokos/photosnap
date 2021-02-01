import React, { ReactNode } from 'react';
import { PageWrapper as StyledWrapper } from './styled';

export interface PageWrapperProps {
  children: ReactNode;
}

function PageWrapper({ children }: PageWrapperProps) {
  return <StyledWrapper>{children}</StyledWrapper>;
}

export default PageWrapper;
