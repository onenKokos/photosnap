import React from 'react';
import { StyledPromotionCard } from './styled';

export interface PromotionCardProps {
  title: string;
  text: string;
  image: string;
}

const PromotionCard = ({ title, text, image }: PromotionCardProps) => (
  <StyledPromotionCard>
    <img src={image} alt={`Promotion logo - ${title}`} />
    <h3>{title}</h3>
    <p>{text}</p>
  </StyledPromotionCard>
);

export default PromotionCard;
