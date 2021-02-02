import React from 'react';
import { StyledHero, ImageContainer, ContentContainer, Gradient } from './styled';
import theme from '@Common/theme';

interface HeroProps {
  mobileImageUrl: string;
  tabletImageUrl: string;
  desktopImageUrl: string;
  caption?: string;
  title: string;
  perex: string;
}

const Hero = ({
  mobileImageUrl,
  tabletImageUrl,
  desktopImageUrl,
  caption,
  title,
  perex,
}: HeroProps) => (
  <>
    <StyledHero>
      <ImageContainer>
        <picture>
          <source srcSet={desktopImageUrl} media={`(min-width:${theme.breakpoints.large})`} />
          <source srcSet={tabletImageUrl} media={`(min-width:${theme.breakpoints.medium})`} />
          <img src={mobileImageUrl} alt="Hero image" />
        </picture>
      </ImageContainer>
      <ContentContainer>
        {caption && <span>{caption}</span>}
        <h1>{title}</h1>
        <p>{perex}</p>
      </ContentContainer>
      <Gradient />
    </StyledHero>
  </>
);
export default Hero;
