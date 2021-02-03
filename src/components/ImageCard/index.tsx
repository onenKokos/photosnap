import React from 'react';
import { Image, Link } from '@Common/interfaces';
import { StyledImageCard, ImageContainer, ContentContainer } from './styled';
import theme from '@Common/theme';
import StylishLink from '@Components/StylishLink';

export interface ImageCardProps {
  date: string;
  title: string;
  author: string;
  link: Link;
  image: Image;
}

const ImageCard = ({ date, title, author, link, image }: ImageCardProps) => (
  <StyledImageCard>
    <ImageContainer>
      <picture>
        <source srcSet={image.urlDesktop} media={`(min-width:${theme.breakpoints.large})`} />
        <source srcSet={image.urlTablet} media={`(min-width:${theme.breakpoints.medium})`} />
        <img src={image.urlMobile} alt={image.alt} />
      </picture>
    </ImageContainer>
    <ContentContainer>
      <span>{date}</span>
      <span>{title}</span>
      <span>{`by ${author}`}</span>
      <hr />
      <StylishLink text={link.text} url={link.url} theme="light" background={false} />
    </ContentContainer>
  </StyledImageCard>
);

export default ImageCard;