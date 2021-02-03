import React from 'react';
import { StyledImageCardContainer } from './styled';
import ImageCard, { ImageCardProps } from '@Components/ImageCard';

interface StyledImageCardContainerProps {
  images: ImageCardProps[];
}

const ImageCardContainer = ({ images }: StyledImageCardContainerProps) => (
  <StyledImageCardContainer>
    {images.map((image: ImageCardProps) => (
      <ImageCard {...image} key={`k__${image.image.alt}`} />
    ))}
  </StyledImageCardContainer>
);

export default ImageCardContainer;
