import React from 'react';
import Header from '@Components/Typography/Headers';
import StylishLink from '@Components/StylishLink';
import theme from '@Common/theme';
import { StyledImageSeparator, InnerContainer, ImageContainer } from './styled';

export interface ImageSeparatorProps {
  text: string;
  buttonUrl: string;
  buttonText: string;
  mobileBackground: string;
  tabletBackground: string;
  desktopBackground: string;
}

const ImageSeparator = ({
  text,
  desktopBackground,
  mobileBackground,
  tabletBackground,
  buttonUrl,
  buttonText,
}: ImageSeparatorProps) => (
  <StyledImageSeparator>
    <ImageContainer>
      <picture>
        <source srcSet={desktopBackground} media={`(min-width:${theme.breakpoints.large})`} />
        <source srcSet={tabletBackground} media={`(min-width:${theme.breakpoints.medium})`} />
        <img src={mobileBackground} alt="Separator Image" />
      </picture>
    </ImageContainer>
    <InnerContainer>
      <Header theme="light" text={text} size="large" />
      <StylishLink background={false} text={buttonText} theme="light" url={buttonUrl} />
    </InnerContainer>
  </StyledImageSeparator>
);

export default ImageSeparator;
