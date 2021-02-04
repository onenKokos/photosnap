import React from 'react';
import { useRouter } from 'next/router';
import { StyledPriceCard, Description, Per, Price, Title } from './styled';
import Button from '@Components/Button';
import texts from '@Common/texts';

export interface PriceCardProps {
  title: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  buttonText: string;
  buttonUrl: string;
  theme: 'dark' | 'light';
  activePlan?: 'monthly' | 'yearly';
}

const PriceCard = ({
  title,
  description,
  monthlyPrice,
  yearlyPrice,
  buttonText,
  buttonUrl,
  theme,
  activePlan,
}: PriceCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`${buttonUrl}`);
  };

  const invertTheme = (theme: 'dark' | 'light') => {
    return theme === 'dark' ? 'light' : 'dark';
  };

  return (
    <StyledPriceCard theme={theme}>
      <Title theme={theme}>{title}</Title>
      <Description>{description}</Description>
      <Price theme={theme}>
        {activePlan && activePlan === 'yearly' ? `$${yearlyPrice}` : `$${monthlyPrice}`}
      </Price>
      <Per>
        {activePlan && activePlan === 'yearly'
          ? `${texts.en.pages.pricing.priceCard_One.perYear}`
          : `${texts.en.pages.pricing.priceCard_One.perMonth}`}
      </Per>
      <Button text={buttonText} action={handleClick} theme={invertTheme(theme)} />
    </StyledPriceCard>
  );
};

export default PriceCard;
