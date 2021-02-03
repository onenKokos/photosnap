import React from 'react';
import { StyledHero, ImageContainer, ContentContainer, ContentContainerInner } from './styled';
import theme from '@Common/theme';
import Header from '@Components/Typography/Headers';
import Paragraph from '@Components/Typography/Paragraph';
import StylishLink from '@Components/StylishLink';
import texts from '@/common/texts';

interface HeroProps {
  mobileImageUrl: string;
  tabletImageUrl: string;
  desktopImageUrl: string;
  caption?: string;
  title: string;
  perex: string;
  info?: Credentials;
}

interface Credentials {
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
        <ContentContainerInner>
          {caption && <span>{caption}</span>}
          <Header theme="light" size="large" text={title} />
          <Paragraph theme="light" text={perex} />
          <StylishLink
            url="/"
            theme="light"
            text={texts.en.homepage.buttonText}
            background={false}
          />
        </ContentContainerInner>
      </ContentContainer>
    </StyledHero>
  </>
);
export default Hero;
