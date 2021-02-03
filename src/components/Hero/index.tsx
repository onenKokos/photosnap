import React from 'react';
import { StyledHero, ImageContainer, ContentContainer, ContentContainerInner } from './styled';
import theme from '@Common/theme';
import Header from '@Components/Typography/Headers';
import Paragraph from '@Components/Typography/Paragraph';
import StylishLink from '@Components/StylishLink';

const invertTheme = (theme: 'dark' | 'light') => (theme === 'dark' ? 'light' : 'dark');

export interface HeroProps {
  mobileImageUrl: string;
  tabletImageUrl: string;
  desktopImageUrl: string;
  caption?: string;
  title: string;
  perex: string;
  info?: Credentials;
  alignText: 'left' | 'right';
  buttonText: string;
  heroTheme: 'light' | 'dark';
  buttonLink: string;
}

export interface Credentials {
  author: string;
  date: string;
}

const Hero = ({
  mobileImageUrl,
  tabletImageUrl,
  desktopImageUrl,
  caption,
  title,
  perex,
  info,
  alignText,
  buttonText,
  heroTheme,
  buttonLink,
}: HeroProps) => (
  <>
    <StyledHero data-testid="hero" alignText={alignText} heroTheme={heroTheme}>
      <ImageContainer alignText={alignText}>
        <picture>
          <source srcSet={desktopImageUrl} media={`(min-width:${theme.breakpoints.large})`} />
          <source srcSet={tabletImageUrl} media={`(min-width:${theme.breakpoints.medium})`} />
          <img src={mobileImageUrl} alt="Hero image" />
        </picture>
      </ImageContainer>
      <ContentContainer>
        <ContentContainerInner>
          {caption && <span>{caption}</span>}
          <Header theme={invertTheme(heroTheme)} size="large" text={title} />
          <Paragraph theme={invertTheme(heroTheme)} text={perex} />
          <StylishLink
            url={buttonLink}
            theme={invertTheme(heroTheme)}
            text={buttonText}
            background={false}
          />
        </ContentContainerInner>
      </ContentContainer>
    </StyledHero>
  </>
);
export default Hero;
