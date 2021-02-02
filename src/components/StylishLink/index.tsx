import React from 'react';
import Link from 'next/link';
import { StyledLink } from './styled';
import Arrow from '../../../public/images/Arrow.svg';

interface StylishLinkProps {
  text: string;
  url: string;
  theme: 'light' | 'dark';
  background: boolean;
}

const StylishLink = ({ text, url, theme, background }: StylishLinkProps) => (
  <Link href={url}>
    <StyledLink theme={theme} background={background}>
      {text}
      <Arrow />
    </StyledLink>
  </Link>
);

export default StylishLink;
