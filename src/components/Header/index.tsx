import React, { useState } from 'react';
import Button from '@Components/Button';
import { STORIES, FEATURES, PRICING } from '@/routes';
import Link from 'next/link';
import Logo from '../../../public/images/Logo.svg';
import { StyledHeader, Hamburger, LinkContainer, Links, HeaderInner, Overlay } from './styled';

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <StyledHeader data-testid="header">
      <Overlay isActive={isExpanded} />
      <HeaderInner>
        <Logo />
        <Hamburger isExpanded={isExpanded} onClick={handleClick}>
          <div />
          <div />
        </Hamburger>
        <LinkContainer isExpanded={isExpanded}>
          <Links>
            <Link href={STORIES}>
              <a>Stories</a>
            </Link>
            <Link href={FEATURES}>
              <a>Features</a>
            </Link>
            <Link href={PRICING}>
              <a>Pricing</a>
            </Link>
          </Links>
          <Button theme="dark" text="Get an invite" action={() => console.log('hello')} />
        </LinkContainer>
      </HeaderInner>
    </StyledHeader>
  );
};

export default Header;
