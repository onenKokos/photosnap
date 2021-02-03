import React from 'react';
import { InnerContainer, StyledPromotionContainer } from './styled';
import PromotionCard, { PromotionCardProps } from '@Components/PromotionCard';

export interface PromotionContainerProps {
  items: PromotionCardProps[];
}

const PromotionContainer = ({ items }: PromotionContainerProps) => (
  <StyledPromotionContainer>
    <InnerContainer>
      {items.map((item: PromotionCardProps) => (
        <PromotionCard {...item} key={`k__${item.title}`} />
      ))}
    </InnerContainer>
  </StyledPromotionContainer>
);

export default PromotionContainer;
